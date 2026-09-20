const testingQa = [
  {
    title: "Functional Testing",
    desc: "Verify workflows, forms, permissions, business rules, dashboards, and core application functionality."
  },
  {
    title: "Integration Testing",
    desc: "Test communication between the application, ERP, CRM, HRMS, databases, APIs, and third-party services."
  },
  {
    title: "API Testing",
    desc: "Validate authentication, requests, responses, permissions, error handling, and important API endpoints."
  },
  {
    title: "Security Testing",
    desc: "Review authentication, authorization, permissions, sensitive operations, and security-related application behavior."
  },
  {
    title: "Performance Testing",
    desc: "Test important workflows under representative user, transaction, and data conditions."
  },
  {
    title: "Load & Stress Testing",
    desc: "Evaluate system behavior as concurrent users, transactions, and processing workloads increase."
  },
  {
    title: "User Acceptance Testing",
    desc: "Allow approved stakeholders to validate important business workflows before production rollout."
  },
  {
    title: "Regression Testing",
    desc: "Retest affected functionality after major changes, integrations, or fixes."
  },
  {
    title: "Cross-System Testing",
    desc: "Validate workflows that move data across multiple enterprise platforms."
  },
  {
    title: "Disaster Recovery Testing",
    desc: "For systems with defined recovery requirements, test restoration and recovery procedures instead of assuming they will work as expected."
  },
  {
    title: "Data Migration Testing",
    desc: "Validate the accuracy and completeness of migrated data through comparison, reconciliation, and record-level checks."
  },
  {
    title: "End-to-End Testing",
    desc: "Trace complete business workflows across multiple systems to confirm that the full process works correctly under representative conditions."
  }
]

export default function TestingQa() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Quality Assurance
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Testing &amp; Quality Assurance
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise testing needs to validate both the application and the systems connected to it. We test important business workflows, integrations, permissions, data handling, and technical behavior according to project requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {testingQa.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Test Discipline {i + 1 < 10 ? `0${i + 1}` : i + 1}
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