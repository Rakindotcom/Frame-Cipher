'use client'

import React from 'react'

const platforms = [
  {
    title: 'WordPress Maintenance',
    description: 'WordPress maintenance can include core, plugin, and theme updates, security checks, malware monitoring, backup verification, performance reviews, and compatibility checks.',
  },
  {
    title: 'WooCommerce Maintenance',
    description: 'WooCommerce stores need additional attention around products, checkout, payments, orders, inventory, shipping, and connected plugins or services.',
  },
  {
    title: 'Shopify Maintenance',
    description: 'Shopify maintenance can include app and theme checks, product and content updates, payment-related monitoring, integration checks, and storefront improvements within the platform.',
  },
  {
    title: 'Wix Maintenance',
    description: 'Wix maintenance can include content updates, responsive checks, forms, bookings, connected apps, ecommerce functions, and ongoing troubleshooting within the Wix environment.',
  },
  {
    title: 'Webflow Maintenance',
    description: 'Webflow maintenance can include CMS content updates, page changes, forms, integrations, responsive adjustments, and ongoing site checks.',
  },
  {
    title: 'Magento Maintenance',
    description: 'Magento stores require more specialized maintenance around platform updates, extensions, security, performance, ecommerce functionality, and integrations.',
  },
  {
    title: 'Custom / Next.js Maintenance',
    description: 'Custom applications need active technical maintenance rather than simple CMS updates. Depending on the application, support can include dependency updates, API monitoring, security improvements, deployment support, performance monitoring, bug fixes, and ongoing feature development.',
  },
]

export default function Offerings() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Platform-Specific{' '}
            <span className="italic text-frame-accent">Website Maintenance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Different platforms have different update cycles, dependencies, security concerns, and maintenance requirements. We tailor ongoing care around the technology your website actually uses.
          </p>
        </div>

        {/* 7 Platforms Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Platform 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {platform.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Strategy Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-zinc-300">
            We do not apply the same checklist to every platform. The maintenance scope is defined around the website&apos;s technology, business importance, integrations, and level of risk.
          </p>
        </div>
      </div>
    </section>
  )
}
