const typesOfSaas = [
  {
    title: "B2B SaaS",
    desc: "Software for companies that need tools for sales, operations, finance, HR, customer management, reporting, or internal workflows."
  },
  {
    title: "B2C SaaS",
    desc: "Subscription-based products for individual customers, including productivity, learning, content, lifestyle, and other consumer services."
  },
  {
    title: "Vertical SaaS",
    desc: "Industry-focused software built around the workflows, terminology, permissions, and requirements of a specific sector."
  },
  {
    title: "CRM & Sales SaaS",
    desc: "Platforms for leads, contacts, pipelines, customer activity, communication, reporting, and sales workflows."
  },
  {
    title: "HR & Workforce SaaS",
    desc: "Software for employee management, recruitment, attendance, scheduling, workforce operations, and related business processes."
  },
  {
    title: "Finance & Accounting SaaS",
    desc: "Products for invoicing, expenses, financial records, payments, reporting, subscription management, and accounting workflows."
  },
  {
    title: "Education SaaS",
    desc: "Learning platforms, course management, student systems, assessments, communication, and education-focused workflows."
  },
  {
    title: "Healthcare SaaS",
    desc: "Software for appointments, records, scheduling, communication, wellness, and other supported healthcare workflows."
  },
  {
    title: "Operations & Workflow SaaS",
    desc: "Platforms for approvals, tasks, field operations, inventory, service management, reporting, and recurring business processes."
  },
  {
    title: "AI-Powered SaaS",
    desc: "Products that use AI within broader business workflows, such as automation, document processing, recommendations, content generation, analysis, or intelligent assistance."
  },
  {
    title: "White-Label SaaS",
    desc: "Platforms that allow businesses or partners to offer the same underlying product under different branding, domains, configurations, or customer-facing identities."
  }
]

export default function TypesOfSaas() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Industry Verticals &amp; Models
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Types of SaaS We Build
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We build SaaS products around different customer models, industries, and operational workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {typesOfSaas.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Category {i + 1 < 10 ? `0${i + 1}` : i + 1}
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