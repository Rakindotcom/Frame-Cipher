'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'

const bdCities = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Rajshahi',
  'Khulna',
  'Gazipur',
  'Narayanganj',
]

const globalMarkets = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
]

export default function BangladeshWorldwide() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Development Services{' '}
            <span className="italic text-frame-accent">Across Bangladesh &amp; Worldwide.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides cross-platform app development services from Dhaka, Bangladesh for businesses, startups, and organizations across Bangladesh and international markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bangladesh Market Card */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center gap-2 text-frame-accent font-mono text-xs uppercase tracking-wider">
                <MapPin className="h-4 w-4" />
                <span>Across Bangladesh</span>
              </div>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium text-white">
                Nationwide Commercial Hubs
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {bdCities.map((city, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-4">
              <span className="text-xs text-zinc-500 font-mono">
                Local bKash/Nagad checkout &amp; localized connectivity optimizations
              </span>
            </div>
          </div>

          {/* Worldwide Markets Card */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center gap-2 text-frame-accent font-mono text-xs uppercase tracking-wider">
                <Globe className="h-4 w-4" />
                <span>International Delivery</span>
              </div>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium text-white">
                Global Startups &amp; Enterprises
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                Our remote workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {globalMarkets.map((mkt, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-purple-500/30 bg-frame-accent/10 px-3 py-1 font-mono text-xs text-frame-accent"
                  >
                    {mkt}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-4">
              <span className="text-xs text-zinc-500 font-mono">
                Asynchronous sprints, strict NDA compliance, and UTC+6 time-zone overlap
              </span>
            </div>
          </div>
        </div>

        {/* Closing Capability Commitment */}
        <div className="mt-8 rounded-xl border border-white/[0.06] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="font-heading text-lg font-medium text-white">
              End-To-End Accountable Mobile Engineering
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Whether you need an MVP, customer-facing app, internal business system, marketplace, or larger digital product, we manage strategy, design, development, integration, testing, and release through one in-house team.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Discuss Your App Project
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
