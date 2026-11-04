const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We learn about your business, audience, content needs, current website, and the functionality your WordPress site requires.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We define the site structure, content hierarchy, theme approach, plugin requirements, integrations, and technical scope before development begins.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'We create the approved design and build the WordPress website, including theme development, page-builder setup, custom functionality, plugin configuration, and integrations where required.',
  },
  {
    number: '04',
    title: 'Security & Performance Testing',
    description: 'We review security settings, responsive behavior, functionality, loading performance, forms, integrations, and browser compatibility before launch.',
  },
  {
    number: '05',
    title: 'Content Integration & Review',
    description: 'We add or organize the agreed content and give you review checkpoints so you can confirm the design, functionality, and page structure before launch.',
  },
  {
    number: '06',
    title: 'Launch & Editorial Handover',
    description: 'We publish the website, complete final checks, provide agreed access, and guide your team through routine content management and supported WordPress features.',
  },
]

export default function Process() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our WordPress Development{' '}
            <span className="italic text-frame-accent">Process.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We follow a clear process from initial consultation to launch and editorial handover. The exact workflow depends on your website type, functionality, content requirements, and project scope.
          </p>
        </div>

        {/* 6 Step Cards with Watermark Numerals */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:border-white/[0.14]"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-4 select-none font-heading text-7xl md:text-8xl font-bold leading-none tracking-tighter text-white/[0.03] transition-colors duration-200 group-hover:text-white/[0.06]"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
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
