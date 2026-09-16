import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-violet-500 px-6 text-sm font-bold text-white shadow-[0_14px_45px_rgba(139,92,246,0.28)] transition hover:-translate-y-0.5 hover:bg-violet-400"
    >
      {children}<ArrowIcon />
    </Link>
  )
}

export default function ServiceExperienceCTA({ serviceName, primaryCta }) {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-400/25 bg-[radial-gradient(circle_at_85%_10%,rgba(167,139,250,.24),transparent_35%),#18131f] p-8 md:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Start a conversation</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl font-heading text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Ready to move your {serviceName.toLowerCase()} project forward?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
              Tell us what you are trying to achieve. We will review the scope and recommend a practical next step without sales pressure.
            </p>
          </div>
          <PrimaryLink href="/contact">{primaryCta || 'Request a consultation'}</PrimaryLink>
        </div>
      </div>
    </section>
  )
}
