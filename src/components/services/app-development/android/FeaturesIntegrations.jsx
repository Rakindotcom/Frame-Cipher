'use client'

import React from 'react'
import {
  UserCheck,
  Bell,
  CreditCard,
  MapPin,
  Camera,
  Database,
  LayoutDashboard,
  BarChart2,
  Cpu,
} from 'lucide-react'

const featuresAndIntegrations = [
  {
    num: '01',
    title: 'User Accounts & Authentication',
    desc: 'Signup, login, password recovery, profiles, session management, social authentication, and role-based access where required.',
    icon: UserCheck,
  },
  {
    num: '02',
    title: 'Firebase & Push Notifications',
    desc: 'Firebase services can support authentication, cloud messaging, analytics, crash reporting, and other application requirements where appropriate.',
    icon: Bell,
  },
  {
    num: '03',
    title: 'Payments & Subscriptions',
    desc: 'Payment gateways, transaction workflows, recurring billing, refunds, and subscription features based on the selected provider.',
    icon: CreditCard,
  },
  {
    num: '04',
    title: 'Maps, GPS & Location',
    desc: 'Maps, location services, delivery tracking, address selection, distance calculations, and location-based functionality.',
    icon: MapPin,
  },
  {
    num: '05',
    title: 'Camera & Device Features',
    desc: 'Camera access, media selection, biometric authentication, file handling, Bluetooth, and other Android device capabilities where required.',
    icon: Camera,
  },
  {
    num: '06',
    title: 'Offline Storage & Synchronization',
    desc: 'Local storage and synchronization for applications that need useful functionality during limited or unstable connectivity.',
    icon: Database,
  },
  {
    num: '07',
    title: 'Admin Dashboards',
    desc: 'Interfaces for managing users, products, orders, content, reports, transactions, permissions, and settings.',
    icon: LayoutDashboard,
  },
  {
    num: '08',
    title: 'Analytics & Crash Monitoring',
    desc: 'Event tracking, usage information, performance monitoring, and crash reporting where included in the project.',
    icon: BarChart2,
  },
  {
    num: '09',
    title: 'Third-Party Integrations',
    desc: 'Connections with CRMs, payment providers, external APIs, communication services, business software, and other required systems.',
    icon: Cpu,
  },
]

export default function FeaturesIntegrations() {
  return (
    <section
      id="features-integrations"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android App Features &amp;{' '}
            <span className="italic text-frame-accent">Integrations.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The exact functionality depends on the application, but we can build and integrate common Android capabilities required by modern business and consumer products.
          </p>
        </div>

        {/* 9-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {featuresAndIntegrations.map((feat, i) => (
            <div
              key={i}
              className="group bg-[#0f1011] p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {feat.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <feat.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {feat.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
