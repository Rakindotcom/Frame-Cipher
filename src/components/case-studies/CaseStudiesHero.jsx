'use client'

import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import AnimatedCounter from '../home/AnimatedCounter'
import { ChevronRight, Terminal, Check, ArrowRight } from 'lucide-react'

const inlineLink =
  'text-white underline underline-offset-4 decoration-white/30 hover:decoration-purple-500 hover:text-purple-400 transition-colors font-medium'

const caseStudyMarqueeItems = [
  'Meta Ads Scale',
  'Search Growth & SEO',
  '1.8M+ Ad Impressions',
  'High-Converting Websites',
  '7.2M+ Facebook Views',
  '350K+ First Short Views',
  'Audience Retention Systems',
  'Multi-Channel Growth OS',
]

const baseItems = [...caseStudyMarqueeItems, ...caseStudyMarqueeItems]
const repeatedItems = [...baseItems, ...baseItems]

export default function CaseStudiesHero() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 pb-20 pt-28 sm:px-6 sm:pt-36 md:px-8 md:pb-24 md:pt-40 lg:pt-44">
        {/* Linear / Raycast Atmospheric Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] blur-[90px]"
          aria-hidden="true"
        />

        {/* Precision Architectural Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* 360 Watermark Background Mark */}
        <div
          className="pointer-events-none absolute right-0 top-6 -z-10 select-none font-heading text-[48vw] font-medium leading-none text-white/[0.02] md:-right-6 md:top-10 md:text-[24vw]"
          aria-hidden="true"
        >
          360
        </div>

        <div className="mx-auto w-full max-w-7xl">
          {/* Symmetrical Two-Column Hero Grid (Modality A) */}
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left Column: Breadcrumb + Eyebrow + Two-Tone H1 + Narrative + CTAs */}
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 text-zinc-600" />
                <span className="text-purple-400 font-semibold">Case Studies</span>
              </nav>

              {/* Raycast-style Capsule Eyebrow Bar */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300">
                  13 Flagship Case Breakdowns · Real Platform Data
                </p>
              </div>

              {/* Display Heading H1: Two-Tone Pure White + Signature Deep Purple */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.96]">
                <span className="block text-white">Documented growth across systems.</span>
                <span className="block text-purple-600">Zero vanity. Pure proof.</span>
              </h1>

              {/* Editorial Description with Preserved Internal Links */}
              <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">
                In-depth breakdowns of how Frame Cipher engineers measurable growth: from high-ROI{' '}
                <Link href="/services/paid-advertising/meta-ads" className={inlineLink}>Meta advertising</Link> campaigns and{' '}
                <Link href="/services/seo" className={inlineLink}>organic search</Link> dominance to{' '}
                <Link href="/services/website-design-development" className={inlineLink}>digital platforms</Link> and{' '}
                <Link href="/services/content-creation" className={inlineLink}>content systems</Link> built to scale.
              </p>

              {/* Symmetrical Button Pair (52px Height + Arrows) */}
              <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PosterButton href="/contact">
                  Book a Strategy Call
                </PosterButton>
                <PosterButton href="/projects" variant="outline">
                  View Archive Portfolio
                </PosterButton>
              </div>

              {/* Quick CLI Command Box */}
              <div className="pt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1.5 font-mono text-xs text-zinc-300">
                  <Terminal className="h-3.5 w-3.5 text-purple-600" />
                  <span className="text-zinc-500">$</span>
                  <span>npx frame-cipher case-studies --verified</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  Meta Ads · Organic Search · Creator OS · Web Architecture
                </span>
              </div>
            </div>

            {/* Right Column: Verified Analytics Dossier Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121214] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    Verified Outcomes
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  First-Party Platform Proof
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                  <p className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">
                    <AnimatedCounter value="14M+" duration={1400} suffixClassName="text-purple-600 font-semibold" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    Impressions Delivered
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                  <p className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">
                    <AnimatedCounter value="5.5M+" duration={1400} suffixClassName="text-purple-600 font-semibold" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    Unique People Reached
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                  <p className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">
                    <AnimatedCounter value="7.2M+" duration={1400} suffixClassName="text-purple-600 font-semibold" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    Video Views Managed
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                  <p className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">
                    <AnimatedCounter value="91%" duration={1400} suffixClassName="text-purple-600 font-semibold" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    Top-10 SEO Rankings
                  </p>
                </div>
              </div>

              {/* Verified Systems Checklist */}
              <div className="mt-6 space-y-2.5 border-t border-white/[0.08] pt-5">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                  <Check className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                  <span>Meta Ads Manager: 334 Campaigns Managed · $0.04 Min CPC</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                  <Check className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                  <span>Google Search Console: 2.1M Impressions · 203% Organic Surge</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium">
                  <Check className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                  <span>YouTube Studio: 108.9K Views/Mo · &gt;999% Watch Hours</span>
                </div>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <Link
                  href="/case-studies/dr-ferdoush-saleheen"
                  className="group flex items-center justify-between font-mono text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Featured: Dr. Ferdoush Saleheen</span>
                  <ArrowRight className="h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Case studies outcome metrics ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
              <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
                {item}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-purple-600" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
