'use client'

import React from 'react'

const enterpriseApps = [
  {
    title: "ERP & Business Management Systems",
    desc: "Custom modules and business platforms for finance, inventory, procurement, operations, reporting, and related processes."
  },
  {
    title: "CRM & Customer Platforms",
    desc: "Applications for customer records, leads, sales workflows, service operations, communication, and customer self-service."
  },
  {
    title: "HRMS & Workforce Systems",
    desc: "Software for employee records, attendance, leave, recruitment, workforce management, scheduling, and internal HR workflows."
  },
  {
    title: "Finance & Accounting Applications",
    desc: "Applications for invoices, expenses, approvals, financial records, reporting, payment workflows, and accounting operations."
  },
  {
    title: "Supply Chain & Logistics Platforms",
    desc: "Systems for purchasing, inventory, warehouses, orders, transportation, delivery, and supply-chain management."
  },
  {
    title: "Procurement Systems",
    desc: "Platforms for purchase requests, vendor management, approval workflows, purchase orders, procurement tracking, and reporting."
  },
  {
    title: "Customer & Employee Portals",
    desc: "Secure portals that give customers, employees, partners, or vendors access to approved information and business workflows."
  },
  {
    title: "Field Operations Applications",
    desc: "Applications for technicians, inspectors, sales representatives, delivery teams, service staff, and other field-based workers."
  },
  {
    title: "Enterprise Mobile Apps",
    desc: "Mobile applications that connect employees, customers, partners, or field teams with enterprise systems."
  },
  {
    title: "Internal Operations Platforms",
    desc: "Custom tools for task management, approvals, operations, records, reporting, and department-specific workflows."
  },
  {
    title: "Reporting & Management Systems",
    desc: "Dashboards and reporting platforms that organize operational information for managers and decision-makers."
  }
]

export default function AppsWeBuild() {
  return (
    <section id="apps-we-build" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise Applications <span className="italic text-frame-accent">We Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We develop enterprise software around departments, workflows, operational requirements, and customer-facing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {enterpriseApps.map((item, idx) => (
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
