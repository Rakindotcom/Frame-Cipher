'use client'

import React from 'react'
import { Check, ShieldCheck, Clock, Calendar } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const phases = [
  {
    number: '01',
    phase: 'Phase 01 //',
    title: 'Initial Audit',
    body: 'We begin with a review of your Company Page, executive profiles, existing content, audience, competitors, and business objectives. This gives us a clear starting point before publishing new content.',
    bullets: [
      'Company Page audit & completeness',
      'Executive profiles & headline positioning',
      'Historical content & engagement check',
      'Audience demographics & competitor analysis',
      'Commercial business objectives mapping',
    ],
  },
  {
    number: '02',
    phase: 'Phase 02 //',
    title: 'Strategy & Voice Development',
    body: 'We develop your LinkedIn positioning, content pillars, audience direction, and content framework. For executive management, this stage also includes capturing the executive’s authentic voice, expertise, and preferred topics.',
    bullets: [
      'B2B positioning & narrative territories',
      'Content pillars & core topic matrix',
      'Ideal audience & decision-maker direction',
      'Content framework & format selection',
      'Executive voice capture & interview discovery',
    ],
  },
  {
    number: '03',
    phase: 'Phase 03 //',
    title: 'First Content Cycle',
    body: 'After strategy approval, we develop the first content batch, design initial carousels, and configure the structured publishing and approval workflow.',
    bullets: [
      'First content batch creation & drafting',
      'Carousel & document graphic design',
      'Publishing calendar & peak-time scheduling',
      'Client review & sign-off protocol setup',
    ],
    note: 'The first cycle may take additional time if new profile assets, brand materials, executive interviews, or custom templates are required.',
  },
  {
    number: '04',
    phase: 'Phase 04 //',
    title: 'Ongoing Management & Optimization',
    body: 'After the initial setup, LinkedIn management continues through an agreed monthly cycle covering creation, publishing, community engagement, and reporting.',
    bullets: [
      'Ongoing content creation & copywriting',
      'Peak-time publishing & scheduling',
      'Active community engagement & moderation',
      'Executive thought leadership delivery',
      'Company Page community updates',
      'Monthly B2B performance reporting',
      'Continuous data-led strategy refinement',
    ],
    note: 'LinkedIn performance does not follow a guaranteed timetable. Audience response, industry competition, account history, content quality, market, and platform changes can all affect results.',
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
              Engagement Lifecycle · 4 Phases
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            LinkedIn Management{' '}
            <span className="italic text-frame-accent">Timeline &amp; Onboarding.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The exact timeline depends on account condition, business complexity, executive availability, content requirements, approval speed, and production scope.
          </p>
        </div>

        {/* 4-Phase Grid */}
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
                  {phase.body}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                    Milestones:
                  </p>
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

              {phase.note && (
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                  <span className="font-semibold text-zinc-300">Timeline Note: </span>
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
