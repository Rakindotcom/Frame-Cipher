'use client'

import React from 'react'

const engagementModels = [
  {
    title: "Custom Enterprise Project",
    desc: "A complete engagement for designing and building a new enterprise application around a defined business requirement."
  },
  {
    title: "Legacy Modernization",
    desc: "Modernize an existing application while preserving the business capabilities and data the organization still depends on."
  },
  {
    title: "Dedicated Development Team",
    desc: "Provide ongoing development capacity for organizations with a larger internal product roadmap or continuous application requirements."
  },
  {
    title: "Feature & Enhancement Development",
    desc: "Extend an existing enterprise platform with new workflows, modules, integrations, reports, or other functionality."
  },
  {
    title: "Integration Projects",
    desc: "Connect existing enterprise systems through APIs, middleware, synchronization, or other suitable integration methods."
  },
  {
    title: "Long-Term Development & Support",
    desc: "Continue developing and maintaining an enterprise application as business requirements, integrations, and operational needs evolve."
  }
]

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise <span className="italic text-frame-accent">Engagement Models.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different organizations require different delivery structures depending on their existing systems, internal teams, project scope, and long-term roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((item, idx) => (
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
