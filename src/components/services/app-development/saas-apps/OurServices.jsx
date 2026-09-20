const saasServices = [
  {
    title: "Product Strategy & Multi-Tenant Architecture",
    desc: "We define your product structure before development begins. That includes tenants, users, workflows, data models, permissions, integrations, and scalability requirements."
  },
  {
    title: "SaaS UI/UX Design",
    desc: "We design onboarding, dashboards, workflows, settings, billing screens, and role-based interfaces around how different users actually interact with the product."
  },
  {
    title: "Full-Stack SaaS Development",
    desc: "We build the frontend and backend around the approved product scope instead of treating SaaS as a collection of disconnected CRUD screens."
  },
  {
    title: "Subscription & Billing Integration",
    desc: "We integrate the billing system around your business model, including plans, trials, subscription changes, payment events, invoices, and access rules where required."
  },
  {
    title: "API & Backend Development",
    desc: "We build or connect the APIs, authentication systems, databases, admin tools, and third-party services your SaaS product needs."
  },
  {
    title: "Performance, Security & Scalability",
    desc: "We plan infrastructure, performance, tenant isolation, monitoring, and security around current requirements and expected growth."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test product workflows, tenant isolation, billing, APIs, permissions, performance, and critical user journeys before launch."
  },
  {
    title: "SaaS Deployment",
    desc: "We prepare the application, environments, infrastructure, domains, release workflow, monitoring, and production deployment based on the approved scope."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "After launch, we can continue with bug fixes, framework updates, feature development, performance work, integrations, and technical support."
  }
]

export default function OurServices() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Core Capabilities
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Our SaaS App Development Services
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We build SaaS products around your business model, customer journey, technical requirements, and long-term product roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {saasServices.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Service 0{i + 1}
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