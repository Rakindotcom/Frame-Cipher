import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Audit & Planning',
    body: 'Account, audience, offer, creative, catalog, tracking, and market assessment. We confirm the channel fit and define the campaign direction before spending anything.',
    bullets: [
      'Account and tracking audit',
      'Offer, audience, and market assessment',
      'Channel-fit confirmation',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Setup & Production',
    body: 'Campaign structure, tracking, targeting, catalog, landing pages, and Pin creative are prepared together so the campaign launches as one connected system.',
    bullets: [
      'Campaign and ad-group structure',
      'Tracking and catalog setup',
      'Targeting and landing-page alignment',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Launch & Learning',
    body: 'Campaign launch, monitoring, data validation, and initial performance assessment. We protect the learning period and avoid reacting to normal early variation.',
    bullets: [
      'Structured launch',
      'Delivery and data validation',
      'Initial performance assessment',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Optimization & Scaling',
    body: 'Creative testing, audience refinement, budget adjustments, catalog optimization, and conversion improvement. Reporting documents what changed and what the data suggests next.',
    bullets: [
      'Creative and audience testing',
      'Budget and bid adjustments',
      'Catalog and conversion optimization',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How planning unfolds"
          title="Timeline & Engagement"
        >
          Pinterest campaign timelines depend on account readiness, catalog requirements,
          creative production, tracking complexity, and campaign scope.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                {phase.phase}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {phase.body}
              </p>
              {phase.bullets?.length > 0 && (
                <ul className="mt-4 border-t border-frame-border/60 pt-4 space-y-2 text-xs font-semibold text-frame-fg/90">
                  {phase.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Simple campaigns may move through setup faster. Catalog-heavy, international, or
            multi-market campaigns may require additional preparation. Pinterest recommends
            giving campaigns enough time to learn before making major changes. Its current
            guidance for Quick Create campaigns recommends at least 10 days for optimal results,
            while Performance+ campaigns can require longer learning depending on spend and
            conversion volume.
          </p>
        </div>
      </div>
    </section>
  )
}