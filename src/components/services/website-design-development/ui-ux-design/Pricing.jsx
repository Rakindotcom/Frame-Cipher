import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Single Flow / Landing Page Design',
    price: '৳20,000',
    scope: 'One key flow, up to 5 screens',
    timeline: '~1 week',
    featured: false,
  },
  {
    name: 'Website UI/UX Package',
    price: '৳50,000',
    scope: 'Full site design, up to 15 screens',
    timeline: '~2–3 weeks',
    featured: true,
  },
  {
    name: 'Application / Product Design',
    price: '৳120,000',
    scope: 'Multiple flows, design system, usability testing',
    timeline: '~4–6 weeks',
    featured: false,
  },
  {
    name: 'Complex / Multi-Role Product Design',
    price: 'Custom Quote',
    scope: 'Multiple user types, extensive flows, complex design system',
    timeline: '~6–10+ weeks',
    featured: false,
  },
]

const pricingTableRows = [
  {
    type: 'Single Flow / Landing Page Design',
    price: '৳20,000',
    scope: 'One key flow, up to 5 screens',
    delivery: '~1 week',
  },
  {
    type: 'Website UI/UX Package',
    price: '৳50,000',
    scope: 'Full site design, up to 15 screens',
    delivery: '~2–3 weeks',
  },
  {
    type: 'Application / Product Design',
    price: '৳120,000',
    scope: 'Multiple flows, design system, usability testing',
    delivery: '~4–6 weeks',
  },
  {
    type: 'Complex / Multi-Role Product Design',
    price: 'Custom Quote',
    scope: 'Multiple user types, extensive flows, complex design system',
    delivery: '~6–10+ weeks',
  },
]

const projectCoverageList = [
  'User research and flow mapping',
  'Wireframing',
  'UI design',
  'Interactive prototyping',
  'Responsive and accessibility-aware design',
  'Design system development',
  'Design file handoff',
  'Development support where scoped',
]

const approvalCheckpoints = [
  {
    title: 'Review & Approval',
    description: 'Major stages can include review and approval checkpoints for research, wireframes, visual design, and prototypes.',
  },
  {
    title: 'Revisions',
    description: 'The number of included revision rounds depends on the selected project scope and is defined before work begins.',
  },
  {
    title: 'Handoff Support',
    description: 'After final approval, we can provide clarification and implementation support where included in the project scope.',
  },
  {
    title: 'Post-Delivery Support',
    description: 'Additional design changes, new features, extended design-system work, and future product updates can be handled as a separate scope.',
  },
]

const postLaunchItems = [
  'New feature and screen design',
  'User-flow improvements',
  'Usability issue resolution',
  'Design-system expansion',
  'Interface updates',
  'Conversion-focused UX improvements',
  'Periodic UX reviews',
  'Design support for product iterations',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-frame-bg text-frame-fg scroll-mt-20">
      {/* SECTION 1: UI/UX DESIGN PRICING AND TIMELINE */}
      <section className="border-t-2 border-frame-border px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Investment &amp; Packages
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              UI/UX Design Pricing and Timeline
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              UI/UX design pricing depends on project scope, the number of screens or flows, product complexity, research requirements, usability testing, and the amount of design-system work involved.
            </p>
          </div>

          {/* PRICING REFERENCE TABLE */}
          <div className="mt-12 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Price</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Scope</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {pricingTableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{row.type}</td>
                    <td className="p-5 md:p-7 font-heading text-lg md:text-xl font-black text-frame-accent">{row.price}</td>
                    <td className="p-5 md:p-7 text-sm md:text-base text-frame-muted-fg leading-relaxed">{row.scope}</td>
                    <td className="p-5 md:p-7 font-bold text-frame-fg">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DETAILED PACKAGE CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                  pkg.featured
                    ? 'border-frame-accent bg-frame-accent/5'
                    : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Delivery: {pkg.timeline}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {pkg.scope}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton
                    href="/contact"
                    variant={pkg.featured ? 'accent' : 'outline'}
                    className="w-full text-xs"
                  >
                    Select Plan &rarr;
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* TYPICAL PROJECT COVERAGE */}
          <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-4">
              Typical project coverage can include:
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-medium text-frame-fg">
              {projectCoverageList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 border border-frame-border bg-frame-bg p-3">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-frame-border">
              <p className="text-xs sm:text-sm font-medium text-frame-muted-fg italic">
                Pricing is finalized after reviewing your actual project requirements.
              </p>
              <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REVISIONS, APPROVALS & POST-DELIVERY SUPPORT */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Collaboration &amp; Governance
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Revisions, Approvals &amp; Post-Delivery Support
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              UI/UX projects work best when feedback happens at the right stage instead of being saved until the end.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {approvalCheckpoints.map((chk, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Checkpoint 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {chk.title}
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {chk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg italic">
              We do not guarantee a specific conversion rate or business outcome from design alone. Results can also depend on content, implementation, traffic, pricing, marketing, product quality, and other factors outside the design process.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: POST-LAUNCH UX SUPPORT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Product Evolution
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Post-Launch UX Support
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Launching a product does not mean the design work has to stop. New features, user feedback, analytics, and business changes can reveal opportunities for further improvement.
            </p>
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
            <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg mb-4">
              Post-launch UX support can include:
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-medium text-frame-fg">
              {postLaunchItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 border border-frame-border bg-frame-bg p-3">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-frame-border pt-6">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                This service is useful for businesses that want to keep their product experience consistent as the product grows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
