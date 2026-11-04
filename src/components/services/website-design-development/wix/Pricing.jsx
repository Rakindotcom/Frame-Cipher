import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Basic Informational Site',
    price: '৳20,000',
    timeline: '~3 to 5 days',
    description: 'Page count, template customization',
    features: [
      'Template customization',
      'Core page structure',
      'Mobile optimization',
      'On-page SEO setup',
      'Editor handoff & basic training',
      'Launch support',
    ],
  },
  {
    name: 'Custom Business Site',
    price: '৳35,000',
    timeline: '~1 to 2 weeks',
    description: 'Custom design, booking/form setup, app integrations',
    features: [
      'Custom design within Wix editor',
      'Booking / form setup',
      'App integrations',
      'Mobile optimization',
      'On-page SEO setup',
      'Editor handoff & training',
      'Launch support',
    ],
  },
  {
    name: 'Wix Stores (Small Catalog)',
    price: '৳55,000',
    timeline: '~2 to 3 weeks',
    description: 'Product count, payment setup, store-specific design',
    features: [
      'Store-specific design',
      'Product catalog setup',
      'bKash / Nagad & card payment setup',
      'Order & inventory basics',
      'On-page SEO setup',
      'Mobile optimization',
      'Launch support',
    ],
  },
  {
    name: 'Wix Studio / Velo Custom Build',
    price: 'Custom Quote',
    timeline: '~3 to 5 weeks',
    description: 'Custom code requirements, advanced functionality',
    features: [
      'Custom Velo / JavaScript development',
      'Advanced functionality & integrations',
      'CMS & dynamic pages',
      'Custom workflows',
      'Performance optimization',
      'Handover documentation',
    ],
  },
]

const includedAtEveryTier = [
  'Strategy & Consultation',
  'Custom Design Within Wix Editor',
  'Mobile Optimization',
  'On-Page SEO Setup',
  'Editor Handoff & Basic Training',
  'Launch Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Wix Development Pricing and{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Wix development pricing depends primarily on site complexity; a simple informational site costs less than one needing custom design work, bookings, or a small store setup. Pricing typically depends on page count, design customization, and app/integration needs.
          </p>
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
            Included at Every Tier
          </span>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {includedAtEveryTier.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-sm md:text-base font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <PosterButton href="/contact" variant="accent">
              Get a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
