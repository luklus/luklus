import { fileURLToPath } from 'node:url'

import { $fetch, fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

/**
 * End-to-end tests: build and run the real Nuxt server, then assert the
 * server-rendered output. These run in a plain node environment.
 */
describe('home page (SSR)', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true,
    // Sourcemaps aren't needed for e2e assertions and disabling them avoids a
    // rollup sourcemap-collision edge case during the production test build.
    nuxtConfig: {
      sourcemap: { server: false, client: false }
    }
  })

  it('renders the server-side HTML', async () => {
    const html = await $fetch('/')

    expect(html).toContain('ll.me')
  })

  it('renders the hero content from the content collection', async () => {
    const html = await $fetch('/')

    expect(html).toContain('Building scalable frontend applications')
    expect(html).toContain('FRONTEND DEVELOPER')
  })

  it('renders the navigation sections', async () => {
    const html = await $fetch('/')

    for (const label of ['Approach', 'Experience', 'Skills', 'Projects']) {
      expect(html).toContain(label)
    }
  })

  it('exposes the contact links', async () => {
    const html = await $fetch('/')

    expect(html).toContain('tel:+48606688439')
    expect(html).toContain('github.com/luklus')
  })

  it('serves the page with a 200 status and the default language', async () => {
    const res = await fetch('/')

    expect(res.status).toBe(200)

    const html = await res.text()
    expect(html).toContain('lang="en-US"')
  })
})
