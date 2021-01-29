import { shallowMount } from '@vue/test-utils'
import AppsHeader from '@/components/apps/AppsHeader.vue'

describe('AppsHeader', () => {
  test('is AppsHeader a Vue instance', () => {
    const wrapper = shallowMount(AppsHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})
