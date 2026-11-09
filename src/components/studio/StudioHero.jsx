'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Mic, Video, Camera, Sparkles, Terminal } from 'lucide-react'
import PosterButton from '../home/PosterButton'
import StudioHeroVisual from './StudioHeroVisual'
import { TypeMarquee } from '../Kinetic'

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
    <section className="relative isolate border-b border-white/10 bg-[#09090B] pt-28 pb-16 px-4 sm:px-6 md:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation Header Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-600" />
            <span className="text-purple-400">Studio</span>
          </nav>

          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 bg-[#0D0D0F] border border-emerald-500/20 rounded-full px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Physical Soundstage · ECB Chattar, Dhaka</span>
          </div>
        </div>

        {/* Symmetrical Two-Column Hero Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-medium leading-[0.94] tracking-tight text-white">
              Podcast &amp; Video Production{' '}
              <span className="block text-purple-600">
                Studio in Dhaka.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
              Your ideas deserve a better frame. <strong className="font-medium text-white">FrameCipher Studio</strong> is
              an in-house podcast, video, and product photography studio at Matikata ECB Chattar, Dhaka. Multi-mic
              recording, 4K multi-camera shoots, studio lighting, and DaVinci Resolve post-production sit under one roof.
              Scope, price, and deliverables are agreed in writing before we roll.
            </p>

            {/* Symmetrical 52px Button Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <PosterButton href="#booking" variant="primary" className="h-[52px]">
                Book a Studio Session
              </PosterButton>
              <PosterButton href="#pricing" variant="outline" className="h-[52px]">
                See Packages and Prices
              </PosterButton>
            </div>

            {/* Quick Command Box */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0D0D0F] px-3.5 py-1.5 font-mono text-xs text-zinc-300">
                <Terminal className="h-3.5 w-3.5 text-purple-600" />
                <span className="text-zinc-500">$</span>
                <span>npx frame-cipher studio --inspect</span>
              </div>
              <span className="font-mono text-xs text-zinc-400">
                Itemised quote in 48 hours
              </span>
            </div>
          </div>

          {/* Right Column: Pure 3D Constellation Visual */}
          <div className="relative flex items-center justify-center">
            <StudioHeroVisual />
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-14 -mx-4 md:-mx-8">
        <TypeMarquee items={marqueeItems} slow />
      </div>

      {/* 4-Column Architectural Ribbon on #0D0D0F */}
      <div className="mx-auto max-w-7xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-xl bg-[#0D0D0F] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/10 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          {ribbon.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="p-6 flex flex-col justify-between space-y-4 transition-colors hover:bg-[#121214]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-purple-400">
                    {s.kicker}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
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
