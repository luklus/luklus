import { shallowMount } from '@vue/test-utils'
import AppsColorModeToggler from '@/components/apps/AppsColorModeToggler.vue'

describe('AppsColorModeToggler', () => {
  test('is AppsColorModeToggler a Vue instance', () => {
    const wrapper = shallowMount(AppsColorModeToggler, {
      mocks: {
        $colorMode: {
          preference: 'light',
        },
      },
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
