import { SectionIntro, PosterButton } from '../../Kinetic'

const pricingTiers = [
  {
    service: 'Landing Page',
    range: '৳20,000 – ৳40,000',
    description: 'Single-offer campaign page with focused copy and core lead capture.',
  },
  {
    service: 'Business Website',
    range: '৳50,000 – ৳100,000',
    description: 'Multi-page conversion website with CMS, lead forms, and buyer journey mapping.',
  },
  {
    service: 'eCommerce Website',
    range: '৳80,000 – ৳180,000+',
    description: 'Online store with bKash/Nagad/Cards checkout, inventory, and logistics.',
  },
  {
    service: 'Website Redesign',
    range: '৳45,000 – ৳100,000+',
    description: 'Rebuilding underperforming sites while preserving valuable SEO rankings.',
  },
]

const timelines = [
  {
    type: 'Landing Page',
    time: '1–2 weeks',
    scope: 'Single-offer campaign page, focused messaging, and analytics setup.',
  },
  {
    type: 'Business Website',
    time: '3–5 weeks',
    scope: 'Multi-page corporate site with custom CMS, lead capture, and service structures.',
  },
  {
    type: 'eCommerce Website',
    time: '6–10 weeks',
    scope: 'Catalog architecture, product filtering, bKash/Nagad/Cards payment, and courier dispatch.',
  },
  {
    type: 'Website Redesign',
    time: '4–8 weeks',
    scope: 'Technical audit, UX overhaul, performance boost, and SEO rankings preservation.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment & Scope
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Website Development Pricing
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Website design and development pricing depends on the platform, page count, custom functionality required, and whether you need ongoing maintenance included.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full min-w-[640px] text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Service</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Range</th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Summary</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.service}
                  </td>
                  <td className="p-4 md:p-6 text-base md:text-lg font-bold text-frame-accent">
                    {tier.range}
                  </td>
                  <td className="p-4 md:p-6 text-sm md:text-base text-frame-muted-fg">
                    {tier.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER / NOTE */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b-2 border-frame-border pb-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            These are indicative ranges, not fixed packages. We provide a custom quotation after reviewing your project requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>

        {/* TIMELINE SECTION (H2) */}
        <div className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-2">
              Execution Cadence
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Website Development Timeline
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Typical project timelines depend on scope, content readiness, revisions, and client approvals. Complex integrations, custom applications, and large product catalogs may require additional time.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Estimated Timeline</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Context</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((item, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{item.type}</td>
                    <td className="p-4 md:p-6 font-bold text-frame-accent">{item.time}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{item.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BANGLADESH & WORLDWIDE + WARRANTY & ONGOING SUPPORT */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Local & International Reach
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Development for Bangladesh and Worldwide
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Frame Cipher works with businesses in Dhaka and across Bangladesh, as well as clients worldwide. We build websites for startups, small businesses, eCommerce brands, and established companies.
              </p>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                For Bangladesh-based businesses, we can consider local payment options (bKash/Nagad), Bangla-English content requirements, and relevant business workflows where needed. For international projects, we consider the target market, platform requirements, and business goals across Bangladesh, the UAE, the US, the UK, Australia, Canada, and other markets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-frame-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-fg">
                Active Markets: Bangladesh · USA · UK · Australia · Canada · UAE
              </span>
            </div>
          </div>

          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Quality & Accountability
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Warranty and Ongoing Support
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We review design and development milestones with you before moving to the next stage. This helps keep the project aligned with your expectations and reduces surprises at launch.
              </p>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                After launch, we can provide guidance on maintenance, updates, and future improvements. Ongoing maintenance may include technical updates, security monitoring, backups, and fixes based on the agreed scope.
              </p>
              <p className="mt-3 text-xs md:text-sm font-semibold text-frame-muted-fg italic border-t border-frame-border/40 pt-3">
                * Website performance and business results depend on content, marketing, technical implementation, and market conditions. We do not promise specific traffic or conversion outcomes from development alone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-frame-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">
                Milestone Reviews · Full Asset Handover · Retainer Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
