'use client'

import React from 'react'
import { Lock, ShieldCheck, Layers, KeyRound, EyeOff } from 'lucide-react'

const securityPillars = [
  {
    icon: Lock,
    title: 'Secure Authentication',
    desc: 'Authentication flows are designed around secure sessions, account recovery, access control, and suitable authentication methods.',
  },
  {
    icon: ShieldCheck,
    title: 'Protected Data',
    desc: "Sensitive information is handled using appropriate storage and transmission practices based on the application's requirements.",
  },
  {
    icon: Layers,
    title: 'API Security',
    desc: 'We account for authenticated endpoints, authorization, validation, secure communication, and backend access controls.',
  },
  {
    icon: KeyRound,
    title: 'Permission Management',
    desc: 'Camera, location, photos, notifications, Bluetooth, and other permissions are requested based on actual product needs.',
  },
  {
    icon: EyeOff,
    title: 'Privacy-Aware Development',
    desc: 'We review what data the app collects and how permissions, disclosures, and user-facing privacy requirements affect the product.',
  },
]

export default function Security() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Security, Privacy &amp; Permissions.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security decisions should be considered during product architecture, not added as a final checklist right before App Store submission.
          </p>
        </div>

        {/* 5 Security Protocols Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((sec, i) => {
            const Icon = sec.icon
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
                    {sec.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {sec.desc}
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
