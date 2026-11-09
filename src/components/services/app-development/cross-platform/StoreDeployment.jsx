'use client'

import React from 'react'
import {
  Upload,
  Smartphone,
  Rocket,
  PlayCircle,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const storeDeploymentPhases = [
  {
    icon: Upload,
    title: 'iOS Release Preparation',
    desc: 'We prepare the iOS build, signing configuration, App Store Connect information, and TestFlight workflow within the agreed scope.',
  },
  {
    icon: Smartphone,
    title: 'Android Release Preparation',
    desc: 'We prepare the Android production build, signing configuration, Play Console information, testing track, and release workflow.',
  },
  {
    icon: Rocket,
    title: 'TestFlight Beta Testing',
    desc: 'iOS builds can be distributed through TestFlight for controlled pre-release testing and feedback.',
  },
  {
    icon: PlayCircle,
    title: 'Google Play Testing',
    desc: 'Android builds can be validated through appropriate Play testing tracks before production release.',
  },
  {
    icon: ShieldCheck,
    title: 'Store Submission',
    desc: 'We prepare the application and relevant release information for both platforms based on the approved project scope.',
  },
  {
    icon: CheckCircle2,
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
            App Store &amp; Google Play Deployment.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A cross-platform application still has two separate store-release processes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {storeDeploymentPhases.map((item, idx) => {
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
