'use client'

import React from 'react'
import {
  Cloud,
  Cpu,
  Maximize2,
  Database,
  Zap,
  ShieldCheck,
  RefreshCw,
  Activity,
  LineChart
} from 'lucide-react'

const cloudPerformance = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Design cloud infrastructure around users, workloads, integrations, data, availability, and expected growth."
  },
  {
    icon: Cpu,
    title: "Load Balancing",
    desc: "Distribute application traffic across appropriate instances when the workload requires it."
  },
  {
    icon: Maximize2,
    title: "Auto Scaling",
    desc: "Where supported and appropriate, resources can adjust around changing demand."
  },
  {
    icon: Database,
    title: "Database Performance",
    desc: "Review queries, indexing, connections, storage, and workloads to reduce avoidable bottlenecks."
  },
  {
    icon: Zap,
    title: "Caching",
    desc: "Cache suitable frequently accessed information to reduce repeated processing and database load."
  },
  {
    icon: ShieldCheck,
    title: "High Availability",
    desc: "Critical systems can use redundancy, health checks, failover planning, and monitored services where required."
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery",
    desc: "Define backup, restoration, recovery priorities, and operational procedures for important systems."
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    desc: "Monitor logs, errors, performance signals, infrastructure health, and important operational events."
  },
  {
    icon: LineChart,
    title: "Capacity Planning",
    desc: "Plan future infrastructure needs around users, transactions, data volume, locations, and expected business growth."
  }
]

export default function CloudPerformance() {
  return (
    <section id="cloud-performance" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cloud Infrastructure &amp; Performance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise infrastructure should match the application&apos;s workload and operational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cloudPerformance.map((item, idx) => {
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
