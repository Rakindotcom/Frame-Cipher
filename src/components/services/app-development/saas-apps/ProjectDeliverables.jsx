const deliverablesList = [
  {
    title: "Product Strategy",
    desc: "Business requirements, user journeys, product roadmap, SaaS model, and technical planning."
  },
  {
    title: "Multi-Tenant Architecture",
    desc: "Tenant structure, data model, access control, and scalability planning."
  },
  {
    title: "UI/UX",
    desc: "Onboarding flows, dashboards, workflows, design systems, responsive interfaces, and prototypes."
  },
  {
    title: "SaaS Application",
    desc: "Frontend and backend development around the approved features and business workflows."
  },
  {
    title: "Billing & Integrations",
    desc: "Subscription logic, payment integrations, APIs, webhooks, notifications, analytics, and other agreed services."
  },
  {
    title: "Security & Testing",
    desc: "Authentication, permissions, tenant isolation, functional testing, integration testing, performance testing, and release validation."
  },
  {
    title: "Deployment",
    desc: "Production setup, deployment support, monitoring, domains, and other agreed infrastructure work."
  },
  {
    title: "Handoff & Documentation",
    desc: "Source code, technical documentation, API information, access credentials, and other agreed project deliverables."
  }
]

export default function ProjectDeliverables() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Tangible Outcomes
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          What You Receive From a SaaS Development Project
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Your final deliverables depend on the approved project scope, but a complete SaaS engagement can include:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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