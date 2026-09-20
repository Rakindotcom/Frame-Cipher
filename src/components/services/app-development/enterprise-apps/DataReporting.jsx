const dataReporting = [
  {
    title: "Centralized Business Data",
    desc: "Organize relevant business information within a structured application while maintaining appropriate access and ownership boundaries."
  },
  {
    title: "Data Modeling",
    desc: "Define relationships between customers, employees, products, transactions, departments, locations, and other important business entities."
  },
  {
    title: "Data Validation",
    desc: "Use business rules and validation controls to reduce incomplete, inconsistent, or incorrect records."
  },
  {
    title: "Data Governance",
    desc: "Define appropriate ownership, access, retention, and handling rules for important business information."
  },
  {
    title: "Operational Dashboards",
    desc: "Give teams visibility into the metrics, tasks, alerts, and information required for daily operations."
  },
  {
    title: "Management Reporting",
    desc: "Build reports around financial activity, operational performance, organizational KPIs, and other management requirements."
  },
  {
    title: "Data Exports",
    desc: "Provide controlled export functionality for approved reporting, analysis, audit, or operational purposes."
  },
  {
    title: "Audit Reporting",
    desc: "Support traceability for important changes, approvals, transactions, and administrative activity."
  },
  {
    title: "Business Intelligence Integration",
    desc: "Connect suitable BI and analytics platforms when an organization requires more advanced reporting or analysis."
  }
]

export default function DataReporting() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Data Layer &amp; BI
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Data Management &amp; Reporting
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Enterprise applications often become a central operational layer for information used across departments and connected systems. We structure data around business entities, workflows, permissions, validation, reporting, and operational requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dataReporting.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Data Capability 0{i + 1}
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