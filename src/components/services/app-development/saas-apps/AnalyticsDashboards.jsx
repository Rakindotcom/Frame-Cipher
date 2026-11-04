'use client'

import React from 'react'

const analyticsItems = [
  {
    title: "Product Usage Metrics",
    desc: "Track important events such as sessions, activity, feature usage, transactions, or other product-specific actions."
  },
  {
    title: "Activation Tracking",
    desc: "Measure whether users complete the actions that indicate they have started receiving value from the product."
  },
  {
    title: "Feature Adoption",
    desc: "Understand which features customers use and which features remain underused."
  },
  {
    title: "Retention Tracking",
    desc: "Monitor customer activity over time to identify changes in product engagement."
  },
  {
    title: "Churn Analysis",
    desc: "Track subscription cancellations and customer changes to understand where users leave the product."
  },
  {
    title: "Tenant Usage",
    desc: "View activity by organization, workspace, customer, or plan when customer-level usage data is important."
  },
  {
    title: "Revenue Reporting",
    desc: "Connect subscription and transaction information with dashboards that matter to the SaaS business."
  },
  {
    title: "Subscription Metrics",
    desc: "Track plans, trials, active subscriptions, upgrades, downgrades, cancellations, and other subscription activity."
  },
  {
    title: "Admin Dashboards",
    desc: "Provide internal administrators with tools for customers, users, subscriptions, configuration, support, and system management."
  },
  {
    title: "Custom Reports",
    desc: "Create reporting around the specific operational and commercial metrics your SaaS product needs."
  },
  {
    title: "Customer Health Scoring",
    desc: "Track product activity signals that indicate whether an account is engaged, at risk, or approaching a natural point for expansion."
  },
  {
    title: "Alerting \u0026 Anomaly Detection",
    desc: "Configure alerts for important usage thresholds, error rates, billing events, or business conditions that fall outside expected ranges."
  }
]

export default function AnalyticsDashboards() {
  return (
    <section id="analytics" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Analytics &amp;{' '}
            <span className="italic text-frame-accent">Admin Dashboards.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SaaS products need visibility into both customer behavior and business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {analyticsItems.map((item, idx) => (
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
