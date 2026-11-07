'use client'

import Link from 'next/link'
import { Terminal } from 'lucide-react'
import PosterButton from './PosterButton'
import HeroGlobeVisual from './HeroGlobeVisual'

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 pb-20 pt-28 sm:px-6 sm:pt-36 md:px-8 md:pb-28 md:pt-40 lg:pt-44">
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

      {/* The 360 mark watermark */}
      <div
        className="pointer-events-none absolute right-0 top-6 -z-10 select-none font-heading text-[48vw] font-medium leading-none text-white/[0.02] md:-right-6 md:top-10 md:text-[24vw]"
        aria-hidden="true"
      >
        360
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/* Symmetrical Two-Column Hero Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left Column: Eyebrow + H1 + Paragraph + CTAs + Command Pill */}
          <div>
            {/* Raycast-style Capsule Eyebrow Bar */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-muted">
                Dhaka Studio · Built for brands moving worldwide
              </p>
            </div>

            {/* H1 Headline inside Left Column */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.04]">
              <span className="block text-highlighted">We build the system</span>
              <span className="block text-purple-600">that makes brands move.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
              Frame Cipher brings brand positioning, <Link href="/studio" className="text-white underline decoration-purple-600/50 underline-offset-4 transition-colors hover:text-purple-600">commercial video</Link>, <Link href="/services/website-design-development" className="text-white underline decoration-purple-600/50 underline-offset-4 transition-colors hover:text-purple-600">high-converting websites</Link>, <Link href="/services/paid-advertising" className="text-white underline decoration-purple-600/50 underline-offset-4 transition-colors hover:text-purple-600">paid media</Link>, and automation into one disciplined growth machine. No fragmented agencies. One accountable partner.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">Book a strategy call</PosterButton>
              <PosterButton href="/projects" variant="outline">
                Explore our work
              </PosterButton>
            </div>

            {/* Quick Command Box matching Nuxt's command pill */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1.5 font-mono text-xs text-zinc-300">
                <Terminal className="h-3.5 w-3.5 text-purple-600" />
                <span className="text-zinc-500">$</span>
                <span>npx frame-cipher audit</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                Free 20-min growth architecture session
              </span>
            </div>
          </div>

          {/* Right Column: Pure 3D Wireframe Globe Animation (Zero Card Background) */}
          <div className="relative flex items-center justify-center">
            <HeroGlobeVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
