import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    title: 'Tactics Without a Plan Rarely Compound',
    body: 'Random technical fixes, occasional content pieces, and sporadic link building each do a little, but without sequencing and prioritization, the sum is smaller than it should be.',
  },
  {
    title: 'Internal Teams Often Lack Senior SEO Judgment',
    body: 'A capable marketing team can execute well but still lack the strategic experience to know what actually matters most right now.',
  },
  {
    title: "Templates Don't Account for Your Actual Situation",
    body: 'A generic best-practices checklist ignores your specific competitive landscape, resource constraints, and business priorities.',
  },
  {
    title: 'Strategy Needs Revisiting, Not Just Writing',
    body: 'A roadmap built once and never reviewed again quietly goes stale as algorithms, competitors, and your own business priorities shift.',
  },
]

export default function WhyStrategyWork() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The problem with execution alone" title="Why Your Business Needs Real SEO Strategy Work">
          Execution without strategy tends to produce a lot of activity and not much direction.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Direction before execution
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Start with a strategy session
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your situation and build a roadmap around what your team can actually
              execute.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact" className="whitespace-nowrap">
              Start With a Strategy Session &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}