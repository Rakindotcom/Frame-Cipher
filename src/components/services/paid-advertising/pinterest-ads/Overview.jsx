'use client'

import React from 'react'
import { Sparkles, Compass, Eye, TrendingUp, Layers, Target } from 'lucide-react'

const pillars = [
  {
    icon: Compass,
    title: 'Discovery & Planning Intent',
    desc: 'People use Pinterest weeks or months before a purchase to research, save ideas, and build shortlists for home, fashion, weddings, or projects.',
  },
  {
    icon: Layers,
    title: 'Pin-Native Creative',
    desc: 'We craft creative specifically for the Pinterest aesthetic—vertical formats, clear value hooks, high-utility overlays, and inspirational storytelling.',
  },
  {
    icon: Target,
    title: 'Performance+ & Search Targeting',
    desc: 'Combining active keyword search with visual interest graph signals, custom audience lists, and automated Performance+ optimization.',
  },
  {
    icon: TrendingUp,
    title: 'Server-Side Tag & CAPI Tracking',
    desc: 'Complete dual-tracking implementation with Pinterest Tag and Conversions API deduplication to protect conversion signal accuracy.',
  },
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* SoftWebGrove 2-Column Master Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Strategic Thesis & Context (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Pinterest Ads Built for Discovery, Planning &amp;{' '}
              <span className="italic text-frame-accent">Purchase Intent.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              <p>
                Pinterest is not just another social platform. People use it to collect ideas, compare possibilities, plan occasions, discover products, and prepare for purchases.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                A wedding, home renovation, seasonal wardrobe, recipe, room makeover, or product shortlist can begin on Pinterest long before the final transaction. That changes how advertising should work.
              </p>
              <p className="text-sm sm:text-base text-zinc-400">
                A strong Pinterest campaign needs more than reach. The creative needs to fit the platform. The targeting needs to reflect what people are searching for and planning. The landing page needs to continue the same experience after the click.
              </p>
              <p className="text-xs sm:text-sm font-mono text-zinc-300">
                <span className="text-frame-accent font-bold mr-1.5">✓</span> Framecipher builds Pinterest campaigns around that full journey—aligning campaign objective, targeting, creative, catalog, landing page, tracking, and optimization around a defined business outcome.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Architecture Alignment Vectors (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-medium text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
