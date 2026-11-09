'use client'

import React from 'react'
import {
  Palette,
  Smartphone,
  Server,
  ShieldCheck,
  FileCode,
  Check,
} from 'lucide-react'

const deliverables = [
  {
    category: 'Product & UX',
    icon: Palette,
    items: [
      'User flows',
      'Wireframes',
      'UI/UX designs',
      'Interactive prototypes where required',
    ],
  },
  {
    category: 'Application',
    icon: Smartphone,
    items: [
      'Production-ready mobile or web application',
      'Configured features',
      'User workflows',
      'Platform-specific builds where applicable',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    items: [
      'Backend services',
      'Database structure',
      'APIs',
      'Authentication and permissions',
      'Required integrations',
    ],
  },
  {
    category: 'Testing & Release',
    icon: ShieldCheck,
    items: [
      'Tested production build',
      'Release configuration',
      'Store submission support where included',
    ],
  },
  {
    category: 'Handoff & Documentation',
    icon: FileCode,
    items: [
      'Source code',
      'Design files where applicable',
      'Technical documentation',
      'Deployment information',
      'Access and account documentation',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What You Receive From an App Development Project.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The final deliverables depend on the agreed scope, but a typical project can include:
          </p>
        </div>

        {/* Modality 3: Shared 1px Hairline 5-Column Continuum Matrix */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {deliverables.map((del, i) => {
            const Icon = del.icon
            return (
              <div
                key={i}
                className="group flex flex-col justify-between bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium text-white transition-colors">
                    {del.category}
                  </h3>
                  <ul className="mt-5 space-y-2.5 border-t border-white/[0.08] pt-4">
                    {del.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm font-normal text-zinc-200 leading-relaxed"
                      >
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Ownership Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            You own the source code, repositories, design assets, schemas, and deployed accounts produced for your application with zero vendor lock-in.
          </p>
        </div>
      </div>
    </section>
  )
}
