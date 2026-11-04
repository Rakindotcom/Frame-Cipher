'use client'

import React from 'react'

const whatIsEnterprise = [
  {
    title: "Enterprise vs Business Applications",
    desc: "A business application may support one team or a limited workflow. Enterprise applications often need to support multiple departments, locations, roles, systems, and approval structures."
  },
  {
    title: "Enterprise vs Off-the-Shelf Software",
    desc: "Off-the-shelf software provides a predefined way to work. Custom enterprise software can be designed around the organization's existing processes, rules, data, and operational requirements."
  },
  {
    title: "Multi-Department Systems",
    desc: "Enterprise applications can connect finance, HR, sales, operations, procurement, logistics, customer service, and management through shared workflows and controlled access."
  },
  {
    title: "Mission-Critical Business Applications",
    desc: "Some enterprise systems support daily operations that employees rely on continuously. Availability, data integrity, security, and dependable integrations therefore become core requirements."
  },
  {
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
            What Is Enterprise App <span className="italic text-frame-accent">Development?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise app development is the process of building software for organizations with complex workflows, multiple user groups, existing systems, security requirements, and long-term operational needs. An enterprise application may connect departments, automate processes, manage sensitive information, integrate with legacy systems, and support large numbers of users or transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {whatIsEnterprise.map((item, idx) => (
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
