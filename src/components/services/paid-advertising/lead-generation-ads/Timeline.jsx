import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    label: 'Week 1',
    title: 'Discovery & planning',
    items: [
      'Discovery',
      'Qualification review',
      'Platform strategy',
      'Offer planning',
      'Tracking review',
      'CRM assessment',
    ],
  },
  {
    label: 'Week 1\u20132',
    title: 'Build & launch',
    items: [
      'Campaign build',
      'Form or landing-page setup',
      'CRM connection',
      'Lead routing',
      'Tracking implementation',
      'QA',
      'Client approval',
      'Launch',
    ],
  },
]

const factors = [
  'Lead volume',
  'Sales cycle',
  'Deal value',
  'Qualification requirements',
  'CRM data availability',
  'Conversion volume',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Timeline" title="Timeline: How Long Does Lead Generation Setup Take?">
          Initial campaign setup typically takes one to two weeks, depending on the platforms,
          creative requirements, lead destination, CRM configuration, tracking, and client
          approvals.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="border-2 border-frame-border bg-frame-bg p-8 md:p-10 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-widest text-frame-accent">
                  {phase.label}
                </span>
                <div className="h-1.5 flex-1 bg-frame-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {phase.title}
              </h3>
              <ul className="mt-6 grid gap-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-frame-muted-fg">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-8 md:p-10">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Initial lead data can appear soon after launch, but meaningful lead-quality analysis
            usually requires enough leads to move through your sales process. The timeline therefore
            depends on the factors below.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {factors.map((item) => (
              <span key={item} className="border border-frame-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}