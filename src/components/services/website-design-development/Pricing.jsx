import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const packages = [
  {
    name: 'Landing Page',
    price: '৳20,000 to ৳40,000',
    description: 'Single-offer campaign page with focused copy and core lead capture.',
    timeline: '1 to 2 weeks',
    features: [
      'Campaign strategy & goal definition',
      'Conversion-focused copy & design',
      'Mobile-first responsive build',
      'Lead capture form setup',
      'Analytics & conversion tracking',
      'Launch support',
    ],
  },
  {
    name: 'Business Website',
    price: '৳50,000 to ৳100,000',
    description: 'Multi-page conversion website with CMS, lead forms, and buyer journey mapping.',
    timeline: '3 to 5 weeks',
    featured: true,
    features: [
      'Buyer-journey site architecture',
      'Custom UI/UX design',
      'CMS-backed page structure',
      'Lead capture & routing forms',
      'On-page SEO foundation',
      'Analytics setup',
      'Revision cycles',
    ],
  },
  {
    name: 'eCommerce Website',
    price: '৳80,000 to ৳180,000+',
    description: 'Online store with bKash/Nagad/Cards checkout, inventory, and logistics.',
    timeline: '6 to 10 weeks',
    features: [
      'Store architecture & catalog setup',
      'Product & UI/UX design',
      'bKash / Nagad checkout integration',
      'International payment gateway',
      'Inventory & order management',
      'Shipping & logistics integration',
      'SEO & product schema setup',
      'Launch support',
    ],
  },
  {
    name: 'Website Redesign',
    price: '৳45,000 to ৳100,000+',
    description: 'Rebuilding underperforming sites while preserving valuable SEO rankings.',
    timeline: '4 to 8 weeks',
    features: [
      'Technical & UX audit',
      'SEO-preserving URL / redirect plan',
      'Visual redesign & responsive rebuild',
      'Content migration',
      'Performance optimization',
      'Testing & launch support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website development{' '}
              <span className="italic text-frame-accent">pricing.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Website design and development pricing depends on the platform, page count, custom functionality required, and whether you need ongoing maintenance included.
          </p>
        </div>

        {/* Modality 2 Architectural Divided Column Band (4-Column Continuum) */}
        <div className="grid grid-cols-1 border border-white/[0.08] rounded-xl bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 ${
                pkg.featured ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
              }`}
            >
              <div>
                <h3 className="font-heading text-xl font-medium text-white">
                  {pkg.name}
                </h3>

                <p className="mt-3 font-heading text-xl sm:text-2xl font-medium text-white">
                  {pkg.price}
                </p>

                <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-400">
                  {pkg.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <ul className="space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs font-normal text-zinc-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
