const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description: 'We review your business model, audience, conversion goals, content needs, required functionality, integrations, and preferred editing experience.',
  },
  {
    number: '02',
    title: 'Platform Planning',
    description: 'We confirm whether standard Wix or Wix Studio is the right fit, defining sitemap, content structure, technical scope, and integration requirements.',
  },
  {
    number: '03',
    title: 'UX & Visual Design',
    description: 'We plan user journeys, custom page layouts, visual hierarchy, mobile responsive experiences, and conversion paths around your brand.',
  },
  {
    number: '04',
    title: 'Wix Development',
    description: 'We build the site, connect CMS collections, configure apps, integrate booking or payment systems, and implement custom Velo code where needed.',
  },
  {
    number: '05',
    title: 'SEO & Performance QA',
    description: 'We audit metadata, page hierarchy, forms, checkout journeys, mobile responsiveness, asset compression, and tracking pixels across devices.',
  },
  {
    number: '06',
    title: 'Client Review & Checkpoints',
    description: 'You review the agreed project scope at defined checkpoints so we can refine the site, content, and interactive elements before going live.',
  },
  {
    number: '07',
    title: 'Launch & Editor Handover',
    description: 'We connect your custom domain, run final DNS and SSL checks, hand over administrative credentials, and conduct a full editor walkthrough.',
  },
]

const timelines = [
  { type: 'Basic Informational Site', time: '~3–5 days', scope: 'Standard page count, clean layout customization, essential business info' },
  { type: 'Custom Business Site', time: '~1–2 weeks', scope: 'Bespoke design, booking & lead forms, app integrations, mobile tuning' },
  { type: 'Wix Stores (Small Catalog)', time: '~2–3 weeks', scope: 'Catalog setup, payment processing, shipping rules, store SEO' },
  { type: 'Wix Studio / Velo Custom Build', time: '~3–5 weeks', scope: 'Fluid responsive breakpoints, custom code, dynamic CMS collections' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow / Delivery Pipeline
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Structured Wix Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We keep the process transparent and methodical from initial discovery to launch and editor handover.
          </p>
        </div>

        {/* HOME-STYLE PROCESS CARDS WITH WATERMARK NUMBERS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
