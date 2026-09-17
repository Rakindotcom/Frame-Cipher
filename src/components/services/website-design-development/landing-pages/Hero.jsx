import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Landing Pages</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / Sub-Service"
        meta="Single Conversion Goal / In-House Team"
        number="04"
        title="Best Landing Page Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Request a Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages & Pricing
            </PosterButton>
          </>
        }
      >
        Build a landing page that turns campaign traffic into leads, sales, bookings, or signups. Frame Cipher combines campaign strategy, conversion-focused UX, fast development, tracking, and testing through one in-house team.
      </PageHero>

      {/* CAMPAIGN CONVERSION JOURNEY BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Landing Page Development Built Around Your Campaign Goal
          </p>
          <h2 className="font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Campaign Goal &rarr; Audience &rarr; Traffic Source &rarr; Message &rarr; Landing Page &rarr; CTA &rarr; Conversion
          </h2>
          <p className="mt-5 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            A landing page should do more than look good. It should give your campaign one clear destination and one primary action. We match message and design directly to where your visitors arrive from.
          </p>
        </div>
      </section>
    </div>
  )
}
