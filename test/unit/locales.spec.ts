import { describe, expect, it } from 'vitest'

import en from '../../i18n/locales/en.json'
import pl from '../../i18n/locales/pl.json'

/**
 * Pure unit tests (node environment) for the i18n message catalogs.
 * These don't need a Nuxt runtime — they just assert the JSON files stay in sync.
 */
describe('i18n locales', () => {
  const enKeys = Object.keys(en).sort()
  const plKeys = Object.keys(pl).sort()

  it('en and pl expose exactly the same keys', () => {
    expect(plKeys).toEqual(enKeys)
  })

  it('has no missing keys in either locale', () => {
    const missingInPl = enKeys.filter((key) => !(key in pl))
    const missingInEn = plKeys.filter((key) => !(key in en))

    expect(missingInPl).toEqual([])
    expect(missingInEn).toEqual([])
  })

  it('has no empty translations', () => {
    for (const [key, value] of Object.entries(en)) {
      expect(value, `en.${key} should not be empty`).toBeTruthy()
    }

    for (const [key, value] of Object.entries(pl)) {
      expect(value, `pl.${key} should not be empty`).toBeTruthy()
    }
  })

  it('exposes the keys used by the navigation menu', () => {
    for (const key of ['approach', 'experience', 'skills', 'projects', 'ai']) {
      expect(en).toHaveProperty(key)
      expect(pl).toHaveProperty(key)
    }
  })
})
