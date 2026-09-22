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
          <span className="text-frame-accent">LinkedIn Ads Management</span>
        </div>
      </nav>

      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
        title="Best LinkedIn Ads Management Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get a Free Consultation</PosterButton>
            <PosterButton href="/services/paid-advertising" variant="outline">
              Explore Paid Advertising
            </PosterButton>
          </>
        }
      >
        LinkedIn Ads can help B2B businesses reach decision-makers, generate qualified leads,
        build demand, and support longer sales cycles. The value is not simply reaching more
        professionals. It is reaching the right companies and people with a message that fits
        their business needs and buying stage.
        {' '}
        Framecipher provides LinkedIn Ads Management Service in Bangladesh for B2B businesses
        targeting specific industries, companies, job functions, seniority levels, and buying
        committees. We manage LinkedIn campaigns for businesses in Bangladesh and global
        markets, with strategy built around your ideal customer profile, sales process,
        conversion goals, and pipeline economics. Your LinkedIn Campaign Manager account
        remains under your ownership. You retain access to your campaigns, advertising data,
        audiences, spend, and performance information.
      </PageHero>
    </div>
  )
}