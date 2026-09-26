import { SectionIntro, PosterButton } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Initial Account Audit',
    body: 'We begin with an account and business review to identify immediate opportunities, content gaps, profile issues, and strategic priorities.',
    bullets: [
      'Account review',
      'Business review',
      'Immediate opportunities',
      'Content gaps',
      'Profile issues',
      'Strategic priorities',
    ],
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'First-Month Setup',
    body: 'The initial strategy, content pillars, calendar, profile improvements, brand direction, and first content batch are developed after discovery and approval.',
    bullets: [
      'Initial strategy',
      'Content pillars',
      'Content calendar',
      'Profile improvements',
      'Brand direction',
      'First content batch',
    ],
    note: 'The first month may require additional setup time if the account needs significant profile work or new content assets.',
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'Ongoing Management & Optimization',
    body: 'After initial setup, content production, publishing, community management, reporting, and optimization continue on an agreed monthly cycle.',
    bullets: [
      'Content production',
      'Publishing',
      'Community management',
      'Reporting',
      'Optimization',
    ],
    note: 'Instagram performance does not follow a guaranteed timetable. Results can vary based on content, audience, market, account history, offer, competition, and platform changes.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Onboarding timeline" title="Instagram Management Timeline">
          The exact timeline depends on account condition, content requirements, production scope,
          access, and approval speed.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading text-4xl font-black leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                    {phase.number}
                  </span>
                  <span className="border border-frame-accent/50 bg-frame-accent/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {phase.body}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                {phase.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg" />
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              {phase.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {phase.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            After onboarding, we begin with account and business discovery, followed by strategy,
            content planning, production, approval, and publishing.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Free Instagram Account Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
