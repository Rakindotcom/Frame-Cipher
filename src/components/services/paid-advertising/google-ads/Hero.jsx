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
          <span className="text-frame-accent">Google Ads Management</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
        title="Best Google Ads Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Consultation</PosterButton>
            <PosterButton href="/services/paid-advertising" variant="outline">
              Explore Paid Advertising
            </PosterButton>
          </>
        }
      >
        Google Ads can generate qualified leads and sales when campaign structure, targeting,
        tracking, and optimization work together. Framecipher provides Google Ads management
        service in Bangladesh for businesses that want their advertising budget tied to
        measurable business outcomes, not just clicks and impressions.
        {' '}
        We manage Google Search, Shopping, Performance Max, Display, YouTube, and remarketing
        campaigns for businesses in Bangladesh and international markets. Our approach starts
        with your offer, audience, conversion goals, and economics before we decide where your
        budget should go. You keep ownership of your Google Ads account and maintain full
        visibility into campaigns, spending, performance, and results.
      </PageHero>
    </div>
  )
}