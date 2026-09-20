const migrationModernization = [
  {
    title: "Native Android to Cross-Platform",
    desc: "Existing Android applications can be evaluated for migration when a shared Android and iOS architecture better supports the future roadmap."
  },
  {
    title: "Native iOS to Cross-Platform",
    desc: "Existing iOS products can be assessed for shared-code development while retaining native implementation for features that need it."
  },
  {
    title: "React Native Migration",
    desc: "Older React Native applications can be reviewed for dependency updates, architecture improvements, performance work, and framework modernization."
  },
  {
    title: "Flutter Modernization",
    desc: "Existing Flutter applications can be reviewed for outdated packages, maintainability, architecture issues, and performance concerns."
  },
  {
    title: "Legacy Dependency Review",
    desc: "We identify outdated libraries, unstable integrations, technical debt, and dependencies that may create future compatibility problems."
  },
  {
    title: "Feature & Data Migration",
    desc: "Existing business logic, APIs, user accounts, workflows, and data requirements can be mapped into the new architecture according to the migration scope."
  }
]

export default function MigrationModernization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Codebase Evolution
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Cross-Platform App Migration &amp; Modernization
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Already have an application? We can review the existing product before deciding whether migration or modernization is the right move.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {migrationModernization.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Modernization 0{i + 1}
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