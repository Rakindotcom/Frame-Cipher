import { SectionIntro, PosterButton } from '../../Kinetic'

const packages = [
  {
    name: 'Starter',
    fee: '৳20,000/month',
    spend: '৳30,000+/month',
    bestFor: 'Businesses testing paid advertising for the first time',
    features: [
      'Paid media strategy & platform selection',
      'Campaign setup & account management',
      'Audience & targeting configuration',
      'Conversion tracking setup & validation',
      'Creative coordination',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth',
    fee: '৳35,000/month',
    spend: '৳60,000+/month',
    bestFor: 'Businesses scaling an already validated campaign',
    features: [
      'Multi-platform media planning',
      'Campaign setup & account management',
      'Audience refinement & remarketing',
      'Conversion tracking & attribution',
      'Creative testing & variations',
      'Landing page alignment review',
      'Bi-weekly performance reporting',
    ],
  },
  {
    name: 'Ecommerce / Multi-Platform',
    fee: '৳55,000/month',
    spend: '৳100,000+/month',
    bestFor: 'Ecommerce businesses running multiple paid channels',
    features: [
      'Multi-channel media planning (Google, Meta, Amazon, more)',
      'Campaign management across platforms',
      'Catalog / product feed coordination',
      'Conversion tracking & attribution',
      'Creative coordination & testing',
      'Landing page & checkout flow alignment',
      'Remarketing & retargeting campaigns',
      'Weekly performance reporting',
    ],
  },
  {
    name: 'Enterprise',
    fee: 'Custom Quote',
    spend: 'Custom',
    bestFor: 'Large budgets, multi-platform or multi-market campaigns',
    features: [
      'Dedicated campaign management team',
      'Multi-market / multi-platform campaign structure',
      'Custom conversion & attribution setup',
      'Full creative & testing program',
      'Landing page & conversion optimization support',
      'Executive reporting & budget visibility',
      'Priority communication & approval workflow',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Plans"
          title="Paid Advertising Pricing"
        >
          Paid advertising costs have two separate components: the Framecipher management fee
          for strategy, setup, management, optimization, and reporting, and the advertising
          spend paid directly to the advertising platform. Keeping them separate gives you
          clearer control over what you are paying for media and what you are paying for
          management.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-7 transition-colors hover:border-frame-border/80"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                  Plan 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.fee}
                </p>
                <div className="mt-3 border border-frame-border bg-frame-muted/10 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Recommended Minimum Ad Spend
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.spend}
                  </p>
                </div>
                <div className="mt-3 border border-frame-accent/50 bg-frame-accent/5 p-3">
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
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" className="w-full text-xs">
                  Request This Plan
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-6 border-b-2 border-frame-border pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              These are starting reference points rather than fixed packages for every business.
            </p>
            <p className="text-sm md:text-base font-semibold leading-relaxed text-frame-fg">
              The exact scope depends on your platform mix, number of campaigns, creative
              requirements, tracking needs, landing-page work, and market coverage.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Media Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}