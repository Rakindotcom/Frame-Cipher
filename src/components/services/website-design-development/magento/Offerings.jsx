const coreServices = [
  {
    tag: 'Service 01',
    title: 'Magento 2 & Adobe Commerce Development',
    description: 'We develop custom Magento stores engineered around your exact catalog size, operational workflows, and commercial requirements.',
    bullets: [
      'Magento Open Source tailored deployment and customization.',
      'Adobe Commerce B2B company accounts, shared catalogs, and quotes.',
      'Multi-currency, multilingual, and localized regional storefronts.',
      'Modular code architecture strictly adhering to Adobe coding standards.',
    ],
  },
  {
    tag: 'Service 02',
    title: 'Catalog & Store Architecture',
    description: 'Structuring extensive, multi-attribute product catalogs so customers and internal inventory managers find items effortlessly.',
    bullets: [
      'Configurable, bundled, grouped, and virtual product types.',
      'Custom attribute sets, swatch configurations, and inventory rules.',
      'Elasticsearch / OpenSearch powered faceted search and filtering.',
      'Multi-website and multi-store view setup under a single admin panel.',
    ],
  },
  {
    tag: 'Service 03',
    title: 'B2B & Wholesale Ecommerce',
    description: 'Engineering specialized wholesale buying experiences with custom contract pricing, tiered quotes, and corporate purchasing roles.',
    bullets: [
      'Company accounts with hierarchical multi-buyer permission sets.',
      'Custom pricing tiers, shared catalogs, and negotiable quotation flows.',
      'Quick ordering by SKU/CSV upload and saved requisition lists.',
      'Purchase order (PO) workflows and flexible B2B payment terms.',
    ],
  },
  {
    tag: 'Service 04',
    title: 'Theme & Storefront UI/UX Design',
    description: 'Designing high-conversion Magento storefronts focused on mobile-first product discovery, comparison, and frictionless checkout.',
    bullets: [
      'Bespoke storefront visual design matching corporate brand identity.',
      'Mobile-optimized category navigation and layered filter sidebars.',
      'Streamlined one-step checkout customized to reduce cart abandonment.',
      'High-converting product detail pages (PDP) with rich media specs.',
    ],
  },
  {
    tag: 'Service 05',
    title: 'Hyvä Theme Development',
    description: 'Replacing bloated default Luma frontend themes with modern Hyvä architecture for sub-second speeds and stellar Core Web Vitals.',
    bullets: [
      'Clean frontend architecture built with Tailwind CSS and Alpine.js.',
      'Significant reduction in frontend JavaScript bundle weight and complexity.',
      'Dramatically improved Google Core Web Vitals and mobile performance.',
      'Third-party extension compatibility audits and Hyvä fallback styling.',
    ],
  },
  {
    tag: 'Service 06',
    title: 'Headless Magento & PWA Development',
    description: 'Decoupling the customer-facing frontend from the Magento commerce backend for maximum creative and performance freedom.',
    bullets: [
      'Modern React, Next.js, or Vue.js custom storefront frontends.',
      'High-performance GraphQL API queries and commerce services.',
      'Progressive Web App (PWA) offline browsing and mobile app feel.',
      'Separate frontend deployments for rapid marketing campaign iteration.',
    ],
  },
  {
    tag: 'Service 07',
    title: 'Custom Modules & System Integrations',
    description: 'Connecting Magento to the mission-critical software systems that power your inventory, fulfillment, and accounting.',
    bullets: [
      'ERP integrations (SAP, Microsoft Dynamics, NetSuite, Oracle).',
      'PIM (Akeneo, Pimcore) and CRM (HubSpot, Salesforce) sync.',
      'Local payment gateways (bKash, Nagad, SSLCommerz) & global gateways.',
      'Automated shipping carriers, logistics, and warehouse (WMS) webhooks.',
    ],
  },
  {
    tag: 'Service 08',
    title: 'Migration & Version Upgrades',
    description: 'Upgrading legacy Magento versions or replatforming from Shopify or WooCommerce with zero loss of SEO equity or order history.',
    bullets: [
      'Magento 1 to Magento 2 database and media migrations.',
      'Seamless Magento 2.4.x minor and major security upgrades.',
      'Customer accounts, order history, product, and category transfers.',
      'URL structure preservation and comprehensive 301 redirect mapping.',
    ],
  },
  {
    tag: 'Service 09',
    title: 'Performance & Security Hardening',
    description: 'Tuning server infrastructure and implementing rigorous security controls to withstand massive flash-sale traffic spikes.',
    bullets: [
      'Varnish full-page cache, Redis session caching, and CDN optimization.',
      'Database query indexing and connection pool optimization.',
      'Security patch installations, two-factor authentication (2FA), and firewalls.',
      'PCI-DSS compliance review and automated off-site database backups.',
    ],
  },
]

const businessNeeds = [
  {
    title: 'High-Volume B2C Retailers',
    desc: 'Department stores and multi-brand merchants needing rapid catalog search, rich filtering, and high transaction concurrency.',
  },
  {
    title: 'B2B Wholesale & Distributors',
    desc: 'Manufacturers and trade distributors needing negotiated contract prices, quote approvals, purchase orders, and multi-buyer accounts.',
  },
  {
    title: 'Multi-Region Global Brands',
    desc: 'International enterprises operating localized storefronts with country-specific currencies, languages, tax rules, and shipping carriers.',
  },
  {
    title: 'ERP-Integrated Enterprises',
    desc: 'Merchants requiring real-time inventory, pricing, and order synchronization with enterprise software like SAP, NetSuite, or Dynamics.',
  },
  {
    title: 'High-Performance Hyvä Stores',
    desc: 'Brands requiring the deep flexibility of Magento without the slow loading times of legacy Luma themes.',
  },
  {
    title: 'Headless Commerce Brands',
    desc: 'Cutting-edge digital merchants using Magento purely as a powerful commerce engine paired with custom Next.js storefronts.',
  },
]

const comparisonData = [
  {
    factor: 'Catalog Scale & Attributes',
    magento: 'Engineered for 100,000+ SKUs & complex attribute sets',
    shopify: 'Strong, but limited by variant and collection bounds',
    woocommerce: 'Best suited for small-to-medium product catalogs',
    highlight: 'magento',
  },
  {
    factor: 'Native B2B & Wholesale',
    magento: 'Exceptional (Company accounts, custom quotes, tiers)',
    shopify: 'Requires Shopify Plus subscription tier',
    woocommerce: 'Requires multiple third-party wholesale plugins',
    highlight: 'magento',
  },
  {
    factor: 'Multi-Store Architecture',
    magento: 'Native multi-website & multi-currency in one backend',
    shopify: 'Multi-store via expansion or Shopify Markets',
    woocommerce: 'Requires complex WordPress multisite setup',
    highlight: 'magento',
  },
  {
    factor: 'Code Customization',
    magento: '100% open source; complete code & module control',
    shopify: 'Constrained by Liquid & Shopify app ecosystem',
    woocommerce: 'High flexibility within PHP & WordPress framework',
    highlight: 'magento',
  },
  {
    factor: 'ERP & System Integrations',
    magento: 'Enterprise grade (SAP, NetSuite, Oracle, Microsoft)',
    shopify: 'App marketplace & Storefront APIs',
    woocommerce: 'Plugin-based or custom REST endpoints',
    highlight: 'magento',
  },
  {
    factor: 'Hosting & Infrastructure',
    magento: 'Dedicated cloud / AWS / VPS architecture needed',
    shopify: 'Fully managed cloud SaaS hosting',
    woocommerce: 'Runs on standard shared/VPS WordPress hosting',
  },
  {
    factor: 'Ongoing Maintenance',
    magento: 'Requires specialized technical Magento engineering',
    shopify: 'Managed platform updates handled by Shopify',
    woocommerce: 'Regular plugin, theme & core updates required',
  },
  {
    factor: 'Best Suited For',
    magento: 'Complex, enterprise B2B, multi-store, large catalogs',
    shopify: 'Direct-to-consumer brands wanting managed simplicity',
    woocommerce: 'Content-driven stores already on WordPress',
  },
]

const differentiators = [
  {
    title: 'One In-House Team',
    desc: 'Ecommerce strategists, backend Magento engineers, Hyvä theme specialists, and DevOps architects collaborating under one roof.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Magento only when your catalog complexity or B2B model justifies it; otherwise, we direct you to simpler options.',
  },
  {
    title: 'Business-First Architecture',
    desc: 'We map out pricing matrices, customer tiers, and ERP workflows before development begins to avoid expensive rework.',
  },
  {
    title: 'Upgrade-Safe Custom Modules',
    desc: 'We engineer bespoke modules strictly following Adobe Magento guidelines, ensuring seamless future version upgrades.',
  },
  {
    title: 'SEO-Ready Foundations',
    desc: 'Faceted navigation canonicals, schema markup, product indexing controls, and image optimizations are built in from day one.',
  },
  {
    title: 'Bangladesh & Global Payment Routing',
    desc: 'We integrate local mobile wallets (bKash/Nagad) alongside international gateways (Stripe/PayPal) for cross-border commerce.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* PART 1: CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Enterprise Commerce / Scope of Work
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Magento Capabilities
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We deliver end-to-end Magento solutions built to handle true operational complexity, high catalog volume, and advanced B2B workflows.
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
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t-2 border-frame-border/60 pt-6 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PART 2: COMMERCIAL MODELS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Commercial Models / Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Solutions for Complex Commerce
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento excels when enterprise commerce demands specialized architecture, deep integration, and granular operational control.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, index) => (
              <article key={index} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    Model 0{index + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PART 3: COMPARISON MATRIX */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Decision / Benchmark
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Magento vs Shopify vs WooCommerce
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Evaluate platform capabilities against your catalog volume, B2B requirements, and infrastructure preferences.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[680px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Magento 2 / Adobe</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Shopify</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WooCommerce</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-7 font-bold text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-7 ${row.highlight === 'magento' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.magento}
                    </td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.shopify}</td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.woocommerce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PART 4: WHY CHOOSE US */}
      <section className="bg-frame-muted/10 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Us for Magento Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We combine high-level enterprise commerce strategy with rigorous module engineering, load testing, and long-term support.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {differentiators.map((diff, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Differentiator 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {diff.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
