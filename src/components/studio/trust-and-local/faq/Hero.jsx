'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Studio FAQ — Answers Before You Book'
  const subtitle =
    'Everything about planning a shoot at FrameCipher Studio: booking and advances, kit and room specs, parking and access at ECB Chattar, review rounds and delivery. Answers are free, quotes are free and walkthroughs are free — you only pay when cameras roll.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Studio FAQ</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Direct Answers, Written Down"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#faq">
              Browse the Answers &rarr;
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
            Transparency Prevents Surprises
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Know Everything Before Shoot Day.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Knowing exactly what is and is not included keeps budgets predictable and teams prepared. The
            answers below cover the questions buyers ask most — and anything unanswered gets a same-day reply
            on WhatsApp at +880 1768-146650.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Standard delivery runs 5 to 10 working days with 2 revision rounds. Sessions start from
            ৳2,000/hour with a 50% advance confirming dates and free rescheduling on 48-hour notice.
          </p>

          {/* PROCESS CONTROLS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Answers Are Free</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Quotes in 48 Hours</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Walkthroughs Free</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Pay When Cameras Roll</span>
          </div>
        </div>
      </section>
    </div>
  )
}
