'use client'

import React from 'react'
import {
  Users2,
  Workflow,
  Globe,
  FileCheck,
} from 'lucide-react'

const reasons = [
  {
    icon: Users2,
    title: 'One In-House Team',
    desc: 'Your local SEO strategy stays with one integrated team instead of passing between disconnected freelancers. We unify technical web development, copywriting, citation building, and GBP management under one roof.',
  },
  {
    icon: Workflow,
    title: 'Connected Local Strategy',
    desc: 'We never treat your Google Business Profile, website, local citations, and customer reviews as siloed tasks. Every signal is harmonized to build an airtight local customer journey from Map discovery to booking.',
  },
  {
    icon: Globe,
    title: 'Bangladesh & International Experience',
    desc: 'Based in Dhaka, we manage campaigns across major Bangladeshi urban centers as well as competitive multi-location international markets across the US, UK, Australia, Canada, and UAE.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    desc: 'You receive clear, actionable reporting focused on real metrics that matter: geo-grid ranking movements, phone calls, direction requests, and verified customer inquiries, free of vanity metrics.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              The Framecipher Standard
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Local SEO</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local SEO works best when every layer of your digital presence works in unison. We deliver integrated local dominance designed to outlast algorithmic volatility.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      Standard 0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
