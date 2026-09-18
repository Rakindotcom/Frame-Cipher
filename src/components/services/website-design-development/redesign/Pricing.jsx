import { PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    name: 'Visual Refresh',
    price: '৳35,000',
    bestFor: 'Best for websites where the existing platform and structure work but the visual experience feels outdated.',
    timeline: '~2–3 weeks',
    scope: [
      'Visual redesign',
      'Responsive UI improvements',
      'Selected UX improvements',
      'Existing-platform implementation',
      'Basic SEO review',
      'Testing and launch support',
    ],
    featured: false,
  },
  {
    name: 'Standard Redesign',
    price: '৳75,000',
    bestFor: 'Best for websites that need broader design, UX, structural, and technical improvements.',
    timeline: '~4–6 weeks',
    scope: [
      'Site audit',
      'UX and information architecture',
      'Visual redesign',
      'Structural improvements',
      'Up to 15 pages',
      'Redirect planning',
      'Content migration',
      'Testing and launch',
    ],
    featured: true,
  },
  {
    name: 'Platform Migration Redesign',
    price: '৳150,000',
    bestFor: 'Best when the existing CMS or platform is limiting the website.',
    timeline: '~6–10 weeks',
    scope: [
      'Full audit',
      'New platform setup',
      'Design implementation',
      'Content migration',
      'URL and redirect mapping',
      'SEO migration',
      'Integration setup',
      'QA and launch support',
    ],
    featured: false,
  },
  {
    name: 'Complex / Ecommerce Redesign',
    price: 'Custom Quote',
    bestFor: 'For larger websites, ecommerce stores, extensive catalogs, complex integrations, or technically demanding migrations.',
    timeline: '~8–14+ weeks',
    scopeTitle: 'Pricing depends on:',
    scope: [
      'Number of pages or products',
      'Platform',
      'Migration complexity',
      'Integrations',
      'Payment systems',
      'Content volume',
      'SEO requirements',
      'Custom functionality',
      'Timeline',
    ],
    featured: false,
  },
]

const pricingTableRows = [
  {
    type: 'Visual Refresh',
    price: '৳35,000',
    bestFor: 'Updating an existing website without major structural changes',
    delivery: '~2–3 weeks',
  },
  {
    type: 'Standard Redesign',
    price: '৳75,000',
    bestFor: 'Design, UX, structural improvements, and selected SEO migration',
    delivery: '~4–6 weeks',
  },
  {
    type: 'Platform Migration Redesign',
    price: '৳150,000',
    bestFor: 'Moving to a new platform with content and SEO migration',
    delivery: '~6–10 weeks',
  },
  {
    type: 'Complex / Ecommerce Redesign',
    price: 'Custom Quote',
    bestFor: 'Large catalogs, complex integrations, or high-complexity migrations',
    delivery: '~8–14+ weeks',
  },
]

const timelineTableRows = [
  { type: 'Visual Refresh', timeline: '~2–3 weeks' },
  { type: 'Standard Redesign', timeline: '~4–6 weeks' },
  { type: 'Platform Migration', timeline: '~6–10 weeks' },
  { type: 'Complex / Ecommerce', timeline: '~8–14+ weeks' },
]

const supportStages = [
  {
    title: 'Client Review & Approval',
    description: 'Major design and structural decisions are presented for review before development progresses.',
  },
  {
    title: 'Pre-Launch Review',
    description: 'The completed website goes through functional, responsive, SEO, content, and technical checks before launch.',
  },
  {
    title: 'Launch Support',
    description: 'We remain involved during the launch process to address issues identified during the transition.',
  },
  {
    title: 'Post-Launch Monitoring',
    description: 'We monitor agreed technical and search signals after launch and investigate issues that require attention.',
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Long-term maintenance, security updates, performance reviews, content updates, and additional feature development can be provided separately when required.',
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-frame-bg text-frame-fg scroll-mt-20">
      {/* SECTION 1: PRICING PACKAGES & SUMMARY TABLE */}
      <section className="border-t-2 border-frame-border px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Investment &amp; Packages
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Redesign Pricing in Bangladesh
            </h2>
            <div className="mt-6 space-y-3 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Website redesign pricing depends on how much of the current website needs to change, the platform being used, page count, content migration, SEO requirements, integrations, and overall project complexity.
              </p>
              <p>
                The following packages provide a starting reference. Final pricing is confirmed after reviewing the existing website and project requirements.
              </p>
            </div>
          </div>

          {/* PRICING REFERENCE TABLE */}
          <div className="mt-12 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Best For</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {pricingTableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{row.type}</td>
                    <td className="p-5 md:p-7 font-heading text-lg md:text-xl font-black text-frame-accent">{row.price}</td>
                    <td className="p-5 md:p-7 text-sm md:text-base text-frame-muted-fg leading-relaxed">{row.bestFor}</td>
                    <td className="p-5 md:p-7 font-bold text-frame-fg">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DETAILED TIERS CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                  tier.featured
                    ? 'border-frame-accent bg-frame-accent/5'
                    : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
                }`}
              >
                <div>
                  {tier.featured && (
                    <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.name}
                  </h3>
                  <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {tier.timeline}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {tier.bestFor}
                  </p>

                  <div className="mt-6 border-t border-frame-border/60 pt-4">
                    <p className="text-xs font-black uppercase tracking-wider text-frame-fg mb-3">
                      {tier.scopeTitle || 'Potential scope includes:'}
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-frame-fg">
                      {tier.scope.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton
                    href="/contact"
                    variant={tier.featured ? 'accent' : 'outline'}
                    className="w-full text-xs"
                  >
                    {tier.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Select Plan'}
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WEBSITE REDESIGN TIMELINE */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Turnaround &amp; Scheduling
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Redesign Timeline
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A website redesign typically takes 2 to 14+ weeks, depending on how much of the website needs rebuilding, whether a platform migration is involved, and the size and complexity of the existing site.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm max-w-3xl">
            <table className="w-full text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelineTableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-5 md:p-6 font-heading text-base font-bold uppercase text-frame-fg">{row.type}</td>
                    <td className="p-5 md:p-6 font-bold text-frame-accent">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8 max-w-4xl space-y-2 text-sm sm:text-base font-medium text-frame-muted-fg leading-relaxed">
            <p>
              Projects can move faster when access to the current website, analytics, hosting, content, and other required systems is provided at the beginning.
            </p>
            <p className="font-bold text-frame-fg">
              The final timeline is confirmed after the audit and scope are established.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: REVIEW, APPROVAL & POST-LAUNCH SUPPORT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Quality Assurance &amp; Handover
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Review, Approval &amp; Post-Launch Support
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A redesign should not move from concept to launch without clear review points.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {supportStages.map((stage, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Checkpoint 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
