'use client'

import React from 'react'
import {
  Activity,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Building2,
  DollarSign,
  CreditCard,
  Layout,
  FileText,
  HeartPulse,
  Bell,
} from 'lucide-react'

const analyticsItems = [
  {
    icon: Activity,
    title: "Product Usage Metrics",
    desc: "Track important events such as sessions, activity, feature usage, transactions, or other product-specific actions."
  },
  {
    icon: CheckCircle2,
    title: "Activation Tracking",
    desc: "Measure whether users complete the actions that indicate they have started receiving value from the product."
  },
  {
    icon: Sparkles,
    title: "Feature Adoption",
    desc: "Understand which features customers use and which features remain underused."
  },
  {
    icon: TrendingUp,
    title: "Retention Tracking",
    desc: "Monitor customer activity over time to identify changes in product engagement."
  },
  {
    icon: AlertTriangle,
    title: "Churn Analysis",
    desc: "Track subscription cancellations and customer changes to understand where users leave the product."
  },
  {
    icon: Building2,
    title: "Tenant Usage",
    desc: "View activity by organization, workspace, customer, or plan when customer-level usage data is important."
  },
  {
    icon: DollarSign,
    title: "Revenue Reporting",
    desc: "Connect subscription and transaction information with dashboards that matter to the SaaS business."
  },
  {
    icon: CreditCard,
    title: "Subscription Metrics",
    desc: "Track plans, trials, active subscriptions, upgrades, downgrades, cancellations, and other subscription activity."
  },
  {
    icon: Layout,
    title: "Admin Dashboards",
    desc: "Provide internal administrators with tools for customers, users, subscriptions, configuration, support, and system management."
  },
  {
    icon: FileText,
    title: "Custom Reports",
    desc: "Create reporting around the specific operational and commercial metrics your SaaS product needs."
  },
  {
    icon: HeartPulse,
    title: "Customer Health Scoring",
    desc: "Track product activity signals that indicate whether an account is engaged, at risk, or approaching a natural point for expansion."
  },
  {
    icon: Bell,
    title: "Alerting & Anomaly Detection",
    desc: "Configure alerts for important usage thresholds, error rates, billing events, or business conditions that fall outside expected ranges."
  }
]

export default function AnalyticsDashboards() {
  return (
    <section id="analytics" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Analytics &amp; Admin Dashboards.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            SaaS products need visibility into both customer behavior and business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {analyticsItems.map((item, idx) => {
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
