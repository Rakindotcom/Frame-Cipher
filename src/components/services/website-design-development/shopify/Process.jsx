'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your catalog, brand, customer journey, existing store, integrations, payment requirements, target markets, and future plans. We also confirm whether Shopify is the right platform before development begins.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the store structure, collection architecture, app requirements, integrations, payment setup, content requirements, and technical scope.',
  },
  {
    number: '03',
    title: 'UX & Storefront Design',
    description: 'We plan navigation, product experiences, collection pages, mobile layouts, calls to action, and conversion paths around how customers actually shop.',
  },
  {
    number: '04',
    title: 'Shopify Development',
    description: 'We develop the theme, Online Store 2.0 sections, product and collection templates, integrations, apps, custom functionality, and other agreed features.',
  },
  {
    number: '05',
    title: 'Data & Integration Setup',
    description: 'We configure products, collections, payment options, apps, analytics, shipping, customer data, and external integrations according to the project scope.',
  },
  {
    number: '06',
    title: 'Quality, Performance & Checkout Testing',
    description: 'We test responsive layouts, storefront functionality, forms, checkout journeys, integrations, performance, and important user flows across supported devices and browsers.',
  },
  {
    number: '07',
    title: 'Launch & Handoff',
    description: 'We complete final launch checks, confirm the required store functionality, provide the agreed access, and guide your team through routine store management.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Shopify Development{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We keep the process structured so the storefront is built around how your business actually operates.
          </p>
        </div>

        {/* 7 Steps Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors hover:border-white/[0.14]"
            >
              {/* Subtle Watermark Numeral */}
              <span
                className="absolute right-4 top-2 select-none font-mono text-7xl font-light text-white/[0.03] transition-colors group-hover:text-white/[0.06]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium text-white">
                  {step.title}
                </h3>
              </div>

              <p className="relative z-10 mt-6 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
