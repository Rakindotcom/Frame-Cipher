import { SectionIntro, PosterButton } from '../../Kinetic'

const packages = [
  {
    name: 'Essential',
    price: '৳25,000/month',
    bestFor: 'Small businesses & single-location websites',
    features: [
      'On-page SEO',
      'Basic technical fixes',
      'Keyword research',
      'Monthly reporting',
    ],
  },
  {
    name: 'Growth',
    price: '৳45,000/month',
    bestFor: 'Growing businesses & larger websites',
    features: [
      'Technical SEO',
      'Content strategy',
      'On-page SEO',
      'Link building',
      'Local SEO',
    ],
  },
  {
    name: 'Ecommerce / Advanced',
    price: '৳75,000/month',
    bestFor: 'Online stores & competitive industries',
    features: [
      'Ecommerce SEO',
      'Advanced technical work',
      'Content strategy',
      'Authority building',
      'AI search optimization',
    ],
  },
  {
    name: 'Enterprise / International',
    price: 'Custom Quote',
    bestFor: 'Large or international websites',
    features: [
      'Multi-market strategy',
      'Advanced technical SEO',
      'International SEO',
      'Dedicated reporting',
      'Specialized recovery work where required',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Plans"
          title="SEO Pricing in Bangladesh"
        >
          SEO pricing depends on website size, technical condition, competition, target market,
          content requirements, authority-building needs, and the level of ongoing support
          required. Our starting reference plans can be structured around the scope below:
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
                  {pkg.price}
                </p>
                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.bestFor}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
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
              Final pricing is based on the actual scope identified during the audit and consultation.
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