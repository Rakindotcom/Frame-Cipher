import { SectionIntro, PosterButton } from '../../../Kinetic'

const priorities = [
  {
    title: 'Responsive Communication',
    body: 'Customers should not have to repeatedly ask for an answer.',
  },
  {
    title: 'Consistent Brand Voice',
    body: 'Responses should sound like your business across every platform.',
  },
  {
    title: 'Clear Escalation',
    body: 'Complex or sensitive issues should reach the right person quickly.',
  },
  {
    title: 'Useful Community Insight',
    body: 'Recurring questions and feedback can inform content, customer experience, and marketing decisions.',
  },
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service approach"
          title="Community Management Built Around Customer Response &amp; Brand Trust"
        >
          Community management is more than replying to comments.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              It is the ongoing work of listening to your audience, answering questions, handling feedback,
              identifying issues, protecting your brand voice, and knowing when a conversation needs to move
              to your internal team.
            </p>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                The goal is not to reply to everything with the same template.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
                The goal is to respond appropriately, consistently, and with enough context to be useful.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our approach is built around four priorities
            </span>
            <ul className="mt-5 space-y-4">
              {priorities.map((priority, index) => (
                <li key={priority.title} className="border-t-2 border-frame-border/60 pt-4 first:border-t-0 first:pt-0">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-frame-accent/50 bg-frame-accent/10 font-heading text-[10px] font-bold text-frame-accent"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg">
                        {priority.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-frame-muted-fg">
                        {priority.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We combine timely response, brand voice, escalation workflows, moderation, and community
            engagement into one coordinated system.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Community Management Needs &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
