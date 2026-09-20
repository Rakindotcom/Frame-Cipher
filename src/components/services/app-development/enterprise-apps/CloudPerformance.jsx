const cloudPerformance = [
  {
    title: "Cloud Architecture",
    desc: "Design cloud infrastructure around users, workloads, integrations, data, availability, and expected growth."
  },
  {
    title: "Load Balancing",
    desc: "Distribute application traffic across appropriate instances when the workload requires it."
  },
  {
    title: "Auto Scaling",
    desc: "Where supported and appropriate, resources can adjust around changing demand."
  },
  {
    title: "Database Performance",
    desc: "Review queries, indexing, connections, storage, and workloads to reduce avoidable bottlenecks."
  },
  {
    title: "Caching",
    desc: "Cache suitable frequently accessed information to reduce repeated processing and database load."
  },
  {
    title: "High Availability",
    desc: "Critical systems can use redundancy, health checks, failover planning, and monitored services where required."
  },
  {
    title: "Disaster Recovery",
    desc: "Define backup, restoration, recovery priorities, and operational procedures for important systems."
  },
  {
    title: "Monitoring & Observability",
    desc: "Monitor logs, errors, performance signals, infrastructure health, and important operational events."
  },
  {
    title: "Capacity Planning",
    desc: "Plan future infrastructure needs around users, transactions, data volume, locations, and expected business growth."
  }
]

export default function CloudPerformance() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Reliability Engineering
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Cloud, Performance &amp; High Availability
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise infrastructure should match the application&apos;s workload and operational risk.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cloudPerformance.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Infra Pillar 0{i + 1}
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