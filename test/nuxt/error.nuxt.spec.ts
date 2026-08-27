import { createError } from '#app'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import ErrorPage from '~/error.vue'

describe('Error Page (error.vue)', () => {
  it('renders 404 error page with headline, actions, and schematic', async () => {
    const component = await mountSuspended(ErrorPage, {
      props: {
        error: createError({
          statusCode: 404,
          statusMessage: 'Page Not Found',
          message: 'Page Not Found'
        })
      }
    })

    const text = component.text()
    expect(text).toContain('404')
    expect(text).toContain('ERR_ROUTE_NOT_FOUND')
    expect(component.findComponent({ name: 'ErrorSchematic' }).exists()).toBe(true)
  })

  it('renders 500 error state correctly', async () => {
    const component = await mountSuspended(ErrorPage, {
      props: {
        error: createError({
          statusCode: 500,
          statusMessage: 'Internal Server Error',
          message: 'Internal Server Error'
        })
      }
    })

    const text = component.text()
    expect(text).toContain('500')
    expect(text).toContain('ERR_INTERNAL_SERVER')
  })
})
