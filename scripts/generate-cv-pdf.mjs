import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { createServer } from 'node:net'
import { basename, dirname, resolve } from 'node:path'
import process from 'node:process'

import { chromium } from 'playwright-core'

const DEFAULT_TIMEOUT_MS = 120_000

function printHelp() {
  console.log(`Generate the printable CV route as a two-page A4 PDF.

Usage:
  pnpm cv:pdf [options]

Options:
  --locale <pl|en>       CV language (default: pl)
  --output <path>        Output file path
  --base-url <url>       Use an already running app instead of starting Nuxt
  --help                 Show this help

Examples:
  pnpm cv:pdf
  pnpm cv:pdf --locale en
  pnpm cv:pdf --output output/pdf/my-cv.pdf
  pnpm cv:pdf --base-url http://127.0.0.1:3000`)
}

function readOptions(args) {
  const options = {
    baseUrl: undefined,
    locale: 'pl',
    output: undefined
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]

    if (argument === '--help') {
      printHelp()
      process.exit(0)
    }

    if (!['--base-url', '--locale', '--output'].includes(argument)) {
      throw new Error(`Unknown option: ${argument}`)
    }

    const value = args[index + 1]
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for ${argument}`)
    }

    if (argument === '--base-url') options.baseUrl = value
    if (argument === '--locale') options.locale = value
    if (argument === '--output') options.output = value
    index += 1
  }

  if (!['pl', 'en'].includes(options.locale)) {
    throw new Error('Locale must be either "pl" or "en".')
  }

  return options
}

async function getAvailablePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer()

    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const address = server.address()
      if (!address || typeof address === 'string') {
        server.close()
        reject(new Error('Could not allocate a local port.'))
        return
      }

      server.close((error) => {
        if (error) reject(error)
        else resolvePort(address.port)
      })
    })
  })
}

function startNuxt(port) {
  const pnpmCli = process.env.npm_execpath
  const command = pnpmCli ? process.execPath : process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  const args = pnpmCli
    ? [pnpmCli, 'exec', 'nuxt', 'dev', '--host', '127.0.0.1', '--port', String(port)]
    : ['exec', 'nuxt', 'dev', '--host', '127.0.0.1', '--port', String(port)]

  const child = spawn(command, args, {
    cwd: process.cwd(),
    env: {
      ...process.env,
      NO_COLOR: '1'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  })

  let logs = ''
  const remember = (chunk) => {
    logs = `${logs}${chunk}`.slice(-8_000)
  }

  child.stdout.on('data', remember)
  child.stderr.on('data', remember)
  child.getLogs = () => logs

  return child
}

async function waitForApp(baseUrl, child) {
  const deadline = Date.now() + DEFAULT_TIMEOUT_MS

  while (Date.now() < deadline) {
    if (child?.exitCode !== null) {
      throw new Error(`Nuxt exited before it was ready.\n${child.getLogs()}`)
    }

    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(2_000) })
      if (response.ok) return
    } catch {
      // Nuxt is still starting.
    }

    await new Promise((resolveWait) => setTimeout(resolveWait, 250))
  }

  throw new Error(`Nuxt did not become ready within ${DEFAULT_TIMEOUT_MS / 1_000} seconds.`)
}

async function stopProcess(child) {
  if (!child || child.exitCode !== null) return

  child.kill('SIGTERM')
  await Promise.race([
    new Promise((resolveExit) => child.once('exit', resolveExit)),
    new Promise((resolveWait) => setTimeout(resolveWait, 5_000))
  ])

  if (child.exitCode === null) child.kill('SIGKILL')
}

function countPdfPages(pdf) {
  return pdf.toString('latin1').match(/\/Type\s*\/Page\b/g)?.length ?? 0
}

const options = readOptions(process.argv.slice(2))
const outputPath = resolve(
  options.output ?? `output/pdf/Lukasz_Lusiak_CV_${options.locale.toUpperCase()}.pdf`
)
let appProcess
let browser

try {
  let baseUrl = options.baseUrl

  if (!baseUrl) {
    const port = await getAvailablePort()
    baseUrl = `http://127.0.0.1:${port}`
    appProcess = startNuxt(port)
    await waitForApp(baseUrl, appProcess)
  }

  const cvPath = options.locale === 'pl' ? '/pl/cv' : '/cv'
  const cvUrl = new URL(cvPath, baseUrl).toString()

  browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ colorScheme: 'light' })
  await page.emulateMedia({ colorScheme: 'light', media: 'print' })
  await page.goto(cvUrl, { waitUntil: 'networkidle', timeout: DEFAULT_TIMEOUT_MS })
  await page.waitForSelector('.cv-page-2', { state: 'visible' })
  await page.waitForFunction(() => !document.fonts || document.fonts.status === 'loaded')

  const sheetCount = await page.locator('.cv-page').count()
  if (sheetCount !== 2) {
    throw new Error(`Expected two CV sheets, but the page rendered ${sheetCount}.`)
  }

  await mkdir(dirname(outputPath), { recursive: true })
  const pdf = await page.pdf({
    displayHeaderFooter: false,
    format: 'A4',
    path: outputPath,
    preferCSSPageSize: true,
    printBackground: true
  })

  const pageCount = countPdfPages(pdf)
  if (pageCount !== 2) {
    throw new Error(
      `Generated PDF has ${pageCount} pages instead of 2. Check the CV print layout before attaching it.`
    )
  }

  console.log(
    `Created ${basename(outputPath)} (${options.locale.toUpperCase()}, ${pageCount} pages)`
  )
  console.log(outputPath)
} finally {
  await browser?.close()
  await stopProcess(appProcess)
}
