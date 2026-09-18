import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

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
          <span className="text-frame-accent">Custom & Next.js</span>
        </div>
      </nav>

      {/* HERO SECTION IN HOME STYLE */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Custom Development
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              07
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
              View Pricing & Plans &rarr;
            </PosterButton>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE BANNER */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture & Scalability
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Full-Stack Modern Engineering Without Technical Debt
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
              <span>Discovery</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>UI Systems</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>Full-Stack Next.js</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>API & Database</span>
              <span className="text-frame-muted-fg font-normal">&rarr;</span>
              <span>DevOps & Scale</span>
            </div>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Next.js provides the premier foundation for modern digital experiences—giving you total control over the frontend, server-side logic, database schemas, third-party integrations, and performance. We build tailor-made solutions when off-the-shelf templates cannot support your workflows, user roles, dashboards, or headless commerce operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
