'use client'

import React from 'react'
import {
  Layers,
  Zap,
  Cpu,
  AlertOctagon,
  Wrench,
  CheckCircle2,
} from 'lucide-react'

const whyRealPartner = [
  {
    num: '01',
    title: 'Device Diversity Needs Planning',
    desc: 'Android products can run across different screen sizes, hardware configurations, memory levels, and operating-system versions. Your supported environment should be defined during planning rather than discovered after launch.',
    icon: Layers,
  },
  {
    num: '02',
    title: 'Performance Affects Usability',
    desc: 'Slow startup, heavy screens, excessive network requests, and inefficient background processing can create a poor user experience even when the application technically works.',
    icon: Zap,
  },
  {
    num: '03',
    title: 'Platform Features Need Native Consideration',
    desc: 'Apps that depend on GPS, camera, notifications, biometrics, background tasks, Bluetooth, or other Android capabilities may need platform-specific implementation.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'Errors Need Proper Handling',
    desc: 'Network failures, API errors, expired sessions, payment interruptions, and unavailable services can break important workflows. The application should have clear loading, error, fallback, and recovery states.',
    icon: AlertOctagon,
  },
  {
    num: '05',
    title: 'Android Apps Need Long-Term Maintenance',
    desc: 'Android versions, dependencies, devices, and connected services change over time. A maintainable application makes future updates and feature development easier.',
    icon: Wrench,
  },
]

export default function WhyRealPartner() {
  return (
    <section
      id="why-real-partner"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Why Your Business Needs a{' '}
            <span className="italic text-frame-accent">Real Android Partner.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Android applications need more than functional code. They need to work across the devices, operating systems, network conditions, and user environments relevant to the product.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyRealPartner.map((reason, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {reason.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <reason.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Purpose Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-start gap-4">
          <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
          <p className="font-mono text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">Engineering Principle:</strong> A strong Android development process considers what happens after the app works on the developer&apos;s device.
          </p>
        </div>
      </div>
    </section>
  )
}
