const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your campaign goal, traffic source, and offer to define the single action the page needs to drive.',
  },
  {
    number: '02',
    title: 'Strategy & Message Planning',
    description: 'We map the page structure and messaging around your specific audience and define the scope before development starts.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Conversion-focused design comes first, with review checkpoints, followed by fast, lightweight development and tracking setup.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'Speed, mobile responsiveness, form/tracking functionality, and cross-browser testing before anything goes live.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We go live, confirm tracking and lead capture are working correctly, and walk you through next-step guidance.',
  },
]

export default function Process() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            How We Approach a{' '}
            <span className="italic text-frame-accent">Landing Page Build.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process is built around speed and clarity, since campaign timing usually matters.
          </p>
        </div>

        {/* Step Cards with Numeral Watermark */}
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
