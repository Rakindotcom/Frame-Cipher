'use client'

import React from 'react'
import { Users, Target, BrainCircuit, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    title: 'One In-House Paid Media & SEO Team',
    icon: Users,
    body: [
      'ChatGPT advertising may require paid media expertise, while broader AI visibility requires SEO, content, technical, and entity work.',
      'Framecipher keeps these capabilities under one in-house team. That makes it easier to connect campaign strategy, landing pages, tracking, content, SEO, AEO, and GEO without splitting the work between unrelated providers.',
    ],
  },
  {
    title: 'Conversion-Focused Campaign Management',
    icon: Target,
    body: [
      'We do not treat impressions or clicks as the final business objective. Campaigns are structured around what matters to the business.',
      'That may be qualified leads, purchases, registrations, enquiries, or another supported conversion event. The measurement setup follows the business objective rather than the other way around.',
    ],
  },
  {
    title: 'AI Search & Paid Advertising Expertise',
    icon: BrainCircuit,
    body: [
      'ChatGPT Ads operate within a conversational environment where context and intent matter.',
      'Our broader AI search work gives us experience with how brands and information are structured for AI systems, while our paid media work provides the campaign, creative, tracking, testing, and optimization discipline required for advertising. We treat those capabilities as complementary, not interchangeable.',
    ],
  },
  {
    title: 'Transparent Testing & Reporting',
    icon: ShieldCheck,
    body: [
      'ChatGPT Ads are a relatively new advertising channel. That means responsible campaign management matters.',
      'We separate confirmed platform capabilities from assumptions, distinguish platform data from our interpretation, and explain what the available evidence actually supports. We do not promise a fixed ROAS, CPC, conversion rate, or revenue outcome before the campaign produces enough data to support such conclusions.',
    ],
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Why Choose Framecipher{' '}
            <span className="italic text-frame-accent">for ChatGPT Ads.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Proven paid media discipline combined with practical AI search optimization experience under one unified team.
          </p>
        </div>

        {/* 4-Column / Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Advantage 0{index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
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
