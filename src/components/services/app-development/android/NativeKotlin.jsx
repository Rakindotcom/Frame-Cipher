'use client'

import React from 'react'
import {
  Code2,
  Layers,
  Database,
  Bell,
  Cpu,
  Smartphone,
  CheckCircle2,
} from 'lucide-react'

const nativeKotlinPoints = [
  {
    num: '01',
    title: 'Kotlin Development',
    desc: 'Modern native Android development focused on maintainability, platform compatibility, and the application\'s actual requirements.',
    icon: Code2,
  },
  {
    num: '02',
    title: 'Android SDK Integration',
    desc: 'Using Android platform APIs and services directly for the features and behaviors your application requires.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Local Data & Offline Support',
    desc: 'Supporting local persistence, caching, and synchronization where the product requires offline or low-connectivity workflows.',
    icon: Database,
  },
  {
    num: '04',
    title: 'Push Notification Setup',
    desc: 'Integrating Firebase Cloud Messaging and related notification workflows where applicable.',
    icon: Bell,
  },
  {
    num: '05',
    title: 'Background Processing',
    desc: 'Supporting background tasks and scheduled work where the application\'s functionality requires them.',
    icon: Cpu,
  },
  {
    num: '06',
    title: 'Device & Hardware Integration',
    desc: 'Working with relevant Android features such as camera, GPS, biometrics, Bluetooth, media, and other supported device capabilities.',
    icon: Smartphone,
  },
]

export default function NativeKotlin() {
  return (
    <section
      id="native-kotlin"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Native Android Development With Kotlin
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We build native Android applications in Kotlin when the project requires direct access to Android capabilities, platform-specific behavior, or tighter control over the Android experience.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nativeKotlinPoints.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                  {item.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
