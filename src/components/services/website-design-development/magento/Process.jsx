const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your business model, catalog size, B2B or B2C requirements, existing systems, integrations, operational workflow, and future plans. We also assess whether Magento is actually the right platform for the project.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the catalog structure, Magento edition, store setup, customer groups, integration requirements, technical architecture, and project scope.',
  },
  {
    number: '03',
    title: 'UX & Storefront Design',
    description: 'We plan navigation, category structures, product experiences, checkout flows, mobile layouts, and calls to action around how customers actually shop.',
  },
  {
    number: '04',
    title: 'Magento Development',
    description: 'We build the storefront, catalog architecture, custom modules, integrations, payment workflows, and other agreed functionality.',
  },
  {
    number: '05',
    title: 'Integration & Data Setup',
    description: 'We connect approved systems and prepare product, customer, inventory, pricing, and other required data according to the project scope.',
  },
  {
    number: '06',
    title: 'Quality, Security & Load Testing',
    description: 'We test functionality, integrations, responsiveness, security-related configuration, checkout journeys, and performance under expected workload conditions.',
  },
  {
    number: '07',
    title: 'Launch & Handoff',
    description: 'We complete the final launch checks, verify critical integrations and purchase flows, and provide the agreed access and guidance for ongoing store management.',
  },
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
            Our Magento Development Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We keep the process structured so the technical foundation is clear before development becomes expensive to change.
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
                  Phase {step.number}
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
