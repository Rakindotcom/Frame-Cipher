import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const whyChoosePillars = [
  {
    tag: '01',
    title: 'One In-House Team',
    description: 'Strategy, design, development, SEO considerations, content structure, and technical implementation stay under one team from planning through launch.',
  },
  {
    tag: '02',
    title: "Built Around Your Website's Purpose",
    description: "A business website, WooCommerce store, publication, directory, and membership site should not share the same architecture. We build around what your WordPress site actually needs to do.",
  },
  {
    tag: '03',
    title: 'Platform & Architecture Recommendations',
    description: 'We consider your editing needs, functionality, budget, integrations, performance requirements, and long-term plans before recommending a WordPress approach.',
  },
  {
    tag: '04',
    title: 'SEO & Performance Considerations',
    description: 'We account for technical SEO foundations, content structure, mobile usability, and performance during development rather than treating them as separate problems after launch.',
  },
  {
    tag: '05',
    title: 'Transparent Review Process',
    description: 'You review important stages of strategy, design, development, and technical setup before we move forward.',
  },
  {
    tag: '06',
    title: 'Long-Term Maintainability',
    description: 'We consider updates, plugin dependencies, content management, security, and future functionality so the site remains practical to operate after launch.',
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
                A business website, WooCommerce store, publication, directory, and membership site should not share the same architecture. We build around what your WordPress site actually needs to do.
              </p>

              {/* Performance / Ownership Stat Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <span className="font-mono text-3xl font-medium text-white sm:text-4xl">
                  100%
                </span>
                <span className="block font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Code &amp; Asset Ownership
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  You own all custom themes, custom plugins, database exports, and administrator credentials upon final handover.
                </p>
              </div>

              <div className="pt-2">
                <PosterButton href="/contact" variant="accent">
                  Start Your WordPress Project
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (7 cols): Editorial Divided Rows */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
            {whyChoosePillars.map((adv, idx) => (
              <div
                key={idx}
                className="group py-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    {adv.tag}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                      {adv.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      <AutoLinks currentPath="/services/website-design-development/wordpress" allowed={["/services/website-design-development/business-website"]}>
                        {adv.description}
                      </AutoLinks>
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
