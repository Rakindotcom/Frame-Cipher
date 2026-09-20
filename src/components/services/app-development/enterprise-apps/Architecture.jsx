const enterpriseArchitecture = [
  {
    title: "Modular Architecture",
    desc: "Separate business capabilities into manageable modules so individual areas can evolve without making every change risky."
  },
  {
    title: "Monolith vs Microservices",
    desc: "A well-structured modular application can be appropriate for many enterprise environments. Microservices can be useful when independent deployment, team ownership, scale, or service boundaries justify the added complexity."
  },
  {
    title: "API-First Architecture",
    desc: "APIs provide controlled interfaces between web applications, mobile applications, internal platforms, and third-party services."
  },
  {
    title: "Event-Driven Architecture",
    desc: "For suitable systems, events can connect asynchronous workflows and services without forcing every process into a single synchronous transaction."
  },
  {
    title: "Service-to-Service Communication",
    desc: "Connected services need defined interfaces, authentication, data contracts, error handling, and monitoring."
  },
  {
    title: "Data Architecture",
    desc: "We map important business entities, relationships, transactions, permissions, and reporting requirements."
  },
  {
    title: "High Availability",
    desc: "Where availability is critical, architecture can include redundancy, health checks, recovery planning, and appropriate failover strategies."
  },
  {
    title: "Fault Tolerance",
    desc: "Important workflows can be designed to handle selected service failures without bringing down the entire application."
  }
]

export default function Architecture() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          System Engineering
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Application Architecture
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise architecture should provide structure, reliability, and flexibility without creating unnecessary complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {enterpriseArchitecture.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Pillar 0{i + 1}
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