'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: '01',
    duration: 'Week 01',
    title: 'Audit & Planning',
    desc: 'Comprehensive review of your Pinterest account, business manager readiness, target market feasibility, competitor Pins, audience behavior, and conversion tracking.',
    deliverables: [
      'Account eligibility & billing review',
      'Pinterest Trends & keyword intent mapping',
      'Merchant catalog feed diagnosis',
      'Targeting & audience tier blueprint',
    ],
  },
  {
    phase: '02',
    duration: 'Week 02',
    title: 'Setup & Production',
    desc: 'Building campaign architecture, configuring the Pinterest Tag and Conversions API, structuring Product Groups, and producing high-converting native Pin assets.',
    deliverables: [
      'Tag & CAPI setup with event deduplication',
      'Catalog & Product Groups segmentation',
      'Initial batch of 8–12 native Pin creatives',
      'Destination page message-match audit',
    ],
  },
  {
    phase: '03',
    duration: 'Weeks 03 – 04',
    title: 'Launch & Learning',
    desc: 'Campaign go-live with controlled bids. Respecting the official 10-day learning buffer to allow Pinterest’s auction algorithms to stabilize and gather baseline signals.',
    deliverables: [
      'Paced spend rollout & impression checks',
      'Event tracking & match rate verification',
      'Early save & click-through evaluation',
      'Initial learning phase protection',
    ],
  },
  {
    phase: '04',
    duration: 'Month 02 Onward',
    title: 'Optimization & Scaling',
    desc: 'Scaling top-performing Product Groups and keywords, pruning low-return queries, cycling in fresh seasonal Pin variations, and maximizing ROAS.',
    deliverables: [
      'Budget reallocation to top-performing Pins',
      'Performance+ automated bidding evaluation',
      'Seasonal campaign calendar activation',
      'Weekly data-driven reporting & strategy sync',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Timeline &amp;{' '}
            <span className="italic text-frame-accent">Engagement.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From technical readiness and catalog preparation to disciplined algorithmic learning and long-term ROAS scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <h3 className="font-heading text-lg font-medium text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-4 space-y-2">
                {p.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                    <span className="font-mono text-xs text-zinc-300 leading-snug">
                      {item}
                    </span>
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
