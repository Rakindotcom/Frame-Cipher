import { SectionIntro, PosterButton } from '../../../Kinetic'

const pricingTiers = [
  { type: 'Blog / Portfolio', price: '৳25,000', drivers: 'Content volume, category taxonomy, and custom visual design.' },
  { type: 'Business Website', price: '৳45,000', drivers: 'Page count, custom post types, lead capture, and CRM integration.' },
  { type: 'E-commerce Store (WooCommerce)', price: '৳90,000', drivers: 'Product count, local payment gateways (bKash/Nagad), and shipping setup.' },
  { type: 'Membership / Directory Site', price: '৳120,000+', drivers: 'User accounts, subscription paywalls, access rules, and custom plugins.' },
  { type: 'Migration or Complex Custom Build', price: 'Custom Quote', drivers: 'Content volume, zero-downtime migration, API integrations, and custom architecture.' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Pricing & Tiers"
          title="WordPress Development Pricing"
        >
          WordPress development pricing depends on the type of website, page count, theme approach, functionality, plugin requirements, and migration needs.
        </SectionIntro>

        <div className="overflow-hidden border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Site Type</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Drives the Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">{tier.type}</td>
                  <td className="p-4 md:p-6 text-base md:text-lg font-bold text-frame-accent">{tier.price}</td>
                  <td className="p-4 md:p-6 text-sm md:text-base text-frame-muted-fg leading-relaxed">{tier.drivers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER / BUTTON PLACEMENT */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * Pricing is indicative rather than fixed. Final pricing is based on the project scope and technical requirements confirmed before development begins.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & MAINTENANCE DETAILS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Website Ownership & Editorial Training
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive full WordPress administrator access, hosting and domain access, custom theme/plugin source files, and editorial training so your team can edit pages, publish posts, and manage sections without ongoing developer reliance.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Support & Maintenance
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Ongoing maintenance can be provided separately, including WordPress core, theme, and plugin updates, automated off-site backups, security monitoring, performance tuning, and technical troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
