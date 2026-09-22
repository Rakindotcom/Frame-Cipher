import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    label: 'Week 1',
    title: 'Discovery',
    items: [
      'Account audit',
      'Search-demand assessment',
      'Strategy',
      'Tracking review',
      'Campaign planning',
    ],
  },
  {
    label: 'Week 1\u20132',
    title: 'Campaign setup',
    items: [
      'Google Ads import where applicable',
      'Keyword and audience configuration',
      'Tracking implementation',
      'QA',
      'Client approval',
      'Launch',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Timeline" title="Timeline: How Long Does Microsoft Ads Setup Take?">
          Initial account setup or migration typically takes one to two weeks, depending on account
          access, tracking, campaign complexity, product feeds, creative requirements, and client
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

        <p className="mt-6 max-w-3xl border-l-2 border-frame-accent pl-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Because search demand can be smaller in some Microsoft Ads markets, lower-volume campaigns
          may require more time to collect enough data for meaningful optimization. Early results
          should not automatically be treated as final performance benchmarks.
        </p>
      </div>
    </section>
  )
}