import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { AnimatedProgress } from '../../../ui/animated-progress'

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.08] blur-[140px]" />
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
            <span className="shrink-0 text-zinc-200">Landing Pages</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Heading & Content (7 cols on desktop) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              {/* Display Heading H1 */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best Landing Page Development Service in{' '}
                <span className="italic text-frame-accent">Bangladesh</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">
                Build a landing page that turns campaign traffic into leads, sales, bookings, or signups. Frame Cipher combines campaign strategy, conversion-focused UX, fast development, tracking, and testing through one in-house team. Whether you&apos;re launching a Google or Meta campaign, promoting a product, or generating qualified leads, we build the page around your audience, offer, traffic source, and single conversion goal.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Request a Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Packages &amp; Pricing
                </PosterButton>
              </div>

              {/* Meta Proof Note */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Single Conversion Goal</span>
                <span className="text-zinc-700">|</span>
                <span>Ad Campaign Traffic Match</span>
                <span className="text-zinc-700">|</span>
                <span>Meta CAPI &amp; GA4 Connected</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Strict 5 cols: Always on the Side on Desktop) */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-6 w-full mt-6 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px]">
                <Ambient3DCanvas mode="target-beam" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN LANDING PAGE MOCKUP VISUAL */}
      <section className="border-b border-white/[0.08] bg-[#09090B] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            {/* Top Mockup Header Bar */}
            {/* Dashboard Mockup Grid */}
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-frame-accent">
                  01
                </span>
                <div className="mt-2 font-heading text-2xl md:text-3xl font-medium text-white">
                  +280%
                </div>
                <p className="mt-1 text-xs text-zinc-400">Conversion Rate Lift</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <AnimatedProgress width="80%" delay={0} className="h-full bg-frame-accent" />
                </div>
              </div>

              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-frame-accent">
                  02
                </span>
                <div className="mt-2 font-heading text-2xl md:text-3xl font-medium text-white">
                  &lt; 0.7s
                </div>
                <p className="mt-1 text-xs text-zinc-400">Mobile First Contentful Paint</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <AnimatedProgress width="91.7%" delay={150} className="h-full bg-emerald-500" />
                </div>
              </div>

              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-frame-accent">
                  03
                </span>
                <div className="mt-2 font-heading text-2xl md:text-3xl font-medium text-white">
                  100%
                </div>
                <p className="mt-1 text-xs text-zinc-400">Ad Message &amp; Creative Match</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <AnimatedProgress width="100%" delay={300} className="h-full bg-frame-accent" />
                </div>
              </div>

              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-frame-accent">
                  04
                </span>
                <div className="mt-2 font-heading text-2xl md:text-3xl font-medium text-white">
                  A/B Ready
                </div>
                <p className="mt-1 text-xs text-zinc-400">Built for Rapid Experimentation</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <AnimatedProgress width="100%" delay={450} className="h-full bg-white" />
                </div>
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-400 gap-2">
              <span>Traffic Sources: Google Search &amp; Display / Meta &amp; IG Ads / TikTok Ads / LinkedIn B2B</span>
              <span className="text-frame-accent font-medium">Built to lower Cost-Per-Acquisition (CPA) on Paid Ad Spend</span>
            </div>
          </div>
        </div>
      </section>

      {/* LANDING PAGE DEVELOPMENT BUILT AROUND YOUR CAMPAIGN GOAL */}
      <section className="border-b border-white/[0.08] bg-[#09090B] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Landing Page Development Built Around{' '}
              <span className="italic text-frame-accent">Your Campaign Goal.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              <p>
                A landing page should do more than look good. It should give your campaign one clear destination and one primary action.
              </p>
              <p>
                We start by understanding your offer, target audience, traffic source, and campaign objective before planning the page. Whether you want leads, sales, bookings, signups, downloads, or registrations, the content and design are structured around that specific goal.
              </p>
              <p>
                From the headline and offer to trust signals, forms, calls to action, tracking, and mobile experience, every element has a role in moving visitors toward the desired action.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Who We Build For
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Marketers and businesses running Google, Meta, TikTok, or LinkedIn campaigns that need one clear landing-page destination.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                What We Build
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Campaign-specific landing pages for leads, sales, bookings, signups, downloads, or registrations&mdash;built around one conversion goal.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                How We Deliver
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                We plan the offer, audience, traffic source, and message first&mdash;then build, track, and test the page through one in-house team.
              </p>
            </div>
          </div>

          {/* Honest Assessment Callout */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:flex-row sm:p-8">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Not sure whether your current page is costing you conversions? We&apos;ll tell you honestly what&apos;s likely to help.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>

          {/* APPROACH FLOW PIPELINE */}
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-frame-accent mb-6">
              Our Approach Connects
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-white">
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Campaign Goal</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Audience</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Traffic Source</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Message</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Landing Page</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">CTA</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-frame-accent/30 bg-frame-accent/10 px-3.5 py-2 text-frame-accent font-medium">Conversion</span>
            </div>
            <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl mx-auto">
              The result is a focused landing page built to support your campaign, not a generic website page with the navigation removed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
