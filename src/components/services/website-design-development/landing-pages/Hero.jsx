import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Landing Pages</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / High-Conversion Pages"
        meta="Single Conversion Goal / Ad Campaign Traffic"
        number="04"
        title="Best Landing Page Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Request a Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages & Pricing
            </PosterButton>
          </>
        }
      >
        Build a landing page that turns campaign traffic into leads, sales, bookings, or signups. Frame Cipher combines campaign strategy, conversion-focused UX, fast development, tracking, and testing through one in-house team. Whether you&apos;re launching a Google or Meta campaign, promoting a product, or generating qualified leads, we build the page around your audience, offer, traffic source, and single conversion goal.
      </PageHero>

      {/* CAMPAIGN LANDING PAGE MOCKUP VISUAL */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-[95vw]">
          <div className="border-2 border-frame-border bg-frame-muted/20 p-4 md:p-8 relative overflow-hidden">
            {/* Top Mockup Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-frame-border pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-frame-border bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full border border-frame-border bg-yellow-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full border border-frame-border bg-green-500/80 inline-block" />
                <span className="ml-3 font-mono text-xs text-frame-muted-fg uppercase tracking-widest hidden sm:inline-block">
                  https://lp.yourbrand.com/special-offer
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Meta CAPI & GA4 Connected
                </span>
                <span className="text-[11px] font-mono text-frame-muted-fg">Zero-Distraction Layout</span>
              </div>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Campaign Metric 01</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">+280%</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Conversion Rate Lift</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-frame-accent w-4/5" />
                </div>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Campaign Metric 02</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">&lt; 0.7s</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Mobile First Contentful Paint</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-emerald-500 w-11/12" />
                </div>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Campaign Metric 03</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">100%</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Ad Message & Creative Match</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-frame-accent w-full" />
                </div>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Campaign Metric 04</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">A/B Ready</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Built for Rapid Experimentation</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-frame-fg w-full" />
                </div>
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between border-t border-frame-border/80 pt-4 text-xs font-mono text-frame-muted-fg gap-2">
              <span>Traffic Sources: Google Search & Display / Meta & IG Ads / TikTok Ads / LinkedIn B2B</span>
              <span className="text-frame-accent font-bold">Built to lower Cost-Per-Acquisition (CPA) on Paid Ad Spend</span>
            </div>
          </div>
        </div>
      </div>

      {/* LANDING PAGE DEVELOPMENT BUILT AROUND YOUR CAMPAIGN GOAL */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Campaign Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Landing Page Development Built Around Your Campaign Goal
          </h2>
          
          <p className="mt-8 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-4xl mx-auto">
            A landing page should do more than look good. It should give your campaign one clear destination and one primary action.
          </p>

          <p className="mt-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-4xl mx-auto">
            We start by understanding your offer, target audience, traffic source, and campaign objective before planning the page. Whether you want leads, sales, bookings, signups, downloads, or registrations, the content and design are structured around that specific goal. From the headline and offer to trust signals, forms, calls to action, tracking, and mobile experience, every element has a role in moving visitors toward the desired action.
          </p>

          {/* APPROACH FLOW PIPELINE */}
          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-6">
              Our Approach Connects
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3 py-2">Campaign Goal</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3 py-2">Audience</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3 py-2">Traffic Source</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3 py-2">Message</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3 py-2">Landing Page</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3 py-2">CTA</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border-2 border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Conversion</span>
            </div>
            <p className="mt-6 text-sm md:text-base font-semibold text-frame-fg max-w-3xl mx-auto">
              The result is a focused landing page built to support your campaign, not a generic website page with the navigation removed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
