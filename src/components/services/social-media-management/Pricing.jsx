import { SectionIntro, PosterButton } from '../../Kinetic'

const packages = [
  {
    name: 'Essential',
    price: '৳20,000',
    priceNote: 'Per month',
    bestFor: 'Small businesses starting out',
    description: 'A consistent presence on two platforms, without internal team overhead.',
    features: [
      '2 platforms',
      'Standard posting frequency',
      'Basic community management',
    ],
  },
  {
    name: 'Growth',
    price: '৳35,000',
    priceNote: 'Per month',
    bestFor: 'Growing businesses building a stronger presence',
    description: 'Wider platform coverage with higher content frequency and active community care.',
    features: [
      'Up to 4 platforms',
      'Increased content frequency',
      'Active community management',
    ],
    popular: true,
  },
  {
    name: 'Full Presence',
    price: '৳55,000',
    priceNote: 'Per month',
    bestFor: 'Businesses seeking comprehensive social management',
    description: 'Complete coverage across your platforms with original content production.',
    features: [
      'Up to 5 platforms',
      'Original content production',
      'Dedicated community management',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    bestFor: 'Larger or multi-location businesses',
    description: 'Multi-brand or multi-market management with dedicated team allocation.',
    features: [
      'Multi-brand or multi-market management',
      'Dedicated team allocation',
      'Scope defined after the free audit',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment &amp; plans"
          title="Social Media Management Pricing in Bangladesh"
        >
          Pricing depends on the number of platforms, content volume, creative requirements,
          community management scope, and reporting needs.
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

                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {pkg.description}
                </p>

                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.bestFor}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
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

        {/* PRICING NOTES */}
        <div className="mt-6 flex flex-col gap-6 border-t-2 border-frame-border pb-8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              These are starting reference prices rather than fixed quotes for every business. The
              exact scope can be adjusted based on your platform mix, content requirements, video
              production needs, community volume, and business goals.
            </p>
            <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              A free initial social audit and consultation helps us understand your requirements
              before recommending a plan.
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
