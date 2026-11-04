'use client'

import React from 'react'

const appCapabilities = [
  {
    title: 'User Accounts & Authentication',
    desc: 'Signup, login, password recovery, profiles, authentication, and role-based access where required.',
  },
  {
    title: 'Push Notifications',
    desc: 'Notifications for orders, bookings, messages, reminders, updates, promotions, and other important events.',
  },
  {
    title: 'Payment & Subscription Integration',
    desc: 'Payment gateways, recurring billing, transaction workflows, refunds, and subscription management where required.',
  },
  {
    title: 'Maps, GPS & Location',
    desc: 'Maps, location services, delivery tracking, distance calculations, and other geographic functionality.',
  },
  {
    title: 'Chat & Communication',
    desc: 'In-app messaging, support workflows, SMS, email, and notification systems where needed.',
  },
  {
    title: 'Admin Dashboards',
    desc: 'Interfaces for managing users, products, orders, content, transactions, reports, permissions, and settings.',
  },
  {
    title: 'Analytics & Monitoring',
    desc: 'Event tracking, usage data, crash monitoring, and performance information where required by the product.',
  },
  {
    title: 'Offline & Data Synchronization',
    desc: 'Offline functionality and synchronization can be designed for applications that need to continue operating during limited connectivity.',
  },
]

export default function Capabilities() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Features &amp;{' '}
            <span className="italic text-frame-accent">Capabilities.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Application features vary by product, user roles, platform, and business requirements. Common capabilities can include:
          </p>
        </div>

        {/* Modality 4: Elevated Surface Card Grid with Top Laser Sheen */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {appCapabilities.map((cap, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {cap.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
