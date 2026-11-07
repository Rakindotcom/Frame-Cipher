'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Mic, Video, Camera, Sparkles } from 'lucide-react'
import PosterButton from '../home/PosterButton'

const marqueeItems = [
  'Acoustic Soundstage',
  'Cinema 4K Multi-Cam',
  'Ceiling Lighting Grid',
  'DaVinci Resolve Suite',
  'Podcast & Video Production',
  'Product Photography',
  'Matikata ECB Chattar',
  'In-House Production Team',
]

const ribbon = [
  { icon: Mic, kicker: 'Podcast Audio', value: 'Multi-Mic Sound Isolation' },
  { icon: Video, kicker: '4K Multi-Cam', value: 'Studio Lighting & Backdrops' },
  { icon: Camera, kicker: 'Commercial Photo', value: 'Product & Brand Staging' },
  { icon: Sparkles, kicker: 'Post-Production', value: 'Color Grading & Short Clips' },
]

export default function StudioHero() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation Header Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-frame-accent">Studio</span>
          </nav>

          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400 bg-[#121214] border border-emerald-500/20 rounded-full px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Physical Soundstage · ECB Chattar, Dhaka</span>
          </div>
        </div>

        {/* Hero Title and Description Content */}
        <div className="max-w-4xl space-y-6">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            Podcast &amp; Video Production{' '}
            <span className="text-white">Studio in Dhaka.</span>
          </h1>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-3xl">
            Your ideas deserve a better frame. <strong className="font-medium text-white">FrameCipher Studio</strong> is
            an in-house podcast, video, and product photography studio at Matikata ECB Chattar, Dhaka. Multi-mic
            recording, 4K multi-camera shoots, studio lighting, and DaVinci Resolve post-production sit under one roof.
            Scope, price, and deliverables are agreed in writing before we roll.
          </p>

          {/* Symmetrical 52px Button Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <PosterButton href="#booking" variant="accent">
              Book a Studio Session
            </PosterButton>
            <PosterButton href="#pricing" variant="outline">
              See Packages and Prices
            </PosterButton>
          </div>
        </div>
      </div>

      {/* Canonical Marquee Ticker */}
      <div className="relative mt-14 -mx-4 overflow-hidden border-t border-white/[0.08] bg-[#09090B] py-4 sm:py-5 md:-mx-8">
        <p className="sr-only">Studio facilities and technical capabilities</p>
        <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6">
              <span className="font-heading text-xl sm:text-2xl md:text-3xl font-medium leading-none tracking-tight text-white whitespace-nowrap">
                {item}
              </span>
              <span className="text-zinc-500">&middot;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modality 2 Architectural Divided Ribbon (4-Column Band) */}
      <div className="mx-auto max-w-7xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {ribbon.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="p-6 flex flex-col justify-between space-y-4 transition-colors hover:bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-frame-accent">
                    {s.kicker}
                  </span>
                  <Icon className="h-4 w-4 text-frame-accent" />
                </div>
                <p className="font-heading text-base font-medium text-white">
                  {s.value}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
