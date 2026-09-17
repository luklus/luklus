import { createServer } from 'node:net'
import { fileURLToPath } from 'node:url'

import { $fetch, fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

async function getAvailablePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer()

    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const address = server.address()

      if (!address || typeof address === 'string') {
        server.close()
        reject(new Error('Unable to allocate a local port for the SSR test server'))
        return
      }

      server.close((error) => {
        if (error) reject(error)
        else resolve(address.port)
      })
    })
  })
}

/**
 * End-to-end tests: build and run the real Nuxt server, then assert the
 * server-rendered output. These run in a plain node environment.
 */
describe('home page (SSR)', { timeout: 300000 }, async () => {
  const port = await getAvailablePort()

  await setup({
    rootDir: fileURLToPath(new URL('../..', import.meta.url)),
    server: true,
    dev: false,
    port,
    setupTimeout: 180000,
    serverStartTimeout: 60000,
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

    expect(html).toContain(
      'I design and deliver scalable frontend applications with Vue, Nuxt, and AI.'
    )
    expect(html).toContain('FRONTEND ARCHITECT — OPEN TO NEW OPPORTUNITIES')
  })

  it('renders the navigation sections', async () => {
    const html = await $fetch('/')

    for (const label of ['Approach', 'Experience', 'Skills', 'Projects', 'AI']) {
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

    const html = await $fetch('/')
    expect(html).toMatch(/lang="en/i)
  })

  it('renders the CV printable page', async () => {
    const res = await fetch('/cv')
    expect(res.status).toBe(200)

    const html = await res.text()
    expect(html).toContain('Łukasz Łusiak')
    expect(html).toContain('Frontend Architect & Senior Engineer')
  })

  it('renders the Polish portfolio and CV translations', async () => {
    const portfolioHtml = await $fetch('/pl')

    expect(portfolioHtml).toContain(
      'Projektuję i wdrażam skalowalne aplikacje frontendowe z wykorzystaniem Vue, Nuxt i AI.'
    )
    expect(portfolioHtml).toContain('ARCHITEKT FRONTENDU — OTWARTY NA NOWE WYZWANIA')

    const cvResponse = await fetch('/pl/cv')
    expect(cvResponse.status).toBe(200)

    const cvHtml = await cvResponse.text()
    expect(cvHtml).toContain('Architekt frontendu i starszy inżynier')
    expect(cvHtml).toContain('Profil zawodowy')
  })
})
