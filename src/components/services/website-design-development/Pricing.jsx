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
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Timelines"
          title="Website Development Pricing & Timeline"
        >
          Website design and development pricing depends on the platform, page count, custom functionality required, and whether you need ongoing maintenance included.
        </SectionIntro>

        {/* PRICING TABLE */}
        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full min-w-[640px] text-left">
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
                  <td className="p-4 md:p-6 text-sm md:text-base font-semibold text-frame-fg">
                    {tier.timeline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
            * All estimates exclude domain, third-party hosting, and paid API subscription fees unless explicitly included in your project scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request Detailed Estimate &rarr;</PosterButton>
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Full Authority</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Zero Platform Lock-In
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We hand over complete administrator credentials, hosting access, source repositories, and training. You retain 100% intellectual property ownership of your website upon delivery.
            </p>
          </div>

          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Lifecycle Care</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Optional Post-Launch Maintenance
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Keep your digital investment secure, patched, backed up, and sub-second fast with our monthly retainer care plans starting from ৳5,000/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
