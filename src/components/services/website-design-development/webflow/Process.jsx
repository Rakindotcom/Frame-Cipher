const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your brand positioning, target audience, existing content assets, desired integrations, and marketing workflow requirements.',
  },
  {
    number: '02',
    title: 'Content & CMS Planning',
    description: 'We define dynamic CMS collections, custom reference fields, component systems, and publishing guidelines before touching design.',
  },
  {
    number: '03',
    title: 'UX & Visual Design',
    description: 'We craft user flows, wireframes, typography scales, and bespoke page layouts in Figma, setting up interactive design specifications.',
  },
  {
    number: '04',
    title: 'Webflow Development',
    description: 'We construct semantic HTML elements, bind dynamic CMS fields, code custom interactions, and integrate third-party APIs and apps.',
  },
  {
    number: '05',
    title: 'SEO, Accessibility & QA',
    description: 'We audit heading hierarchies, alt tags, metadata, responsive breakpoints, load times, forms, and cross-browser performance.',
  },
  {
    number: '06',
    title: 'Client Review & Revisions',
    description: 'You review staging links at planned checkpoints, allowing your team to test interactions and verify content before launch.',
  },
  {
    number: '07',
    title: 'Launch & CMS Handoff',
    description: 'We connect your custom domain, enable SSL, transfer the Webflow site to your workspace, and conduct a customized live CMS training session.',
  },
]

const timelines = [
  { type: 'Marketing Site', time: '~2–3 weeks', scope: 'Standard page count, bespoke visual design, core CMS collections, responsive layout' },
  { type: 'Brand / Design-Forward Site', time: '~3–5 weeks', scope: 'Custom animations, expanded CMS collections, modular component design system' },
  { type: 'Webflow Ecommerce', time: '~4–6 weeks', scope: 'Product catalog setup, custom cart/checkout styling, payment and tax configuration' },
  { type: 'Advanced CMS & Interactions', time: '~6–8+ weeks', scope: 'Complex multi-reference relationships, custom JavaScript, third-party API webhooks' },
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
            Our Structured Webflow Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We follow a rigorous seven-step delivery pipeline ensuring your Webflow site is beautiful, technically clean, and easy for your team to manage.
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
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Type</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Key Inclusions</th>
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

