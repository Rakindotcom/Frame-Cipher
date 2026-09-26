import { SectionIntro, PosterButton } from '../../../Kinetic'

const groupScope = [
  'Group strategy',
  'Content planning',
  'Discussion prompts',
  'Member engagement',
  'Group moderation',
  'Community guidelines',
  'Page-to-Group coordination',
]

const additionalFeatures = [
  'Relevant Facebook Events',
  'Additional Facebook features that support your business goals',
]

export default function Groups() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Groups &amp; extra features"
          title="Facebook Groups &amp; Additional Features"
        >
          Not every business needs a Facebook Group. If your business has a genuine reason to build
          an ongoing community, we can help assess whether a Group makes sense.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Groups remain one of the platform&rsquo;s genuinely active spaces, but only where there
              is a real reason for one. A dormant Group does less for a business than no Group at
              all, so we assess it before it is added to the workflow.
            </p>
            <p>
              Depending on the scope, Group management can include the following, alongside relevant
              Facebook Events and other features that support your business goals.
            </p>
            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                Also available where relevant
              </span>
              <ul className="mt-4 space-y-2.5">
                {additionalFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-frame-fg">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on the scope, Group management may include
            </span>
            <ul className="mt-5 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
              {groupScope.map((item, index) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 bg-frame-bg p-4 transition-colors hover:bg-frame-accent"
                >
                  <span className="font-mono text-xs font-black text-frame-accent transition-colors group-hover:text-frame-accent-fg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-frame-fg transition-colors group-hover:text-frame-accent-fg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-l-2 border-frame-accent bg-frame-bg p-6">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not recommend creating a Group simply to add another channel to your
                workload. If a Group does not make strategic sense, we will say so.
              </p>
            </div>

            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Discuss Group Management &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
