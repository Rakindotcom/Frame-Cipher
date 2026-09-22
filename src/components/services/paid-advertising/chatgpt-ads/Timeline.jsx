import { SectionIntro } from '../../../Kinetic'

const phases = [
  {
    phase: 'Phase 1',
    window: 'Weeks 1\u20132',
    title: 'Discovery & Readiness',
    body: 'We review your goals, offer, target markets, landing pages, and measurement setup. We also confirm that the advertiser setup and market are eligible for ChatGPT Ads before committing budget or time.',
    bullets: ['Confirmation of eligibility', 'Campaign scope confirmed', 'Measurement plan defined'],
  },
  {
    phase: 'Phase 2',
    window: 'Weeks 2\u20133',
    title: 'Campaign Preparation',
    body: 'Tracking, creative, and structure are prepared before launch. Conversion events are planned, campaign settings are organized, and everything is documented so the campaign is ready to launch cleanly.',
    bullets: ['Tracking setup', 'Creative and context development', 'Campaign structured and documented'],
  },
  {
    phase: 'Phase 3',
    window: 'Weeks 3\u20134',
    title: 'Launch & Initial Learning',
    body: 'The campaign launches in a structured way. We monitor early delivery for tracking or delivery problems and collect the initial data needed before drawing conclusions.',
    bullets: ['Campaign live and verified', 'Initial data collection', 'Early issue detection'],
  },
  {
    phase: 'Phase 4',
    window: 'Weeks 4+',
    title: 'Optimization',
    body: 'Ongoing refinement of context, creative, and budgets is guided by data. A testing roadmap is maintained and performance reporting connects results back to the original business objectives.',
    bullets: ['Ongoing optimization', 'Creative and context testing', 'Performance reporting cadence established'],
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
          ChatGPT Ads generally move through four phases, from discovery to ongoing optimization.
          Timelines depend on advertiser eligibility, campaign scope, and the data needed to make
          decisions.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                {phase.phase} <span className="text-frame-muted-fg">/ {phase.window}</span>
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
            Engagements generally begin with a readiness assessment so neither budget nor time is
            committed to a channel the advertiser cannot currently use. Where eligibility is
            already confirmed, we move directly into campaign preparation.
          </p>
        </div>
      </div>
    </section>
  )
}