'use client'

import React from 'react'
import { Check } from 'lucide-react'

const bangladeshShopifyPoints = [
  'Local payment-provider availability',
  'Mobile-first shopping behavior',
  'Local shipping and fulfillment requirements',
  'Bangla-English content where relevant',
]

const internationalShopifyPoints = [
  'Store structure per market and segment',
  'Currencies, languages, and localized domains',
  'Content and integrations matched to each country',
  'International reach across the US, UK, Australia, Canada & UAE',
]

export default function Markets() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Shopify Development for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; Global Businesses.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher is based in Dhaka, Bangladesh, and builds Shopify stores for businesses across Bangladesh as well as international markets.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Domestic Merchant Focus */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-4 font-heading text-2xl font-medium text-white">
                For Bangladesh-Based Merchants
              </h3>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                For Bangladesh-based merchants, we consider local payment-provider availability, mobile-first shopping behavior, local shipping and fulfillment requirements, and Bangla-English content where relevant:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {bangladeshShopifyPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-white/[0.08] pt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Shopify&apos;s payment-provider availability varies by merchant location. Shopify Payments is currently available only in Shopify&apos;s listed supported countries, and Bangladesh is not currently listed among those supported locations. Businesses in unsupported countries need to use an available third-party payment provider. For Bangladesh-based businesses, we evaluate currently available third-party payment options and configure the appropriate provider or integration based on the merchant&apos;s location, customers, and business requirements.
            </div>
          </div>

          {/* Worldwide Reach */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.14]">
            <div>
              <h3 className="mt-4 font-heading text-2xl font-medium text-white">
                For International Businesses
              </h3>
              <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                For international businesses, we adapt the store structure, markets, currencies, languages, domains, content, and integrations around the countries and customer segments being served:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {internationalShopifyPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-white/[0.08] pt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We plan international expansion around the actual countries and customer segments you serve rather than creating duplicate storefronts without a clear operational reason.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
