'use client'

import React from 'react'

const dataMigration = [
  {
    title: "Data Assessment",
    desc: "Identify important tables, records, relationships, dependencies, duplicates, and data-quality issues."
  },
  {
    title: "Data Mapping",
    desc: "Map legacy fields and structures to the data model used by the new application."
  },
  {
    title: "Data Transformation",
    desc: "Convert formats, codes, values, relationships, and structures where required."
  },
  {
    title: "Data Validation",
    desc: "Compare migrated information against the source system using defined validation and reconciliation rules."
  },
  {
    title: "Incremental Migration",
    desc: "For larger environments, migrate information in controlled stages instead of relying on one high-risk migration event."
  },
  {
    title: "Migration Testing",
    desc: "Test the migration process with representative data and validate record accuracy, relationships, transformations, and reconciliation."
  },
  {
    title: "Rollback Planning",
    desc: "Define how the organization can recover if an unexpected migration problem affects production."
  },
  {
    title: "Post-Migration Validation",
    desc: "Compare records after migration to confirm accuracy, completeness, and referential integrity before the legacy system is decommissioned."
  }
]

export default function DataMigration() {
  return (
    <section id="data-migration" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Data Migration &amp; <span className="italic text-frame-accent">System Transition.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise data migration focuses on moving required information from an existing system into a new application while protecting data quality, relationships, and business continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {dataMigration.map((item, idx) => (
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
