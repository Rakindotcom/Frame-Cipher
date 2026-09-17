import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Best Android App Development Service in Bangladesh"
  const subtitle = service?.shortDesc || service?.metaDescription || "Android app development in Kotlin, native performance, Play Store deployment, and apps built for the real diversity of Android devices."
  const isPillar = service?.pageType === 'Pillar Service'
  const pillarParent = service?.pillarParent
  const quote = service?.quote || "Android isn't one device, it's thousands of them, running different OS versions, at wildly different price points. An app tested only on a flagship phone is an app that hasn't actually been tested for most of its real users."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
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
          <span className="text-frame-accent">Android App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow={isPillar ? 'Core Service Pillar' : 'Specialized Capability'}
        meta="One In-House Team / Built For Results"
        number={isPillar ? '01' : '360'}
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Book a Consultation</PosterButton>
            <PosterButton href="/services" variant="outline">
              Explore All Services
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* QUOTE BANNER IF PRESENT */}
      {quote && (
        <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <blockquote className="font-heading text-lg md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>
        </section>
      )}
    </div>
  )
}
