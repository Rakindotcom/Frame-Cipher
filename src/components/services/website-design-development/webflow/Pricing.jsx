import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Marketing Site',
    price: '৳50,000',
    delivery: '~2–3 weeks',
    drivers: 'Standard page count, bespoke visual design, core CMS collections, responsive layout.',
  },
  {
    type: 'Brand / Design-Forward Site',
    price: '৳90,000',
    delivery: '~3–5 weeks',
    drivers: 'Custom animations, expanded CMS collections, modular component design system.',
  },
  {
    type: 'Webflow Ecommerce',
    price: '৳130,000',
    delivery: '~4–6 weeks',
    drivers: 'Product catalog setup, custom cart/checkout styling, payment and tax configuration.',
  },
  {
    type: 'Advanced CMS & Custom Interactions',
    price: 'Custom Quote',
    delivery: '~6–8+ weeks',
    drivers: 'Complex multi-reference relationships, custom JavaScript, third-party API webhooks.',
  },
]

const includedFeatures = [
  'Creative Discovery & Strategy Session',
  'Modular CMS Collection Architecture',
  'Custom Design Built Directly in Webflow',
  'Client-First Class Naming System',
  'On-Page SEO & Schema Markup Integration',
  'Custom Interactions & Micro-Animations',
  'Cross-Device Responsiveness & WCAG Audit',
  'Dedicated CMS Training & Video Documentation',
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
            Webflow Development Pricing & Plans
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Webflow development pricing depends on visual complexity, CMS collection architecture, page count, interactions, and third-party integrations.
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
            * Final pricing and delivery timelines are validated following review of design mockups, CMS field models, and custom script requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Webflow Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & SUPPORT DETAILS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Handoff</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Site Ownership & Workspace Transfer
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Upon final approval, we transfer the Webflow project directly to your Webflow dashboard or team workspace. You retain 100% control over hosting, domains, forms, and assets, accompanied by recorded CMS tutorials.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Partnership</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Ongoing Webflow Support & Retainers
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Our Webflow retainers provide on-demand support for new landing pages, CMS structure expansion, new micro-interactions, third-party webhook updates, and ongoing Core Web Vitals maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

