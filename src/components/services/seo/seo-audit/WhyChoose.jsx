'use client'

import React from 'react'
import { UserCheck, Users, Unlock, Globe2 } from 'lucide-react'

const reasons = [
  {
    title: 'Human Analysis, Not Automated Exports',
    icon: UserCheck,
    body: 'SEO tools are useful for collecting data. They cannot understand your entire business context or automatically determine which technical warnings matter most. Framecipher combines automated analysis with manual review so important findings are interpreted before they become recommendations.',
  },
  {
    title: 'One In-House SEO + Content + Development Team',
    icon: Users,
    body: 'Many SEO findings require more than an SEO specialist. A technical issue may need development. A content problem may require rewriting. An architecture problem may involve both SEO and development. Framecipher brings SEO, content, and development into one workflow so recommendations remain aligned with implementation.',
  },
  {
    title: 'Standalone Audit With No Lock-In',
    icon: Unlock,
    body: 'You do not need to commit to an ongoing SEO contract to use the audit. We provide the audit as a standalone deliverable that your internal team or another implementation partner can use. You can also continue with Framecipher when you need help executing the roadmap.',
  },
  {
    title: 'Bangladesh & International Experience',
    icon: Globe2,
    body: 'Framecipher is based in Dhaka and works with businesses in Bangladesh and international markets. We audit websites targeting local customers, multiple countries, multilingual audiences, ecommerce buyers, B2B decision-makers, and global search audiences. The scope is adapted to your market rather than a generic checklist.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            The Framecipher Advantage // Diagnostic Rigor
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Choose Framecipher{' '}
            <span className="italic text-frame-accent">for SEO Audits</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Many SEO findings require more than an automated crawler export. Framecipher combines deep technical engineering, editorial judgment, and empirical data.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
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

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
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
