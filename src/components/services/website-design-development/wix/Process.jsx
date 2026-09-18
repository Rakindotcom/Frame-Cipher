const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description: 'We review your business, audience, goals, content, functionality, integrations, and preferred editing experience.',
  },
  {
    number: '02',
    title: 'Platform & Architecture Planning',
    description: 'We confirm whether standard Wix or Wix Studio is the right fit and define the sitemap, content structure, technical scope, and required functionality.',
  },
  {
    number: '03',
    title: 'UX & Visual Design',
    description: 'We plan the user journey, page layouts, visual hierarchy, calls to action, and responsive experience around your brand.',
  },
  {
    number: '04',
    title: 'Wix Development',
    description: 'We build the website, connect CMS content, configure apps, implement integrations, and add custom functionality where required.',
  },
  {
    number: '05',
    title: 'SEO, Performance & Testing',
    description: 'We review metadata, page structure, forms, integrations, responsiveness, performance, analytics, and key user flows across devices.',
  },
  {
    number: '06',
    title: 'Client Review & Revisions',
    description: 'You review the agreed project scope at defined checkpoints so we can refine the website before launch.',
  },
  {
    number: '07',
    title: 'Launch & Handover',
    description: 'We connect the final setup, complete launch checks, and provide the agreed Wix access and basic editor guidance.',
  },
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
            Our Wix Development Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We keep the process structured so the project stays clear from the first conversation to launch.
          </p>
        </div>

        {/* PROCESS CARDS IN UNIFORM GRID */}
        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden bg-frame-bg p-7 sm:p-8 flex flex-col justify-between min-h-[260px]"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-6 select-none font-heading text-[7rem] sm:text-[8rem] font-bold leading-none tracking-tighter text-frame-muted/30"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent">
                  Step {step.number}
                </span>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
