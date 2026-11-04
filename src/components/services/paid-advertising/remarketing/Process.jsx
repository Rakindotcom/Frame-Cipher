'use client'

import React from 'react'
import {
  Search,
  Filter,
  ShieldCheck,
  Rocket,
  Gauge,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Tracking & Data Audit',
    desc: 'Auditing existing pixels, server-side Conversion APIs, tag health, CRM data hygiene, and active conversion events to identify tracking blind spots before building campaigns.',
    deliverables: [
      'Pixel and server-side tracking health diagnostic',
      'Event payload and parameters verification (value, currency, IDs)',
      'CRM contact list readiness and consent compliance review',
    ],
  },
  {
    step: '02',
    icon: Filter,
    title: 'Segmentation & Journey Mapping',
    desc: 'Mapping customer buying cycles into distinct behavioral stages, defining recency tiers (1d, 7d, 14d, 30d, 90d), and designing audience flow rules.',
    deliverables: [
      'Customer buying cycle duration & velocity modeling',
      'Recency window tiers and exclusion hierarchy blueprint',
      'Cross-platform audience definition specifications',
    ],
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Audience & Suppression Build',
    desc: 'Creating custom audiences, customer match lists, and negative exclusion logic across target ad platforms with automated refresh cycles.',
    deliverables: [
      'Custom audience generation across Google, Meta, TikTok, and Pinterest',
      'Instant purchaser and converted lead negative exclusion lists',
      'Audience overlap minimization and suppression verification',
    ],
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Campaign Architecture & Creative Setup',
    desc: 'Building multi-tier campaign structures, dynamic catalog ad feeds, sequential creative rotations, and frequency guardrails.',
    deliverables: [
      'Multi-tiered campaign build with dedicated budget caps',
      'Dynamic product catalog ads configuration for ecommerce',
      'Pre-launch quality assurance and attribution tracking check',
    ],
  },
  {
    step: '05',
    icon: Gauge,
    title: 'Launch & Exposure Calibration',
    desc: 'Controlled campaign activation followed by immediate monitoring of audience size accumulation, impression frequency, and early CTR response.',
    deliverables: [
      'Daily frequency cap surveillance and exposure pacing',
      'Audience accumulation velocity and match rate validation',
      'Immediate budget reallocation to highest-converting tiers',
    ],
  },
  {
    step: '06',
    icon: TrendingUp,
    title: 'Ongoing Optimization & Executive Reporting',
    desc: 'Systematic weekly creative fatigue monitoring, recency window adjustments, suppression hygiene, and executive business reporting.',
    deliverables: [
      'Weekly creative fatigue audits and visual variant refreshes',
      'Audience-level CPA, ROAS, and conversion rate reporting',
      'Incremental conversion lift and multi-touch attribution analysis',
    ],
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Remarketing{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A disciplined, 6-stage engineering framework that transforms raw website traffic and CRM contacts into high-converting customer retention pipelines.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.step}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14]"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm uppercase tracking-wider text-frame-accent font-bold">
                        Stage {s.step}
                      </span>
                      <div className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-frame-accent">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-7 rounded-lg border border-white/[0.06] bg-black/40 p-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
                      Key Deliverables &amp; Milestones:
                    </p>
                    <div className="space-y-2">
                      {s.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
