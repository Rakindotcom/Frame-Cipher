import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Setup',
    fee: '৳12,000',
    feeNote: 'one-time',
    bestFor: 'Getting a ChatGPT Ads campaign correctly structured, tracked, and ready to launch',
    included: [
      'Campaign structure setup',
      'Landing-page review',
      'Conversion tracking setup',
      'Final campaign setup before launch',
    ],
    cta: 'Request This Plan',
    note: 'Minimum 2-week commitment.',
  },
  {
    name: 'Management',
    fee: '৳15,000',
    feeNote: 'per month',
    bestFor: 'Ongoing management of a focused ChatGPT Ads campaign',
    included: [
      'Campaign structure, targeting setup, and implementation',
      'Creative setup and implementation',
      'Tracking configuration',
      'Optimization of up to 2 campaigns (up to 6 ad groups)',
      'Monthly reports',
    ],
    cta: 'Request This Plan',
    popular: true,
  },
  {
    name: 'Growth',
    fee: '৳25,000',
    feeNote: 'per month',
    bestFor: 'Testing-heavy, conversion-focused ChatGPT Ads programs',
    included: [
      'Strategy and campaign management',
      'Context targeting',
      'Landing-page recommendations',
      'Creative testing',
      'Quantitative performance reporting',
      'Free web development support for landing-page changes during active engagement (up to 4 hours per month)',
    ],
    cta: 'Request This Plan',
  },
  {
    name: 'International / Multi-Market',
    fee: '৳40,000+',
    feeNote: 'per month',
    bestFor: 'Businesses running ChatGPT Ads across multiple eligible markets',
    included: [
      'Multi-market or international campaign management',
      'Multi-market targeting',
      'Ad-group mapping',
      'Creative adaptation for international markets',
      'Conversion tracking and reporting',
    ],
    cta: 'Request a Custom Quote',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & plans"
          title="ChatGPT Ads Management Pricing"
        >
          ChatGPT Ads pricing should reflect the work involved, not a fixed percentage of the
          media budget. Media spend is a cost you control, and it is separate from the
          management fee, which is clearly stated here. Ad spend can be scaled up or down as
          campaigns show evidence of performance.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={
                pkg.popular
                  ? 'relative flex flex-col justify-between border-2 border-frame-accent bg-frame-accent/5 p-6 md:p-7'
                  : 'relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-7'
              }
            >
              {pkg.popular && (
                <span className="absolute right-4 top-4 border border-frame-accent bg-frame-accent px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] text-frame-bg">
                  Most Popular
                </span>
              )}
              <div>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                  Plan 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.fee}
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-frame-muted-fg">
                    {pkg.feeNote}
                  </span>
                </p>
                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.bestFor}
                  </p>
                </div>

                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.22em] text-frame-muted-fg">
                  What's included
                </p>
                <ul className="mt-3 space-y-2.5 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                  {pkg.included.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" className="w-full text-xs">
                  {pkg.cta}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-8 border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-3 text-sm md:text-base font-medium leading-relaxed">
            <p className="text-frame-fg">
              <span className="font-black uppercase tracking-[0.18em] text-frame-accent">Important: </span>
              The management fee is separate from your ChatGPT Ads media budget. Your advertising
              spend is paid through the advertising account and remains under your control.
            </p>
            <p className="text-frame-muted-fg">
              Pricing is quoted in BDT (Bangladeshi Taka). Actual costs depend on ad spend, the
              eligible advertiser setup, and the scope of work. Media and advertising spend are
              not included in service fees. Final pricing is confirmed in a written proposal.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom ChatGPT Ads Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}