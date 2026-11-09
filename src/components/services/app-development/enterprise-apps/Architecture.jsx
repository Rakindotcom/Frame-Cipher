'use client'

import React from 'react'
import {
  Boxes,
  Layers,
  Code2,
  Zap,
  Server,
  Database,
  Cloud,
  ShieldCheck,
} from 'lucide-react'

const enterpriseArchitecture = [
  {
    icon: Boxes,
    title: "Modular Architecture",
    desc: "Separate business capabilities into manageable modules so individual areas can evolve without making every change risky."
  },
  {
    icon: Layers,
    title: "Monolith vs Microservices",
    desc: "A well-structured modular application can be appropriate for many enterprise environments. Microservices can be useful when independent deployment, team ownership, scale, or service boundaries justify the added complexity."
  },
  {
    icon: Code2,
    title: "API-First Architecture",
    desc: "APIs provide controlled interfaces between web applications, mobile applications, internal platforms, and third-party services."
  },
  {
    icon: Zap,
    title: "Event-Driven Architecture",
    desc: "For suitable systems, events can connect asynchronous workflows and services without forcing every process into a single synchronous transaction."
  },
  {
    icon: Server,
    title: "Service-to-Service Communication",
    desc: "Connected services need defined interfaces, authentication, data contracts, error handling, and monitoring."
  },
  {
    icon: Database,
    title: "Data Architecture",
    desc: "We map important business entities, relationships, transactions, permissions, and reporting requirements."
  },
  {
    icon: Cloud,
    title: "High Availability",
    desc: "Where availability is critical, architecture can include redundancy, health checks, recovery planning, and appropriate failover strategies."
  },
  {
    icon: ShieldCheck,
    title: "Fault Tolerance",
    desc: "Important workflows can be designed to handle selected service failures without bringing down the entire application."
  }
]

export default function Architecture() {
  return (
    <section id="architecture" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise Architecture &amp; Scalability.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise architecture should provide structure, reliability, and flexibility without creating unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {enterpriseArchitecture.map((item, idx) => {
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
