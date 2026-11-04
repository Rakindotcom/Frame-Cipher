'use client'

import React from 'react'

const storeDeploymentPhases = [
  {
    title: 'iOS Release Preparation',
    desc: 'We prepare the iOS build, signing configuration, App Store Connect information, and TestFlight workflow within the agreed scope.',
  },
  {
    title: 'Android Release Preparation',
    desc: 'We prepare the Android production build, signing configuration, Play Console information, testing track, and release workflow.',
  },
  {
    title: 'TestFlight Beta Testing',
    desc: 'iOS builds can be distributed through TestFlight for controlled pre-release testing and feedback.',
  },
  {
    title: 'Google Play Testing',
    desc: 'Android builds can be validated through appropriate Play testing tracks before production release.',
  },
  {
    title: 'Store Submission',
    desc: 'We prepare the application and relevant release information for both platforms based on the approved project scope.',
  },
  {
    title: 'Release Handoff',
    desc: 'After deployment, project files, documentation, and relevant release information are handed over for ongoing management.',
  },
]

export default function StoreDeployment() {
  return (
    <section id="deployment" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Store &amp;{' '}
            <span className="italic text-frame-accent">Google Play Deployment.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A cross-platform application still has two separate store-release processes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {storeDeploymentPhases.map((item, idx) => (
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
