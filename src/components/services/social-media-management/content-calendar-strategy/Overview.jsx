import { SectionIntro, PosterButton } from '../../../Kinetic'

const goals = [
  'Building brand awareness',
  'Educating potential customers',
  'Demonstrating expertise',
  'Building trust',
  'Promoting products or services',
  'Supporting product launches',
  'Supporting seasonal campaigns',
  'Generating website traffic',
  'Encouraging enquiries or purchases',
  'Building audience relationships',
  'Supporting customer education',
  'Creating reusable content assets',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="Content Planning Built Around Your Business Goals"
        >
          A content calendar should do more than fill dates.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Before deciding what gets published on Monday or Friday, we identify what your content needs
              to accomplish for the business.
            </p>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              This gives every planned content piece a purpose within the wider strategy.
            </p>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                Instead of asking, &ldquo;What should we post today?&rdquo;, your team has a clearer answer.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
                The answer becomes: what should we communicate next, where should it appear, and what
                should it help achieve?
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on your goals, your content strategy may focus on
            </span>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {goals.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The strategy is what your content needs to communicate. The calendar turns those decisions into
            an actionable publishing plan.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Content Goals &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
