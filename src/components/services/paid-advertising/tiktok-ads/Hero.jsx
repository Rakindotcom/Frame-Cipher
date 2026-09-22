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
          <span className="text-frame-accent">TikTok Ads Management</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
        title="TikTok Ads Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="/services/paid-advertising" variant="outline">
              Explore Paid Advertising
            </PosterButton>
          </>
        }
      >
        TikTok Ads can put your business in front of new audiences, but effective campaigns need
        more than short-form videos and a media budget. Framecipher provides TikTok Ads
        management for businesses in Bangladesh and international markets, combining campaign
        strategy, native creative testing, audience development, tracking, and ongoing
        optimization.
        {' '}
        We manage campaigns around measurable business goals, including website sales, ecommerce
        revenue, qualified leads, app growth, and customer acquisition. Our approach combines
        creative production with performance marketing so your ads are built to attract attention
        and give the platform enough useful signals to optimize delivery.
      </PageHero>
    </div>
  )
}