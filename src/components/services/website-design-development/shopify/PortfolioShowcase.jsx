'use client'

import React from 'react'
import { Check } from 'lucide-react'

const portfolioShowcase = [
  {
    title: 'Custom Shopify Stores',
    desc: 'Brand-focused storefronts built around specific product catalogs, customer journeys, and conversion goals.',
  },
  {
    title: 'Shopify Online Store 2.0 Builds',
    desc: 'Flexible themes with reusable sections, blocks, structured content, and merchant-friendly editing.',
  },
  {
    title: 'Shopify Plus & B2B Stores',
    desc: 'Stores requiring wholesale workflows, custom pricing, company accounts, multi-market operations, or more advanced Shopify functionality.',
  },
  {
    title: 'Shopify Integrations',
    desc: 'Projects connecting Shopify with ERP, CRM, inventory, payment, shipping, marketing, analytics, or other business systems.',
  },
  {
    title: 'Shopify Migration Projects',
    desc: 'Stores moved from WooCommerce, Magento, BigCommerce, Wix, or another platform while preserving important data, URLs, content, and functionality.',
  },
]

const caseStudyIncludes = [
  'Business or industry',
  'Shopify plan where relevant',
  'Project scope',
  'Catalog structure',
  'Theme or frontend approach',
  'Apps and integrations',
  'Custom development',
  'What Framecipher delivered',
  'Verified performance or business outcomes where available',
]

export default function PortfolioShowcase() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What We Showcase in Our{' '}
            <span className="italic text-frame-accent">Shopify Portfolio.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Real implementations provide a better picture of Shopify expertise than a technology list alone. Our portfolio demonstrates the ecommerce problem, the Shopify architecture, and the work delivered.
          </p>
        </div>

        {/* 5-Category Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {portfolioShowcase.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Standards Box */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            What Each Case Study Includes
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {caseStudyIncludes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400 border-t border-white/[0.08] pt-4">
            We only publish measurable results that can be supported by project data.
          </p>
        </div>
      </div>
    </section>
  )
}
