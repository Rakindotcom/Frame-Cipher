import Link from 'next/link'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

const surface = 'rounded-xl border border-white/[0.08] bg-[#121214]'

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
        ? 'sw-btn sw-btn-outline'
        : 'sw-btn sw-btn-primary'}
    >
      {children}<ArrowIcon />
    </Link>
  )
}

export default function ServiceExperienceHero({
  service,
  serviceName,
  pillarName,
  isPillar,
  subServices,
  heroCopy,
  processCount,
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 overflow-hidden text-xs font-semibold text-zinc-500">
          <Link href="/" className="shrink-0 transition-colors duration-200 hover:text-white">Home</Link><span>/</span>
          <Link href="/services" className="shrink-0 transition-colors duration-200 hover:text-white">Services</Link>
          {service.pillarSlug && (
            <>
              <span>/</span>
              <Link href={`/services/${service.pillarSlug}`} className="truncate transition-colors duration-200 hover:text-white">
                {pillarName}
              </Link>
            </>
          )}
          <span>/</span><span className="truncate text-zinc-300">{serviceName}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-[#A855F7]">
                {isPillar ? 'Complete solution' : pillarName}
              </span>
              <span className="text-sm text-zinc-500">Based in Dhaka · Serving worldwide</span>
            </div>
            <h1 className="max-w-6xl font-heading text-4xl font-medium leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {service.h1 || serviceName}
            </h1>
            <p className="mt-8 max-w-3xl text-base font-semibold leading-snug text-zinc-300 sm:text-lg md:text-2xl md:leading-relaxed">
              {renderContextualParagraph(heroCopy, {
                currentSlug: service.slug,
                maxLinks: 1,
                theme: 'violet',
              })}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">{service.primaryCta || 'Get a free consultation'}</PrimaryLink>
              <PrimaryLink href={isPillar ? '#services' : '#pricing'} secondary>
                {isPillar ? `Explore ${subServices.length} services` : 'View scope & pricing'}
              </PrimaryLink>
            </div>
          </div>

          <aside className={`${surface} p-6`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">At a glance</p>
            <dl className="mt-5 divide-y divide-white/10">
              {[
                ['Service type', isPillar ? 'Complete solution' : 'Specialist service'],
                ['Delivery process', `${processCount || 'Custom'} stages`],
                ['Consultation', 'Free, no pressure'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm text-zinc-400">{label}</dt>
                  <dd className={`text-right text-sm font-semibold ${label === 'Consultation' ? 'text-emerald-300' : 'text-white'}`}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
