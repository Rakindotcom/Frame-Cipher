import assert from 'node:assert/strict'
import { getWebsitesByCategory, websiteProjects } from '../src/data/websiteProjects.js'

console.log('Testing websiteProjects and getWebsitesByCategory...')

// 1. Verify framework counts
const shopifyProjects = websiteProjects.filter((p) => p.platform === 'Shopify')
const wordpressProjects = websiteProjects.filter((p) => p.platform === 'WordPress')
const reactProjects = websiteProjects.filter((p) => p.platform === 'React / Next.js')

assert.equal(shopifyProjects.length, 1, 'Should have exactly 1 Shopify project (Jarixo)')
assert.equal(wordpressProjects.length, 4, 'Should have exactly 4 WordPress projects')
assert.equal(reactProjects.length, 13, 'Should have 13 React / Next.js projects')
assert.equal(websiteProjects.length, 18, 'Total website projects should be 18')

// 2. Check WordPress category
const wpResult = getWebsitesByCategory('wordpress')
assert.equal(wpResult.length, 4, 'WordPress category should return 4 projects')
wpResult.forEach((p) => {
  assert.equal(p.platform, 'WordPress', `${p.name} must be WordPress`)
})

// 3. Check Shopify category
const shopifyResult = getWebsitesByCategory('shopify')
assert.ok(shopifyResult.length >= 1, 'Shopify category must return at least 1 project')
assert.equal(shopifyResult[0].name, 'Jarixo', 'First Shopify project must be Jarixo')
assert.equal(shopifyResult[0].platform, 'Shopify', 'Jarixo must be Shopify')

// 4. Check E-Commerce category
const ecomResult = getWebsitesByCategory('ecommerce-website')
assert.ok(ecomResult.length >= 3, 'E-commerce category should have at least 3 projects')
console.log('E-commerce showcase:', ecomResult.map((p) => `${p.name} (${p.platform})`).join(', '))

// 5. Check Pillar
const pillarResult = getWebsitesByCategory('pillar')
assert.equal(pillarResult.length, 3, 'Pillar should show 3 curated projects')
console.log('Pillar showcase:', pillarResult.map((p) => `${p.name} (${p.platform})`).join(', '))

console.log('All category-wise website portfolio checks passed successfully!')
