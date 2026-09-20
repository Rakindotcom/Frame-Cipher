const multiTenantArch = [
  {
    title: "Tenant Data Isolation",
    desc: "Each customer organization should have logically separated data, users, settings, and business records according to the application's security model."
  },
  {
    title: "Shared Database vs Separate Database",
    desc: "Some products can use shared infrastructure with logical tenant separation. Others may benefit from separate schemas or databases based on scale, security, compliance, and operational requirements."
  },
  {
    title: "Schema-Based Isolation",
    desc: "Where appropriate, tenant identifiers and database-level rules can be used to keep customer records logically separated within shared infrastructure."
  },
  {
    title: "Organization & Workspace Structure",
    desc: "A SaaS product can support companies, teams, departments, branches, workspaces, or other organizational structures based on how customers use the platform."
  },
  {
    title: "Tenant-Specific Configuration",
    desc: "Customers may need their own settings, branding, limits, feature access, integrations, or business rules."
  },
  {
    title: "Subdomain & Custom Domain Support",
    desc: "Suitable SaaS products can support dedicated subdomains or connected custom domains for individual customers or organizations."
  },
  {
    title: "White-Label SaaS",
    desc: "The same multi-tenant foundation can support customer-specific logos, branding, domains, and configurable front-end experiences."
  },
  {
    title: "Scaling Tenant Data",
    desc: "The data model should account for growth in tenants, users, records, storage, reports, and activity without making the platform increasingly difficult to maintain."
  }
]

export default function MultiTenantArchitecture() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          System Engineering
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Multi-Tenant SaaS Architecture
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Multi-tenancy is one of the core architectural decisions that separates SaaS from ordinary application development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {multiTenantArch.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Architectural Pillar 0{i + 1}
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