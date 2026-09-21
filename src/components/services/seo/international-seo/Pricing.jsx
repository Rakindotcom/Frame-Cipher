import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'International SEO Audit',
    price: '$325',
    period: '+',
    scope: 'Single detailed review',
    bestFor: 'Websites entering new markets',
    features: [
      'International SEO audit',
      'Market research',
      'Technical review',
      'Site structure review',
      'Hreflang checks',
      'Report and recommendations',
    ],
    note: 'A detailed review of your website\u2019s current international setup.',
  },
  {
    name: 'Single-Market Expansion',
    price: '$650',
    period: '+',
    scope: 'One priority market',
    bestFor: 'First international expansion',
    features: [
      'Everything in the International SEO Audit',
      'Market-specific keyword research',
      'Country and language targeting',
      'Content localization',
      'Implementation support',
      'Reporting',
    ],
    note: 'A focused expansion plan for entering one new market.',
    highlight: true,
  },
  {
    name: 'Multi-Market SEO Setup',
    price: '$1,225',
    period: '+',
    scope: 'Multiple markets',
    bestFor: 'Scaling across countries',
    features: [
      'Everything in Single-Market Expansion',
      'Multi-market site architecture',
      'Hreflang implementation',
      'Country-level keyword research',
      'Tracking setup',
      'Ongoing optimization',
    ],
    note: 'Comprehensive international SEO setup across several priority markets.',
  },
  {
    name: 'Enterprise International SEO',
    price: 'Custom',
    period: '',
    scope: 'Custom scope',
    bestFor: 'Complex or enterprise needs',
    features: [
      'Everything in Multi-Market SEO Setup',
      'Complex international migrations',
      'Custom technical projects',
      'Dedicated international SEO team',
      'A custom scope agreed with your team',
    ],
    note: 'Built for large, complex, or enterprise international operations.',
  },
]

const typicalScope = [
  'International SEO audit',
  'Market research and prioritization',
  'Country-level keyword research',
  'Country and language targeting',
  'Site architecture recommendations',
  'Hreflang implementation',
  'Content localization',
  'Internal linking strategy',
  'Authority building',
  'Market-level tracking setup',
  'Regular reporting',
]

const notes = [
  'Final scope depends on the number of target markets, website structure, technical requirements, content and localization needs, and the amount of ongoing management required.',
  'Complex structures, large content requirements, or technical migration work may require additional scoping.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & Plans" title="International SEO Pricing">
          International SEO pricing depends on the number of target markets, the structure of the
          website, technical requirements, content and localization needs, and the amount of
          ongoing management required.
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
                    Market Scope
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.scope}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Best For
                  </dt>
                  <dd className="mt-0.5 font-semibold text-frame-fg">{plan.bestFor}</dd>
                </div>
              </dl>

              <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
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
                  Get Free Consultation
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Typical scope can include
            </h3>
            <ul className="mt-6 space-y-3 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
              {typicalScope.map((item, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-4 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              Not sure which plan fits your business? Tell us about your target markets, current
              website, and goals, and we will recommend the right starting point.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get an International SEO Quote
            </PosterButton>
          </div>
        </div>

        <div className="mt-8 space-y-3.5 text-sm font-medium leading-relaxed text-frame-muted-fg">
          <p className="flex items-start gap-3">
            <span className="mt-0.5 text-frame-accent font-bold">*</span>
            <span>
              Pricing is indicative rather than fixed. Final pricing is confirmed after scoping
              requirements.
            </span>
          </p>
          {notes.map((note, nIdx) => (
            <p key={nIdx} className="flex items-start gap-3">
              <span className="mt-0.5 text-frame-accent font-bold">*</span>
              <span>{note}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}