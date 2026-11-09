'use client'

import React from 'react'
import {
  Compass,
  Layers,
  Layout,
  Code2,
  CreditCard,
  ShieldCheck,
  Rocket,
  FileText,
} from 'lucide-react'

const deliverablesList = [
  {
    icon: Compass,
    title: "Product Strategy",
    desc: "Business requirements, user journeys, product roadmap, SaaS model, and technical planning."
  },
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    desc: "Tenant structure, data model, access control, and scalability planning."
  },
  {
    icon: Layout,
    title: "UI/UX",
    desc: "Onboarding flows, dashboards, workflows, design systems, responsive interfaces, and prototypes."
  },
  {
    icon: Code2,
    title: "SaaS Application",
    desc: "Frontend and backend development around the approved features and business workflows."
  },
  {
    icon: CreditCard,
    title: "Billing & Integrations",
    desc: "Subscription logic, payment integrations, APIs, webhooks, notifications, analytics, and other agreed services."
  },
  {
    icon: ShieldCheck,
    title: "Security & Testing",
    desc: "Authentication, permissions, tenant isolation, functional testing, integration testing, performance testing, and release validation."
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Production setup, deployment support, monitoring, domains, and other agreed infrastructure work."
  },
  {
    icon: FileText,
    title: "Handoff & Documentation",
    desc: "Source code, technical documentation, API information, access credentials, and other agreed project deliverables."
  }
]

export default function ProjectDeliverables() {
  return (
    <section id="deliverables" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive From a SaaS Development Project.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your final deliverables depend on the approved project scope, but a complete SaaS engagement can include:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverablesList.map((item, idx) => {
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
