import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import AppFooter from '~/components/AppFooter.vue'

describe('AppFooter', () => {
  it('renders the call-to-action heading', async () => {
    const component = await mountSuspended(AppFooter)

    expect(component.text()).toContain("Have a project or opportunity? Let's talk.")
  })

  it('links to phone, email, LinkedIn and GitHub', async () => {
    const component = await mountSuspended(AppFooter)
    const hrefs = component.findAll('a').map((a) => a.attributes('href'))

    expect(hrefs).toContain('tel:+48606688439')
    expect(hrefs.some((href) => href?.startsWith('mailto:'))).toBe(true)
    expect(hrefs.some((href) => href?.includes('linkedin.com'))).toBe(true)
    expect(hrefs).toContain('https://github.com/luklus')
  })

  it('opens external profiles in a new tab', async () => {
    const component = await mountSuspended(AppFooter)
    const github = component.findAll('a').find((a) => a.attributes('href') === 'https://github.com/luklus')

    expect(github?.attributes('target')).toBe('_blank')
  })
})
