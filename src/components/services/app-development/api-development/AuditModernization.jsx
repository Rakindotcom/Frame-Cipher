'use client'

import React from 'react'
import {
  Search,
  ShieldCheck,
  Gauge,
  Sparkles,
  RefreshCw,
  GitBranch,
  Wrench,
  Workflow,
} from 'lucide-react'

const auditModernization = [
  {
    icon: Search,
    title: "Existing API Assessment",
    desc: "We review the current architecture, endpoints, integrations, documentation, and known operational issues."
  },
  {
    icon: ShieldCheck,
    title: "API Security Review",
    desc: "We assess authentication, authorization, exposed data, access controls, and other relevant security areas within the agreed scope."
  },
  {
    icon: Gauge,
    title: "API Performance Audit",
    desc: "We identify slow endpoints, inefficient queries, excessive requests, and other performance bottlenecks."
  },
  {
    icon: Sparkles,
    title: "API Refactoring",
    desc: "Existing API code can become difficult to maintain as a product grows. We can refactor suitable parts while preserving required functionality."
  },
  {
    icon: RefreshCw,
    title: "Legacy API Modernization",
    desc: "Older APIs may need improved documentation, security, architecture, or integration patterns. We can modernize legacy API components where the existing system and available interfaces allow it."
  },
  {
    icon: GitBranch,
    title: "Versioning & Deprecation Planning",
    desc: "If an existing API has multiple consumers, changes need careful planning. We can help structure versioning and deprecation so consumers have a clear migration path."
  },
  {
    icon: Wrench,
    title: "Integration Troubleshooting",
    desc: "If an integration already exists but does not behave reliably, we can investigate the data flow and identify the failure point."
  },
  {
    icon: Workflow,
    title: "CI/CD Automated Contract Testing",
    desc: "Integrate automated contract verification and schema diffing into continuous deployment pipelines so breaking API changes never reach production systems."
  }
]

export default function AuditModernization() {
  return (
    <section id="modernization" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Audit, Optimization &amp; Modernization.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            You do not always need a new API. Sometimes the existing API is the problem. We can review an existing API and identify areas that need improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {auditModernization.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
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
