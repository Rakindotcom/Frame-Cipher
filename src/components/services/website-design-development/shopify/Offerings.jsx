import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Store Strategy & Planning',
    subtitle: 'Every Shopify build starts with a clear plan for your catalog, brand, customer journey, and day-to-day store operations.',
    description: 'We identify which functionality should be handled natively, which requires an app, and which may need custom development.',
    bullets: [
      'Catalog structure planning',
      'Product and collection organization',
      'Navigation planning',
      'Customer journey mapping',
      'Platform-fit assessment',
      'Shopify plan review',
      'App stack planning',
      'Payment and shipping requirements',
      'Integration planning',
      'Competitor and market review',
      'Scope and timeline definition',
    ],
    note: 'A clear plan helps prevent unnecessary apps, duplicated functionality, and expensive changes later.',
  },
  {
    tag: 'Service 02',
    title: 'Custom Theme Development',
    subtitle: 'We design Shopify storefronts around your brand instead of simply changing the colors of a pre-built theme.',
    description: 'The goal is more than visual customization. Your theme should make products easier to understand, navigation easier to use, and the path to checkout easier to follow.',
    bullets: [
      'Custom Shopify theme development',
      'Liquid-based theme customization',
      'Product page design',
      'Collection page design',
      'Homepage and landing-page development',
      'Brand-focused typography and visual hierarchy',
      'Responsive and mobile-first layouts',
      'Product filtering and navigation',
      'Conversion-focused calls to action',
      'Promotional and campaign sections',
      'B2B storefront interfaces where required',
    ],
    note: 'Your theme should make products easier to understand, navigation easier to use, and the path to checkout easier to follow.',
  },
  {
    tag: 'Service 03',
    title: 'Shopify Online Store 2.0 Development',
    subtitle: 'A custom Shopify theme should give your team flexibility after launch, not make you dependent on a developer for every content change.',
    description: 'We build Shopify themes around Online Store 2.0 architecture so your team can manage more of the storefront through Shopify\'s editor while the underlying code remains structured and maintainable.',
    bullets: [
      'JSON-based page templates',
      'Reusable sections and blocks',
      'Custom section settings',
      'Flexible homepage and landing-page layouts',
      'App blocks and theme app extensions',
      'Custom product and collection templates',
      'Metafield-driven content',
      'Responsive storefront components',
      'Merchant-friendly editing controls',
    ],
    note: 'Shopify\'s current Online Store 2.0 architecture is built around modular templates, sections, blocks, and app blocks that allow merchants to manage more parts of the storefront through the theme editor. The goal is a storefront that remains flexible for your team without turning the theme into an unstructured collection of custom code.',
  },
  {
    tag: 'Service 04',
    title: 'Shopify Apps, APIs & Custom App Development',
    subtitle: 'Shopify apps can extend a store quickly, but every additional app should have a clear purpose.',
    description: 'We first determine what Shopify supports natively, what should be handled through theme development, what requires an existing app, and what needs custom development.',
    bullets: [
      'Shopify app selection and configuration',
      'App stack planning and compatibility review',
      'Custom Shopify app development',
      'Shopify Admin API integrations',
      'Shopify Storefront API integrations',
      'Webhooks and automated workflows',
      'ERP and CRM integrations',
      'Inventory and fulfillment connections',
      'Marketing and analytics integrations',
      'Custom data synchronization',
      'Shopify Functions for supported commerce logic',
      'Theme app extensions and app blocks',
    ],
    note: 'Shopify Functions can extend supported backend commerce logic for use cases such as discounts, cart and checkout validation, delivery customization, fulfillment constraints, and payment-related logic. When an existing app solves the requirement cleanly, we use it. When an app creates unnecessary complexity, custom development is used.',
  },
  {
    tag: 'Service 05',
    title: 'Shopify Plus & B2B Development',
    subtitle: 'Shopify can support more than standard B2C ecommerce.',
    description: 'For businesses selling wholesale or operating more complex commerce workflows, we build around Shopify\'s B2B capabilities and Shopify Plus where the project requires them.',
    bullets: [
      'Company accounts',
      'Company locations',
      'B2B catalogs',
      'Customer-specific pricing',
      'Volume pricing',
      'Quantity rules',
      'Payment terms',
      'Purchase orders',
      'Wholesale ordering',
      'Customer-specific product availability',
    ],
    note: 'Shopify\'s current B2B functionality includes company structures, catalogs, pricing, payment terms, quantity rules, and other wholesale features, with capabilities varying by plan. Shopify Plus provides additional checkout UI extensions for supported checkout steps. We recommend Shopify Plus based on actual business requirements.',
  },
  {
    tag: 'Service 06',
    title: 'Shopify Migration & Replatforming',
    subtitle: 'Moving to Shopify should involve more than copying products from one platform to another.',
    description: 'We plan migrations around the data, customer journeys, functionality, and search visibility that need to survive the move.',
    supportedSources: 'We support migrations from WooCommerce, Magento, BigCommerce, Wix, Squarespace, Custom ecommerce platforms, and Existing Shopify stores requiring a rebuild or restructuring.',
    bullets: [
      'Product and variant migration',
      'Collection and catalog mapping',
      'Customer data',
      'Order history',
      'Media and content',
      'URL and redirect mapping',
      'Metadata migration',
      'SEO preservation',
      'Analytics and tracking',
      'App replacement planning',
      'Third-party integration migration',
      'Staging and launch testing',
    ],
    note: 'We review the existing store before migration to identify outdated functionality, unnecessary apps, broken URLs, duplicate data, and integrations that should be rebuilt rather than copied blindly. The objective is a cleaner Shopify environment after migration.',
  },
  {
    tag: 'Service 07',
    title: 'Multi-Market, Multi-Currency & Multi-Language Shopify',
    subtitle: 'Selling internationally requires more than translating product descriptions.',
    description: 'We can structure Shopify stores for multiple markets around the products, pricing, currencies, languages, domains, and customer experiences each market requires.',
    bullets: [
      'Shopify Markets configuration',
      'Country and market structure',
      'Multi-currency setup',
      'Multi-language storefronts',
      'Market-specific domains',
      'Localized navigation and content',
      'Market-specific product availability',
      'Regional shipping configuration',
      'International SEO structure',
      'Country and language selectors',
    ],
    note: 'Shopify Markets supports market-specific experiences involving currencies, languages, pricing, products, domains, and other regional settings. We plan international expansion around the actual countries and customer segments you serve.',
  },
  {
    tag: 'Service 08',
    title: 'Headless Shopify & Hydrogen Development',
    subtitle: 'Some Shopify projects need more frontend flexibility than a traditional theme can provide.',
    description: 'For those businesses, Shopify can remain the commerce backend while a separate frontend controls the customer experience.',
    bullets: [
      'Hydrogen storefronts',
      'React-based custom storefronts',
      'Shopify Storefront API',
      'Custom product and collection experiences',
      'API-driven commerce',
      'Custom navigation and merchandising',
      'Headless search and filtering',
      'Custom frontend integrations',
      'Performance-focused storefront architecture',
      'Merchant-friendly headless administration',
    ],
    note: 'Shopify\'s Storefront API supports custom commerce experiences, while Hydrogen is Shopify\'s React-based framework for headless storefront development. We recommend headless Shopify only when the business genuinely benefits from additional frontend flexibility.',
  },
  {
    tag: 'Service 09',
    title: 'Advanced Shopify Commerce',
    subtitle: 'Some merchants need more than standard one-time purchases.',
    description: 'Depending on the business model, we configure or develop Shopify experiences around supported advanced purchase options:',
    bullets: [
      'Subscription commerce',
      'Subscribe-and-save models',
      'Pre-orders',
      'Recurring product purchases',
      'Advanced discounts',
      'Custom purchase workflows',
      'Customer-specific buying experiences',
    ],
    note: 'The exact implementation depends on the business model, required apps, and Shopify capabilities available to the store.',
  },
  {
    tag: 'Service 10',
    title: 'Performance & Conversion Optimization',
    subtitle: 'Speed and structure should support the path from product discovery to checkout.',
    description: 'A fast storefront helps visitors browse products more efficiently, while clear navigation and checkout reduce friction.',
    bullets: [
      'Theme code optimization',
      'Image optimization',
      'App load management',
      'Mobile performance improvements',
      'Product page optimization',
      'Collection page optimization',
      'Product schema and structured data',
      'On-page SEO setup',
      'Internal linking',
      'Cart and checkout analysis',
      'Conversion path review',
      'Analytics and conversion tracking',
    ],
    note: 'We optimize both the technical storefront and the customer path rather than treating performance and conversion as separate tasks.',
  },
  {
    tag: 'Service 11',
    title: 'Ongoing Support & Maintenance',
    subtitle: 'A Shopify store\'s job is not finished when it goes live.',
    description: 'Themes change, apps update, products grow, integrations evolve, and merchants often need ongoing improvements.',
    bullets: [
      'Theme updates',
      'App compatibility checks',
      'Performance monitoring',
      'App stack reviews',
      'Catalog and feature updates',
      'Layout improvements',
      'Minor functionality changes',
      'SEO-related technical updates',
      'Analytics and tracking updates',
      'Troubleshooting',
      'Ongoing storefront improvements',
    ],
    note: 'Ongoing support is scoped separately based on the technical requirements and level of assistance your store needs.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities" title="Our Shopify Development Services" index="09">
          We provide end-to-end Shopify development for businesses that want a store that is easy to manage, technically sound, and ready to support long-term ecommerce growth.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {coreServices.map((service, index) => (
            <article
              key={index}
              className="group flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  {service.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-frame-accent">
                  {service.subtitle}
                </p>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {service.description}
                </p>

                {service.supportedSources && (
                  <p className="mt-3 text-xs font-semibold text-frame-fg/80 border-l-2 border-frame-accent pl-3 py-1">
                    {service.supportedSources}
                  </p>
                )}

                <div className="mt-6 border-t-2 border-frame-border/60 pt-6">
                  <p className="text-xs font-black uppercase tracking-wider text-frame-accent mb-3">
                    What We Do
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t-2 border-frame-border/60 pt-5 text-xs font-medium italic text-frame-muted-fg leading-relaxed">
                {service.note}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}