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
      className="sw-btn sw-btn-primary"
    >
      {children}<ArrowIcon />
    </Link>
  )
}

export default function ServiceExperienceCTA({ serviceName, primaryCta }) {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="fc-laser-card mx-auto max-w-7xl overflow-hidden rounded-2xl p-8 md:p-14">

        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl font-heading text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Ready to move your {serviceName.toLowerCase()} project forward?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
              Tell us what you are trying to achieve. We will review the scope and recommend a practical next step without sales pressure, or explore our verified <Link href="/case-studies" className="text-white underline decoration-[#A855F7] hover:text-[#C084FC] transition-colors">case studies</Link> to see documented results.
            </p>
          </div>
          <PrimaryLink href="/contact">{primaryCta || 'Request a consultation'}</PrimaryLink>
        </div>
      </div>
    </section>
  )
}
