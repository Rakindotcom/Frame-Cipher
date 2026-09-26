import { SectionIntro, PosterButton } from '../../../Kinetic'

const commitments = [
  {
    title: 'Clear Scope',
    body: 'The agreed services, deliverables, and channels are documented before work begins, so there is no ambiguity about what is included.',
  },
  {
    title: 'Consistent Execution',
    body: 'Once the strategy is agreed, content, publishing, and community handling follow it consistently rather than changing month to month without reason.',
  },
  {
    title: 'Human Review',
    body: 'Automation may assist with routine tasks, but content and responses are reviewed by people against your brand voice and business context.',
  },
  {
    title: 'Regular Reporting',
    body: 'You receive reporting around the agreed metrics so you can see what was published, what happened, and what is recommended next.',
  },
  {
    title: 'No Guaranteed Results',
    body: 'We do not promise followers, engagement levels, leads, sales, or specific business outcomes. Facebook reach and performance depend on factors outside anyone’s control.',
  },
  {
    title: 'No Fake Reviews or Engagement',
    body: 'We do not buy followers, use fake reviews, or manufacture engagement. Sustainable presence work is the goal.',
  },
  {
    title: 'No Guaranteed Meta Approvals',
    body: 'We cannot guarantee Meta approvals, appeal outcomes, Page restriction removals, or platform decisions. We can only follow the correct process.',
  },
  {
    title: 'Clear Escalation',
    body: 'Matters requiring your authority, sensitive complaints, legal questions, or issues outside the agreed scope are escalated to you rather than guessed at.',
  },
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service commitments"
          title="What We Commit To &amp; What We Do Not"
        >
          Clear boundaries matter more than bold promises. This is what the engagement includes, and
          what no one can honestly guarantee on a platform you do not control.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <article key={item.title} className="flex flex-col justify-between bg-frame-bg p-6 md:p-7">
              <div>
                <span
                  className={`flex h-9 w-9 items-center justify-center border-2 text-xs font-black ${
                    item.title.startsWith('No ')
                      ? 'border-frame-border bg-frame-muted/20 text-frame-muted-fg'
                      : 'border-frame-accent bg-frame-accent/10 text-frame-accent'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we commit to
            </span>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-frame-fg">
              {['Documented scope', 'Consistent execution', 'Human-reviewed content and responses', 'Regular reporting', 'Clear escalation paths'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/20 text-frame-accent">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
              What we never promise
            </span>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-frame-fg">
              {[
                'Specific follower or engagement numbers',
                'Guaranteiced leads, sales, or revenue',
                'Guaranteed Meta approvals or appeal outcomes',
                'Page restriction removal',
                'Fake reviews or purchased engagement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-border bg-frame-bg text-frame-muted-fg">
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <PosterButton href="/contact" variant="outline">
            Review the Full Scope With Us &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
