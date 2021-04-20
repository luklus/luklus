import { shallowMount } from '@vue/test-utils'
import AppsFooter from '@/components/apps/AppsFooter.vue'

describe('AppsFooter', () => {
  test('is AppsFooter a Vue instance', () => {
    const wrapper = shallowMount(AppsFooter, {
      mocks: {
        $t: (text) => text,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
