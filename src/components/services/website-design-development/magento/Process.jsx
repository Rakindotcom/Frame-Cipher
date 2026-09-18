const steps = [
  {
    number: '01',
    title: 'Consultation & Feasibility',
    description: 'We review your catalog volume, B2B purchasing rules, ERP systems, third-party integrations, and confirm Magento platform fit.',
  },
  {
    number: '02',
    title: 'Catalog Architecture',
    description: 'We design attribute sets, multi-store hierarchy, customer groups, B2B quoting logic, and technical integration blueprints.',
  },
  {
    number: '03',
    title: 'UX & Storefront Design',
    description: 'We map navigation, category filtering, product pages, checkout flows, and mobile layouts around customer purchasing patterns.',
  },
  {
    number: '04',
    title: 'Magento Module Development',
    description: 'We build custom modules, configure Hyvä or custom themes, implement B2B account logic, and configure payment engines.',
  },
  {
    number: '05',
    title: 'Data Migration & Integrations',
    description: 'We connect ERP/CRM APIs, configure payment gateways (bKash, Nagad, Stripe), and migrate customer, order, and SKU data.',
  },
  {
    number: '06',
    title: 'Security & Load Testing',
    description: 'We run load tests under peak traffic conditions, verify full-page Varnish caching, test payment workflows, and audit security.',
  },
  {
    number: '07',
    title: 'Production Launch & Handover',
    description: 'We execute production deployment, verify live transaction pipelines, hand over credentials, and provide administrator training.',
  },
]

const timelines = [
  { type: 'Standard Catalog Build', time: '~6–8 weeks', scope: 'Catalog architecture, custom theme, standard payments, shipping setup' },
  { type: 'Multi-Store / Multi-Region Build', time: '~8–12 weeks', scope: 'Multiple storefronts, localized currencies, languages, expanded product sets' },
  { type: 'B2B / Wholesale Build', time: '~10–14 weeks', scope: 'Customer groups, custom contract pricing, quote workflows, purchase orders' },
  { type: 'Enterprise / Custom Integration Build', time: '~12–16+ weeks', scope: 'Large-scale ERP/PIM integrations, custom modules, high-concurrency infrastructure' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Execution / Engineering Pipeline
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Structured Magento Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We establish an unshakeable architectural foundation before writing code, ensuring scalability across thousands of products and transactions.
          </p>
        </div>

        {/* HOME-STYLE PROCESS CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-80 flex-col justify-between overflow-hidden border-2 border-frame-border bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:border-frame-accent hover:bg-frame-accent"
            >
              <p
                className="absolute -right-2 -top-4 select-none font-heading text-[7.5rem] sm:text-[9rem] font-bold leading-none tracking-tighter text-frame-muted/30 transition-colors duration-300 group-hover:text-frame-accent-fg/20"
                aria-hidden="true"
              >
                {step.number}
              </p>
              <div className="relative z-10">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                  Phase {step.number}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* TIMELINE TABLE */}
        <div className="mt-20 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[600px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Scope</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Inclusions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelines.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-bold text-frame-fg">{item.type}</td>
                  <td className="p-5 md:p-7 font-bold text-frame-accent">{item.time}</td>
                  <td className="p-5 md:p-7 text-xs sm:text-sm text-frame-muted-fg">{item.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
