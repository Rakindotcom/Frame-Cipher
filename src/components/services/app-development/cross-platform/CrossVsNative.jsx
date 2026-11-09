'use client'

import React from 'react'
import {
  Layers,
  Smartphone,
  DollarSign,
  Zap,
  GitMerge,
  Compass,
} from 'lucide-react'

const crossVsNativeTable = [
  { factor: 'Code sharing', cross: 'High for suitable application logic', native: 'Separate platform codebases' },
  { factor: 'Android + iOS', cross: 'One coordinated development approach', native: 'Separate implementations' },
  { factor: 'Development effort', cross: 'Can reduce duplicated work', native: 'More platform-specific work' },
  { factor: 'Platform-specific features', cross: 'Supported with plugins or native modules', native: 'Direct native access' },
  { factor: 'UI approach', cross: 'Shared foundation with platform-aware adjustments', native: 'Fully platform-specific' },
  { factor: 'Maintenance', cross: 'Common code may simplify updates', native: 'Separate platform maintenance' },
  { factor: 'Best fit', cross: 'Products with substantial shared logic', native: 'Products needing deeper platform specialization' },
]

const comparisonCards = [
  {
    icon: Layers,
    title: 'When Cross-Platform Makes Sense',
    desc: 'Cross-platform is often a practical fit when you need both Android and iOS, share substantial business logic, have a controlled feature set, and want a coordinated development approach.',
  },
  {
    icon: Smartphone,
    title: 'When Native Development Makes More Sense',
    desc: 'Native development can be more suitable when your application depends heavily on platform-specific APIs, specialized hardware, advanced graphics, or highly customized platform behavior.',
  },
  {
    icon: DollarSign,
    title: 'Cost, Timeline & Maintenance',
    desc: 'Cross-platform development can reduce duplicated implementation when large parts of the application can be shared. However, total cost still depends on architecture, native modules, backend systems, design complexity, integrations, testing, and ongoing support.',
  },
  {
    icon: Zap,
    title: 'Performance & Platform-Specific Features',
    desc: 'Cross-platform applications can provide strong performance for many business and consumer products. Performance-sensitive or deeply platform-specific features may still require native code to deliver the right result.',
  },
  {
    icon: GitMerge,
    title: 'Hybrid Development: Shared + Native',
    desc: 'A hybrid approach can use shared cross-platform code for the majority of the application while implementing selected features with native iOS or Android technologies.',
  },
  {
    icon: Compass,
    title: 'How We Choose the Right Approach',
    desc: 'We review your target users, features, integrations, device requirements, roadmap, timeline, and budget before recommending a development approach.',
  },
]

export default function CrossVsNative() {
  return (
    <section id="cross-vs-native" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform vs Native App Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The right development model depends on your feature set, platform requirements, budget, timeline, and long-term roadmap.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-[#18181B] font-mono text-xs uppercase tracking-wider text-zinc-300">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-white">Factor</th>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-purple-400">Cross-Platform</th>
                  <th className="p-4 sm:p-5 text-white">Native</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-sans">
                {crossVsNativeTable.map((row, rIdx) => (
                  <tr key={rIdx} className="transition-colors hover:bg-[#18181B]">
                    <td className="p-4 sm:p-5 font-medium text-white border-r border-white/[0.08]">
                      {row.factor}
                    </td>
                    <td className="p-4 sm:p-5 font-normal text-purple-300 border-r border-white/[0.08]">
                      {row.cross}
                    </td>
                    <td className="p-4 sm:p-5 font-normal text-zinc-300">
                      {row.native}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {card.desc}
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
