import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PageSkills from '~/components/content/PageSkills.vue'

const list = [
  { header: 'Frontend', items: ['Vue', 'Nuxt', 'TypeScript'] },
  { header: 'Tooling', items: ['Vite', 'ESLint'] }
]

describe('PageSkills', () => {
  it('renders the section title', async () => {
    const component = await mountSuspended(PageSkills, {
      props: { title: 'Skills', list }
    })

    expect(component.text()).toContain('Skills')
  })

  it('renders a section per group header', async () => {
    const component = await mountSuspended(PageSkills, {
      props: { title: 'Skills', list }
    })

    const headers = component.findAll('h2').map((h) => h.text())
    expect(headers).toEqual(['Frontend', 'Tooling'])
  })

  it('renders a badge for every skill item', async () => {
    const component = await mountSuspended(PageSkills, {
      props: { title: 'Skills', list }
    })

    const text = component.text()
    for (const item of ['Vue', 'Nuxt', 'TypeScript', 'Vite', 'ESLint']) {
      expect(text).toContain(item)
    }
  })

  it('exposes the anchor id for in-page navigation', async () => {
    const component = await mountSuspended(PageSkills, {
      props: { title: 'Skills', list }
    })

    expect(component.find('#skills').exists()).toBe(true)
  })

  it('renders gracefully with no list provided', async () => {
    const component = await mountSuspended(PageSkills, {
      props: { title: 'Skills' }
    })

    expect(component.findAll('section')).toHaveLength(0)
    expect(component.text()).toContain('Skills')
  })
})
