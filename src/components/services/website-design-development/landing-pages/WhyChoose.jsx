import { SectionIntro, PosterButton } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Accountability & Impact / Growth Standards" title="Why Choose Frame Cipher for Landing Page Development" align="center">
          We do not build generic digital flyers. We build high-velocity customer acquisition engines.
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
          <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}