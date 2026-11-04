'use client'

import React from 'react'
import { Check, Layers } from 'lucide-react'

const phases = [
  {
    phase: '01',
    label: 'Discovery',
    items: [
      'Business Goal & Revenue Target Review',
      'Current Organic Performance Assessment',
      'Internal Team Capacity & Dev Review',
      'Scope & Engagement Model Definition',
    ],
  },
  {
    phase: '02',
    label: 'Strategy Development',
    items: [
      'Competitive Landscape & SERP Assessment',
      'Resource-Realistic Roadmapping',
      'Impact vs. Feasibility Priority Sequencing',
      'Written Strategy & Architectural Documentation',
    ],
  },
  {
    phase: '03',
    label: 'Delivery & Handoff',
    items: [
      'Live Strategy Walkthrough Video Session',
      'Two-Week Follow-Up Asynchronous Q&A',
      'Execution Planning & Workflow Setup (if applicable)',
    ],
  },
  {
    phase: '04',
    label: 'Ongoing (Where Applicable)',
    items: [
      'Quarterly In-Depth Strategy Reviews',
      'Google Core Algorithm Update Guidance',
      'Performance-Based Roadmap Adjustment',
      'New SERP & Competitor Opportunity Identification',
    ],
  },
]

export default function StandardEngagement() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Built Into Every Engagement
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Standard for <span className="italic text-frame-accent">Every Engagement</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            These rigorous quality steps are permanently part of how Framecipher works, regardless of which engagement tier or model you select.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((group) => (
            <div
              key={group.phase}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
            >
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent uppercase">
                  Phase {group.phase}
                </span>

                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white border-b border-white/[0.08] pb-4">
                  {group.label}
                </h3>

                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
