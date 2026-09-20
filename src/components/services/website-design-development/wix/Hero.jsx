import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const wixAdvantages = [
  {
    tag: 'Advantage 01',
    title: 'Fast Website Launch',
    description: 'Wix can reduce the technical setup involved in launching a website. That makes it practical for businesses working toward a short launch window.',
  },
  {
    tag: 'Advantage 02',
    title: 'Easy Content Management',
    description: 'Your team can manage many day-to-day content changes through the Wix dashboard without editing source code.',
  },
  {
    tag: 'Advantage 03',
    title: 'Professional Design Flexibility',
    description: 'Wix provides design tools for branded websites, while Wix Studio offers more advanced responsive control for custom builds.',
  },
  {
    tag: 'Advantage 04',
    title: 'Built-In Business Features',
    description: 'Wix supports capabilities such as forms, bookings, ecommerce, CMS content, and other business functions within the same ecosystem.',
  },
  {
    tag: 'Advantage 05',
    title: 'Room for Custom Development',
    description: 'When built-in features are not enough, Wix Studio and its developer tools can support custom code, APIs, CMS-driven functionality, and external integrations.',
  },
  {
    tag: 'Advantage 06',
    title: 'A Platform That Should Match the Project',
    description: 'Wix is not the right answer for every website. We recommend it when its capabilities match your business requirements and suggest another platform when they do not.',
  },
]

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
          <span className="text-frame-accent">Wix Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / Specialized Build"
        meta="Wix & Wix Studio / Built For Growth"
        number="06"
        title="Best Wix Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </>
        }
      >
        Framecipher builds Wix websites for small businesses, startups, and solo entrepreneurs who want a professional site online fast, without the cost or complexity of a fully custom build. Whether you&apos;re launching in Dhaka or reaching customers across the US, UK, Australia, Canada, or UAE, our Wix development services deliver a site that looks polished and stays easy for you to edit afterward.
      </PageHero>

      {/* VISUAL DASHBOARD PANEL (Mockup representation) */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">WIX_STUDIO_ARCHITECTURE // MANAGED CLOUD</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-READY</span>
              <span>INFRASTRUCTURE: MANAGED WIX CLOUD</span>
              <span className="text-frame-accent font-black">LAUNCH WINDOW: 3–5 DAYS</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Editing Experience</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Full Self-Editing</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Zero Code Required</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Responsive Control</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Wix Studio</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Fluid Breakpoints</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Custom Logic</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Velo &amp; APIs</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Extensible CMS</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Security &amp; Uptime</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">99.9% Uptime</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Managed SSL &amp; Hosting</p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE WIX FOR YOUR BUSINESS? */}
      <section className="bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl mb-12">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Strategy &amp; Fit
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Wix for Your Business?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-start gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Business Goals</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Content Management</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Design & Hosting</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Business Tools</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Growth</span>
            </div>

            <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Build For</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Small businesses, startups, solo entrepreneurs, and professional services that want a polished site online fast with easy self-editing.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">What We Build</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Branded business websites, portfolios, booking and service sites, forms, ecommerce, and CMS-driven pages in Wix &amp; Wix Studio.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Deliver</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Design, build, custom code and integrations through one in-house team, with a dashboard your team can edit without a developer.
                </p>
              </div>
            </div>

            <div className="mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-fg">
                Not sure whether Wix or a different platform fits your business? We&apos;ll tell you honestly which one makes sense.
              </p>
              <PosterButton href="/contact" className="shrink-0">
                Get an Honest Assessment
              </PosterButton>
            </div>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {wixAdvantages.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{item.tag}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
