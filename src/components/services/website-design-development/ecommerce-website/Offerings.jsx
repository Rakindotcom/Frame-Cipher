import { SectionIntro, SectionLabel } from '../../../Kinetic'

const coreServices = [
  {
    title: 'Store Strategy & Architecture',
    tag: 'Track 01',
    description: 'Every store starts with a plan built around your catalog and buyer journey, not a generic template layout.',
    bullets: [
      'Catalog Structure Planning: Hierarchy built for how customers browse.',
      'Buyer Journey Mapping: Identifying checkout friction points upfront.',
      'Competitor Review: Spotting missing capabilities in competitor stores.',
      'Platform Selection: Shopify, WooCommerce, or Magento based on catalog size.',
    ],
  },
  {
    title: 'Product & UI/UX Design',
    tag: 'Track 02',
    description: 'Store design that looks professional while guiding shoppers toward checkout, not just browsing.',
    bullets: [
      'Product Page Design: Clear pricing, high-res imagery, and sticky CTAs.',
      'Category Page Design: Structured for browsing and search-friendly filters.',
      'Conversion-Focused Checkout: Minimizing steps and cart abandonment.',
      'Mobile-First Design: Built for the device shoppers use most to buy.',
    ],
  },
  {
    title: 'Development & Payment Integration',
    tag: 'Track 03',
    description: 'The technical build connecting your store to payment and logistics tools you actually need.',
    bullets: [
      'Platform Development: Clean Shopify, WooCommerce, or Magento architecture.',
      'Payment Gateways: bKash, Nagad, SSLCommerz, plus global gateways.',
      'Inventory & Order Setup: Connecting stock tracking and fulfillment.',
      'Third-Party Integrations: Couriers, shipping calculators, and review plugins.',
    ],
  },
  {
    title: 'Technical Performance & Schema',
    tag: 'Track 04',
    description: 'Speed and structured data that keep shoppers on page and surface products in search results.',
    bullets: [
      'Speed Optimization: Fast load times across large product catalogs.',
      'Product Schema Markup: Rich snippets for prices, ratings, and availability.',
      'Duplicate Content Fixes: Handling variant URLs without SEO penalties.',
      'Mobile Responsiveness: Seamless shopping experience on all screens.',
    ],
  },
]

const storeFeatures = [
  { title: 'Product Catalog & Variations', desc: 'Organize products with attributes, variants, stock status, and related items.' },
  { title: 'Product Search & Filtering', desc: 'Help shoppers find products quickly with relevant search, sorting, and faceted filters.' },
  { title: 'Shopping Cart & Checkout', desc: 'Build a frictionless path with cart management, shipping options, and coupon codes.' },
  { title: 'Customer Accounts & Tracking', desc: 'Allow customers to track orders, save shipping addresses, and review history.' },
  { title: 'Inventory & Order Management', desc: 'Configure stock levels, low-stock warnings, and administrative fulfillment workflows.' },
  { title: 'Promotions & Discounts', desc: 'Support coupon codes, tiered discounts, sale badges, and limited-time campaigns.' },
]

const paymentFeatures = [
  { title: 'Local Payments (bKash & Nagad)', desc: 'Integrated bKash, Nagad, Upay, and SSLCommerz gateways for seamless Bangladeshi checkout.' },
  { title: 'International Payment Gateways', desc: 'Stripe, PayPal, and multi-currency checkouts for stores targeting global shoppers.' },
  { title: 'Cash on Delivery (COD)', desc: 'Complete COD workflows with phone verification, order status rules, and delivery notes.' },
  { title: 'Courier & Logistics Integration', desc: 'Connect supported courier APIs (Pathao, Steadfast, RedX) to automate shipping status.' },
]

const businessModels = [
  { title: 'B2C E-commerce', desc: 'Direct-to-consumer online stores designed around product discovery, promotions, and repeat purchases.' },
  { title: 'B2B E-commerce', desc: 'Account-based pricing, bulk ordering, quote requests, and wholesale approval workflows.' },
  { title: 'Multi-Vendor Marketplaces', desc: 'Platforms where multiple vendors manage products and orders through one central store.' },
  { title: 'Subscription Commerce', desc: 'Recurring billing, memberships, and scheduled product deliveries.' },
  { title: 'Digital Products', desc: 'Instant file delivery, license keys, courses, and non-physical product downloads.' },
  { title: 'Omnichannel Retail', desc: 'Syncing online stores with brick-and-mortar POS systems and physical inventory.' },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Scope of work"
            title="Our Ecommerce Website Development Services"
          >
            We offer end-to-end store development tailored to your catalog size, business model, and platform requirements.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-2">
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
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORE FEATURES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Store Functionality"
            title="E-commerce Features & Operational Management"
          >
            A successful online store needs the features that help customers shop easily and your team manage orders smoothly.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {storeFeatures.map((feat, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <SectionLabel className="mb-2">Feature {String(index + 1).padStart(2, '0')}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENTS & LOGISTICS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Checkout & Delivery"
            title="Payments, Checkout & Logistics Integration"
          >
            Getting a customer to the checkout page is only part of ecommerce. Payment and delivery must work reliably from purchase to doorstep.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
            {paymentFeatures.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS MODELS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Business Models"
            title="E-commerce Solutions for Different Business Models"
          >
            We recommend platform and architecture based on your business model rather than forcing every store into the same setup.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {businessModels.map((model, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
