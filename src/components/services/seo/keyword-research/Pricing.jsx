import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Core Keyword Map',
    price: '\u09F312,000',
    period: 'one-time',
    delivery: '~1 week',
    bestFor: 'Businesses wanting a focused, prioritized starting set of keyword targets',
    features: [
      'Seed & topic discovery',
      'Search demand analysis',
      'Competition analysis',
      'Search-intent classification',
      'Priority keyword list',
    ],
    note: 'A defined single-topic engagement with a clear start and end point.',
  },
  {
    name: 'Standard Research Package',
    price: '\u09F325,000',
    period: 'one-time',
    delivery: '~1\u20132 weeks',
    bestFor: 'Businesses needing competitor gaps and organized topic clusters',
    features: [
      'Everything in Core Keyword Map',
      'Competitor keyword gap analysis',
      'Topic clustering',
      'Long-tail & question keywords',
      'Keyword-to-URL mapping',
    ],
    note: 'Turns the core map into a fuller, execution-ready keyword structure.',
    highlight: true,
  },
  {
    name: 'Comprehensive Research',
    price: '\u09F345,000',
    period: 'one-time',
    delivery: '~2\u20133 weeks',
    bestFor: 'Multi-topic projects or websites needing deep research and page-planning inputs',
    features: [
      'Everything in Standard Research Package',
      'Multi-topic research',
      'Extensive competitor analysis',
      'Semantic & entity research',
      'Cannibalization analysis',
      'Content planning inputs',
      'Content brief foundations',
    ],
    note: 'For websites where keyword research has to support a larger content and SEO plan.',
  },
  {
    name: 'Ongoing Keyword Monitoring',
    price: '\u09F310,000',
    period: '/month',
    delivery: 'Ongoing',
    bestFor: 'Businesses wanting new opportunities and search-trend changes tracked over time',
    features: [
      'Everything in Core Keyword Map',
      'New keyword opportunity monitoring',
      'Existing keyword performance changes',
      'Ongoing search-trend monitoring',
      'Quarterly priority updates',
    ],
    note: 'Keeps the keyword strategy current as search behavior and competitors change.',
  },
]

const notes = [
  'Keyword research pricing depends on the number of topics, target markets, competitors, keywords, business types, and whether mapping or ongoing monitoring is included.',
  'Ongoing keyword monitoring runs month to month and builds on an initial research foundation.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment" title="Keyword Research Pricing & Timeline">
          Keyword research pricing depends on the number of topics, target markets, competitors,
          keywords, business types, and whether mapping or ongoing monitoring is included. Each
          package lists what it includes.
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
                    Typical Delivery
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.delivery}</dd>
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
                  Request This Package
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
              Not sure which package fits? Tell us what you are targeting, and we will recommend the
              right starting point.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Custom Keyword Research Quote
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          * Pricing figures are a market-reference starting point. Final pricing depends on the
          website, scope, markets, competitors, and level of keyword mapping required, and is
          confirmed after scoping.
        </p>
      </div>
    </section>
  )
}