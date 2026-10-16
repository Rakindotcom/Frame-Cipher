'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = "Commercial Video Production for Brands in Dhaka"
  const subtitle = "A commercial video is made to persuade: it presents a product, service or brand to an audience and asks them to act. FrameCipher Studio produces commercials and product ads, handling the concept, shooting and post-production with one team. We engineer high-retention advertising spots built for national television broadcasting and high-budget digital paid media campaigns."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Commercial Video</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="High-Impact Brand Advertising"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Commercial Video &rarr;
            </PosterButton>
            <PosterButton href="/projects#video-work" variant="outline">
              View Studio Portfolio &rarr;
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
            Persuasion-Led Commercials, Not Just Pretty Shots
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Built for the First Three Seconds.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            A commercial for paid social, a broadcast TVC and a product spot are different jobs with different clocks.
            We plan the hooks, lengths and aspect ratios before shooting, so the same footage serves every placement
            without compromising the frame.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Before production starts, we agree the offer, audience, placements and cutdown set in writing. The concept
            and the edit are then engineered around the response you need.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Hook-First Concept</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Cinema 4K Capture</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Broadcast Mastering</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Multi-Ratio Cutdowns</span>
          </div>
        </div>
      </section>
    </div>
  )
}
