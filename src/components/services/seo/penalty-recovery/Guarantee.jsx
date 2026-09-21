import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'Correct Diagnosis',
    body: 'We determine whether your site has a manual action, an update impact, a technical problem, a security issue, or another cause, and we show the evidence behind that conclusion.',
  },
  {
    title: 'Documented Recovery Plan',
    body: 'You get a prioritized, written plan covering what needs to be fixed, in what order, and why each item matters.',
  },
  {
    title: 'Honest Timeline Reporting',
    body: 'Google updates and manual-action reviews can take time after changes are made. We report recovery honestly rather than promising dates we cannot control.',
  },
  {
    title: 'Direct Team Access',
    body: 'You communicate directly with the in-house team performing the work, with regular written updates on investigation and remediation progress.',
  },
]

const liabilities = [
  {
    title: 'Instant or Guaranteed Rankings',
    body: 'We cannot guarantee overnight recovery or specific ranking positions. Algorithmic and review processes take time that no agency controls.',
  },
  {
    title: 'Automatic Manual Action Removal',
    body: 'The final decision to remove a manual action belongs to Google. We prepare the remediation and the reconsideration request, but approval is not ours to promise.',
  },
  {
    title: 'Certainty That Review Petition Will Succeed',
    body: 'A reconsideration request can still be rejected if Google considers the issues unresolved. We work to make the request as complete and accurate as possible.',
  },
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Honest terms" title="What We Guarantee">
          We promise a documented, honest recovery process. We do not promise outcomes that belong
          to Google to decide.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8 lg:col-span-2">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
              What We Deliver
            </p>
            <div className="mt-5 space-y-5 border-t-2 border-frame-border/60 pt-5">
              {deliverables.map((item, index) => (
                <div key={item.title} className="flex flex-col gap-1.5 sm:flex-row sm:gap-6">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent sm:w-10 sm:shrink-0 sm:pt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
              What We Cannot Guarantee
            </p>
            <div className="mt-5 space-y-5 border-t-2 border-frame-border/60 pt-5">
              {liabilities.map((item) => (
                <div key={item.title}>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-8 md:p-10">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent sm:w-10 sm:shrink-0 sm:pt-2">
              Our Commitment
            </span>
            <p className="text-base md:text-lg font-semibold leading-relaxed text-frame-fg">
              If the diagnosis changes as we learn more, we update the plan and tell you why. The
              work stays documented, evidence-based, and honest from diagnosis to monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}