'use client'

import React from 'react'
import {
  KeyRound,
  Settings,
  Rocket,
  Upload,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const appStoreRelease = [
  {
    icon: KeyRound,
    title: 'Production Build & Signing',
    desc: 'We prepare the release build and work through the required signing, certificates, and provisioning configuration.',
  },
  {
    icon: Settings,
    title: 'App Store Connect Setup',
    desc: 'We assist with app configuration, build management, metadata, screenshots, and other required release information.',
  },
  {
    icon: Rocket,
    title: 'TestFlight & Release Tracks',
    desc: 'Pre-release builds can be distributed through TestFlight before moving to the production release.',
  },
  {
    icon: Upload,
    title: 'App Store Submission',
    desc: 'We prepare the production build and submission workflow based on the agreed release scope.',
  },
  {
    icon: ShieldCheck,
    title: 'Review Support',
    desc: 'Apple reviews apps and updates submitted to the App Store. We help address technical or submission changes within the agreed project scope.',
  },
  {
    icon: CheckCircle2,
    title: 'Release Handoff',
    desc: 'After launch, you receive the relevant project files, documentation, and release information needed for ongoing management.',
  },
]

export default function StoreLaunch() {
  return (
    <section id="store-launch" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Store Connect &amp; iOS Release Support.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Launching an iOS app involves more than uploading a production binary. We guide your app through code signing, privacy declarations, and review workflows.
          </p>
        </div>

        {/* 6 Release Phases Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appStoreRelease.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {step.desc}
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
