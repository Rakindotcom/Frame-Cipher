import { Check } from 'lucide-react'
import Link from 'next/link'

const coreServices = [
  {
    title: 'STORE STRATEGY & ARCHITECTURE',
    tag: '01',
    description: 'Every store starts with a plan built around your catalog and buyer journey, not a generic template layout.',
    bullets: [
      'Catalog Structure Planning: Category and product hierarchy built for how customers actually browse.',
      'Buyer Journey Mapping: From product discovery to checkout, with friction points identified upfront.',
      'Competitor Review: Identifying what\'s missing from stores you\'re up against.',
      'Platform Selection: Recommending Shopify, WooCommerce, or Magento based on your catalog size and needs.',
    ],
    takeaway: 'Good architecture means shoppers find products without frustration and complete checkout without abandoning the cart.',
    link: '/contact',
  },
  {
    title: 'PRODUCT & UI/UX DESIGN',
    tag: '02',
    description: 'Store design that looks professional while guiding shoppers toward checkout, not just browsing.',
    bullets: [
      'Product Page Design: Layouts built to convert clear pricing, imagery, and calls-to-action.',
      'Category Page Design: Structured for both browsing and search-friendly navigation.',
      'Conversion-Focused Checkout: Minimizing steps and friction at the point of purchase.',
      'Mobile-First Design: Built for the device most shoppers actually use to buy.',
    ],
    takeaway: 'Design here isn\'t decoration; every layout choice is tied to reducing cart abandonment.',
    link: '/services/website-design-development/ui-ux-design',
  },
  {
    title: 'DEVELOPMENT & PAYMENT INTEGRATION',
    tag: '03',
    description: 'The technical build that connects your store to the payment and logistics tools you actually need.',
    bullets: [
      'Platform Development: Shopify, WooCommerce, or Magento builds matched to your catalog complexity.',
      'Payment Gateway Integration: Including bKash and Nagad compatibility for Bangladeshi merchants, alongside international gateways.',
      'Inventory & Order Management Setup: Connecting your store to how you actually track stock and fulfill orders.',
      'Third-Party Integrations: Shipping calculators, review plugins, or marketing tools as needed.',
    ],
    takeaway: 'A store that doesn\'t support how your customers actually want to pay is a store that loses sales at checkout.',
    link: '/contact',
  },
  {
    title: 'TECHNICAL PERFORMANCE & SCHEMA',
    tag: '04',
    description: 'Speed and structured data that keep shoppers on the page and help products surface in search.',
    bullets: [
      'Speed Optimization: Fast load times across large product catalogs.',
      'Product Schema Markup: Structured data for price, availability, and review rich results.',
      'Duplicate Content Fixes: Handling variant-heavy product pages correctly.',
      'Mobile Responsiveness: Full store functionality on every screen size.',
    ],
    takeaway: 'Technical performance is invisible when it works and directly costs sales when it doesn\'t.',
    link: '/contact',
  },
]

export default function Offerings() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our E-commerce Website{' '}
            <span className="italic text-frame-accent">Development Services.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            We offer end-to-end store development tailored to your catalog size and platform.
          </p>
        </div>

        {/* 2-Column Architectural Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-8"
            >
              <div>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    What We Do
                  </span>
                  <ul className="mt-3 space-y-2.5 text-sm text-zinc-300">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-5">
                <p className="text-xs italic leading-relaxed text-zinc-400 mb-4">
                  &ldquo;{service.takeaway}&rdquo;
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
                >
                  <span>Learn More</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
