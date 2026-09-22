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
          <span className="text-frame-accent">Pinterest Ads Management</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
        title="Pinterest Ads Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Request a Consultation</PosterButton>
            <PosterButton href="/services/paid-advertising" variant="outline">
              Explore Paid Advertising
            </PosterButton>
          </>
        }
      >
        Reach customers while they are planning what to buy, save, or try next.
        {' '}
        Framecipher provides Pinterest Ads Management Service from Dhaka for businesses targeting
        supported Pinterest advertising markets. We manage campaign strategy, Pin creative,
        audience targeting, catalog advertising, conversion tracking, optimization, and
        reporting.
      </PageHero>
    </div>
  )
}