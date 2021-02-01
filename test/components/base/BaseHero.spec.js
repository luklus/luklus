import { shallowMount } from '@vue/test-utils'
import BaseHero from '@/components/base/BaseHero.vue'

describe('BaseHero', () => {
  test('is BaseHero a Vue instance', () => {
    const wrapper = shallowMount(BaseHero)
    expect(wrapper.vm).toBeTruthy()
  })
})
