'use client'

import React from 'react'

const mobileOfflineItems = [
  {
    title: "Employee Apps",
    desc: "Give employees mobile access to approved tasks, information, notifications, internal services, and selected business workflows."
  },
  {
    title: "Field Force Apps",
    desc: "Support sales representatives, inspectors, technicians, delivery teams, service staff, and other field workers who need access to business systems while working outside the office."
  },
  {
    title: "Sales & CRM Apps",
    desc: "Allow sales teams to access customer records, manage leads, update activities, review accounts, and complete important sales workflows from mobile devices."
  },
  {
    title: "Approval Apps",
    desc: "Allow authorized managers to review and approve requests, expenses, documents, purchases, and other workflows from mobile devices."
  },
  {
    title: "Inventory & Warehouse Apps",
    desc: "Support stock checks, receiving, dispatch, barcode workflows, warehouse activity, and other inventory operations where required."
  },
  {
    title: "Customer Self-Service Apps",
    desc: "Give customers access to approved services such as orders, accounts, documents, support requests, service information, or other business workflows."
  },
  {
    title: "Executive Dashboards",
    desc: "Provide management with mobile access to selected KPIs, reports, alerts, and operational information."
  },
  {
    title: "ERP & Business System Access",
    desc: "Connect mobile workflows with enterprise APIs and backend systems while limiting access to only the functionality required by each user role."
  },
  {
    title: "Offline Data Access",
    desc: "Field users can continue selected workflows when a device temporarily loses network connectivity."
  },
  {
    title: "Local Data Storage",
    desc: "Store approved information locally so supported tasks can continue without a constant internet connection."
  },
  {
    title: "Sync Queues",
    desc: "Queue changes made while offline and synchronize them with the central system when connectivity returns."
  },
  {
    title: "Conflict Resolution",
    desc: "Define how conflicting updates are handled when the same information changes from different devices or locations."
  },
  {
    title: "Retry Handling",
    desc: "Recover from temporary network or service failures without forcing users to repeat completed actions."
  },
  {
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
            Mobile &amp; Offline Capabilities for <span className="italic text-frame-accent">Field Teams.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise mobile applications can extend internal systems and business workflows beyond the desktop. We build mobile experiences around the needs of employees, field teams, sales representatives, customers, managers, and other enterprise users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mobileOfflineItems.map((item, idx) => (
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
