'use client'

import React from 'react'

const supportTiers = [
  {
    tier: 'Standard Requests',
    description: 'Routine content updates, small changes, maintenance tasks, and non-critical issues are handled according to the plan\'s normal support process.',
  },
  {
    tier: 'Priority Issues',
    description: 'Problems affecting important website functionality, forms, integrations, or customer experiences receive higher priority where the selected plan provides it.',
  },
  {
    tier: 'Critical Incidents',
    description: 'Major downtime, critical checkout failures, serious security incidents, or other business-critical problems are handled through the emergency response process available under the applicable plan.',
  },
]

export default function SupportPriority() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Support Priority &amp;{' '}
            <span className="italic text-frame-accent">Response Times.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every website has the same urgency. A portfolio website can tolerate a different response window than an ecommerce store that processes orders every day. We therefore define support priority according to the maintenance plan and the business importance of the website.
          </p>
        </div>

        {/* 3 Support Tiers Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {supportTiers.map((tier, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.14]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {tier.tier}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Agreement Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-xs sm:text-sm font-normal text-zinc-400 italic">
            Your maintenance agreement should state the actual response targets, support hours, emergency availability, and escalation process before the service begins.
          </p>
        </div>
      </div>
    </section>
  )
}
