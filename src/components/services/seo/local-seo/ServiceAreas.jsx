'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const bdLocations = [
  'Dhaka (Gulshan, Banani, Dhanmondi, Uttara, Mirpur)',
  'Chattogram (Agrabad, Nasirabad, GEC, Halishahar)',
  'Sylhet (Zindabazar, Amberkhana, Shahjalal Upashahar)',
  'Gazipur & Tongi Industrial Hubs',
  'Narayanganj Commercial & Export Belts',
  'Rajshahi (Shaheb Bazar, Motihar)',
  'Khulna (Shibbari, Daulatpur, Khalishpur)',
  'Barishal, Rangpur & Mymensingh Divisional Centers',
]

const intlMarkets = [
  'United States (City, County & State Service Areas)',
  'United Kingdom (London Boroughs & Regional Shires)',
  'Canada (Greater Toronto, Vancouver, Montreal, Calgary)',
  'Australia (Sydney, Melbourne, Brisbane, Perth)',
  'United Arab Emirates (Dubai, Abu Dhabi, Sharjah)',
  'Multi-country branch & franchise geo-targeting',
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Geographic Deployment
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Local SEO for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; International Markets</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local search behavior and competitive intensity vary dramatically by territory. We customize geographic targeting to the exact metropolitan areas and regions your business serves.
          </p>
        </div>

        {/* 2 Regional Columns */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Bangladesh Column */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Domestic Dominance
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                    Bangladesh Coverage
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                For businesses targeting Bangladesh, we structure local SEO around specific divisional hubs, commercial wards, and neighborhood search terms based on actual service coverage.
              </p>

              <div className="mt-6 space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Key Focus Territories:
                </span>
                <ul className="space-y-2">
                  {bdLocations.map((loc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* International Column */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Global Reach
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                    International Markets
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                For international businesses operating in Tier-1 western and Middle-Eastern markets, we configure hyper-local service radiuses, localized language nuances, and country-specific citation ecosystems.
              </p>

              <div className="mt-6 space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  Target Territories:
                </span>
                <ul className="space-y-2">
                  {intlMarkets.map((mkt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{mkt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
            Need local Map Pack prominence in a specific city or multi-branch franchise market? Request an audit of your target location.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
