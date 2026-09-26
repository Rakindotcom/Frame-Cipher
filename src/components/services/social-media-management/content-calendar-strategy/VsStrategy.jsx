import { SectionIntro, PosterButton } from '../../../Kinetic'

const strategyDecides = [
  'Who you want to reach',
  'What your audience needs',
  'What your brand should communicate',
  'Which topics support your positioning',
  'Which content pillars matter',
  'Which platforms have a role',
  'Which business goals content should support',
  'What actions audiences should take',
  'Which campaigns deserve priority',
]

const calendarOrganizes = [
  'Topics',
  'Dates',
  'Platforms',
  'Formats',
  'Campaigns',
  'Content pillars',
  'CTAs',
  'Required assets',
  'Production deadlines',
  'Approval stages',
  'Publishing sequence',
]

export default function VsStrategy() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Scope clarity" title="Content Calendar vs. Content Strategy">
          Content strategy and content calendars are closely connected, but they serve different purposes.
          Keeping the distinction clear helps prevent confusion around scope, responsibilities, and
          expectations.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Direction
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                What Content Strategy Decides
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Content strategy establishes the direction behind your content. It helps determine:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {strategyDecides.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-semibold leading-relaxed text-frame-fg">
                In simple terms, content strategy answers: what should we communicate, to whom, and why?
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                Execution
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                What the Content Calendar Organizes
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                The content calendar turns those strategic decisions into an execution plan. It organizes:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {calendarOrganizes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-muted-fg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                The calendar answers: what are we publishing, where, and when?
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            How They Work Together
          </span>
          <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            Strategy provides the direction, the calendar provides the execution framework
          </h3>
          <p className="mt-5 max-w-4xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            A useful content system connects both. That means your team is not simply scheduling posts. It
            is working from a defined content direction that can be reviewed, adjusted, and improved over
            time.
          </p>

          <div className="mt-6">
            <PosterButton href="/contact" variant="outline">
              Discuss Your Content Strategy &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
