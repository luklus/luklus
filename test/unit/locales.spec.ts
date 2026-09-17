import { describe, expect, it } from 'vitest'

import en from '../../i18n/locales/en.json'
import pl from '../../i18n/locales/pl.json'

function flattenMessages(messages: unknown, prefix = ''): Record<string, string> {
  if (typeof messages === 'string') {
    return { [prefix]: messages }
  }

  if (!messages || typeof messages !== 'object' || Array.isArray(messages)) {
    throw new TypeError(`Translation at "${prefix || '<root>'}" must be a string or object`)
  }

  return Object.entries(messages).reduce<Record<string, string>>((flattened, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    return Object.assign(flattened, flattenMessages(value, path))
  }, {})
}

/**
 * Pure unit tests (node environment) for the i18n message catalogs.
 * These don't need a Nuxt runtime — they just assert the JSON files stay in sync.
 */
describe('i18n locales', () => {
  const enMessages = flattenMessages(en)
  const plMessages = flattenMessages(pl)
  const enKeys = Object.keys(enMessages).sort()
  const plKeys = Object.keys(plMessages).sort()

  it('en and pl expose exactly the same nested keys', () => {
    expect(plKeys).toEqual(enKeys)
  })

  it('has no missing keys in either locale', () => {
    const missingInPl = enKeys.filter((key) => !(key in plMessages))
    const missingInEn = plKeys.filter((key) => !(key in enMessages))

    expect(missingInPl).toEqual([])
    expect(missingInEn).toEqual([])
  })

  it('has no empty translations', () => {
    for (const [key, value] of Object.entries(enMessages)) {
      expect(value, `en.${key} should not be empty`).toBeTruthy()
    }

    for (const [key, value] of Object.entries(plMessages)) {
      expect(value, `pl.${key} should not be empty`).toBeTruthy()
    }
  })

  it('exposes the keys used by the navigation menu', () => {
    for (const key of ['approach', 'experience', 'skills', 'projects', 'ai']) {
      expect(en).toHaveProperty(key)
      expect(pl).toHaveProperty(key)
    }
  })

  it('exposes the labels used by the localized CV', () => {
    for (const key of ['engineeringApproach', 'loadingCv', 'professionalRole', 'summary']) {
      expect(en).toHaveProperty(key)
      expect(pl).toHaveProperty(key)
    }
  })
})
