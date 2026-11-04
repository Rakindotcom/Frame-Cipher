'use client'

import React from 'react'
import { Check } from 'lucide-react'

const ecommerceChecklist = [
  'Product and category updates',
  'Product image and content changes',
  'Checkout testing',
  'Payment gateway checks',
  'Order-flow monitoring',
  'Inventory and catalog checks',
  'Shipping integration checks',
  'Coupon and promotion functionality',
  'Form and notification checks',
  'Analytics and conversion tracking',
  'Performance monitoring during campaigns and traffic spikes',
  'Plugin, app, theme, or dependency compatibility checks',
]

export default function EcommerceMaintenance() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Ecommerce Website{' '}
            <span className="italic text-frame-accent">Maintenance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An ecommerce website needs more than regular software updates. A small technical issue can affect product discovery, checkout, payments, orders, or customer communication.
          </p>
        </div>

        {/* Surface Card with Checklist */}
        <div className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]">
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white mb-6">
            Our ecommerce maintenance can include:
          </h3>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {ecommerceChecklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-white/[0.08] pt-4 text-xs sm:text-sm italic text-zinc-400">
            For WooCommerce, Shopify, Magento, or another ecommerce platform, the exact maintenance scope depends on the store architecture and connected systems.
          </p>
        </div>
      </div>
    </section>
  )
}
