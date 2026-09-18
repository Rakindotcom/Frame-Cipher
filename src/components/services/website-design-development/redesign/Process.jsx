export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Current-Site Audit',
      description: 'We review the existing website across technical performance, UX, content, SEO, analytics, structure, and conversion paths.',
    },
    {
      number: '02',
      title: 'Redesign Strategy & Priorities',
      description: 'We turn the audit findings into a practical plan that separates important problems from improvements that can wait.',
    },
    {
      number: '03',
      title: 'Keep, Change or Rebuild',
      description: 'We identify what should stay, what needs improvement, what should be consolidated, and what requires a deeper technical rebuild.',
    },
    {
      number: '04',
      title: 'UX & Information Architecture',
      description: 'We restructure navigation, page hierarchy, user journeys, and content relationships where the existing structure creates friction.',
    },
    {
      number: '05',
      title: 'Visual Design',
      description: 'We create the new interface around the agreed strategy instead of designing first and figuring out the problems later.',
    },
    {
      number: '06',
      title: 'Development & Migration',
      description: 'The approved design is rebuilt on the existing platform or migrated to a better-suited platform when necessary.',
    },
    {
      number: '07',
      title: 'SEO QA & Pre-Launch Testing',
      description: 'We validate redirects, URLs, metadata, canonicals, structured data, indexability, forms, tracking, mobile behavior, and functionality.',
    },
    {
      number: '08',
      title: 'Launch & Monitoring',
      description: 'We launch the redesigned website and monitor important technical, search, performance, and functionality signals afterward.',
    },
  ]

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="max-w-4xl mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Execution
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            How We Approach a Website Redesign
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Our process is built around diagnosing before rebuilding, so major changes have a clear reason behind them.
          </p>
        </div>

        {/* 8 STEPS UNIFORM WATERMARK GRID */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:bg-frame-accent"
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
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
