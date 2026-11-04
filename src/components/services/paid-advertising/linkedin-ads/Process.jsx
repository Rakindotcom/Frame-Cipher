'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'ICP, Sales Process & Goal Definition',
    body: [
      'We begin with the customer you want to acquire, how they buy, who influences the decision, and what your sales team considers a qualified opportunity.',
      'For existing accounts, we review campaign history, targeting, conversion data, creative, spend, and lead quality before recommending major changes.',
    ],
  },
  {
    title: 'Audience, Account & Buying Committee Research',
    body: [
      'We map the target industries, companies, job functions, seniority, locations, buying-committee roles, target-account lists, existing customer data, and retargeting audiences.',
    ],
    note: 'Where appropriate, we evaluate Matched Audiences, Auto-Targeting, Buyer Groups, Predictive Audiences, and other available targeting capabilities.',
  },
  {
    title: 'Campaign & Creative Planning',
    body: [
      'We define the campaign objective, audience, format, offer, creative direction, conversion path, and budget around the sales stage being targeted.',
    ],
    note: 'A cold audience may need educational content or industry insight. A warmer audience may be ready for a case study, demo, consultation, or product-specific offer.',
  },
  {
    title: 'Tracking & CRM Setup',
    body: [
      'We configure or validate the tracking systems that connect advertising to business outcomes.',
    ],
    bullets: [
      'Insight Tag',
      'Conversion tracking',
      'Conversions API',
      'Lead Gen Forms',
      'CRM connections',
      'UTM parameters',
      'Qualified-lead events',
      'Conversion definitions',
    ],
    note: 'Where supported, the goal is to create a measurement loop between advertising activity and sales outcomes.',
  },
  {
    title: 'Launch & Initial Learning',
    body: [
      'After launch, we monitor delivery, audience size, engagement, conversions, lead quality, and budget utilization.',
    ],
    note: 'We avoid making frequent structural changes before sufficient data is available to support a decision.',
  },
  {
    title: 'Testing & Lead Quality Optimization',
    body: [
      'We test meaningful variables across the campaign.',
    ],
    bullets: [
      'Audience segments',
      'Offers',
      'Creative angles',
      'Ad formats',
      'CTAs',
      'Form structure',
      'Landing pages',
      'Retargeting approaches',
    ],
    note: 'Where qualified-lead or CRM data is available, we use it to understand whether campaigns are producing prospects that actually fit the sales pipeline.',
  },
  {
    title: 'Reporting, Sales Feedback & Scaling',
    body: [
      'Reporting is connected to what the sales team can use. We review lead quality and sales feedback alongside campaign performance, then identify opportunities to scale qualified audiences, expand target accounts, improve creative, strengthen retargeting, enter new markets, improve measurement, and reallocate budget.',
    ],
    note: 'Scaling follows evidence rather than raw lead volume.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            How We Manage{' '}
            <span className="italic text-frame-accent">LinkedIn Ads.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Campaigns are built, launched, measured, and scaled through a structured process so decisions are driven by evidence rather than assumptions.
          </p>
        </div>

        {/* 7-Stage Architectural Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {step.title}
                </h3>

                <div className="space-y-2 text-sm font-normal leading-relaxed text-zinc-300">
                  {step.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {step.bullets?.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.04] pt-3">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {step.note && (
                <div className="mt-5 border-l-2 border-frame-accent bg-frame-accent/10 p-3.5 rounded-r-lg text-xs leading-relaxed text-zinc-400">
                  {step.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
