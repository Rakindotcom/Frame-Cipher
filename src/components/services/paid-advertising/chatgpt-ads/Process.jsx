'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'Discovery & Readiness Assessment',
    body: [
      'We start by understanding the business, target market, offer, customer journey, website, conversion goal, and current advertising setup.',
      'We also review current ChatGPT Ads availability and account requirements relevant to the campaign.',
    ],
    note: 'The result is a practical readiness assessment before media spend is committed.',
  },
  {
    title: 'Account & Tracking Setup',
    body: [
      'We prepare the campaign structure and measurement foundation required for the engagement.',
    ],
    bullets: [
      'Campaign setup',
      'Ad groups',
      'Conversion events',
      'Tracking parameters',
      'OpenAI Pixel',
      'Conversions API',
      'Analytics alignment',
    ],
    note: 'Tracking is validated before we rely on the resulting data for optimization. OpenAI recommends using the Pixel, Conversions API, or both to improve conversion measurement quality where appropriate.',
  },
  {
    title: 'Campaign & Creative Development',
    body: [
      'We build the campaign around a defined business objective.',
    ],
    bullets: [
      'Campaign structure',
      'Ad groups',
      'Context hints',
      'Creative variations',
      'Landing-page alignment',
      'Conversion setup',
      'Initial testing plan',
    ],
    note: 'Each element should support the same customer need.',
  },
  {
    title: 'Launch & Data Collection',
    body: [
      'Once the campaign is ready and the account is eligible, we launch within the available platform requirements and monitor early delivery.',
      'We look for enough useful data to identify meaningful patterns.',
    ],
    note: 'Early results are treated as signals rather than final conclusions.',
  },
  {
    title: 'Optimization & Reporting',
    body: [
      'We review campaign performance and make controlled improvements. That can include refining context, adjusting budgets, testing new creative, improving conversion measurement, reviewing landing-page performance, or changing campaign structure.',
    ],
    note: 'Reporting documents what happened, what was tested, what the data suggests, and what the next optimization cycle should address.',
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Our ChatGPT Ads{' '}
            <span className="italic text-frame-accent">Management Process.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A controlled, five-phase management framework designed to move from readiness assessment to disciplined campaign scaling.
          </p>
        </div>

        {/* 5-Stage Architectural Cards Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
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
