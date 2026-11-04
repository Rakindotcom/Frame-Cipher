'use client'

import React from 'react'

const appsWeBuild = [
  {
    title: 'E-commerce & Retail Apps',
    desc: 'Build mobile shopping experiences with product discovery, search, customer accounts, carts, checkout, payments, order tracking, and notifications.',
  },
  {
    title: 'Delivery & Logistics Apps',
    desc: 'Connect customers, drivers, delivery teams, and operations through ordering, location tracking, route-related workflows, status updates, and notifications.',
  },
  {
    title: 'Booking & Service Apps',
    desc: 'Manage appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from mobile devices.',
  },
  {
    title: 'Marketplace & On-Demand Apps',
    desc: 'Support customers, vendors, providers, and partners with profiles, listings, search, messaging, transactions, reviews, and service workflows.',
  },
  {
    title: 'Business & Internal Apps',
    desc: 'Create staff, field-force, dealer, vendor, CRM, reporting, approval, and operational applications around your existing business processes.',
  },
  {
    title: 'FinTech & Payment Apps',
    desc: 'Build transaction-focused experiences with authentication, account workflows, payment integrations, notifications, and financial data flows based on your product requirements.',
  },
  {
    title: 'Healthcare & Education Apps',
    desc: 'Develop patient, wellness, learning, student, content, scheduling, tracking, and communication experiences for supported business models.',
  },
  {
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
            Cross-Platform Apps{' '}
            <span className="italic text-frame-accent">We Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We develop cross-platform apps for customer-facing products, internal business systems, marketplaces, and connected digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {appsWeBuild.map((app, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {app.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
