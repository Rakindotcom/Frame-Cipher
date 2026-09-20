const engagementModels = [
  {
    title: "Custom Enterprise Project",
    desc: "A complete engagement for designing and building a new enterprise application around a defined business requirement."
  },
  {
    title: "Legacy Modernization",
    desc: "Modernize an existing application while preserving the business capabilities and data the organization still depends on."
  },
  {
    title: "Dedicated Development Team",
    desc: "Provide ongoing development capacity for organizations with a larger internal product roadmap or continuous application requirements."
  },
  {
    title: "Feature & Enhancement Development",
    desc: "Extend an existing enterprise platform with new workflows, modules, integrations, reports, or other functionality."
  },
  {
    title: "Integration Projects",
    desc: "Connect existing enterprise systems through APIs, middleware, synchronization, or other suitable integration methods."
  },
  {
    title: "Long-Term Development & Support",
    desc: "Continue developing and maintaining an enterprise application as business requirements, integrations, and operational needs evolve."
  }
]

export default function EngagementModels() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Engagement Structures
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Development Engagement Models
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Different organizations require different delivery structures depending on their existing systems, internal teams, project scope, and long-term roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {engagementModels.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Model 0{i + 1}
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