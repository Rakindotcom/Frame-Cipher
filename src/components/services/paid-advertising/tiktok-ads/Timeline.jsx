import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    window: 'Week 1',
    title: 'Discovery',
    body: 'The week begins with the audit and strategy foundation that every later decision depends on.',
    bullets: [
      'Account audit',
      'Tracking review',
      'Strategy',
      'Creative planning',
    ],
  },
  {
    window: 'Week 1\u20132',
    title: 'Production & Launch',
    body: 'Assets and configuration are finalized, approved, and launched with the agreed settings.',
    bullets: [
      'Creative production',
      'Tracking implementation',
      'Campaign setup',
      'QA',
      'Client approval',
      'Launch',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How planning unfolds"
          title="Timeline: How Long Does TikTok Ads Management Take?"
        >
          Initial setup typically takes one to two weeks, depending on the account, tracking,
          creative requirements, website or app setup, and client approvals. A typical launch
          process includes:
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-7 md:p-9">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                {phase.window}
              </span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {phase.body}
              </p>
              {phase.bullets?.length > 0 && (
                <ul className="mt-4 border-t border-frame-border/60 pt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
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
            After launch, early data can help identify creative and delivery patterns, but early
            results should not automatically be treated as a final performance benchmark. Campaign
            evaluation depends on factors such as conversion volume, budget, sales cycle, creative
            volume, and objective.
          </p>
        </div>
      </div>
    </section>
  )
}