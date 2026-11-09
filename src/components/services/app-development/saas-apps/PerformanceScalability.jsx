'use client'

import React from 'react'
import {
  Layers,
  Database,
  Zap,
  Globe,
  Activity,
  Cloud,
  GitBranch,
  Bell,
  AlertTriangle,
  RefreshCw,
  DollarSign,
  Server,
} from 'lucide-react'

const performanceInfraItems = [
  {
    icon: Layers,
    title: "Horizontal Scaling",
    desc: "Suitable applications can distribute workloads across multiple instances instead of relying on one increasingly overloaded server."
  },
  {
    icon: Database,
    title: "Database Scaling",
    desc: "Database structure, indexing, query performance, connection management, and data growth should be considered from the beginning."
  },
  {
    icon: Zap,
    title: "Caching",
    desc: "Frequently requested data can be cached where appropriate to reduce unnecessary database and processing work."
  },
  {
    icon: Globe,
    title: "CDN & Asset Delivery",
    desc: "Images, files, downloads, and other static assets can use suitable content-distribution infrastructure when required."
  },
  {
    icon: Activity,
    title: "Load Testing",
    desc: "Performance can be tested against representative traffic and data conditions before major launches or planned growth periods."
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    desc: "Development, staging, and production environments can be structured around the application's operational needs."
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    desc: "Automated build, test, and deployment workflows can make controlled product releases easier to manage."
  },
  {
    icon: Bell,
    title: "Monitoring & Alerting",
    desc: "Monitor errors, uptime, infrastructure health, and important system events so problems can be identified earlier."
  },
  {
    icon: AlertTriangle,
    title: "Error Tracking",
    desc: "Centralized error tracking can help the team investigate issues without relying only on customer reports."
  },
  {
    icon: RefreshCw,
    title: "Backup & Recovery",
    desc: "Infrastructure planning can include suitable backup, restoration, and recovery procedures based on the product's risk profile."
  },
  {
    icon: DollarSign,
    title: "Infrastructure Cost Review",
    desc: "Review cloud resource usage to identify over-provisioned or underused components as the product scales and infrastructure spend increases."
  },
  {
    icon: Server,
    title: "Environment Parity",
    desc: "Keep development, staging, and production environments aligned to reduce environment-specific issues and unexpected release surprises."
  }
]

export default function PerformanceScalability() {
  return (
    <section id="scalability" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Performance, Scalability &amp; Cloud Infrastructure.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your infrastructure should support the product you are building today while leaving a clear path for future growth. SaaS infrastructure must handle variable user loads, traffic spikes, database growth, and background processing efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {performanceInfraItems.map((item, idx) => {
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
