import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Starter',
    fee: '৳15,000/month',
    spend: '৳25,000+/month',
    bestFor: 'Businesses starting Google Ads with a focused campaign structure',
    included: [
      'Account audit',
      'Campaign strategy & focused structure',
      'Keyword research & search intent',
      'Campaign setup & launch',
      'Conversion tracking setup & validation',
      'Ad & asset optimization',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth',
    fee: '৳25,000/month',
    spend: '৳50,000+/month',
    bestFor: 'Established businesses running multiple campaigns',
    included: [
      'Everything in Starter',
      'Multi-campaign account management',
      'Campaign restructuring & scaling',
      'Search-term review & negative keyword expansion',
      'Bid & budget optimization',
      'Landing page alignment review',
      'Bi-weekly performance reporting',
    ],
  },
  {
    name: 'Ecommerce',
    fee: '৳40,000/month',
    spend: '৳80,000+/month',
    bestFor: 'Ecommerce brands using Shopping, Search, and Performance Max',
    included: [
      'Everything in Growth',
      'Shopping & Performance Max management',
      'Merchant Center & product feed review',
      'Conversion-value tracking',
      'Product segmentation & budget allocation',
      'Creative & asset coordination',
      'Weekly performance reporting',
    ],
  },
  {
    name: 'Enterprise',
    fee: 'Custom',
    spend: 'Custom',
    bestFor: 'Large, complex, or multi-market Google Ads accounts',
    included: [
      'Everything in Ecommerce',
      'Dedicated campaign management team',
      'Multi-market campaign structure',
      'Custom conversion & offline conversion imports',
      'Landing page & CRO support',
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
          eyebrow="Investment & plans"
          title="Google Ads Management Pricing"
        >
          Google Ads management pricing depends on campaign complexity, the number of campaign
          types involved, tracking requirements, ecommerce requirements, market coverage, and
          monthly ad spend.
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
                  Request This Plan
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-8 border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-3 text-sm md:text-base font-medium leading-relaxed">
            <p className="text-frame-fg">
              <span className="font-black uppercase tracking-[0.18em] text-frame-accent">Important: </span>
              The management fee is separate from your Google advertising budget. Your ad spend
              is paid through your Google Ads account.
            </p>
            <p className="text-frame-muted-fg">
              Pricing can be adjusted after reviewing your business model, campaign requirements,
              tracking setup, target markets, and expected advertising volume.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Google Ads Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}