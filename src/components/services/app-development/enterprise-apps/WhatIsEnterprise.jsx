'use client'

import React from 'react'
import {
  Building2,
  Sliders,
  Layers,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'

const whatIsEnterprise = [
  {
    icon: Building2,
    title: "Enterprise vs Business Applications",
    desc: "A business application may support one team or a limited workflow. Enterprise applications often need to support multiple departments, locations, roles, systems, and approval structures."
  },
  {
    icon: Sliders,
    title: "Enterprise vs Off-the-Shelf Software",
    desc: "Off-the-shelf software provides a predefined way to work. Custom enterprise software can be designed around the organization's existing processes, rules, data, and operational requirements."
  },
  {
    icon: Layers,
    title: "Multi-Department Systems",
    desc: "Enterprise applications can connect finance, HR, sales, operations, procurement, logistics, customer service, and management through shared workflows and controlled access."
  },
  {
    icon: ShieldCheck,
    title: "Mission-Critical Business Applications",
    desc: "Some enterprise systems support daily operations that employees rely on continuously. Availability, data integrity, security, and dependable integrations therefore become core requirements."
  },
  {
    icon: Smartphone,
    title: "Enterprise Web & Mobile Applications",
    desc: "Enterprise solutions can include web platforms, employee portals, customer systems, dashboards, mobile applications, and connected operational tools."
  }
]

export default function WhatIsEnterprise() {
  return (
    <section id="what-is-enterprise" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Is Enterprise App Development?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise app development is the process of building software for organizations with complex workflows, multiple user groups, existing systems, security requirements, and long-term operational needs. An enterprise application may connect departments, automate processes, manage sensitive information, integrate with legacy systems, and support large numbers of users or transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIsEnterprise.map((item, idx) => {
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
