import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Standard Catalog Build',
    price: '৳250,000',
    delivery: '~6–8 weeks',
    drivers: 'Product volume, multi-attribute catalog structure, custom storefront, payment setup.',
  },
  {
    type: 'Multi-Store / Multi-Region Build',
    price: '৳400,000',
    delivery: '~8–12 weeks',
    drivers: 'Multiple localized storefronts, regional currencies, language setups, expanded catalog.',
  },
  {
    type: 'B2B / Wholesale Build',
    price: '৳500,000+',
    delivery: '~10–14 weeks',
    drivers: 'Customer corporate accounts, custom pricing rules, negotiable quotes, purchase orders.',
  },
  {
    type: 'Enterprise / Custom Integration Build',
    price: 'Custom Quote',
    delivery: '~12–16+ weeks',
    drivers: 'Large-scale ERP/PIM synchronization, custom module engineering, high-availability cloud cluster.',
  },
]

const includedFeatures = [
  'Technical Architecture & Feasibility Discovery',
  'Complex Catalog & Attribute Set Modeling',
  'Custom Storefront Design (Hyvä / Custom Theme)',
  'Local & Global Payment Gateway Integration',
  'Varnish Cache & Performance Tuning',
  'Security Hardening & PCI Compliance Setup',
  'Comprehensive End-to-End QA & Load Testing',
  'Store Administrator Handover & Training',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment / Enterprise Commerce
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Magento Development Pricing
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Magento development pricing depends on the architecture and operational complexity of the store rather than product count alone.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[680px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
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
                  <td className="p-5 md:p-7 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.type}
                  </td>
                  <td className="p-5 md:p-7 text-xl font-bold text-frame-accent font-heading">
                    {tier.price}
                  </td>
                  <td className="p-5 md:p-7 text-sm sm:text-base font-bold text-frame-fg">
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
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-4">
            Included at Every Applicable Tier
          </span>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-frame-fg">
                <span className="text-frame-accent font-black">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE FOOTER / ACTION */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * Final investment and milestones are established following in-depth discovery of data schemas, integration APIs, and server infrastructure.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Magento Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & SUPPORT CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <article className="border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-3">
              Platform Ownership
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Platform Ownership & Admin Handover
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive full administrative access to your Magento admin dashboard, private source code repositories, server hosting environments, and database backups. We provide thorough staff training on catalog management, promotions, and order handling.
            </p>
          </article>

          <article className="border-2 border-frame-border bg-frame-bg p-7 sm:p-9 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent block mb-3">
              Ongoing SLA
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Maintenance & SLA Support
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise commerce requires vigilant maintenance. We offer monthly SLA retainers covering Adobe security patches, extension updates, database indexing, caching tuning, and high-concurrency event monitoring.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
