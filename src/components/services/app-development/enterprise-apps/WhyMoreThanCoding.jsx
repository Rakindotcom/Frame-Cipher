const whyMoreThanCoding = [
  {
    title: "Complex Business Workflows",
    desc: "Enterprise processes can involve several roles, departments, approvals, conditions, and handoffs. The application must reflect those relationships accurately."
  },
  {
    title: "Existing System Dependencies",
    desc: "Your new system may need to work with platforms that already support critical business operations. Replacing everything at once is not always practical."
  },
  {
    title: "Security & Governance",
    desc: "Enterprise systems may handle sensitive business, employee, customer, or financial information. Access, security, and auditability need to be considered from the beginning."
  },
  {
    title: "Data & Integration Complexity",
    desc: "Important information may exist across multiple systems. The application needs reliable ways to exchange and synchronize data without creating unnecessary manual work."
  },
  {
    title: "User Adoption",
    desc: "A technically functional system can still create problems when its workflows do not match how employees actually work."
  },
  {
    title: "Long-Term Reliability",
    desc: "Enterprise software may remain in use for years. Architecture, infrastructure, documentation, monitoring, and maintenance therefore need to be considered from the first release."
  }
]

export default function WhyMoreThanCoding() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Organizational Reality
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Why Enterprise App Development Requires More Than Coding
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise applications sit inside an organization that already has people, processes, systems, policies, and dependencies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyMoreThanCoding.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Factor 0{i + 1}
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