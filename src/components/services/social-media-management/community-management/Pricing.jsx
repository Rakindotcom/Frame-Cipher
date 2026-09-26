import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Essential',
    price: '৳12,000/month',
    bestFor: 'Small businesses with moderate interaction volume',
    included: [
      '2 platforms',
      'Standard business-hours response',
      'Comment & message management',
    ],
  },
  {
    name: 'Growth',
    price: '৳22,000/month',
    bestFor: 'Businesses with active community interaction',
    included: [
      'Up to 4 platforms',
      'Faster response coverage',
      'Review management',
      'Escalation workflow',
    ],
  },
  {
    name: 'Priority Coverage',
    price: '৳35,000/month',
    bestFor: 'Businesses where response speed is important',
    included: [
      'Multi-platform coverage',
      'Extended response coverage',
      'Review management',
      'Advanced escalation',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    bestFor: 'Large or complex community operations',
    included: [
      'High-volume interactions',
      'Multiple markets',
      'Custom workflows',
      'Dedicated escalation',
    ],
  },
]

const common = [
  'Comment and direct message response',
  'Brand voice consistency',
  'Moderation support',
  'Escalation handling',
  'Social listening',
  'Community reporting',
  'Proactive engagement',
  'Platform-specific response',
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment" title="Community Management Pricing">
          Community management pricing depends on platform count, interaction volume, response coverage,
          moderation requirements, review management, and escalation complexity.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className="flex flex-col bg-frame-bg p-7 md:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                {plan.name}
              </span>
              <p className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-frame-fg md:text-3xl">
                {plan.price}
              </p>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-frame-muted-fg">{plan.bestFor}</p>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Included
                </span>
                <ul className="mt-3 space-y-2">
                  {plan.included.map((entry) => (
                    <li key={entry} className="flex items-start gap-2 text-xs font-medium leading-relaxed text-frame-fg">
                      <span aria-hidden="true" className="mt-0.5 text-frame-accent">
                        &bull;
                      </span>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
            Included at every tier
          </span>
          <ul className="mt-4 flex flex-wrap gap-2">
            {common.map((entry) => (
              <li
                key={entry}
                className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
              >
                {entry}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            If you are not sure which level of coverage fits, we can recommend a scope based on your
            platforms, volume, and the level of response your customers actually need.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Community Management Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
