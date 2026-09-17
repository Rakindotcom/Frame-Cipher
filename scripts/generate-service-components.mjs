import fs from 'node:fs'
import path from 'node:path'

const data = JSON.parse(fs.readFileSync('./src/data/servicePagesData.json', 'utf8'))

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

console.log(`Starting generation of 74 service component folders in ${baseDir}...`)

const registryEntries = []

for (const service of data) {
  const serviceSlug = service.slug.replace(/^\/+|\/+$/g, '')
  const folderPath = path.join(baseDir, serviceSlug)
  fs.mkdirSync(folderPath, { recursive: true })

  const compName = toComponentName(serviceSlug) + 'Service'
  const serviceTitle = cleanTitle(service.sheetTitle || service.h1)

  // 1. Hero.jsx
  const heroContent = `import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PrimaryLink({ href, children, secondary = false }) {
  return (
    <Link
      href={href}
      className={secondary
        ? 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08]'
        : 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-violet-500 px-6 text-sm font-bold text-white shadow-[0_14px_45px_rgba(139,92,246,0.28)] transition hover:-translate-y-0.5 hover:bg-violet-400'}
    >
      {children}<ArrowIcon />
    </Link>
  )
}

export default function Hero({ service }) {
  const title = service?.h1 || ${JSON.stringify(service.h1 || serviceTitle)}
  const subtitle = service?.shortDesc || service?.metaDescription || ${JSON.stringify(service.shortDesc || service.metaDescription || '')}
  const isPillar = service?.pageType === 'Pillar Service'
  const pillarParent = service?.pillarParent

  return (
    <header className="relative border-b border-white/10 px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          {pillarParent && (
            <>
              <span>/</span>
              <span className="text-zinc-500">{pillarParent}</span>
            </>
          )}
          <span>/</span>
          <span className="text-violet-300">{${JSON.stringify(serviceTitle)}}</span>
        </nav>

        <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet-300">
          {isPillar ? 'Pillar Service' : 'Specialized Capability'}
        </span>

        <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            {subtitle}
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryLink href="/contact">Book Consultation</PrimaryLink>
          <PrimaryLink href="/services" secondary>View All Services</PrimaryLink>
        </div>
      </div>
    </header>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Hero.jsx'), heroContent)

  // 2. Offerings.jsx
  const offeringsContent = `const surface = 'border border-white/10 bg-white/[0.035]'

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" fill="none">
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Offerings({ service }) {
  const offerings = service?.offerings || ${safeJson(service.offerings || [])}
  if (!offerings?.length) return null

  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Capabilities & Scope</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">What We Deliver</h2>
          <p className="mt-4 text-zinc-400">Structured deliverables and execution phases designed for measurable outcomes.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((item, index) => (
            <article key={index} className={\`\${surface} rounded-2xl p-6 sm:p-8\`}>
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-sm font-bold text-violet-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  )}
                </div>
              </div>
              {item.bullets?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Offerings.jsx'), offeringsContent)

  // 3. Process.jsx
  const processContent = `const surface = 'border border-white/10 bg-white/[0.035]'

export default function Process({ service }) {
  const steps = service?.processSteps || ${safeJson(service.processSteps || [])}
  if (!steps?.length) return null

  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Execution Framework</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Our Process</h2>
          <p className="mt-4 text-zinc-400">How we collaborate from initial scoping to rollout and iterative review.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className={\`\${surface} relative rounded-2xl p-6 sm:p-8\`}>
              <span className="text-2xl font-bold text-violet-400">
                {step.number || String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Process.jsx'), processContent)

  // 4. Pricing.jsx
  const pricingContent = `import Link from 'next/link'

const surface = 'border border-white/10 bg-white/[0.035]'

export default function Pricing({ service }) {
  const pricingData = service?.pricing || ${safeJson(service.pricing || null)}
  const packages = pricingData?.packages || []
  const table = pricingData?.table

  if (!packages.length && !table) return null

  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Investment & Plans</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Pricing & Packages</h2>
          <p className="mt-4 text-zinc-400">Clear investment levels tailored to your growth stage and operational scope.</p>
        </div>

        {packages.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={\`\${surface} flex flex-col justify-between rounded-2xl p-6 sm:p-8 \${
                  index === 1 ? 'border-violet-500/50 bg-violet-500/[0.04]' : ''
                }\`}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="mt-4 text-3xl font-bold text-violet-300">{pkg.price}</div>
                  {pkg.description && (
                    <p className="mt-3 text-sm text-zinc-400">{pkg.description}</p>
                  )}
                  {pkg.features?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-zinc-300">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="text-violet-400">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link
                  href="/contact"
                  className="mt-8 block rounded-full border border-white/20 bg-white/5 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-500 hover:border-violet-500"
                >
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        ) : table?.headers ? (
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  {table.headers.map((h, i) => (
                    <th key={i} className="p-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {table.rows?.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02]">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </section>
  )
}
`
  fs.writeFileSync(path.join(folderPath, 'Pricing.jsx'), pricingContent)

  // 5. FAQ.jsx
  const faqContent = `const surface = 'border border-white/10 bg-white/[0.035]'

export default function FAQ({ service }) {
  const faqs = service?.faqs || ${safeJson(service.faqs || [])}
  if (!faqs?.length) return null

  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Frequently Asked Questions</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className={\`\${surface} group rounded-2xl open:border-violet-400/30 open:bg-violet-400/[0.03]\`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-white marker:content-none sm:text-lg">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-violet-300 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
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
  const ctaContent = `import Link from 'next/link'

export default function CTA({ service }) {
  const serviceTitle = ${JSON.stringify(serviceTitle)}
  const primaryCta = service?.primaryCta || ${JSON.stringify(service.primaryCta || 'Book a Strategy Call')}

  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-transparent p-8 sm:p-14 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Next Steps</p>
        <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Ready to scale with {serviceTitle}?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
          Connect with our team to discuss requirements, project timeline, and tailored strategy.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-500 px-8 text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
          >
            {primaryCta}
          </Link>
        </div>
      </div>
    </section>
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

export default function ${compName}({ service }) {
  return (
    <main className="service-page bg-[#09090b] text-zinc-100 min-h-screen">
      <Hero service={service} />
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

  registryEntries.push({
    slug: serviceSlug,
    varName: compName,
    relPath: `./${serviceSlug}`,
  })
}

// Write registry.js
let registryContent = `// Auto-generated 74 service page component registry\n`
for (const entry of registryEntries) {
  registryContent += `import ${entry.varName} from '${entry.relPath}'\n`
}

registryContent += `\nexport const serviceRegistry = {\n`
for (const entry of registryEntries) {
  registryContent += `  '${entry.slug}': ${entry.varName},\n`
}
registryContent += `}\n\n`

registryContent += `export function getServiceComponent(slug) {\n`
registryContent += `  if (!slug) return null\n`
registryContent += `  const normalized = Array.isArray(slug) ? slug.join('/') : slug\n`
registryContent += `  return serviceRegistry[normalized] || null\n`
registryContent += `}\n\n`

registryContent += `export {\n`
for (const entry of registryEntries) {
  registryContent += `  ${entry.varName},\n`
}
registryContent += `}\n`

fs.writeFileSync(path.join(baseDir, 'registry.js'), registryContent)

console.log(`Successfully generated all 74 service folders, components, and registry.js!`)
