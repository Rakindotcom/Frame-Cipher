import Link from 'next/link'
import { SectionLabel, PosterButton } from '../../../Kinetic'

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

const storeFeatures = [
  {
    title: 'Product Catalog & Variations',
    desc: 'Organize products into clear categories with images, pricing, descriptions, attributes, variants, stock status, and related products. The structure is planned around how customers browse and search your catalog.',
  },
  {
    title: 'Product Search & Filtering',
    desc: 'Help shoppers find the right products quickly with relevant search, categories, filters, sorting, and navigation based on your catalog.',
  },
  {
    title: 'Shopping Cart & Checkout',
    desc: 'Build a clear path from product selection to purchase with cart management, shipping options, coupons, order summaries, and a checkout experience designed to reduce unnecessary friction.',
  },
  {
    title: 'Customer Accounts & Order Tracking',
    desc: 'Where required, customers can create accounts, view order history, manage details, and track order progress through the selected ecommerce platform.',
  },
  {
    title: 'Inventory & Order Management',
    desc: 'Configure product stock, variants, low-stock handling, order processing, and administrative workflows around how your business manages inventory and fulfillment.',
  },
  {
    title: 'Promotions & Discounts',
    desc: 'Support promotional pricing, coupon codes, sale campaigns, discount rules, and other ecommerce offers based on the platform and business requirements.',
  },
  {
    title: 'Reviews & Product Content',
    desc: 'Product reviews, ratings, FAQs, related products, and other content elements can help shoppers make more confident purchase decisions.',
  },
  {
    title: 'Analytics & Ecommerce Reporting',
    desc: 'Connect your store with suitable analytics and reporting tools so you can monitor traffic, product performance, customer behavior, and conversion activity.',
  },
]

const paymentFeatures = [
  {
    title: 'Local Payment Methods',
    desc: 'For Bangladeshi merchants, we can configure supported payment methods such as bKash, Nagad, SSLCommerz, cards, and other available options based on the selected platform and gateway.',
  },
  {
    title: 'International Payments',
    desc: 'For stores targeting international customers, we can integrate suitable payment gateways based on the target market, platform, currency requirements, and gateway availability.',
  },
  {
    title: 'Cash on Delivery',
    desc: 'COD workflows can be configured where required, including order status, payment status, delivery information, and other agreed store requirements.',
  },
  {
    title: 'Courier & Delivery Integration',
    desc: 'Where supported, we can connect ecommerce stores with courier or delivery platforms to help manage shipping information, delivery status, and fulfillment workflows.',
  },
  {
    title: 'Shipping Rules & Delivery Zones',
    desc: 'Configure shipping charges, delivery areas, shipping methods, and other rules based on products, locations, order values, or business requirements.',
  },
  {
    title: 'Payment & Order Verification',
    desc: 'Payment status and order information can be connected to your store workflow so your team can process confirmed orders more efficiently.',
  },
]

const seoFoundations = [
  {
    title: 'Product & Category Architecture',
    desc: 'We structure categories, subcategories, product pages, and internal links so shoppers and search engines can understand how products relate to each other.',
  },
  {
    title: 'Product Schema & Rich Results',
    desc: 'Relevant structured data can be implemented for product information such as price, availability, reviews, and other supported attributes.',
  },
  {
    title: 'Canonical URLs & Duplicate Content',
    desc: 'Variant-heavy stores can generate multiple URLs for similar content. We consider canonicalization and URL handling where required to reduce unnecessary duplication.',
  },
  {
    title: 'Faceted Navigation',
    desc: 'Filters and sorting can create large numbers of URL combinations. We consider indexation and crawl behavior when implementing ecommerce filtering.',
  },
  {
    title: 'Sitemap & Indexation',
    desc: 'XML sitemaps, indexing controls, and important technical settings are reviewed as part of the website structure.',
  },
  {
    title: 'Image & Performance Optimization',
    desc: 'Product images are optimized where possible, while responsive layouts and performance considerations help create a faster shopping experience.',
  },
  {
    title: 'Product Feeds & Search Platforms',
    desc: 'Where relevant, we can prepare ecommerce product data for tools such as Google Merchant Center based on your platform and project scope.',
  },
  {
    title: 'Redesign & SEO Preservation',
    desc: 'When rebuilding an existing store, we review existing URLs, valuable product/category content, redirects, rankings, and other SEO assets before changing the structure.',
  },
]

const businessModels = [
  {
    title: 'B2C E-commerce',
    desc: 'Direct-to-consumer stores designed around product discovery, fast checkout, promotions, customer accounts, and repeat purchases.',
  },
  {
    title: 'B2B E-commerce',
    desc: 'Stores for businesses that may need account-based pricing, bulk orders, quote requests, approval workflows, or custom purchasing processes.',
  },
  {
    title: 'Multi-Vendor Marketplaces',
    desc: 'Platforms where multiple sellers manage products and customers purchase from different vendors through one marketplace.',
  },
  {
    title: 'Subscription Commerce',
    desc: 'Stores supporting recurring products, memberships, subscriptions, or scheduled purchases where the selected platform supports the required workflow.',
  },
  {
    title: 'Digital Products',
    desc: 'Online stores for software, courses, downloadable products, memberships, licenses, and other non-physical products.',
  },
  {
    title: 'Omnichannel & Retail Businesses',
    desc: 'Ecommerce websites that need to work alongside physical stores, POS systems, inventory systems, or other sales channels where supported.',
  },
]

const bangladeshEcommercePoints = [
  'bKash, Nagad, and other supported local payment methods',
  'Cash on Delivery workflows',
  'Courier and delivery integrations',
  'WhatsApp and direct-call communication',
  'Bangla-English product and store content',
  'Google Maps and local business information',
  'Mobile-first shopping experiences',
  'Bangladesh-focused ecommerce SEO',
]

const platformsList = [
  {
    title: 'Shopify',
    desc: 'A strong option for merchants who want managed ecommerce infrastructure, straightforward store administration, and a broad ecosystem of apps and integrations.',
  },
  {
    title: 'WooCommerce',
    desc: 'A flexible option for businesses that want greater control over their WordPress content environment, plugins, store functionality, and customization.',
  },
  {
    title: 'Magento',
    desc: 'Suitable for larger or more complex ecommerce operations that need advanced product structures, B2B functionality, inventory requirements, or custom workflows.',
  },
  {
    title: 'Custom E-commerce Development',
    desc: 'Custom development can be appropriate when standard platforms cannot meet specific functionality, integration, performance, or scalability requirements.',
  },
]

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, product UX, development, payment integration, and technical implementation stay under one team, creating clearer communication from planning through launch.',
  },
  {
    title: 'Built Around Your Catalog and Buyers',
    desc: 'We start with how your products are organized and how customers make purchase decisions. The store structure follows those behaviors instead of a generic template.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We work with Shopify, WooCommerce, Magento, and custom development based on project requirements. We recommend the approach that fits your catalog, operations, budget, and growth plans.',
  },
  {
    title: 'Local & International Commerce Experience',
    desc: 'For Bangladesh-based merchants, we can account for local payments and ecommerce workflows. For international stores, we consider the target market, payment requirements, and platform capabilities.',
  },
  {
    title: 'Conversion-Focused Development',
    desc: 'Product pages, navigation, cart, checkout, mobile UX, and calls to action are designed around reducing friction between product discovery and purchase.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'You review important stages of strategy, architecture, design, and development before we move forward, so the final store does not come as a surprise at launch.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* 1. OUR ECOMMERCE WEBSITE DEVELOPMENT SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities / Specialized Engineering
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Ecommerce Website Development Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We offer end-to-end store development tailored to your catalog size and platform.
            </p>
          </div>

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

      {/* 2. E-COMMERCE FEATURES & STORE FUNCTIONALITY */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Store Functionality / Operational Workflows
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              E-commerce Features & Store Functionality
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A successful online store needs more than an attractive storefront. It needs the features that help customers shop easily and your team manage products, orders, payments, and day-to-day operations.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {storeFeatures.map((feat, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <SectionLabel className="mb-2">Feature {String(index + 1).padStart(2, '0')}</SectionLabel>
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            The exact functionality depends on your platform, catalog, integrations, and business workflow. We define the required features before development begins.
          </p>
        </div>
      </section>

      {/* 3. PAYMENTS, CHECKOUT & DELIVERY INTEGRATION */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Fulfillment & Payment Gateways / Zero Abandonment
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Payments, Checkout & Delivery Integration
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Getting a customer to the checkout page is only part of ecommerce. The payment and delivery process also needs to work reliably from purchase to fulfillment.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {paymentFeatures.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Gateway 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            Integration availability depends on your ecommerce platform, payment provider, courier service, API access, and project scope. We confirm compatibility before development begins.
          </p>
        </div>
      </section>

      {/* 4. SEO-READY E-COMMERCE WEBSITE DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Product Indexation & Schema / Organic Commerce
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              SEO-Ready E-commerce Website Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Ecommerce SEO requires more than adding keywords to product descriptions. Product catalogs create unique technical challenges around categories, variants, filters, duplicate URLs, structured data, and indexation. We build the store with an SEO-ready foundation so future search and content campaigns have a stronger technical base.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {seoFoundations.map((pillar, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">SEO Pillar 0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A technically strong ecommerce website does not guarantee rankings or sales. Search visibility depends on content quality, competition, authority, user experience, and ongoing SEO work.
            </p>
          </div>
        </div>
      </section>

      {/* 5. E-COMMERCE SOLUTIONS FOR DIFFERENT BUSINESS MODELS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Business Models / Adaptive Commerce Setup
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              E-commerce Solutions for Different Business Models
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Not every online store works the same way. The right website structure depends on what you sell, who you sell to, and how customers purchase from you.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {businessModels.map((model, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Model 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            We recommend the platform and architecture based on your business model rather than forcing every store into the same ecommerce setup.
          </p>
        </div>
      </section>

      {/* 6. E-COMMERCE WEBSITE DEVELOPMENT FOR THE BANGLADESH MARKET */}
      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Local & International Commerce / Dual-Market Readiness
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              E-commerce Website Development for the Bangladesh Market
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Bangladeshi ecommerce businesses often need to account for local payment methods, delivery expectations, mobile-first shopping, and direct customer communication.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Domestic Commerce</span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Where relevant, we can support:
              </h3>
              <ul className="mt-6 space-y-3 text-sm md:text-base font-medium text-frame-fg/90">
                {bangladeshEcommercePoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Global Commerce</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Serving Global Merchants
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  For merchants targeting customers outside Bangladesh, we also consider international payment methods, currencies, languages, delivery requirements, and market-specific shopping behavior.
                </p>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  Your store should be built around the market you actually sell into, not around a generic ecommerce template.
                </p>
              </div>
              <div className="mt-8 border-t border-frame-border/60 pt-4">
                <span className="text-xs font-mono text-frame-muted-fg">Global reach: US, UK, Australia, Canada, UAE & Cross-border commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. E-COMMERCE PLATFORMS WE WORK WITH */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Engineering / Technology Selection
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              E-commerce Platforms We Work With
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              The right ecommerce platform depends on your catalog, budget, internal management needs, integrations, and future growth plans.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {platformsList.map((platform, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Platform 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {platform.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {platform.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            We recommend a platform based on your actual business requirements rather than pushing one solution for every store.
          </p>
        </div>
      </section>

      {/* 8. WHY CHOOSE FRAME CIPHER FOR E-COMMERCE DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Value / Revenue Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Frame Cipher for E-commerce Development
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Stores built to generate sustainable revenue, handle peak checkout volumes, and adapt to your operational growth.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((adv, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Pillar 0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
