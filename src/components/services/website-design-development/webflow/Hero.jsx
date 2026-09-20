import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b-2 border-frame-border bg-frame-bg/90 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Webflow</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Focused Service / Visual Development"
        meta="Clean Semantic Code / CMS Architecture"
        number="08"
        title="Best Webflow Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </>
        }
      >
        Framecipher builds Webflow websites for design-forward brands, agencies, and marketing teams who want more creative control than a template platform allows, without the overhead of a fully custom framework. Whether you&apos;re launching in Dhaka or building a brand presence across the US, UK, Australia, Canada, or UAE, our Webflow development services deliver a site that looks exactly as designed and stays manageable after launch.
      </PageHero>

      {/* KINETIC BRUTALIST DASHBOARD / METRICS */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">WEBFLOW_ENGINE // CLIENT-FIRST ARCHITECTURE</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-READY</span>
              <span>CDN: FASTLY EDGE</span>
              <span className="text-frame-accent font-black">CMS: UNLIMITED COLLECTIONS</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Visual Development</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Webflow Designer</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Pixel-accurate layout</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Content Engine</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Dynamic CMS</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Structured Collections</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Interaction Frame</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">60fps Motion</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Scroll & Micro-effects</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Infrastructure</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Fastly CDN</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Global Edge Caching</p>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC VALUE / WHY WE'RE THE RIGHT TEAM */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Principles
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why We&apos;re the Right Webflow Development Team
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-frame-fg">
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Design-Forward Builds</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Structured CMS</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Clean Development</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Marketing-Team Friendly</span>
            </div>

            <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Build For</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Design-forward brands, agencies, and marketing teams that want creative control without the overhead of a fully custom framework.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">What We Build</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Marketing websites, dynamic CMS sites, portfolios, and content platforms structured around your design, SEO, and publishing needs.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We plan CMS, components, responsive behavior, integrations, and publishing workflow before build&mdash;then launch a site your team can manage.
                </p>
              </div>
            </div>

            <div className="mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-fg">
                Not sure whether Webflow or a different platform fits your project? We&apos;ll tell you honestly which one makes sense.
              </p>
              <PosterButton href="/contact" className="shrink-0">
                Get an Honest Assessment
              </PosterButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
