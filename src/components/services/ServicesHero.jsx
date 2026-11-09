'use client'

import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { ChevronRight, Terminal } from 'lucide-react'
import ServicesGlobeVisual from './ServicesGlobeVisual'

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

              {/* Display Heading H1: Two-Tone Pure White + Signature Deep Purple */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.96]">
                <span className="block text-white">Marketing, tech &amp; creative.</span>
                <span className="block text-purple-600">Built around your business.</span>
              </h1>

              {/* Editorial Description with 100% Preserved Internal Links */}
              <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-white sm:text-lg">
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

            {/* Right Column: Pure 3D Wireframe Globe Animation with 7 Service Pillars */}
            <div className="relative flex items-center justify-center">
              <ServicesGlobeVisual />
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
