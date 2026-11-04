'use client'

import React from 'react'

const appleEcosystem = [
  {
    title: 'iPhone App Development',
    desc: 'Build the primary mobile experience around modern iPhone screen sizes, touch interactions, supported iOS versions, and your core user journeys.',
  },
  {
    title: 'iPad App Development',
    desc: 'Extend the product to iPad with layouts and interaction patterns designed for larger screens rather than simply stretching the iPhone interface.',
  },
  {
    title: 'Apple Watch Integration',
    desc: 'For suitable products, we can plan companion experiences for quick actions, notifications, tracking, and wearable workflows.',
  },
  {
    title: 'Apple TV & Other Apple Platforms',
    desc: 'When your product needs a broader Apple presence, additional platform experiences can be considered as part of the overall application strategy.',
  },
  {
    title: 'Mac Catalyst',
    desc: 'Existing iPad applications can be evaluated for Mac Catalyst when extending the product to Mac supports your business goals.',
  },
]

export default function AppleEcosystem() {
  return (
    <section id="apple-ecosystem" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Apple Ecosystem{' '}
            <span className="italic text-frame-accent">App Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your product may need more than an iPhone app. We define the Apple-platform scope around your users and the way your product will be used across devices.
          </p>
        </div>

        {/* 5 Platforms Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {appleEcosystem.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#0f1011] p-7 md:p-8 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
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
