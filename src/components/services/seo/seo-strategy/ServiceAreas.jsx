'use client'

import React from 'react'
import { MapPin, Globe2, Building2 } from 'lucide-react'

const regions = [
  { name: 'Bangladesh (HQ & Domestic)', note: 'Dhaka, Chittagong, Sylhet, and national enterprise brands' },
  { name: 'United States', note: 'SaaS, ecommerce, professional services, local multi-location' },
  { name: 'United Kingdom', note: 'London & regional scale-ups, cross-border European expansion' },
  { name: 'United Arab Emirates', note: 'Dubai & Abu Dhabi commercial enterprises, bilingual Arabic/English' },
  { name: 'Australia & Canada', note: 'National B2B, tech scale-ups, and localized services' },
  { name: '20+ Global Markets', note: 'Advising cross-border brands navigating multi-country organic scale' },
]

export default function ServiceAreas() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
                Where We Advise
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              Global Advisory With <span className="italic text-frame-accent">Dhaka HQ Roots</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
              <p>
                Framecipher is headquartered in Dhaka, providing SEO strategy and fractional leadership for businesses across Bangladesh and clients across the UAE, US, UK, Australia, and Canada—spanning 20+ countries to date.
              </p>
              <p>
                Team structures, market maturity, and competitive dynamics vary dramatically by region. Our strategic recommendations actively account for these realities instead of naively applying one market’s assumptions everywhere.
              </p>
              <p className="text-sm sm:text-base text-zinc-500">
                For Bangladeshi businesses specifically, this means factoring in realistic access to local engineering talent, in-house writer capacity, and practical marketing budgets rather than demanding an oversized US-scale internal dev sprint.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Surface Card with Region Matrix */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-frame-accent">
                  <Globe2 className="h-4 w-4" />
                  <span>Active Advisory Footprint</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">20+ Countries</span>
              </div>

              <div className="space-y-2.5">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-[#16161A] p-3 text-xs transition-colors hover:border-white/[0.12]"
                  >
                    <MapPin className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading text-sm font-medium uppercase text-white block">
                        {region.name}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-400 mt-0.5 block">
                        {region.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
