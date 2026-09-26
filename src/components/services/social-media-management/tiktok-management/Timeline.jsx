import { SectionIntro, PosterButton } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    label: 'Initial Audit',
    title: 'Initial Audit',
    lead: 'We review:',
    groups: [
      {
        items: [
          'TikTok account',
          'Business',
          'Audience',
          'Competitors',
          'Existing content',
          'Performance',
          'Goals',
        ],
      },
    ],
    notes: ['We also collect the information required to build the first strategy.'],
  },
  {
    number: '02',
    label: 'Strategy & Content Setup',
    title: 'Strategy & Content Setup',
    lead: 'We establish:',
    groups: [
      {
        items: [
          'Content pillars',
          'Brand voice',
          'Creative direction',
          'Content calendar',
          'Initial topics',
          'Production requirements',
          'Approval workflow',
          'Reporting framework',
        ],
      },
    ],
  },
  {
    number: '03',
    label: 'First Content Cycle',
    title: 'First Content Cycle',
    lead: 'We create, review, approve, and publish the first batch of content.',
    notes: [
      'This establishes an initial performance baseline and gives the team early information about content response.',
    ],
  },
  {
    number: '04',
    label: 'Ongoing Management & Optimization',
    title: 'Ongoing Management & Optimization',
    lead: 'We continue with:',
    flow: ['Create', 'Publish', 'Measure', 'Learn', 'Improve'],
    notes: [
      'Performance patterns inform future topics, formats, hooks, creative directions, and content priorities.',
    ],
  },
]

const workflow = [
  { when: 'Week 1', what: 'Account audit, business discovery, audience and competitor research' },
  { when: 'Week 1–2', what: 'Strategy, content pillars, brand voice, content calendar, initial concepts' },
  { when: 'Week 2 onward', what: 'Production, approval, publishing, and community management' },
  { when: 'Monthly', what: 'Reporting, performance review, testing, and next-cycle optimization' },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Onboarding &amp; delivery" title="TikTok Management Timeline">
          TikTok management is an ongoing process rather than a one-time setup.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {phases.map((phase, index) => (
            <article key={phase.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="border-2 border-frame-accent bg-frame-accent/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {phase.label}
                  </span>
                  <span aria-hidden="true" className="font-heading text-lg font-bold text-frame-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {phase.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {phase.lead}
                </p>
              </div>

              {phase.groups && (
                <ul className="mt-6 grid gap-2 border-t-2 border-frame-border/60 pt-4 sm:grid-cols-2">
                  {phase.groups[0].items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg"
                    >
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {phase.flow && (
                <ul className="mt-6 flex flex-wrap items-center gap-1.5 border-t-2 border-frame-border/60 pt-4">
                  {phase.flow.map((entry, fIdx) => (
                    <li key={entry} className="flex items-center gap-1.5">
                      <span className="border border-frame-accent/50 bg-frame-bg px-2 py-0.5 text-[10px] font-bold text-frame-fg">
                        {entry}
                      </span>
                      {fIdx < phase.flow.length - 1 && (
                        <span aria-hidden="true" className="text-frame-accent">
                          &rarr;
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {phase.notes &&
                phase.notes.map((note) => (
                  <p
                    key={note}
                    className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg"
                  >
                    {note}
                  </p>
                ))}
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-frame-border pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Typical Initial Workflow
            </span>
            <div className="mt-6 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 xl:grid-cols-4">
              {workflow.map((item) => (
                <div key={item.when} className="bg-frame-bg p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {item.when}
                  </span>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-frame-fg md:text-sm">
                    {item.what}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-4xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              The exact timeline depends on content volume, approval speed, production requirements, and
              account complexity.
            </p>
          </div>

          <div className="flex flex-col justify-center border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Start with a consultation
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              We will review your account, your goals, and your production capacity before proposing a
              scope.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Get Your Free TikTok Audit &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
