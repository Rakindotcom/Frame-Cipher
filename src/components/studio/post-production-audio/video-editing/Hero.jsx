'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Video Editing Services in Dhaka'
  const subtitle =
    'FrameCipher Studio edits video for YouTube, social media, corporate use, podcasts and events — from footage we record or footage you send on SSD or cloud drive. Pacing, narrative flow and retention hooks are cut for the platform the video will run on, then finished with grade, sound and subtitles in-house.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Video Editing</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Narrative, YouTube & Commercial Cuts"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Video Editing &rarr;
            </PosterButton>
            <PosterButton href="#pricing" variant="outline">
              See Editing Rates &rarr;
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
            Your Footage. Our Timeline.
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Send Files. Receive Finished Video.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Whether it is a two-hour podcast or multi-angle commercial footage, our editors remove the fluff, sync
            cameras and audio, place B-roll and build a tight narrative that holds retention from the first frame —
            without you re-shooting a second.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg wide:text-lg">
            Hand off drives in person at ECB Chattar or upload to Drive or Dropbox. We verify every clip on intake,
            cut proxies for fast review, and return platform-ready masters with captions and cutdowns included.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">SSD & Cloud Handoff</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Retention Assembly</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Grade & Captions</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Multi-Ratio Masters</span>
          </div>
        </div>
      </section>
    </div>
  )
}
