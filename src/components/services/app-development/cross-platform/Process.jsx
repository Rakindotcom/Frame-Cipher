'use client'

import React from 'react'
import {
  Search,
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Initial Consultation',
    desc: 'We discuss your app idea, business goals, target users, required features, existing systems, and project priorities.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Strategy & Architecture Planning',
    desc: 'We review the product requirements and define the framework, technical architecture, shared-vs-native approach, integrations, and initial scope.',
  },
  {
    step: '03',
    icon: Code2,
    title: 'Design & Development',
    desc: 'We create the platform-aware interface and develop the approved application with regular review checkpoints.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Testing & Quality Assurance',
    desc: 'We test both platforms independently across the agreed devices, features, integrations, and release conditions.',
  },
  {
    step: '05',
    icon: Rocket,
    title: 'Launch & Dual Store Deployment',
    desc: 'We prepare the production builds, support the required testing and submission workflows, and move both applications toward release.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How We Approach a Cross-Platform App Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A disciplined development approach moving your project from initial discovery through dual-store launch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-2xl font-medium text-purple-400">
                      {item.step}
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
