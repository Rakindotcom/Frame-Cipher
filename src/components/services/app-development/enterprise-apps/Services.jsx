'use client'

import React from 'react'
import {
  Search,
  Compass,
  Layout,
  Code2,
  Layers,
  RefreshCw,
  Smartphone,
  CheckCircle2,
  Rocket,
  Wrench,
  Activity,
  FileText,
} from 'lucide-react'

const enterpriseServices = [
  {
    icon: Search,
    title: "Discovery & Stakeholder Alignment",
    desc: "We identify business goals, user groups, workflows, existing systems, technical constraints, and project requirements before development begins."
  },
  {
    icon: Compass,
    title: "System Architecture & Integration Planning",
    desc: "We define the application structure, data flow, security model, integrations, dependencies, and scalability requirements based on the project."
  },
  {
    icon: Layout,
    title: "Enterprise UI/UX Design",
    desc: "We design role-based dashboards, forms, navigation, workflows, and interfaces around how employees, managers, customers, and other users interact with the system."
  },
  {
    icon: Code2,
    title: "Custom Enterprise Application Development",
    desc: "We develop web, mobile, or connected enterprise applications around approved business requirements, workflows, and technical architecture."
  },
  {
    icon: Layers,
    title: "Enterprise Systems Integration",
    desc: "We connect the application with ERP, CRM, HRMS, accounting platforms, legacy databases, identity providers, APIs, and other required systems."
  },
  {
    icon: RefreshCw,
    title: "Legacy Application Modernization",
    desc: "We modernize outdated applications, interfaces, databases, or infrastructure while preserving the business capabilities the organization still depends on."
  },
  {
    icon: Smartphone,
    title: "Enterprise Mobile App Development",
    desc: "We build mobile applications for employees, field teams, sales representatives, customers, managers, and other enterprise users."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance & Testing",
    desc: "We validate functionality, integrations, permissions, security, performance, and critical business workflows before production release."
  },
  {
    icon: Rocket,
    title: "Deployment & Release Support",
    desc: "We support environment preparation, production deployment, release coordination, launch activities, and initial post-release monitoring according to project scope."
  },
  {
    icon: Wrench,
    title: "Ongoing Support & Maintenance",
    desc: "We provide post-launch bug fixes, security updates, integration support, performance optimization, maintenance, and future development through an agreed support arrangement."
  },
  {
    icon: Activity,
    title: "Post-Launch Review",
    desc: "After the initial release, we review production performance, user adoption signals, and operational issues to identify early improvements."
  },
  {
    icon: FileText,
    title: "Training & Knowledge Transfer",
    desc: "We help the organization understand how the new application works, including user guides, admin documentation, and team handoff materials."
  }
]

export default function Services() {
  return (
    <section id="services" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Enterprise App Development Services.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build enterprise applications around your organization's workflows, users, systems, and operational requirements. Our in-house team can support the project from discovery and architecture through development, integration, testing, launch, and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseServices.map((item, idx) => {
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
