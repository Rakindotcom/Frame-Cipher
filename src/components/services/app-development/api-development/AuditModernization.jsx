const auditModernization = [
  {
    title: "Existing API Assessment",
    desc: "We review the current architecture, endpoints, integrations, documentation, and known operational issues."
  },
  {
    title: "API Security Review",
    desc: "We assess authentication, authorization, exposed data, access controls, and other relevant security areas within the agreed scope."
  },
  {
    title: "API Performance Audit",
    desc: "We identify slow endpoints, inefficient queries, excessive requests, and other performance bottlenecks."
  },
  {
    title: "API Refactoring",
    desc: "Existing API code can become difficult to maintain as a product grows. We can refactor suitable parts while preserving required functionality."
  },
  {
    title: "Legacy API Modernization",
    desc: "Older APIs may need improved documentation, security, architecture, or integration patterns. We can modernize legacy API components where the existing system and available interfaces allow it."
  },
  {
    title: "Versioning & Deprecation Planning",
    desc: "If an existing API has multiple consumers, changes need careful planning. We can help structure versioning and deprecation so consumers have a clear migration path."
  },
  {
    title: "Integration Troubleshooting",
    desc: "If an integration already exists but does not behave reliably, we can investigate the data flow and identify the failure point."
  },
  {
    title: "CI/CD Automated Contract Testing",
    desc: "Integrate automated contract verification and schema diffing into continuous deployment pipelines so breaking API changes never reach production systems."
  }
]

export default function AuditModernization() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Refactoring &amp; Upgrade
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Audit, Optimization &amp; Modernization
        </h2>
        <div className="mt-3 max-w-3xl space-y-1 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          <p>You do not always need a new API. Sometimes the existing API is the problem.</p>
          <p>We can review an existing API and identify areas that need improvement.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {auditModernization.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Audit Area 0{i + 1}
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