'use client'

import React from 'react'
import {
  Compass,
  Smartphone,
  Database,
  PackageCheck,
  FileText,
  Check,
  CheckCircle2,
} from 'lucide-react'

const deliverables = [
  {
    num: '01',
    category: 'Product & UX',
    icon: Compass,
    items: [
      'User flows',
      'Wireframes',
      'Android UI/UX designs',
      'Interactive prototypes where required',
      'Design system or reusable components where scoped',
    ],
  },
  {
    num: '02',
    category: 'Android Application',
    icon: Smartphone,
    items: [
      'Production-ready Android application',
      'Native Kotlin source code',
      'Configured features',
      'Supported platform functionality',
      'Required integrations',
    ],
  },
  {
    num: '03',
    category: 'Backend & APIs',
    icon: Database,
    items: [
      'API connections',
      'Backend services where scoped',
      'Database integration',
      'Authentication',
      'Required third-party integrations',
    ],
  },
  {
    num: '04',
    category: 'Testing & Release',
    icon: PackageCheck,
    items: [
      'Tested Android build',
      'Production configuration',
      'Release-ready package',
      'Google Play submission support where included',
    ],
  },
  {
    num: '05',
    category: 'Handoff & Documentation',
    icon: FileText,
    items: [
      'Source code',
      'Design files where applicable',
      'Technical documentation',
      'Deployment information',
      'Relevant access and account documentation',
    ],
  },
]

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What You Receive From an Android Project
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The final deliverables depend on the agreed scope, but a typical Android project can include:
          </p>
        </div>

        {/* 5 Deliverables Package Cards */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((del, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between bg-[#121214] p-8 transition-colors duration-200 hover:bg-[#18181B]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                    {del.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                    <del.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                  {del.category}
                </h3>

                <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6 font-sans text-sm text-zinc-300">
                  {del.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-[10px] uppercase text-zinc-500">
                100% Client Ownership
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
