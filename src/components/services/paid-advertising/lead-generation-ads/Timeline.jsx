'use client'

import React from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    phase: 'Week 1',
    title: 'Discovery, Offer & CRM Audit',
    desc: 'Deep discovery into your ideal customer profile, qualification criteria, sales follow-up velocity, and existing CRM tech stack.',
    items: [
      'Ideal customer profile (ICP) & qualification criteria review',
      'High-intent commercial offer & lead hook planning',
      'Multi-channel platform strategy and budget allocation',
      'CRM integration & sales notification workflow audit',
      'Tracking pixel and server-side CAPI diagnostic',
    ],
  },
  {
    phase: 'Week 1–2',
    title: 'Funnel Build, Integration & QA',
    desc: 'Constructing landing pages or native forms, embedding qualification questions, wiring real-time CRM webhooks, and client review.',
    items: [
      'Native in-app lead forms or landing page destination build',
      'CRM field mapping & automated round-robin lead routing',
      'Instant SMS/Slack/email alerts configured for sales reps',
      'End-to-end test lead submission and data payload validation',
      'Client review, sign-off, and controlled campaign rollout',
    ],
  },
  {
    phase: 'Days 15–30',
    title: 'Initial Leads & Quality Calibration',
    desc: 'Reviewing early lead quality with your sales team, analyzing contact rates, and adjusting qualification fields or negative keywords.',
    items: [
      'Early lead volume & contact rate velocity benchmarking',
      'Sales rep feedback loop on lead qualification readiness',
      'Form qualification field adjustment to filter low-intent submissions',
      'Negative keyword and audience exclusion refinement',
    ],
  },
  {
    phase: 'Month 2+',
    title: 'Downstream Feedback & Scaling',
    desc: 'Uploading offline sales conversion milestones back to Google and Meta, optimizing for pipeline revenue, and scaling winning channels.',
    items: [
      'Offline conversion upload (Enhanced Conversions for Leads)',
      'Cost Per Qualified Lead (CPQL) and Cost Per Opportunity analysis',
      'A/B testing of fresh offers, headlines, and landing page angles',
      'Scaling ad budgets toward highest-closing campaign cohorts',
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
            <span className="italic text-frame-accent">Lead Gen Setup Take?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Initial setup, CRM integration, and campaign launch typically complete within 7 to 14 business days, followed by systematic weekly sales feedback loops.
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
