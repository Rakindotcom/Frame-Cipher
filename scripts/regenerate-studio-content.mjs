// Regenerates unique data-driven Pricing.jsx per studio service + injects
// StudioExtendedSections (long-form SEO content) into each service index.jsx.
// Run: node scripts/regenerate-studio-content.mjs  (idempotent)
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { studioServices } = await import('../src/data/studioServices.js')
const { default: extA } = await import('../src/data/studioExtendedA.js')
const { default: extB } = await import('../src/data/studioExtendedB.js')
const { default: extC } = await import('../src/data/studioExtendedC.js')
const { default: extD } = await import('../src/data/studioExtendedD.js')
const extended = { ...extA, ...extB, ...extC, ...extD }

const clusterDir = {
  'business-video': 'business-video',
  'live-and-event': 'live-and-event',
  'post-production-audio': 'post-production-audio',
  'story-and-personal': 'story-and-personal',
  'studio-access': 'studio-access',
  'trust-and-local': 'trust-and-local',
}

function pricingJsx(slug, service, ext) {
  const dataJson = JSON.stringify(
    {
      pricingTitle: ext.pricingTitle,
      pricingIntro: ext.pricingIntro,
      tiers: ext.tiers,
      marketNote: ext.marketNote,
      costRows: ext.costRows,
    },
    null,
    2
  )
  const title = `Transparent ${service.shortTitle || service.name} Rates`
  return `'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for ${slug} — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = ${dataJson}

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Pricing & Investment"
          title={${JSON.stringify(title)}}
          index="03"
        >
          {DATA.pricingIntro}
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-3">
          {DATA.tiers.map((pkg, idx) => (
            <div
              key={idx}
              className={\`flex flex-col justify-between border-2 p-7 md:p-8 \${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg'
              }\`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {pkg.tag}
                  </span>
                  {pkg.popular && (
                    <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-frame-accent-fg">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-6 border-b-2 border-frame-border/60 pb-6">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-frame-fg">
                    {pkg.price}
                  </span>
                  {pkg.priceNote && (
                    <span className="ml-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                      {pkg.priceNote}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-frame-border/60">
                <PosterButton
                  href="#booking"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Book This Package &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
            Dhaka market context
          </h4>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            {DATA.marketNote}
          </p>
          {DATA.costRows && DATA.costRows.length > 0 && (
            <dl className="mt-5 grid gap-px border border-frame-border/60 bg-frame-border/40 sm:grid-cols-2">
              {DATA.costRows.map(([item, range], i) => (
                <div key={i} className="flex items-start justify-between gap-3 bg-frame-bg px-4 py-3">
                  <dt className="text-xs font-medium text-frame-muted-fg">{item}</dt>
                  <dd className="shrink-0 text-xs font-black text-frame-fg text-right">{range}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
            Every quote is itemised in writing within 48 hours — crew, days, deliverables, timeline. 50% advance
            confirms dates; balance on final sign-off. VAT-compliant invoices on all payments.
          </p>
        </div>
      </div>
    </section>
  )
}
`
}

let okPricing = 0
let okIndex = 0
const problems = []

for (const service of studioServices) {
  const { slug, clusterId } = service
  const dir = clusterDir[clusterId]
  if (!dir) {
    problems.push(`${slug}: unknown cluster ${clusterId}`)
    continue
  }
  const ext = extended[slug]
  if (!ext) {
    problems.push(`${slug}: no extended data`)
    continue
  }
  const serviceDir = join(root, 'src', 'components', 'studio', dir, slug)
  const pricingPath = join(serviceDir, 'Pricing.jsx')
  const indexPath = join(serviceDir, 'index.jsx')
  if (!existsSync(pricingPath)) {
    problems.push(`${slug}: missing ${pricingPath}`)
    continue
  }
  writeFileSync(pricingPath, pricingJsx(slug, service, ext), 'utf8')
  okPricing++

  if (!existsSync(indexPath)) {
    problems.push(`${slug}: missing index.jsx`)
    continue
  }
  let idx = readFileSync(indexPath, 'utf8')
  if (!idx.includes('StudioExtendedSections')) {
    const importAnchor = `import FAQ from './FAQ'`
    if (!idx.includes(importAnchor)) {
      problems.push(`${slug}: index.jsx has no FAQ import anchor`)
      continue
    }
    idx = idx.replace(
      importAnchor,
      `${importAnchor}\nimport StudioExtendedSections from '../../StudioExtendedSections'\nimport { getStudioExtended } from '../../../../data/studioExtended'`
    )
    const faqTagVariants = ['<FAQ service={service} />', '<FAQ/>', '<FAQ />']
    const found = faqTagVariants.find((t) => idx.includes(t))
    if (!found) {
      problems.push(`${slug}: index.jsx has no FAQ tag anchor`)
      continue
    }
    idx = idx.replace(
      found,
      `<StudioExtendedSections data={getStudioExtended('${slug}')} />\n      ${found}`
    )
    writeFileSync(indexPath, idx, 'utf8')
  }
  okIndex++
}

console.log(`Pricing rewritten: ${okPricing}/${studioServices.length}`)
console.log(`Index wired: ${okIndex}/${studioServices.length}`)
if (problems.length) {
  console.log('PROBLEMS:')
  for (const p of problems) console.log(' - ' + p)
  process.exitCode = 1
}
