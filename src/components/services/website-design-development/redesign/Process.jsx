const steps = [
  {
    number: '01',
    title: 'Site Audit & Diagnosis',
    description: 'We audit your technical performance, mobile usability, crawl errors, user drop-offs, and analytics to identify what is underperforming.',
  },
  {
    number: '02',
    title: 'SEO Equity Inventory',
    description: 'We catalog top-ranking keywords, organic traffic URLs, and backlinks to ensure high-value digital assets are preserved.',
  },
  {
    number: '03',
    title: 'UX & Information Architecture',
    description: 'We re-architect your navigation, sitemap, category relationships, and conversion pathways to eliminate visitor friction.',
  },
  {
    number: '04',
    title: 'Visual & Responsive Design',
    description: 'We modernize your visual brand identity, typography, spacing systems, and interactive UI components in Figma.',
  },
  {
    number: '05',
    title: 'Technical Rebuild',
    description: 'We develop clean, modern code or migrate to a modern platform, eliminating legacy bloat and optimizing Core Web Vitals.',
  },
  {
    number: '06',
    title: '301 Redirects & SEO Cutover',
    description: 'We map comprehensive 1-to-1 URL redirects, verify canonical tags, and preserve meta descriptions for search engines.',
  },
  {
    number: '07',
    title: 'Pre-Launch QA & Testing',
    description: 'We test forms, checkout flows, responsive mobile viewports, cross-browser compatibility, and SSL security on staging.',
  },
  {
    number: '08',
    title: 'Launch & Live Monitoring',
    description: 'We execute zero-downtime DNS cutover, submit new sitemaps to Google Search Console, and actively monitor indexing signals.',
  },
]

const timelines = [
  { type: 'Visual Refresh', time: '~2–3 weeks', scope: 'Visual modernization, typography & color updates, selected layout tuning' },
  { type: 'Standard Redesign', time: '~4–6 weeks', scope: 'Site audit, UX sitemap restructuring, full visual redesign, SEO redirect mapping' },
  { type: 'Platform Migration Redesign', time: '~6–10 weeks', scope: 'New CMS/platform setup, database content & media transfer, complete SEO migration' },
  { type: 'Complex / Ecommerce Redesign', time: '~8–14+ weeks', scope: 'Large product catalogs, complex third-party ERP/CRM integrations, custom functionality' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow & Delivery
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Structured Redesign Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We manage your redesign methodically so that no valuable content or search rankings are lost during the transition.
          </p>
        </div>

        {/* STEPS GRID WITH WATERMARK NUMBERS */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:bg-frame-accent"
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
        <div className="mt-16 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Redesign Scope</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Inclusions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelines.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{item.type}</td>
                  <td className="p-5 md:p-7 font-bold text-frame-accent">{item.time}</td>
                  <td className="p-5 md:p-7 text-sm text-frame-muted-fg leading-relaxed">{item.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

