const devOpsManagement = [
  {
    title: "Development Environments",
    desc: "Maintain suitable development, staging, and production environments to reduce deployment risk."
  },
  {
    title: "CI/CD",
    desc: "Automate appropriate build, testing, and deployment steps for more consistent releases."
  },
  {
    title: "Automated Builds",
    desc: "Generate predictable application builds and deployment artifacts through controlled processes."
  },
  {
    title: "Infrastructure as Code",
    desc: "Where appropriate, manage infrastructure configuration through version-controlled definitions rather than repeated manual changes."
  },
  {
    title: "Database Migrations",
    desc: "Apply schema changes through tested migration processes with appropriate rollback planning."
  },
  {
    title: "Release Controls",
    desc: "Use approval and release procedures suited to the organization's risk and governance requirements."
  },
  {
    title: "Rollback Planning",
    desc: "Maintain a practical recovery path when a deployment creates unexpected production issues."
  },
  {
    title: "Post-Deployment Monitoring",
    desc: "Monitor production behavior after releases to identify errors, performance changes, and integration issues early."
  }
]

export default function DevopsManagement() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Release Governance
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise DevOps &amp; Release Management
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise releases need controlled processes, not manual deployment alone.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {devOpsManagement.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              DevOps Practice 0{i + 1}
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