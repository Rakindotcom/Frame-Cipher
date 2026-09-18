import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

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

      {/* HERO SECTION */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Design-Led Webflow Development
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              08
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Best Webflow Development Service in Bangladesh
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Framecipher builds Webflow websites for design-forward brands, agencies, and marketing teams who want more creative control than a template platform allows, without the overhead of a fully custom framework. Whether you&apos;re launching in Dhaka or building a brand presence across the US, UK, Australia, Canada, or UAE, our Webflow development services deliver a site that looks exactly as designed and stays manageable after launch.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </div>

          {/* KINETIC BRUTALIST DASHBOARD / METRICS */}
          <div className="mt-16 grid grid-cols-2 gap-px border-2 border-frame-border bg-frame-border md:grid-cols-4">
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Visual Development
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Webflow Designer
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Pixel-accurate layout &amp; CSS architecture
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Content Engine
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Dynamic CMS
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Structured collections &amp; multi-references
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Interaction Frame
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                60fps Motion
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Scroll effects &amp; micro-interactions
              </p>
            </div>
            <div className="bg-frame-bg p-5 sm:p-7">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-frame-accent">
                Infrastructure
              </span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg">
                Fastly CDN
              </p>
              <p className="mt-1 text-xs text-frame-muted-fg">
                Global edge caching &amp; automated SSL
              </p>
            </div>
          </div>
        </div>
      </section>

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

            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-frame-accent border-y-2 border-frame-border/60 py-3 my-8">
              <span>Design-Forward Builds</span>
              <span className="text-frame-muted-fg font-normal">|</span>
              <span>Structured CMS</span>
              <span className="text-frame-muted-fg font-normal">|</span>
              <span>Clean Development</span>
              <span className="text-frame-muted-fg font-normal">|</span>
              <span>Marketing-Team Friendly</span>
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Webflow gives businesses strong visual control without requiring a traditional self-managed hosting stack, but a successful Webflow project depends on how the site is structured behind the design.
              </p>
              <p>
                Framecipher approaches Webflow development from both the design and technical side. We plan your CMS, components, responsive behavior, integrations, SEO structure, and publishing workflow before building the final pages.
              </p>
              <p>
                The goal is not simply to create a visually impressive website. It is to create a Webflow site that looks right, performs well, and remains manageable as your content grows.
              </p>
              <p>
                We also take a platform-neutral approach. Webflow is a strong fit for many design-led marketing websites, but when a project requires a different technical architecture, ecommerce platform, or backend system, we explain that before development begins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
