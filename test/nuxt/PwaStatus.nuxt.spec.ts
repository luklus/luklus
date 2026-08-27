import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import PwaStatus from '~/components/PwaStatus.vue'

describe('PwaStatus', () => {
  it('renders nothing by default when PWA prompt is inactive', async () => {
    const component = await mountSuspended(PwaStatus)

    expect(component.text()).toBe('')
    expect(component.findComponent({ name: 'UCard' }).exists()).toBe(false)
  })
})
