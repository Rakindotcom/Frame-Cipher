'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const marketsList = [
  'Bangladesh (Eligibility Assessment)',
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates (UAE)',
  'India',
  'Saudi Arabia',
  'Other Eligible Markets',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Service{' '}
            <span className="italic text-frame-accent">Areas.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka, Bangladesh, and provides ChatGPT Ads management for businesses targeting eligible advertising markets.
          </p>
        </div>

        {/* 2-Column Split: Narrative vs Covered Markets Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Eligibility Protocols (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-frame-accent" />
                <h3 className="font-heading text-xl font-medium text-white">
                  For Bangladesh-Based Businesses
                </h3>
              </div>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Campaign availability depends on the advertiser entity and target market because OpenAI&apos;s Ads Manager availability is determined by the business or ad-account country. We verify the advertiser entity before planning media.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-frame-accent" />
                <h3 className="font-heading text-xl font-medium text-white">
                  For International Campaigns
                </h3>
              </div>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                We assess market availability, targeting requirements, language, landing-page readiness, conversion goals, and campaign structure before launch.
              </p>
            </div>
          </div>

          {/* Right Column: Supported Markets Ledger (6 cols) */}
          <div className="lg:col-span-6 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 space-y-6">
            <h3 className="font-heading text-xl font-medium text-white">
              Broader Paid Advertising Service Coverage:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {marketsList.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent" />
                  <span>{m}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Check ChatGPT Ads Eligibility &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
