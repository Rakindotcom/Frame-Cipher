'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: '01',
    duration: 'Week 01',
    title: 'Audit & Strategy',
    desc: 'Discovery, Business Center audit, Pixel health assessment, target market verification, competitor research, and creative testing blueprint.',
    deliverables: [
      'Account & Business Center readiness check',
      'Target audience & competitor research',
      'Pixel & Events API technical audit',
      'Initial creative testing matrix & briefs',
    ],
  },
  {
    phase: '02',
    duration: 'Weeks 01 – 02',
    title: 'Production & Setup',
    desc: 'Scripting, filming, and editing native short-form video assets, deploying tracking, configuring catalogs, and setting up campaign structures.',
    deliverables: [
      'Native vertical video editing & text overlays',
      'Pixel & server-side Events API verification',
      'Merchant catalog feed integration (if ecommerce)',
      'Pre-launch campaign QA and client approval',
    ],
  },
  {
    phase: '03',
    duration: 'Weeks 02 – 03',
    title: 'Launch & Discovery',
    desc: 'Deploying campaigns under controlled bid pacing. Gathering baseline delivery patterns across hooks, audiences, and creative variations.',
    deliverables: [
      'Paced spend rollout across ad groups',
      'Opening hook & 6-second retention analysis',
      'Outbound click-through & bounce rate checks',
      'Early conversion signal verification',
    ],
  },
  {
    phase: '04',
    duration: 'Ongoing',
    title: 'Optimization & Scaling',
    desc: 'Scaling winning creative variants, cycling in fresh angles to prevent ad fatigue, pruning low-efficiency audiences, and maximizing ROAS.',
    deliverables: [
      'Budget migration to top-converting ads',
      'Bi-weekly creative refresh cycles',
      'Smart+ automated bidding calibration',
      'Transparent weekly reporting & strategy sync',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Timeline &amp; Deployment{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Initial setup typically takes one to two weeks, transitioning immediately into structured creative experimentation and scaling.
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
