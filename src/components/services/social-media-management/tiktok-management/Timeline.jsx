'use client'

import React from 'react'
import { Calendar, Check, ArrowRight, Clock, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const phases = [
  {
    number: '01',
    phase: 'Phase 01 · Discovery',
    title: 'Initial Audit & Baseline',
    lead: 'We conduct a comprehensive audit across your brand and TikTok presence:',
    bullets: [
      'Existing TikTok account analysis',
      'Target audience & demographic fit',
      'Competitor account benchmarks',
      'Content performance history',
      'Commercial goals & conversion paths',
      'Collection of essential brand assets',
    ],
    note: 'We collect all strategic inputs to establish a high-conviction creative roadmap.',
  },
  {
    number: '02',
    phase: 'Phase 02 · Architecture',
    title: 'Strategy & Content Setup',
    lead: 'We formulate the foundational operational system for ongoing execution:',
    bullets: [
      'Strategic content pillars definition',
      'Brand messaging voice & visual style',
      'Creative direction & format selection',
      'Publishing calendar & initial topics',
      'Production requirements & asset briefs',
      'Review & approval workflow setup',
    ],
    note: 'Establishes clear criteria for batch production and weekly cadence.',
  },
  {
    number: '03',
    phase: 'Phase 03 · Activation',
    title: 'First Content Cycle',
    lead: 'We create, review, approve, and publish the debut batch of videos:',
    bullets: [
      'Concepting & opening hook scripting',
      'Short-form editing & dynamic text',
      'Client review & formal sign-off',
      'Peak-hour publishing & hashtag tagging',
      'Early comment monitoring & triage',
      'Establishment of initial baseline data',
    ],
    note: 'Generates early viewer signals to calibrate upcoming content batches.',
  },
  {
    number: '04',
    phase: 'Phase 04 · Compounding',
    title: 'Ongoing Management & Optimization',
    lead: 'We run a continuous, evidence-based flywheel to compound growth:',
    flow: ['Create', 'Publish', 'Measure', 'Learn', 'Improve'],
    bullets: [
      'Weekly batch production & publishing',
      'Continuous TikTok SEO optimization',
      'Active community care & escalation',
      'Trend adaptation within brand voice',
      'Monthly performance retrospectives',
      'Creative testing on hooks and formats',
    ],
    note: 'Performance patterns directly inform future topics, creative angles, and priorities.',
  },
]

const workflow = [
  { when: 'Week 1', what: 'Account audit, business discovery, audience and competitor research' },
  { when: 'Week 1–2', what: 'Strategy, content pillars, brand voice, content calendar, initial concepts' },
  { when: 'Week 2 onward', what: 'Production, approval, publishing, and community management' },
  { when: 'Monthly', what: 'Reporting, performance review, testing, and next-cycle optimization' },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Engagement Lifecycle · 4 Phases
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            TikTok Management{' '}
            <span className="italic text-frame-accent">Timeline &amp; Onboarding.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            TikTok management is an ongoing process rather than a one-time setup. The exact timeline depends on content volume, approval speed, production requirements, and account complexity.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    {phase.phase}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Phase {phase.number} of 04
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {phase.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {phase.lead}
                </p>

                {phase.flow && (
                  <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {phase.flow.map((entry, fIdx) => (
                        <React.Fragment key={entry}>
                          <span className="rounded-md border border-white/[0.08] bg-[#18181B] px-2 py-0.5 font-mono text-[10px] text-purple-200">
                            {entry}
                          </span>
                          {fIdx < phase.flow.length - 1 && (
                            <span aria-hidden="true" className="text-frame-accent text-xs">
                              &rarr;
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {phase.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200">Milestone: </strong>
                {phase.note}
              </div>
            </article>
          ))}
        </div>

        {/* Typical Initial Workflow Ledger */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
          <div className="max-w-3xl space-y-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Execution Cadence · </span>
            <h4 className="font-heading text-xl font-medium tracking-tight text-white">
              Typical Initial Onboarding Cadence
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              A structured progression from audit to ongoing monthly management:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/[0.06]">
            {workflow.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-3.5 w-3.5 text-frame-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold">
                    {item.when}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.what}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
