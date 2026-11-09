'use client'

import React from 'react'
import {
  Layers,
  Database,
  Zap,
  Sliders,
  ShieldCheck,
  CreditCard,
  TrendingUp,
  RefreshCw,
} from 'lucide-react'

const scalingModernizationItems = [
  {
    icon: Layers,
    title: "Architecture Refactoring",
    desc: "Improve areas of the codebase that become difficult to maintain as features and users increase."
  },
  {
    icon: Database,
    title: "Database Scaling",
    desc: "Review schema design, indexing, queries, data volume, and infrastructure as usage grows."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Identify slow workflows, expensive operations, large queries, and other bottlenecks."
  },
  {
    icon: Sliders,
    title: "New Integrations",
    desc: "Add payment, communication, CRM, analytics, storage, or other integrations as the product expands."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Features",
    desc: "Add advanced permissions, SSO, reporting, audit logs, account controls, and integrations where required."
  },
  {
    icon: CreditCard,
    title: "Billing Expansion",
    desc: "Move from simple plans toward tiered, seat-based, usage-based, or more advanced billing models as the business evolves."
  },
  {
    icon: TrendingUp,
    title: "Product Analytics",
    desc: "Expand event tracking and reporting as the product needs more visibility into activation, retention, usage, and customer behavior."
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    desc: "Review older frameworks, dependencies, architecture, and infrastructure before they become larger maintenance problems."
  }
]

export default function ScalingModernization() {
  return (
    <section id="modernization" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Scaling &amp; Product Modernization.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Growth can expose limitations that were not visible during the initial release.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scalingModernizationItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
