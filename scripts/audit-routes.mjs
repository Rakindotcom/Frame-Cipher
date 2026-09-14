import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const baseURL = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3100'
const output = path.resolve(process.env.AUDIT_OUTPUT || 'artifacts/site-audit')
const widths = (process.env.AUDIT_WIDTHS || '360,390,768,1440').split(',').map(Number)
const manifest = JSON.parse(await readFile('.next/prerender-manifest.json', 'utf8'))
const routes = [...new Set([
  ...Object.keys(manifest.routes).filter((route) => !route.startsWith('/_') && !/\.(xml|txt)$/.test(route)),
  '/projects',
  ...['website', 'long-video', 'short-video', 'seo', 'paid-ads', 'branding'].map((view) => `/projects?view=${view}`),
])].sort()
const selected = process.env.AUDIT_ROUTES ? process.env.AUDIT_ROUTES.split(',') : routes
await mkdir(output, { recursive: true })

const browser = await chromium.launch({ headless: true })
const results = []
const internalLinks = new Set()
const localImages = new Set()
const screenshotPaths = []
let cursor = 0

async function inspectPage(page) {
  return page.evaluate(() => {
    const main = document.querySelector('main')
    const width = window.innerWidth
    const issues = []
    const text = main?.textContent || ''
    const badCopy = /Notes? for you before publishing|\[PLACEHOLDER|৳\s*X[\dX,.]*|up to X pages|_{5,}|\uFFFD/gi
    const leaked = [...text.matchAll(badCopy)].map((match) => text.slice(Math.max(0, match.index - 50), match.index + 180))
    const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')]
    for (const script of schemas) {
      try { JSON.parse(script.textContent) } catch { issues.push('Invalid JSON-LD') }
      if (/Notes? for you before publishing|\[PLACEHOLDER|৳X/.test(script.textContent)) issues.push('Draft copy in JSON-LD')
    }
    const isVisible = (element) => {
      const style = getComputedStyle(element)
      return element.getClientRects().length && style.visibility !== 'hidden' && style.display !== 'none'
    }
    const intentionallyClipped = (element) => {
      for (let parent = element; parent && parent !== document.body; parent = parent.parentElement) {
        const style = getComputedStyle(parent)
        if (parent.getAttribute('aria-hidden') === 'true' || parent.classList.contains('kinetic-marquee')) return true
        if (parent.classList.contains('sr-only')) return true
        // This existing carousel scrolls programmatically and exposes its full
        // contents through the archive. Off-screen slides are intentional.
        if (parent.getAttribute('aria-label') === 'Automatic selected work carousel') return true
        if (style.textOverflow === 'ellipsis' || (Number(style.webkitLineClamp) > 0)) return true
        if (['auto', 'scroll'].includes(style.overflowX) && parent.scrollWidth > parent.clientWidth + 2) return true
      }
      return false
    }
    const overflow = []
    // Inspect actual content boxes and text ranges, even when body overflow is
    // clipped. A document.scrollWidth check alone misses the reported bug.
    for (const element of document.querySelectorAll('main h1,main h2,main h3,main h4,main p,main li,main dt,main dd,main a,main button,main th,main td,main label,main input,main textarea,main select,header nav a')) {
      if (!isVisible(element) || intentionallyClipped(element)) continue
      const rect = element.getBoundingClientRect()
      const textRects = []
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
      while (walker.nextNode()) {
        const node = walker.currentNode
        if (!node.textContent.trim() || !isVisible(node.parentElement) || intentionallyClipped(node.parentElement)) continue
        const range = document.createRange()
        range.selectNodeContents(node)
        textRects.push(...range.getClientRects())
      }
      const outside = rect.right > width + 2 || rect.left < -2 || textRects.some((r) => r.right > width + 2 || r.left < -2)
      const clippedInside = textRects.some((r) => r.right > rect.right + 3 || r.left < rect.left - 3)
      if (outside || clippedInside) overflow.push({ tag: element.tagName, text: element.textContent.trim().slice(0,110), x: Math.round(rect.x), right: Math.round(rect.right), width: Math.round(rect.width), className: element.className })
    }
    const tables = [...document.querySelectorAll('main table')].map((table) => {
      const columns = table.querySelectorAll('thead th').length
      return { columns, rows: table.querySelectorAll('tbody tr').length, valid: columns > 0 && [...table.querySelectorAll('tbody tr')].every((row) => row.children.length === columns) }
    })
    const primaryNavigation = document.querySelector('nav[aria-label="Primary navigation"]')
    const h1 = main?.querySelector('h1')
    if (h1 && primaryNavigation && window.scrollY === 0 && h1.getBoundingClientRect().top < primaryNavigation.getBoundingClientRect().bottom) issues.push('Heading hidden under fixed navigation')
    return {
      title: document.title, h1: h1?.textContent.trim(), h1Count: main?.querySelectorAll('h1').length || 0,
      leaked, overflow, issues, tables,
      links: [...document.querySelectorAll('a[href]')].map((link) => link.href).filter((href) => href.startsWith(location.origin)),
      images: [...document.querySelectorAll('img[src]')].map((img) => img.currentSrc || img.src).filter((src) => src.startsWith(location.origin)),
      mobilePricingCards: [...document.querySelectorAll('[data-pricing-mobile] article')].map((card) => ({ title: card.querySelector('h3')?.textContent, labels: card.querySelectorAll('dt').length, values: card.querySelectorAll('dd').length })),
    }
  })
}

async function worker() {
  const context = await browser.newContext({ viewport: { width: widths[0], height: 844 }, deviceScaleFactor: 1 })
  const page = await context.newPage()
  let errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => { if (message.type() === 'error' && /hydrat|React|TypeError|ReferenceError/i.test(message.text())) errors.push(message.text()) })
  while (cursor < selected.length) {
    const route = selected[cursor++]
    const record = { route, status: null, views: [], errors: [] }
    errors = []
    try {
      const response = await page.goto(new URL(route, baseURL).href, { waitUntil: 'load', timeout: 45000 })
      record.status = response.status()
      await page.evaluate(() => document.fonts.ready)
      for (const width of widths) {
        await page.setViewportSize({ width, height: 844 })
        await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))))
        const view = await inspectPage(page)
        for (const link of view.links) internalLinks.add(link)
        for (const image of view.images) localImages.add(image)
        delete view.links
        delete view.images
        record.views.push({ width, ...view })
      }
      if (['/services', '/services/app-development', '/services/website-design-development', '/services/website-design-development/business-website'].includes(route)) {
        await page.setViewportSize({ width: 390, height: 844 })
        const target = route === '/services' ? '#website-design-development' : '#pricing'
        const section = page.locator(target)
        if (await section.count()) await section.evaluate((element) => window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY - 100))
        const filename = `${route.replace(/[^a-z0-9]+/gi, '-').replace(/^-/, '')}-mobile.png`
        await page.screenshot({ path: path.join(output, filename) })
        screenshotPaths.push(filename)
      }
    } catch (error) { errors.push(error.message) }
    record.errors = [...new Set(errors)]
    results.push(record)
    if (results.length % 10 === 0 || results.length === selected.length) console.log(`Rendered ${results.length}/${selected.length} routes at ${widths.join(', ')}px`)
  }
  await context.close()
}

await Promise.all(Array.from({ length: 4 }, worker))

const requests = await browser.newContext()
const linkedTargets = [...new Set([...internalLinks].map((link) => { const url = new URL(link); url.hash = ''; return url.href }))]
const endpoints = [...new Set([...linkedTargets, ...localImages, `${baseURL}/sitemap.xml`, `${baseURL}/robots.txt`])]
const badTargets = []
let endpointCursor = 0
await Promise.all(Array.from({ length: 8 }, async () => {
  while (endpointCursor < endpoints.length) {
    const url = endpoints[endpointCursor++]
    try {
      const response = await requests.request.get(url, { timeout: 30000 })
      if (!response.ok()) badTargets.push({ url, status: response.status() })
    } catch (error) { badTargets.push({ url, error: error.message }) }
  }
}))
const notFound = []
for (const route of ['/not-a-real-page', '/services/not-a-real-service', '/services/not-real/seo', '/services/seo/not-real', '/case-studies/not-real']) {
  const response = await requests.request.get(new URL(route, baseURL).href)
  notFound.push({ route, status: response.status() })
}

const failed = results.filter((record) => record.status !== 200 || record.errors.length || record.views.some((view) =>
  !view.h1 || view.h1Count !== 1 || view.leaked.length || view.overflow.length || view.issues.length || view.tables.some((table) => !table.valid)
))
const report = {
  generatedAt: new Date().toISOString(), baseURL, widths, routeCount: selected.length,
  renderedViews: results.reduce((sum, record) => sum + record.views.length, 0),
  failedRouteCount: failed.length, checkedTargets: endpoints.length, badTargets, notFound, screenshotPaths,
  results: results.sort((a, b) => a.route.localeCompare(b.route)),
}
await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2))
await writeFile(path.join(output, 'summary.md'), [
  '# Website route audit', '',
  `Built site: ${baseURL}`, `Generated: ${report.generatedAt}`, '',
  `${report.routeCount} routes, ${report.renderedViews} viewport checks (${widths.join(', ')}px).`,
  `${failed.length} routes failed. ${endpoints.length} linked page/asset endpoints checked; ${badTargets.length} failed.`, '',
  '| Route | Status | Content/layout/runtime checks |', '| --- | --- | --- |',
  ...report.results.map((record) => `| ${record.route} | ${record.status} | ${failed.includes(record) ? 'FAIL' : 'PASS'} |`), '',
  'Invalid routes: ' + notFound.map((item) => `${item.route}: ${item.status}`).join(', '), '',
  'Checks include HTTP status, page title and H1, publishing-note/placeholder leakage, JSON-LD validity, content bounds including clipped containers, pricing column alignment, local image/link responses, and browser runtime errors.',
  'External destinations and submitted contact forms are not tested. Screenshots cover selected reported problem areas; automated layout checks cover every listed route.',
].join('\n'))
console.log(JSON.stringify({ routes: report.routeCount, views: report.renderedViews, failedRoutes: failed.map((r) => r.route), badTargets, notFound, report: path.join(output, 'report.json') }, null, 2))
await requests.close()
await browser.close()
if (failed.length || badTargets.length || notFound.some((item) => item.status !== 404)) process.exitCode = 1
