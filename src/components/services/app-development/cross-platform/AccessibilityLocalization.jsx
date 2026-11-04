'use client'

import React from 'react'

const accessibilityLocalization = [
  {
    title: 'Accessible Navigation',
    desc: 'We consider clear navigation, readable content, suitable touch targets, and screen-reader-friendly structures where required.',
  },
  {
    title: 'Text Scaling & Contrast',
    desc: 'Interfaces can be designed to remain usable when users increase text size or need stronger visual contrast.',
  },
  {
    title: 'Bangla & English Support',
    desc: 'For Bangladesh-focused products, interfaces can be prepared for both Bangla and English users.',
  },
  {
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
            Accessibility &amp; Localization for{' '}
            <span className="italic text-frame-accent">Cross-Platform Apps.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A cross-platform application should work across different users, devices, and markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {accessibilityLocalization.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
