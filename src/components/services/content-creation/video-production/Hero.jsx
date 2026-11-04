import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Video Production Service in Bangladesh"
  const subtitle = service?.shortDesc || "From concept to final export, Framecipher handles video production through one in-house creative team. We plan, film, edit, and deliver corporate videos, brand films, product videos, commercial content, and social media videos built around your audience and goals."
  const _isPillar = service?.pageType === 'Pillar Service'
  const _pillarParent = service?.pillarParent || "Content Creation"

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
          <span className="text-[#A855F7]">Video Production</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Video Capability"
        meta="Concept To Final Export / One In-House Team"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get a Free Video Production Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#video-work" variant="outline">
              View Our Video Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* OBJECTIVE-LED PRODUCTION SECTION */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7] mb-4">
            Objective-Led Production
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
            Video Production Built Around Your Goal
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
            A video can look professional and still fail to communicate the right message. That is why we start with the purpose behind the video, not just the production itself. Before filming begins, we consider your audience, message, platform, visual direction, required deliverables, and the action you want viewers to take. This helps us build the production around the final outcome.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-[#FAFAFA]">
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Audience & Message</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Creative Direction</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Pre-Production Shoot</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Pacing & Color Grade</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-[#A855F7]/40 bg-[#A855F7]/10 px-3 py-1.5 text-[#A855F7]">Multi-Platform Master</span>
          </div>

          {/* 3 FORMAT ALIGNMENT CARDS */}
          <div className="mt-10 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-3 text-left">
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Corporate & Brand</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Trust & Narrative
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                A corporate profile video needs a structured narrative and authority. A brand film depends on emotive visual storytelling.
              </p>
            </div>
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Commercial & Ads</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Demonstration & Hook
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                A product advertisement needs clear feature demonstrations. A paid social video needs immediate 3-second hook pacing.
              </p>
            </div>
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Long-Form & YouTube</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Retention & Continuity
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                YouTube productions need structured chaptering, audio excellence, and visual continuity across longer view times.
              </p>
            </div>
          </div>

          {/* PRINCIPLE BANNER */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 border-2 border-[#A855F7]/40 bg-[#09090B] p-6 sm:flex-row sm:justify-between text-left">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#A855F7]">
                Core Production Principle
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-[#FAFAFA]">
                The format should serve the objective. That principle guides our production decisions from the first brief to the final export.
              </p>
            </div>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Discuss Your Video Objective &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
