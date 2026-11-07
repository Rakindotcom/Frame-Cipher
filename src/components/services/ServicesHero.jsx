'use client'

import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import AnimatedCounter from '../home/AnimatedCounter'
import { ChevronRight, Layers, Check, ArrowRight, Terminal, Activity } from 'lucide-react'

const inlineLink =
  'text-white underline underline-offset-4 decoration-white/30 hover:decoration-purple-500 hover:text-purple-400 transition-colors font-medium'

export default function ServicesHero({ totalServices = 74, pillarNames = [] }) {
  const baseItems = pillarNames.length > 0 ? pillarNames : [
    'Strategy',
    'Paid Advertising',
    'Content Creation',
    'Video Production',
    'Website Design & Development',
    'App Development',
    'SEO',
  ]
  const repeatedItems = [...baseItems, ...baseItems, ...baseItems]

  const pillarsList = [
    { name: 'Paid Advertising', href: '/services/paid-advertising', count: '10 services' },
    { name: 'SEO & Organic Growth', href: '/services/seo', count: '10 services' },
    { name: 'Website Design & Dev', href: '/services/website-design-development', count: '8 services' },
    { name: 'Video & Content Creation', href: '/services/content-creation', count: '6 services' },
    { name: 'App Development', href: '/services/app-development', count: '5 services' },
    { name: 'Social Media Management', href: '/services/social-media-management', count: '3 services' },
    { name: 'Content & Copywriting', href: '/services/content-writing', count: '4 services' },
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 pb-20 pt-28 sm:px-6 sm:pt-36 md:px-8 md:pb-24 md:pt-40 lg:pt-44">
        {/* Modality A Atmospheric Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] blur-[90px]"
          aria-hidden="true"
        />

        {/* Precision Architectural Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* 74 Watermark Background Mark */}
        <div
          className="pointer-events-none absolute right-0 top-6 -z-10 select-none font-heading text-[48vw] font-medium leading-none text-white/[0.02] md:-right-6 md:top-10 md:text-[24vw]"
          aria-hidden="true"
        >
          74
        </div>

        <div className="mx-auto w-full max-w-7xl">
          {/* Symmetrical Two-Column Hero Grid (Modality A) */}
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left Column: Breadcrumb + Status + Two-Tone H1 + Narrative + CTAs */}
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 text-zinc-600" />
                <span className="text-purple-400 font-semibold">Services</span>
              </nav>

              {/* Status Capsule Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300">
                  Full-Stack Growth Engine · 74 Services Across 7 Macro Pillars
                </p>
              </div>

              {/* Display Heading H1: Two-Tone Pure White + Signature Deep Purple */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.96]">
                <span className="block text-white">Marketing, tech &amp; creative.</span>
                <span className="block text-purple-600">Built around your business.</span>
              </h1>

              {/* Editorial Description with 100% Preserved Internal Links */}
              <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">
                From <Link href="/services/website-design-development" className={inlineLink}>websites</Link> and{' '}
                <Link href="/services/app-development" className={inlineLink}>apps</Link> to{' '}
                <Link href="/services/seo" className={inlineLink}>search</Link>,{' '}
                <Link href="/services/paid-advertising" className={inlineLink}>paid media</Link>,{' '}
                <Link href="/services/social-media-management" className={inlineLink}>social</Link>,{' '}
                <Link href="/services/content-writing" className={inlineLink}>writing</Link>, and{' '}
                <Link href="/services/content-creation" className={inlineLink}>production</Link>, every service
                is connected to one accountable growth system.
              </p>

              {/* Symmetrical Button Pair (52px Height + Arrows) */}
              <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PosterButton href="/contact">
                  Start a Project
                </PosterButton>
                <PosterButton href="/services#all-services" variant="outline">
                  Explore 74+ Services
                </PosterButton>
              </div>

              {/* Quick Terminal Command Box */}
              <div className="mt-8 hidden sm:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                <Terminal className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                <span className="font-mono text-xs text-zinc-400">
                  fc services --cluster=all --sla=guaranteed
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Service Architecture Dossier */}
            <div className="relative">
              <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                {/* Subtle top hairline purple glow */}
                <div className="pointer-events-none absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                {/* Dossier Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-purple-400" />
                    <span className="font-mono text-[11px] uppercase tracking-[1.2px] text-zinc-300 font-medium">
                      Service Architecture Telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                      Live
                    </span>
                  </div>
                </div>

                {/* 4 Metric Tiles with Continuous Scroll-Replay Counters */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Macro Pillars
                    </p>
                    <p className="mt-1 font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-white tabular-nums">
                      <AnimatedCounter target={7} duration={1200} />
                    </p>
                    <span className="mt-1 inline-block text-[11px] font-mono text-purple-400">
                      Unified under 1 roof
                    </span>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Focused Services
                    </p>
                    <p className="mt-1 font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-white tabular-nums">
                      <AnimatedCounter target={74} suffix="+" duration={1300} />
                    </p>
                    <span className="mt-1 inline-block text-[11px] font-mono text-purple-400">
                      End-to-end execution
                    </span>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      In-House Team
                    </p>
                    <p className="mt-1 font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-white tabular-nums">
                      <AnimatedCounter target={100} suffix="%" duration={1200} />
                    </p>
                    <span className="mt-1 inline-block text-[11px] font-mono text-emerald-400">
                      Zero broker markup
                    </span>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#18181B] p-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Countries Served
                    </p>
                    <p className="mt-1 font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-white tabular-nums">
                      <AnimatedCounter target={20} suffix="+" duration={1300} />
                    </p>
                    <span className="mt-1 inline-block text-[11px] font-mono text-purple-400">
                      Global &amp; Dhaka SLAs
                    </span>
                  </div>
                </div>

                {/* Macro Capability Pillar Links */}
                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 mb-3">
                    Fast Pillar Navigator
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillarsList.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        className="group/pill inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-[11px] text-zinc-300 transition-colors hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                        <span>{p.name}</span>
                        <span className="text-[10px] text-zinc-500">({p.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 border-t border-white/[0.08] pt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Explore complete catalog</span>
                  <Link
                    href="/services#all-services"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-mono uppercase tracking-wider transition-colors"
                  >
                    <span>View all 74</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical SoftWeb Editorial Marquee Ticker */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Core service capabilities marquee ticker</p>
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
