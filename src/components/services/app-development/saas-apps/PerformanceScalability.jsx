'use client'

import React from 'react'

const performanceInfraItems = [
  {
    title: "Horizontal Scaling",
    desc: "Suitable applications can distribute workloads across multiple instances instead of relying on one increasingly overloaded server."
  },
  {
    title: "Database Scaling",
    desc: "Database structure, indexing, query performance, connection management, and data growth should be considered from the beginning."
  },
  {
    title: "Caching",
    desc: "Frequently requested data can be cached where appropriate to reduce unnecessary database and processing work."
  },
  {
    title: "CDN & Asset Delivery",
    desc: "Images, files, downloads, and other static assets can use suitable content-distribution infrastructure when required."
  },
  {
    title: "Load Testing",
    desc: "Performance can be tested against representative traffic and data conditions before major launches or planned growth periods."
  },
  {
    title: "Cloud Deployment",
    desc: "Development, staging, and production environments can be structured around the application's operational needs."
  },
  {
    title: "CI/CD",
    desc: "Automated build, test, and deployment workflows can make controlled product releases easier to manage."
  },
  {
    title: "Monitoring & Alerting",
    desc: "Monitor errors, uptime, infrastructure health, and important system events so problems can be identified earlier."
  },
  {
    title: "Error Tracking",
    desc: "Centralized error tracking can help the team investigate issues without relying only on customer reports."
  },
  {
    title: "Backup & Recovery",
    desc: "Infrastructure planning can include suitable backup, restoration, and recovery procedures based on the product's risk profile."
  },
  {
    title: "Infrastructure Cost Review",
    desc: "Review cloud resource usage to identify over-provisioned or underused components as the product scales and infrastructure spend increases."
  },
  {
    title: "Environment Parity",
    desc: "Keep development, staging, and production environments aligned to reduce environment-specific issues and unexpected release surprises."
  }
]

export default function PerformanceScalability() {
  return (
    <section id="scalability" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Performance, Scalability &amp; <span className="italic text-frame-accent">Cloud Infrastructure.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your infrastructure should support the product you are building today while leaving a clear path for future growth. SaaS infrastructure must handle variable user loads, traffic spikes, database growth, and background processing efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {performanceInfraItems.map((item, idx) => (
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
