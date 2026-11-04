const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your current site (if any), your sales process, and where leads are currently getting lost.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We map your site structure around your actual buyer journey and define the scope before development starts.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'UI/UX design comes first, with review checkpoints, followed by build and CRM/marketing-tool integration.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'Speed, mobile responsiveness, form/CRM functionality, and cross-browser testing before anything goes live.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We go live, confirm lead capture is working correctly, and walk you through next-step guidance.',
  },
]

export default function Process() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Business Website{' '}
            <span className="italic text-frame-accent">Development Process.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Our process is built around visibility at every stage, not a black-box handoff at the end.
          </p>
        </div>

        {/* Modality 2: Architectural 5-Column Divided Continuum Band */}
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between p-6 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div>
                  <h3 className="mt-6 font-heading text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/[0.06] pt-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Checkpoint Approved
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
