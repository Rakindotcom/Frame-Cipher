const testingQaItems = [
  {
    title: "Functional Testing",
    desc: "Verify registration, authentication, dashboards, forms, workflows, billing, permissions, and core product functionality."
  },
  {
    title: "Multi-Tenant Testing",
    desc: "Test tenant isolation and access controls to confirm that one customer cannot access another customer's data."
  },
  {
    title: "Billing Testing",
    desc: "Test trials, subscriptions, upgrades, downgrades, cancellations, failed payments, invoices, webhooks, and plan-based access."
  },
  {
    title: "API Testing",
    desc: "Validate authentication, permissions, request handling, data responses, and important integration workflows."
  },
  {
    title: "Performance Testing",
    desc: "Test important workflows under representative traffic and data conditions."
  },
  {
    title: "Security Testing",
    desc: "Review authentication, authorization, tenant boundaries, sensitive operations, and security-related behavior."
  },
  {
    title: "Regression Testing",
    desc: "After major changes, affected product areas should be tested again before release."
  },
  {
    title: "User Acceptance Testing",
    desc: "Approved stakeholders can validate important business workflows before production deployment."
  }
]

export default function TestingQualityAssurance() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Systematic QA
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS Testing &amp; Quality Assurance
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          A SaaS product needs testing across customer workflows and the systems that support them.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testingQaItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              QA Protocol 0{i + 1}
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