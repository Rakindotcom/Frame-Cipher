'use client'

import React from 'react'
import { Check, ShieldCheck, Clock, Calendar, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const phases = [
  {
    number: '01',
    phase: 'Phase 01 //',
    title: 'Initial Account Audit',
    body: 'We begin with an account and business review to identify immediate opportunities, content gaps, profile issues, and strategic priorities.',
    bullets: [
      'Account review',
      'Business review',
      'Immediate opportunities',
      'Content gaps',
      'Profile issues',
      'Strategic priorities',
    ],
  },
  {
    number: '02',
    phase: 'Phase 02 //',
    title: 'First-Month Setup',
    body: 'The initial strategy, content pillars, calendar, profile improvements, brand direction, and first content batch are developed after discovery and approval.',
    bullets: [
      'Initial strategy',
      'Content pillars',
      'Content calendar',
      'Profile improvements',
      'Brand direction',
      'First content batch',
    ],
    note: 'The first month may require additional setup time if the account needs significant profile work or new content assets.',
  },
  {
    number: '03',
    phase: 'Phase 03 //',
    title: 'Ongoing Management & Optimization',
    body: 'After initial setup, content production, publishing, community management, reporting, and optimization continue on an agreed monthly cycle.',
    bullets: [
      'Content production',
      'Publishing',
      'Community management',
      'Reporting',
      'Optimization',
    ],
    note: 'Instagram performance does not follow a guaranteed timetable. Results can vary based on content, audience, market, account history, offer, competition, and platform changes.',
  },
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
              Engagement Lifecycle · Timeline
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Instagram Management{' '}
            <span className="italic text-frame-accent">Timeline &amp; Setup.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The exact timeline depends on account condition, content requirements, production scope, access, and approval speed.
          </p>
        </div>

        {/* 3-Phase Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    {phase.phase}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Step {phase.number} of 03
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {phase.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {phase.body}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                    Key Activities:
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {phase.note && (
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                  <span className="font-semibold text-zinc-300">Note: </span>
                  {phase.note}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
