'use client'

import React from 'react'
import {
  Search,
  Compass,
  Database,
  Rocket,
  Sliders,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Qualification Mapping',
    desc: 'Deep discovery into your ideal customer profile (ICP), deal economics, sales cycle length, existing CRM setup, and qualification criteria.',
    deliverables: [
      'Customer profile and qualification benchmarks defined',
      'Average contract value and target CAC threshold modeling',
      'Existing CRM architecture and routing diagnostic',
    ],
  },
  {
    step: '02',
    icon: Compass,
    title: 'Platform Selection & Offer Strategy',
    desc: 'Selecting the channel mix across Google, Meta, and LinkedIn, and designing compelling high-intent offers (demos, quotes, audits) that attract decision-makers.',
    deliverables: [
      'Multi-channel allocation strategy and budget blueprint',
      'Direct-response ad copy and visual creative concepts',
      'High-utility offer specification (consultation, quote, demo)',
    ],
  },
  {
    step: '03',
    icon: Database,
    title: 'Lead Destination & CRM Integration',
    desc: 'Building responsive landing pages or native in-app forms, embedding qualification questions, and linking real-time CRM lead routing with instant notifications.',
    deliverables: [
      'Form build with strategic qualification fields',
      'Real-time CRM webhook and lead field mapping',
      'Instant SMS/Slack/email alerts configured for sales reps',
    ],
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Pre-Launch QA & Controlled Activation',
    desc: 'End-to-end testing of form submission payloads, tracking tags, CRM contact creation, and ad parameters followed by structured campaign rollout.',
    deliverables: [
      'Complete end-to-end test lead submission through to CRM',
      'Tracking tag, UTM parameter, and CAPI verification',
      'Initial bid parameters and placement multipliers activated',
    ],
  },
  {
    step: '05',
    icon: Sliders,
    title: 'Lead Quality & Funnel Optimization',
    desc: 'Weekly calibration evaluating not just lead volume, but sales rep contact rates, qualification percentages, and Cost Per Qualified Lead (CPQL).',
    deliverables: [
      'Weekly qualitative sales feedback review loops',
      'Disqualification pattern analysis and form field tuning',
      'Budget re-allocation toward highest-converting ad sets',
    ],
  },
  {
    step: '06',
    icon: TrendingUp,
    title: 'Closed-Loop Sales Reporting',
    desc: 'Transparent executive reporting connecting ad spend to downstream opportunities, closed contracts, customer acquisition cost, and revenue.',
    deliverables: [
      'Cost Per Qualified Lead (CPQL) and Cost Per Opportunity reports',
      'Offline conversion feedback upload to Google and Meta',
      'Monthly strategic roadmap review and channel scaling plan',
    ],
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Lead Generation{' '}
            <span className="italic text-frame-accent">Ads Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A structured, 6-stage engineering process designed to eliminate unqualified submission waste, speed up sales response times, and scale closed pipeline.
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
                      Stage Deliverables &amp; Milestones:
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
