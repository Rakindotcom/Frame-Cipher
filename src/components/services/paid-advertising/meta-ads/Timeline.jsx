'use client'

import React from 'react'
import { Calendar, Clock, Sparkles } from 'lucide-react'

const timelineStages = [
  {
    step: '01',
    period: 'Days 1–3',
    title: 'Audit & Diagnostic Review',
    body: 'Business model, ad account health, audience assets, creative history, value proposition, and Meta Pixel / CAPI event tracking review.',
    deliverable: 'Account Audit & Creative Strategy Baseline',
  },
  {
    step: '02',
    period: 'Week 1',
    title: 'Campaign Architecture & Creative Build',
    body: 'Campaign structure design (Advantage+ / Manual), audience research and lookalike generation, ad creative variations (Reels, Carousels, Static), and pre-launch QA.',
    deliverable: 'Creative Matrix & Technical CAPI Verification',
  },
  {
    step: '03',
    period: 'Week 2',
    title: 'Staged Launch & Telemetry Validation',
    body: 'Campaign launch, delivery signal validation, initial click-through and hook rate analysis, audience overlap monitoring, and early budget calibration.',
    deliverable: 'Delivery Verification & Early Signal Pruning',
  },
  {
    step: '04',
    period: 'Weeks 3–4 & Beyond',
    title: 'Creative Testing & Conversion Scaling',
    body: 'Iterative creative testing (new hooks, angles, formats), audience refinement, Advantage+ budget scaling, multi-touch retargeting rollout, and executive reporting.',
    deliverable: 'Bi-Weekly/Monthly Performance & ROAS Reports',
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Meta Ads Management{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Meta Ads timelines vary based on account condition, campaign complexity, creative requirements, tracking setup, and approval time. The amount of time needed to reach useful performance signals varies by campaign objective, conversion volume, spend level, audience size, and sales cycle. We therefore avoid promising a universal &ldquo;results in seven days&rdquo; timeline.
          </p>
        </div>

        {/* 4 Chronological Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timelineStages.map((stage) => (
            <div
              key={stage.step}
              className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-medium text-white">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {stage.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase text-zinc-500 block mb-1">
                  Deliverable:
                </span>
                <p className="text-xs font-mono text-frame-accent">
                  {stage.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Expectation Callout */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 border border-white/[0.08] text-frame-accent">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Meta Delivery &amp; Learning Phase Note
            </span>
          </div>
          <p className="text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
            Meta&apos;s machine learning delivery algorithms require approximately 50 conversion events per ad set within a 7-day window to exit the &ldquo;Learning Phase&rdquo; and achieve optimal delivery stability. We structure campaigns, audiences, and ad set consolidation to ensure your budget exits learning quickly without unnecessary spend fragmentation.
          </p>
        </div>
      </div>
    </section>
  )
}
