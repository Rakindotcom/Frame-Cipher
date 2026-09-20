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
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Application Modernization
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Legacy Application Modernization &amp; Migration
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Replacing a legacy system does not always mean rebuilding everything from scratch.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modernizationMigration.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Modernization Strategy 0{i + 1}
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