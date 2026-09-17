import fs from 'node:fs'
import path from 'node:path'

const data = JSON.parse(fs.readFileSync('./src/data/servicePagesData.json', 'utf8'))

const PROTECTED_SLUGS = new Set([
  'website-design-development',
  'website-design-development/business-website',
  'website-design-development/ecommerce-website',
  'website-design-development/landing-pages',
  'website-design-development/wordpress',
])

function safeJson(obj) {
  return JSON.stringify(obj, null, 2)
}

function cleanTitle(title = '') {
  return (title || '')
    .replace(/^Best\s+/i, '')
    .replace(/\s+Service Page$/i, '')
    .replace(/\s+Services? in Bangladesh$/i, '')
    .replace(/\s+Services?$/i, '')
    .trim()
}

function toComponentName(slug = '') {
  return slug
    .split(/[\/\-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const baseDir = path.resolve('src/components/services')

console.log(`Starting Kinetic conversion for remaining services (skipping protected 5)...`)

let convertedCount = 0
let skippedCount = 0

for (const service of data) {
  const serviceSlug = service.slug.replace(/^\/+|\/+$/g, '')

  if (PROTECTED_SLUGS.has(serviceSlug)) {
    console.log(`[SKIP PROTECTED] ${serviceSlug}`)
    skippedCount++
    continue
  }

  const folderPath = path.join(baseDir, serviceSlug)
  fs.mkdirSync(folderPath, { recursive: true })

  const compName = toComponentName(serviceSlug) + 'Service'
  const serviceTitle = cleanTitle(service.sheetTitle || service.h1)

  // Relative path to Kinetic component
  const depth = serviceSlug.split('/').length
  const kineticRelPath = depth === 1 ? '../../Kinetic' : '../../../Kinetic'

  // Extract marquee keywords
  const marqueeKeywords = [
    serviceTitle,
    'Strategic Execution',
    'Dedicated In-House Team',
    'Built For Conversion',
    'Quality Assured',
    'Ongoing Support',
  ]

  // 1. Hero.jsx
  const heroContent = `import Link from 'next/link'
import { PageHero, PosterButton } from '${kineticRelPath}'

export default function Hero({ service }) {
  const title = service?.h1 || ${JSON.stringify(service.h1 || serviceTitle)}
  const subtitle = service?.shortDesc || service?.metaDescription || ${JSON.stringify(service.shortDesc || service.metaDescription || '')}
  const isPillar = service?.pageType === 'Pillar Service'
  const pillarParent = service?.pillarParent
  const quote = service?.quote || ${JSON.stringify(service.quote || '')}

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          {pillarParent && (
            <>
              <span>/</span>
              <span className="text-frame-muted-fg">{pillarParent}</span>
            </>
          )}
          <span>/</span>
          <span className="text-frame-accent">${serviceTitle}</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow={isPillar ? 'Core Service Pillar' : 'Specialized Capability'}
        meta="One In-House Team / Built For Results"
        number={isPillar ? '01' : '360'}
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Book a Consultation</PosterButton>
            <PosterButton href="/services" variant="outline">
              Explore All Services
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* QUOTE BANNER IF PRESENT */}
      {quote && (
        <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <blockquote className="font-heading text-lg md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>
        </section>
      )}
    </div>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Hero.jsx'), heroContent)

  // 2. Offerings.jsx
  const offeringsContent = `import { SectionIntro, PosterButton } from '${kineticRelPath}'

export default function Offerings({ service }) {
  const offerings = service?.offerings || ${safeJson(service.offerings || [])}
  const whyMatters = service?.whyMatters || ${safeJson(service.whyMatters || [])}
  const whyChooseUs = service?.whyChooseUs || ${safeJson(service.whyChooseUs || [])}

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Offerings.jsx'), offeringsContent)

  // 3. Process.jsx
  const processContent = `import { SectionIntro } from '${kineticRelPath}'

export default function Process({ service }) {
  const steps = service?.processSteps || ${safeJson(service.processSteps || [])}
  const timeline = service?.timeline || ${safeJson(service.timeline || null)}

  if (!steps?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our Structured Process"
        >
          How we collaborate from initial scoping and strategic discovery to deployment and iterative refinement.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {steps.map((step, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {step.number || String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
              {step.deliverable && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                    Deliverable
                  </span>
                  <span className="text-xs font-semibold text-frame-fg">
                    {step.deliverable}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {timeline?.table && (
          <div className="mt-16 overflow-hidden border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left">
              {timeline.table.headers && (
                <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                  <tr>
                    {timeline.table.headers.map((h, i) => (
                      <th key={i} className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timeline.table.rows?.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-4 md:p-6 font-medium text-frame-fg">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Process.jsx'), processContent)

  // 4. Pricing.jsx
  const pricingContent = `import { SectionIntro, PosterButton } from '${kineticRelPath}'

export default function Pricing({ service }) {
  const pricingData = service?.pricing || ${safeJson(service.pricing || null)}
  const packages = pricingData?.packages || []
  const table = pricingData?.table

  if (!packages.length && !table) return null

  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Plans"
          title="Pricing & Packages"
        >
          Clear investment tiers based on project scope, strategic complexity, and technical requirements.
        </SectionIntro>

        {packages.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={\`border-2 p-7 md:p-9 flex flex-col justify-between \${
                  index === 1
                    ? 'border-frame-accent bg-frame-accent/10'
                    : 'border-frame-border bg-frame-bg'
                }\`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Tier 0{index + 1}
                    </span>
                    {index === 1 && (
                      <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pkg.name}
                  </h3>
                  <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                      Starting Price
                    </span>
                    <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                      {pkg.price}
                    </div>
                  </div>
                  {pkg.description && (
                    <p className="mt-3 text-xs font-medium text-frame-muted-fg leading-relaxed">
                      {pkg.description}
                    </p>
                  )}
                  {pkg.features?.length > 0 && (
                    <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8">
                  <PosterButton
                    href="/contact"
                    variant={index === 1 ? 'accent' : 'outline'}
                    className="w-full"
                  >
                    Choose {pkg.name}
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>
        ) : table?.headers ? (
          <div>
            <div className="overflow-hidden border-2 border-frame-border bg-frame-bg">
              <table className="w-full text-left">
                <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                  <tr>
                    {table.headers.map((h, i) => (
                      <th key={i} className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                  {table.rows?.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-frame-muted/20">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={\`p-4 md:p-6 \${
                            cIdx === 0
                              ? 'font-bold text-frame-fg'
                              : cIdx === 1
                              ? 'font-bold text-frame-accent'
                              : 'text-frame-muted-fg'
                          }\`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
                * Pricing is indicative rather than fixed. Final pricing is confirmed after scoping requirements.
              </p>
              <div className="shrink-0">
                <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Pricing.jsx'), pricingContent)

  // 5. FAQ.jsx
  const faqContent = `import { SectionIntro } from '${kineticRelPath}'

export default function FAQ({ service }) {
  const faqs = service?.faqs || ${safeJson(service.faqs || [])}
  if (!faqs?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'FAQ.jsx'), faqContent)

  // 6. CTA.jsx
  const ctaContent = `import { CTASection } from '${kineticRelPath}'

export default function CTA({ service }) {
  const serviceTitle = ${JSON.stringify(serviceTitle)}
  const primaryCta = service?.primaryCta || ${JSON.stringify(service.primaryCta || 'Book a Strategy Call')}

  return (
    <CTASection
      eyebrow="Next move"
      title={\`Ready to scale with \${serviceTitle}?\`}
      primaryText={primaryCta}
      secondaryText="Talk to Our Team"
    >
      Connect with our in-house team to discuss your requirements, estimated timelines, and a transparent project estimate.
    </CTASection>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'CTA.jsx'), ctaContent)

  // 7. index.jsx
  const indexContent = `import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '${kineticRelPath}'

const marqueeItems = ${safeJson(marqueeKeywords)}

export default function ${compName}({ service }) {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero service={service} />
      <TypeMarquee items={marqueeItems} slow />
      <Offerings service={service} />
      <Process service={service} />
      <Pricing service={service} />
      <FAQ service={service} />
      <CTA service={service} />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
`
  fs.writeFileSync(path.join(folderPath, 'index.jsx'), indexContent)

  convertedCount++
}

console.log(`Conversion completed! Converted: ${convertedCount}, Skipped protected: ${skippedCount}`)
