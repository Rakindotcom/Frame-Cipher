'use client'

import React from 'react'

const appStoreRelease = [
  {
    title: 'Production Build & Signing',
    desc: 'We prepare the release build and work through the required signing, certificates, and provisioning configuration.',
  },
  {
    title: 'App Store Connect Setup',
    desc: 'We assist with app configuration, build management, metadata, screenshots, and other required release information.',
  },
  {
    title: 'TestFlight & Release Tracks',
    desc: 'Pre-release builds can be distributed through TestFlight before moving to the production release.',
  },
  {
    title: 'App Store Submission',
    desc: 'We prepare the production build and submission workflow based on the agreed release scope.',
  },
  {
    title: 'Review Support',
    desc: 'Apple reviews apps and updates submitted to the App Store. We help address technical or submission changes within the agreed project scope.',
  },
  {
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
            App Store Connect &amp;{' '}
            <span className="italic text-frame-accent">iOS Release Support.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Launching an iOS app involves more than uploading a production binary. We guide your app through code signing, privacy declarations, and review workflows.
          </p>
        </div>

        {/* 6 Release Phases Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {appStoreRelease.map((step, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-7 md:p-8 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
