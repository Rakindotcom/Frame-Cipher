'use client'

import React from 'react'

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
    <section id="multi-tenant" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Multi-Tenant SaaS <span className="italic text-frame-accent">Architecture.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Multi-tenancy is one of the core architectural decisions that separates SaaS from ordinary application development. The architecture of a SaaS product determines customer data security, performance isolation, operational costs, and ease of scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {multiTenantArch.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title || item.category || item.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
