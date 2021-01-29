import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/index.vue'

describe('HomePage', () => {
  test('is HomePage a Vue instance', () => {
    const wrapper = shallowMount(HomePage)
    expect(wrapper.vm).toBeTruthy()
  })
})
