'use client'

import React from 'react'

const appTypes = [
  {
    title: 'Ecommerce & Retail Apps',
    desc: 'Mobile shopping experiences for product discovery, search, filtering, cart, checkout, payments, orders, accounts, and customer communication.',
  },
  {
    title: 'Booking & Appointment Apps',
    desc: 'Applications for appointments, reservations, schedules, availability, reminders, service selection, and customer management.',
  },
  {
    title: 'Delivery & Logistics Apps',
    desc: 'Apps for delivery tracking, driver workflows, order status, location services, route-related features, and operational coordination.',
  },
  {
    title: 'Marketplace & On-Demand Apps',
    desc: 'Multi-sided platforms that connect customers with sellers, service providers, professionals, drivers, or other user groups.',
  },
  {
    title: 'Internal Business Apps',
    desc: 'Custom software for inventory, staff management, reporting, approvals, field operations, CRM workflows, and internal coordination.',
  },
  {
    title: 'Customer & Service Apps',
    desc: 'Applications for service requests, customer accounts, communication, subscriptions, support, and recurring customer interactions.',
  },
  {
    title: 'SaaS & Web Applications',
    desc: 'Browser-based applications with dashboards, accounts, subscriptions, permissions, workflows, reporting, and other product features.',
  },
  {
    title: 'MVP & Startup Apps',
    desc: 'Focused products designed to validate the core idea with real users before expanding into a larger application.',
  },
]

export default function AppTypes() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Type of App{' '}
            <span className="italic text-frame-accent">Do You Need?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The right application depends on what your users need to accomplish and how your business operates. We build around the use case rather than forcing every project into the same application model.
          </p>
        </div>

        {/* Modality 3: Shared 1px Hairline Continuum Matrix */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {appTypes.map((type, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {type.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {type.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
