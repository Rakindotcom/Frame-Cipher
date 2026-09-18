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

const techStack = [
  {
    name: 'Shopify Themes & Liquid',
    desc: 'Custom theme development using Shopify\'s Liquid templating language, responsive frontend development, reusable components, and structured theme architecture.',
  },
  {
    name: 'Online Store 2.0',
    desc: 'JSON templates, reusable sections, blocks, section settings, app blocks, and merchant-friendly editing managed directly through the theme editor.',
  },
  {
    name: 'Metafields & Structured Content',
    desc: 'Custom product, collection, and content data used to create flexible storefront experiences and reusable components.',
  },
  {
    name: 'Shopify APIs',
    desc: 'Admin APIs, Storefront API, webhooks, and supported integration methods for connecting Shopify with external business systems.',
  },
  {
    name: 'Shopify Functions',
    desc: 'Custom commerce logic for supported use cases such as discounts, cart validation, delivery customization, fulfillment constraints, and other platform-supported workflows.',
  },
  {
    name: 'Checkout Extensions',
    desc: 'Custom checkout experiences within the capabilities available to the store\'s Shopify plan, including checkout UI extensions on Shopify Plus.',
  },
  {
    name: 'Hydrogen & Headless Commerce',
    desc: 'Custom storefront architecture using Shopify\'s Storefront API and Hydrogen when a traditional theme is not the right frontend approach.',
  },
]

const whyShopifyBenefits = [
  {
    title: 'Managed Ecommerce Infrastructure',
    desc: 'Shopify manages much of the underlying platform infrastructure, allowing merchants to focus more on products, customers, merchandising, and ecommerce operations.',
  },
  {
    title: 'Merchant-Friendly Store Management',
    desc: 'Online Store 2.0 gives merchants flexible sections, blocks, templates, and dynamic sources that make many routine storefront changes easier to manage without code.',
  },
  {
    title: 'Large App & Integration Ecosystem',
    desc: 'Shopify can connect with a wide range of business tools and can be extended through apps, APIs, app extensions, and custom development.',
  },
  {
    title: 'International Selling',
    desc: 'Shopify Markets supports market-specific experiences involving currencies, languages, pricing, products, domains, and other regional settings.',
  },
  {
    title: 'B2B Ecommerce',
    desc: 'Shopify provides native B2B functionality for supported plans, including company structures, catalogs, pricing, payment terms, and wholesale workflows. Additional capabilities are available through Shopify Plus.',
  },
  {
    title: 'Room for Custom Development',
    desc: 'When native Shopify features or standard apps are not enough, stores can be extended through custom apps, APIs, Functions, theme extensions, and custom storefronts.',
  },
]

const comparisonData = [
  {
    factor: 'Infrastructure',
    shopify: 'Managed platform',
    woocommerce: 'Hosting managed by the business/provider',
    magento: 'More technical infrastructure responsibility',
    highlight: 'shopify',
  },
  {
    factor: 'Ease of Management',
    shopify: 'Strong',
    woocommerce: 'Strong with the right WordPress setup',
    magento: 'Requires more technical management',
    highlight: 'shopify',
  },
  {
    factor: 'Theme Customization',
    shopify: 'Strong with Liquid and Online Store 2.0',
    woocommerce: 'Highly flexible',
    magento: 'Highly flexible',
    highlight: 'shopify',
  },
  {
    factor: 'App / Extension Ecosystem',
    shopify: 'Large Shopify ecosystem',
    woocommerce: 'Large WordPress ecosystem',
    magento: 'Strong commerce-focused ecosystem',
  },
  {
    factor: 'B2B',
    shopify: 'Native B2B capabilities with plan differences',
    woocommerce: 'Often requires extensions/custom development',
    magento: 'Strong, especially with Adobe Commerce',
  },
  {
    factor: 'Multi-Market',
    shopify: 'Strong through Shopify Markets',
    woocommerce: 'Possible with additional setup',
    magento: 'Strong for complex multi-store requirements',
    highlight: 'shopify',
  },
  {
    factor: 'Custom Development',
    shopify: 'Apps, APIs, Functions, extensions, headless',
    woocommerce: 'Plugins and custom WordPress development',
    magento: 'Modules, APIs, custom development',
  },
  {
    factor: 'Best Fit',
    shopify: 'Businesses wanting managed ecommerce infrastructure with strong customization',
    woocommerce: 'Businesses wanting WordPress + ecommerce flexibility',
    magento: 'Complex catalogs, B2B, multi-store, or deeper ecommerce architecture',
  },
]

const platformRecommendations = [
  {
    platform: 'When We Recommend Shopify',
    desc: 'Shopify is often a practical fit when managed infrastructure, merchant-friendly administration, fast deployment, a large app ecosystem, and strong storefront customization are priorities.',
    accent: true,
  },
  {
    platform: 'When We Recommend WooCommerce',
    desc: 'WooCommerce can make sense when WordPress content management is central to the business and the ecommerce requirements fit naturally within the WordPress ecosystem.',
    accent: false,
  },
  {
    platform: 'When We Recommend Magento',
    desc: 'Magento or Adobe Commerce may be more appropriate when the store requires complex catalogs, B2B workflows, multiple storefronts, or deeper ecommerce integrations.',
    accent: false,
  },
]

const whyChooseUsPillars = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, ecommerce planning, design, development, integrations, and launch support stay within one coordinated team instead of being divided across unrelated vendors.',
  },
  {
    title: 'Disciplined App Architecture',
    desc: 'We do not install an app simply because one exists for a feature. We evaluate native Shopify capabilities, theme development, apps, APIs, and custom development before choosing the implementation.',
  },
  {
    title: 'Shopify-Specific Development',
    desc: 'Our Shopify work can cover Liquid themes, Online Store 2.0, app integrations, custom apps, APIs, B2B, Shopify Plus, Markets, and advanced storefront functionality where the project requires them.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Shopify when its managed infrastructure and ecommerce capabilities fit the project. When WooCommerce, Magento, or another platform makes more sense, we explain that before development begins.',
  },
  {
    title: 'Bangladesh + International Ecommerce',
    desc: 'We build Shopify stores for Bangladesh-based businesses and international merchants, adapting the store around market, payment, shipping, content, and customer requirements.',
  },
  {
    title: 'SEO & Conversion Built In',
    desc: 'We consider technical SEO, product structure, performance, tracking, navigation, merchandising, and checkout experience during development rather than treating them as separate add-ons.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Architecture, design, development, integrations, and testing move through defined review checkpoints so you can approve the direction before the project moves forward.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* SECTION 1: CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Shopify Development Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We provide end-to-end Shopify development for businesses that want a store that is easy to manage, technically sound, and ready to support long-term ecommerce growth.
            </p>
          </div>

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

      {/* SECTION 2: SHOPIFY TECHNOLOGY STACK */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture &amp; Platform Stack
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Shopify Technology Stack
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Shopify development is more than configuring a theme. The right implementation depends on how the storefront, commerce data, apps, APIs, checkout, integrations, and merchant editing experience work together. Depending on the project, our Shopify development stack can include:
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-2 border-frame-border">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Stack Component 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tech.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-sm font-medium text-frame-muted-fg">
            We select the technology that solves the project requirement instead of adding complexity simply to make the technology stack look more advanced.
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY SHOPIFY WORKS FOR MODERN ECOMMERCE */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Commercial Scalability
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Shopify Works for Modern Ecommerce
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Shopify is useful for businesses that want managed ecommerce infrastructure without taking responsibility for traditional server management, while still having room for customization through themes, apps, APIs, and supported development tools.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyShopifyBenefits.map((item, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    Benefit 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
            Shopify works best when its managed infrastructure and extensibility match the way your business operates.
          </p>
        </div>
      </section>

      {/* SECTION 4: PLATFORM COMPARISON */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Decision Framework
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Shopify vs WooCommerce vs Magento
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              The right ecommerce platform depends on catalog complexity, customization requirements, B2B needs, technical ownership, integrations, budget, and how the business wants to manage the store after launch.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[720px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Shopify</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WooCommerce</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Magento / Adobe Commerce</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-6 ${row.highlight === 'shopify' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.shopify}
                    </td>
                    <td className="p-5 md:p-6 text-frame-muted-fg">{row.woocommerce}</td>
                    <td className="p-5 md:p-6 text-frame-muted-fg">{row.magento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RECOMMENDATION SCENARIOS */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {platformRecommendations.map((card, i) => (
              <div
                key={i}
                className={`border-2 p-6 sm:p-8 bg-frame-bg ${
                  card.accent ? 'border-frame-accent' : 'border-frame-border'
                }`}
              >
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-frame-fg">
                  {card.platform}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
            We recommend the platform based on the project rather than forcing every business into the same technology.
          </p>
        </div>
      </section>

      {/* SECTION 5: BANGLADESH & GLOBAL BUSINESSES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Regional &amp; International Delivery
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Shopify Development for Bangladesh &amp; Global Businesses
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka, Bangladesh, and builds Shopify stores for businesses across Bangladesh as well as international markets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Merchant Focus
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
                For Bangladesh-Based Merchants
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We consider local payment-provider availability, mobile-first shopping behavior, local shipping and fulfillment requirements, and Bangla-English content where relevant.
              </p>
              <div className="mt-6 border-t border-frame-border/60 pt-4 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                Shopify&apos;s payment-provider availability varies by merchant location. Shopify Payments is currently available only in Shopify&apos;s listed supported countries, and Bangladesh is not currently listed among those supported locations. Businesses in unsupported countries need to use an available third-party payment provider. For Bangladesh-based businesses, we evaluate currently available third-party payment options and configure the appropriate provider or integration based on the merchant&apos;s location, customers, and business requirements.
              </div>
            </div>

            <div className="bg-frame-bg p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Worldwide Reach
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
                For International Businesses
              </h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We adapt the store structure, markets, currencies, languages, domains, content, and integrations around the countries and customer segments being served across the US, UK, Australia, Canada, and UAE.
              </p>
              <div className="mt-6 border-t border-frame-border/60 pt-4 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                We plan international expansion around the actual countries and customer segments you serve rather than creating duplicate storefronts without a clear operational reason.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE FRAMECIPHER */}
      <section className="bg-frame-muted/10 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for Shopify Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Shopify development is not only about launching a storefront. Theme architecture, ecommerce strategy, app selection, integrations, SEO, performance, and merchant management all affect how useful the store remains after launch.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {whyChooseUsPillars.map((pillar, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
