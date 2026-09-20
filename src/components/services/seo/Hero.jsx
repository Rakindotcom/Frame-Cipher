import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <span className="text-frame-accent">Search Engine Optimization</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Core Service Pillar"
        meta="One In-House Team / Built For Conversion"
        number="01"
        title="Search Engine Optimization Services in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free SEO Audit</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to the Framecipher SEO Team
            </PosterButton>
          </>
        }
      >
        Rankings that support real business growth. Framecipher combines technical
        SEO, content strategy, on-page optimization, authority building, local and
        ecommerce SEO, and AI search optimization under one in-house team. We help
        businesses in Bangladesh and international markets turn search visibility
        into qualified traffic, leads, calls, and sales.
      </PageHero>
    </div>
  )
}