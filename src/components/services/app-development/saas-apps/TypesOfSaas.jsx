'use client'

import React from 'react'
import {
  Building2,
  Users,
  Compass,
  TrendingUp,
  UserCheck,
  CreditCard,
  GraduationCap,
  HeartPulse,
  Sliders,
  Sparkles,
  Layers,
} from 'lucide-react'

const typesOfSaas = [
  {
    icon: Building2,
    title: "B2B SaaS",
    desc: "Software for companies that need tools for sales, operations, finance, HR, customer management, reporting, or internal workflows."
  },
  {
    icon: Users,
    title: "B2C SaaS",
    desc: "Subscription-based products for individual customers, including productivity, learning, content, lifestyle, and other consumer services."
  },
  {
    icon: Compass,
    title: "Vertical SaaS",
    desc: "Industry-focused software built around the workflows, terminology, permissions, and requirements of a specific sector."
  },
  {
    icon: TrendingUp,
    title: "CRM & Sales SaaS",
    desc: "Platforms for leads, contacts, pipelines, customer activity, communication, reporting, and sales workflows."
  },
  {
    icon: UserCheck,
    title: "HR & Workforce SaaS",
    desc: "Software for employee management, recruitment, attendance, scheduling, workforce operations, and related business processes."
  },
  {
    icon: CreditCard,
    title: "Finance & Accounting SaaS",
    desc: "Products for invoicing, expenses, financial records, payments, reporting, subscription management, and accounting workflows."
  },
  {
    icon: GraduationCap,
    title: "Education SaaS",
    desc: "Learning platforms, course management, student systems, assessments, communication, and education-focused workflows."
  },
  {
    icon: HeartPulse,
    title: "Healthcare SaaS",
    desc: "Software for appointments, records, scheduling, communication, wellness, and other supported healthcare workflows."
  },
  {
    icon: Sliders,
    title: "Operations & Workflow SaaS",
    desc: "Platforms for approvals, tasks, field operations, inventory, service management, reporting, and recurring business processes."
  },
  {
    icon: Sparkles,
    title: "AI-Powered SaaS",
    desc: "Products that use AI within broader business workflows, such as automation, document processing, recommendations, content generation, analysis, or intelligent assistance."
  },
  {
    icon: Layers,
    title: "White-Label SaaS",
    desc: "Platforms that allow businesses or partners to offer the same underlying product under different branding, domains, configurations, or customer-facing identities."
  }
]

export default function TypesOfSaas() {
  return (
    <section id="types-of-saas" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Types of SaaS We Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build SaaS products around different customer models, industries, and operational workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {typesOfSaas.map((item, idx) => {
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
