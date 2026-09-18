import { SectionIntro, SectionLabel } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Store Strategy & Catalog Architecture',
    description: 'We structure your collections, product taxonomies, customer journeys, and conversion funnels before writing code.',
    bullets: [
      'Product catalog modeling, tags, and automated smart collections.',
      'Navigation taxonomy and mobile-first category browsing.',
      'Shopify plan assessment (Basic, Shopify, Advanced, or Plus).',
      'App stack architecture eliminating redundant monthly app costs.',
    ],
  },
  {
    tag: 'Service 02',
    title: 'Custom Liquid Theme Development',
    description: 'We develop bespoke Shopify storefronts tailored to your visual identity rather than simply tweaking an existing template.',
    bullets: [
      'Pixel-accurate, mobile-first responsive storefront layouts.',
      'Custom Product Detail Page (PDP) layouts with sticky Add-to-Cart.',
      'Engaging collection page filtering, badges, and quick-view modals.',
      'Brand-focused typography scales and conversion-engineered CTAs.',
    ],
  },
  {
    tag: 'Service 03',
    title: 'Shopify Online Store 2.0 Development',
    description: 'Modular theme architecture built with JSON templates, reusable sections, and dynamic metafields for effortless merchant editing.',
    bullets: [
      'Customizable drag-and-drop sections available on every page.',
      'Metafields and dynamic metaobjects for rich product specifications.',
      'App blocks and theme app extensions avoiding core code conflicts.',
      'Clean Liquid code adhering to Shopify theme development standards.',
    ],
  },
  {
    tag: 'Service 04',
    title: 'App Architecture & Custom App Development',
    description: 'Disciplined app selection and custom app engineering using Shopify APIs and Functions to extend commerce workflows.',
    bullets: [
      'App performance auditing to eliminate render-blocking scripts.',
      'Shopify Functions for custom discount rules and cart validations.',
      'Custom private or public Shopify app development (Node/Remix).',
      'Admin API, Storefront API, and webhook integration pipelines.',
    ],
  },
  {
    tag: 'Service 05',
    title: 'Shopify Plus & B2B Wholesale Development',
    description: 'Scaling wholesale commerce with company accounts, custom price lists, volume discounts, and checkout UI extensions.',
    bullets: [
      'Company accounts with multiple buyer locations and roles.',
      'Customized B2B catalogs, wholesale pricing, and payment terms (Net 30).',
      'Checkout UI extensions tailored to enterprise operational needs.',
      'Multipass authentication and ERP / warehouse system synchronization.',
    ],
  },
  {
    tag: 'Service 06',
    title: 'Migration & Platform Replatforming',
    description: 'Migrating from WooCommerce, Magento, BigCommerce, or Wix to Shopify while safeguarding all customer, order, and SEO data.',
    bullets: [
      'Product catalog, variants, and historical customer/order migrations.',
      'Comprehensive 301 redirect mapping protecting search rankings.',
      'Review and replacement of outdated legacy plugins with modern apps.',
      'Pre-launch staging audits and smooth DNS cutover with zero downtime.',
    ],
  },
  {
    tag: 'Service 07',
    title: 'Multi-Market, Currency & Language Setup',
    description: 'Expanding your reach globally with Shopify Markets, localized currencies, country-specific domains, and multilingual content.',
    bullets: [
      'Shopify Markets configuration for regional pricing and duties.',
      'Multi-currency checkout and automatic geolocation currency switchers.',
      'Multilingual storefront setup with hreflang SEO architecture.',
      'International shipping rules and localized tax configurations.',
    ],
  },
  {
    tag: 'Service 08',
    title: 'Performance, Core Web Vitals & SEO',
    description: 'Engineering for speed and organic visibility, ensuring rapid mobile page loads and structured search engine snippets.',
    bullets: [
      'Image optimization, lazy loading, and asset minification.',
      'JSON-LD structured data schema for rich product and review snippets.',
      'Canonical URL tuning to prevent duplicate collection URL issues.',
      'Core Web Vitals profiling to maintain sub-second LCP scores.',
    ],
  },
  {
    tag: 'Service 09',
    title: 'Merchant Handover & Operations Training',
    description: 'Empowering your internal team to run day-to-day store operations without ongoing reliance on external developers.',
    bullets: [
      'Personalized live training on product updates and inventory control.',
      'Step-by-step video tutorials on updating homepage promotional banners.',
      'Guidance on discount creation, customer management, and analytics.',
      'Full administrative ownership transferred directly to your account.',
    ],
  },
]

const businessNeeds = [
  {
    title: 'Direct-to-Consumer (D2C) Brands',
    desc: 'Fashion, beauty, lifestyle, and consumer brands that require elevated visual storytelling, high-speed mobile pages, and upsell features.',
  },
  {
    title: 'High-Growth International Retailers',
    desc: 'Merchants selling across the US, UK, Canada, Australia, and UAE utilizing Shopify Markets for localized currencies, languages, and pricing.',
  },
  {
    title: 'B2B Wholesale Operations',
    desc: 'Wholesale suppliers needing gated pricing, corporate company accounts, purchase order workflows, and volume discount rules.',
  },
  {
    title: 'Replatforming & Scaling Merchants',
    desc: 'Stores outgrowing fragile WooCommerce setups or complex Magento installs seeking rock-solid reliability and simplified administration.',
  },
  {
    title: 'Omnichannel & POS Retailers',
    desc: 'Businesses operating physical retail brick-and-mortar stores alongside online shops, syncing inventory via Shopify POS.',
  },
  {
    title: 'Subscription & Recurring Order Brands',
    desc: 'Brands offering subscribe-and-save incentives, recurring delivery schedules, and client self-service subscription management portals.',
  },
]

const comparisonData = [
  {
    factor: 'Hosting & Infrastructure',
    shopify: 'Fully managed cloud SaaS with 99.99% uptime',
    woocommerce: 'Self-hosted (Requires separate server/host setup)',
    magento: 'Requires specialized cloud VPS / AWS architecture',
    highlight: 'shopify',
  },
  {
    factor: 'Ease of Merchant Management',
    shopify: 'Intuitive, centralized, zero-technical-overhead dashboard',
    woocommerce: 'Familiar WordPress admin; plugin update management',
    magento: 'Complex interface requiring trained technical operators',
    highlight: 'shopify',
  },
  {
    factor: 'App & Extension Security',
    shopify: 'Vetted Shopify App Store with strict sandbox review',
    woocommerce: 'Open-source plugins with variable security & conflict risk',
    magento: 'Enterprise modules requiring manual developer audits',
    highlight: 'shopify',
  },
  {
    factor: 'Custom Theme Architecture',
    shopify: 'Modular Online Store 2.0 sections & clean Liquid',
    woocommerce: 'PHP template hierarchy or page builders',
    magento: 'Complex XML layouts, PHP, or modern Hyvä themes',
  },
  {
    factor: 'Checkout Optimization',
    shopify: 'World’s highest-converting one-page checkout; Plus for UI',
    woocommerce: 'Fully customizable, but prone to cart friction',
    magento: 'Customizable multi-step checkout requiring tuning',
    highlight: 'shopify',
  },
  {
    factor: 'B2B & Wholesale Capabilities',
    shopify: 'Built-in on Shopify Plus (catalogs, company accounts)',
    woocommerce: 'Requires multiple third-party wholesale plugins',
    magento: 'Comprehensive native B2B features in Adobe Commerce',
  },
  {
    factor: 'Server & Security Patches',
    shopify: 'Zero maintenance; automatic PCI-DSS compliance',
    woocommerce: 'Frequent core, database, and plugin updates required',
    magento: 'Heavy ongoing security patching and server maintenance',
    highlight: 'shopify',
  },
  {
    factor: 'Best Suited For',
    shopify: 'Fast-scaling D2C brands, retail brands, international stores',
    woocommerce: 'Content-driven stores already invested in WordPress',
    magento: 'Complex enterprise distributors & 100k+ SKU catalogs',
  },
]

const differentiators = [
  {
    title: 'One In-House Team',
    desc: 'Ecommerce strategists, certified Liquid developers, UI/UX designers, and CRO experts collaborate seamlessly on every build.',
  },
  {
    title: 'Disciplined App Architecture',
    desc: 'We build custom sections in Liquid wherever possible, avoiding the third-party app bloat that slows down typical Shopify stores.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Shopify when its managed infrastructure fits your goals; if WooCommerce or Magento is more appropriate, we explain why.',
  },
  {
    title: 'Local + Global Payment Mastery',
    desc: 'We navigate payment gateway requirements for Bangladesh merchants (evaluating third-party providers) as well as global multi-currency checkout.',
  },
  {
    title: 'SEO & Product Schema Built-In',
    desc: 'We resolve duplicate collection URL paths, inject schema markup for rich snippets, and optimize image assets for search engine rankings.',
  },
  {
    title: 'Complete Merchant Autonomy',
    desc: 'We empower your operations team with modular sections and video guides so you never have to pay a developer to change a banner or add a product.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope of Work
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Shopify Development Capabilities
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build high-converting Shopify stores engineered for speed, clean backend management, and sustainable ecommerce growth.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t-2 border-frame-border pt-6 text-xs sm:text-sm font-medium text-frame-fg">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Commercial Versatility
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Shopify Solutions for Different Business Needs
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              From high-velocity direct-to-consumer flagships to international multi-currency stores, Shopify powers varied commerce models.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 sm:p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">
                  Model {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM COMPARISON TABLE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Technical Decision
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Shopify vs WooCommerce vs Magento
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Compare infrastructure management, app ecosystems, and long-term operating costs to select the right ecommerce engine.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Shopify</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WooCommerce</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Magento 2</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-7 ${row.highlight === 'shopify' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.shopify}
                    </td>
                    <td className="p-5 md:p-7 text-frame-muted-fg leading-relaxed">{row.woocommerce}</td>
                    <td className="p-5 md:p-7 text-frame-muted-fg leading-relaxed">{row.magento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FRAMECIPHER */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Us for Shopify Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We focus on clean code, lightweight architecture, high conversion rates, and total client independence.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Differentiator 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {diff.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

