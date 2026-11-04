'use client'

import React from 'react'
import { Clock, Calendar, Check, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const timelinePhases = [
  {
    phase: '01',
    label: 'Weeks 1 to 2',
    title: 'Initial Cross-Platform Audit & Framework',
    body: 'An initial cross-platform audit and content calendar framework typically takes one to two weeks, depending on the number of platforms, complexity of the business, available information, and agreed scope.',
    deliverables: [
      'Comprehensive content & channel audit',
      'Audience & content pillar mapping',
      'Master calendar template & workflows',
      'Initial monthly topic roadmap',
      'Repurposing & campaign structure setup',
    ],
  },
  {
    phase: '02',
    label: 'Monthly Cycles',
    title: 'Ongoing Planning & Coordination',
    body: 'Ongoing planning follows an agreed cadence, commonly monthly for active social media management. We lock in dates, campaigns, and asset deadlines with weeks of advance runway.',
    deliverables: [
      'Advance monthly content calendar delivery',
      'Campaign & launch coordination sync',
      'Performance-informed topic adjustments',
      'Stakeholder review & approval gates',
      'Active calendar maintenance',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Delivery Rhythm · Timeline
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Timeline &amp;{' '}
            <span className="italic text-frame-accent">Planning Cycles.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Planning time depends on the number of platforms, business complexity, available information, and the agreed scope.
          </p>
        </div>

        {/* 2 Phases Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {timelinePhases.map((phase) => (
            <article
              key={phase.title}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    {phase.label}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Phase {phase.phase}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  {phase.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing"]}>
                    {phase.body}
                  </AutoLinks>
                </p>

                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 block">
                    Key Deliverables:
                  </span>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    {phase.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
                <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                  Working Philosophy:
                </span>
                The calendar is treated as a working system rather than a static document that becomes outdated after the first month.
              </div>
            </article>
          ))}
        </div>

        {/* Timeline Footer Note */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Complex &amp; Multi-Market Requirements
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Larger campaigns, multiple international markets, complex approval hierarchies, or extensive creative production requirements may require additional planning time. Your proposal confirms the final scope, fee, and delivery schedule before work begins.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Discuss Your Timeline
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
