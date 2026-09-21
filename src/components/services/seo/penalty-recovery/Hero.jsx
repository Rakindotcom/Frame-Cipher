import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || 'Google Penalty Recovery Services in Bangladesh'
  const subtitle =
    'A sudden loss of Google visibility can look like a penalty, but the cause is not always a manual action. It could be a Google ranking-system change, technical issue, migration problem, indexing loss, security issue, or another change affecting your search performance. Framecipher starts with diagnosis before recommending recovery work. We investigate what changed, which pages and queries were affected, whether Google has issued a manual action, and what evidence points to the actual cause. Then we build a documented recovery plan for businesses in Bangladesh and international markets.'
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
          <span className="text-frame-accent">Google Penalty Recovery</span>
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