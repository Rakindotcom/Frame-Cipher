import { SectionIntro, PosterButton } from '../../../Kinetic'

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
      'Custom Product & UI/UX Design',
      'bKash / Nagad Integration',
      'International Payment Gateways',
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
      'Enterprise Store Architecture',
      'Custom Product & UI/UX Design',
      'bKash / Nagad Integration',
      'International Payment Gateways',
      'Full Schema & Advanced SEO',
      'Multi-warehouse Inventory',
      'Automated Courier APIs',
      'Full Custom Functionality & ERP Sync',
      'Dedicated Project Management',
      'Extended Post-Launch Support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Value"
          title="E-commerce Website Development Pricing"
        >
          Clear investment tiers based on catalog volume, platform requirements, payment methods, and operational complexity.
        </SectionIntro>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-7 md:p-9 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/10'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Package Tier
                  </span>
                  {pkg.featured && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Starting Price</span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-frame-muted-fg flex justify-between">
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

        {/* SERVICE AREAS & STORE MANAGEMENT */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Global Delivery & Local Expertise
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka, Bangladesh, and builds ecommerce stores for merchants across Bangladesh as well as clients worldwide in 20+ countries, including UAE, US, UK, Australia, and Canada. For local merchants, bKash/Nagad integration and courier setup come standard.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Store Ownership & Admin Handover
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive full store ownership, product and order management administrator credentials, payment gateway keys, and handover documentation with basic training for your staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
