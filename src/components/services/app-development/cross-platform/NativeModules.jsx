'use client'

import React from 'react'

const nativeModulePillars = [
  {
    title: 'iOS Native Modules',
    desc: 'Selected features can use native iOS technologies when deeper access to Apple APIs, device capabilities, or platform-specific behavior is required.',
  },
  {
    title: 'Android Native Modules',
    desc: 'The same approach can be used for Android-specific functionality that requires direct access to Android APIs or device capabilities.',
  },
  {
    title: 'Device & Hardware Features',
    desc: 'Camera, Bluetooth, biometrics, location, sensors, notifications, background functionality, and other device features may require platform-aware implementation.',
  },
  {
    title: 'Platform-Specific Business Logic',
    desc: 'Some workflows may need different behavior on Android and iOS because the platforms expose different capabilities or follow different interaction patterns.',
  },
  {
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
            Shared Code &amp;{' '}
            <span className="italic text-frame-accent">Native Module Integration.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Cross-platform does not mean every part of the application must be identical on both operating systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {nativeModulePillars.map((item, idx) => (
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
