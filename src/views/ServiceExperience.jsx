import Link from 'next/link'
import { getRelatedSubServices, getSubServicesForPillar } from '../data/servicePages'
import { cleanServiceText as cleanText } from '../data/serviceContent'

const surface = 'border border-white/10 bg-white/[0.035]'

function cleanName(value = '') {
  return String(value || '')
    .replace(/ Service Page$/i, '')
    .replace(/ Services? in Bangladesh$/i, '')
    .trim()
}


function getHeroCopy(service) {
  if (service.shortDesc?.trim()) return cleanText(service.shortDesc)

  const blocks = (service.heroHook || '')
    .split(/\n\s*\n/)
    .map(cleanText)
    .filter(Boolean)

  return blocks.find(
    (block) =>
      block.toLowerCase() !== service.h1?.trim().toLowerCase() &&
      block.length > 55 &&
      !/^(get|book|request|talk|start)\b/i.test(block)
  ) || cleanText(service.metaDescription)
}

function getParagraphs(value = '') {
  return value
    .split(/\n\s*\n/)
    .map((paragraph) => cleanText(paragraph.replace(/^\*\s*/, '')))
    .filter(Boolean)
}

function getReasonCards(items = []) {
  const cards = []
  for (let index = 0; index < items.length; index += 1) {
    const item = cleanText(items[index])
    const next = cleanText(items[index + 1] || '')
    const looksLikeHeading = item.length < 75 && !/[.!?]$/.test(item)
    if (looksLikeHeading && next) {
      cards.push({ title: item, text: next })
      index += 1
    } else if (item) {
      cards.push({ title: '', text: item })
    }
  }
  return cards
}

function getPresentableAdvantages(items = []) {
  const conciseItems = items.filter(
    (item) => cleanText(item.title).length <= 110 && cleanText(item.text).length <= 650
  )

  if (conciseItems.length) return conciseItems.slice(-6)

  return items.slice(0, 2).map((item, index) => ({
    title: index === 0 ? 'One accountable in-house team' : `Delivery advantage ${String(index + 1).padStart(2, '0')}`,
    text: cleanText(item.text),
  }))
}


function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" fill="none">
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
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

function TextPanel({ eyebrow, title, text }) {
  return (
    <article className={`${surface} rounded-3xl p-7 md:p-9`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">{eyebrow}</p>
      <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-zinc-400">
        {getParagraphs(text).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  )
}

export default function ServiceExperience({ service }) {
  const isPillar = service.pageType === 'Pillar Service'
  const subServices = isPillar ? getSubServicesForPillar(service.slug) : []
  const relatedServices = getRelatedSubServices(service, 4)
  const advantages = getPresentableAdvantages(service.whyChooseUs)
  const pricing = service.pricing?.table
  const impactCards = getReasonCards(service.whyMatters)
  const serviceName = cleanName(service.sheetTitle)
  const pillarName = cleanName(service.pillarParent)
  const processCount = service.processSteps?.length || 0
  const faqSchema = service.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: cleanText(faq.answer) },
    })),
  } : null

  return (
    <main className="service-experience bg-[#09090b] text-zinc-100">
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }} />}

      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(139,92,246,0.20),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(76,29,149,0.13),transparent_36%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 overflow-hidden text-xs font-semibold text-zinc-500">
            <Link href="/" className="shrink-0 transition hover:text-white">Home</Link><span>/</span>
            <Link href="/services" className="shrink-0 transition hover:text-white">Services</Link>
            {service.pillarSlug && <><span>/</span><Link href={`/services/${service.pillarSlug}`} className="truncate transition hover:text-white">{pillarName}</Link></>}
            <span>/</span><span className="truncate text-zinc-300">{serviceName}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">{isPillar ? 'Core service pillar' : pillarName}</span>
                <span className="text-sm text-zinc-500">Based in Dhaka · Serving worldwide</span>
              </div>
              <h1 className="max-w-5xl font-heading text-[clamp(2.65rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-white">{service.h1 || serviceName}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl md:leading-9">{getHeroCopy(service)}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">{service.primaryCta || 'Get a free consultation'}</PrimaryLink>
                <PrimaryLink href={isPillar ? '#services' : '#pricing'} secondary>{isPillar ? `Explore ${subServices.length} services` : 'View scope & pricing'}</PrimaryLink>
              </div>
            </div>

            <aside className={`${surface} rounded-3xl p-6 shadow-2xl shadow-black/20`}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">At a glance</p>
              <dl className="mt-5 divide-y divide-white/10">
                {[['Service type', isPillar ? 'Full-service pillar' : 'Specialist service'], ['Delivery process', `${processCount || 'Custom'} stages`], ['Consultation', 'Free, no pressure']].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"><dt className="text-sm text-zinc-400">{label}</dt><dd className={`text-right text-sm font-semibold ${label === 'Consultation' ? 'text-emerald-300' : 'text-white'}`}>{value}</dd></div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {service.quote && <section className="border-b border-white/10 px-5 py-12 sm:px-8 md:py-16"><blockquote className="mx-auto max-w-5xl text-center font-quote text-2xl font-medium italic leading-relaxed text-zinc-200 md:text-4xl">“{cleanText(service.quote)}”</blockquote></section>}

      {isPillar && subServices.length > 0 && (
        <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Specialized capabilities" title={`Everything inside ${serviceName}`}>Choose the focused service that matches your immediate goal, or combine several into one coordinated engagement.</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {subServices.map((sub, index) => <Link key={sub.slug} href={`/services/${sub.slug}`} className={`${surface} group flex min-h-64 flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.07]`}>
              <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.18em] text-violet-300">{String(index + 1).padStart(2, '0')}</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition group-hover:border-violet-400/40 group-hover:text-violet-200"><ArrowIcon /></span></div>
              <h3 className="mt-10 font-heading text-2xl font-semibold leading-tight tracking-tight text-white">{cleanName(sub.sheetTitle)}</h3><p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-400">{getHeroCopy(sub)}</p>
            </Link>)}
          </div>
        </div></section>
      )}

      {!isPillar && service.offerings?.length > 0 && (
        <section className="px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Scope of work" title="What we deliver">A practical breakdown of the strategy, production, and technical work included in this service.</SectionHeading>
          <div className="grid gap-4 lg:grid-cols-2">{service.offerings.map((offering, index) => <article key={`${offering.title}-${index}`} className={`${surface} rounded-3xl p-7 md:p-9`}>
            <div className="flex items-start gap-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-sm font-bold text-violet-300">{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-heading text-xl font-semibold leading-snug text-white md:text-2xl">{cleanText(offering.title)}</h3>{offering.description && <p className="mt-4 text-[15px] leading-7 text-zinc-400">{cleanText(offering.description)}</p>}</div></div>
            {offering.bullets?.length > 0 && <ul className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">{offering.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5 text-sm leading-6 text-zinc-300"><CheckIcon /><span>{cleanText(bullet)}</span></li>)}</ul>}
          </article>)}</div>
        </div></section>
      )}

      {(impactCards.length > 0 || advantages.length > 0) && (
        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          {impactCards.length > 0 && <div><SectionHeading eyebrow="The business case" title="Why this matters" /><div className="space-y-5">{impactCards.map((reason, index) => <article key={`${reason.text}-${index}`} className="border-l-2 border-violet-400/50 pl-5">{reason.title && <h3 className="font-heading text-lg font-semibold text-white">{reason.title}</h3>}<p className={`${reason.title ? 'mt-2' : ''} text-[15px] leading-7 text-zinc-400`}>{reason.text}</p></article>)}</div></div>}
          {advantages.length > 0 && <div><SectionHeading eyebrow="Why Frame Cipher" title="Built for accountable delivery" /><div className="space-y-4">{advantages.map((item, index) => { const longTitle = item.title?.length > 110; return <article key={`${item.title}-${index}`} className={`${surface} rounded-2xl p-6`}><h3 className="font-heading text-lg font-semibold text-white">{longTitle ? `Advantage ${String(index + 1).padStart(2, '0')}` : cleanText(item.title)}</h3><p className="mt-3 text-[15px] leading-7 text-zinc-400">{longTitle ? `${cleanText(item.title)} ${cleanText(item.text)}` : cleanText(item.text)}</p></article> })}</div></div>}
        </div></section>
      )}

      {service.processSteps?.length > 0 && (
        <section className="px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Delivery process" title="A clear path from brief to result">Each stage has a defined outcome and review point, so you always know what is happening next.</SectionHeading>
          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{service.processSteps.map((step, index) => <li key={`${step.title}-${index}`} className={`${surface} relative overflow-hidden rounded-3xl p-7`}><span aria-hidden="true" className="absolute -right-2 -top-4 font-heading text-7xl font-semibold text-white/[0.035]">{String(index + 1).padStart(2, '0')}</span><span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Step {String(index + 1).padStart(2, '0')}</span><h3 className="mt-4 font-heading text-xl font-semibold text-white">{cleanText(step.title)}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{cleanText(step.description)}</p></li>)}</ol>
        </div></section>
      )}

      <PricingSection service={service} pricing={pricing} />
      <DetailsSection service={service} />
      <FaqSection faqs={service.faqs} />

      {relatedServices.length > 0 && <section className="border-t border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 md:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Keep exploring" title="Related services" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{relatedServices.map((related) => <Link key={related.slug} href={`/services/${related.slug}`} className={`${surface} group rounded-2xl p-6 transition hover:border-violet-400/40 hover:bg-violet-400/[0.06]`}><p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">{cleanName(related.pillarParent) || 'Service pillar'}</p><h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-white">{cleanName(related.sheetTitle)}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-violet-200">View service <ArrowIcon /></span></Link>)}</div></div></section>}

      <section className="px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-400/25 bg-[radial-gradient(circle_at_85%_10%,rgba(167,139,250,.24),transparent_35%),#18131f] p-8 md:p-14"><p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Start a conversation</p><div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-4xl font-heading text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">Ready to move your {serviceName.toLowerCase()} project forward?</h2><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">Tell us what you are trying to achieve. We will review the scope and recommend a practical next step without sales pressure.</p></div><PrimaryLink href="/contact">{service.primaryCta || 'Request a consultation'}</PrimaryLink></div></div></section>
    </main>
  )
}

function PricingSection({ service, pricing }) {
  const packages = service.pricing?.packages || []
  if (!packages.length && !pricing) return null
  const comparison = pricing?.headers[0] === 'Features'
  const mobileCards = !pricing ? [] : comparison
    ? pricing.headers.slice(1).map((name, index) => ({
      name,
      fields: pricing.rows.map((row) => ({ label: row[0], value: row[index + 1] })),
    }))
    : pricing.rows.map((row) => ({
      name: row[0],
      fields: pricing.headers.slice(1).map((label, index) => ({ label, value: row[index + 1] })),
    }))

  return (
    <section id="pricing" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto min-w-0 max-w-7xl">
        <SectionHeading eyebrow="Pricing guide" title="Clear scope before commitment">
          {service.pricing?.intro === packages[0]?.name
            ? 'Choose the scope that fits your business. Final pricing is confirmed after a scope review.'
            : cleanText(service.pricing?.intro || 'Final pricing is confirmed after a free scope review.')}
        </SectionHeading>
        {packages.length > 0 && (
          <div className="mb-8 grid gap-4 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article key={pkg.name} className={`${surface} min-w-0 rounded-3xl p-7`}>
                <h3 className="font-heading text-2xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-5 text-2xl font-bold text-violet-300">{pkg.price}</p>
                {pkg.description && <p className="mt-3 text-sm leading-6 text-zinc-400">{pkg.description}</p>}
                {pkg.features?.length > 0 && <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-300">
                  {pkg.features.map((feature) => <li key={feature} className="flex gap-2"><CheckIcon /><span>{feature}</span></li>)}
                </ul>}
              </article>
            ))}
          </div>
        )}
        {pricing && <>
          <div className="grid gap-4 md:hidden" data-pricing-mobile>
            {mobileCards.map((card) => (
              <article key={card.name} className={`${surface} min-w-0 rounded-2xl p-5`}>
                <h3 className="font-heading text-xl font-semibold text-white">{card.name}</h3>
                <dl className="mt-4 divide-y divide-white/10">
                  {card.fields.map(({ label, value }) => (
                    <div key={label} className="py-3">
                      <dt className="text-xs font-bold uppercase tracking-wide text-violet-300">{label}</dt>
                      <dd className="mt-1 text-sm leading-6 text-zinc-300">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className={`${surface} hidden overflow-hidden rounded-3xl md:block`}>
            <table className="w-full table-fixed text-left text-sm">
              <caption className="sr-only">Scope and pricing for {cleanName(service.sheetTitle)}</caption>
              <thead className="bg-white/[0.05]"><tr>
                {pricing.headers.map((header) => <th key={header} scope="col" className="break-words px-5 py-5 font-semibold text-white">{header}</th>)}
              </tr></thead>
              <tbody className="divide-y divide-white/10">
                {pricing.rows.map((row) => <tr key={row[0]} className="transition hover:bg-white/[0.025]">
                  <th scope="row" className="break-words px-5 py-4 align-top font-semibold leading-6 text-zinc-200">{row[0]}</th>
                  {row.slice(1).map((cell, index) => <td key={index} className="break-words px-5 py-4 align-top leading-6 text-zinc-400">{cell}</td>)}
                </tr>)}
              </tbody>
            </table>
          </div>
          {pricing.note && <p className="mt-5 text-sm leading-6 text-zinc-400">{pricing.note}</p>}
        </>}
        <p className="mt-6 text-sm leading-6 text-zinc-400">Prices shown are a guide. Your proposal confirms the final scope, fee, and delivery schedule before work begins.</p>
        <div className="mt-6"><PrimaryLink href="/contact">Request a quote</PrimaryLink></div>
      </div>
    </section>
  )
}

function DetailsSection({ service }) {
  if (!service.serviceAreas && !service.timeline && !service.guarantee) return null
  return <section className="px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Delivery details" title="Local context, global standards" /><div className="grid gap-4 lg:grid-cols-2">{service.serviceAreas && <TextPanel eyebrow="Coverage" title="Dhaka-based, worldwide delivery" text={service.serviceAreas} />}<div className="grid gap-4">{service.timeline && <TextPanel eyebrow="Schedule" title="Timeline & duration" text={service.timeline} />}{service.guarantee && <TextPanel eyebrow="Accountability" title="Review & approval" text={service.guarantee} />}</div></div></div></section>
}

function FaqSection({ faqs }) {
  if (!faqs?.length) return null
  return <section className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="FAQ" title="Common questions, answered" /><div className="space-y-3">{faqs.map((faq, index) => <details key={`${faq.question}-${index}`} className={`${surface} group rounded-2xl open:border-violet-400/30 open:bg-violet-400/[0.04]`}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-heading text-base font-semibold text-white marker:content-none md:px-7 md:py-6 md:text-lg"><span>{cleanText(faq.question)}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-violet-300 transition group-open:rotate-45">+</span></summary><p className="border-t border-white/10 px-6 py-5 text-[15px] leading-7 text-zinc-400 md:px-7">{cleanText(faq.answer)}</p></details>)}</div></div></section>
}
