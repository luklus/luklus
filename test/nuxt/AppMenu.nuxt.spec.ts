import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import AppMenu from '~/components/AppMenu.vue'

describe('AppMenu', () => {
  it('renders all five navigation sections', async () => {
    const component = await mountSuspended(AppMenu)
    const text = component.text()

    for (const label of ['Approach', 'Experience', 'Skills', 'Projects', 'AI']) {
      expect(text).toContain(label)
    }
  })

  it('numbers the sections starting from 01', async () => {
    const component = await mountSuspended(AppMenu)
    const text = component.text()

    expect(text).toContain('01')
    expect(text).toContain('05')
  })
})
