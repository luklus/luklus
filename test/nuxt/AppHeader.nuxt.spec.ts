import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import AppHeader from '~/components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders logo and CV link by default', async () => {
    const component = await mountSuspended(AppHeader)
    const text = component.text()

    expect(text).toContain('CV')
  })
})
