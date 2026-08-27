<script lang="ts" setup>
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming } from '@nuxt/ui/utils/ai'
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'
import { DefaultChatTransport, isTextUIPart, type UIMessage } from 'ai'

class CareerChatRequestError extends Error {
  constructor(
    message: string,
    readonly retryAfter?: number,
    readonly status?: number
  ) {
    super(message)
    this.name = 'CareerChatRequestError'
  }
}

const { locale, t } = useI18n()
const { isOpen } = useCareerChat()
const input = ref('')
const markdownPlugins = [shiki()]

const ui = {
  prose: {
    h1: { base: 'my-2 text-xl' },
    h2: { base: 'my-2 text-lg' },
    h3: { base: 'my-2 text-base' },
    h4: { base: 'my-2 text-sm' },
    hr: { base: 'my-2' },
    li: { base: 'my-0.5 leading-6' },
    ol: { base: 'my-2' },
    p: { base: 'my-2 leading-6' },
    pre: { root: 'my-2' },
    table: { root: 'my-2' },
    ul: { base: 'my-2' }
  }
}

const suggestions = computed(() => [
  t('careerAssistant.suggestionExperience'),
  t('careerAssistant.suggestionLeadership'),
  t('careerAssistant.suggestionProjects')
])

const { clearError, error, messages, regenerate, sendMessage, status, stop } = useChat<UIMessage>({
  transport: new DefaultChatTransport({
    api: '/api/career-chat',
    fetch: async (...args) => {
      const response = await fetch(...args)

      if (response.ok) return response

      const payload = (await response
        .clone()
        .json()
        .catch(() => undefined)) as { message?: string; statusMessage?: string } | undefined
      const message = payload?.statusMessage ?? payload?.message ?? 'CAREER_CHAT_UNAVAILABLE'
      const retryAfter = Number(response.headers.get('retry-after'))

      throw new CareerChatRequestError(
        message,
        Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : undefined,
        response.status
      )
    },
    prepareSendMessagesRequest: ({ messages }) => ({
      body: {
        locale: locale.value,
        messages: messages.slice(-6)
      }
    })
  })
})

const isBusy = computed(() => status.value === 'submitted' || status.value === 'streaming')
const canSubmit = computed(() => Boolean(input.value.trim()) && !isBusy.value)

const chatError = computed(() => {
  if (!error.value) return undefined

  const message = error.value.message
  const retryAfter =
    error.value instanceof CareerChatRequestError ? error.value.retryAfter : undefined

  if (message.includes('CAREER_CHAT_LIMIT_REACHED')) {
    return {
      description: retryAfter
        ? t('careerAssistant.limitReachedWithRetry', {
            minutes: Math.max(1, Math.ceil(retryAfter / 60))
          })
        : t('careerAssistant.limitReached'),
      title: t('careerAssistant.limitTitle')
    }
  }

  if (message.includes('CAREER_CHAT_INVALID_REQUEST')) {
    return {
      description: t('careerAssistant.invalidRequest'),
      title: t('careerAssistant.errorTitle')
    }
  }

  return {
    description: t('careerAssistant.unavailable'),
    title: t('careerAssistant.errorTitle')
  }
})

function submit() {
  const text = input.value.trim()

  if (!text || !canSubmit.value) return

  sendMessage({ text })
  input.value = ''
}

function askSuggestion(text: string) {
  input.value = text
  submit()
}

function updateInput(value: string) {
  input.value = value.slice(0, 300)
}

function retry() {
  regenerate()
}
</script>

<template>
  <UModal
    v-model:open="isOpen"
    :ui="{ content: 'w-[calc(100vw-2rem)] max-w-3xl p-0' }"
  >
    <template #content>
      <div class="flex h-[min(42rem,calc(100dvh-2rem))] flex-col overflow-hidden rounded-[inherit]">
        <header
          class="border-default flex items-start justify-between gap-4 border-b px-5 py-4 sm:px-6"
        >
          <div>
            <h2 class="text-default text-base font-semibold">{{ t('careerAssistant.title') }}</h2>
            <p class="text-muted mt-1 text-sm">{{ t('careerAssistant.description') }}</p>
          </div>

          <UButton
            :aria-label="t('careerAssistant.dismiss')"
            color="neutral"
            icon="i-lucide-x"
            variant="ghost"
            @click="isOpen = false"
          />
        </header>

        <UTheme
          class="flex min-h-0 flex-1 flex-col"
          :ui="ui"
        >
          <UChatPalette
            class="h-full"
            :ui="{
              content: 'px-5 py-5 sm:px-6',
              prompt: 'border-t border-default'
            }"
          >
            <div
              v-if="messages.length === 0"
              class="flex flex-1 flex-col justify-center gap-5 py-8"
            >
              <div>
                <p class="text-default font-semibold">{{ t('careerAssistant.emptyTitle') }}</p>
                <p class="text-muted mt-1 text-sm">{{ t('careerAssistant.description') }}</p>
              </div>

              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="suggestion in suggestions"
                  :key="suggestion"
                  :disabled="isBusy"
                  color="neutral"
                  size="sm"
                  variant="soft"
                  @click="askSuggestion(suggestion)"
                >
                  {{ suggestion }}
                </UButton>
              </div>
            </div>

            <UChatMessages
              v-else
              :assistant="{ icon: 'i-lucide-bot' }"
              :messages="messages"
              :status="status"
              :ui="{ root: 'px-0' }"
              :user="{ side: 'left', variant: 'naked' }"
              should-auto-scroll
            >
              <template #content="{ message }">
                <template
                  v-for="(part, index) in message.parts"
                  :key="`${message.id}-${part.type}-${index}`"
                >
                  <template v-if="isTextUIPart(part)">
                    <Markdown
                      v-if="message.role === 'assistant'"
                      class="*:first:mt-0 *:last:mb-0"
                      :plugins="markdownPlugins"
                      :streaming="isPartStreaming(part)"
                      :value="part.text"
                    />
                    <p
                      v-else-if="message.role === 'user'"
                      class="leading-6 whitespace-pre-wrap"
                    >
                      {{ part.text }}
                    </p>
                  </template>
                </template>
              </template>
            </UChatMessages>

            <template #prompt>
              <div class="space-y-4 px-4 py-4">
                <UAlert
                  v-if="chatError"
                  :actions="[
                    { label: t('careerAssistant.retry'), onClick: retry },
                    {
                      label: t('careerAssistant.dismiss'),
                      color: 'neutral',
                      variant: 'ghost',
                      onClick: clearError
                    }
                  ]"
                  :description="chatError.description"
                  :title="chatError.title"
                  color="error"
                  icon="i-lucide-circle-alert"
                  variant="soft"
                />

                <UChatPrompt
                  v-model="input"
                  :error="error"
                  :maxlength="300"
                  :maxrows="4"
                  :placeholder="t('careerAssistant.placeholder')"
                  :rows="1"
                  icon="i-lucide-sparkles"
                  variant="naked"
                  @submit="submit"
                  @update:model-value="updateInput"
                >
                  <template #footer>
                    <span class="text-muted text-xs">
                      {{ input.length }}/300 · {{ t('careerAssistant.limitHint') }}
                    </span>

                    <UChatPromptSubmit
                      :disabled="!canSubmit"
                      :status="status"
                      @reload="retry"
                      @stop="stop"
                    />
                  </template>
                </UChatPrompt>
              </div>
            </template>
          </UChatPalette>
        </UTheme>
      </div>
    </template>
  </UModal>
</template>
