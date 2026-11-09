'use client'

import React from 'react'
import {
  Sliders,
  Layers,
  ShieldCheck,
  Database,
  Users,
  HeartHandshake,
} from 'lucide-react'

const whyMoreThanCoding = [
  {
    icon: Sliders,
    title: "Complex Business Workflows",
    desc: "Enterprise processes can involve several roles, departments, approvals, conditions, and handoffs. The application must reflect those relationships accurately."
  },
  {
    icon: Layers,
    title: "Existing System Dependencies",
    desc: "Your new system may need to work with platforms that already support critical business operations. Replacing everything at once is not always practical."
  },
  {
    icon: ShieldCheck,
    title: "Security & Governance",
    desc: "Enterprise systems may handle sensitive business, employee, customer, or financial information. Access, security, and auditability need to be considered from the beginning."
  },
  {
    icon: Database,
    title: "Data & Integration Complexity",
    desc: "Important information may exist across multiple systems. The application needs reliable ways to exchange and synchronize data without creating unnecessary manual work."
  },
  {
    icon: Users,
    title: "User Adoption",
    desc: "A technically functional system can still create problems when its workflows do not match how employees actually work."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Reliability",
    desc: "Enterprise software may remain in use for years. Architecture, infrastructure, documentation, monitoring, and maintenance therefore need to be considered from the first release."
  }
]

export default function WhyMoreThanCoding() {
  return (
    <section id="why-more-than-coding" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Enterprise Apps Need More Than Simple Coding.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise applications sit inside an organization that already has people, processes, systems, policies, and dependencies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyMoreThanCoding.map((item, idx) => {
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
