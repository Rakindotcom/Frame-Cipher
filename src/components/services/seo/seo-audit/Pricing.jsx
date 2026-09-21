import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Technical Audit Only',
    price: '\u09F320,000+',
    period: '',
    delivery: '~1 week',
    bestFor: 'Quick technical health checks',
    features: [
      'Written audit report',
      'Crawlability and indexation review',
      'Page speed and Core Web Vitals analysis',
      'Site architecture and URL review',
      'Prioritized technical recommendations',
      'Findings walkthrough',
    ],
    note: 'A focused review of the technical foundation that supports your rankings.',
  },
  {
    name: 'Standard SEO Audit',
    price: '\u09F335,000+',
    period: '',
    delivery: '~1\u20132 weeks',
    bestFor: 'Standard business websites',
    features: [
      'Everything in Technical Audit Only',
      'On-page and metadata review',
      'Content and keyword analysis',
      'Search intent alignment',
      'Basic backlink review',
      'Implementation guidance',
    ],
    note: 'A practical audit for most business websites looking for a clear, prioritized plan.',
    highlight: true,
  },
  {
    name: 'Comprehensive SEO Audit',
    price: '\u09F355,000+',
    period: '',
    delivery: '~2\u20133 weeks',
    bestFor: 'Websites needing a full diagnostic',
    features: [
      'Everything in Standard SEO Audit',
      'Full backlink profile analysis',
      'Keyword and cannibalization mapping',
      'Detailed competitor and SERP analysis',
      'Analytics and Search Console review',
      '30/60/90-day action roadmap',
    ],
    note: 'A complete diagnostic across technical, content, backlinks, keywords, and competitors.',
  },
  {
    name: 'Large Site / Ecommerce Audit',
    price: 'Custom',
    period: '',
    delivery: '~3+ weeks',
    bestFor: 'Large catalogs or complex sites',
    features: [
      'Everything in Comprehensive SEO Audit',
      'Large catalog and template-level analysis',
      'Ecommerce and platform-specific review',
      'Advanced technical investigations',
      'A custom scope agreed with your team',
    ],
    note: 'Built for large catalogs, complex technical environments, or specialized audit scope.',
  },
]

const notes = [
  'Large sites, ecommerce platforms, or specialized audit layers may require additional scoping.',
  'The final scope and price are confirmed after reviewing website size, platform, target markets, and required audit depth.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & Timeline" title="SEO Audit Pricing & Timeline in Bangladesh">
          SEO audit pricing depends on website size, platform, number of pages, technical
          complexity, audit depth, and whether specialized analysis is required. Each package
          lists what it includes.
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
                  Request This Audit
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
              Not sure which audit fits your website? Tell us about your site, platform, and goals,
              and we will recommend the right scope.
            </p>
            <PosterButton href="/contact" className="w-full whitespace-nowrap">
              Get a Custom SEO Audit Quote
            </PosterButton>
          </div>
        </div>

        <p className="mt-8 text-sm font-medium leading-relaxed text-frame-muted-fg">
          * Pricing is indicative rather than fixed. Final pricing is confirmed after reviewing the
          website, platform, size, target markets, and required audit scope.
        </p>
      </div>
    </section>
  )
}