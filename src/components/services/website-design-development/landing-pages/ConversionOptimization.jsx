const conversionOptimizations = [
  {
    title: 'Message-to-Market Match',
    desc: 'The headline, offer, imagery, benefits, and CTA should reflect what visitors expected when they clicked the campaign.',
  },
  {
    title: 'Conversion-Focused Page Structure',
    desc: 'We structure the page around the information visitors need before acting, including the value proposition, benefits, proof, objections, and final CTA.',
  },
  {
    title: 'CTA & Form Optimization',
    desc: 'We consider CTA wording, placement, form length, required fields, and the amount of information requested based on the conversion goal.',
  },
  {
    title: 'Trust & Social Proof',
    desc: 'Relevant testimonials, ratings, client logos, results, guarantees, or other proof can be used to reduce hesitation where genuine evidence is available.',
  },
  {
    title: 'A/B Testing Readiness',
    desc: 'Where included in the project, we can structure the page so headlines, offers, CTAs, sections, or design variations can be tested without rebuilding the entire page.',
  },
]

export default function ConversionOptimization() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Conversion Optimization for{' '}
            <span className="italic text-frame-accent">Landing Pages.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A landing page should make the desired action easier, clearer, and more convincing. We consider the full conversion path rather than treating design as the finished product.
          </p>
        </div>

        {/* 3-Column Grid of CRO Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conversionOptimizations.map((opt, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  CRO Element 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {opt.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {opt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            <strong className="text-white font-medium">Please Note:</strong> A landing page is rarely improved by one design decision alone. Performance comes from the relationship between the offer, message, traffic, user experience, and conversion path.
          </p>
        </div>
      </div>
    </section>
  )
}
