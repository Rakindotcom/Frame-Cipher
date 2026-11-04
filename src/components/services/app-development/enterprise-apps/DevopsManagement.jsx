'use client'

import React from 'react'

const devOpsManagement = [
  {
    title: "Development Environments",
    desc: "Maintain suitable development, staging, and production environments to reduce deployment risk."
  },
  {
    title: "CI/CD",
    desc: "Automate appropriate build, testing, and deployment steps for more consistent releases."
  },
  {
    title: "Automated Builds",
    desc: "Generate predictable application builds and deployment artifacts through controlled processes."
  },
  {
    title: "Infrastructure as Code",
    desc: "Where appropriate, manage infrastructure configuration through version-controlled definitions rather than repeated manual changes."
  },
  {
    title: "Database Migrations",
    desc: "Apply schema changes through tested migration processes with appropriate rollback planning."
  },
  {
    title: "Release Controls",
    desc: "Use approval and release procedures suited to the organization's risk and governance requirements."
  },
  {
    title: "Rollback Planning",
    desc: "Maintain a practical recovery path when a deployment creates unexpected production issues."
  },
  {
    title: "Post-Deployment Monitoring",
    desc: "Monitor production behavior after releases to identify errors, performance changes, and integration issues early."
  }
]

export default function DevopsManagement() {
  return (
    <section id="devops" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            DevOps, CI/CD &amp; <span className="italic text-frame-accent">Cloud Operations.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise releases need controlled processes, not manual deployment alone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {devOpsManagement.map((item, idx) => (
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
