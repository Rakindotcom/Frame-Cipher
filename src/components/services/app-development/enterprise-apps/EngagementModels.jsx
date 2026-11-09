'use client'

import React from 'react'
import {
  Building2,
  RefreshCw,
  Users,
  Sparkles,
  Network,
  ShieldCheck
} from 'lucide-react'

const engagementModels = [
  {
    icon: Building2,
    title: "Custom Enterprise Project",
    desc: "A complete engagement for designing and building a new enterprise application around a defined business requirement."
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    desc: "Modernize an existing application while preserving the business capabilities and data the organization still depends on."
  },
  {
    icon: Users,
    title: "Dedicated Development Team",
    desc: "Provide ongoing development capacity for organizations with a larger internal product roadmap or continuous application requirements."
  },
  {
    icon: Sparkles,
    title: "Feature & Enhancement Development",
    desc: "Extend an existing enterprise platform with new workflows, modules, integrations, reports, or other functionality."
  },
  {
    icon: Network,
    title: "Integration Projects",
    desc: "Connect existing enterprise systems through APIs, middleware, synchronization, or other suitable integration methods."
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Development & Support",
    desc: "Continue developing and maintaining an enterprise application as business requirements, integrations, and operational needs evolve."
  }
]

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise Engagement Models.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different organizations require different delivery structures depending on their existing systems, internal teams, project scope, and long-term roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
