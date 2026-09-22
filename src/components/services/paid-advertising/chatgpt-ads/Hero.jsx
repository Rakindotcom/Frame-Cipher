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
          <span className="text-frame-accent">ChatGPT Ads Management</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
        title="Best ChatGPT Ads Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Request a Consultation</PosterButton>
            <PosterButton href="/services/paid-advertising" variant="outline">
              Explore Paid Advertising
            </PosterButton>
          </>
        }
      >
        Reach customers while they research, compare options, and make decisions inside ChatGPT.
        {' '}
        Framecipher provides ChatGPT Ads Management Service from Dhaka for businesses targeting
        eligible international markets. We manage campaign setup, context targeting, ad creative,
        conversion tracking, optimization, and performance reporting. Our approach combines paid
        advertising expertise with practical AI search experience. We look beyond the ad itself
        and consider the full journey from conversational intent to landing page and conversion.
        {' '}
        ChatGPT Ads are an evolving advertising channel, but the core campaign workflow is already
        operational through OpenAI Ads Manager. We work with the features and markets currently
        available, test carefully, and report what the data actually supports.
      </PageHero>
    </div>
  )
}