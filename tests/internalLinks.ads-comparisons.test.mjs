import assert from 'node:assert/strict'
import test from 'node:test'
import { register } from 'node:module'

register('./helpers/app-module-loader.mjs', import.meta.url)

const { getServicePageBySlug } = await import('../src/data/servicePages.js')
const {
  ADS_COMPARISON_SETS,
  ADS_PLATFORM_SLUGS,
  getAdsComparisonLinks,
  getServiceLinkPlan,
} = await import('../src/lib/seo/internalLinks.js')

test('every paid advertising sub-service page is covered by the ads comparison set', () => {
  for (const slug of ADS_PLATFORM_SLUGS) {
    assert.ok(ADS_COMPARISON_SETS[slug], `missing comparison set for ${slug}`)
  }
})

test('each ads platform page links to the other nine and never to itself', () => {
  for (const slug of ADS_PLATFORM_SLUGS) {
    const page = getServicePageBySlug(slug)
    assert.ok(page, `service page not found for ${slug}`)

    const links = getAdsComparisonLinks(page)
    assert.equal(links.length, ADS_PLATFORM_SLUGS.length - 1, `wrong link count for ${slug}`)

    const hrefs = new Set(links.map((link) => link.href))
    assert.equal(hrefs.size, links.length, `duplicate hrefs on ${slug}`)
    assert.ok(!hrefs.has(page.fullPath), `${slug} links to itself`)
  }
})

test('comparison links are reciprocal across every pair of ads platform pages', () => {
  for (const slug of ADS_PLATFORM_SLUGS) {
    const page = getServicePageBySlug(slug)
    const hrefs = new Set(getAdsComparisonLinks(page).map((link) => link.href))

    for (const other of ADS_PLATFORM_SLUGS) {
      if (other === slug) continue
      const otherPage = getServicePageBySlug(other)
      assert.ok(hrefs.has(otherPage.fullPath), `${slug} does not link to ${other}`)
    }
  }
})

test('comparison anchors are descriptive compare-with text', () => {
  const page = getServicePageBySlug('paid-advertising/meta-ads')

  for (const link of getAdsComparisonLinks(page)) {
    assert.match(link.anchor, /^compare with /)
    assert.ok(link.anchor.length > 'compare with '.length, `anchor too short: ${link.anchor}`)
    assert.ok(!link.anchor.includes('undefined'), `anchor has undefined: ${link.anchor}`)
  }
})

test('index-adjacent siblings are returned first', () => {
  const page = getServicePageBySlug('paid-advertising/google-ads')
  const plan = getServiceLinkPlan(page)
  const comparisonHrefs = getAdsComparisonLinks(page).map((link) => link.href)
  const siblingHrefs = plan.siblings.map((sibling) => sibling.href)

  for (const href of siblingHrefs) {
    assert.ok(
      comparisonHrefs.indexOf(href) < 3,
      `${href} should be among the first three comparison links`
    )
  }
})

test('getAdsComparisonLinks returns an empty list for non ads pages', () => {
  const page = getServicePageBySlug('seo/local-seo')
  assert.deepEqual(getAdsComparisonLinks(page), [])
})

test('getAdsComparisonLinks honours an explicit limit', () => {
  const page = getServicePageBySlug('paid-advertising/amazon-ads')
  assert.equal(getAdsComparisonLinks(page, 4).length, 4)
})
