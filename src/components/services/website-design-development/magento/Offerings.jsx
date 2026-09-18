import { PosterButton } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Magento 2 & Adobe Commerce Development',
    description: 'We build Magento-based ecommerce solutions around the level of functionality your business actually requires. Magento Open Source can be suitable for businesses that need a customizable ecommerce platform, while Adobe Commerce offers additional capabilities for more advanced commerce and B2B requirements.',
    items: [
      'Magento Open Source deployment and tailoring',
      'Adobe Commerce enterprise architecture',
      'Adobe Commerce B2B company accounts and shared catalogs',
      'Negotiable quotes, purchase orders, and requisition lists',
      'Custom company pricing and approval workflows',
    ],
    note: 'Our approach is simple: we recommend the Magento edition that solves the actual business problem without adding unnecessary complexity.',
  },
  {
    tag: 'Service 02',
    title: 'Catalog & Store Architecture',
    description: 'Every Magento project starts with an architecture built around the way your business manages products, customers, stores, and orders.',
    items: [
      'Category and catalog structure planning',
      'Product attribute and configuration planning',
      'Large catalog architecture',
      'Multi-website and multi-store setup',
      'Store views for localized content',
      'Customer group structures',
      'Pricing and catalog rules',
      'Inventory workflow planning',
      'Search and filtering architecture',
      'Product data organization',
    ],
    note: 'A well-planned catalog structure makes products easier to manage, improves navigation, and reduces the need for expensive restructuring later.',
  },
  {
    tag: 'Service 03',
    title: 'B2B Magento Development',
    description: 'B2B ecommerce often requires a different buying experience from a standard consumer store. We plan Magento-based B2B experiences around the way your wholesale buyers purchase.',
    items: [
      'Company customer accounts',
      'Customer-specific pricing and tiered pricing',
      'Shared catalogs and custom catalogs',
      'Quote requests and negotiated pricing workflows',
      'Purchase order processes',
      'Quick ordering and requisition lists',
      'Multiple buyers and purchasing roles',
      'B2B-specific payment and shipping requirements',
    ],
    note: 'We design the ecommerce workflow around how your sales team and customers actually purchase rather than simply adding B2B labels to a standard storefront.',
  },
  {
    tag: 'Service 04',
    title: 'Theme & UI/UX Design',
    description: 'A large catalog is only useful when customers can find and compare products easily. We design Magento storefronts around usability, product discovery, mobile browsing, and conversion.',
    items: [
      'Custom Magento storefront design',
      'Brand-focused layouts and responsive mobile-first interfaces',
      'Product page design and catalog navigation',
      'Layered navigation and filtering',
      'Search experience optimization',
      'Conversion-focused checkout',
      'B2B buying interfaces',
      'Calls to action and lead-capture areas',
      'CMS and promotional content layouts',
    ],
    note: 'The interface should help customers discover products, understand options, and complete purchases with less friction.',
  },
  {
    tag: 'Service 05',
    title: 'Hyvä Theme Development',
    description: 'For Magento 2 or Adobe Commerce stores that need a modern frontend architecture, we can evaluate Hyvä as part of the storefront strategy. Built with Tailwind CSS and Alpine.js, it reduces frontend complexity.',
    items: [
      'Custom Hyvä storefronts',
      'Brand-focused theme development',
      'Responsive product and category pages',
      'Navigation and filtering components',
      'CMS-driven content templates',
      'Checkout customization where supported',
      'Extension compatibility review',
      'Existing-theme migration planning',
      'Frontend performance optimization',
    ],
    note: 'We recommend Hyvä based on the existing Magento architecture, extension requirements, design goals, and long-term maintenance needs.',
  },
  {
    tag: 'Service 06',
    title: 'Headless Magento & PWA Development',
    description: 'Some ecommerce businesses need to separate the customer-facing storefront from the Magento commerce backend, communicating through supported APIs and commerce services.',
    items: [
      'Custom React-based storefronts',
      'Vue-based storefronts',
      'Progressive Web Applications (PWA)',
      'GraphQL-based commerce experiences',
      'Custom frontend components',
      'API-driven product experiences',
      'Headless integrations',
      'Mobile-focused shopping experiences',
    ],
    note: 'We recommend headless architecture only when the business has a real need for the additional flexibility and development complexity.',
  },
  {
    tag: 'Service 07',
    title: 'Development & System Integration',
    description: 'Your Magento store often needs to exchange data with the systems that already run your business. We keep product, customer, inventory, pricing, and order data synchronized.',
    items: [
      'Custom Magento modules',
      'ERP systems (SAP, NetSuite, Dynamics)',
      'CRM platforms and PIM systems',
      'OMS and fulfillment systems',
      'Inventory systems and multi-warehouse sync',
      'Payment gateways (bKash, Nagad, Stripe, PayPal)',
      'Shipping platforms and carrier APIs',
      'Marketing platforms and analytics systems',
      'REST and GraphQL APIs',
    ],
    note: 'For Bangladesh-based merchants, payment requirements may include supported local gateways such as bKash or Nagad alongside international providers.',
  },
  {
    tag: 'Service 08',
    title: 'Magento Migration & Upgrade Services',
    description: 'An existing ecommerce store should not have to start from zero simply because the platform or Magento version needs to change. We plan migration around data and functionality you need to preserve.',
    items: [
      'Magento 1 to Magento 2 migration',
      'Magento version upgrades',
      'Magento Open Source to Adobe Commerce',
      'Shopify to Magento / WooCommerce to Magento',
      'Product and category migration',
      'Customer and order data migration',
      'Media and content migration',
      'URL and redirect mapping',
      'Metadata and SEO migration',
      'Extension and custom-code review',
      'Staging and launch testing',
    ],
    note: 'A successful migration protects customer journeys, data, integrations, and search-critical elements against the agreed scope.',
  },
  {
    tag: 'Service 09',
    title: 'Performance & Scalability',
    description: 'Magento gives businesses extensive control over catalogs and ecommerce logic. That flexibility means the architecture and infrastructure must match the workload.',
    items: [
      'Caching configuration (Varnish & Redis)',
      'Catalog and indexing optimization',
      'Database optimization and query indexing',
      'Search performance review',
      'Image and frontend optimization',
      'Server and hosting resource planning',
      'Core Web Vitals checks',
      'Load and stress testing',
      'Performance monitoring & high-traffic readiness',
    ],
    note: 'We optimize the environment around the actual workload rather than applying generic performance settings.',
  },
  {
    tag: 'Service 10',
    title: 'Magento Security & Compliance',
    description: 'Security is an ongoing part of Magento ownership, particularly for stores handling customer accounts, payment workflows, business pricing, and operational data.',
    items: [
      'Security patch planning and patch installation',
      'Extension and module security reviews',
      'Access and permission controls',
      'Secure configuration reviews',
      'Backup and disaster recovery planning',
      'Vulnerability checks',
      'Staging-based patch testing',
      'Secure deployment practices',
      'Integration monitoring',
    ],
    note: 'Where PCI or other formal compliance requirements apply, we distinguish between technical infrastructure responsibilities and broader business obligations.',
  },
  {
    tag: 'Service 11',
    title: 'Ongoing Support & Maintenance',
    description: 'A Magento project does not end when the store goes live. Ongoing maintenance keeps the store stable, secure, and compatible over time.',
    items: [
      'Magento security updates',
      'Performance monitoring',
      'Technical troubleshooting',
      'Extension compatibility checks',
      'Integration monitoring',
      'Content and layout updates',
      'Minor development changes',
      'Backup and recovery support',
      'SEO-related technical updates',
      'Ongoing performance improvements',
    ],
    note: 'Ongoing maintenance is scoped separately according to the technical requirements and level of support your store needs.',
  },
]

const stackAreas = [
  {
    tag: 'Stack 01',
    title: 'Commerce Platform',
    desc: 'Magento Open Source or Adobe Commerce based on catalog complexity, B2B requirements, integrations, and operational needs.',
  },
  {
    tag: 'Stack 02',
    title: 'Storefront',
    desc: 'Magento storefront development, custom themes, responsive interfaces, and Hyvä where it fits the project architecture.',
  },
  {
    tag: 'Stack 03',
    title: 'APIs & Integrations',
    desc: 'REST APIs, GraphQL, webhooks, and supported integration methods for connecting Magento with business systems. Adobe Commerce documents GraphQL as an important technology for modern headless implementations.',
  },
  {
    tag: 'Stack 04',
    title: 'Catalog & Data',
    desc: 'Product attributes, categories, configurable products, customer groups, pricing rules, inventory structures, and structured product data.',
  },
  {
    tag: 'Stack 05',
    title: 'Performance & Infrastructure',
    desc: 'Caching, indexing, server resources, database optimization, CDN configuration, monitoring, and performance testing based on the expected workload.',
  },
  {
    tag: 'Stack 06',
    title: 'Security & Deployment',
    desc: 'Staging environments, access controls, backups, patch testing, version management, and controlled production deployment.',
  },
]

const whyMagentoWorks = [
  {
    tag: 'Advantage 01',
    title: 'Large & Structured Catalogs',
    desc: 'Magento provides extensive control over products, categories, attributes, pricing structures, and catalog organization for businesses managing complex product ranges.',
  },
  {
    tag: 'Advantage 02',
    title: 'B2B Commerce',
    desc: 'For businesses with company accounts, customer-specific pricing, shared catalogs, quote workflows, or other wholesale requirements, Adobe Commerce B2B provides dedicated capabilities.',
  },
  {
    tag: 'Advantage 03',
    title: 'Multi-Store & Multi-Region Operations',
    desc: 'Magento can support multiple websites, stores, and store views within a broader commerce architecture for different brands, regions, customer segments, or localized storefronts.',
  },
  {
    tag: 'Advantage 04',
    title: 'Complex Integrations',
    desc: 'Magento can operate as the ecommerce layer connecting product, inventory, customer, fulfillment, payment, ERP, CRM, PIM, and other business systems.',
  },
  {
    tag: 'Advantage 05',
    title: 'Multiple Inventory Sources',
    desc: 'Magento inventory architectures can support multiple stock sources and fulfillment locations when the business operates across warehouses, stores, or other inventory locations.',
  },
  {
    tag: 'Advantage 06',
    title: 'Custom Ecommerce Workflows',
    desc: 'When standard storefront functionality does not meet requirements, Magento can be extended through modules, APIs, integrations, custom frontend development, and supported extensions.',
  },
]

const comparisonData = [
  {
    factor: 'Large Catalogs',
    magento: 'Strong fit for complex catalog structures',
    shopify: 'Strong for many ecommerce stores',
    woocommerce: 'Strong with the right architecture',
  },
  {
    factor: 'B2B Workflows',
    magento: 'Strong, especially with Adobe Commerce B2B',
    shopify: 'Supported through platform features and apps',
    woocommerce: 'Often requires additional extensions',
  },
  {
    factor: 'Multi-Store Operations',
    magento: 'Strong for complex multi-site structures',
    shopify: "Supported through Shopify's ecosystem",
    woocommerce: 'Possible with additional architecture',
  },
  {
    factor: 'Custom Development',
    magento: 'High flexibility',
    shopify: "Strong within Shopify's framework",
    woocommerce: 'High flexibility within WordPress',
  },
  {
    factor: 'Integrations',
    magento: 'Strong for complex system integrations',
    shopify: 'Broad app ecosystem',
    woocommerce: 'Broad plugin ecosystem',
  },
  {
    factor: 'Infrastructure',
    magento: 'More technical responsibility',
    shopify: 'More managed',
    woocommerce: 'Depends on hosting and implementation',
  },
  {
    factor: 'Maintenance',
    magento: 'Requires active technical management',
    shopify: 'More managed',
    woocommerce: 'Requires technical management',
  },
  {
    factor: 'Best Fit',
    magento: 'Complex, customized, B2B, or multi-store ecommerce',
    shopify: 'Businesses prioritizing managed commerce operations',
    woocommerce: 'Businesses wanting WordPress flexibility with ecommerce',
  },
]

const whyChoosePillars = [
  {
    tag: 'Pillar 01',
    title: 'One In-House Team',
    desc: 'Strategy, ecommerce planning, design, development, integrations, and launch support stay within one coordinated team rather than being divided across unrelated vendors.',
  },
  {
    tag: 'Pillar 02',
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Magento when the business requirements justify it. When Shopify, WooCommerce, or another platform is more appropriate, we explain that before development begins.',
  },
  {
    tag: 'Pillar 03',
    title: 'Business-First Architecture',
    desc: 'We plan around your catalog, customers, pricing model, fulfillment process, integrations, and growth requirements instead of starting with a generic store template.',
  },
  {
    tag: 'Pillar 04',
    title: 'Custom Magento Development',
    desc: 'We can extend the standard platform through custom modules, integrations, APIs, CMS structures, and supported frontend approaches where the project requires them.',
  },
  {
    tag: 'Pillar 05',
    title: 'SEO-Ready Ecommerce Foundations',
    desc: 'We consider category structure, product architecture, URLs, internal linking, metadata, redirects, indexation, performance, and analytics as part of the website architecture.',
  },
  {
    tag: 'Pillar 06',
    title: 'Transparent Review Checkpoints',
    desc: 'Architecture, design, development, and testing are reviewed at defined stages so major decisions are approved before the project moves forward.',
  },
  {
    tag: 'Pillar 07',
    title: 'Practical Handover & Support',
    desc: 'We provide the agreed access, documentation, launch guidance, and post-launch support required to manage the store according to the project scope.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* 1. OUR MAGENTO DEVELOPMENT SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Enterprise Engineering / Capabilities
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Magento Development Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We provide end-to-end Magento development for businesses that need a scalable ecommerce architecture, deeper customization, or more complex operational workflows.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[380px]"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-5 text-xs sm:text-sm font-medium text-frame-fg/90">
                    {service.items.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-frame-border/40 pt-4">
                  <p className="text-xs italic text-frame-muted-fg">
                    {service.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAGENTO TECHNOLOGY STACK */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Systems &amp; Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Magento Technology Stack
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento development works best when the ecommerce application, storefront, integrations, data, and infrastructure are considered as one system.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {stackAreas.map((area, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    {area.tag}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-sm md:text-base font-semibold text-frame-fg">
              We use the technologies required by the project instead of building the largest possible technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY MAGENTO WORKS FOR COMPLEX ECOMMERCE */}
      <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Operational Scale
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Magento Works for Complex Ecommerce
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento becomes more valuable when ecommerce requirements extend beyond a simple product catalog and standard checkout.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {whyMagentoWorks.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The goal is not to make every ecommerce project more complicated. It is to use Magento when the business actually benefits from this level of control.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MAGENTO VS SHOPIFY VS WOOCOMMERCE */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Decision / Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Magento vs Shopify vs WooCommerce
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento is not automatically the right platform for every ecommerce business. The right choice depends on catalog complexity, B2B requirements, integrations, operational workflows, budget, maintenance requirements, and the level of control the business needs.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[680px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Magento / Adobe Commerce</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Shopify</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WooCommerce</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.factor}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.magento}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.shopify}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.woocommerce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SCENARIO RECOMMENDATIONS */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Decision Path 01</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                When We Recommend Magento
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We consider Magento when a project has meaningful requirements around B2B pricing, complex catalogs, multiple storefronts, deep integrations, custom workflows, or greater control over the ecommerce architecture.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Decision Path 02</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                When We Recommend Shopify or WooCommerce
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                For smaller or less complex stores, another platform may provide the required functionality with less technical overhead. We review the actual requirements before recommending a platform.
              </p>
            </div>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-bold uppercase tracking-wider text-frame-fg">
              The goal is not to sell the most powerful technology. It is to choose the architecture that fits the business.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MAGENTO DEVELOPMENT FOR BANGLADESH & GLOBAL BUSINESSES */}
      <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Regional &amp; Global Delivery
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Magento Development for Bangladesh &amp; Global Businesses
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka, Bangladesh, and works with businesses in Bangladesh as well as international markets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Domestic Market Operations
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  For Bangladesh-Based Businesses
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  For Bangladesh-based ecommerce businesses, Magento projects can account for local payment requirements (such as bKash or Nagad), regional customer behavior, local business operations, direct communication channels, and Bangla-English content where required.
                </p>
              </div>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Cross-Border &amp; Global
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  For International Businesses
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  For international businesses, we can structure ecommerce experiences around different markets, currencies, storefronts, customer segments, and business systems according to the project requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Our approach is not based on applying one Bangladesh or international template to every project. We structure the store around the audience, market, and operating model of the business.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE FRAMECIPHER FOR MAGENTO DEVELOPMENT */}
      <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Excellence
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for Magento Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento development involves more than writing code. Catalog architecture, ecommerce strategy, integrations, frontend experience, SEO, infrastructure, performance, and maintenance all affect the final store.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyChoosePillars.map((diff, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {diff.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {diff.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PosterButton href="/contact">Start Your Magento Project &rarr;</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
