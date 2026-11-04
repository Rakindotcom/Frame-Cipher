'use client'

import React from 'react'

const performanceScalability = [
  {
    title: "Response Time Optimization",
    desc: "We identify slow endpoints and reduce unnecessary processing where possible."
  },
  {
    title: "Database Query Optimization",
    desc: "Slow database queries can become an API bottleneck. We review database interactions and optimize queries where the project requires it."
  },
  {
    title: "Caching",
    desc: "Caching can reduce repeated processing and database load for suitable data. We use caching only where the data and freshness requirements make it appropriate."
  },
  {
    title: "Pagination & Data Retrieval",
    desc: "Large datasets should not always be returned in one response. Pagination and controlled data retrieval can improve response size and application performance."
  },
  {
    title: "Load & Stress Testing",
    desc: "Testing under increased traffic helps reveal bottlenecks before production. The testing level depends on the expected traffic and project scope."
  },
  {
    title: "Horizontal Scaling",
    desc: "Applications with growing traffic may need additional application instances or other scaling strategies. We consider scalability during architecture planning when the expected workload requires it."
  },
  {
    title: "Performance Monitoring",
    desc: "Response time, error rate, traffic, and other relevant metrics can be monitored after deployment. This gives the team visibility as API usage changes."
  },
  {
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
            API Performance &amp; <span className="italic text-frame-accent">Scalability.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An API that works with ten users may behave differently when traffic grows. We consider performance during architecture, development, testing, and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {performanceScalability.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
