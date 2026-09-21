import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || 'Google AdSense Approval Service in Bangladesh'
  const subtitle =
    'Getting rejected by Google AdSense can be frustrating, especially when the notice does not clearly explain which part of your site needs attention. Framecipher provides Google AdSense approval service for websites that need a clear readiness assessment, targeted fixes, and practical support before applying or reapplying. We review your content, navigation, site structure, policy compliance, technical setup, traffic sources, and publisher eligibility against Google\u2019s current guidance. We work with publishers and businesses in Bangladesh and across international markets.'
  const isPillar = service?.pageType === 'Pillar Service'
  const isSubService = service?.pageType === 'Sub Service'
  const pillarParent = service?.pillarParent

  return (
    <div className="border-b-2 border-frame-border bg-frame-bg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b-2 border-frame-border bg-frame-bg px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          {pillarParent && (
            <>
              <span>/</span>
              <span className="text-frame-muted-fg">{pillarParent}</span>
            </>
          )}
          <span>/</span>
          <span className="text-frame-accent">Google AdSense Approval</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow={isPillar ? 'Core Service Pillar' : isSubService ? 'Specialized Capability' : 'Specialized Capability'}
        meta="One In-House Team / Built For Results"
        number={isPillar ? '01' : '360'}
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="/services" variant="outline">
              Explore All Services
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>
    </div>
  )
}