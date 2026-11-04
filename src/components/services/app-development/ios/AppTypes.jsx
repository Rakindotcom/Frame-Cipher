'use client'

import React from 'react'

const appsWeBuild = [
  {
    title: 'E-commerce & Retail Apps',
    desc: 'Build mobile shopping experiences with product browsing, search, accounts, carts, checkout, payments, order tracking, and customer notifications.',
  },
  {
    title: 'Booking & Service Apps',
    desc: 'Handle appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from one iOS application.',
  },
  {
    title: 'Delivery & On-Demand Apps',
    desc: 'Connect customers, drivers, delivery teams, or service providers through ordering, location tracking, status updates, notifications, and operational workflows.',
  },
  {
    title: 'Business & Internal Apps',
    desc: 'Create internal tools for teams, field staff, sales operations, approvals, reporting, CRM workflows, and business management.',
  },
  {
    title: 'Marketplace & Community Apps',
    desc: 'Support multiple user types with profiles, listings, search, messaging, reviews, transactions, and moderation features.',
  },
  {
    title: 'SaaS & Product Apps',
    desc: 'Extend your existing SaaS product or web platform into a dedicated iOS experience connected to your backend, APIs, and customer accounts.',
  },
  {
    title: 'Education, Health & Lifestyle Apps',
    desc: 'Build learning, fitness, wellness, content, tracking, subscription, and other user-focused mobile products around your business model.',
  },
  {
    title: 'Companion & Connected Apps',
    desc: 'Create iOS companion apps for websites, software platforms, connected devices, wearables, or existing digital services.',
  },
]

export default function AppTypes() {
  return (
    <section id="app-types" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Apps{' '}
            <span className="italic text-frame-accent">We Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We develop iOS apps around the way your customers, employees, or business processes actually work, rather than applying a rigid template.
          </p>
        </div>

        {/* 8 Product Types Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {appsWeBuild.map((app, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {app.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
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
