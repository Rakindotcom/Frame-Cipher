import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Starter Store',
    for: 'New merchants launching a focused, conversion-ready store',
    price: '৳65,000',
    products: 'Up to 50 products',
    timeline: '2–3 weeks',
    platform: 'Shopify / WooCommerce',
    features: [
      'Strategy & Consultation',
      'Store Architecture',
      'Product & UI/UX Design',
      'bKash / Nagad Integration',
      'Product Schema & SEO Setup',
      'Launch Support',
    ],
  },
  {
    name: 'Growth Store',
    for: 'Growing merchants needing broader catalogs and integrations',
    price: '৳130,000',
    products: 'Up to 300 products',
    timeline: '4–6 weeks',
    platform: 'Shopify / WooCommerce',
    featured: true,
    features: [
      'Strategy & Consultation',
      'Advanced Store Architecture',
      'Product & UI/UX Design',
      'bKash / Nagad Integration',
      'International Payment Gateway',
      'Product Schema & SEO Setup',
      'Inventory & Order Management',
      'Shipping & Logistics Integration',
      'Custom Functionality (as scoped)',
      'Extended Launch Support',
    ],
  },
  {
    name: 'Enterprise Store Build',
    for: 'Established retailers with complex catalogs and multi-system requirements',
    price: '৳250,000+ / Custom Quote',
    products: '300+ products',
    timeline: '6–10+ weeks',
    platform: 'Shopify / WooCommerce / Magento',
    features: [
      'Strategy & Consultation',
      'Advanced Store Architecture',
      'Product & UI/UX Design',
      'bKash / Nagad Integration',
      'International Payment Gateway',
      'Product Schema & SEO Setup',
      'Multi-warehouse Inventory',
      'Shipping & Logistics Integration',
      'Full Custom Functionality',
      'Dedicated Project Management',
      'Extended Post-Launch Support',
    ],
  },
]

const comparisonMatrix = [
  { feature: 'Best for', starter: 'New merchants launching a focused, conversion-ready store', growth: 'Growing merchants needing broader catalogs and integrations', enterprise: 'Established retailers with complex catalogs and multi-system requirements' },
  { feature: 'Starting Price', starter: '৳65,000', growth: '৳130,000', enterprise: '৳250,000+ / Custom Quote' },
  { feature: 'Product Count', starter: 'Up to 50 products', growth: 'Up to 300 products', enterprise: '300+ products' },
  { feature: 'Strategy & Consultation', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Store Architecture', starter: '✓', growth: '✓ Advanced', enterprise: '✓ Advanced' },
  { feature: 'Product & UI/UX Design', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Platform Development', starter: 'Shopify / WooCommerce', growth: 'Shopify / WooCommerce', enterprise: 'Shopify / WooCommerce / Magento' },
  { feature: 'bKash / Nagad Integration', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'International Payment Gateway', starter: '—', growth: '✓', enterprise: '✓' },
  { feature: 'Product Schema & SEO Setup', starter: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Inventory & Order Management', starter: '—', growth: '✓', enterprise: '✓ Multi-warehouse' },
  { feature: 'Shipping & Logistics Integration', starter: '—', growth: '✓', enterprise: '✓' },
  { feature: 'Custom Functionality', starter: '—', growth: '✓ As scoped', enterprise: '✓ Full custom' },
  { feature: 'Dedicated Project Management', starter: '—', growth: '—', enterprise: '✓' },
  { feature: 'Launch Support', starter: '✓', growth: '✓ Extended', enterprise: '✓ Extended Post-Launch Support' },
]

const timelineTable = [
  { package: 'Starter Store', timeline: '2–3 weeks', scope: 'Up to 50 products, Shopify / WooCommerce, bKash / Nagad, core checkout' },
  { package: 'Growth Store', timeline: '4–6 weeks', scope: 'Up to 300 products, international gateways, courier sync, inventory tracking' },
  { package: 'Enterprise Store', timeline: '6–10+ weeks', scope: '300+ products, Magento / custom setup, multi-warehouse, custom APIs' },
]

const ownershipPoints = [
  'Store administrator access',
  'Product and order management access',
  'CMS or content management access',
  'Domain and hosting access where applicable',
  'Agreed design and development deliverables',
  'Handover documentation or guidance',
  'Basic training for supported store management tasks',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment & Value / Clear Estimates
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            E-commerce Website Development Pricing
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Ecommerce website development is custom-quoted based on the size and complexity of your store. Choose from a focused Starter Store for new merchants, a Growth Store for expanding businesses, or an Enterprise Store Build for established retailers with more complex catalogs and integrations. Pricing depends on factors such as product count, platform, payment methods, logistics integrations, custom functionality, and business requirements.
          </p>
        </div>

        {/* 3 PACKAGE CARDS */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-7 md:p-10 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Package Tier 0{idx + 1}
                  </span>
                  {pkg.featured && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Starting Price</span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                  <div className="mt-3 text-xs font-semibold text-frame-muted-fg flex justify-between border-t border-frame-border/40 pt-2">
                    <span>Catalog: {pkg.products}</span>
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                  <div className="mt-1 text-[11px] font-bold text-frame-accent">
                    Platform: {pkg.platform}
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON MATRIX - STRICTLY H2 */}
        <div className="mt-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Side-by-Side Breakdown
            </p>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Technical Architecture & Platform Comparison
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
              Compare package deliverables, capabilities, and system integrations to find the right scope for your store.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full min-w-[720px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-frame-border bg-frame-muted/40">
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent w-1/4">
                    Feature / Deliverable
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg w-1/4">
                    Starter Store
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent w-1/4 bg-frame-accent/10">
                    Growth Store
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg w-1/4">
                    Enterprise Store Build
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm font-medium">
                {comparisonMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-frame-fg border-r border-frame-border/40">
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg border-r border-frame-border/40">
                      {row.starter}
                    </td>
                    <td className="p-4 md:p-5 font-semibold text-frame-fg border-r border-frame-border/40 bg-frame-accent/5">
                      {row.growth}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-frame-border bg-frame-muted/20 p-5">
            <p className="text-xs md:text-sm font-medium text-frame-muted-fg">
              The packages provide a starting framework, not fixed limits for every project. We can adjust the scope based on your catalog, platform, integrations, and operational requirements.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* TIMELINE / DURATION - STRICTLY H2 */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Delivery Windows</span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            E-commerce Website Development Timeline
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            Ecommerce projects typically take 2&ndash;10+ weeks depending on catalog size, platform, integrations, content readiness, and custom functionality.
          </p>

          <div className="mt-8 overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-frame-border bg-frame-muted/40">
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent">Package</th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent">Timeline</th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg">Catalog & Scope Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm font-medium">
                {timelineTable.map((item, tIdx) => (
                  <tr key={tIdx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-5 font-bold text-frame-fg">{item.package}</td>
                    <td className="p-4 md:p-5 text-frame-accent font-bold">{item.timeline}</td>
                    <td className="p-4 md:p-5 text-frame-muted-fg">{item.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* WEBSITE OWNERSHIP & POST-LAUNCH MAINTENANCE - STRICTLY H2 */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {/* Ownership */}
          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Asset Control</span>
              <h2 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Ownership, Store Management & Handover
              </h2>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Your ecommerce store should remain a manageable business asset after launch. The project agreement defines ownership, access, deliverables, and handover terms. Depending on the platform and scope, this can include:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                {ownershipPoints.map((item, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-xs font-medium italic text-frame-muted-fg border-t border-frame-border/60 pt-4">
              We also explain which updates and technical changes are included in the original project and which are handled through ongoing maintenance or a separate scope.
            </p>
          </div>

          {/* Post-Launch Support & Maintenance */}
          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Operational Stability</span>
              <h2 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Post-Launch Support & E-commerce Maintenance
              </h2>
              <div className="mt-4 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                <p>
                  After launch, your store may need ongoing technical updates, security maintenance, backups, performance checks, product or feature updates, and troubleshooting.
                </p>
                <p>
                  Development projects include the launch support and handover defined in the project agreement. Ongoing maintenance, new features, larger changes, and continued optimization can be handled through a separate maintenance scope.
                </p>
                <p>
                  We do not guarantee a specific sales volume or conversion rate from development alone. Results also depend on traffic, pricing, product-market fit, offers, customer demand, marketing, and competition.
                </p>
                <p className="font-semibold text-frame-fg">
                  Our role is to build the technical and conversion-focused foundation your ecommerce business can continue to grow from.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-frame-border/60 pt-6">
              <PosterButton href="/contact" className="w-full">
                Talk to Our Build Team &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

        {/* SERVICE AREAS - STRICTLY H2 */}
        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Coverage</span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Service Areas: Bangladesh & Worldwide
          </h2>
          <div className="mt-4 grid gap-px border border-frame-border bg-frame-border sm:grid-cols-2 max-w-4xl">
            <div className="bg-frame-bg p-5 md:p-6">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Headquartered in Dhaka</span>
              <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                {[
                  'Based in Dhaka, Bangladesh',
                  'Bkash & Nagad integration as a standard build item',
                  'Mobile-first testing for local connections',
                  'Built for delivery, COD & local logistics',
                ].map((pt, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-frame-bg p-5 md:p-6">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Serving the World</span>
              <ul className="mt-3 space-y-2 text-xs md:text-sm font-medium text-frame-fg/90">
                {[
                  'Clients in the UAE, US, UK, Australia & Canada',
                  'Delivered for clients in 20+ countries',
                  'Payment behavior, logistics & market expectations',
                  'No single-market template applied everywhere',
                ].map((pt, wIdx) => (
                  <li key={wIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            Framecipher is based in Dhaka, Bangladesh, and builds e-commerce stores for merchants across Bangladesh as well as clients worldwide. Our process is built to handle different payment behavior, logistics needs, and market expectations.
          </p>
        </div>
      </div>
    </section>
  )
}
