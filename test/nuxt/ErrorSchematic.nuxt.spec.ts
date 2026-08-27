import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import ErrorSchematic from '~/components/ErrorSchematic.vue'

describe('ErrorSchematic', () => {
  it('renders routing error svg diagram with accessible label', async () => {
    const component = await mountSuspended(ErrorSchematic)
    const svg = component.find('svg')

    expect(svg.exists()).toBe(true)
    expect(svg.attributes('role')).toBe('img')
    expect(component.text()).toContain('null:404')
    expect(component.text()).toContain('root: /')
    expect(component.text()).toContain('cv: /cv')
  })
})
