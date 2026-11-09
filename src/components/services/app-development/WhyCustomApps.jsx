'use client'

import React from 'react'
import {
  HeartHandshake,
  Sliders,
  Smartphone,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

const whyCustomApps = [
  {
    title: 'Direct Customer Experience',
    icon: HeartHandshake,
    desc: 'A dedicated application can make recurring actions such as ordering, booking, account management, and communication easier to access.',
  },
  {
    title: 'Business Process Automation',
    icon: Sliders,
    desc: 'Custom applications can replace spreadsheets, manual approvals, repeated data entry, and disconnected workflows with structured digital processes.',
  },
  {
    title: 'Access to Device Features',
    icon: Smartphone,
    desc: 'Mobile applications can use capabilities such as push notifications, GPS, camera, biometrics, and other platform functions where they support the product.',
  },
  {
    title: 'Greater Product Control',
    icon: ShieldCheck,
    desc: 'A custom application gives your business more control over workflows, integrations, user experience, and future product development.',
  },
  {
    title: 'Scalable Digital Products',
    icon: TrendingUp,
    desc: 'A well-planned application can grow from an MVP into a larger SaaS product, marketplace, customer platform, or business system.',
  },
]

export default function WhyCustomApps() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Businesses Build Custom Apps.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A custom app can solve problems that a standard website, plugin, or off-the-shelf platform cannot handle efficiently.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows */}
        <div className="divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {whyCustomApps.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="group grid grid-cols-1 gap-4 p-6 sm:p-8 transition-colors duration-200 hover:bg-[#18181B] lg:grid-cols-12 lg:items-baseline lg:gap-8"
              >
                <div className="flex items-center gap-4 lg:col-span-5">
                  <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110 shrink-0" />
                  <span className="font-mono text-xs text-purple-600 font-semibold tabular-nums shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white transition-colors">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 lg:col-span-7">
                  {reason.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            A custom app gives your business more control over workflows, integrations, user experience, and future product development.
          </p>
        </div>
      </div>
    </section>
  )
}
