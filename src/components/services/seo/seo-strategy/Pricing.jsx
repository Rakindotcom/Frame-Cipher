import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Strategy Session',
    price: '\u09F325,000',
    period: 'one-time',
    type: 'One-time project',
    bestFor: 'Businesses needing direction once',
    features: [
      'Discovery & Assessment',
      'Written Strategy Documentation',
      'Single roadmap development',
      'Strategy Walkthrough Session',
      'Follow-Up Q&A',
    ],
    note: 'A defined engagement with a clear start and end point, suited to businesses that can execute independently afterward.',
  },
  {
    name: 'Audit-to-Roadmap Package',
    price: '\u09F345,000',
    period: 'one-time',
    type: 'One-time project',
    bestFor: 'Businesses with an audit but no clear next steps',
    features: [
      'Everything in Strategy Session',
      'Full SEO audit',
      'Findings prioritization',
      'Sequenced execution plan',
      'Progress check-in',
    ],
    note: 'Turns an audit, ours or anyone else\u2019s, into an actual execution plan.',
    highlight: true,
  },
  {
    name: 'Fractional Advisory',
    price: '\u09F340,000',
    period: '/month',
    type: 'Ongoing retainer',
    bestFor: 'Businesses with an internal team needing senior direction',
    features: [
      'Everything in Audit-to-Roadmap Package',
      'Ongoing strategic guidance',
      'Internal team direction',
      'Quarterly strategy reviews',
      'Algorithm update guidance',
    ],
    note: 'Senior-level strategic direction without a full-time hire.',
  },
  {
    name: 'Team Training & Enablement',
    price: 'Custom',
    period: 'quote',
    type: 'Custom scope',
    bestFor: 'Businesses building internal SEO capability',
    features: [
      'Everything in Strategy Session',
      'SEO fundamentals training',
      'Tool & workflow setup',
      'Documentation & playbooks',
      'A custom scope agreed with your team',
    ],
    note: 'Builds lasting internal capability rather than ongoing dependency.',
  },
]

const notes = [
  'Strategy and consulting pricing depends on the engagement model, a one-time project, ongoing fractional advisory, or a hybrid arrangement each carry different scope and cost.',
  'Larger teams, additional training sessions, or a hybrid strategy-plus-execution scope may require additional scoping.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment" title="Pricing">
          Strategy and consulting pricing depends on engagement model. Each package lists what it
          includes.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col p-7 md:p-8 ${
                plan.highlight
                  ? 'border-2 border-frame-accent bg-frame-accent/10'
                  : 'border-2 border-frame-border bg-frame-bg'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Plan 0{index + 1}
                </span>
                {plan.highlight && (
                  <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                    Most Popular
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {plan.name}
              </h3>

              <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                <div className="flex items-end gap-1.5">
                  <span className="font-heading text-3xl font-bold leading-none tracking-tight text-frame-fg">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="pb-0.5 text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Engagement
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.type}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Best For
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.bestFor}</dd>
                </div>
              </dl>

              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                Included
              </p>
              <ul className="mt-3 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs font-medium leading-relaxed text-frame-muted-fg">
                {plan.note}
              </p>

              <div className="mt-auto pt-8">
                <PosterButton
                  href="/contact"
                  variant={plan.highlight ? 'accent' : 'outline'}
                  className="w-full whitespace-nowrap"
                >
                  Request This Engagement
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-3.5 border-2 border-frame-border bg-frame-bg p-7 text-sm font-medium leading-relaxed text-frame-muted-fg md:p-8">
            {notes.map((note, nIdx) => (
              <li key={nIdx} className="flex items-start gap-3">
                <span className="mt-0.5 text-frame-accent font-bold">*</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-stretch justify-center gap-4 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              Not sure which engagement fits your team? Tell us about your situation, and we will
              recommend the right starting point.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Custom Quote
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          * Pricing figures are a market-reference starting point. Final pricing is confirmed
          after confirming the engagement model and scoping requirements.
        </p>
      </div>
    </section>
  )
}