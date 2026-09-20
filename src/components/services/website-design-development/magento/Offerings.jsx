import { SectionIntro } from '../../../Kinetic'

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

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Enterprise Engineering / Capabilities" title="Our Magento Development Services" index="07">
          We provide end-to-end Magento development for businesses that need a scalable ecommerce architecture, deeper customization, or more complex operational workflows.
        </SectionIntro>

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
  )
}