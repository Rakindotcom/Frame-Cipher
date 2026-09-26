import { SectionIntro, PosterButton } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Initial Audit',
    body: 'We begin with a review of your Company Page, executive profiles, existing content, audience, competitors, and business objectives. This gives us a clear starting point before publishing new content.',
    bullets: ['Company Page', 'Executive profiles', 'Existing content', 'Audience', 'Competitors', 'Business objectives'],
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'Strategy & Voice Development',
    body: 'We develop your LinkedIn positioning, content pillars, audience direction, and content framework. For executive management, this stage also includes understanding the executive’s voice, expertise, experience, preferred topics, and communication style.',
    bullets: [
      'LinkedIn positioning',
      'Content pillars',
      'Audience direction',
      'Content framework',
      'Executive voice',
      'Expertise and preferred topics',
    ],
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'First Content Cycle',
    body: 'After strategy approval, we develop the first content batch and prepare the publishing workflow.',
    bullets: ['First content batch', 'Publishing workflow', 'Approval setup'],
    note: 'The first cycle may take additional time if new profile assets, brand materials, executive interviews, or content-production resources are required.',
  },
  {
    number: '04',
    phase: 'Phase 04',
    title: 'Ongoing Management & Optimization',
    body: 'After the initial setup, LinkedIn management continues through an agreed monthly cycle.',
    bullets: [
      'Content creation',
      'Publishing',
      'Community engagement',
      'Executive content',
      'Company Page management',
      'Reporting',
      'Performance analysis',
      'Strategy refinement',
    ],
    note: 'LinkedIn performance does not follow a guaranteed timetable. Audience response, industry competition, account history, content quality, market, and platform changes can all affect results.',
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Onboarding timeline" title="LinkedIn Management Timeline">
          The exact timeline depends on account condition, business complexity, executive
          availability, content requirements, approval speed, and production scope.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
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
            We normally begin with an audit and discovery process before moving into strategy, voice
            development where required, content planning, production, approval, and publishing.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Free LinkedIn Presence Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
