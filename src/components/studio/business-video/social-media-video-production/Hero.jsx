'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = "Social Media Video Production in Dhaka"
  const subtitle = "Social media video needs to be planned for the platform, not trimmed afterwards. FrameCipher Studio produces short-form and vertical video for Facebook, Instagram, TikTok and YouTube, from planning and shooting to captions and export. We help creators and brands batch-record 10 to 30 high-retention clips in single studio sessions."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Social Media Video</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Reels, Shorts & TikTok Viral Formats"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Social Media Video &rarr;
            </PosterButton>
            <PosterButton href="/projects#short-video-work" variant="outline">
              View Short-Form Portfolio &rarr;
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
            Batch-Recorded Verticals, Not One-Off Clips
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            A Month of Posts in One Studio Day.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Vertical, square and horizontal videos need different framing. Composing natively for vertical 9:16 keeps
            subjects, kinetic captions and graphics clear of platform buttons — and batch-recording 10 to 20 clips in
            one session cuts the per-clip cost nearly in half.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg wide:text-lg">
            Before recording starts, we review your hooks and scripts in writing. The session, the edit and the posting
            calendar are then planned around the platforms you publish on.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Hook Review</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Vertical 4K Capture</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Kinetic Captions</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">9:16 Masters</span>
          </div>
        </div>
      </section>
    </div>
  )
}
