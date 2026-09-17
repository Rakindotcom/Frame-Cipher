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
          <span className="text-frame-accent">Business Website</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / Sub-Service"
        meta="Built Around Your Sales Process / In-House Team"
        number="02"
        title="Best Business Website Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages & Pricing
            </PosterButton>
          </>
        }
      >
        Framecipher builds business websites for SMEs, startups, and corporate brands that need a site that actually generates leads, not a digital brochure.
      </PageHero>

      {/* BUYER JOURNEY / SALES PROCESS BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            A Business Website Built Around Your Sales Process
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Business Goals &rarr; Buyer Journey &rarr; Website Structure &rarr; Lead Capture &rarr; CRM &rarr; Conversion Tracking
          </h2>
          <p className="mt-5 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            A business website should do more than present your company online. We map your buyer journey, identify the information customers need before contacting you, and structure the website around those decisions.
          </p>
        </div>
      </section>
    </div>
  )
}
