import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

export default function Hero({ service }) {
  const title = service?.h1 || "Content Creation Services in Bangladesh"
  const subtitle = service?.shortDesc || "Your brand needs more than a content plan. It needs content that actually gets made. Framecipher provides Content Creation Services for businesses that need professional video, photography, motion graphics, branding, and design produced under one coordinated creative team."
  const isPillar = service?.pageType === 'Pillar Service'
  const pillarParent = service?.pillarParent

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          {pillarParent && (
            <>
              <span>/</span>
              <span className="text-frame-muted-fg">{pillarParent}</span>
            </>
          )}
          <span>/</span>
          <span className="text-frame-accent">Content Creation</span>
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
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Visual Asset Production System
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Content Creation Built for Your Brand, Platforms & Business Goals
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Content creation is the production of the visual and creative assets your business uses across digital channels, campaigns, websites, ecommerce, advertising, and social media. That can mean a product photoshoot, a brand video, a series of Reels, motion graphics, social media designs, or a complete set of campaign assets.
          </p>

          {/* PRODUCTION PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Strategy & Creative Brief</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Video & Photography</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Motion & Graphics</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Platform Formats</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3 py-1.5 text-frame-accent">Coordinated System</span>
          </div>

          {/* 3 COORDINATION PILLARS */}
          <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Unified Brand Look</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Video & Photography
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Your video should feel like the same brand as your photography, sharing color grading, art direction, and tone.
              </p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Cross-Platform Flow</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Social & Website Harmony
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Your social graphics match your website. Your campaign visuals follow the exact visual system of your broader identity.
              </p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Zero Handoff Friction</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                One In-House Creative Team
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Framecipher handles production needs under one team instead of sending every format to a different freelancer.
              </p>
            </div>
          </div>

          {/* REACH & ACTION BANNER */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between text-left">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent">
                Bangladesh Production · International Delivery
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-frame-fg">
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
