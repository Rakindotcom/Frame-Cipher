import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Short-Form Video Production Service in Bangladesh"
  const subtitle = service?.shortDesc || "Short-form video has to communicate quickly. Framecipher produces Reels, TikTok videos, and YouTube Shorts with vertical-first production, clear hooks, platform-aware editing, and deliverables built around how your audience will watch them."

  return (
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-[#FAFAFA]">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-[#FAFAFA]">Content Creation</Link>
          <span>/</span>
          <span className="text-[#A855F7]">Short-Form Video</span>
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
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7] mb-4">
            Mobile-First Architecture
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
            Short-Form Video Built for the Vertical Format
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
            Short-form video is not simply a long video made shorter. The opening needs to communicate quickly. The composition needs to work in a vertical frame. The edit needs to maintain momentum without making every video feel identical. Captions, sound, graphics, and visual changes need to support the content rather than distract from it.
          </p>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-[#FAFAFA]">
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Vertical-First Production</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Hook-Led Concepts</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Mobile-Focused Editing</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-[#A855F7]/40 bg-[#A855F7]/10 px-3 py-1.5 text-[#A855F7]">Platform-Ready Delivery</span>
          </div>

          {/* 3 VERTICAL PRINCIPLES */}
          <div className="mt-10 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-3 text-left">
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Immediate Visual Hook</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                First-Second Impact
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                A product video demonstrates a feature immediately. A founder video opens with a compelling premise that stops the scroll.
              </p>
            </div>
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Retention Momentum</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Mobile-Paced Flow
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Pacing removes dead air, utilizing dynamic cuts, b-roll inserts, and on-screen text to maintain viewer retention throughout.
              </p>
            </div>
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Platform Nuance</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Native Conventions
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Tailored for Instagram Reels feed aesthetics, TikTok community engagement, and YouTube Shorts discovery algorithms.
              </p>
            </div>
          </div>

          {/* BANNER */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 border-2 border-[#A855F7]/40 bg-[#09090B] p-6 sm:flex-row sm:justify-between text-left">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#A855F7]">
                Unified Creative Direction
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-[#FAFAFA]">
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
