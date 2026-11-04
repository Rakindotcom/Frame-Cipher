'use client'

import React from 'react'
import { ShoppingCart, Sparkles, Home, Camera } from 'lucide-react'

const verticals = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce & Product Brands',
    badge: 'Catalog & Shopping',
    desc: 'Ecommerce is a natural fit for Pinterest when products are visual, discoverable, and easy to connect with a specific need or lifestyle.',
    focusPoints: [
      'Visual product discovery in high-intent search feeds',
      'Merchant catalog integration and Product Groups',
      'Dynamic retargeting for cart abandoners and viewers',
      'Product-page direct routing with ROAS-optimized bidding',
    ],
  },
  {
    icon: Sparkles,
    title: 'Fashion, Beauty & Lifestyle',
    badge: 'Aesthetic & Trends',
    desc: 'Fashion, beauty, and lifestyle consumers turn to Pinterest specifically for visual styling ideas, beauty tutorials, and seasonal wardrobes.',
    focusPoints: [
      'Outfit inspiration and seasonal trend collections',
      'Beauty routines, tutorials, and before-and-after imagery',
      'Lifestyle positioning showing products in natural contexts',
      'Carousel and Idea Pins highlighting multiple use cases',
    ],
  },
  {
    icon: Home,
    title: 'Home, Weddings, Food & DIY',
    badge: 'Planning & Milestones',
    desc: 'The heart of Pinterest. Users plan major life events, home renovations, and recipes months before making purchase decisions.',
    focusPoints: [
      'Home decor, furniture, and room makeover showcases',
      'Wedding planning, bridal registries, and event services',
      'Food, recipes, entertaining, and seasonal culinary guides',
      'Search-oriented keyword targeting paired with seasonal timing',
    ],
  },
  {
    icon: Camera,
    title: 'Service & Visually Driven Businesses',
    badge: 'High-Ticket Consideration',
    desc: 'Pinterest is not limited to ecommerce. Service businesses with a strong visual, project-based, or planning component achieve high lead quality.',
    focusPoints: [
      'Interior design studios and architectural practices',
      'Wedding photography, bespoke catering, and event planning',
      'Travel destinations, luxury retreats, and resort packages',
      'Pre-qualification lead gen forms capturing project scope',
    ],
  },
]

export default function BusinessTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Pinterest Ads Strategy for Different{' '}
            <span className="italic text-frame-accent">Business Types.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Pinterest does not fit every business in the same way. We adapt campaign structure, creative formats, and bidding around how customers discover, research, save, and buy in each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div>
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {v.desc}
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-4 space-y-2">
                  {v.focusPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="h-1 w-1 rounded-full bg-frame-accent shrink-0 mt-1.5" />
                      <span className="font-mono text-xs text-zinc-300 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
