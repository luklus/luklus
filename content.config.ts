import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const commonSchema = z.object({
  heroDescription: z.string(),
  heroHeadline: z.string(),
  heroTitle: z.string(),
  approachTitle: z.string(),
  approachDescription: z.string(),
  approachList: z.array(
    z.object({
      label: z.string(),
      description: z.string(),
      value: z.string().optional()
    })
  ),
  experienceTitle: z.string(),
  experienceList: z.array(
    z.object({
      date: z.string().optional(),
      dateStart: z.string(),
      dateEnd: z.string(),
      description: z.string(),
      descriptionList: z.array(z.string()).optional(),
      icon: z.string(),
      title: z.string()
    })
  ),
  skillsTitle: z.string(),
  skillsList: z.array(
    z.object({
      header: z.string(),
      items: z.array(z.string())
    })
  ),
  projectsTitle: z.string(),
  projectsList: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      to: z.string(),
      image: z.string().optional()
    })
  ),
  aiDescription: z.string(),
  aiTitle: z.string(),
  aiList: z.array(
    z.object({
      label: z.string(),
      description: z.string(),
      value: z.string().optional()
    })
  )
})

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      schema: commonSchema,
      source: {
        include: 'en/**',
        prefix: ''
      },
      type: 'page'
    }),
    content_pl: defineCollection({
      schema: commonSchema,
      source: {
        include: 'pl/**',
        prefix: ''
      },
      type: 'page'
    })
  }
})
