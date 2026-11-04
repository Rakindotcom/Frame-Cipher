const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your current store (if any), your catalog size, and where sales are currently getting lost.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We map your store structure around your actual buyer journey and define the scope before development starts.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Product and UI/UX design come first, with review checkpoints, followed by build and payment gateway integration.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'Speed, mobile responsiveness, checkout functionality, and cross-browser testing before anything goes live.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We go live, confirm payment processing and order flow are working correctly, and walk you through next-step guidance.',
  },
]

export default function Process() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Centered Section Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our E-commerce Website{' '}
            <span className="italic text-frame-accent">Development Process.</span>
          </h2>

          <p className="text-base text-zinc-300 sm:text-lg">
            We test product browsing, cart behavior, checkout, payment status, shipping calculations, forms, mobile responsiveness, and relevant integrations before launch.
          </p>
        </div>

        {/* 5-Step Process Cards Grid */}
        <div className="mt-12 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-8"
            >
              {/* Process Numeral Watermark */}
              <span
                className="process-numeral pointer-events-none absolute -right-2 -bottom-4 font-heading text-[6rem] sm:text-[7rem] font-medium leading-none tracking-tighter text-white/[0.04] select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
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
