'use client'

import React from 'react'
import {
  KeyRound,
  Users,
  CreditCard,
  Bell,
  MapPin,
  Camera,
  MessageSquare,
  Activity,
  Building2,
  Layers,
} from 'lucide-react'

const featuresAndIntegrations = [
  {
    icon: KeyRound,
    title: 'User Accounts & Authentication',
    desc: 'Support email and phone login, social sign-in, secure sessions, biometrics, account recovery, and role-based access.',
  },
  {
    icon: Users,
    title: 'User Roles & Permissions',
    desc: 'Create different experiences for customers, employees, vendors, drivers, providers, managers, administrators, and other user types.',
  },
  {
    icon: CreditCard,
    title: 'Payments & Transactions',
    desc: 'Integrate supported payment gateways, subscriptions, checkout workflows, transaction records, and payment-related application logic.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    desc: 'Configure push notifications for both Android and iOS using the appropriate platform services and event flows.',
  },
  {
    icon: MapPin,
    title: 'GPS, Maps & Location',
    desc: 'Build location-aware experiences for delivery, booking, field operations, route tracking, nearby services, and other location-based products.',
  },
  {
    icon: Camera,
    title: 'Camera & Media',
    desc: 'Support camera access, image uploads, document capture, media selection, and other device-based content workflows.',
  },
  {
    icon: MessageSquare,
    title: 'Chat & Real-Time Features',
    desc: 'Build messaging, live status updates, real-time notifications, and other connected functionality where the application requires it.',
  },
  {
    icon: Activity,
    title: 'Analytics & Crash Monitoring',
    desc: 'Connect analytics and crash-monitoring tools to understand application behavior and identify issues after release.',
  },
  {
    icon: Building2,
    title: 'CRM, ERP & Business Systems',
    desc: 'Connect your mobile application with existing CRM, ERP, inventory, accounting, customer support, or internal business systems.',
  },
  {
    icon: Layers,
    title: 'Third-Party API Integration',
    desc: 'Integrate external services for payments, maps, shipping, authentication, communication, analytics, and other required workflows.',
  },
]

export default function FeaturesIntegrations() {
  return (
    <section id="features" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Features &amp; Integrations.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build the application around the workflows, users, and integrations required by your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresAndIntegrations.map((item, idx) => {
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
