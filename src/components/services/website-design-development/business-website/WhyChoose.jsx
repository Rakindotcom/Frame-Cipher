import PosterButton from '../../../home/PosterButton'

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, design, development, content, and technical implementation stay under one team. That creates clearer communication and keeps the project moving in one direction.',
  },
  {
    title: 'Built Around Your Sales Process',
    desc: 'We start with how your business attracts, qualifies, and converts leads. The website structure is then designed around those customer journeys.',
  },
  {
    title: 'CRM & Marketing Integration',
    desc: 'Your website can connect with the CRM, analytics, booking, communication, and marketing tools your business already uses, where technically supported.',
  },
  {
    title: 'Platform Recommendations Based on Your Needs',
    desc: 'We do not force one platform on every business. We consider your content, functionality, budget, management needs, integrations, and future plans before recommending an approach.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'You review key stages before we move forward. This gives you visibility into the structure, design, and development instead of receiving a finished website without meaningful checkpoints.',
  },
  {
    title: 'Built for Long-Term Use',
    desc: 'We consider maintainability, performance, SEO-ready foundations, content management, and future marketing needs so the website can continue supporting your business after launch.',
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
                Why Businesses Choose{' '}
                <span className="italic text-frame-accent">Frame Cipher.</span>
              </h2>

              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                We design and engineer business websites as long-term customer generation engines, eliminating vendor lock-in and bloated code.
              </p>

              {/* Performance / Accountability Metric Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <span className="font-mono text-3xl font-medium text-white sm:text-4xl">
                  100%
                </span>
                <span className="block font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Code &amp; Asset Ownership
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  You own all design files, source repositories, and deployment credentials upon final handover.
                </p>
              </div>

              <div className="pt-2">
                <PosterButton href="/contact" variant="accent">
                  Request a Free Consultation
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
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {adv.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base pl-8">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
