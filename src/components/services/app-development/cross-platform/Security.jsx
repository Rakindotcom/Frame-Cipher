'use client'

import React from 'react'
import {
  Lock,
  KeyRound,
  Layers,
  Database,
  CreditCard,
  ShieldCheck,
  GitBranch,
} from 'lucide-react'

const securityPillars = [
  {
    icon: Lock,
    title: 'Secure Authentication',
    desc: 'Implement suitable authentication, session handling, account recovery, and access control based on application requirements.',
  },
  {
    icon: KeyRound,
    title: 'Role-Based Authorization',
    desc: 'Different users should only access the data and features assigned to their roles.',
  },
  {
    icon: Layers,
    title: 'API Security',
    desc: 'We account for authentication, authorization, validation, secure communication, and appropriate backend controls.',
  },
  {
    icon: Database,
    title: 'Secure Data Storage',
    desc: 'Sensitive information is handled using suitable storage and transmission practices for the product.',
  },
  {
    icon: CreditCard,
    title: 'Payment Security',
    desc: 'Payment workflows are implemented around the selected provider and its required security model without storing unnecessary sensitive payment information inside the application.',
  },
  {
    icon: ShieldCheck,
    title: 'Permission Management',
    desc: 'Camera, location, notifications, contacts, Bluetooth, and other permissions are requested based on actual feature requirements.',
  },
  {
    icon: GitBranch,
    title: 'Dependency Maintenance',
    desc: 'Frameworks, plugins, packages, and dependencies need ongoing review as the application evolves and platform versions change.',
  },
]

export default function Security() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Security &amp; Data Protection.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security needs to be considered as part of architecture and application development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((item, idx) => {
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
