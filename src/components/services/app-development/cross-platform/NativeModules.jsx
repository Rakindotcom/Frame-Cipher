'use client'

import React from 'react'
import {
  Smartphone,
  Cpu,
  Layers,
  Sliders,
  GitMerge,
} from 'lucide-react'

const nativeModulePillars = [
  {
    icon: Smartphone,
    title: 'iOS Native Modules',
    desc: 'Selected features can use native iOS technologies when deeper access to Apple APIs, device capabilities, or platform-specific behavior is required.',
  },
  {
    icon: Smartphone,
    title: 'Android Native Modules',
    desc: 'The same approach can be used for Android-specific functionality that requires direct access to Android APIs or device capabilities.',
  },
  {
    icon: Cpu,
    title: 'Device & Hardware Features',
    desc: 'Camera, Bluetooth, biometrics, location, sensors, notifications, background functionality, and other device features may require platform-aware implementation.',
  },
  {
    icon: Sliders,
    title: 'Platform-Specific Business Logic',
    desc: 'Some workflows may need different behavior on Android and iOS because the platforms expose different capabilities or follow different interaction patterns.',
  },
  {
    icon: GitMerge,
    title: 'Native Where Needed, Shared Where Possible',
    desc: 'Our goal is not maximum code sharing at any cost. We share what benefits from sharing and use native implementation when it produces a cleaner and more reliable product.',
  },
]

export default function NativeModules() {
  return (
    <section id="native-modules" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Shared Code &amp; Native Module Integration.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Cross-platform does not mean every part of the application must be identical on both operating systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nativeModulePillars.map((item, idx) => {
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
