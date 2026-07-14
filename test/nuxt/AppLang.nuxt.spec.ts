import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import AppLang from '~/components/AppLang.vue'

describe('AppLang', () => {
  it('offers the alternate locale as a switch button', async () => {
    const component = await mountSuspended(AppLang)
    const buttons = component.findAll('button')

    // Default locale is `en`, so only the `pl` switch should be shown.
    expect(buttons).toHaveLength(1)
    expect(buttons[0]!.text()).toBe('pl')
  })

  it('does not render the currently active locale', async () => {
    const component = await mountSuspended(AppLang)

    expect(component.text()).not.toContain('en')
  })
})
