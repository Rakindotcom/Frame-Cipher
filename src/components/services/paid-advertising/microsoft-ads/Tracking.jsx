'use client'

import React from 'react'
import { Activity, Target, LineChart, ShieldCheck, CheckCircle2 } from 'lucide-react'

const trackingComponents = [
  {
    icon: Activity,
    title: 'Universal Event Tracking (UET)',
    desc: 'The technical foundation of Microsoft Advertising. We deploy and validate UET tags to collect real-time website interaction data, dynamic revenue values, and user behavior.',
  },
  {
    icon: Target,
    title: 'Granular Conversion Goals',
    desc: 'Configuring precise conversion goals aligned with real business value—purchases, multi-step lead forms, phone calls, demo bookings, and high-intent resource downloads.',
  },
  {
    icon: LineChart,
    title: 'GA4 & UTM Attribution',
    desc: 'Enforcing uniform UTM parameter taxonomy so Microsoft Ads sessions, assisted conversions, and bounce rates can be analyzed transparently inside Google Analytics 4.',
  },
  {
    icon: ShieldCheck,
    title: 'CRM Offline Conversion Import',
    desc: 'Connecting lead generation campaigns with CRM pipeline milestones to evaluate cost per qualified lead (SQL) and closed revenue rather than shallow form fills.',
  },
]

export default function Tracking() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Tracking Microsoft Ads From{' '}
            <span className="italic text-frame-accent">Click to Conversion.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Reliable tracking is essential for optimizing Microsoft Advertising campaigns against real business outcomes, cash flow, and client acquisition economics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {trackingComponents.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 rounded-lg border border-white/[0.06] bg-[#121214] p-4 text-xs font-mono text-zinc-400 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0" />
          <span>We audit and test all UET tags and enhanced conversion parameters prior to campaign launch to protect bidding algorithm integrity.</span>
        </div>
      </div>
    </section>
  )
}
