import { SectionIntro, PosterButton } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    phase: 'Days 1-3',
    title: 'Onboarding',
    body: 'We collect the access, assets, and business context needed to start properly.',
    bullets: ['Access handover', 'Brand assets', 'Business information', 'Reporting access', 'Campaign context'],
  },
  {
    number: '02',
    phase: 'Days 3-7',
    title: 'Facebook Page Audit',
    body: 'We review the current Page before making recommendations.',
    bullets: ['Page audit', 'Content review', 'Competitor review', 'Audience review', 'Opportunity list'],
  },
  {
    number: '03',
    phase: 'Days 7-14',
    title: 'Page Optimization & First Content',
    body: 'We apply priority improvements and begin building the content foundation.',
    bullets: ['Page optimization', 'Content pillars', 'First content batch', 'Calendar setup', 'Workflow setup'],
  },
  {
    number: '04',
    phase: 'Days 15-30',
    title: 'Ongoing Management',
    body: 'The plan moves into its regular rhythm: publish, engage, and improve.',
    bullets: [
      'Regular publishing',
      'Community management',
      'Comment and review monitoring',
      'Moderation',
      'Monthly reporting',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Onboarding timeline"
          title="What Happens After You Start"
        >
          A clear onboarding sequence means you know what is happening, what we need from you, and
          when results should start appearing in the Page itself.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article key={phase.number} className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8">
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
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Timelines describe the onboarding sequence, not a guaranteed performance outcome. Growth
            on Facebook depends on the business, the market, and the quality of the content.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Begin the Onboarding Process &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
