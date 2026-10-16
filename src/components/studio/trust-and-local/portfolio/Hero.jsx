'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Studio Production Portfolio in Dhaka'
  const subtitle =
    'FrameCipher Studio shows finished work, not promises. Every portfolio piece on this page maps to a real service and a real budget band, so you can see how a similar interview, commercial, catalogue or event film could be planned for your business.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Portfolio</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Finished Work, Real Budget Bands"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Request a Curated Showreel &rarr;
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
            Judge Us on Full Films
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Every Reel Has a Budget Band.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Dhaka portfolios rarely disclose budgets, forcing buyers to guess whether a reel cost ৳30,000 or
            ৳3,00,000. We tag every case — starter ৳25,000 to ৳80,000, signature ৳1,00,000 to ৳3,00,000, flagship
            above ৳5,00,000 — so expectations calibrate before the first call.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Ask for the band behind any reel, plus grading before-and-afters and full films in your industry
            rather than trailers alone.
          </p>

          {/* PROCESS CONTROLS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Band-Tagged Cases</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Grading Before & Afters</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Industry-Matched Reels</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Private Showreel on Request</span>
          </div>
        </div>
      </section>
    </div>
  )
}
