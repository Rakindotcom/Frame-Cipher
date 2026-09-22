import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Starter',
    fee: '৳20,000/month',
    spend: '৳40,000+/month',
    bestFor: 'B2B businesses testing LinkedIn with a focused campaign',
    included: [
      'Account and audience audit',
      'ICP and targeting strategy',
      'Campaign strategy and setup',
      'Creative and messaging strategy',
      'Lead Gen Form setup',
      'Insight Tag configuration',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth',
    fee: '৳35,000/month',
    spend: '৳80,000+/month',
    bestFor: 'Established B2B campaigns with ongoing optimization',
    included: [
      'Everything in Starter',
      'Ongoing optimization',
      'Creative testing program',
      'Audience refinement',
      'Retargeting development',
      'CRM or qualified-lead measurement where supported',
      'Bi-weekly performance reporting',
    ],
  },
  {
    name: 'Account-Based Marketing',
    fee: '৳50,000/month',
    spend: '৳120,000+/month',
    bestFor: 'Businesses targeting defined lists of high-value accounts',
    included: [
      'Everything in Growth',
      'Named target-account setup',
      'Account-based campaign structure',
      'Buying-committee targeting',
      'Conversions API setup where applicable',
      'Sales-aligned reporting',
    ],
  },
  {
    name: 'Enterprise',
    fee: 'Custom',
    spend: 'Custom',
    bestFor: 'Large B2B budgets and multi-market campaigns',
    included: [
      'Everything in Account-Based Marketing',
      'Dedicated campaign management team',
      'Multi-market campaign structure',
      'Advanced CRM & qualified-lead measurement',
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
          title="LinkedIn Ads Management Pricing"
        >
          LinkedIn Ads management pricing depends on targeting complexity, campaign format mix,
          creative requirements, account-based marketing scope, tracking requirements, target
          markets, and monthly advertising spend.
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
              The management fee is separate from your LinkedIn advertising budget. Your media
              spend is paid through your LinkedIn advertising account.
            </p>
            <p className="text-frame-muted-fg">
              Final pricing depends on campaign complexity, creative volume, number of markets,
              account-based marketing requirements, tracking setup, and monthly advertising
              activity.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom LinkedIn Ads Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}