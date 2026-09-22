import { SectionIntro } from '../../Kinetic'

const processSteps = [
  {
    title: 'Account & Business Audit',
    description: 'We review your current advertising setup, business model, target market, offer, existing results, tracking, landing pages, and available first-party data.',
    bullets: [
      'For an existing account: identify wasted spend, structural issues, missed opportunities, tracking gaps, and areas that require testing.',
      'For a new campaign: establish the commercial foundation before launch.',
    ],
  },
  {
    title: 'Audience, Offer & Funnel Research',
    description: 'We identify who the campaign needs to reach, what action we want them to take, what message is most relevant, and where the biggest friction may exist in the funnel.',
    note: 'The result is a clearer view of the audience, offer, conversion path, and measurement priorities.',
  },
  {
    title: 'Platform & Media Strategy',
    description: 'We select the appropriate channels and define how each should contribute to the broader acquisition strategy.',
    bullets: [
      'Platform selection',
      'Campaign objectives',
      'Budget allocation',
      'Audience strategy',
      'Funnel stages',
      'Geographic markets',
      'Testing priorities',
      'Conversion goals',
    ],
    note: 'The strategy is designed around your business rather than around a fixed platform package.',
  },
  {
    title: 'Tracking, Creative & Campaign Setup',
    description: 'We build or coordinate the technical and campaign foundations required for launch.',
    bullets: [
      'Campaign structure',
      'Conversion actions',
      'Analytics configuration',
      'Audience setup',
      'Ad creative',
      'Copy',
      'Landing-page alignment',
      'Product feeds or catalogs where relevant',
      'Reporting setup',
    ],
    note: 'Before launch, the agreed campaign plan and budget are reviewed with you.',
  },
  {
    title: 'Launch, Testing & Optimization',
    description: 'Once campaigns are live, we monitor early data and begin structured testing.',
    bullets: [
      'Budget adjustments',
      'Audience refinement',
      'Creative changes',
      'Search-term or placement analysis',
      'Bid strategy adjustments',
      'Campaign restructuring',
      'Landing-page improvements',
      'Exclusions',
      'Remarketing refinement',
    ],
    note: 'Changes are based on evidence rather than constant activity for the sake of activity.',
  },
  {
    title: 'Reporting & Scaling',
    description: 'Once enough reliable data exists, we identify what deserves more budget, what needs improvement, and what should be reduced or stopped. Reporting focuses on business-relevant performance and the decisions that follow from the data.',
    note: 'Scaling should come after the campaign demonstrates enough evidence to justify additional investment.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our Paid Advertising Process"
        >
          Our process is designed to establish the business objective first, then build the
          campaign system around it.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
                {step.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs font-semibold text-frame-fg/90">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {step.note && (
                  <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}