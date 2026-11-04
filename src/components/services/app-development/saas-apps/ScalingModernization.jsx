'use client'

import React from 'react'

const scalingModernizationItems = [
  {
    title: "Architecture Refactoring",
    desc: "Improve areas of the codebase that become difficult to maintain as features and users increase."
  },
  {
    title: "Database Scaling",
    desc: "Review schema design, indexing, queries, data volume, and infrastructure as usage grows."
  },
  {
    title: "Performance Optimization",
    desc: "Identify slow workflows, expensive operations, large queries, and other bottlenecks."
  },
  {
    title: "New Integrations",
    desc: "Add payment, communication, CRM, analytics, storage, or other integrations as the product expands."
  },
  {
    title: "Enterprise Features",
    desc: "Add advanced permissions, SSO, reporting, audit logs, account controls, and integrations where required."
  },
  {
    title: "Billing Expansion",
    desc: "Move from simple plans toward tiered, seat-based, usage-based, or more advanced billing models as the business evolves."
  },
  {
    title: "Product Analytics",
    desc: "Expand event tracking and reporting as the product needs more visibility into activation, retention, usage, and customer behavior."
  },
  {
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
            SaaS Scaling &amp;{' '}
            <span className="italic text-frame-accent">Product Modernization.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Growth can expose limitations that were not visible during the initial release.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {scalingModernizationItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title || item.category || item.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
