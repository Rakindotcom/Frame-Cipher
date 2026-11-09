'use client'

import React from 'react'
import {
  Zap,
  Database,
  Cpu,
  ListOrdered,
  Gauge,
  Layers,
  Activity,
  Cloud,
} from 'lucide-react'

const performanceScalability = [
  {
    icon: Zap,
    title: "Response Time Optimization",
    desc: "We identify slow endpoints and reduce unnecessary processing where possible."
  },
  {
    icon: Database,
    title: "Database Query Optimization",
    desc: "Slow database queries can become an API bottleneck. We review database interactions and optimize queries where the project requires it."
  },
  {
    icon: Cpu,
    title: "Caching",
    desc: "Caching can reduce repeated processing and database load for suitable data. We use caching only where the data and freshness requirements make it appropriate."
  },
  {
    icon: ListOrdered,
    title: "Pagination & Data Retrieval",
    desc: "Large datasets should not always be returned in one response. Pagination and controlled data retrieval can improve response size and application performance."
  },
  {
    icon: Gauge,
    title: "Load & Stress Testing",
    desc: "Testing under increased traffic helps reveal bottlenecks before production. The testing level depends on the expected traffic and project scope."
  },
  {
    icon: Layers,
    title: "Horizontal Scaling",
    desc: "Applications with growing traffic may need additional application instances or other scaling strategies. We consider scalability during architecture planning when the expected workload requires it."
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    desc: "Response time, error rate, traffic, and other relevant metrics can be monitored after deployment. This gives the team visibility as API usage changes."
  },
  {
    icon: Cloud,
    title: "Edge Caching & CDN Distribution",
    desc: "Deploy read-heavy API responses, media endpoints, and static resources to global edge networks and distributed Redis clusters to minimize server load and geographical latency."
  }
]

export default function PerformanceScalability() {
  return (
    <section id="performance" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Performance &amp; Scalability.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An API that works with ten users may behave differently when traffic grows. We consider performance during architecture, development, testing, and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {performanceScalability.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
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
