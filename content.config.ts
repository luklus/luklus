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
      highlighted: z.array(z.string()).optional(),
      items: z.array(z.string())
    })
  ),
  projectsTitle: z.string(),
  projectsList: z.array(
    z.object({
      badges: z.array(z.string()).optional(),
      description: z.string(),
      featured: z.boolean().optional(),
      image: z.string().optional(),
      title: z.string(),
      to: z.string()
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
  ),
  contactInfo: z
    .object({
      email: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
      location: z.string().optional(),
      phone: z.string().optional(),
      website: z.string().optional()
    })
    .optional(),
  cvSummary: z.string().optional(),
  education: z
    .array(
      z.object({
        dateEnd: z.string().optional(),
        dateStart: z.string().optional(),
        degree: z.string(),
        school: z.string()
      })
    )
    .optional(),
  languages: z
    .array(
      z.object({
        level: z.string(),
        name: z.string()
      })
    )
    .optional(),
  rodoClause: z.string().optional()
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
