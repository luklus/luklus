import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import AppLogo from '~/components/AppLogo.vue'

describe('AppLogo', () => {
  it('renders the brand mark', async () => {
    const component = await mountSuspended(AppLogo)

    expect(component.text()).toBe('ll.me')
  })

  it('uses a monospace font', async () => {
    const component = await mountSuspended(AppLogo)

    expect(component.get('div').classes()).toContain('font-mono')
  })
})
