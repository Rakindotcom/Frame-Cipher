import { PosterButton } from '../../../Kinetic'

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

const pricingTiers = [
  {
    type: 'Standard Catalog Build',
    price: '৳250,000',
    drivers: 'Product volume, catalog structure, theme customization',
    delivery: '~6–8 weeks',
  },
  {
    type: 'Multi-Store / Multi-Region Build',
    price: '৳400,000',
    drivers: 'Multiple storefronts, regional requirements, expanded catalog',
    delivery: '~8–12 weeks',
  },
  {
    type: 'B2B / Wholesale Build',
    price: '৳500,000+',
    drivers: 'Customer groups, pricing rules, quote workflows, integrations',
    delivery: '~10–14 weeks',
  },
  {
    type: 'Enterprise / Custom Integration Build',
    price: 'Custom Quote',
    drivers: 'Large-scale integrations, custom modules, infrastructure',
    delivery: '~12–16+ weeks',
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

const supportItems = [
  'Magento updates',
  'Security patch assistance',
  'Performance checks',
  'Integration troubleshooting',
  'Extension compatibility review',
  'Minor development changes',
  'Technical maintenance',
  'SEO-related technical updates',
  'Backup and recovery support',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-frame-bg text-frame-fg scroll-mt-20">
      {/* 1. MAGENTO DEVELOPMENT PRICING & TIMELINE */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Investment &amp; Timelines
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Magento Development Pricing &amp; Timeline
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Magento development pricing depends on the architecture and operational complexity of the store rather than product count alone.
            </p>
          </div>

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

          {/* INDICATIVE PROJECT PRICING TABLE */}
          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[680px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">{tier.type}</td>
                    <td className="p-4 md:p-6 text-base md:text-lg font-bold text-frame-accent">{tier.price}</td>
                    <td className="p-4 md:p-6 text-sm md:text-base text-frame-muted-fg leading-relaxed">{tier.drivers}</td>
                    <td className="p-4 md:p-6 text-sm md:text-base font-bold text-frame-fg">{tier.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* 2. POST-LAUNCH SUPPORT & WARRANTY */}
      <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Stability &amp; Operations
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Post-Launch Support &amp; Warranty
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Launching a Magento store is only one part of the project. Ongoing maintenance helps keep the store secure, stable, and compatible as the business and its technology environment change.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* POST-LAUNCH SUPPORT */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Ongoing Maintenance
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Post-Launch Support
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
                  Support can include:
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base font-medium text-frame-fg/90">
                  {supportItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WARRANTY & WORKMANSHIP */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Accountability &amp; Scope
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Warranty &amp; Workmanship
                </h3>
                <div className="mt-4 space-y-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  <p>
                    Any post-launch warranty or workmanship coverage should follow the exact terms agreed in the project contract.
                  </p>
                  <p>
                    We do not guarantee a specific sales volume, revenue figure, traffic level, or conversion rate from the website alone. Ecommerce results also depend on products, pricing, traffic, competition, customer demand, marketing, and other factors outside the development project.
                  </p>
                  <p className="text-frame-fg font-semibold border-t border-frame-border/60 pt-3">
                    Our responsibility is to deliver the agreed architecture, functionality, integrations, and technical implementation according to the approved scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
