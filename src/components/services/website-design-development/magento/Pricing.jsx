import { PosterButton, SectionIntro } from '../../../Kinetic'

const costDrivers = [
  'Catalog size and product structure',
  'Custom Magento modules',
  'B2B functionality',
  'Multi-store requirements',
  'ERP, CRM, PIM, or OMS integrations',
  'Payment and shipping integrations',
  'Migration and data transformation',
  'Hyvä or custom storefront development',
  'Performance and infrastructure requirements',
  'Testing and deployment requirements',
]

const packages = [
  {
    name: 'Standard Catalog Build',
    price: '৳250,000',
    timeline: '~6–8 weeks',
    description: 'Product volume, catalog structure, theme customization',
  },
  {
    name: 'Multi-Store / Multi-Region Build',
    price: '৳400,000',
    timeline: '~8–12 weeks',
    description: 'Multiple storefronts, regional requirements, expanded catalog',
  },
  {
    name: 'B2B / Wholesale Build',
    price: '৳500,000+',
    timeline: '~10–14 weeks',
    description: 'Customer groups, pricing rules, quote workflows, integrations',
  },
  {
    name: 'Enterprise / Custom Integration Build',
    price: 'Custom Quote',
    timeline: '~12–16+ weeks',
    description: 'Large-scale integrations, custom modules, infrastructure',
  },
]

const includedAtEveryTier = [
  'Strategy & Consultation',
  'Catalog & Store Architecture',
  'Custom Theme Development',
  'Payment Integration',
  'Security Hardening',
  'Performance Optimization',
  'Testing & Launch Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment &amp; Timelines" title="Magento Development Pricing &amp; Timeline">
          Magento development pricing depends on the architecture and operational complexity of the store rather than product count alone.
        </SectionIntro>

        {/* COST DRIVERS LIST */}
        <div className="mb-12 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Common Cost Drivers Include:
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg">{driver}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INDICATIVE PROJECT PRICING PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-border/80"
            >
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                  {pkg.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.price === 'Custom Quote' ? 'accent' : 'outline'} className="w-full text-xs">
                  {pkg.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Request Quote'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUDED AT EVERY APPLICABLE TIER */}
        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Included at Every Applicable Tier
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {includedAtEveryTier.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-sm md:text-base font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm text-frame-muted-fg border-t border-frame-border/60 pt-4">
            Final pricing depends on the confirmed technical scope. Starting prices should be treated as indicative until the project requirements are reviewed.
          </p>
          <div className="mt-6">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}