'use client'

import React from 'react'
import { ShoppingBag, Sparkles, GraduationCap, Smartphone, Users } from 'lucide-react'

const targets = [
  {
    icon: ShoppingBag,
    title: 'Ecommerce & DTC Brands',
    desc: 'Ideal for visual products, fast checkouts, dynamic catalog retargeting, and creator-led unboxing or demonstration videos.',
  },
  {
    icon: Sparkles,
    title: 'Fashion, Beauty & Lifestyle',
    desc: 'Perfect for visual styling transformations, beauty routines, before-and-after demonstrations, and seasonal collections.',
  },
  {
    icon: GraduationCap,
    title: 'Education & Consumer Services',
    desc: 'High-performing for lead generation forms offering free consultations, enrollment guides, or specialized educational programs.',
  },
  {
    icon: Smartphone,
    title: 'Apps & Mobile Games',
    desc: 'Engineered for direct app install campaigns and in-app action optimization utilizing mobile measurement partners (MMPs).',
  },
  {
    icon: Users,
    title: 'High-Growth Consumer Brands',
    desc: 'For brands needing to build high-volume awareness and rapid consideration across Gen Z and Millennial purchasing demographics.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Is TikTok Ads{' '}
            <span className="italic text-frame-accent">Management For?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            TikTok provides unmatched discovery when products have visual proof, strong offers, and native short-form video concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {targets.map((t, idx) => {
            const Icon = t.icon
            return (
              <div
                key={t.title}
                className={`bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2">
                    {t.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {t.desc}
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
