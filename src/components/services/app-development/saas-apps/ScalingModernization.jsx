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
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Lifecycle Evolution
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Scaling &amp; Product Modernization
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Growth can expose limitations that were not visible during the initial release.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {scalingModernizationItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Scale Strategy 0{i + 1}
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