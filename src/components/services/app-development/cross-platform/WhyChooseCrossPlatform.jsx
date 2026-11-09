'use client'

import React from 'react'
import { Layers, Zap, TrendingDown, ShieldCheck, Rocket } from 'lucide-react'

const whyChooseCrossPlatform = [
  {
    icon: Layers,
    title: 'Reach Android & iOS From One Product Build',
    desc: 'A shared codebase can allow common business logic and application features to be developed once and delivered across both platforms.',
  },
  {
    icon: Zap,
    title: 'Faster Product Iteration',
    desc: 'When a large portion of the application is shared, teams can coordinate feature development and updates across Android and iOS without duplicating every implementation.',
  },
  {
    icon: TrendingDown,
    title: 'Lower Duplicate Development Effort',
    desc: 'Shared code can reduce repeated work across business logic, API integration, validation, and other common application components.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistent Product Experience',
    desc: 'A shared foundation can help keep important business rules and core workflows aligned between Android and iOS.',
  },
  {
    icon: Rocket,
    title: 'Easier MVP Validation',
    desc: 'For startups and growing businesses, launching on both platforms from a shared development approach can provide a practical way to validate the product with both audiences.',
  },
]

export default function WhyChooseCrossPlatform() {
  return (
    <section id="why-cross-platform" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Cross-Platform App Development?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Cross-platform development works well when your Android and iOS products share substantial functionality and you want a coordinated approach to development and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseCrossPlatform.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors hover:bg-[#18181B] hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{i + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {reason.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#121214] p-6 sm:p-8 space-y-2 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <h3 className="font-heading text-base sm:text-lg font-medium text-white">
            When Cross-Platform May Not Be the Right Fit
          </h3>
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
            Cross-platform is not automatically the right choice for every product. Apps that rely heavily on specialized hardware, advanced graphics, deeply platform-specific behavior, or highly customized native experiences may benefit more from native development. The right decision depends on the product, not the framework.
          </p>
        </div>
      </div>
    </section>
  )
}
