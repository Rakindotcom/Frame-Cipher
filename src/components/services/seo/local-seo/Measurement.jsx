'use client'

import React from 'react'
import {
  Compass,
  LayoutDashboard,
  PhoneCall,
  Search,
  Briefcase,
} from 'lucide-react'

const metrics = [
  {
    icon: Compass,
    title: 'Map Pack & Geo-Grid Visibility',
    desc: 'Monitoring rankings across multi-point geographic grids rather than checking single manual coordinates. Reveals exact strong visibility zones, proximity boundaries, and pockets needing attention.',
  },
  {
    icon: LayoutDashboard,
    title: 'Google Business Profile Interactions',
    desc: 'Tracking verified customer discovery metrics inside Google Business Profile insights: direct vs discovery searches, photo views, profile interactions, and branded search volume.',
  },
  {
    icon: PhoneCall,
    title: 'Calls, Directions & Website Actions',
    desc: 'Connecting search visibility to concrete user intent: tracked phone calls, Google Maps direction requests, booking inquiries, and website link clicks directly from local search results.',
  },
  {
    icon: Search,
    title: 'Organic Local Search Performance',
    desc: 'Measuring standard organic Google Search performance across localized service queries, city landing pages, and commercial queries through Google Search Console impressions and clicks.',
  },
  {
    icon: Briefcase,
    title: 'Leads & Commercial Business Outcomes',
    desc: 'The ultimate bottom-line measurement: qualified walk-ins, quote requests, appointment bookings, and attributed sales opportunities resulting from enhanced local market prominence.',
  },
]

export default function Measurement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Accountability &amp; Tracking
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Measure{' '}
            <span className="italic text-frame-accent">Local SEO Performance</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local SEO performance should be measured through far more than a single manual ranking check. We combine geographic visibility heatmaps with verified customer actions and real business revenue outcomes.
          </p>
        </div>

        {/* 5 Metrics Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      Metric 0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
