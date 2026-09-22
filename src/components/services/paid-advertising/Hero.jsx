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
          <span className="text-frame-accent">Paid Advertising</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Core Service Pillar"
        meta="One In-House Team / Built For Conversions"
        number="01"
        title="Paid Advertising Services in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Your Free Ad Account Audit</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to the Framecipher Media Team
            </PosterButton>
          </>
        }
      >
        Ad spend should be accountable. Framecipher provides paid advertising services across
        Google, Meta, LinkedIn, TikTok, Microsoft, Amazon, and other relevant platforms, with
        campaigns built around leads, sales, bookings, and measurable business outcomes. We do
        not treat clicks, impressions, or reach as the final result. Campaign strategy, creative,
        landing pages, conversion tracking, and optimization are connected so you can see where
        your budget is going and what it is producing — for businesses in Bangladesh and
        international markets including the US, UK, Australia, Canada, and UAE.
      </PageHero>
    </div>
  )
}