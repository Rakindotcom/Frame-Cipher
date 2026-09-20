const enterpriseServices = [
  {
    title: "Discovery & Stakeholder Alignment",
    desc: "We identify business goals, user groups, workflows, existing systems, technical constraints, and project requirements before development begins."
  },
  {
    title: "System Architecture & Integration Planning",
    desc: "We define the application structure, data flow, security model, integrations, dependencies, and scalability requirements based on the project."
  },
  {
    title: "Enterprise UI/UX Design",
    desc: "We design role-based dashboards, forms, navigation, workflows, and interfaces around how employees, managers, customers, and other users interact with the system."
  },
  {
    title: "Custom Enterprise Application Development",
    desc: "We develop web, mobile, or connected enterprise applications around approved business requirements, workflows, and technical architecture."
  },
  {
    title: "Enterprise Systems Integration",
    desc: "We connect the application with ERP, CRM, HRMS, accounting platforms, legacy databases, identity providers, APIs, and other required systems."
  },
  {
    title: "Legacy Application Modernization",
    desc: "We modernize outdated applications, interfaces, databases, or infrastructure while preserving the business capabilities the organization still depends on."
  },
  {
    title: "Enterprise Mobile App Development",
    desc: "We build mobile applications for employees, field teams, sales representatives, customers, managers, and other enterprise users."
  },
  {
    title: "Quality Assurance & Testing",
    desc: "We validate functionality, integrations, permissions, security, performance, and critical business workflows before production release."
  },
  {
    title: "Deployment & Release Support",
    desc: "We support environment preparation, production deployment, release coordination, launch activities, and initial post-release monitoring according to project scope."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "We provide post-launch bug fixes, security updates, integration support, performance optimization, maintenance, and future development through an agreed support arrangement."
  },
  {
    title: "Post-Launch Review",
    desc: "After the initial release, we review production performance, user adoption signals, and operational issues to identify early improvements."
  },
  {
    title: "Training & Knowledge Transfer",
    desc: "We help the organization understand how the new application works, including user guides, admin documentation, and team handoff materials."
  }
]

export default function Services() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Core Capabilities
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Our Enterprise App Development Services
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We build enterprise applications around your organization&apos;s workflows, users, systems, and operational requirements. Our in-house team can support the project from discovery and architecture through development, integration, testing, launch, and ongoing support.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {enterpriseServices.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Service {i + 1 < 10 ? `0${i + 1}` : i + 1}
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