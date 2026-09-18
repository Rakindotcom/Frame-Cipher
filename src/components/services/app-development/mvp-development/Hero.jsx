import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Best MVP Development Service in Bangladesh"
  const subtitle = service?.heroHook || service?.shortDesc || service?.metaDescription || "Lean, functional minimum viable products built to validate demand, onboard real users, and gather actionable data before committing to full-scale build costs."
  const isPillar = false
  const quote = "An MVP isn't a broken or incomplete app — it's the simplest complete version of your core value proposition. It does one thing exceptionally well so real users can tell you what to build next."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          
          <span>/</span>
          <Link href="/services/app-development" className="transition hover:text-frame-fg">App Development</Link>
          
          <span>/</span>
          <span className="text-frame-accent">MVP Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow={isPillar ? 'Core Service Pillar' : 'App Development / Focused Capability'}
        meta="One In-House Team / Built For Scale"
        number="360"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Book a Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages & Pricing
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* VALUE BANNER */}
      {quote && (
        <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
              Architecture & Execution Standard
            </p>
            <blockquote className="font-heading text-lg md:text-2xl font-bold uppercase tracking-tight text-frame-fg leading-relaxed">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>
        </section>
      )}
    </div>
  )
}
