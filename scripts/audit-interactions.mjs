import { writeFile, mkdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'

const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const baseURL = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3100'
const output = path.resolve(process.env.AUDIT_OUTPUT || 'artifacts/site-audit')
await mkdir(output, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const checks = []
async function check(name, run) {
  try { await run(); checks.push({ name, passed: true }) }
  catch (error) { checks.push({ name, passed: false, error: error.message }); }
}
await check('Mobile menu reaches the last navigation link and closes on navigation', async () => {
  await page.goto(baseURL, { waitUntil: 'load' })
  await page.getByRole('button', { name: 'Toggle navigation menu' }).click()
  const menu = page.locator('#mobile-navigation')
  await menu.waitFor({ state: 'visible' })
  await menu.getByRole('link', { name: 'Contact', exact: true }).click()
  await page.waitForURL('**/contact')
  await menu.waitFor({ state: 'hidden' })
})
await check('All services link scrolls to the catalog below the fixed header', async () => {
  await page.goto(baseURL, { waitUntil: 'load' })
  await page.getByRole('button', { name: 'Toggle navigation menu' }).click()
  await page.locator('#mobile-navigation').getByRole('link', { name: 'View all 74 services' }).click()
  await page.waitForURL('**/services#all-services')
  await page.waitForFunction(() => {
    const rect = document.getElementById('all-services').getBoundingClientRect()
    return rect.top >= 70 && rect.top < 180
  }, undefined, { timeout: 5000 })
})
await check('Mobile pillar link opens App Development and FAQ expands', async () => {
  await page.goto(new URL('/services', baseURL).href, { waitUntil: 'load' })
  await page.getByRole('button', { name: 'Toggle navigation menu' }).click()
  await page.locator('#mobile-navigation').getByRole('link', { name: 'App Development', exact: false }).click()
  await page.waitForURL('**/services/app-development')
  const faq = page.locator('main details').first()
  await faq.locator('summary').click()
  if (!await faq.evaluate((element) => element.open)) throw new Error('FAQ did not open')
  if (/Notes for you|PLACEHOLDER/.test(await page.locator('main').textContent())) throw new Error('Draft content is visible')
})
await check('Mobile pricing includes service names, field labels and quote CTA', async () => {
  await page.goto(new URL('/services/website-design-development', baseURL).href)
  const cards = page.locator('[data-pricing-mobile] article')
  if (await cards.count() !== 4) throw new Error('Expected four named website pricing options')
  if (!await cards.first().isVisible()) throw new Error('Mobile price options hidden')
  await page.locator('#pricing').getByRole('link', { name: 'Request a quote' }).click()
  await page.waitForURL('**/contact')
})
await check('Desktop Services dropdown and pillar link work', async () => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto(baseURL)
  const nav = page.getByRole('navigation', { name: 'Primary navigation' })
  await nav.getByRole('link', { name: 'Services', exact: true }).hover()
  await nav.getByRole('link', { name: 'Content Writing', exact: false }).click()
  await page.waitForURL('**/services/content-writing')
})
await check('Branding carousel archive and image preview open and close', async () => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(new URL('/projects?view=branding', baseURL).href)
  await page.getByRole('button', { name: 'View more', exact: true }).click()
  const archive = page.getByRole('dialog', { name: 'Full creative archive' })
  await archive.waitFor({ state: 'visible', timeout: 5000 })
  await archive.getByRole('button', { name: 'Close', exact: true }).click()
  const carousel = page.getByLabel('Automatic selected work carousel')
  await carousel.getByRole('button').first().click()
  const preview = page.getByRole('dialog', { name: /Work image .* full preview/ })
  await preview.waitFor({ state: 'visible', timeout: 5000 })
  await page.keyboard.press('Escape')
  await preview.waitFor({ state: 'hidden', timeout: 5000 })
})
await writeFile(path.join(output, 'interactions.json'), JSON.stringify(checks, null, 2))
console.log(JSON.stringify(checks, null, 2))
await browser.close()
if (checks.some((item) => !item.passed)) process.exitCode = 1
