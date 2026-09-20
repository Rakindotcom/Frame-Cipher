import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    title: 'STORE STRATEGY & ARCHITECTURE',
    tag: 'Track 01',
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
    tag: 'Track 02',
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
    tag: 'Track 03',
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
    tag: 'Track 04',
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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities / Specialized Engineering" title="Our Ecommerce Website Development Services" index="03">
          We offer end-to-end store development tailored to your catalog size and platform.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-5">
                  <span className="text-xs font-black uppercase tracking-widest text-frame-accent">What We Do</span>
                  <ul className="mt-3 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-frame-border/60 pt-5">
                <p className="text-xs font-medium italic leading-relaxed text-frame-muted-fg mb-4">
                  {service.takeaway}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}