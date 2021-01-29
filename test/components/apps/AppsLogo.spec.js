import { shallowMount } from '@vue/test-utils'
import AppsLogo from '@/components/apps/AppsLogo.vue'

describe('AppsLogo', () => {
  test('is AppsLogo a Vue instance', () => {
    const wrapper = shallowMount(AppsLogo, {
      mocks: {
        $t: (text) => text,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
