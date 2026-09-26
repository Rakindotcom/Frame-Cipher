import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Essential',
    price: '৳10,000',
    priceNote: 'Per month',
    bestFor: 'Small businesses',
    description: 'Designed for businesses that need a consistent and professionally maintained Facebook presence.',
    features: [
      '3 posts per week',
      'Content planning',
      'Basic community management',
      'Reporting',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '৳18,000',
    priceNote: 'Per month',
    bestFor: 'Growing businesses',
    description: 'Designed for businesses that need more active publishing and customer interaction.',
    features: [
      '5 posts per week',
      'Active community management',
      'Review monitoring',
      'Reporting',
    ],
    popular: true,
  },
  {
    name: 'Full Coverage',
    price: '৳28,000',
    priceNote: 'Per month',
    bestFor: 'Businesses needing broader management',
    description: 'Designed for businesses that depend heavily on Facebook for communication and customer engagement.',
    features: [
      'Daily content',
      'Broader community coverage',
      'Review management',
      'Priority response',
    ],
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'Scoped per engagement',
    bestFor: 'Multi-location / larger brands',
    description: 'For larger brands, multi-location businesses, and businesses requiring customized workflows.',
    features: [
      'Custom content volume',
      'Multiple Pages',
      'Workflows',
      'Reporting and service coverage',
    ],
    popular: false,
  },
]

const planDetails = [
  {
    name: 'Essential Facebook Management',
    intro: 'Designed for businesses that need a consistent and professionally maintained Facebook presence.',
    includes: [
      'Facebook Page management',
      'Content strategy',
      '3 posts per week',
      'Content calendar',
      'Content creation',
      'Scheduling',
      'Basic community management',
      'Comment monitoring',
      'Monthly reporting',
    ],
  },
  {
    name: 'Growth Facebook Management',
    intro: 'Designed for businesses that need more active publishing and customer interaction.',
    includes: [
      'Everything in Essential, plus',
      '5 posts per week',
      'Active community management',
      'Review monitoring',
      'Broader content formats',
      'More frequent optimization',
      'Expanded reporting',
      'Ongoing content refinement',
    ],
  },
  {
    name: 'Full-Coverage Facebook Management',
    intro:
      'Designed for businesses that depend heavily on Facebook for communication and customer engagement.',
    includes: [
      'Daily content',
      'Broader content formats',
      'Expanded community management',
      'Review management',
      'Priority response coverage',
      'More detailed reporting',
      'Ongoing strategic optimization',
      'Group management where included in scope',
    ],
  },
  {
    name: 'Enterprise Facebook Management',
    intro:
      'For larger brands, multi-location businesses, and businesses requiring customized workflows.',
    includes: [
      'Multiple Facebook Pages',
      'Location-specific management',
      'Custom content volume',
      'Dedicated coordination',
      'Custom reporting',
      'Custom response requirements',
      'Advanced approval workflows',
      'Strategic reviews',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment &amp; plans"
          title="Facebook Management Pricing"
        >
          Our Facebook management pricing depends on content volume, creative requirements,
          community coverage, response expectations, and the number of Pages or locations.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between border-2 p-6 transition-colors md:p-7 ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/10'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                <div className="flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                    Package 0{index + 1}
                  </span>
                  {pkg.popular && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                  {pkg.name}
                </h3>

                <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                  <div className="font-heading text-2xl font-black tracking-tight text-frame-fg md:text-3xl">
                    {pkg.price}
                  </div>
                  <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.priceNote}
                  </span>
                </div>

                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {pkg.description}
                </p>

                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.bestFor}
                  </p>
                </div>

                <div className="mt-5 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Core Coverage
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs font-medium text-frame-fg/90 md:text-sm">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* PLAN DETAIL BLOCKS */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Full plan breakdown
            </p>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-4xl">
              What Each Facebook Management Plan Includes
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Exact scope is confirmed during the free audit. Higher plans build on the ones below
              rather than replacing them.
            </p>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
            {planDetails.map((plan, index) => (
              <article key={plan.name} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Plan {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {plan.intro}
                  </p>
                </div>

                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Includes
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs font-medium text-frame-fg/90 md:text-sm">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PRICING NOTES */}
        <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Ad spend is separate from Facebook management fees. Facebook Ads Management can be added
            through a separate paid advertising engagement when required.
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            These are starting reference prices rather than fixed quotes. Final scope is confirmed
            after the free Page audit.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg">
            Growth is the most requested plan for businesses that need more active publishing and
            customer interaction.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
