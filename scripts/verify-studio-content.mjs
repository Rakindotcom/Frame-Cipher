// Verifies studio pages: word counts (1500+ target) + pricing uniqueness.
// Run: node scripts/verify-studio-content.mjs
import { studioServices } from '../src/data/studioServices.js'
import extA from '../src/data/studioExtendedA.js'
import extB from '../src/data/studioExtendedB.js'
import extC from '../src/data/studioExtendedC.js'
import extD from '../src/data/studioExtendedD.js'

const extended = { ...extA, ...extB, ...extC, ...extD }
const words = (s) => (typeof s === 'string' ? s.trim().split(/\s+/).filter(Boolean).length : 0)
const wordsArr = (a) => (Array.isArray(a) ? a.reduce((n, x) => n + (typeof x === 'string' ? words(x) : x?.q || x?.a ? words(x.q) + words(x.a) : 0), 0) : 0)

let fail = 0
const priceSets = new Map()
for (const s of studioServices) {
  const ext = extended[s.slug]
  if (!ext) {
    console.log(`MISSING extended: ${s.slug}`)
    fail++
    continue
  }
  const base =
    words(s.intro) + words(s.detailedDescription) + wordsArr(s.highlights) +
    wordsArr(s.targetAudience) + wordsArr(s.benefits) + wordsArr(s.deliverables) +
    wordsArr(s.pricingFactors) + wordsArr(s.faqs?.map((f) => `${f.q} ${f.a}`))
  const extra =
    words(ext.pricingIntro) + words(ext.marketNote) +
    ext.tiers.reduce((n, t) => n + words(t.name) + words(t.description) + wordsArr(t.features), 0) +
    ext.sections.reduce((n, x) => n + words(x.h) + words(x.p1) + words(x.p2), 0) +
    ext.costRows.reduce((n, r) => n + words(r[0]) + words(r[1]), 0) +
    ext.extraFaqs.reduce((n, f) => n + words(f.q) + words(f.a), 0)
  const total = base + extra
  // Static chrome per page (hero, process, CTA, booking form labels) ≈ 550 words
  const withChrome = total + 550
  const status = withChrome >= 1500 ? 'OK  ' : 'THIN'
  if (withChrome < 1500) fail++
  console.log(`${status} ${s.slug}: data=${total} est-rendered=${withChrome}`)

  const key = ext.tiers.map((t) => `${t.name}|${t.price}`).join('~')
  if (priceSets.has(key)) {
    console.log(`DUPLICATE PRICING: ${s.slug} matches ${priceSets.get(key)}`)
    fail++
  } else priceSets.set(key, s.slug)
}
console.log(fail === 0 ? 'ALL CHECKS PASSED' : `${fail} FAILURES`)
process.exitCode = fail === 0 ? 0 : 1
