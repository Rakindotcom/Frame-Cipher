import Link from 'next/link'

const surface = 'border border-white/10 bg-white/[0.035]'

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
    <section className="relative isolate overflow-hidden border-b-2 border-frame-border px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(139,92,246,0.20),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(76,29,149,0.13),transparent_36%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 overflow-hidden text-xs font-semibold text-zinc-500">
          <Link href="/" className="shrink-0 transition hover:text-white">Home</Link><span>/</span>
          <Link href="/services" className="shrink-0 transition hover:text-white">Services</Link>
          {service.pillarSlug && (
            <>
              <span>/</span>
              <Link href={`/services/${service.pillarSlug}`} className="truncate transition hover:text-white">
                {pillarName}
              </Link>
            </>
          )}
          <span>/</span><span className="truncate text-zinc-300">{serviceName}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
                {isPillar ? 'Complete solution' : pillarName}
              </span>
              <span className="text-sm text-zinc-500">Based in Dhaka · Serving worldwide</span>
            </div>
            <h1 className="max-w-6xl font-heading text-[clamp(2.45rem,7.8vw,7.8rem)] font-bold uppercase leading-[0.84] tracking-tighter text-white">
              {service.h1 || serviceName}
            </h1>
            <p className="mt-8 max-w-3xl text-base font-semibold leading-snug text-zinc-300 sm:text-lg md:text-2xl md:leading-relaxed">
              {heroCopy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">{service.primaryCta || 'Get a free consultation'}</PrimaryLink>
              <PrimaryLink href={isPillar ? '#services' : '#pricing'} secondary>
                {isPillar ? `Explore ${subServices.length} services` : 'View scope & pricing'}
              </PrimaryLink>
            </div>
          </div>

          <aside className={`${surface} rounded-3xl p-6 shadow-2xl shadow-black/20`}>
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
