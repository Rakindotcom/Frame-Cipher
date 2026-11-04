'use client'

import React from 'react'

const featuresAndIntegrations = [
  {
    title: 'User Accounts & Authentication',
    desc: 'Support email and phone login, secure sessions, Sign in with Apple, biometric authentication, account recovery, and role-based access.',
  },
  {
    title: 'Notifications & Engagement',
    desc: 'Use push notifications, deep links, widgets, reminders, and other supported iOS capabilities to keep users connected to important updates.',
  },
  {
    title: 'Apple Payments & Monetization',
    desc: 'Depending on your business model, we can plan Apple Pay, in-app purchases, subscriptions, and related payment workflows.',
  },
  {
    title: 'Device & Location Features',
    desc: 'Integrate supported device capabilities such as camera access, photo libraries, GPS, maps, Bluetooth, NFC, and location-based functionality.',
  },
  {
    title: 'Data, Storage & Sync',
    desc: 'Connect your app to APIs, local storage, secure device storage, cloud services, and synchronization workflows based on product requirements.',
  },
  {
    title: 'Health & Specialized Features',
    desc: 'For products that require them, supported Apple frameworks can be used for health, fitness, device, media, or other specialized application features.',
  },
  {
    title: 'Analytics & Crash Monitoring',
    desc: 'Connect analytics and crash-monitoring tools to understand application behavior, identify issues, and improve future releases.',
  },
  {
    title: 'Third-Party Integrations',
    desc: 'Connect to CRMs, payment providers, logistics APIs, communication platforms, and other required services within the iOS application.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS App Features &amp;{' '}
            <span className="italic text-frame-accent">Apple Integrations.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your iOS app can use native Apple capabilities when they improve the user experience or support an important business workflow.
          </p>
        </div>

        {/* 8 Integrations Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {featuresAndIntegrations.map((feat, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {feat.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
