'use client'

import React from 'react'
import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const reasons = [
  {
    title: 'Tactics Without a Plan Rarely Compound',
    body: 'Random technical fixes, occasional content pieces, and sporadic link building each do a little, but without sequencing and prioritization, the sum is smaller than it should be.',
  },
  {
    title: 'Internal Teams Often Lack Senior SEO Judgment',
    body: 'A capable marketing team can execute well but still lack the strategic experience to know what actually matters most right now.',
  },
  {
    title: "Templates Don't Account for Your Actual Situation",
    body: 'A generic best-practices checklist ignores your specific competitive landscape, resource constraints, and business priorities.',
  },
  {
    title: 'Strategy Needs Revisiting, Not Just Writing',
    body: 'A roadmap built once and never reviewed again quietly goes stale as algorithms, competitors, and your own business priorities shift.',
  },
]

export default function WhyStrategyWork() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">The Problem With Execution Alone</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Your Business Needs{' '}
            <span className="italic text-frame-accent">Real SEO Strategy Work</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Execution without strategy tends to produce a lot of activity and not much direction.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Reason // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  <AutoLinks currentPath="/services/seo/seo-strategy" allowed={['/services/seo/link-building']}>
                    {reason.body}
                  </AutoLinks>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Direction Before Execution // Discovery Call
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
              Start with a strategy session
            </h3>
            <p className="mt-2 max-w-2xl text-sm sm:text-base font-normal text-zinc-400">
              Clarify your biggest organic growth bottlenecks and define a sequenced roadmap before deploying further resources.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">
              Start With a Strategy Session &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
