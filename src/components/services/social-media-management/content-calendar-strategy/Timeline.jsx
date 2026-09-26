import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Timeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Delivery expectations" title="Timeline &amp; Planning Cycle">
          Planning time depends on the number of platforms, business complexity, available information, and
          the agreed scope.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              An initial cross-platform audit and content calendar framework typically takes one to two
              weeks, depending on the number of platforms, complexity of the business, available
              information, and agreed scope.
            </p>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Ongoing planning follows an agreed cycle, commonly monthly for active social media
              management.
            </p>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                The calendar is treated as a working system rather than a document that becomes outdated
                after the first month.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              When more time is needed
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Larger campaigns, multiple markets, complex approval processes, or extensive content
              requirements may require additional planning time.
            </p>
            <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-semibold leading-relaxed text-frame-fg">
              Your proposal confirms the final scope, fee, and delivery schedule before work begins.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Ongoing planning follows an agreed cycle, commonly monthly for active social media management.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Discuss Your Timeline &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
