'use client'

import React from 'react'
import {
  Compass,
  Layout,
  Smartphone,
  Layers,
  CheckCircle2,
  Rocket,
  Wrench,
  Zap,
} from 'lucide-react'

const iosServices = [
  {
    icon: Compass,
    title: 'Product Strategy & Architecture',
    desc: 'We define your core features, user journeys, technical requirements, integrations, and application structure before development begins.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design for iOS',
    desc: 'We design clear iOS interfaces around user flow, accessibility, responsive layouts, and familiar platform interaction patterns.',
  },
  {
    icon: Smartphone,
    title: 'Native iOS Development',
    desc: 'We develop native applications with Swift, SwiftUI, UIKit, and Apple frameworks based on the needs of your product.',
  },
  {
    icon: Layers,
    title: 'API & Backend Integration',
    desc: 'We connect your iOS application with APIs, databases, authentication systems, payment services, admin panels, and other required platforms.',
  },
  {
    icon: CheckCircle2,
    title: 'Testing & Quality Assurance',
    desc: 'We test application functionality, supported devices, integrations, performance, and critical user journeys before release.',
  },
  {
    icon: Rocket,
    title: 'App Store Launch',
    desc: 'We prepare the production build, TestFlight testing, App Store Connect setup, submission, and technical release workflow.',
  },
  {
    icon: Wrench,
    title: 'iOS App Support & Maintenance',
    desc: 'We continue supporting your application with bug fixes, updates, improvements, new features, and ongoing technical maintenance.',
  },
  {
    icon: Zap,
    title: 'App Performance Optimisation',
    desc: 'We review startup time, memory use, API behaviour, rendering, and other performance-sensitive areas to ensure the app runs smoothly across supported devices.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our iOS App Development Services.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build iOS applications around your business model, users, technical requirements, and long-term goals through an accountable in-house team.
          </p>
        </div>

        {/* 8 Core Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {iosServices.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {svc.desc}
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
