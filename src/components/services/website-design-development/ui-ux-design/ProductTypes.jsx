'use client'

import React from 'react'

const productTypes = [
  {
    title: 'Website UI/UX',
    description: 'We design clear navigation, content hierarchy, responsive layouts, lead-generation flows, and conversion-focused journeys for business and marketing websites.',
  },
  {
    title: 'Mobile App UI/UX',
    description: 'We design mobile-first experiences for onboarding, navigation, account management, notifications, repeated tasks, and other app-specific interactions.',
  },
  {
    title: 'SaaS & Dashboard Design',
    description: 'We design complex interfaces for SaaS products, dashboards, analytics systems, admin panels, and products with multiple users, roles, permissions, and recurring workflows.',
  },
  {
    title: 'Ecommerce UX',
    description: 'We structure product discovery, search, filtering, product pages, cart, checkout, payment, account, and post-purchase experiences around a smoother customer journey.',
  },
  {
    title: 'Web Application & Customer Portal Design',
    description: 'We design booking systems, customer portals, marketplaces, internal tools, client dashboards, and other web applications with more complex interactions.',
  },
  {
    title: 'Landing Page UI/UX',
    description: 'We create focused page structures around a specific goal such as lead generation, product promotion, signup, or campaign conversion.',
  },
]

export default function ProductTypes() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            UI/UX Design for Websites,{' '}
            <span className="italic text-frame-accent">Apps &amp; Digital Products.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different products require different design decisions. We adapt the UX process around what users actually need to accomplish, how often they use the product, and how complex the underlying workflows are.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productTypes.map((prod, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {prod.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {prod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
