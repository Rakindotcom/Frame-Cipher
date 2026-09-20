import { SectionIntro, PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    name: 'Visual Refresh',
    price: '৳35,000',
    bestFor: 'Best for websites where the existing platform and structure work but the visual experience feels outdated.',
    timeline: '~2–3 weeks',
    scope: [
      'Visual redesign',
      'Responsive UI improvements',
      'Selected UX improvements',
      'Existing-platform implementation',
      'Basic SEO review',
      'Testing and launch support',
    ],
    featured: false,
  },
  {
    name: 'Standard Redesign',
    price: '৳75,000',
    bestFor: 'Best for websites that need broader design, UX, structural, and technical improvements.',
    timeline: '~4–6 weeks',
    scope: [
      'Site audit',
      'UX and information architecture',
      'Visual redesign',
      'Structural improvements',
      'Up to 15 pages',
      'Redirect planning',
      'Content migration',
      'Testing and launch',
    ],
    featured: true,
  },
  {
    name: 'Platform Migration Redesign',
    price: '৳150,000',
    bestFor: 'Best when the existing CMS or platform is limiting the website.',
    timeline: '~6–10 weeks',
    scope: [
      'Full audit',
      'New platform setup',
      'Design implementation',
      'Content migration',
      'URL and redirect mapping',
      'SEO migration',
      'Integration setup',
      'QA and launch support',
    ],
    featured: false,
  },
  {
    name: 'Complex / Ecommerce Redesign',
    price: 'Custom Quote',
    bestFor: 'For larger websites, ecommerce stores, extensive catalogs, complex integrations, or technically demanding migrations.',
    timeline: '~8–14+ weeks',
    scopeTitle: 'Pricing depends on:',
    scope: [
      'Number of pages or products',
      'Platform',
      'Migration complexity',
      'Integrations',
      'Payment systems',
      'Content volume',
      'SEO requirements',
      'Custom functionality',
      'Timeline',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & Packages" title="Website Redesign Pricing in Bangladesh" />

        <div className="mt-6 space-y-3 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
          <p>
            Website redesign pricing depends on how much of the current website needs to change, the platform being used, page count, content migration, SEO requirements, integrations, and overall project complexity.
          </p>
          <p>
            The following packages provide a starting reference. Final pricing is confirmed after reviewing the existing website and project requirements.
          </p>
        </div>

        {/*
DETAILED TIERS CARDS
*/}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                tier.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                {tier.featured && (
                  <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {tier.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {tier.price}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  Typical Delivery: {tier.timeline}
                </p>
                <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                  {tier.bestFor}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <p className="text-xs font-black uppercase tracking-wider text-frame-fg mb-3">
                    {tier.scopeTitle || 'Potential scope includes:'}
                  </p>
                  <ul className="space-y-2 text-xs font-medium text-frame-fg">
                    {tier.scope.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton
                  href="/contact"
                  variant={tier.featured ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  {tier.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Select Plan'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}