import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  { type: 'Blog / Portfolio', price: '৳25,000', drivers: 'Content volume, category taxonomy, and custom visual design.' },
  { type: 'Business Website', price: '৳45,000', drivers: 'Page count, custom post types, lead capture, and CRM integration.' },
  { type: 'E-commerce Store (WooCommerce)', price: '৳90,000', drivers: 'Product count, local payment gateways (bKash/Nagad), and shipping setup.' },
  { type: 'Membership / Directory Site', price: '৳120,000+', drivers: 'User accounts, subscription paywalls, access rules, and custom plugins.' },
  { type: 'Migration or Complex Custom Build', price: 'Custom Quote', drivers: 'Content volume, zero-downtime migration, API integrations, and custom architecture.' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment & Tiers / Transparent Pricing
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            WordPress Development Pricing
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Pricing depends on the type of website, page count, custom theme requirements, functionality, third-party integrations, and content migration volume.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full min-w-[640px] text-left">
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

        {/* TABLE FOOTER */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * Pricing is indicative rather than fixed. Final pricing is based on the project scope and technical specifications confirmed before development begins.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & MAINTENANCE CARDS */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Full Ownership</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Website Ownership & Editorial Training
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You receive full WordPress administrator access, hosting credentials, domain DNS ownership, custom theme and plugin source files, and personalized editorial handover training so your team can edit pages and publish content independently.
            </p>
          </div>

          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Ongoing Care</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch WordPress Maintenance
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              WordPress core, theme, and plugin updates, automated off-site backups, security hardening, database indexing, uptime monitoring, and priority technical support can be retained through an ongoing maintenance plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
