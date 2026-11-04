'use client'

import React from 'react'
import {
  Activity,
  Workflow,
  CreditCard,
  Repeat,
  MessageSquare,
  Sparkles,
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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            How We Measure{' '}
            <span className="italic text-frame-accent">MVP Validation.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            There is no single metric that proves every MVP succeeded. The right measurement depends on the hypothesis, target users, product model, and business objective.
          </p>
        </div>

        {/* Blueprint Matrix (Modality 3: 6 Seamless Grid Cells) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08] bg-[#121214]/40">
          {VALIDATION_METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.num}
                className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 transition-colors duration-300 hover:bg-[#161619]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-frame-accent group-hover:border-frame-accent/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      {metric.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {metric.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {metric.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-3">
                      Signal Indicators
                    </span>
                    {metric.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" />
                        <span>{bullet}</span>
                      </div>
                    ))}
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

