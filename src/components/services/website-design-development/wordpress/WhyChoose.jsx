import { SectionIntro, PosterButton } from '../../../Kinetic'

const whyChoosePillars = [
  {
    tag: 'Pillar 01',
    title: 'One In-House Team',
    description: 'Strategy, design, development, SEO considerations, content structure, and technical implementation stay under one team from planning through launch.',
  },
  {
    tag: 'Pillar 02',
    title: 'Built Around Your Website\'s Purpose',
    description: "A business website, WooCommerce store, publication, directory, and membership site should not share the same architecture. We build around what your WordPress site actually needs to do.",
  },
  {
    tag: 'Pillar 03',
    title: 'Platform & Architecture Recommendations',
    description: 'We consider your editing needs, functionality, budget, integrations, performance requirements, and long-term plans before recommending a WordPress approach.',
  },
  {
    tag: 'Pillar 04',
    title: 'SEO & Performance Considerations',
    description: 'We account for technical SEO foundations, content structure, mobile usability, and performance during development rather than treating them as separate problems after launch.',
  },
  {
    tag: 'Pillar 05',
    title: 'Transparent Review Process',
    description: 'You review important stages of strategy, design, development, and technical setup before we move forward.',
  },
  {
    tag: 'Pillar 06',
    title: 'Long-Term Maintainability',
    description: 'We consider updates, plugin dependencies, content management, security, and future functionality so the site remains practical to operate after launch.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Engineering Quality & Accountability" title="Why Choose Frame Cipher for WordPress Development" align="center">
          A business website, WooCommerce store, publication, directory, and membership site should not share the same architecture. We build around what your WordPress site actually needs to do.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
          {whyChoosePillars.map((adv, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{adv.tag}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {adv.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PosterButton href="/contact">Start Your WordPress Project &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}