'use client'

import React from 'react'
import {
  Search,
  GitMerge,
  FileCode2,
  CheckCheck,
  Layers,
  CheckSquare,
  RotateCcw,
  ShieldCheck
} from 'lucide-react'

const dataMigration = [
  {
    icon: Search,
    title: "Data Assessment",
    desc: "Identify important tables, records, relationships, dependencies, duplicates, and data-quality issues."
  },
  {
    icon: GitMerge,
    title: "Data Mapping",
    desc: "Map legacy fields and structures to the data model used by the new application."
  },
  {
    icon: FileCode2,
    title: "Data Transformation",
    desc: "Convert formats, codes, values, relationships, and structures where required."
  },
  {
    icon: CheckCheck,
    title: "Data Validation",
    desc: "Compare migrated information against the source system using defined validation and reconciliation rules."
  },
  {
    icon: Layers,
    title: "Incremental Migration",
    desc: "For larger environments, migrate information in controlled stages instead of relying on one high-risk migration event."
  },
  {
    icon: CheckSquare,
    title: "Migration Testing",
    desc: "Test the migration process with representative data and validate record accuracy, relationships, transformations, and reconciliation."
  },
  {
    icon: RotateCcw,
    title: "Rollback Planning",
    desc: "Define how the organization can recover if an unexpected migration problem affects production."
  },
  {
    icon: ShieldCheck,
    title: "Post-Migration Validation",
    desc: "Compare records after migration to confirm accuracy, completeness, and referential integrity before the legacy system is decommissioned."
  }
]

export default function DataMigration() {
  return (
    <section id="data-migration" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Data Migration &amp; System Transition.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise data migration focuses on moving required information from an existing system into a new application while protecting data quality, relationships, and business continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dataMigration.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
