'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const costDrivers = [
  'Theme customization or custom theme development',
  'Online Store 2.0 architecture',
  'Product and collection structure',
  'App configuration and integration requirements',
  'Custom app development',
  'Shopify Plus or B2B requirements',
  'Migration and data transformation',
  'Multi-market or multi-language setup',
  'Headless development',
  'ERP, CRM, inventory, payment, or shipping integrations',
  'Performance and conversion requirements',
]

const packages = [
  {
    name: 'Starter Store',
    price: '৳45,000',
    description: 'Up to 50 products, customized existing theme',
    timeline: '~1 to 2 weeks',
    featured: false,
    features: [
      'Existing theme customization',
      'Store architecture & setup',
      'Product & collection structure',
      'Payment integration setup',
      'On-page SEO & product schema',
      'Launch support',
    ],
  },
  {
    name: 'Custom Theme Build',
    price: '৳85,000',
    description: 'Fully custom theme, up to 300 products, standard app integrations',
    timeline: '~3 to 4 weeks',
    featured: true,
    features: [
      'Fully custom theme development',
      'Advanced store architecture',
      'Product & collection structure',
      'Payment integration setup',
      'Standard app integrations',
      'On-page SEO & product schema',
      'Launch support',
    ],
  },
  {
    name: 'Growth Store',
    price: '৳140,000',
    description: 'Larger catalog, multiple integrations, conversion optimization',
    timeline: '~4 to 6 weeks',
    featured: false,
    features: [
      'Custom theme development',
      'Larger catalog & collections',
      'Multiple app / API integrations',
      'Payment & shipping integrations',
      'Conversion optimization',
      'On-page SEO & product schema',
      'Launch support',
    ],
  },
  {
    name: 'Shopify Plus / Custom App Build',
    price: 'Custom Quote',
    description: 'High-volume catalogs, custom API development, advanced integrations',
    timeline: '~6 to 10+ weeks',
    featured: false,
    features: [
      'High-volume catalog architecture',
      'Custom app / API development',
      'Advanced integrations (ERP / CRM / OMS)',
      'B2B / wholesale functionality',
      'Multi-market & multi-language',
      'Performance & scale optimization',
      'Handover documentation',
    ],
  },
]

const inclusions = [
  'Strategy & Consultation',
  'Store Architecture',
  'Theme Customization / Development',
  'Payment Integration Setup',
  'On-Page SEO & Product Schema',
  'Launch Support',
]

const merchantEditingTopics = [
  'Editing homepage sections',
  'Updating product information',
  'Managing collections',
  'Updating images and content',
  'Editing navigation',
  'Managing blog content',
  'Working with metafields',
  'Managing basic theme sections',
  'Reviewing orders and customer information',
]

const postLaunchSupportItems = [
  'Theme updates',
  'App and integration checks',
  'Performance reviews',
  'Technical troubleshooting',
  'Minor feature changes',
  'Catalog and content updates',
  'SEO-related technical updates',
  'Analytics and tracking updates',
  'Ongoing storefront improvements',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION 1: PRICING & TIMELINE */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Shopify Development{' '}
            <span className="italic text-frame-accent">Pricing &amp; Timeline.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Shopify development pricing depends on how much of the store needs to be customized rather than product count alone.
          </p>
        </div>

        {/* Common Cost Drivers */}
        <div className="mb-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-medium text-white">
            Common Cost Drivers Include:
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <span className="text-frame-accent font-bold">&bull;</span>
                <span>{driver}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400 border-t border-white/[0.08] pt-4">
            A store using an existing theme and standard functionality can usually move faster than a fully custom storefront with integrations, migration work, or advanced Shopify features.
          </p>
        </div>

        {/* 4 Package Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent/50 bg-[#121214] shadow-[0_0_24px_rgba(168,85,247,0.08)]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                    Most Requested
                  </span>
                )}
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-mono text-3xl font-medium text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                {pkg.description && (
                  <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 border-t border-white/[0.08] pt-4">
                    {pkg.description}
                  </p>
                )}
                {pkg.features && (
                  <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
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
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included at Every Applicable Tier */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <h3 className="font-heading text-lg font-medium text-white">
            Included at Every Applicable Tier:
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {inclusions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400">
            Final pricing and timeline should be confirmed after the technical scope, content requirements, integrations, and Shopify plan requirements are reviewed.
          </p>
        </div>

        {/* SECTION 2: SHOPIFY STORE HANDOVER & TRAINING */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Shopify Store Handover &amp;{' '}
              <span className="italic text-frame-accent">Training.</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Your Shopify store should remain manageable after development is complete. We provide the agreed access, configuration details, and basic guidance needed for your team to operate the store without depending on a developer for every routine change.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* 01 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  Merchant Editing
                </h3>
                <p className="mt-3 text-xs text-zinc-400">
                  Depending on the project, we can guide your team through:
                </p>
                <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                  {merchantEditingTopics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">&bull;</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 02 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  App &amp; Integration Handover
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  We document the important apps, integrations, accounts, and configuration decisions included within the agreed project scope.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  Practical Training
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  Training focuses on the Shopify features your team will actually use rather than overwhelming you with unnecessary technical details.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  Documentation &amp; Ownership
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  Where included in the project scope, we provide basic documentation covering routine store management, important access details, and agreed post-launch procedures. The exact access, documentation, account ownership, licenses, and training provided depend on the project agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: POST-LAUNCH SUPPORT & WARRANTY */}
        <div className="mt-20 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Post-Launch Support &amp; Warranty
            </h2>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Launching a Shopify store is only one part of the project. Ongoing maintenance helps keep the storefront stable, compatible, and aligned with changing business requirements.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-heading text-lg font-medium text-white mb-4">
              Post-Launch Support Can Include:
            </h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
              {postLaunchSupportItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-200"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6">
            <h3 className="font-heading text-lg font-medium text-white mb-3">
              Warranty &amp; Workmanship
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Any post-launch warranty or workmanship coverage should follow the exact terms agreed in the project contract.
              </p>
              <p>
                We do not guarantee a specific sales volume, revenue figure, traffic level, or conversion rate from the website alone. Ecommerce results also depend on products, pricing, traffic, competition, customer demand, and marketing.
              </p>
              <p className="font-medium text-white">
                Our responsibility is to deliver the agreed Shopify implementation, functionality, integrations, and technical work according to the approved project scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
