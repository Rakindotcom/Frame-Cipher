'use client'

import React from 'react'
import {
  Search,
  Boxes,
  Database,
  Cloud,
  Code2,
  Layout,
  Layers,
  GitBranch,
  ShieldCheck,
} from 'lucide-react'

const modernizationMigration = [
  {
    icon: Search,
    title: "Legacy System Assessment",
    desc: "Review existing code, databases, integrations, technical debt, business rules, and operational dependencies before selecting a modernization path."
  },
  {
    icon: Boxes,
    title: "Monolith Re-Architecture",
    desc: "Break large, difficult-to-maintain systems into more manageable modules or services when the project justifies it."
  },
  {
    icon: Database,
    title: "Database Modernization",
    desc: "Improve schema structure, queries, indexing, storage, and data-access patterns while protecting important business information."
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Move suitable workloads from on-premises or outdated infrastructure toward an appropriate cloud environment."
  },
  {
    icon: Code2,
    title: "API Layer for Legacy Systems",
    desc: "Create controlled APIs that allow newer applications to communicate with legacy systems without exposing unnecessary internal implementation details."
  },
  {
    icon: Layout,
    title: "UI/UX Modernization",
    desc: "Replace outdated interfaces while preserving business logic and workflows that the organization still relies on."
  },
  {
    icon: Layers,
    title: "Data Migration",
    desc: "Move required information into the new platform with validation, reconciliation, and controlled migration stages."
  },
  {
    icon: GitBranch,
    title: "Phased Migration",
    desc: "Modernize selected components first instead of forcing the organization through one disruptive transition."
  },
  {
    icon: ShieldCheck,
    title: "Minimal-Disruption Rollout",
    desc: "Plan migration and release stages around business continuity so essential operations remain available during the transition."
  }
]

export default function ModernizationMigration() {
  return (
    <section id="modernization" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Legacy Modernization &amp; Application Migration.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Replacing a legacy system does not always mean rebuilding everything from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modernizationMigration.map((item, idx) => {
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
