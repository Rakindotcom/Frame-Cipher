import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { AnimatedProgress } from '../../../ui/animated-progress'

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.07] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Editorial Breadcrumb Navigation (Single-line, non-breaking with smooth horizontal scroll on narrow mobile) */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <Link href="/services" className="shrink-0 hover:text-white transition-colors duration-200">
              Services
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors duration-200">
              <span className="sm:hidden">Web Design &amp; Dev</span>
              <span className="hidden sm:inline">Website Design &amp; Development</span>
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <span className="shrink-0 text-zinc-200">Business Website</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              {/* Display Heading H1 */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Business Website Development Service in{' '}
                <span className="italic text-frame-accent">Bangladesh</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">
                Framecipher builds business websites for SMEs, startups, and corporate brands that need a site that actually generates leads, not a digital brochure. Whether you&apos;re a growing business in Dhaka or an international company across the US, UK, Australia, Canada, or UAE, our development services deliver a site built to work as part of your sales process.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Get Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Packages &amp; Pricing
                </PosterButton>
              </div>

              {/* Meta Proof Note */}
              <div className="pt-2 flex items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Built around your sales process</span>
                <span className="text-zinc-700">|</span>
                <span>Zero vendor lock-in</span>
                <span className="text-zinc-700">|</span>
                <span>Direct CRM integration</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Visible & responsive across mobile, tablet, and desktop) */}
            <div className="flex justify-center lg:col-span-6 w-full mt-6 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px]">
                <Ambient3DCanvas mode="corporate-matrix" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL MOCKUP: BUSINESS WEBSITE & DASHBOARD LEDGER */}
      <section className="border-b border-white/[0.08] bg-[#09090B] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            {/* Top Mockup Header Bar */}
            {/* Dashboard Mockup Grid - Modality 2 Divided Columns */}
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 border border-white/[0.08] rounded-lg bg-[#09090B] overflow-hidden">
              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  01
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">+240%</div>
                <p className="text-xs font-medium text-zinc-300">Inquiry-to-Sales Conversion</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="80%" delay={0} className="h-full rounded-full bg-frame-accent" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  02
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">&lt; 0.8s</div>
                <p className="text-xs font-medium text-zinc-300">Global Page Load Speed</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="91.7%" delay={150} className="h-full rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  03
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">100%</div>
                <p className="text-xs font-medium text-zinc-300">Automated Lead Routing</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="100%" delay={300} className="h-full rounded-full bg-frame-accent" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  04
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">0 Lock-In</div>
                <p className="text-xs font-medium text-zinc-300">Full Asset &amp; Code Ownership</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="100%" delay={450} className="h-full rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-400 md:flex-row md:items-center">
              <span>Stack: Next.js / TailwindCSS / Headless CMS / HubSpot &amp; Salesforce APIs</span>
              <span className="text-frame-accent">Tested across 3G/4G/5G Networks &amp; Retina Viewports</span>
            </div>
          </div>
        </div>
      </section>

      {/* A BUSINESS WEBSITE BUILT AROUND YOUR SALES PROCESS */}
      <section className="relative border-b border-white/[0.08] bg-[#09090B] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Centered Section Header */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              A Business Website Built Around{' '}
              <span className="italic text-frame-accent">Your Sales Process.</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-zinc-300 pt-2">
              <p>
                A business website should do more than present your company online. It should help potential customers understand your offer, build trust, and take the next step.
              </p>
              <p>
                That is why we start with how your business actually generates leads. We map your buyer journey, identify the information customers need before contacting you, and structure the website around those decisions.
              </p>
              <p>
                From page architecture and CTA placement to lead forms, CRM connections, and conversion tracking, every part of the build has a purpose.
              </p>
            </div>
          </div>

          {/* Modality 2: Architectural Divided Column Band (Who / What / How) */}
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-3 md:divide-y-0 md:divide-x">
              <div className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  01 · Who We Build For
                </span>
                <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                  SMEs, startups, and corporate brands that need a website that works as part of their sales process&mdash;not a digital brochure.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  02 · What We Build
                </span>
                <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                  Lead-focused business websites with page architecture, CTA placement, lead capture, and CRM connections built around your buyers.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  03 · How We Deliver
                </span>
                <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                  We map your buyer journey and decision path first, then build every page and form through one in-house team in Dhaka.
                </p>
              </div>
            </div>
          </div>

          {/* Assessment Callout Banner */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:flex-row">
            <p className="text-sm font-medium leading-relaxed text-zinc-200 sm:text-base max-w-2xl">
              Not sure whether your website is actually generating leads? We&apos;ll audit it and tell you honestly what&apos;s working.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>

          {/* APPROACH FLOW PIPELINE */}
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-frame-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Our Approach Connects
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-white md:gap-3 md:text-sm">
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Business Goals
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Buyer Journey
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Website Structure
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Lead Capture
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                CRM
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-frame-accent/40 bg-frame-accent/10 px-4 py-2.5 text-frame-accent">
                Conversion Tracking
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-zinc-300 md:text-base">
              The result is a website designed to work as part of your sales process, not as a standalone digital brochure.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
