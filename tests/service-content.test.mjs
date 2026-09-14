import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { cleanServiceText, normalizePricingTable, normalizeServicePage } from '../src/data/serviceContent.js'

const source = JSON.parse(readFileSync(new URL('../src/data/servicePagesData.json', import.meta.url), 'utf8'))
const pages = source.map(normalizeServicePage)
const page = (slug) => pages.find((item) => item.slug === slug)

test('editorial instructions are removed without deleting customer approval language', () => {
  assert.equal(cleanServiceText('Customer copy.\n\n[PLACEHOLDER - add actual terms here.]\n\nMore customer copy.'), 'Customer copy.\n\nMore customer copy.')
  assert.equal(cleanServiceText('Every draft goes through your review before publishing.'), 'Every draft goes through your review before publishing.')
  assert.equal(cleanServiceText('Customer copy.\n\n[Talk to Our Team]'), 'Customer copy.')
  assert.equal(page('app-development').quote, '')
  assert.equal(page('seo').quote, '')
})

test('captions and truncated quotes never become pull quotes', () => {
  assert.equal(page('paid-advertising/pinterest-ads').quote, '')
  assert.equal(page('seo/ecommerce-seo').quote, '')
  assert.equal(page('content-writing/case-study-writing').quote, '')
  assert.match(page('app-development/android').quote, /Android isn't one device/)
})

test('all 74 public service records are free of draft artifacts', () => {
  assert.equal(pages.length, 74)
  for (const item of pages) {
    assert.doesNotMatch(JSON.stringify(item), /\[PLACEHOLDER|Notes? for you before publishing|৳X|up to X pages|_{5,}|\uFFFD/i, item.slug)
    assert.ok(item.h1 && item.metaDescription && item.primaryCta, item.slug)
  }
})

test('all pricing rows match their named columns and retain source numeric prices', () => {
  for (const item of pages) {
    const table = item.pricing.table
    assert.ok(table.headers.every(Boolean), item.slug)
    assert.ok(table.rows.every((row) => row.length === table.headers.length && row[0]), item.slug)
    const original = source.find((entry) => entry.slug === item.slug).pricing.table
    const numericPrices = original.rows.flat().filter((cell) => /৳\s*\d/.test(cell))
    for (const price of numericPrices) assert.ok(table.rows.flat().includes(price), `${item.slug}: missing ${price}`)
    assert.doesNotMatch(table.note, /Order Now|Included at every tier/)
  }
})

test('website range list retains all four service labels and quotes missing prices', () => {
  const table = page('website-design-development').pricing.table
  assert.deepEqual(table.headers, ['Service', 'Typical Range'])
  assert.deepEqual(table.rows, [
    ['Landing Page', 'Request a quote'], ['Business Website', 'Request a quote'],
    ['E-commerce Website', 'Request a quote'], ['Website Redesign', 'Request a quote'],
  ])
  assert.match(table.note, /Pricing typically depends/)
})

test('business packages and comparison agree on prices and scope', () => {
  const pricing = page('website-design-development/business-website').pricing
  assert.deepEqual(pricing.table.headers, ['Features', 'Launch Kit', 'Growth Build', 'Enterprise Tech Build'])
  assert.equal(pricing.table.rows.length, 14)
  assert.equal(pricing.packages[0].price, '৳45,000 ($499)')
  assert.equal(pricing.packages[1].price, '৳90,000 ($999)')
  assert.ok(pricing.packages[0].features.includes('Core Site Architecture (Up to 5 pages)'))
})

test('pillar prices remain paired with the right package, scope and timeline', () => {
  const table = page('app-development').pricing.table
  assert.deepEqual(table.headers, ['Package', 'Starting Price', 'What Drives the Cost', 'Typical Delivery'])
  assert.deepEqual(table.rows[0], ['MVP Development', '৳300,000', 'Core feature set, single platform, basic backend', '~6–10 weeks'])
  assert.equal(table.rows.length, 4)
  assert.match(table.note, /free initial consultation/)
})

test('structured tables preserve empty cells and notes without shifting data', () => {
  const table = { headers: ['Plan', 'Fee', 'Scope'], rows: [['Basic', '', 'Setup'], ['Pro', '৳500', '']], note: 'Confirmed by proposal.' }
  assert.deepEqual(normalizePricingTable(table), table)
})

test('normalization is repeatable and does not mutate source documents', () => {
  assert.match(source.find((item) => item.slug === 'app-development').quote, /Notes for you/)
  assert.deepEqual(pages.map(normalizeServicePage), pages)
})
