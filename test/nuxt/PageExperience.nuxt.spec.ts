import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PageExperience from '~/components/content/PageExperience.vue'

const props = {
  title: 'Experience',
  list: [
    {
      dateStart: '01.2024',
      dateEnd: 'Present',
      description: 'Co-architect and develop large-scale public sector systems.',
      descriptionList: ['Architected modular frontend', 'Spearheaded automated testing'],
      icon: 'i-lucide-briefcase-business',
      title: 'Senior Frontend Engineer · ithouse.co'
    },
    {
      dateStart: '03.2019',
      dateEnd: '01.2024',
      description: 'Led a 5-engineer frontend team delivering enterprise-grade applications.',
      icon: 'i-lucide-briefcase-business',
      title: 'Senior Frontend Developer · Cloudflight'
    }
  ]
}

describe('PageExperience', () => {
  it('renders the section title', async () => {
    const component = await mountSuspended(PageExperience, { props })
    const text = component.text()

    expect(text).toContain(props.title)
    expect(text).toContain('02 /')
  })

  it('renders timeline items with titles and dates', async () => {
    const component = await mountSuspended(PageExperience, { props })
    const text = component.text()

    for (const item of props.list) {
      expect(text).toContain(item.title)
      expect(text).toContain(item.dateStart)
      expect(text).toContain(item.dateEnd)
      expect(text).toContain(item.description)
    }
  })

  it('renders description points list when provided', async () => {
    const component = await mountSuspended(PageExperience, { props })
    const text = component.text()

    expect(text).toContain('Architected modular frontend')
    expect(text).toContain('Spearheaded automated testing')
  })

  it('exposes the anchor id for in-page navigation', async () => {
    const component = await mountSuspended(PageExperience, { props })

    expect(component.find('#experience').exists()).toBe(true)
  })
})
