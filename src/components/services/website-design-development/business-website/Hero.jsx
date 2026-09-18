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
          <span className="text-frame-accent">Business Website</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / Lead-Focused"
        meta="Built Around Your Sales Process / In-House Team"
        number="02"
        title="Best Business Website Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages & Pricing
            </PosterButton>
          </>
        }
      >
        Framecipher builds business websites for SMEs, startups, and corporate brands that need a site that actually generates leads, not a digital brochure. Whether you're a growing business in Dhaka or an international company across the US, UK, Australia, Canada, or UAE, our development services deliver a site built to work as part of your sales process.
      </PageHero>

      {/* HERO VISUAL MOCKUP: BUSINESS WEBSITE & DASHBOARD VISUAL */}
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
                  https://yourbrand.com/lead-engine
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live CRM Connected
                </span>
                <span className="text-[11px] font-mono text-frame-muted-fg">Core Web Vitals: 99/100</span>
              </div>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Pipeline Metric 01</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">+240%</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Inquiry-to-Sales Conversion</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-frame-accent w-4/5" />
                </div>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Pipeline Metric 02</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">&lt; 0.8s</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Global Page Load Speed</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-emerald-500 w-11/12" />
                </div>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Pipeline Metric 03</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">100%</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Automated Lead Routing</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-frame-accent w-full" />
                </div>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Pipeline Metric 04</span>
                <div className="mt-2 text-2xl md:text-3xl font-heading font-bold text-frame-fg">0 Lock-In</div>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">Full Asset & Code Ownership</p>
                <div className="mt-3 h-1 w-full bg-frame-border overflow-hidden">
                  <div className="h-full bg-frame-fg w-full" />
                </div>
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between border-t border-frame-border/80 pt-4 text-xs font-mono text-frame-muted-fg gap-2">
              <span>Stack: Next.js / TailwindCSS / Headless CMS / HubSpot & Salesforce APIs</span>
              <span className="text-frame-accent font-bold">Tested across 3G/4G/5G Networks & Retina Viewports</span>
            </div>
          </div>
        </div>
      </div>

      {/* A BUSINESS WEBSITE BUILT AROUND YOUR SALES PROCESS */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Sales Pipeline Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            A Business Website Built Around Your Sales Process
          </h2>
          
          <p className="mt-8 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-4xl mx-auto">
            A business website should do more than present your company online. It should help potential customers understand your offer, build trust, and take the next step.
          </p>

          <p className="mt-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-4xl mx-auto">
            That is why we start with how your business actually generates leads. We map your buyer journey, identify the information customers need before contacting you, and structure the website around those decisions. From page architecture and CTA placement to lead forms, CRM connections, and conversion tracking, every part of the build has a purpose.
          </p>

          {/* APPROACH FLOW PIPELINE */}
          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-6">
              Our Approach Connects
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3.5 py-2">Business Goals</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3.5 py-2">Buyer Journey</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3.5 py-2">Website Structure</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3.5 py-2">Lead Capture</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-muted/40 px-3.5 py-2">CRM</span>
              <span className="text-frame-accent font-bold text-base">&rarr;</span>
              <span className="border-2 border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Conversion Tracking</span>
            </div>
            <p className="mt-6 text-sm md:text-base font-semibold text-frame-fg max-w-2xl mx-auto">
              The result is a website designed to work as part of your sales process, not as a standalone digital brochure.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
