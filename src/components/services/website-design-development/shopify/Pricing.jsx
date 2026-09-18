import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Starter Store',
    price: '৳45,000',
    delivery: '~1–2 weeks',
    drivers: 'Up to 50 products, customized existing theme, payment gateways, and core settings.',
  },
  {
    type: 'Custom Theme Build',
    price: '৳85,000',
    delivery: '~3–4 weeks',
    drivers: 'Fully bespoke Liquid theme, up to 300 products, modular OS 2.0 sections, standard apps.',
  },
  {
    type: 'Growth Store',
    price: '৳140,000',
    delivery: '~4–6 weeks',
    drivers: 'Large catalog, custom app integrations, conversion rate optimization, Shopify Markets.',
  },
  {
    type: 'Shopify Plus / Custom App',
    price: 'Custom Quote',
    delivery: '~6–10+ weeks',
    drivers: 'High-volume operations, custom private apps, B2B wholesale pricing, checkout UI extensions.',
  },
]

const includedFeatures = [
  'Commercial Discovery & Plan Assessment',
  'Catalog & Collection Architecture',
  'Custom Liquid & Online Store 2.0 Development',
  'Payment Gateway Integration Setup',
  'On-Page SEO & Product JSON-LD Schema',
  'Core Web Vitals & Speed Optimization',
  'Comprehensive End-to-End Checkout Testing',
  'Live Merchant Handoff & Operations Training',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Pricing & Tiers
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Shopify Development Pricing & Plans
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Shopify development pricing depends on customization depth, catalog architecture, app integrations, and specific Shopify plan capabilities.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Scope</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.type}
                  </td>
                  <td className="p-5 md:p-7 text-lg md:text-xl font-bold text-frame-accent">
                    {tier.price}
                  </td>
                  <td className="p-5 md:p-7 text-sm md:text-base font-bold text-frame-fg">
                    {tier.delivery}
                  </td>
                  <td className="p-5 md:p-7 text-xs sm:text-sm md:text-base text-frame-muted-fg leading-relaxed">
                    {tier.drivers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INCLUDED AT EVERY TIER */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-7 sm:p-10">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
            Included at Every Applicable Tier
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-medium text-frame-fg">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE FOOTER / ACTION */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * Final pricing is confirmed after reviewing catalog volume, custom section requirements, and third-party app integration dependencies.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Shopify Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & SUPPORT DETAILS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Handoff</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Store Ownership & Merchant Handover
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              At launch, we transfer full store owner privileges to your Shopify account. You receive complete administrative rights, custom theme code ownership, app credentials, and personalized video training on managing collections, inventory, and promotions.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Partnership</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Support & Retainers
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Keep your store ahead of competitors with ongoing monthly retainers covering seasonal homepage promotions, theme updates, app audits, conversion rate optimization (CRO) experiments, and new feature rollouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

