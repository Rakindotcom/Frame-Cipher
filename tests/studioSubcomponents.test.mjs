import test from 'node:test'
import assert from 'node:assert'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { studioServices } from '../src/data/studioServices.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const studioRoot = path.join(projectRoot, 'src', 'components', 'studio')

const slugToFolder = {
  // Cluster A: Business Video
  'video-production': 'business-video/video-production',
  'corporate-video-production': 'business-video/corporate-video-production',
  'commercial-video-production': 'business-video/commercial-video-production',
  'promotional-video-production': 'business-video/promotional-video-production',
  'video-marketing': 'business-video/video-marketing',
  'social-media-video-production': 'business-video/social-media-video-production',

  // Cluster B: Live & Event
  'live-streaming': 'live-and-event/live-streaming',
  'event-video-production': 'live-and-event/event-video-production',

  // Cluster C: Story-Led & Personal
  'documentary-production': 'story-and-personal/documentary-production',
  'property-videography': 'story-and-personal/property-videography',
  'wedding-videography': 'story-and-personal/wedding-videography',
  'family-video-productions': 'story-and-personal/family-video-productions',

  // Cluster D: Post-Production & Audio
  'post-production': 'post-production-audio/post-production',
  'video-editing': 'post-production-audio/video-editing',
  'voice-over': 'post-production-audio/voice-over',
  'green-screen-video': 'post-production-audio/green-screen-video',

  // Cluster E: Studio Access
  'podcast': 'studio-access/podcast',
  'product-photography': 'studio-access/product-photography',
  'rental': 'studio-access/rental',

  // Trust & Local Layer
  'portfolio': 'trust-and-local/portfolio',
  'process': 'trust-and-local/process',
  'pricing': 'trust-and-local/pricing',
  'equipment-and-facilities': 'trust-and-local/equipment-and-facilities',
  'faq': 'trust-and-local/faq',
  'contact': 'trust-and-local/contact',
}

const requiredComponents = ['Hero.jsx', 'Offerings.jsx', 'Process.jsx', 'Pricing.jsx', 'FAQ.jsx', 'CTA.jsx', 'index.jsx']

test('Every studio service has modular subcomponents matching service page architecture', () => {
  for (const service of studioServices) {
    const folderRel = slugToFolder[service.slug]
    assert.ok(folderRel, `Slug ${service.slug} must map to a studio subfolder`)

    const folderAbs = path.join(studioRoot, folderRel)
    assert.ok(fs.existsSync(folderAbs), `Folder must exist: ${folderAbs}`)

    for (const comp of requiredComponents) {
      const compPath = path.join(folderAbs, comp)
      assert.ok(fs.existsSync(compPath), `Component ${comp} must exist in ${folderRel}`)
    }

    // Verify index.jsx imports
    const indexContent = fs.readFileSync(path.join(folderAbs, 'index.jsx'), 'utf-8')
    assert.ok(indexContent.includes("import Hero from './Hero'"), `index.jsx in ${folderRel} must import Hero`)
    assert.ok(indexContent.includes("import Offerings from './Offerings'"), `index.jsx in ${folderRel} must import Offerings`)
    assert.ok(indexContent.includes("import Process from './Process'"), `index.jsx in ${folderRel} must import Process`)
    assert.ok(indexContent.includes("import Pricing from './Pricing'"), `index.jsx in ${folderRel} must import Pricing`)
    assert.ok(indexContent.includes("import FAQ from './FAQ'"), `index.jsx in ${folderRel} must import FAQ`)
    assert.ok(indexContent.includes("import CTA from './CTA'"), `index.jsx in ${folderRel} must import CTA`)

    // Verify Hero.jsx typography and PageHero
    const heroContent = fs.readFileSync(path.join(folderAbs, 'Hero.jsx'), 'utf-8')
    assert.ok(heroContent.includes('PageHero'), `Hero.jsx in ${folderRel} must use PageHero`)
    assert.ok(heroContent.includes('PosterButton'), `Hero.jsx in ${folderRel} must use PosterButton`)
    assert.ok(heroContent.includes('aria-label="Breadcrumb"'), `Hero.jsx in ${folderRel} must have visible Breadcrumb`)

    // Verify Process.jsx watermark numbers
    const processContent = fs.readFileSync(path.join(folderAbs, 'Process.jsx'), 'utf-8')
    assert.ok(processContent.includes('text-[6rem] md:text-[7rem]'), `Process.jsx in ${folderRel} must have watermark number typography`)

    // Verify FAQ.jsx details accordion
    const faqContent = fs.readFileSync(path.join(folderAbs, 'FAQ.jsx'), 'utf-8')
    assert.ok(faqContent.includes('<details'), `FAQ.jsx in ${folderRel} must use <details> accordion`)
  }
})

test('Root studio components exist and have valid syntax', () => {
  const rootFiles = [
    'StudioHero.jsx',
    'StudioOfferings.jsx',
    'StudioComparison.jsx',
    'StudioWhyMatters.jsx',
    'StudioProcess.jsx',
    'StudioPricing.jsx',
    'StudioLocation.jsx',
    'StudioFaq.jsx',
    'StudioSubHero.jsx',
    'StudioSubOverview.jsx',
    'StudioSubDeliverables.jsx',
    'StudioSubProcess.jsx',
    'StudioSubPricingFactors.jsx',
    'StudioSubFaq.jsx',
  ]

  for (const file of rootFiles) {
    const filePath = path.join(studioRoot, file)
    assert.ok(fs.existsSync(filePath), `File must exist: ${file}`)
    const content = fs.readFileSync(filePath, 'utf-8')

    // Basic brace and parenthesis sanity check
    let openBraces = 0
    let openParens = 0
    for (const char of content) {
      if (char === '{') openBraces++
      if (char === '}') openBraces--
      if (char === '(') openParens++
      if (char === ')') openParens--
    }
    assert.strictEqual(openBraces, 0, `Braces must be balanced in ${file}`)
    assert.strictEqual(openParens, 0, `Parentheses must be balanced in ${file}`)
  }
})

