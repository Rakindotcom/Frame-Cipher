'use client'

import React from 'react'
import {
  Calendar,
  Clock,
  Layers,
  Users,
  Activity,
  ArrowUpDown,
  Calculator,
  AlertTriangle,
  FileText,
  Lock,
  Webhook,
} from 'lucide-react'

const billingItems = [
  {
    icon: Calendar,
    title: "Monthly & Annual Plans",
    desc: "Create recurring subscription plans with different billing intervals and access levels."
  },
  {
    icon: Clock,
    title: "Free Trials",
    desc: "Support trial periods with controlled access, expiration rules, and conversion into paid subscriptions."
  },
  {
    icon: Layers,
    title: "Tiered Pricing",
    desc: "Different plans can unlock different features, limits, storage, users, or usage levels."
  },
  {
    icon: Users,
    title: "Seat-Based Billing",
    desc: "Charge according to the number of users or licensed seats when the business model requires it."
  },
  {
    icon: Activity,
    title: "Usage-Based Billing",
    desc: "Some SaaS products charge based on transactions, storage, API calls, processed documents, messages, or another measurable unit."
  },
  {
    icon: ArrowUpDown,
    title: "Upgrades & Downgrades",
    desc: "Plan changes should update account access, limits, billing state, and subscription records consistently."
  },
  {
    icon: Calculator,
    title: "Proration",
    desc: "Where supported by the billing model, mid-cycle plan changes can account for partial-period charges or credits."
  },
  {
    icon: AlertTriangle,
    title: "Failed Payments & Recovery",
    desc: "Billing systems need a clear workflow for failed payments, retries, account status changes, and access rules."
  },
  {
    icon: FileText,
    title: "Invoices & Receipts",
    desc: "Customers can have access to billing records, invoices, receipts, and transaction history based on the product requirements."
  },
  {
    icon: Lock,
    title: "Feature Gating",
    desc: "Subscription plans can control which features, limits, integrations, or usage levels are available to customers."
  },
  {
    icon: Webhook,
    title: "Billing Webhooks",
    desc: "Payment and subscription events can be synchronized with the SaaS platform so billing status and product access remain aligned."
  }
]

export default function BillingMonetization() {
  return (
    <section id="billing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Subscription Billing &amp; Monetization.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Billing is part of the product architecture, not simply a payment form added to the final screen. We structure subscription plans, gateways, usage metering, and automated lifecycle webhooks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {billingItems.map((item, idx) => {
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
