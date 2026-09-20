const deliverablesList = [
  {
    title: "Business & Technical Planning",
    desc: "Requirements documentation, workflow analysis, system architecture, integration planning, and project roadmap."
  },
  {
    title: "Enterprise UI/UX",
    desc: "User flows, role-based interfaces, dashboards, prototypes, responsive layouts, and approved design assets."
  },
  {
    title: "Enterprise Application",
    desc: "The agreed web, mobile, or connected enterprise application built around the approved requirements."
  },
  {
    title: "Integrations",
    desc: "Agreed ERP, CRM, HRMS, legacy, API, identity, database, payment, communication, or third-party integrations."
  },
  {
    title: "Security & Testing",
    desc: "Authentication, permissions, security controls, integration testing, performance testing, user acceptance testing, and release validation according to project scope."
  },
  {
    title: "Deployment & Rollout",
    desc: "Environment preparation, deployment support, production launch assistance, and agreed rollout activities."
  },
  {
    title: "Documentation & Handoff",
    desc: "Source code, technical documentation, API information, environment details, relevant credentials, and other agreed handoff materials."
  },
  {
    title: "Ongoing Support Arrangement",
    desc: "Post-launch support, maintenance, enhancement, and development can continue under a separate agreed support arrangement."
  }
]

export default function Deliverables() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Tangible Deliverables
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          What You Receive From an Enterprise App Development Project
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Your final deliverables depend on the approved scope, but an enterprise engagement can include the following:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deliverablesList.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Package Element 0{i + 1}
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