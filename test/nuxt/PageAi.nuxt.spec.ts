import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PageAi from '~/components/content/PageAi.vue'

const props = {
  title: 'How I Integrate AI into Modern Engineering',
  description: 'AI accelerates delivery as a powerful workflow companion.',
  list: [
    { label: '01', description: 'Architecture & System Planning' },
    { label: '02', description: 'UI Design & Prototyping' },
    { label: '03', description: 'Automated Code Review' }
  ]
}

describe('PageAi', () => {
  it('renders the title and description', async () => {
    const component = await mountSuspended(PageAi, { props })
    const text = component.text()

    expect(text).toContain(props.title)
    expect(text).toContain(props.description)
    expect(text).toContain('05 /')
  })

  it('renders one item per AI workflow step', async () => {
    const component = await mountSuspended(PageAi, { props })

    expect(component.findAll('li')).toHaveLength(props.list.length)
  })

  it('renders each step label and description', async () => {
    const component = await mountSuspended(PageAi, { props })
    const text = component.text()

    for (const item of props.list) {
      expect(text).toContain(item.label)
      expect(text).toContain(item.description)
    }
  })

  it('exposes the anchor id for in-page navigation', async () => {
    const component = await mountSuspended(PageAi, { props })

    expect(component.find('#ai').exists()).toBe(true)
  })
})
