'use client'

import React from 'react'

const techStack = [
  {
    name: 'Shopify Themes & Liquid',
    desc: 'Custom theme development using Shopify\'s Liquid templating language, responsive frontend development, reusable components, and structured theme architecture.',
  },
  {
    name: 'Online Store 2.0',
    desc: 'JSON templates, reusable sections, blocks, section settings, app blocks, and merchant-friendly editing managed directly through the theme editor.',
  },
  {
    name: 'Metafields & Structured Content',
    desc: 'Custom product, collection, and content data used to create flexible storefront experiences and reusable components.',
  },
  {
    name: 'Shopify APIs',
    desc: 'Admin APIs, Storefront API, webhooks, and supported integration methods for connecting Shopify with external business systems.',
  },
  {
    name: 'Shopify Functions',
    desc: 'Custom commerce logic for supported use cases such as discounts, cart validation, delivery customization, fulfillment constraints, and other platform-supported workflows.',
  },
  {
    name: 'Checkout Extensions',
    desc: 'Custom checkout experiences within the capabilities available to the store\'s Shopify plan, including checkout UI extensions on Shopify Plus.',
  },
  {
    name: 'Hydrogen & Headless Commerce',
    desc: 'Custom storefront architecture using Shopify\'s Storefront API and Hydrogen when a traditional theme is not the right frontend approach.',
  },
]

export default function TechStack() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Shopify Technology{' '}
            <span className="italic text-frame-accent">Stack.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Shopify development is more than configuring a theme. The right implementation depends on how the storefront, commerce data, apps, APIs, checkout, integrations, and merchant editing experience work together. Depending on the project, our Shopify development stack can include:
          </p>
        </div>

        {/* 7 Stack Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Stack Layer 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {tech.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Takeaway Card */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 text-sm font-normal leading-relaxed text-zinc-300">
          We select the technology that solves the project requirement instead of adding complexity simply to make the technology stack look more advanced.
        </div>
      </div>
    </section>
  )
}
