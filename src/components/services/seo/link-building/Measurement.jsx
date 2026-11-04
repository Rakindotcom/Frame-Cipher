'use client'

import React from 'react'
import {
  Network,
  Target,
  ExternalLink,
  TrendingUp,
  Briefcase,
} from 'lucide-react'

const measureAreas = [
  {
    icon: Network,
    title: 'Links & Referring Domains',
    body: 'We track the links that were actually earned and the domains providing them (new links, lost links, unique referring domains, repeated links, and links to different areas). The goal is quality and distribution, not simply increasing total backlink count.',
  },
  {
    icon: Target,
    title: 'Target Pages & Placement Coverage',
    body: 'We track where external links are pointing: Are important service pages receiving relevant references? Are research assets attracting citations? Is authority over-concentrated on the homepage? This ensures balanced priority page support.',
  },
  {
    icon: ExternalLink,
    title: 'Referral Traffic & Brand Visibility',
    body: 'A relevant publication introduces your brand to a new audience and generates referral visits. Where analytics data is available, we review referral visits, engagement quality, and qualitative exposure such as industry mentions.',
  },
  {
    icon: TrendingUp,
    title: 'Organic Search Performance',
    body: 'Evaluated alongside Google Search Console data: organic impressions, organic clicks, search visibility, ranking trends, and queries surfacing target pages. We do not falsely attribute every traffic change to link building alone.',
  },
  {
    icon: Briefcase,
    title: 'Business Outcomes',
    body: 'The most useful outcome is commercial growth: qualified leads, contact enquiries, demo requests, product sales, and referral conversions that connect authority-building directly to your business objectives.',
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
              Accountability &amp; Analytics
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            How We Measure{' '}
            <span className="italic text-frame-accent">Off-Page SEO Performance</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Link count alone does not explain whether an off-page campaign is moving in the right direction. We combine placement data with broader search and business metrics where tracking is available.
          </p>
        </div>

        {/* 5 Measurement Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {measureAreas.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
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

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}

          {/* Honest Attribution Philosophy Card */}
          <div className="rounded-2xl border border-frame-accent/30 bg-frame-accent/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                Integrity in Reporting
              </span>
              <h3 className="mt-2 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                Honest Attribution
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                We do not attribute every ranking or traffic change to link building alone. Organic performance is also affected by technical health, content depth, competitive moves, and algorithm updates. Where other factors explain movement, we say so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
