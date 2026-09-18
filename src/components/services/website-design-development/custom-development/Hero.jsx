import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

const customFitReasons = [
  'Unique business workflows',
  'Custom data structures',
  'Advanced integrations',
  'Authentication and user roles',
  'Customer dashboards or portals',
  'SaaS functionality',
  'Headless ecommerce',
  'Application-specific performance requirements',
  'Custom APIs and backend logic',
  'A product that will continue evolving over time',
]

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b-2 border-frame-border bg-frame-bg/90 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Custom &amp; Next.js</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Custom Next.js Engineering
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              10
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Best Custom / Next.js Development Service in Bangladesh
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Framecipher builds custom websites and web applications on Next.js/React.js for businesses with performance, integration, or scalability needs that pre-built platforms genuinely can&apos;t accommodate. Whether you&apos;re a growing company in Dhaka or a scaling business across the US, UK, Australia, Canada, or UAE, our custom development services deliver a platform built specifically around what your product actually needs, not what a template allows.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </div>

          {/* KINETIC BRUTALIST DASHBOARD / METRICS */}
          <div className="mt-16 grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border md:grid-cols-4">
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Core Engine
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Next.js 15 &amp; React
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                App Router &amp; Server Actions
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Architecture
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Full-Stack TS
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                End-to-end type safety &amp; validation
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Speed Standard
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Sub-Second Load
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Edge delivery &amp; dynamic SSR
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Ownership
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Zero Lock-In
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                100% full source code ownership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE BANNER / WHY CHOOSE CUSTOM DEVELOPMENT */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Architectural Strategic Fit
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Custom / Next.js Development?
            </h2>

            <div className="space-y-5 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg mt-6">
              <p>
                A custom website or application should solve a problem that an off-the-shelf platform cannot handle well.
              </p>
              <p>
                Next.js gives businesses a foundation for building custom web experiences while keeping the frontend, application logic, data, integrations, and performance strategy under greater control.
              </p>
            </div>

            <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-frame-fg">
                Custom development can make sense when you need:
              </h3>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {customFitReasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-frame-fg">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>
                The important question is not whether custom development sounds more advanced. It is whether the additional control creates enough business value to justify the additional development and maintenance.
              </p>
              <p className="font-semibold text-frame-fg">
                That&apos;s why every project starts with a platform-fit assessment before development begins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
