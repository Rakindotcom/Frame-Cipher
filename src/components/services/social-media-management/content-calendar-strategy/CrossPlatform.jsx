import { SectionIntro } from '../../../Kinetic'

const platformRoles = [
  { platform: 'A LinkedIn post', role: 'May focus on industry insight' },
  { platform: 'An Instagram Reel', role: 'May demonstrate the product visually' },
  { platform: 'A TikTok video', role: 'May use a shorter educational or demonstration format' },
  { platform: 'A YouTube video', role: 'May provide a deeper explanation' },
  { platform: 'A Facebook post', role: 'May support the campaign with broader community-focused communication' },
]

const repurposingChecks = [
  'Which content should be reused',
  'Which content should be rewritten',
  'Which assets need a new format',
  'Which platforms need a different angle',
  'Which source materials can support future content',
]

export default function CrossPlatform() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Platform-native planning"
          title="One Core Idea, Multiple Platform-Native Formats"
        >
          Cross-platform planning does not mean copying one post onto every social network. The better
          approach is to identify the central idea first, then determine how that idea should be
          communicated on each platform.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-3">
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Shared Message
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                Shared Campaign Message
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We identify the core message behind a campaign, product launch, announcement, educational
                topic, or brand initiative.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                This creates consistency across the campaign while allowing each platform to communicate
                the message in its own format.
              </p>
            </div>

            <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
              For example, a product launch may have one central value proposition but use different
              supporting messages across Instagram, LinkedIn, TikTok, Facebook, and YouTube.
            </p>
          </article>

          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Adapted Execution
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                Platform-Specific Execution
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Each platform can have a different role within the same campaign.
              </p>
            </div>

            <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4">
              {platformRoles.map((entry) => (
                <li key={entry.platform} className="text-xs font-medium leading-snug text-frame-fg/90 md:text-sm">
                  <span className="font-semibold text-frame-fg">{entry.platform}</span>{' '}
                  <span className="text-frame-muted-fg">{entry.role.toLowerCase()}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
              The campaign stays connected without forcing every platform to behave the same way.
            </p>
          </article>

          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Efficient Reuse
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                Repurposing Without Duplicate Posting
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Repurposing means adapting useful ideas and assets for new contexts. It does not mean
                publishing identical content everywhere.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                Our planning identifies
              </span>
              <ul className="mt-3 space-y-2">
                {repurposingChecks.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs font-medium leading-snug text-frame-fg/90 md:text-sm">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
              This creates a more efficient content workflow without sacrificing platform relevance.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
