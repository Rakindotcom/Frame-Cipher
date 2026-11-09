'use client'

import React from 'react'
import {
  ShieldCheck,
  Database,
  Layers,
  Building2,
  Sliders,
  Globe,
  Layout,
  Server,
} from 'lucide-react'

const multiTenantArch = [
  {
    icon: ShieldCheck,
    title: "Tenant Data Isolation",
    desc: "Each customer organization should have logically separated data, users, settings, and business records according to the application's security model."
  },
  {
    icon: Database,
    title: "Shared Database vs Separate Database",
    desc: "Some products can use shared infrastructure with logical tenant separation. Others may benefit from separate schemas or databases based on scale, security, compliance, and operational requirements."
  },
  {
    icon: Layers,
    title: "Schema-Based Isolation",
    desc: "Where appropriate, tenant identifiers and database-level rules can be used to keep customer records logically separated within shared infrastructure."
  },
  {
    icon: Building2,
    title: "Organization & Workspace Structure",
    desc: "A SaaS product can support companies, teams, departments, branches, workspaces, or other organizational structures based on how customers use the platform."
  },
  {
    icon: Sliders,
    title: "Tenant-Specific Configuration",
    desc: "Customers may need their own settings, branding, limits, feature access, integrations, or business rules."
  },
  {
    icon: Globe,
    title: "Subdomain & Custom Domain Support",
    desc: "Suitable SaaS products can support dedicated subdomains or connected custom domains for individual customers or organizations."
  },
  {
    icon: Layout,
    title: "White-Label SaaS",
    desc: "The same multi-tenant foundation can support customer-specific logos, branding, domains, and configurable front-end experiences."
  },
  {
    icon: Server,
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
            Multi-Tenant SaaS Architecture.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Multi-tenancy is one of the core architectural decisions that separates SaaS from ordinary application development. The architecture of a SaaS product determines customer data security, performance isolation, operational costs, and ease of scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {multiTenantArch.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
