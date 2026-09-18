const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your catalog, brand, customer journey, existing store, integrations, payment requirements, target markets, and future plans. We also confirm whether Shopify is the right platform before development begins.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the store structure, collection architecture, app requirements, integrations, payment setup, content requirements, and technical scope.',
  },
  {
    number: '03',
    title: 'UX & Storefront Design',
    description: 'We plan navigation, product experiences, collection pages, mobile layouts, calls to action, and conversion paths around how customers actually shop.',
  },
  {
    number: '04',
    title: 'Shopify Development',
    description: 'We develop the theme, Online Store 2.0 sections, product and collection templates, integrations, apps, custom functionality, and other agreed features.',
  },
  {
    number: '05',
    title: 'Data & Integration Setup',
    description: 'We configure products, collections, payment options, apps, analytics, shipping, customer data, and external integrations according to the project scope.',
  },
  {
    number: '06',
    title: 'Quality, Performance & Checkout Testing',
    description: 'We test responsive layouts, storefront functionality, forms, checkout journeys, integrations, performance, and important user flows across supported devices and browsers.',
  },
  {
    number: '07',
    title: 'Launch & Handoff',
    description: 'We complete final launch checks, confirm the required store functionality, provide the agreed access, and guide your team through routine store management.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Delivery
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Shopify Development Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We keep the process structured so the storefront is built around how your business actually operates.
          </p>
        </div>

        {/* STEPS GRID WITH UNIFORM ALIGNMENT */}
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
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
