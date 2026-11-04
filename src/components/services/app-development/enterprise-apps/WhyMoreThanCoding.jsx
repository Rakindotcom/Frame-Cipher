'use client'

import React from 'react'

const whyMoreThanCoding = [
  {
    title: "Complex Business Workflows",
    desc: "Enterprise processes can involve several roles, departments, approvals, conditions, and handoffs. The application must reflect those relationships accurately."
  },
  {
    title: "Existing System Dependencies",
    desc: "Your new system may need to work with platforms that already support critical business operations. Replacing everything at once is not always practical."
  },
  {
    title: "Security & Governance",
    desc: "Enterprise systems may handle sensitive business, employee, customer, or financial information. Access, security, and auditability need to be considered from the beginning."
  },
  {
    title: "Data & Integration Complexity",
    desc: "Important information may exist across multiple systems. The application needs reliable ways to exchange and synchronize data without creating unnecessary manual work."
  },
  {
    title: "User Adoption",
    desc: "A technically functional system can still create problems when its workflows do not match how employees actually work."
  },
  {
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
            Why Enterprise Apps Need More <span className="italic text-frame-accent">Than Simple Coding.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise applications sit inside an organization that already has people, processes, systems, policies, and dependencies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyMoreThanCoding.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
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
