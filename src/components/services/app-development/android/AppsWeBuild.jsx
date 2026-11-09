'use client'

import React from 'react'
import {
  ShoppingBag,
  Truck,
  CalendarCheck,
  Building2,
  Users,
  Smartphone,
  Cloud,
  ShieldCheck,
} from 'lucide-react'

const appsWeBuild = [
  {
    num: '01',
    title: 'Ecommerce & Retail Apps',
    desc: 'Android shopping apps for product discovery, categories, search, cart, checkout, payments, order tracking, accounts, and customer communication.',
    icon: ShoppingBag,
  },
  {
    num: '02',
    title: 'Delivery & Logistics Apps',
    desc: 'Applications for customers, drivers, dispatch teams, order tracking, location services, delivery status, and operational workflows.',
    icon: Truck,
  },
  {
    num: '03',
    title: 'Booking & Service Apps',
    desc: 'Apps for appointments, reservations, schedules, availability, reminders, service selection, and customer management.',
    icon: CalendarCheck,
  },
  {
    num: '04',
    title: 'Business & Internal Apps',
    desc: 'Custom tools for staff workflows, inventory, reporting, approvals, field operations, CRM processes, and internal coordination.',
    icon: Building2,
  },
  {
    num: '05',
    title: 'Marketplace & On-Demand Apps',
    desc: 'Multi-user applications connecting customers with sellers, service providers, professionals, drivers, or other participant groups.',
    icon: Users,
  },
  {
    num: '06',
    title: 'Customer & Companion Apps',
    desc: 'Dedicated Android experiences for customer accounts, service management, subscriptions, support, notifications, and connected business platforms.',
    icon: Smartphone,
  },
  {
    num: '07',
    title: 'SaaS & Product Apps',
    desc: 'Android applications that extend a SaaS or web product with mobile access to dashboards, workflows, notifications, approvals, and account features.',
    icon: Cloud,
  },
  {
    num: '08',
    title: 'Enterprise Android Apps',
    desc: 'Custom applications for organizations with complex permissions, operational workflows, integrations, and security requirements.',
    icon: ShieldCheck,
  },
]

export default function AppsWeBuild() {
  return (
    <section
      id="apps-we-build"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android Apps We Build
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Different Android products require different user flows, features, and technical approaches. We build around the business use case rather than applying the same application structure to every project.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {appsWeBuild.map((app, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-[#121214] p-8 transition-colors duration-200 hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                  {app.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600 transition-transform duration-300 group-hover:scale-110">
                  <app.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-lg font-medium tracking-tight text-white">
                {app.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
