'use client'

import React from 'react'

const modernizationMigration = [
  {
    title: "Legacy System Assessment",
    desc: "Review existing code, databases, integrations, technical debt, business rules, and operational dependencies before selecting a modernization path."
  },
  {
    title: "Monolith Re-Architecture",
    desc: "Break large, difficult-to-maintain systems into more manageable modules or services when the project justifies it."
  },
  {
    title: "Database Modernization",
    desc: "Improve schema structure, queries, indexing, storage, and data-access patterns while protecting important business information."
  },
  {
    title: "Cloud Migration",
    desc: "Move suitable workloads from on-premises or outdated infrastructure toward an appropriate cloud environment."
  },
  {
    title: "API Layer for Legacy Systems",
    desc: "Create controlled APIs that allow newer applications to communicate with legacy systems without exposing unnecessary internal implementation details."
  },
  {
    title: "UI/UX Modernization",
    desc: "Replace outdated interfaces while preserving business logic and workflows that the organization still relies on."
  },
  {
    title: "Data Migration",
    desc: "Move required information into the new platform with validation, reconciliation, and controlled migration stages."
  },
  {
    title: "Phased Migration",
    desc: "Modernize selected components first instead of forcing the organization through one disruptive transition."
  },
  {
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
            Legacy Modernization &amp; <span className="italic text-frame-accent">Application Migration.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Replacing a legacy system does not always mean rebuilding everything from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {modernizationMigration.map((item, idx) => (
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
