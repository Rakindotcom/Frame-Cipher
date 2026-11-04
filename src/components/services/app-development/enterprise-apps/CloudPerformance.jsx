'use client'

import React from 'react'

const cloudPerformance = [
  {
    title: "Cloud Architecture",
    desc: "Design cloud infrastructure around users, workloads, integrations, data, availability, and expected growth."
  },
  {
    title: "Load Balancing",
    desc: "Distribute application traffic across appropriate instances when the workload requires it."
  },
  {
    title: "Auto Scaling",
    desc: "Where supported and appropriate, resources can adjust around changing demand."
  },
  {
    title: "Database Performance",
    desc: "Review queries, indexing, connections, storage, and workloads to reduce avoidable bottlenecks."
  },
  {
    title: "Caching",
    desc: "Cache suitable frequently accessed information to reduce repeated processing and database load."
  },
  {
    title: "High Availability",
    desc: "Critical systems can use redundancy, health checks, failover planning, and monitored services where required."
  },
  {
    title: "Disaster Recovery",
    desc: "Define backup, restoration, recovery priorities, and operational procedures for important systems."
  },
  {
    title: "Monitoring & Observability",
    desc: "Monitor logs, errors, performance signals, infrastructure health, and important operational events."
  },
  {
    title: "Capacity Planning",
    desc: "Plan future infrastructure needs around users, transactions, data volume, locations, and expected business growth."
  }
]

export default function CloudPerformance() {
  return (
    <section id="cloud-performance" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cloud Infrastructure &amp; <span className="italic text-frame-accent">Performance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise infrastructure should match the application's workload and operational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cloudPerformance.map((item, idx) => (
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
