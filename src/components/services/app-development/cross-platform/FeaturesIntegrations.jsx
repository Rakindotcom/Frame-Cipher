'use client'

import React from 'react'

const featuresAndIntegrations = [
  {
    title: 'User Accounts & Authentication',
    desc: 'Support email and phone login, social sign-in, secure sessions, biometrics, account recovery, and role-based access.',
  },
  {
    title: 'User Roles & Permissions',
    desc: 'Create different experiences for customers, employees, vendors, drivers, providers, managers, administrators, and other user types.',
  },
  {
    title: 'Payments & Transactions',
    desc: 'Integrate supported payment gateways, subscriptions, checkout workflows, transaction records, and payment-related application logic.',
  },
  {
    title: 'Push Notifications',
    desc: 'Configure push notifications for both Android and iOS using the appropriate platform services and event flows.',
  },
  {
    title: 'GPS, Maps & Location',
    desc: 'Build location-aware experiences for delivery, booking, field operations, route tracking, nearby services, and other location-based products.',
  },
  {
    title: 'Camera & Media',
    desc: 'Support camera access, image uploads, document capture, media selection, and other device-based content workflows.',
  },
  {
    title: 'Chat & Real-Time Features',
    desc: 'Build messaging, live status updates, real-time notifications, and other connected functionality where the application requires it.',
  },
  {
    title: 'Analytics & Crash Monitoring',
    desc: 'Connect analytics and crash-monitoring tools to understand application behavior and identify issues after release.',
  },
  {
    title: 'CRM, ERP & Business Systems',
    desc: 'Connect your mobile application with existing CRM, ERP, inventory, accounting, customer support, or internal business systems.',
  },
  {
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
            Cross-Platform App Features &amp;{' '}
            <span className="italic text-frame-accent">Integrations.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build the application around the workflows, users, and integrations required by your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuresAndIntegrations.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
