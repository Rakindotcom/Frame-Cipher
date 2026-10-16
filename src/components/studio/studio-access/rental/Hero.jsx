'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Studio Space Rental in Dhaka'
  const subtitle =
    'FrameCipher Studio is a rentable soundstage at Matikata ECB Chattar for teams that bring their own crew. Book room-only hire with your own gear, an operated session with our camera and operator, or a half-day or full-day lockout where one team keeps the stage ready.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Studio Rental</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Hourly & Daily Soundstage Hire"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Studio Rental &rarr;
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
            Ready Stage, Not Just Empty Floor
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Quiet Room. Ready Light. Stable Power.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Finding a quiet Dhaka stage with an overhead lighting grid, real acoustic isolation and power that
            survives load-shedding is difficult. Floor trip hazards and sudden blackouts waste expensive crew
            hours. Our facility keeps the infrastructure ready before your team walks in.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Before booking, we agree the date, hours, backdrop, power needs and crew support in writing. The stage
            is then rigged and tested around your call time, so shooting starts on arrival.
          </p>

          {/* PROCESS CONTROLS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Written Booking Brief</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Pre-Rigged Backdrop</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Acoustic Soundstage</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">On-Site Assistant</span>
          </div>
        </div>
      </section>
    </div>
  )
}
