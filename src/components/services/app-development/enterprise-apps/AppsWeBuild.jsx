'use client'

import React from 'react'
import {
  Layers,
  Users,
  UserCheck,
  CreditCard,
  Truck,
  ShoppingBag,
  Globe,
  Navigation,
  Smartphone,
  Sliders,
  TrendingUp,
} from 'lucide-react'

const enterpriseApps = [
  {
    icon: Layers,
    title: "ERP & Business Management Systems",
    desc: "Custom modules and business platforms for finance, inventory, procurement, operations, reporting, and related processes."
  },
  {
    icon: Users,
    title: "CRM & Customer Platforms",
    desc: "Applications for customer records, leads, sales workflows, service operations, communication, and customer self-service."
  },
  {
    icon: UserCheck,
    title: "HRMS & Workforce Systems",
    desc: "Software for employee records, attendance, leave, recruitment, workforce management, scheduling, and internal HR workflows."
  },
  {
    icon: CreditCard,
    title: "Finance & Accounting Applications",
    desc: "Applications for invoices, expenses, approvals, financial records, reporting, payment workflows, and accounting operations."
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics Platforms",
    desc: "Systems for purchasing, inventory, warehouses, orders, transportation, delivery, and supply-chain management."
  },
  {
    icon: ShoppingBag,
    title: "Procurement Systems",
    desc: "Platforms for purchase requests, vendor management, approval workflows, purchase orders, procurement tracking, and reporting."
  },
  {
    icon: Globe,
    title: "Customer & Employee Portals",
    desc: "Secure portals that give customers, employees, partners, or vendors access to approved information and business workflows."
  },
  {
    icon: Navigation,
    title: "Field Operations Applications",
    desc: "Applications for technicians, inspectors, sales representatives, delivery teams, service staff, and other field-based workers."
  },
  {
    icon: Smartphone,
    title: "Enterprise Mobile Apps",
    desc: "Mobile applications that connect employees, customers, partners, or field teams with enterprise systems."
  },
  {
    icon: Sliders,
    title: "Internal Operations Platforms",
    desc: "Custom tools for task management, approvals, operations, records, reporting, and department-specific workflows."
  },
  {
    icon: TrendingUp,
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
            Enterprise Applications We Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We develop enterprise software around departments, workflows, operational requirements, and customer-facing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {enterpriseApps.map((item, idx) => {
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
