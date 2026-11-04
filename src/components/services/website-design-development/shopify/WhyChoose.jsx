'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const whyChooseUsPillars = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, ecommerce planning, design, development, integrations, and launch support stay within one coordinated team instead of being divided across unrelated vendors.',
  },
  {
    title: 'Disciplined App Architecture',
    desc: 'We do not install an app simply because one exists for a feature. We evaluate native Shopify capabilities, theme development, apps, APIs, and custom development before choosing the implementation.',
  },
  {
    title: 'Shopify-Specific Development',
    desc: 'Our Shopify work can cover Liquid themes, Online Store 2.0, app integrations, custom apps, APIs, B2B, Shopify Plus, Markets, and advanced storefront functionality where the project requires them.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Shopify when its managed infrastructure and ecommerce capabilities fit the project. When WooCommerce, Magento, or another platform makes more sense, we explain that before development begins.',
  },
  {
    title: 'Bangladesh + International Ecommerce',
    desc: 'We build Shopify stores for Bangladesh-based businesses and international merchants, adapting the store around market, payment, shipping, content, and customer requirements.',
  },
  {
    title: 'SEO & Conversion Built In',
    desc: 'We consider technical SEO, product structure, performance, tracking, navigation, merchandising, and checkout experience during development rather than treating them as separate add-ons.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Architecture, design, development, integrations, and testing move through defined review checkpoints so you can approve the direction before the project moves forward.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (Sticky 5-col) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Why Choose Framecipher for{' '}
                <span className="italic text-frame-accent">Shopify Development.</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                Shopify development is not only about launching a storefront. Theme architecture, ecommerce strategy, app selection, integrations, SEO, performance, and merchant management all affect how useful the store remains after launch.
              </p>

              {/* Stat / Guarantee Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <p className="font-mono text-3xl font-medium text-white">100%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Store &amp; Theme Ownership
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Your theme codebase, configurations, app setups, and store assets are transferred directly to your Shopify organization with zero lock-in.
                </p>
              </div>

              <div>
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
                  Start Your Shopify Build
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Column (7-col): Divided Numbered Editorial Rows */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]">
              {whyChooseUsPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums tracking-wider text-frame-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 pl-8">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
