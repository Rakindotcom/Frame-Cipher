'use client'

import React from 'react'
import {
  Activity,
  Workflow,
  CreditCard,
  Repeat,
  MessageSquare,
  Sparkles,
  Check
} from 'lucide-react'

const VALIDATION_METRICS = [
  {
    icon: Activity,
    num: '01',
    title: 'Activation & Engagement',
    desc: "Activation measures whether users reach the point where they experience the product's core value. Engagement measures whether users continue interacting with the product after initial activation.",
    bullets: [
      'Completing onboarding',
      'Creating a first project',
      'Completing a first search',
      'Uploading a first file',
      'Using a core feature',
      'Completing a first workflow',
    ],
  },
  {
    icon: Workflow,
    num: '02',
    title: 'Core Workflow Completion',
    desc: 'For many MVPs, the most important signal is whether users can and will complete the core workflow. The workflow should reflect the main assumption being tested.',
    bullets: [
      'Completing a booking',
      'Creating an order',
      'Completing a transaction',
      'Publishing a listing',
      'Generating a report',
      'Using a core SaaS feature',
    ],
  },
  {
    icon: CreditCard,
    num: '03',
    title: 'Conversion & Transactions',
    desc: 'For commercial products, conversion can provide evidence about whether users are willing to take a meaningful business action. Transaction data should be interpreted alongside acquisition and user behavior.',
    bullets: [
      'Paid subscriptions',
      'Purchases & orders',
      'Bookings & reservations',
      'Deposits',
      'Lead submissions',
      'Paid feature usage & upgrades',
    ],
  },
  {
    icon: Repeat,
    num: '04',
    title: 'Retention & Repeat Usage',
    desc: 'A product can attract initial users without becoming useful enough for repeated use. The appropriate retention period depends on how frequently the product is expected to be used.',
    bullets: [
      'Returning users',
      'Repeat transactions',
      'Subscription renewal',
      'Recurring feature usage',
      'Repeat bookings',
      'Continued account activity',
    ],
  },
  {
    icon: MessageSquare,
    num: '05',
    title: 'User Feedback & Qualitative Signals',
    desc: 'Analytics show what users do. Feedback can help explain why. The strongest validation picture often combines behavioral telemetry with direct qualitative user feedback.',
    bullets: [
      'User interviews & discovery calls',
      'Surveys & micro-polls',
      'In-app feedback forms',
      'Support requests & tickets',
      'Usability observations',
      'Feature requests & abandonment reasons',
    ],
  },
  {
    icon: Sparkles,
    num: '06',
    title: 'Synthesized Decision Signals',
    desc: 'There is no single metric that proves every MVP succeeded. We define relevant signals around the MVP original hypothesis to produce clear evidence for your next product decision.',
    bullets: [
      'Hypothesis validation confirmation',
      'Feature traction ranking',
      'Drop-off bottleneck discovery',
      'Cost per acquired active user',
      'Willingness-to-pay validation',
      'Roadmap phase-2 priority roadmap',
    ],
  },
]

export default function ValidationMeasurement() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Measure MVP Validation.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            There is no single metric that proves every MVP succeeded. The right measurement depends on the hypothesis, target users, product model, and business objective.
          </p>
        </div>

        {/* 6 Discrete Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALIDATION_METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.num}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {metric.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {metric.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {metric.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-purple-400 block mb-2.5">
                      Signal Indicators:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {metric.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
