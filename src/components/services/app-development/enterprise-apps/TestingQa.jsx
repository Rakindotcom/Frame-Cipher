'use client'

import React from 'react'

const testingQa = [
  {
    title: "Functional Testing",
    desc: "Verify workflows, forms, permissions, business rules, dashboards, and core application functionality."
  },
  {
    title: "Integration Testing",
    desc: "Test communication between the application, ERP, CRM, HRMS, databases, APIs, and third-party services."
  },
  {
    title: "API Testing",
    desc: "Validate authentication, requests, responses, permissions, error handling, and important API endpoints."
  },
  {
    title: "Security Testing",
    desc: "Review authentication, authorization, permissions, sensitive operations, and security-related application behavior."
  },
  {
    title: "Performance Testing",
    desc: "Test important workflows under representative user, transaction, and data conditions."
  },
  {
    title: "Load & Stress Testing",
    desc: "Evaluate system behavior as concurrent users, transactions, and processing workloads increase."
  },
  {
    title: "User Acceptance Testing",
    desc: "Allow approved stakeholders to validate important business workflows before production rollout."
  },
  {
    title: "Regression Testing",
    desc: "Retest affected functionality after major changes, integrations, or fixes."
  },
  {
    title: "Cross-System Testing",
    desc: "Validate workflows that move data across multiple enterprise platforms."
  },
  {
    title: "Disaster Recovery Testing",
    desc: "For systems with defined recovery requirements, test restoration and recovery procedures instead of assuming they will work as expected."
  },
  {
    title: "Data Migration Testing",
    desc: "Validate the accuracy and completeness of migrated data through comparison, reconciliation, and record-level checks."
  },
  {
    title: "End-to-End Testing",
    desc: "Trace complete business workflows across multiple systems to confirm that the full process works correctly under representative conditions."
  }
]

export default function TestingQa() {
  return (
    <section id="testing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Testing &amp; <span className="italic text-frame-accent">Quality Assurance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise testing needs to validate both the application and the systems connected to it. We test important business workflows, integrations, permissions, data handling, and technical behavior according to project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testingQa.map((item, idx) => (
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
