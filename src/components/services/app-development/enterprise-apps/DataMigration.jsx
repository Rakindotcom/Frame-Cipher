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
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Data Integrity
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Data Migration
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise data migration focuses on moving required information from an existing system into a new application while protecting data quality, relationships, and business continuity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dataMigration.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Migration Step 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}