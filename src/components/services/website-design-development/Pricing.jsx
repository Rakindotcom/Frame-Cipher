import { SectionIntro, PosterButton } from '../../Kinetic'

const pricingTiers = [
  {
    service: 'Landing Page',
    range: '৳20,000 – ৳40,000',
    timeline: '1–2 weeks',
    description: 'Single-offer campaign page with focused copy and core lead capture.',
  },
  {
    service: 'Business Website',
    range: '৳50,000 – ৳100,000',
    timeline: '3–5 weeks',
    description: 'Multi-page conversion website with CMS, lead forms, and buyer journey mapping.',
  },
  {
    service: 'eCommerce Website',
    range: '৳80,000 – ৳180,000+',
    timeline: '6–10 weeks',
    description: 'Online store with bKash/Nagad/Cards checkout, inventory, and logistics.',
  },
  {
    service: 'Website Redesign',
    range: '৳45,000 – ৳100,000+',
    timeline: '4–8 weeks',
    description: 'Rebuilding underperforming sites while preserving valuable SEO rankings.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Timelines"
          title="Website Development Pricing & Timeline"
        >
          Website design and development pricing depends on the platform, page count, custom functionality required, and whether you need ongoing maintenance included.
        </SectionIntro>

        {/* PRICING TABLE */}
        <div className="overflow-hidden border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Service Type</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Range</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Estimated Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.service}
                    <span className="block mt-1 text-xs font-normal normal-case text-frame-muted-fg font-body">
                      {tier.description}
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-base md:text-lg font-bold text-frame-accent">
                    {tier.range}
                  </td>
                  <td className="p-4 md:p-6 text-sm md:text-base text-frame-muted-fg">
                    {tier.timeline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER / BUTTON PLACEMENT */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * These are indicative ranges, not fixed packages. Complex integrations, custom applications, and large product catalogs may require additional time. We provide a custom quotation after reviewing your project requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* MARKET COVERAGE & WARRANTY */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Global & Regional Scope</span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Website Development for Bangladesh & Worldwide
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Frame Cipher works with businesses in Dhaka and across Bangladesh, as well as clients worldwide in the UAE, US, UK, Australia, and Canada. For local merchants, we configure local payment gateways (bKash, Nagad), mobile-first network optimization, and Bangla-English content structures.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Assurance & Continuity</span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Website Warranty & Ongoing Support
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We review design and development milestones with you before moving to the next stage. After launch, we provide handover guidance and ongoing maintenance options covering security monitoring, automated backups, and technical updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
