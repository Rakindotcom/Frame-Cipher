import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

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

      {/* HERO */}
      <PageHero
        eyebrow="Focused Service / Custom Next.js Engineering"
        meta="React & Next.js / Sub-Second Performance"
        number="10"
        title="Best Custom / Next.js Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </>
        }
      >
        Framecipher builds custom websites and web applications on Next.js/React.js for businesses with performance, integration, or scalability needs that pre-built platforms genuinely can&apos;t accommodate. Whether you&apos;re a growing company in Dhaka or a scaling business across the US, UK, Australia, Canada, or UAE, our custom development services deliver a platform built specifically around what your product actually needs, not what a template allows.
      </PageHero>

      {/* KINETIC BRUTALIST DASHBOARD / METRICS */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">CUSTOM_ENGINE // NEXT.JS FULL-STACK</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-GRADE</span>
              <span>STACK: REACT 19 / TYPESCRIPT</span>
              <span className="text-frame-accent font-black">LOCK-IN: ZERO (100% OWNED)</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Core Engine</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Next.js 15 & React</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">App Router & Actions</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Architecture</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Full-Stack TS</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">End-to-End Type Safety</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Speed Standard</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Sub-Second Load</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Edge SSR Delivery</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Ownership</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Zero Lock-In</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">100% Full Source IP</p>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC VALUE BANNER / WHY CHOOSE CUSTOM DEVELOPMENT */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
            <div>
              <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
                Architectural Strategic Fit
              </p>
              <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
                Why Choose Custom / Next.js Development?
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-frame-fg">
                <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Unique Requirements</span>
                <span className="text-frame-accent font-bold">&rarr;</span>
                <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Full-Stack Architecture</span>
                <span className="text-frame-accent font-bold">&rarr;</span>
                <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Integrations &amp; Data</span>
                <span className="text-frame-accent font-bold">&rarr;</span>
                <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Scalable Product</span>
              </div>

              <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-1">
                <div className="bg-frame-bg p-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Build For</span>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    Growing companies and products with performance, integration, or scalability needs that pre-built platforms genuinely can&apos;t accommodate.
                  </p>
                </div>
                <div className="bg-frame-bg p-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">What We Build</span>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    Custom websites, web applications, SaaS products, headless ecommerce, dashboards, and portals on Next.js/React with full source ownership.
                  </p>
                </div>
                <div className="bg-frame-bg p-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    Every project starts with a platform-fit assessment, then frontend, backend, data, and performance are built around what your product needs.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
                <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-fg">
                  Not sure whether you need custom development or a pre-built platform? We&apos;ll tell you honestly which one makes sense.
                </p>
                <PosterButton href="/contact" className="shrink-0">
                  Get an Honest Assessment
                </PosterButton>
              </div>
            </div>

            <div>
              <div className="border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
