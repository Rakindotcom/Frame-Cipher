'use client'

import React from 'react'
import {
  Layers,
  Users,
  UserCheck,
  CreditCard,
  Database,
  Code2,
  Sliders,
  Zap,
  Globe,
} from 'lucide-react'

const systemsIntegration = [
  {
    icon: Layers,
    title: "ERP Integration",
    desc: "Connect applications with ERP platforms for finance, inventory, procurement, operations, and other business workflows."
  },
  {
    icon: Users,
    title: "CRM Integration",
    desc: "Synchronize customers, leads, accounts, sales activities, and service information with existing CRM platforms."
  },
  {
    icon: UserCheck,
    title: "HRMS Integration",
    desc: "Connect employee records, organizational structures, attendance, leave, and other required HR workflows."
  },
  {
    icon: CreditCard,
    title: "Accounting Systems",
    desc: "Exchange financial information with accounting and finance platforms based on the required process."
  },
  {
    icon: Database,
    title: "Legacy Database Integration",
    desc: "Connecting modern applications with existing databases when replacing the underlying system is not practical."
  },
  {
    icon: Code2,
    title: "API Integration",
    desc: "Use secure APIs to connect internal applications, mobile clients, third-party services, and business platforms."
  },
  {
    icon: Sliders,
    title: "Middleware & Integration Layers",
    desc: "Complex environments may benefit from an integration layer that manages routing, transformation, authentication, and communication between systems."
  },
  {
    icon: Zap,
    title: "Real-Time Data Exchange",
    desc: "Where required, systems can exchange information through APIs, events, webhooks, or other appropriate mechanisms."
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    desc: "Integrate approved services for payments, communication, analytics, identity, storage, logistics, or other business needs."
  }
]

export default function SystemsIntegration() {
  return (
    <section id="systems-integration" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise Systems Integration.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            New enterprise software often succeeds or fails based on how well it works with existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systemsIntegration.map((item, idx) => {
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
