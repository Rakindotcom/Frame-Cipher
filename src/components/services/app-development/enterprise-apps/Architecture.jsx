'use client'

import React from 'react'

const enterpriseArchitecture = [
  {
    title: "Modular Architecture",
    desc: "Separate business capabilities into manageable modules so individual areas can evolve without making every change risky."
  },
  {
    title: "Monolith vs Microservices",
    desc: "A well-structured modular application can be appropriate for many enterprise environments. Microservices can be useful when independent deployment, team ownership, scale, or service boundaries justify the added complexity."
  },
  {
    title: "API-First Architecture",
    desc: "APIs provide controlled interfaces between web applications, mobile applications, internal platforms, and third-party services."
  },
  {
    title: "Event-Driven Architecture",
    desc: "For suitable systems, events can connect asynchronous workflows and services without forcing every process into a single synchronous transaction."
  },
  {
    title: "Service-to-Service Communication",
    desc: "Connected services need defined interfaces, authentication, data contracts, error handling, and monitoring."
  },
  {
    title: "Data Architecture",
    desc: "We map important business entities, relationships, transactions, permissions, and reporting requirements."
  },
  {
    title: "High Availability",
    desc: "Where availability is critical, architecture can include redundancy, health checks, recovery planning, and appropriate failover strategies."
  },
  {
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
            Enterprise Architecture &amp; <span className="italic text-frame-accent">Scalability.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise architecture should provide structure, reliability, and flexibility without creating unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseArchitecture.map((item, idx) => (
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
