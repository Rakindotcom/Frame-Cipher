'use client'

import React from 'react'

const webMobileItems = [
  {
    title: "SaaS Web Applications",
    desc: "Build browser-based experiences for customer accounts, dashboards, workspaces, workflows, billing, and administration."
  },
  {
    title: "iOS SaaS Apps",
    desc: "Extend suitable SaaS products to iPhone and iPad with dedicated mobile experiences connected to the same backend."
  },
  {
    title: "Android SaaS Apps",
    desc: "Provide Android access for customers, field teams, employees, or other mobile users."
  },
  {
    title: "Cross-Platform SaaS Apps",
    desc: "Use Flutter or React Native when a shared mobile development approach fits the product."
  },
  {
    title: "Shared Backend & Authentication",
    desc: "Web and mobile applications can connect to the same APIs, accounts, permissions, billing records, and business data."
  },
  {
    title: "Unified Customer Experience",
    desc: "Customers should be able to move between supported platforms without creating disconnected accounts or inconsistent workflows."
  }
]

export default function WebMobileDevelopment() {
  return (
    <section id="web-mobile" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Web &amp;{' '}
            <span className="italic text-frame-accent">Mobile App Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Your SaaS product may need to serve customers across more than one interface.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {webMobileItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title || item.category || item.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
