import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Evidence-Based AI Visibility Strategy',
    body: 'We do not rely on claims that a specific formatting trick will make an AI platform cite your page. We test relevant queries, examine sources and competitors, review your existing content and entities, then recommend changes based on the evidence available.',
    points: [],
  },
  {
    title: 'SEO + Content + Development in One Team',
    body: 'AI Search Optimization touches more than content.',
    lead: 'It may require:',
    points: [
      'Technical SEO',
      'Content strategy',
      'Page development',
      'Structured data',
      'Internal linking',
      'Entity information',
      'Conversion optimization',
    ],
    closing: 'Framecipher keeps these areas connected through one in-house workflow.',
  },
  {
    title: 'Entity + Content + Source Strategy',
    body: 'A strong AI-search strategy cannot rely on one page.',
    lead: 'We connect:',
    points: [
      'Content',
      'Entities',
      'Authors',
      'Brand information',
      'Third-party sources',
      'Technical signals',
      'Topical coverage',
    ],
    closing: 'This gives the business a more complete AI-search presence.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. We can adapt AI-search research to local, multilingual, international, ecommerce, B2B, professional, and service-business contexts.',
    points: [],
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher standard" title="Why Choose Framecipher for AI Search Optimization">
          Evidence-driven AI search work that stays connected across content, technical, and brand
          strategy.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
                {reason.lead && (
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-frame-fg">
                    {reason.lead}
                  </p>
                )}
                {reason.points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-xs font-medium leading-snug text-frame-fg/90">
                    {reason.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {reason.closing && (
                  <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {reason.closing}
                  </p>
                )}
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}