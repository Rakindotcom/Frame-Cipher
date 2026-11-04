'use client'

import React from 'react'
import { ShieldCheck, CheckCircle2, Users, Target, BarChart2, Globe, Lock } from 'lucide-react'

const advantages = [
  {
    title: 'One In-House Team',
    icon: Users,
    body: 'LinkedIn Ads does not operate separately from creative, content, landing pages, websites, analytics, or conversion systems. Framecipher brings these capabilities together through one in-house team, making it easier to identify and fix problems outside the ad account itself.',
  },
  {
    title: 'ICP Before Campaign Setup',
    icon: Target,
    body: 'We start with who the business needs to reach and how those people participate in the buying process before selecting targeting options. That connects advertising strategy with the actual sales strategy.',
  },
  {
    title: 'Lead Quality Over Vanity Metrics',
    icon: BarChart2,
    body: 'We do not treat impressions, clicks, or raw form submissions as the final business outcome. Where reliable data is available, we look at qualified leads, opportunities, pipeline contribution, and downstream results.',
  },
  {
    title: 'Bangladesh & Global B2B Experience',
    icon: Globe,
    body: 'Framecipher is based in Bangladesh and supports businesses targeting both local and international B2B markets. Campaign strategy can be adapted to different industries, target-account structures, countries, audience sizes, and sales cycles.',
  },
  {
    title: 'Transparent Account Ownership',
    icon: Lock,
    body: 'Your LinkedIn Campaign Manager account remains under your control. You retain access to campaign history, advertising data, audiences, spend information, and performance reporting throughout the engagement.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Why Businesses Choose Framecipher{' '}
            <span className="italic text-frame-accent">for LinkedIn Ads.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            ICP definition, professional audience targeting, creative, and CRM measurement working together under one in-house team.
          </p>
        </div>

        {/* 5-Column / Responsive Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Standard 0{index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}

          {/* Account Access Guarantee Box */}
          <div className="relative flex flex-col justify-between rounded-xl border border-frame-accent/40 bg-frame-accent/10 p-6 sm:p-8 space-y-4">
            <div className="space-y-3">
              <h3 className="font-heading text-xl font-medium text-white">
                Full Ownership, Always
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">
                Campaign history, advertising data, audiences, and spend information stay under your direct ownership throughout the engagement.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-frame-accent pt-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Sovereign Account Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
