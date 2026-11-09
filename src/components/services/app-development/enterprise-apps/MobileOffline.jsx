'use client'

import React from 'react'
import {
  Users,
  Navigation,
  TrendingUp,
  CheckCircle2,
  Boxes,
  Globe,
  Layout,
  Layers,
  WifiOff,
  Database,
  RefreshCw,
  AlertTriangle,
  RotateCcw,
  Wifi,
} from 'lucide-react'

const mobileOfflineItems = [
  {
    icon: Users,
    title: "Employee Apps",
    desc: "Give employees mobile access to approved tasks, information, notifications, internal services, and selected business workflows."
  },
  {
    icon: Navigation,
    title: "Field Force Apps",
    desc: "Support sales representatives, inspectors, technicians, delivery teams, service staff, and other field workers who need access to business systems while working outside the office."
  },
  {
    icon: TrendingUp,
    title: "Sales & CRM Apps",
    desc: "Allow sales teams to access customer records, manage leads, update activities, review accounts, and complete important sales workflows from mobile devices."
  },
  {
    icon: CheckCircle2,
    title: "Approval Apps",
    desc: "Allow authorized managers to review and approve requests, expenses, documents, purchases, and other workflows from mobile devices."
  },
  {
    icon: Boxes,
    title: "Inventory & Warehouse Apps",
    desc: "Support stock checks, receiving, dispatch, barcode workflows, warehouse activity, and other inventory operations where required."
  },
  {
    icon: Globe,
    title: "Customer Self-Service Apps",
    desc: "Give customers access to approved services such as orders, accounts, documents, support requests, service information, or other business workflows."
  },
  {
    icon: Layout,
    title: "Executive Dashboards",
    desc: "Provide management with mobile access to selected KPIs, reports, alerts, and operational information."
  },
  {
    icon: Layers,
    title: "ERP & Business System Access",
    desc: "Connect mobile workflows with enterprise APIs and backend systems while limiting access to only the functionality required by each user role."
  },
  {
    icon: WifiOff,
    title: "Offline Data Access",
    desc: "Field users can continue selected workflows when a device temporarily loses network connectivity."
  },
  {
    icon: Database,
    title: "Local Data Storage",
    desc: "Store approved information locally so supported tasks can continue without a constant internet connection."
  },
  {
    icon: RefreshCw,
    title: "Sync Queues",
    desc: "Queue changes made while offline and synchronize them with the central system when connectivity returns."
  },
  {
    icon: AlertTriangle,
    title: "Conflict Resolution",
    desc: "Define how conflicting updates are handled when the same information changes from different devices or locations."
  },
  {
    icon: RotateCcw,
    title: "Retry Handling",
    desc: "Recover from temporary network or service failures without forcing users to repeat completed actions."
  },
  {
    icon: Wifi,
    title: "Weak Network Support",
    desc: "Design important mobile workflows for environments where connectivity may be slow, inconsistent, or temporarily unavailable."
  }
]

export default function MobileOffline() {
  return (
    <section id="mobile-offline" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Mobile &amp; Offline Capabilities for Field Teams.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise mobile applications can extend internal systems and business workflows beyond the desktop. We build mobile experiences around the needs of employees, field teams, sales representatives, customers, managers, and other enterprise users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mobileOfflineItems.map((item, idx) => {
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
