import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PageApproach from '~/components/content/PageApproach.vue'

const props = {
  title: 'How I Build Software',
  description: 'A consistent process from discovery to a shipped product.',
  list: [
    { label: '01', description: 'Discovery' },
    { label: '02', description: 'Architecture' },
    { label: '03', description: 'Design' }
  ]
}

describe('PageApproach', () => {
  it('renders the title and description', async () => {
    const component = await mountSuspended(PageApproach, { props })
    const text = component.text()

    expect(text).toContain(props.title)
    expect(text).toContain(props.description)
  })

  it('renders one list item per approach step', async () => {
    const component = await mountSuspended(PageApproach, { props })

    expect(component.findAll('li')).toHaveLength(props.list.length)
  })

  it('renders each step label and description', async () => {
    const component = await mountSuspended(PageApproach, { props })
    const text = component.text()

    for (const item of props.list) {
      expect(text).toContain(item.label)
      expect(text).toContain(item.description)
    }
  })

  it('exposes the anchor id for in-page navigation', async () => {
    const component = await mountSuspended(PageApproach, { props })

    expect(component.find('#approach').exists()).toBe(true)
  })
})
