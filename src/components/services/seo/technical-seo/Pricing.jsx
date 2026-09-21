import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Technical SEO Audit',
    price: '৳20,000',
    priceNote: 'One-time',
    bestFor: 'Any website that needs a documented diagnosis before major changes',
    description: 'Technical diagnosis, prioritized recommendations, and a written report.',
    features: [
      'Technical diagnosis of the full website',
      'Prioritized, evidence-based recommendations',
      'Written report with clear instruction',
      'Delivered in approximately 1 week',
    ],
  },
  {
    name: 'Standard Technical Fix',
    price: '৳40,000',
    priceNote: 'One-time',
    bestFor: 'Small-to-medium websites ready to implement fixes',
    description: 'Audit plus implementation for a small-to-medium website.',
    features: [
      'Everything in the Technical SEO Audit',
      'Direct implementation for small-to-medium sites',
      'Redirect, canonical, and sitemap fixes',
      'Core Web Vitals improvements',
      'Delivered in approximately 2–3 weeks',
    ],
    popular: true,
  },
  {
    name: 'Advanced Technical Overhaul',
    price: '৳80,000',
    priceNote: 'Starting at',
    bestFor: 'Complex architecture, large websites, and heavy technical cleanup',
    description: 'Complex architecture, large websites, and extensive technical cleanup.',
    features: [
      'Everything in the Standard Technical Fix',
      'Site architecture and crawl-path restructure',
      'Large website crawl and indexation cleanup',
      'JavaScript and rendering fixes',
      'Migration support where required',
      'Delivered in approximately 4–6 weeks',
    ],
  },
  {
    name: 'Ongoing Technical Monitoring',
    price: '৳15,000',
    priceNote: 'Per month',
    bestFor: 'Websites that need continuous technical health',
    description: 'Continuous monitoring, issue detection, regression checks, and reporting.',
    features: [
      'Continuous technical monitoring',
      'Crawl health and indexation tracking',
      'Core Web Vitals monitoring',
      'Regression detection and prevention',
      'Monthly reporting',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & plans"
          title="Technical SEO Pricing in Bangladesh"
        >
          Technical SEO pricing depends on website size, platform, technical condition, number of
          URLs, development requirements, and the complexity of the issues involved.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between border-2 p-6 md:p-7 transition-colors ${
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
                <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                  <div className="font-heading text-2xl md:text-3xl font-black tracking-tight text-frame-fg">
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

                <ul className="mt-5 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
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

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Get {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              These are starting reference prices rather than fixed quotes for every website.
            </p>
            <p className="text-sm md:text-base font-semibold leading-relaxed text-frame-fg">
              Final pricing is confirmed after reviewing the website, platform, technical
              requirements, and implementation scope.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}