import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || 'Best AI Search Optimization (AEO/GEO) Service in Bangladesh'
  const subtitle =
    'Get your brand discovered, understood, and referenced across AI-powered search. Framecipher helps businesses improve visibility across ChatGPT, Gemini, Perplexity, Google AI search, and other answer experiences through AEO, GEO, entity optimization, content strategy, technical SEO, and AI visibility tracking. We turn real customer queries into clearer answers, stronger brand signals, and a measurable AI search strategy.'
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
          <span className="text-frame-accent">AI Search Optimization (AEO/GEO)</span>
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
            <PosterButton href="/contact">Request an AI Search Consultation</PosterButton>
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