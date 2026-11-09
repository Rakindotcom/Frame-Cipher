'use client'

import React from 'react'
import {
  CheckCircle2,
  Layers,
  CreditCard,
  Server,
  Zap,
  ShieldCheck,
  RotateCcw,
  Users,
} from 'lucide-react'

const testingQaItems = [
  {
    icon: CheckCircle2,
    title: "Functional Testing",
    desc: "Verify registration, authentication, dashboards, forms, workflows, billing, permissions, and core product functionality."
  },
  {
    icon: Layers,
    title: "Multi-Tenant Testing",
    desc: "Test tenant isolation and access controls to confirm that one customer cannot access another customer's data."
  },
  {
    icon: CreditCard,
    title: "Billing Testing",
    desc: "Test trials, subscriptions, upgrades, downgrades, cancellations, failed payments, invoices, webhooks, and plan-based access."
  },
  {
    icon: Server,
    title: "API Testing",
    desc: "Validate authentication, permissions, request handling, data responses, and important integration workflows."
  },
  {
    icon: Zap,
    title: "Performance Testing",
    desc: "Test important workflows under representative traffic and data conditions."
  },
  {
    icon: ShieldCheck,
    title: "Security Testing",
    desc: "Review authentication, authorization, tenant boundaries, sensitive operations, and security-related behavior."
  },
  {
    icon: RotateCcw,
    title: "Regression Testing",
    desc: "After major changes, affected product areas should be tested again before release."
  },
  {
    icon: Users,
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
            SaaS Testing &amp; Quality Assurance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS product needs testing across customer workflows and the systems that support them. Bugs in a live multi-tenant product can impact many customers at once. Continuous testing is essential.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testingQaItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
