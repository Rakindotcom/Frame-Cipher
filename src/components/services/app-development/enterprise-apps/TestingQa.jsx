'use client'

import React from 'react'
import {
  CheckSquare,
  Network,
  Cpu,
  ShieldAlert,
  Gauge,
  Flame,
  UserCheck,
  History,
  GitMerge,
  RefreshCw,
  Database,
  Workflow
} from 'lucide-react'

const testingQa = [
  {
    icon: CheckSquare,
    title: "Functional Testing",
    desc: "Verify workflows, forms, permissions, business rules, dashboards, and core application functionality."
  },
  {
    icon: Network,
    title: "Integration Testing",
    desc: "Test communication between the application, ERP, CRM, HRMS, databases, APIs, and third-party services."
  },
  {
    icon: Cpu,
    title: "API Testing",
    desc: "Validate authentication, requests, responses, permissions, error handling, and important API endpoints."
  },
  {
    icon: ShieldAlert,
    title: "Security Testing",
    desc: "Review authentication, authorization, permissions, sensitive operations, and security-related application behavior."
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    desc: "Test important workflows under representative user, transaction, and data conditions."
  },
  {
    icon: Flame,
    title: "Load & Stress Testing",
    desc: "Evaluate system behavior as concurrent users, transactions, and processing workloads increase."
  },
  {
    icon: UserCheck,
    title: "User Acceptance Testing",
    desc: "Allow approved stakeholders to validate important business workflows before production rollout."
  },
  {
    icon: History,
    title: "Regression Testing",
    desc: "Retest affected functionality after major changes, integrations, or fixes."
  },
  {
    icon: GitMerge,
    title: "Cross-System Testing",
    desc: "Validate workflows that move data across multiple enterprise platforms."
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery Testing",
    desc: "For systems with defined recovery requirements, test restoration and recovery procedures instead of assuming they will work as expected."
  },
  {
    icon: Database,
    title: "Data Migration Testing",
    desc: "Validate the accuracy and completeness of migrated data through comparison, reconciliation, and record-level checks."
  },
  {
    icon: Workflow,
    title: "End-to-End Testing",
    desc: "Trace complete business workflows across multiple systems to confirm that the full process works correctly under representative conditions."
  }
]

export default function TestingQa() {
  return (
    <section id="testing" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Testing &amp; Quality Assurance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise testing needs to validate both the application and the systems connected to it. We test important business workflows, integrations, permissions, data handling, and technical behavior according to project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testingQa.map((item, idx) => {
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
