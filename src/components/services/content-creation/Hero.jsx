import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Content Creation Services in Bangladesh"
  const subtitle = service?.shortDesc || "Your brand needs more than a content plan. It needs content that actually gets made. Framecipher provides Content Creation Services for businesses that need professional video, photography, motion graphics, branding, and design produced under one coordinated creative team."
  const isPillar = service?.pageType === 'Pillar Service'
  const pillarParent = service?.pillarParent

  return (
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-[#FAFAFA]">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">Services</Link>
          {pillarParent && (
            <>
              <span>/</span>
              <span className="text-[#A1A1AA]">{pillarParent}</span>
            </>
          )}
          <span>/</span>
          <span className="text-[#A855F7]">Content Creation</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow={isPillar ? 'Core Service Pillar' : 'Specialized Capability'}
        meta="One In-House Creative Team / Built For Results"
        number={isPillar ? '06' : '360'}
        title={title}
        actions={
          <>
            <PosterButton href="/projects">
              See Our Portfolio &rarr;
            </PosterButton>
            <PosterButton href="/contact" variant="outline">
              Get a Free Production Consultation &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* VALUE PROPOSITION CALLOUT BANNER */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7] mb-4">
            Visual Asset Production System
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
            Content Creation Built for Your Brand, Platforms & Business Goals
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
            Content creation is the production of the visual and creative assets your business uses across digital channels, campaigns, websites, ecommerce, advertising, and social media. That can mean a product photoshoot, a brand video, a series of Reels, motion graphics, social media designs, or a complete set of campaign assets.
          </p>

          {/* PRODUCTION PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-[#FAFAFA]">
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Strategy & Creative Brief</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Video & Photography</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Motion & Graphics</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-white/[0.08] bg-[#09090B] px-3 py-1.5">Platform Formats</span>
            <span className="text-[#A855F7] font-bold">&rarr;</span>
            <span className="border border-[#A855F7]/40 bg-[#A855F7]/10 px-3 py-1.5 text-[#A855F7]">Coordinated System</span>
          </div>

          {/* 3 COORDINATION PILLARS */}
          <div className="mt-10 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-3 text-left">
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Unified Brand Look</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Video & Photography
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Your video should feel like the same brand as your photography, sharing color grading, art direction, and tone.
              </p>
            </div>
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Cross-Platform Flow</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                Social & Website Harmony
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Your social graphics match your website. Your campaign visuals follow the exact visual system of your broader identity.
              </p>
            </div>
            <div className="bg-[#09090B] p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Zero Handoff Friction</span>
              <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
                One In-House Creative Team
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Framecipher handles production needs under one team instead of sending every format to a different freelancer.
              </p>
            </div>
          </div>

          {/* REACH & ACTION BANNER */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 border-2 border-[#A855F7]/40 bg-[#09090B] p-6 sm:flex-row sm:justify-between text-left">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#A855F7]">
                Bangladesh Production · International Delivery
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-[#FAFAFA]">
                Serving businesses in Bangladesh and international clients across the US, UK, Australia, Canada, and UAE.
              </p>
            </div>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Discuss Your Content Needs &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
