'use client'

import React from 'react'
import {
  Eye,
  Languages,
  Globe,
  Layout,
} from 'lucide-react'

const accessibilityLocalization = [
  {
    icon: Eye,
    title: 'Accessible Navigation',
    desc: 'We consider clear navigation, readable content, suitable touch targets, and screen-reader-friendly structures where required.',
  },
  {
    icon: Languages,
    title: 'Text Scaling & Contrast',
    desc: 'Interfaces can be designed to remain usable when users increase text size or need stronger visual contrast.',
  },
  {
    icon: Globe,
    title: 'Bangla & English Support',
    desc: 'For Bangladesh-focused products, interfaces can be prepared for both Bangla and English users.',
  },
  {
    icon: Layout,
    title: 'Multilingual Interfaces',
    desc: 'Additional languages can be planned into the design and development structure for international products.',
  },
]

export default function AccessibilityLocalization() {
  return (
    <section id="accessibility" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Accessibility &amp; Localization for Cross-Platform Apps.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A cross-platform application should work across different users, devices, and markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accessibilityLocalization.map((item, idx) => {
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
