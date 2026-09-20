import { SectionIntro, PosterButton } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Our Value Standard / Guaranteed Accountability" title="Why Businesses Choose Frame Cipher for Website Development" align="center">
          We design and engineer business websites as long-term customer generation engines.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((adv, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Pillar 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {adv.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PosterButton href="/contact">Request a Free Consultation &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}