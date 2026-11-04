'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const timelineStages = [
  {
    period: 'Days 1–4',
    title: 'Discovery & Infrastructure Review',
    body: [
      'Business, ICP, buying committee, account structure, conversion goals, and tracking review.',
    ],
  },
  {
    period: 'Week 1',
    title: 'Research & Asset Strategy',
    body: [
      'Audience research, campaign strategy, creative direction, Lead Gen Forms, and tracking setup.',
    ],
  },
  {
    period: 'Week 2',
    title: 'Build, QA & Launch',
    body: [
      'Campaign build, review, launch, and initial delivery validation.',
    ],
  },
  {
    period: 'Weeks 3–6 and beyond',
    title: 'Optimization & Sales Feedback',
    body: [
      'Audience refinement, creative testing, budget optimization, retargeting, lead-quality review, and sales feedback.',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            LinkedIn Ads Management{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            LinkedIn campaign timelines depend on account condition, audience size, creative requirements, tracking setup, approval time, and sales-cycle complexity.
          </p>
        </div>

        {/* 2-Column Split: Context vs Sequential Timeline */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Context Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <p>
              B2B campaigns can require longer observation periods because the first lead is not necessarily the final business outcome.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              Where CRM or qualified-lead data is available, we use that information to understand campaign performance beyond the initial conversion.
            </p>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2 pt-5">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Pipeline Patience Principle
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Premature account alterations reset platform learning. We give campaigns the deliberate incubation period required to gather statistically significant commercial signals.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Timeline Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {timelineStages.map((stage, index) => (
              <div
                key={index}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-semibold text-frame-accent shrink-0 pt-0.5">
                    0{index + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg font-medium text-white group-hover:text-frame-accent transition-colors">
                      {stage.title}
                    </h3>
                    {stage.body.map((p, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed pt-1">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
