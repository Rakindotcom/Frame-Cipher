'use client'

import React from 'react'

const testingQaItems = [
  {
    title: "Functional Testing",
    desc: "Verify registration, authentication, dashboards, forms, workflows, billing, permissions, and core product functionality."
  },
  {
    title: "Multi-Tenant Testing",
    desc: "Test tenant isolation and access controls to confirm that one customer cannot access another customer's data."
  },
  {
    title: "Billing Testing",
    desc: "Test trials, subscriptions, upgrades, downgrades, cancellations, failed payments, invoices, webhooks, and plan-based access."
  },
  {
    title: "API Testing",
    desc: "Validate authentication, permissions, request handling, data responses, and important integration workflows."
  },
  {
    title: "Performance Testing",
    desc: "Test important workflows under representative traffic and data conditions."
  },
  {
    title: "Security Testing",
    desc: "Review authentication, authorization, tenant boundaries, sensitive operations, and security-related behavior."
  },
  {
    title: "Regression Testing",
    desc: "After major changes, affected product areas should be tested again before release."
  },
  {
    title: "User Acceptance Testing",
    desc: "Approved stakeholders can validate important business workflows before production deployment."
  }
]

export default function TestingQualityAssurance() {
  return (
    <section id="testing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Testing &amp; <span className="italic text-frame-accent">Quality Assurance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS product needs testing across customer workflows and the systems that support them. Bugs in a live multi-tenant product can impact many customers at once. Continuous testing is essential.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testingQaItems.map((item, idx) => (
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
