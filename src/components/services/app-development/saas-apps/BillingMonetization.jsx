'use client'

import React from 'react'

const billingItems = [
  {
    title: "Monthly & Annual Plans",
    desc: "Create recurring subscription plans with different billing intervals and access levels."
  },
  {
    title: "Free Trials",
    desc: "Support trial periods with controlled access, expiration rules, and conversion into paid subscriptions."
  },
  {
    title: "Tiered Pricing",
    desc: "Different plans can unlock different features, limits, storage, users, or usage levels."
  },
  {
    title: "Seat-Based Billing",
    desc: "Charge according to the number of users or licensed seats when the business model requires it."
  },
  {
    title: "Usage-Based Billing",
    desc: "Some SaaS products charge based on transactions, storage, API calls, processed documents, messages, or another measurable unit."
  },
  {
    title: "Upgrades & Downgrades",
    desc: "Plan changes should update account access, limits, billing state, and subscription records consistently."
  },
  {
    title: "Proration",
    desc: "Where supported by the billing model, mid-cycle plan changes can account for partial-period charges or credits."
  },
  {
    title: "Failed Payments & Recovery",
    desc: "Billing systems need a clear workflow for failed payments, retries, account status changes, and access rules."
  },
  {
    title: "Invoices & Receipts",
    desc: "Customers can have access to billing records, invoices, receipts, and transaction history based on the product requirements."
  },
  {
    title: "Feature Gating",
    desc: "Subscription plans can control which features, limits, integrations, or usage levels are available to customers."
  },
  {
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
            SaaS Subscription Billing &amp; <span className="italic text-frame-accent">Monetization.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Billing is part of the product architecture, not simply a payment form added to the final screen. We structure subscription plans, gateways, usage metering, and automated lifecycle webhooks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {billingItems.map((item, idx) => (
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
