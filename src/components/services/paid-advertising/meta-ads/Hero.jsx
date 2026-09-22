import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/paid-advertising" className="transition hover:text-frame-fg">
            Paid Advertising
          </Link>
          <span>/</span>
          <span className="text-frame-accent">Meta Ads Management</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
        title="Best Meta Ads Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Consultation</PosterButton>
            <PosterButton href="/services/paid-advertising" variant="outline">
              Explore Paid Advertising
            </PosterButton>
          </>
        }
      >
        Meta Ads can help businesses create demand, generate qualified leads, and drive
        ecommerce sales across Facebook and Instagram. But successful campaigns require more
        than selecting an audience and boosting a post.
        {' '}
        Framecipher provides Meta Ads Management Service in Bangladesh built around creative
        strategy, conversion data, audience signals, campaign structure, and continuous
        optimization. We manage campaigns for businesses in Bangladesh and international
        markets, with strategy adapted to the offer, customer journey, market, and business
        economics. Your Meta Ads account stays under your ownership. You retain visibility into
        campaign activity, advertising spend, performance data, and results.
      </PageHero>
    </div>
  )
}