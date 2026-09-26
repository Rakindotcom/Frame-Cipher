import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Essential',
    price: '৳15,000',
    priceNote: 'Per month',
    bestFor: 'Small businesses building a structured Instagram presence',
    features: ['3 content pieces/week', 'Including Reels', 'Content planning', 'Scheduling', 'Basic community management'],
    popular: false,
  },
  {
    name: 'Growth',
    price: '৳25,000',
    priceNote: 'Per month',
    bestFor: 'Businesses building a stronger content and engagement system',
    features: ['5-6 content pieces/week', 'Reels', 'Active comment & DM management', 'Reporting', 'Optimization'],
    popular: true,
  },
  {
    name: 'Video-Intensive',
    price: '৳40,000+',
    priceNote: 'Per month',
    bestFor: 'Brands with a strong short-form video focus',
    features: ['Reels-led content', 'Expanded video production', 'Community management', 'Reporting', 'Ongoing optimization'],
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'Scoped per engagement',
    bestFor: 'Larger brands and multi-market businesses',
    features: ['Multi-account', 'Multi-market', 'Advanced content operations', 'Custom management scope'],
    popular: false,
  },
]

const includedEveryTier = [
  'Instagram content strategy',
  'Content calendar',
  'Content creation',
  'Publishing or scheduling',
  'Community management according to plan',
  'Performance reporting',
  'Ongoing strategy refinement',
]

const priceFactors = [
  'Number of content pieces',
  'Reel volume',
  'Video production requirements',
  'Source footage availability',
  'Photography or shooting requirements',
  'Graphic design requirements',
  'Community volume',
  'Number of Instagram accounts',
  'Target markets',
  'Creator or UGC requirements',
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment &amp; plans" title="Instagram Management Pricing">
          Instagram management pricing depends on content volume, Reels production requirements,
          community-management coverage, account complexity, production needs, and the amount of strategy
          and creative work required.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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

                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
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
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUDED AT EVERY TIER */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Included at every applicable tier
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {includedEveryTier.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-2 border-frame-border bg-frame-bg p-4 transition-colors hover:border-frame-accent"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-frame-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Final pricing may vary based on
            </span>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {priceFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-frame-border pt-8">
          <p className="max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Paid Instagram advertising is a separate service from organic Instagram management, so
            both can be scoped independently.
          </p>
        </div>
      </div>
    </section>
  )
}
