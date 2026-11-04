'use client'

import React from 'react'
import { Users, Target, Cpu, Globe2, FileSpreadsheet } from 'lucide-react'

const reasons = [
  {
    title: 'One In-House Team',
    icon: Users,
    body: 'You do not need separate teams for SEO strategy, content, and development coordination. Our in-house team connects these areas within one coherent ecommerce SEO strategy.',
  },
  {
    title: 'Buyer-Intent Strategy',
    icon: Target,
    body: 'We focus on the relationship between what customers search for and the pages that can satisfy their intent. That means we do not treat traffic volume as the only measure of SEO success.',
  },
  {
    title: 'Technical + Content + Development Expertise',
    icon: Cpu,
    body: 'Some ecommerce SEO problems cannot be solved with content changes alone. Complex stores may require changes to URLs, templates, filters, rendering, schema, or indexation. Our web development capabilities allow us to approach these issues from both SEO and implementation perspectives.',
  },
  {
    title: 'Bangladesh & International Ecommerce Experience',
    icon: Globe2,
    body: 'We support ecommerce businesses targeting Bangladesh and international markets. For Bangladesh stores, strategies account for local search behavior, Bangla content, and local payment and delivery expectations (e.g. bKash, Nagad, cash-on-delivery). For international stores, we adapt around country-specific search intent and international SEO requirements.',
  },
  {
    title: 'Transparent Reporting',
    icon: FileSpreadsheet,
    body: 'You should know what was changed, why it was changed, and what the data shows. Our reporting focuses on meaningful SEO and ecommerce metrics rather than vanity numbers alone.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            The Framecipher Advantage // Integrated Engineering
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Choose Framecipher{' '}
            <span className="italic text-frame-accent">for Ecommerce SEO</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Ecommerce SEO often requires more than keyword optimization. Technical implementation, content, site architecture, analytics, and development can all affect the result.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Framecipher brings these capabilities together through one in-house team.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-frame-accent border border-white/[0.06] group-hover:bg-frame-accent/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Advantage 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body}
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
