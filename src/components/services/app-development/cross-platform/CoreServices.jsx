'use client'

import React from 'react'
import { Compass, Layout, Smartphone, Rocket, Wrench } from 'lucide-react'

const coreServices = [
  {
    icon: Compass,
    title: 'Framework Strategy & Architecture',
    desc: 'Before development starts, we assess your requirements and decide whether Flutter, React Native, native development, or a hybrid approach fits the product. We map shared business logic, platform-specific functionality, API needs, state management, data flow, and scalability requirements before coding begins.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design for Both Platforms',
    desc: 'We design a consistent product experience while respecting the conventions users expect on Android and iOS. That includes user flows, adaptive layouts, platform-aware navigation, interaction states, prototypes, and interface systems that work across supported devices.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Development: Flutter / React Native',
    desc: 'We build the shared application layer with Flutter or React Native based on the needs of your project. Common business logic, application workflows, API communication, and reusable components can be shared, while platform-specific features can be handled through native modules.',
  },
  {
    icon: Rocket,
    title: 'Testing, Deployment & Dual Store Launch',
    desc: 'We test Android and iOS independently instead of assuming one working build guarantees the other will behave the same way. The release process can include real-device testing, regression checks, TestFlight, Google Play testing, App Store Connect, Play Console, and production deployment.',
  },
  {
    icon: Wrench,
    title: 'Ongoing Support & Maintenance',
    desc: 'After launch, we can continue supporting the application through bug fixes, framework updates, operating-system compatibility work, performance improvements, and new feature development.',
  },
]

export default function CoreServices() {
  return (
    <section id="services" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our Cross-Platform App Development Services.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We build cross-platform applications around your product goals, users, integrations, and long-term roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
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
