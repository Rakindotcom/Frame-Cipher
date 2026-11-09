'use client'

import React from 'react'
import { Compass, Layout, Smartphone, Eye } from 'lucide-react'

const uiUxPoints = [
  {
    icon: Compass,
    title: 'Apple Human Interface Guidelines',
    desc: "We use established iOS interface patterns where they improve usability while keeping the product's own brand identity.",
  },
  {
    icon: Layout,
    title: 'User Flows & Interaction Design',
    desc: 'We map key journeys before visual design so the interface supports the actual task a user needs to complete.',
  },
  {
    icon: Smartphone,
    title: 'Responsive iPhone & iPad Layouts',
    desc: 'Layouts are adapted to the supported screen sizes and device requirements instead of relying on one fixed design.',
  },
  {
    icon: Eye,
    title: 'Prototyping & Usability',
    desc: 'Interactive prototypes help validate important flows before development and reduce avoidable design changes later.',
  },
]

export default function UiUxDesign() {
  return (
    <section id="ui-ux-design" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            UI/UX Design for iOS.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We design your application around how iOS users move through tasks, screens, and actions, ensuring natural fluid transitions and tactile responsiveness.
          </p>
        </div>

        {/* 4 UX Focus Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uiUxPoints.map((item, i) => {
            const Icon = item.icon
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
