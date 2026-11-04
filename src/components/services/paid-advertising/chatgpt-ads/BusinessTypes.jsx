'use client'

import React from 'react'
import { ShoppingBag, Cpu, Briefcase, MapPin, CheckCircle2 } from 'lucide-react'

const businessTypes = [
  {
    title: 'Ecommerce Brands',
    icon: ShoppingBag,
    body: [
      'Ecommerce customers may use conversational tools to compare products, evaluate alternatives, understand features, and narrow down purchase decisions.',
      'For ecommerce brands, we can structure campaigns around:',
    ],
    bullets: [
      'Product categories',
      'Customer needs',
      'Use cases',
      'Product benefits',
      'Comparison-driven intent',
      'Promotional opportunities',
      'Product landing pages',
      'Purchase conversion tracking',
    ],
    tail: 'Where supported, product-feed and catalog-based campaigns can also be evaluated for suitable ecommerce accounts. The ad, product page, pricing information, availability, and checkout experience should remain aligned from impression to purchase.',
  },
  {
    title: 'SaaS & Technology Companies',
    icon: Cpu,
    body: [
      'Software buyers often have longer and more complex decision journeys. A customer may research features, compare platforms, evaluate integrations, explore pricing, or look for a solution to a specific operational problem.',
      'For SaaS and technology campaigns, we can build around:',
    ],
    bullets: [
      'Use cases',
      'Product capabilities',
      'Business problems',
      'Industry needs',
      'Feature comparisons',
      'Demo requests',
      'Free trials',
      'Lead generation',
    ],
    tail: 'The campaign should connect the conversational problem with a clear product solution and a relevant next step.',
  },
  {
    title: 'B2B & Professional Services',
    icon: Briefcase,
    body: [
      'B2B buyers may use ChatGPT during research long before they contact a provider. That creates an opportunity to position a business around the specific problems, services, industries, and outcomes it addresses.',
      'Our approach can include:',
    ],
    bullets: [
      'Lead-focused campaigns',
      'Service-specific ad groups',
      'Industry use cases',
      'Professional service positioning',
      'Consultation landing pages',
      'Lead conversion tracking',
      'Multi-step enquiry journeys',
    ],
    tail: 'The emphasis stays on qualified intent rather than traffic volume alone.',
  },
  {
    title: 'Local & Service Businesses',
    icon: MapPin,
    body: [
      'Local and service businesses often compete around immediate needs. Customers may research providers, compare solutions, check availability, or look for help with a specific problem.',
      'Campaigns can be structured around:',
    ],
    bullets: [
      'Service categories',
      'Customer needs',
      'Geographic areas',
      'Appointment requests',
      'Enquiries',
      'Local landing pages',
    ],
    tail: 'Where location targeting and market availability support the objective, we align campaigns with the locations the business can actually serve.',
  },
]

export default function BusinessTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            ChatGPT Ads Strategy for{' '}
            <span className="italic text-frame-accent">Different Business Types.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            ChatGPT Ads can support different business models, but the campaign structure should reflect how customers in each category research and make decisions.
          </p>
        </div>

        {/* 2x2 Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessTypes.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Category 0{index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-500 group-hover:text-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm md:text-base font-normal leading-relaxed text-zinc-300">
                    {item.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.04] pt-4">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.tail && (
                  <div className="mt-6 border-l-2 border-frame-accent bg-frame-accent/10 p-4 rounded-r-lg text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {item.tail}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
