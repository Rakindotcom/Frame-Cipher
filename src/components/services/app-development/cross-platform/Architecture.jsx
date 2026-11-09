'use client'

import React from 'react'
import {
  Layers,
  Cpu,
  Database,
  HardDrive,
  Boxes,
  Server,
} from 'lucide-react'

const architecturePillars = [
  {
    icon: Layers,
    title: 'Shared Application Logic',
    desc: 'Common business rules, validation, models, workflows, and reusable application functionality can be structured for both platforms.',
  },
  {
    icon: Cpu,
    title: 'State Management',
    desc: 'We organize application state so screens, sessions, data, and user actions remain predictable as the product grows.',
  },
  {
    icon: Database,
    title: 'API & Data Layer',
    desc: 'Networking, authentication, models, API responses, local data, and error handling are structured separately from the interface where appropriate.',
  },
  {
    icon: HardDrive,
    title: 'Local Storage',
    desc: 'Applications that need local data can use suitable device storage for cached content, preferences, offline workflows, and temporary application state.',
  },
  {
    icon: Boxes,
    title: 'Modular Structure',
    desc: 'Features can be organized into maintainable modules so the application remains easier to extend as the product becomes larger.',
  },
  {
    icon: Server,
    title: 'Scalable Backend Connection',
    desc: 'The mobile architecture is planned around the backend it depends on, including authentication, APIs, file handling, notifications, business logic, and administrative workflows.',
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Architecture.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A reliable cross-platform application should share the right code without forcing every feature into the same implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {architecturePillars.map((item, idx) => {
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
