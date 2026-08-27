import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { gateway, streamText } from 'ai'
import { z } from 'zod'
import { careerContexts } from '~~/shared/data/career-context'

const messageSchema = z.object({
  // UIMessage can also contain AI SDK metadata such as `step-start`. The API
  // only needs text parts, so those non-text parts must not invalidate history.
  parts: z.array(z.unknown()).min(1),
  role: z.enum(['user', 'assistant'])
})

const requestSchema = z
  .object({
    locale: z.enum(['en', 'pl']),
    messages: z.array(messageSchema).min(1).max(6)
  })
  .refine(({ messages }) => messages.at(-1)?.role === 'user', {
    message: 'The last message must be from the user.'
  })

function getTextParts(parts: unknown[]) {
  return parts.flatMap((part) => {
    const parsed = z.object({ text: z.string(), type: z.literal('text') }).safeParse(part)
    return parsed.success ? [parsed.data.text] : []
  })
}

let rateLimits: { daily: Ratelimit; short: Ratelimit } | undefined

function getRateLimits() {
  if (rateLimits) return rateLimits

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    throw createError({
      statusCode: 503,
      statusMessage: 'CAREER_CHAT_UNAVAILABLE'
    })
  }

  const redis = new Redis({ token, url })
  rateLimits = {
    daily: new Ratelimit({
      analytics: false,
      limiter: Ratelimit.fixedWindow(12, '24 h'),
      prefix: 'career-chat:daily',
      redis
    }),
    short: new Ratelimit({
      analytics: false,
      limiter: Ratelimit.fixedWindow(6, '10 m'),
      prefix: 'career-chat:short',
      redis
    })
  }

  return rateLimits
}

export default defineEventHandler(async (event) => {
  const parsed = requestSchema.safeParse(await readBody(event))

  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: 'CAREER_CHAT_INVALID_REQUEST' })
  }

  if (!process.env.AI_GATEWAY_API_KEY) {
    throw createError({ statusCode: 503, statusMessage: 'CAREER_CHAT_UNAVAILABLE' })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  const { daily, short } = getRateLimits()
  const [shortResult, dailyResult] = await Promise.all([short.limit(ip), daily.limit(ip)])

  if (!shortResult.success || !dailyResult.success) {
    const reset = Math.max(shortResult.reset, dailyResult.reset)
    setResponseHeader(event, 'Retry-After', Math.max(1, Math.ceil((reset - Date.now()) / 1000)))
    throw createError({
      statusCode: 429,
      statusMessage: 'CAREER_CHAT_LIMIT_REACHED'
    })
  }

  const messages = parsed.data.messages
    .map(({ parts, role }) => ({ content: getTextParts(parts).join('\n'), role }))
    .filter(({ content }) => content.length > 0)

  const lastMessage = messages.at(-1)
  const hasInvalidMessage = messages.some(({ content, role }) =>
    role === 'user' ? content.length > 300 : content.length > 2_400
  )

  if (lastMessage?.role !== 'user' || hasInvalidMessage) {
    throw createError({ statusCode: 400, statusMessage: 'CAREER_CHAT_INVALID_REQUEST' })
  }

  const result = streamText({
    instructions: `You are the AI Career Assistant for Łukasz Łusiak's portfolio. Answer in ${parsed.data.locale === 'pl' ? 'Polish' : 'English'}.

Use only the verified portfolio context below. Do not invent or infer facts. If the answer is not in the context, say that you do not have that information and suggest contacting Łukasz by email. Keep answers concise, practical, and under 300 tokens.

Verified portfolio context:
${careerContexts[parsed.data.locale]}`,
    maxOutputTokens: 300,
    messages,
    model: gateway('openai/gpt-5.4-nano')
  })

  return result.toUIMessageStreamResponse({
    onError: () => 'CAREER_CHAT_UNAVAILABLE'
  })
})
