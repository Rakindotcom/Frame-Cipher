import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Starter',
    fee: '৳15,000/month',
    spend: '৳20,000+/month',
    bestFor: 'Businesses starting Meta Ads with a focused campaign structure',
    included: [
      'Account audit',
      'Campaign strategy',
      'Campaign setup & launch',
      'Audience strategy',
      'Creative strategy & testing',
      'Pixel & conversion tracking',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth',
    fee: '৳25,000/month',
    spend: '৳45,000+/month',
    bestFor: 'Established campaigns with ongoing optimization and testing',
    included: [
      'Everything in Starter',
      'Ongoing campaign optimization',
      'Audience & delivery refinement',
      'Retargeting development',
      'Creative refresh & testing program',
      'Bi-weekly performance reporting',
    ],
  },
  {
    name: 'Creative-Intensive',
    fee: '৳40,000/month',
    spend: '৳70,000+/month',
    bestFor: 'Businesses requiring frequent original creative development',
    included: [
      'Everything in Growth',
      'Frequent original creative development',
      'Reels, Story, video & static concepts',
      'Copy & hook variations',
      'Landing page / funnel review',
      'Weekly performance reporting',
    ],
  },
  {
    name: 'Enterprise',
    fee: 'Custom',
    spend: 'Custom',
    bestFor: 'Large, complex, or multi-market Meta Ads accounts',
    included: [
      'Everything in Creative-Intensive',
      'Dedicated campaign management team',
      'Multi-market campaign structure',
      'Conversions API & advanced measurement',
      'CRO & landing page support',
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
          title="Meta Ads Management Pricing"
        >
          Meta Ads management pricing depends on campaign complexity, creative requirements,
          ecommerce or lead-generation scope, market coverage, and monthly advertising spend.
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
              The management fee is separate from your Meta advertising budget. Your ad spend is
              paid directly to Meta through your advertising account.
            </p>
            <p className="text-frame-muted-fg">
              Final pricing depends on the number of campaigns, creative volume, tracking
              requirements, ecommerce complexity, target markets, and monthly advertising activity.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Meta Ads Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}