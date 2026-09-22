import { SectionIntro, PosterButton } from '../../../Kinetic'

const sharedIncluded = [
  'Campaign setup and management',
  'Audience strategy',
  'Creative testing plan',
  'TikTok Pixel review and setup',
  'Events API support where required',
  'Performance monitoring',
  'Audience and budget optimization',
  'Reporting',
  'Ongoing strategic recommendations',
]

const packages = [
  {
    name: 'TikTok Ads Management \u2014 Standard',
    fee: '৳30,000',
    feeNote: 'per month',
    bestFor: 'Businesses starting structured TikTok advertising',
    tag: 'Starting at',
  },
  {
    name: 'TikTok Ads Management \u2014 Growth',
    fee: '৳45,000',
    feeNote: 'per month',
    bestFor: 'Brands needing more creative testing and ongoing optimization',
    tag: 'Starting at',
    popular: true,
  },
  {
    name: 'TikTok Ads + Creator/Spark Ads',
    fee: 'Custom',
    feeNote: 'quoted per engagement',
    bestFor: 'Brands using UGC, creators, and Spark Ads at scale',
    tag: 'Custom',
  },
  {
    name: 'Ecommerce / Catalog Advertising',
    fee: 'Custom',
    feeNote: 'quoted per engagement',
    bestFor: 'Product businesses running website or catalog campaigns',
    tag: 'Custom',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & plans"
          title="TikTok Ads Management Pricing"
        >
          Our TikTok Ads management pricing depends on campaign complexity, creative volume,
          number of markets, creator requirements, ecommerce setup, and reporting needs.
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
                  Included in applicable management plans
                </p>
                <ul className="mt-3 space-y-2.5 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                  {sharedIncluded.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" className="w-full text-xs">
                  {pkg.fee === 'Custom' ? 'Get a Custom Quote' : 'Request This Plan'}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-8 border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-3 text-sm md:text-base font-medium leading-relaxed">
            <p className="text-frame-fg">
              <span className="font-black uppercase tracking-[0.18em] text-frame-accent">Important: </span>
              Ad spend is separate from management fees.
            </p>
            <p className="text-frame-muted-fg">
              TikTok Shop-specific services are available only where TikTok Shop and the relevant
              advertising features are supported for the client&apos;s market and account. Final
              pricing is confirmed in a written proposal.
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