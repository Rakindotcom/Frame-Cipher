'use client'

import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { Terminal } from 'lucide-react'
import { RouteGlobe } from '../ui/route-globe'

const ABOUT_GLOBE_THEME = {
  ground: 'transparent',
  land: '#A855F7',
  arc: '#C084FC',
  glow: 'rgba(168, 85, 247, 0.22)',
  text: '#FFFFFF',
  muted: '#A1A1AA',
}

const aboutMarqueeItems = [
  'Multinational Tech Architecture',
  'Dhaka Engineering Campus',
  '20+ Countries Served',
  'Full-Stack Software',
  'Proprietary Growth OS',
  'Global Enterprise Standards',
  'Algorithmic Paid Media',
  '100% In-House Operators',
]

const baseItems = [...aboutMarqueeItems, ...aboutMarqueeItems]
const duplicatedItems = [...baseItems, ...baseItems]

export default function AboutHero() {
  return (
    <>
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
            {/* Left Column: Two-Tone H1 + Narrative + CTAs + Terminal Pill */}
            <div>
              {/* Main H1 Headline: Crisp Pure White with Signature Deep Purple */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.04]">
                <span className="block text-highlighted">A Multinational Tech &amp; Growth Powerhouse</span>
                <span className="block text-purple-600">Born in Bangladesh.</span>
              </h1>

              {/* Description Paragraph with Deep Purple Link Accents */}
              <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-white md:text-lg">
                Frame Cipher was founded on an unapologetic ambition: to build a tier-one multinational technology, media, and growth engineering company anchored in Bangladesh. We combine full-stack software development, brand architecture, cinematic media production, and mathematical performance marketing under one unified operating system, serving high-growth startups and global enterprises across 20+ countries.
              </p>

              {/* CTA Button Pair */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PosterButton href="/contact">
                  Schedule Global Consultation
                </PosterButton>
                <PosterButton href="/services" variant="outline">
                  Explore 74+ Services
                </PosterButton>
              </div>

              {/* Quick CLI Command Box */}
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

            {/* Right Column: 3D Rotating Globe Visual Floating Bare (Zero Background Container) */}
            <div className="relative flex items-center justify-center select-none w-full">
              {/* Soft atmospheric violet-purple ambient light */}
              <div
                className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] md:h-[480px] md:w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18)_0%,rgba(147,51,234,0.05)_50%,transparent_75%)] blur-3xl"
                aria-hidden="true"
              />

              <RouteGlobe
                theme={ABOUT_GLOBE_THEME}
                className="h-[360px] w-[360px] sm:h-[460px] sm:w-[460px] md:h-[500px] md:w-[500px] lg:h-[540px] lg:w-[540px] xl:h-[580px] xl:w-[580px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Editorial Moving Text Rotation (Matching HomeTextMarquee & Master Design System) */}
      <section className="kinetic-marquee relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] py-8 text-white">
        <p className="sr-only">Frame Cipher core credentials ticker</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {duplicatedItems.map((item, index) => (
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
