import PosterButton from '../../../home/PosterButton'

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, messaging, design, development, tracking, and technical implementation stay under one team, creating a clearer path from campaign idea to live page.',
  },
  {
    title: 'Built Around Your Campaign',
    desc: 'We start with your offer, audience, traffic source, and conversion goal rather than choosing a generic landing-page template first.',
  },
  {
    title: 'Conversion-Focused Development',
    desc: 'The page structure, CTA, forms, trust elements, mobile experience, and tracking are considered as part of one conversion system.',
  },
  {
    title: 'Platform & Integration Flexibility',
    desc: 'We can work with the platform, CRM, analytics tools, and campaign technology required by the project, subject to technical compatibility.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'You review key stages of strategy, messaging, design, and development before we move forward.',
  },
  {
    title: 'Built for Testing & Improvement',
    desc: 'Where the project requires it, the page can be structured for tracking, variants, experimentation, and future campaign optimization rather than treated as a one-time static asset.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-full break-words">
                Why Growth Marketers Choose{' '}
                <span className="italic text-frame-accent">Frame Cipher.</span>
              </h2>

              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                We do not build generic digital flyers. We build high-velocity customer acquisition engines.
              </p>

              {/* Performance / Accountability Metric Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <span className="font-mono text-3xl font-medium text-white sm:text-4xl">
                  100%
                </span>
                <span className="block font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Campaign Asset Ownership
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  You own all custom landing page code, design components, copy assets, and tracking configurations upon final handover.
                </p>
              </div>

              <div className="pt-2">
                <PosterButton href="/contact" variant="accent">
                  Request a Custom Quote
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (7 cols): Editorial Divided Rows */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
            {whyChooseUs.map((adv, idx) => (
              <div
                key={idx}
                className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    0{idx + 1}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                      {adv.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
