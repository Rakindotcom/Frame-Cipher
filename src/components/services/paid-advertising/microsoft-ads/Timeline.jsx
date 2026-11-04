'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: '01',
    duration: 'Week 01',
    title: 'Audit & Demand Assessment',
    desc: 'Discovery, Bing search-demand evaluation, competitor research, historical Google Ads audit (if migrating), and strategic keyword architecture planning.',
    deliverables: [
      'Bing commercial query volume validation',
      'Google Ads account export & migration audit',
      'UET tag & enhanced conversion technical plan',
      'LinkedIn profile target attribute mapping',
    ],
  },
  {
    phase: '02',
    duration: 'Weeks 01 – 02',
    title: 'Setup, Migration & QA',
    desc: 'Building campaign structures, executing clean Google imports, writing responsive search ad copy, configuring Merchant Center feeds, and verifying UET tags.',
    deliverables: [
      'Clean account structure or adapted migration',
      'UET tag deployment & conversion goal testing',
      'Negative keyword list assignment',
      'Pre-launch client walkthrough and approval',
    ],
  },
  {
    phase: '03',
    duration: 'Weeks 02 – 03',
    title: 'Launch & Discovery',
    desc: 'Deploying campaigns under controlled bids. Closely monitoring initial search-term reports, syndicated partner placements, and impression share.',
    deliverables: [
      'Paced spend rollout across ad groups',
      'Early search-term query report auditing',
      'Placement exclusion of low-quality partners',
      'Initial conversion and lead quality checks',
    ],
  },
  {
    phase: '04',
    duration: 'Ongoing',
    title: 'Optimization & Scaling',
    desc: 'Reallocating budget to high-ROAS keywords, scaling LinkedIn profile bid modifiers, testing AI Max for Search, and maximizing pipeline value.',
    deliverables: [
      'Bid adjustments based on desktop conversion value',
      'LinkedIn audience bid modifier expansion',
      'Merchant Center feed attribute tuning',
      'Transparent monthly reporting & strategy sync',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Timeline: How Long Does Setup{' '}
            <span className="italic text-frame-accent">Take?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Initial setup or Google Ads migration typically takes one to two weeks, followed by deliberate query management and performance scaling.
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
