import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const costDrivers = [
  'Catalog size and product structure',
  'Custom Magento modules',
  'B2B functionality',
  'Multi-store requirements',
  'ERP, CRM, PIM, or OMS integrations',
  'Payment and shipping integrations',
  'Migration and data transformation',
  'Hyvä or custom storefront development',
  'Performance and infrastructure requirements',
  'Testing and deployment requirements',
]

const packages = [
  {
    name: 'Standard Catalog Build',
    price: '৳250,000',
    timeline: '~6 to 8 weeks',
    description: 'Product volume, catalog structure, theme customization',
    features: [
      'Catalog & store architecture',
      'Custom theme development',
      'Payment integration',
      'Security hardening',
      'Performance optimization',
      'Testing & launch support',
    ],
  },
  {
    name: 'Multi-Store / Multi-Region Build',
    price: '৳400,000',
    timeline: '~8 to 12 weeks',
    description: 'Multiple storefronts, regional requirements, expanded catalog',
    features: [
      'Multiple storefronts setup',
      'Regional pricing & currency',
      'Multi-language content',
      'Expanded catalog architecture',
      'Payment & shipping integrations',
      'Performance optimization',
      'Testing & launch support',
    ],
  },
  {
    name: 'B2B / Wholesale Build',
    price: '৳500,000+',
    timeline: '~10 to 14 weeks',
    description: 'Customer groups, pricing rules, quote workflows, integrations',
    features: [
      'Customer groups & tiered pricing',
      'Quote & requisition workflows',
      'Company accounts & approvals',
      'ERP / CRM / PIM integrations',
      'Custom modules',
      'Security hardening',
      'Testing & launch support',
    ],
  },
  {
    name: 'Enterprise / Custom Integration Build',
    price: 'Custom Quote',
    timeline: '~12 to 16+ weeks',
    description: 'Large-scale integrations, custom modules, infrastructure',
    features: [
      'Large-scale ERP / OMS integrations',
      'Extensive custom module development',
      'Multi-store / multi-region setup',
      'Infrastructure & performance tuning',
      'High-volume catalog handling',
      'Security hardening',
      'Handover documentation',
    ],
  },
]

const includedAtEveryTier = [
  'Strategy & Consultation',
  'Catalog & Store Architecture',
  'Custom Theme Development',
  'Payment Integration',
  'Security Hardening',
  'Performance Optimization',
  'Testing & Launch Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Magento Development Pricing &amp;{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Magento development pricing depends on the architecture and operational complexity of the store rather than product count alone.
          </p>
        </div>

        {/* Cost Drivers List */}
        <div className="mb-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent mb-4 block">
            Common Cost Drivers Include:
          </span>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{driver}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-mono text-2xl md:text-3xl font-semibold text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 border-t border-white/[0.08] pt-4">
                  {pkg.description}
                </p>
                {pkg.features && (
                  <ul className="mt-4 space-y-2.5 text-xs font-normal text-zinc-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={pkg.price === 'Custom Quote' ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  {pkg.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Request Quote'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included At Every Tier Block */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent mb-4 block">
            Included at Every Applicable Tier
          </span>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {includedAtEveryTier.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-sm md:text-base font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm text-zinc-400 border-t border-white/[0.08] pt-4 font-normal">
            Final pricing depends on the confirmed technical scope. Starting prices should be treated as indicative until the project requirements are reviewed.
          </p>
          <div className="mt-6">
            <PosterButton href="/contact" variant="accent">
              Get a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
