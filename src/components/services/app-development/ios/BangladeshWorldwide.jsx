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
            iOS App Development Services Across{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; Worldwide.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides iOS app development services from Dhaka, Bangladesh for businesses, startups, and organizations across Bangladesh and international markets.
          </p>
        </div>

        {/* 3 Geographic Reach Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-frame-accent/10 text-frame-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                Bangladesh Market
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                We work with clients based in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
              Local Engineering Hub
            </span>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-frame-accent/10 text-frame-accent">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                International Clients
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                Our remote development workflow also supports businesses in the USA, UK, Australia, Canada, UAE, and other international markets.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
              Global Remote Workflow
            </span>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-frame-accent/10 text-frame-accent">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                One In-House Team
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                Whether you need an MVP, a customer-facing application, an internal business tool, or a larger digital product, we manage strategy, design, development, integration, testing, and release through one in-house team.
              </p>
            </div>
            <span className="mt-6 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
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
