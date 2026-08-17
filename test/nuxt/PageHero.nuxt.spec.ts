import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PageHero from '~/components/content/PageHero.vue'

const props = {
  title: 'Building scalable frontend applications',
  description: 'Senior Frontend Engineer with 8+ years of experience.',
  headline: 'OPEN TO NEW ROLES'
}

describe('PageHero', () => {
  it('renders the title, description and headline', async () => {
    const component = await mountSuspended(PageHero, { props })
    const text = component.text()

    expect(text).toContain(props.title)
    expect(text).toContain(props.description)
    expect(text).toContain(props.headline)
  })

  it('renders the hero diagram with accessible role and label', async () => {
    const component = await mountSuspended(PageHero, { props })
    const svg = component.find('svg')

    expect(svg.exists()).toBe(true)
    expect(svg.attributes('role')).toBe('img')
    expect(svg.attributes('aria-label')).toBeTruthy()
  })

  it('links to phone, LinkedIn and GitHub', async () => {
    const component = await mountSuspended(PageHero, { props })
    const hrefs = component.findAll('a').map((a) => a.attributes('href'))

    expect(hrefs).toContain('tel:+48606688439')
    expect(hrefs.some((href) => href?.includes('linkedin.com'))).toBe(true)
    expect(hrefs).toContain('https://github.com/luklus')
  })
})
