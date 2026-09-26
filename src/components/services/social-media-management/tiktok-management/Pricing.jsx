import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Standard TikTok Management',
    price: '৳25,000',
    priceNote: 'Per month',
    bestFor: 'Consistent brand presence',
    features: [
      'TikTok strategy',
      'Content pillar planning',
      '8 videos per month',
      'Video editing',
      'Trend research',
      'Basic TikTok SEO & discoverability',
      'Captions & hashtag strategy',
      'Publishing & scheduling',
      'Basic community management',
      'Monthly performance reporting',
      'Content optimization',
    ],
    popular: false,
  },
  {
    name: 'Growth TikTok Management',
    price: '৳40,000',
    priceNote: 'Per month',
    bestFor: 'Faster content testing & growth',
    features: [
      'TikTok strategy',
      'Content pillar planning',
      '16 videos per month',
      'Video editing',
      'Trend research',
      'Advanced TikTok SEO & discoverability',
      'Captions & hashtag strategy',
      'Publishing & scheduling',
      'Active community management',
      'Monthly performance reporting',
      'Content optimization',
      'Creative testing',
    ],
    popular: true,
  },
  {
    name: 'TikTok Management + Ads Coordination',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    bestFor: 'Organic + paid campaigns',
    features: [
      'TikTok strategy',
      'Content pillar planning',
      'Custom video volume',
      'Video editing',
      'Trend research',
      'Advanced TikTok SEO & discoverability',
      'Captions & hashtag strategy',
      'Publishing & scheduling',
      'Active community management',
      'Advanced performance reporting',
      'Content optimization',
      'Creative testing',
      'Ads coordination',
    ],
    popular: false,
  },
]

const columns = [
  'Standard TikTok Management',
  'Growth TikTok Management',
  'TikTok Management + Ads Coordination',
]

const rows = [
  { label: 'Monthly Investment', values: ['৳25,000/month', '৳40,000/month', 'Custom Quote'] },
  { label: 'TikTok Strategy', values: ['check', 'check', 'check'] },
  { label: 'Content Pillar Planning', values: ['check', 'check', 'check'] },
  { label: 'TikTok Video Production', values: ['8 videos/month', '16 videos/month', 'Custom'] },
  { label: 'Video Editing', values: ['check', 'check', 'check'] },
  { label: 'Trend Research', values: ['check', 'check', 'check'] },
  { label: 'TikTok SEO & Discoverability', values: ['Basic', 'Advanced', 'Advanced'] },
  { label: 'Captions & Hashtag Strategy', values: ['check', 'check', 'check'] },
  { label: 'Publishing & Scheduling', values: ['check', 'check', 'check'] },
  { label: 'Community Management', values: ['Basic', 'Active', 'Active'] },
  { label: 'Performance Reporting', values: ['Monthly', 'Monthly', 'Advanced'] },
  { label: 'Content Optimization', values: ['check', 'check', 'check'] },
  { label: 'Creative Testing', values: ['dash', 'check', 'check'] },
  { label: 'Ads Coordination', values: ['dash', 'dash', 'check'] },
  {
    label: 'Best For',
    values: ['Consistent brand presence', 'Faster content testing & growth', 'Organic + paid campaigns'],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment &amp; plans" title="TikTok Management Pricing">
          Framecipher&rsquo;s pricing covers more than video production or posting. Each plan combines
          strategy, content planning, production, publishing, discoverability, community management, and
          reporting according to the selected scope.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between border-2 p-6 transition-colors md:p-7 ${
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

                <h3 className="mt-2 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {pkg.name}
                </h3>

                <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                  <div className="font-heading text-2xl font-black tracking-tight text-frame-fg md:text-3xl">
                    {pkg.price}
                  </div>
                  <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.priceNote}
                  </span>
                </div>

                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">{pkg.bestFor}</p>
                </div>

                <div className="mt-5 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    What&rsquo;s Covered
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs font-medium text-frame-fg/90 md:text-sm">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
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
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  {pkg.popular ? 'Choose Growth' : `Request ${pkg.name}`}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURE COMPARISON */}
        <div className="mt-16 border-2 border-frame-border">
          <div className="flex flex-col gap-1 border-b-2 border-frame-border bg-frame-muted/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">
              Plan Comparison
            </h3>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
              Standard &nbsp;&rarr;&nbsp; Growth &nbsp;&rarr;&nbsp; + Ads Coordination
            </span>
          </div>

          <div className="hidden grid-cols-4 gap-px bg-frame-border sm:grid">
            <div className="bg-frame-muted/30 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
              Feature
            </div>
            {columns.map((col) => (
              <div
                key={col}
                className="bg-frame-muted/30 px-5 py-3 text-center text-[10px] font-black uppercase leading-snug tracking-[0.2em] text-frame-fg"
              >
                {col}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-px border-t border-frame-border bg-frame-border sm:grid-cols-4"
              >
                <div className="bg-frame-bg px-5 py-3.5 text-xs font-bold text-frame-fg md:text-sm">
                  {row.label}
                </div>
                {row.values.map((value, vIdx) => (
                  <div
                    key={`${row.label}-${columns[vIdx]}`}
                    className="flex items-center justify-center gap-2 bg-frame-bg px-5 py-3.5 text-center text-xs font-medium text-frame-muted-fg md:text-sm"
                  >
                    <span className="font-black uppercase tracking-[0.18em] text-frame-accent sm:hidden">
                      {columns[vIdx]}:
                    </span>
                    {value === 'check' ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : value === 'dash' ? (
                      <span aria-hidden="true" className="font-black text-frame-muted-fg">
                        &mdash;
                      </span>
                    ) : (
                      <span className="leading-snug">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Framecipher&rsquo;s TikTok management plans start at ৳25,000 per month. Growth is ৳40,000
            per month, while larger or combined organic and paid programs are customized according to
            scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom TikTok Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
