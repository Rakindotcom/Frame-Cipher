'use client'

import React from 'react'

const whyCustomApps = [
  {
    title: 'Direct Customer Experience',
    desc: 'A dedicated application can make recurring actions such as ordering, booking, account management, and communication easier to access.',
  },
  {
    title: 'Business Process Automation',
    desc: 'Custom applications can replace spreadsheets, manual approvals, repeated data entry, and disconnected workflows with structured digital processes.',
  },
  {
    title: 'Access to Device Features',
    desc: 'Mobile applications can use capabilities such as push notifications, GPS, camera, biometrics, and other platform functions where they support the product.',
  },
  {
    title: 'Greater Product Control',
    desc: 'A custom application gives your business more control over workflows, integrations, user experience, and future product development.',
  },
  {
    title: 'Scalable Digital Products',
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
            Why Businesses Build{' '}
            <span className="italic text-frame-accent">Custom Apps.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A custom app can solve problems that a standard website, plugin, or off-the-shelf platform cannot handle efficiently.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows */}
        <div className="divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {whyCustomApps.map((reason, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-4 p-6 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:grid-cols-12 lg:items-baseline lg:gap-8"
            >
              <div className="flex items-baseline gap-4 lg:col-span-5">
                <span className="font-mono text-xs text-frame-accent tabular-nums shrink-0">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-xl font-medium text-white">
                  {reason.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400 lg:col-span-7">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Purpose Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The reason to build an app should be clear before development starts. The technology should support that reason rather than become the reason itself.
          </p>
        </div>
      </div>
    </section>
  )
}
