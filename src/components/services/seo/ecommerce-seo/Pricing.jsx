import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Starter Store',
    price: '\u09F335,000',
    period: '/month',
    scope: 'Up to 100 products',
    bestFor: 'Small ecommerce stores',
    features: [
      'Ecommerce SEO audit',
      'Keyword and search intent research',
      'Product optimization',
      'Category optimization',
      'Technical SEO',
      'Monthly reporting',
    ],
    note: 'A focused foundation for small stores and new ecommerce launches.',
  },
  {
    name: 'Growth Store',
    price: '\u09F360,000',
    period: '/month',
    scope: 'Up to 500 products',
    bestFor: 'Growing ecommerce businesses',
    features: [
      'Everything in Starter Store',
      'Site architecture recommendations',
      'Internal linking',
      'Product schema',
      'Performance monitoring',
    ],
    note: 'The best fit for growing stores with expanding catalogs.',
    highlight: true,
  },
  {
    name: 'Large Catalog',
    price: '\u09F3100,000',
    period: '/month',
    scope: '500+ products',
    bestFor: 'Large and complex stores',
    features: [
      'Everything in Growth Store',
      'Ongoing SEO recommendations',
      'Extensive technical work',
      'Dedicated reporting',
    ],
    note: 'Built for large stores competing in competitive categories.',
  },
  {
    name: 'Custom Enterprise',
    price: 'Custom',
    period: '',
    scope: 'Custom scope',
    bestFor: 'Complex or enterprise ecommerce',
    features: [
      'Everything in Large Catalog',
      'Multi-market ecommerce',
      'Complex platform needs',
      'A custom scope agreed with your team',
    ],
    note: 'For enterprise-scale and multi-market ecommerce operations.',
  },
]

const notes = [
  'Large catalogs may require additional technical work, content production, or development support.',
  'Product count is only one pricing factor. Platform, catalog complexity, competition, technical condition, and monthly workload can also affect the final scope.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & Plans" title="Ecommerce SEO Pricing in Bangladesh">
          Ecommerce SEO pricing depends on catalog size, platform complexity, competition,
          technical requirements, and the amount of ongoing optimization required. Our plans
          provide a starting framework. Depending on the selected plan and agreed scope, services
          can include the items listed in each package.
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
                    Catalog Scope
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
              Not sure which plan fits your store? Tell us about your catalog and goals, and we
              will recommend the right starting point.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Free SEO Consultation
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          * Pricing is indicative rather than fixed. Final pricing is confirmed after scoping
          requirements.
        </p>
      </div>
    </section>
  )
}