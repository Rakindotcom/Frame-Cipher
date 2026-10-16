'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || 'Promotional Video Production in Dhaka'
  const subtitle =
    service?.tagline ||
    'A promotional video tells people about a product, service, launch or campaign and gives them a reason to respond. FrameCipher Studio plans, shoots and edits promotional videos built for measurable conversion.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Promotional Video Production</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Commercial & Product Promos"
        meta="High-Tempo Hooks / Studio & Location Filming / One Team"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Get a Free Promotional Video Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#video-work" variant="outline">
              View Our Promotional Video Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* VALUE PROPOSITION SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
            Goal-Driven Video
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Promotional Videos Built for Clear Response
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            A promotional video tells people about a product, service, launch or campaign and gives them a clear reason to respond. Before we shoot, we agree on one main goal: brand awareness, high-intent leads, flash sales, or product announcements.
          </p>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Hook-Led Scripting</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Dynamic Studio Lighting</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Kinetic Motion Graphics</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Multi-Ratio Masters</span>
          </div>
        </div>
      </section>
    </div>
  )
}
