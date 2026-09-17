import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <span className="text-frame-accent">Website Design & Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Core Service Pillar"
        meta="One In-House Team / Built For Conversion"
        number="01"
        title="Website Design & Development Services in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Website Quote</PosterButton>
            <PosterButton href="#sub-services" variant="outline">
              Explore Sub-Services (12)
            </PosterButton>
          </>
        }
      >
        Custom websites that load fast, look professional, and turn visitors into customers built by one in-house team for businesses across Bangladesh and worldwide.
      </PageHero>

      {/* CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Website Design & Development for Growing Businesses
          </p>
          <p className="text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            A website that loads slowly, looks outdated, or doesn&apos;t work properly on mobile costs your customers before they even see what you offer. Framecipher builds business websites, eCommerce stores, and custom web applications for SMEs, startups in Bangladesh and international clients across the US, UK, Australia, and Canada handled by one in-house team from design through launch.
          </p>
        </div>
      </section>
    </div>
  )
}

