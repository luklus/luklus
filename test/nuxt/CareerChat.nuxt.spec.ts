import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import CareerChat from '~/components/CareerChat.vue'

describe('CareerChat', () => {
  it('renders localized assistant information when opened', async () => {
    const { isOpen } = useCareerChat()
    isOpen.value = true

    await mountSuspended(CareerChat)
    const text = document.body.textContent ?? ''

    expect(text).toContain('Ask about me · AI assistant')
    expect(text).toContain('How can I help?')
    expect(text).toContain('What experience does Łukasz have with Nuxt?')

    isOpen.value = false
  })
})
