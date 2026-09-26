import { SectionIntro, PosterButton } from '../../../Kinetic'

const phases = [
  {
    label: 'Weeks 1–3',
    title: 'Initial Setup & First Content Batch',
    body: 'Most projects begin with channel review, strategy development, content planning, production, and the first publishing cycle.',
    points: [
      'Channel review',
      'Strategy development',
      'Content planning',
      'Production',
      'First publishing cycle',
    ],
    note: 'For a standard project, the first content batch can typically take around 2–3 weeks, depending on approvals and production requirements.',
  },
  {
    label: 'First several months',
    title: 'Ongoing Growth & Optimization',
    body: 'The first several months are generally used to establish the publishing system, collect meaningful performance data, identify stronger topics and formats, and refine the strategy.',
    points: [
      'Publishing system',
      'Meaningful performance data',
      'Stronger topics and formats',
      'Strategy refinement',
    ],
    note: 'There is no universal timeline for a specific number of views, subscribers, leads, or rankings.',
  },
]

const factors = [
  'Audience',
  'Topic',
  'Competition',
  'Content quality',
  'Publishing consistency',
  'Viewer response',
]

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Delivery timeline" title="YouTube Management Timeline">
          YouTube growth is a longer-term process because content performance depends on your audience,
          topic, competition, content quality, publishing consistency, and viewer response.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {phases.map((phase, index) => (
            <article key={phase.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
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
                  {phase.body}
                </p>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 border-t-2 border-frame-border/60 pt-4">
                {phase.points.map((point) => (
                  <li
                    key={point}
                    className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                {phase.note}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-frame-border pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What performance depends on
            </span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {factors.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-4xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              We focus on building the system and using real performance data to improve it.
            </p>
          </div>

          <div className="flex flex-col justify-center border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Start with a consultation
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              We will review your channel, your goals, and your production capacity before proposing a
              scope.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
