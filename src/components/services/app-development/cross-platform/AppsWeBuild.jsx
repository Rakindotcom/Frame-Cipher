'use client'

import React from 'react'
import {
  ShoppingBag,
  Truck,
  Calendar,
  Users,
  Building2,
  CreditCard,
  HeartPulse,
  Cloud,
} from 'lucide-react'

const appsWeBuild = [
  {
    icon: ShoppingBag,
    title: 'E-commerce & Retail Apps',
    desc: 'Build mobile shopping experiences with product discovery, search, customer accounts, carts, checkout, payments, order tracking, and notifications.',
  },
  {
    icon: Truck,
    title: 'Delivery & Logistics Apps',
    desc: 'Connect customers, drivers, delivery teams, and operations through ordering, location tracking, route-related workflows, status updates, and notifications.',
  },
  {
    icon: Calendar,
    title: 'Booking & Service Apps',
    desc: 'Manage appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from mobile devices.',
  },
  {
    icon: Users,
    title: 'Marketplace & On-Demand Apps',
    desc: 'Support customers, vendors, providers, and partners with profiles, listings, search, messaging, transactions, reviews, and service workflows.',
  },
  {
    icon: Building2,
    title: 'Business & Internal Apps',
    desc: 'Create staff, field-force, dealer, vendor, CRM, reporting, approval, and operational applications around your existing business processes.',
  },
  {
    icon: CreditCard,
    title: 'FinTech & Payment Apps',
    desc: 'Build transaction-focused experiences with authentication, account workflows, payment integrations, notifications, and financial data flows based on your product requirements.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Education Apps',
    desc: 'Develop patient, wellness, learning, student, content, scheduling, tracking, and communication experiences for supported business models.',
  },
  {
    icon: Cloud,
    title: 'SaaS & Product Apps',
    desc: 'Extend an existing SaaS platform, website, or digital service into a dedicated mobile experience connected to your existing backend and user accounts.',
  },
]

export default function AppsWeBuild() {
  return (
    <section id="apps-we-build" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform Apps We Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We develop cross-platform apps for customer-facing products, internal business systems, marketplaces, and connected digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {appsWeBuild.map((app, i) => {
            const Icon = app.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {app.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {app.desc}
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
