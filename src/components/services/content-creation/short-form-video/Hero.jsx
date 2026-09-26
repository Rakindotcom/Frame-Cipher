import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Short-Form Video Production Service in Bangladesh"
  const subtitle = service?.shortDesc || "Short-form video has to communicate quickly. Framecipher produces Reels, TikTok videos, and YouTube Shorts with vertical-first production, clear hooks, platform-aware editing, and deliverables built around how your audience will watch them."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-frame-fg">Content Creation</Link>
          <span>/</span>
          <span className="text-frame-accent">Short-Form Video</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Vertical Video Capability"
        meta="Reels, TikTok & Shorts / One In-House Team"
        number="02"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get a Free Short-Form Video Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#video-work" variant="outline">
              View Our Short-Form Video Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* VALUE PROPOSITION SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Mobile-First Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Short-Form Video Built for the Vertical Format
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Short-form video is not simply a long video made shorter. The opening needs to communicate quickly. The composition needs to work in a vertical frame. The edit needs to maintain momentum without making every video feel identical. Captions, sound, graphics, and visual changes need to support the content rather than distract from it.
          </p>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Vertical-First Production</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Hook-Led Concepts</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Mobile-Focused Editing</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3 py-1.5 text-frame-accent">Platform-Ready Delivery</span>
          </div>

          {/* 3 VERTICAL PRINCIPLES */}
          <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Immediate Visual Hook</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                First-Second Impact
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                A product video demonstrates a feature immediately. A founder video opens with a compelling premise that stops the scroll.
              </p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Retention Momentum</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Mobile-Paced Flow
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Pacing removes dead air, utilizing dynamic cuts, b-roll inserts, and on-screen text to maintain viewer retention throughout.
              </p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Platform Nuance</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Native Conventions
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Tailored for Instagram Reels feed aesthetics, TikTok community engagement, and YouTube Shorts discovery algorithms.
              </p>
            </div>
          </div>

          {/* BANNER */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between text-left">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">
                Unified Creative Direction
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-frame-fg">
                The format should serve the audience, brand, platform, and objective. One in-house team connects concept to export.
              </p>
            </div>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Discuss Your Short-Form Needs &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
