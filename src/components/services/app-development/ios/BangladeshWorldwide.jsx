'use client'

import React from 'react'
import { MapPin, Globe, Layers } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function BangladeshWorldwide() {
  return (
    <section id="bangladesh-worldwide" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS App Development Services Across Bangladesh &amp; Worldwide.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides iOS app development services from Dhaka, Bangladesh for businesses, startups, and organizations across Bangladesh and international markets.
          </p>
        </div>

        {/* 3 Geographic Reach Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                  Domestic Reach
                </span>
                <MapPin className="h-5 w-5 text-purple-600" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                Bangladesh Market
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                We work with clients based in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
              Local Engineering Hub
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                  Global Scale
                </span>
                <Globe className="h-5 w-5 text-purple-600" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                International Clients
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Our remote development workflow also supports businesses in the USA, UK, Australia, Canada, UAE, and other international markets.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
              Global Remote Workflow
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                  Engineering Core
                </span>
                <Layers className="h-5 w-5 text-purple-600" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                One In-House Team
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                Whether you need an MVP, a customer-facing application, an internal business tool, or a larger digital product, we manage strategy, design, development, integration, testing, and release through one in-house team.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
              Turnkey Accountability
            </span>
          </div>
        </div>

        {/* Action Button Pair */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <PosterButton href="/contact" variant="accent">
            Get Free Consultation
          </PosterButton>
          <PosterButton href="#pricing" variant="outline">
            View Packages &amp; Pricing
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
