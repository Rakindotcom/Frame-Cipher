'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: 'Week 1',
    title: 'Audit, Modeling & Strategy',
    desc: 'Deep discovery into account history, catalog retail readiness, SKU-level break-even economics, and competitor analysis.',
    items: [
      'Advertising account access & catalog audit',
      'SKU-level break-even ACOS & gross margin modeling',
      'Target keyword research & search intent grouping',
      'Competitor ASIN & price positioning review',
      'Tracking & Amazon Attribution verification',
    ],
  },
  {
    phase: 'Week 1–2',
    title: 'Architecture Build & Pre-Launch QA',
    desc: 'Constructing portfolio hierarchies, automatic & manual campaigns, negative keyword lists, and custom creative assets.',
    items: [
      'Campaign taxonomy build across target match types',
      'Negative keyword and ASIN suppression lists deployed',
      'Dynamic bid settings & placement multipliers configured',
      'Sponsored Brands & Video assets reviewed & approved',
      'Final client review and structured campaign launch',
    ],
  },
  {
    phase: 'Days 15–30',
    title: 'Data Gathering & Search Term Migration',
    desc: 'The initial data-gathering window where algorithmic discovery begins and high-converting search queries are migrated to manual exact campaigns.',
    items: [
      'Initial search-term harvesting routines deployed',
      'Aggressive negative matching to cut immediate click waste',
      'Initial bid adjustments based on conversion velocity',
      'Buy Box win-rate and inventory pacing checks',
    ],
  },
  {
    phase: 'Month 2+',
    title: 'Scale, Defense & Profitability Expansion',
    desc: 'Full-scale optimization focusing on blended TACOS reduction, organic ranking lift, defensive ASIN dominance, and seasonal event preparation.',
    items: [
      'Continuous weekly bid and dayparting calibration',
      'Defensive ASIN targeting on own product pages',
      'Prime Day and Q4 holiday promotional bid pacing',
      'Executive monthly reporting on profit contribution',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Timeline: How Long Does{' '}
            <span className="italic text-frame-accent">Amazon Ads Setup Take?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Initial audit, campaign build, and launch typically complete within 7 to 14 business days, followed by systematic weekly optimization cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="bg-[#121214] p-6 flex flex-col justify-between transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div>
                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {p.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
