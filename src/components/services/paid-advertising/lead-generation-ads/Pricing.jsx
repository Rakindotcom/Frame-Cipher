import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Single Platform',
    tag: 'Focused Start',
    fee: '\u09F318,000',
    feeNote: 'per month',
    adSpend: '\u09F330,000+/month',
    bestFor: 'Businesses testing lead generation on one platform',
    included: [
      'Campaign strategy and setup',
      'Lead destination strategy',
      'Form and qualification planning',
      'Tracking setup',
      'CRM connection where supported',
      'Lead routing',
      'Campaign optimization',
      'Quality-focused reporting',
    ],
    cta: 'Request This Plan',
  },
  {
    name: 'Multi-Platform',
    tag: 'Multiple Channels',
    fee: '\u09F335,000',
    feeNote: 'per month',
    adSpend: '\u09F360,000+/month',
    bestFor: 'Businesses running multiple lead-generation channels',
    included: [
      'Everything in Single Platform',
      'Multiple lead-generation channels',
      'Cross-platform audience strategy',
      'Platform-specific campaign structure',
      'Cross-platform reporting',
    ],
    cta: 'Request This Plan',
    popular: true,
  },
  {
    name: 'CRM-Integrated Growth',
    tag: 'Sales-Connected',
    fee: '\u09F350,000',
    feeNote: 'per month',
    adSpend: '\u09F390,000+/month',
    bestFor: 'Businesses needing deeper CRM, qualification, and sales feedback',
    included: [
      'Everything in Multi-Platform',
      'Deeper CRM integration',
      'Qualification workflows',
      'Lead-quality tracking',
      'Offline conversion feedback where supported',
      'Sales-aligned reporting',
    ],
    cta: 'Request This Plan',
  },
  {
    name: 'Enterprise',
    tag: 'Multi-Market Programs',
    fee: 'Custom',
    feeNote: 'assessed per account',
    adSpend: 'Custom',
    bestFor: 'Large-scale or multi-market lead-generation programs',
    included: [
      'Everything in CRM-Integrated Growth',
      'Multi-market campaign structure',
      'Custom integration requirements',
      'Extended reporting and analytics',
    ],
    cta: 'Get a Custom Quote',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment & plans" title="Lead Generation Ads Pricing">
          Pricing depends on the number of platforms, campaign complexity, CRM requirements,
          reporting needs, and monthly advertising scope.
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
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-frame-muted-fg">
                  {pkg.tag}
                </p>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.fee}
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-frame-muted-fg">
                    {pkg.feeNote}
                  </span>
                </p>
                <div className="mt-4 border border-frame-accent/40 bg-frame-muted/10 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Recommended Ad Spend
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.adSpend}
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
                  What&apos;s included
                </p>
                <ul className="mt-3 space-y-2.5 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                  {pkg.included.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="font-bold text-frame-accent">&#10003;</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-4">
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
              Ad spend is separate from management fees. Your advertising spend is paid through the
              advertising account and remains under your control.
            </p>
            <p className="text-frame-muted-fg">
              Advanced CRM development, custom integrations, landing-page development, creative
              production, and third-party software can be scoped separately where required. Final
              pricing is confirmed in a written proposal.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Lead Generation Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}