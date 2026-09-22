import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Pinterest Ads Management \u2014 Standard',
    fee: '৳25,000',
    feeNote: 'per month',
    bestFor: 'Full campaign management without catalog complexity',
    included: [
      'Campaign management',
      'Audience and keyword targeting',
      'Creative testing',
      'Optimization',
      'Tracking',
      'Reporting',
    ],
  },
  {
    name: 'Pinterest Ads Management \u2014 Catalog & Shopping',
    fee: '৳40,000',
    feeNote: 'per month',
    bestFor: 'Ecommerce brands running Shopping Ads and catalog campaigns',
    included: [
      'Everything in Standard',
      'Catalog setup',
      'Product Groups',
      'Shopping Ads',
      'Dynamic retargeting',
      'Catalog optimization',
    ],
    popular: true,
  },
  {
    name: 'Pinterest Creative Support',
    fee: '৳15,000',
    feeNote: 'per month',
    bestFor: 'Businesses managing campaigns in-house who need platform-native Pins',
    included: [
      'Up to 8 static or video Pin creatives',
      'Copy variations',
      'Monthly creative refresh',
    ],
    note: 'Creative support does not include campaign management.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & plans"
          title="Pinterest Ads Management Pricing"
        >
          Pinterest Ads management pricing depends on the number of campaigns, creative volume,
          catalog complexity, market coverage, tracking requirements, and level of ongoing
          optimization. Framecipher uses fixed service pricing rather than tying the management
          fee directly to media spend.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
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
                {pkg.note && (
                  <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {pkg.note}
                  </p>
                )}
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
              Advertising spend is separate and paid through the client&apos;s Pinterest
              advertising account.
            </p>
            <p className="text-frame-muted-fg">
              The final fee depends on campaign scope, number of markets, creative requirements,
              catalog size, tracking complexity, and management depth. Final pricing is confirmed
              in a written proposal.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}