import { SectionIntro } from '../../../Kinetic'

const layers = [
  {
    title: 'AEO: Answer-Level Optimization',
    body: 'AEO focuses on making specific information easier to surface in answer-driven search experiences.',
    lead: 'It can involve:',
    points: [
      'Direct answers',
      'Definitions',
      'FAQs',
      'Question-focused content',
      'Clear explanations',
      'Structured page sections',
    ],
    closing: 'The focus is the answer and the page that provides it.',
  },
  {
    title: 'GEO: Generative Visibility & Citations',
    body: 'GEO focuses on broader visibility within generative search experiences.',
    lead: 'It considers:',
    points: [
      'Topical authority',
      'Entity relationships',
      'Source credibility',
      'Brand context',
      'Content coverage',
      'Citations',
      'Competitive visibility',
    ],
    closing:
      'The focus extends beyond one page to the wider information ecosystem around the brand.',
  },
]

export default function HowTheyWork() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Disciplines, one strategy" title="AEO, GEO & AI Search: How They Work Together">
          AEO and GEO are often used interchangeably, but they can describe different layers of
          the same broader AI Search Optimization strategy.
        </SectionIntro>

        <div className="grid gap-8 lg:grid-cols-2">
          {layers.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-9"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Discipline 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                {item.lead}
              </p>
              <ul className="mt-5 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.closing}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Entity &amp; Source Authority
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Neither exists in isolation
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Neither answer structure nor content depth exists in isolation.
            </p>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
              AI search can draw on multiple signals and sources when forming an answer. Strong
              entity information, credible references, consistent brand details, useful content,
              and clear expertise can all contribute to a stronger overall information footprint.
            </p>
          </div>

          <div className="border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Why the disciplines work together
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              One broader strategy
            </h3>
            <ul className="mt-5 space-y-3 text-sm md:text-base font-medium leading-relaxed text-frame-fg">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                <span>AEO can improve the clarity of specific answers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                <span>GEO can strengthen broader generative visibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                <span>Entity and source authority can help connect the information together.</span>
              </li>
            </ul>
            <p className="mt-5 border-t-2 border-frame-accent/40 pt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Together, they form a broader AI Search Optimization strategy that works alongside
              traditional SEO rather than attempting to replace it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}