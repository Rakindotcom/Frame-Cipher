'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: 'Week 1',
    title: 'Audit, Mapping & Strategy',
    desc: 'Deep diagnostic into existing tracking health, buying cycle duration, CRM readiness, and audience segmentation architecture.',
    items: [
      'Multi-platform pixel and CAPI signal audit',
      'Customer buying cycle velocity & recency tier modeling',
      'Audience segmentation & suppression blueprint design',
      'Consent Mode v2 & privacy compliance review',
      'Creative format requirement & asset planning',
    ],
  },
  {
    phase: 'Week 1–2',
    title: 'Implementation, Build & Launch',
    desc: 'Configuring server-side tracking, building custom audience lists, setting suppression rules, preparing creative variations, and controlled launch.',
    items: [
      'Server-side Conversion API & pixel event configuration',
      'Custom audience creation across target networks',
      'Instant purchaser & converted lead suppression setup',
      'Dynamic product catalog feed QA & creative build',
      'Client review, sign-off, and structured campaign launch',
    ],
  },
  {
    phase: 'Days 15–30',
    title: 'Audience Accumulation & Calibration',
    desc: 'Active monitoring as audience pools fill, adjusting frequency caps, re-allocating budget to highest-velocity segments, and testing initial creative hooks.',
    items: [
      'Audience accumulation speed & match-rate tracking',
      'Daily frequency cap surveillance to prevent early burnout',
      'Initial CPA and conversion rate benchmarking per cohort',
      'Negative exclusion verification to ensure zero leakage',
    ],
  },
  {
    phase: 'Month 2+',
    title: 'Sequential Scale & Fatigue Defense',
    desc: 'Executing sequential creative rotations, testing new objection-handling hooks, setting replenishment loops, and executive attribution reporting.',
    items: [
      'Continuous creative rotation and fatigue defense',
      'Holdout incrementality tests measuring true conversion lift',
      'CRM offline conversion syncing for high-ticket pipelines',
      'Monthly executive reporting on CAC impact and LTV growth',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Timeline: How Long Does{' '}
            <span className="italic text-frame-accent">Remarketing Setup Take?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Initial tracking audit, audience build, and campaign launch typically complete within 7 to 14 business days, followed by systematic weekly exposure calibration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="bg-[#121214] p-6 flex flex-col justify-between transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div>
                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {p.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                    <span>{item}</span>
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
