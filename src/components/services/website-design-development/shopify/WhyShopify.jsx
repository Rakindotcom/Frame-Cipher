'use client'

import React from 'react'

const whyShopifyBenefits = [
  {
    title: 'Managed Ecommerce Infrastructure',
    desc: 'Shopify manages much of the underlying platform infrastructure, allowing merchants to focus more on products, customers, merchandising, and ecommerce operations.',
  },
  {
    title: 'Merchant-Friendly Store Management',
    desc: 'Online Store 2.0 gives merchants flexible sections, blocks, templates, and dynamic sources that make many routine storefront changes easier to manage without code.',
  },
  {
    title: 'Large App & Integration Ecosystem',
    desc: 'Shopify can connect with a wide range of business tools and can be extended through apps, APIs, app extensions, and custom development.',
  },
  {
    title: 'International Selling',
    desc: 'Shopify Markets supports market-specific experiences involving currencies, languages, pricing, products, domains, and other regional settings.',
  },
  {
    title: 'B2B Ecommerce',
    desc: 'Shopify provides native B2B functionality for supported plans, including company structures, catalogs, pricing, payment terms, and wholesale workflows. Additional capabilities are available through Shopify Plus.',
  },
  {
    title: 'Room for Custom Development',
    desc: 'When native Shopify features or standard apps are not enough, stores can be extended through custom apps, APIs, Functions, theme extensions, and custom storefronts.',
  },
]

export default function WhyShopify() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Why Shopify Works for{' '}
            <span className="italic text-frame-accent">Modern Ecommerce.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Shopify is useful for businesses that want managed ecommerce infrastructure without taking responsibility for traditional server management, while still having room for customization through themes, apps, APIs, and supported development tools.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {whyShopifyBenefits.map((item, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between gap-6 p-7 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] lg:flex-row lg:items-start lg:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent block mb-2">
                  Benefit 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs sm:text-sm italic text-zinc-400">
          Shopify works best when its managed infrastructure and extensibility match the way your business operates.
        </p>
      </div>
    </section>
  )
}
