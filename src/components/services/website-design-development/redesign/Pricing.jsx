import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    type: 'Visual Refresh',
    price: '৳35,000',
    delivery: '~2–3 weeks',
    drivers: 'Updating visual styling, colors, and typography on an existing solid platform without structural sitemap changes.',
  },
  {
    type: 'Standard Redesign',
    price: '৳75,000',
    delivery: '~4–6 weeks',
    drivers: 'Full site audit, UX restructuring, modern visual redesign, mobile overhaul, and targeted SEO redirect mapping.',
  },
  {
    type: 'Platform Migration Redesign',
    price: '৳150,000',
    delivery: '~6–10 weeks',
    drivers: 'Moving to a modern platform (Next.js, Webflow, Shopify), complete content/database transfer, and total SEO migration.',
  },
  {
    type: 'Complex / Ecommerce Redesign',
    price: 'Custom Quote',
    delivery: '~8–14+ weeks',
    drivers: 'High-volume product catalogs, complex third-party ERP/CRM integrations, custom database schemas, multi-region stores.',
  },
]

const includedFeatures = [
  'Pre-Redesign Diagnostic Performance Audit',
  'SEO Equity & Organic Keyword Inventory',
  'Bespoke Responsive UI/UX Design System',
  '1-to-1 Permanent 301 URL Redirect Mapping',
  'Core Web Vitals & Mobile Usability Tuning',
  'Staging Environment Validation & Functional QA',
  'Zero-Downtime DNS Cutover & Google Submission',
  'Post-Launch Indexing & Traffic Monitoring',
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
            Website Redesign Pricing in Bangladesh
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Website redesign pricing depends on how much of the current website needs to change, the underlying platform, page count, content migration, and SEO requirements.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Redesign Scope</th>
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
            Included Across Every Redesign Project
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
            * Every redesign starts with an audit. Final pricing is confirmed after reviewing your existing URLs, page count, and technical platform.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request Your Redesign Audit &rarr;</PosterButton>
          </div>
        </div>

        {/* OWNERSHIP & POST LAUNCH DETAILS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Ownership</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Full Ownership & Clean Handover
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You maintain 100% ownership of your domain, hosting, code repositories, CMS credentials, and analytics data. We provide clean documentation and staff training on managing the redesigned interface.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">Monitoring</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch SEO Monitoring & Maintenance
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Following cutover, we actively monitor Google Search Console indexing, 404 crawl logs, and ranking keywords to confirm organic continuity. Ongoing retainers are available for continuous conversion optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

