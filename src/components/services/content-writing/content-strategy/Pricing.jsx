import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Strategy Sprint',
    price: '৳25,000',
    for: 'Businesses that need strategic direction',
    scope: 'Content audit, goal alignment, and 3-month roadmap',
    timeline: 'About 1–2 weeks',
    cta: 'Request a Strategy Sprint Quote',
  },
  {
    name: 'Full Strategy Build',
    price: '৳45,000',
    for: 'Businesses building a comprehensive content system',
    scope: 'Full audit, audience research, topic architecture, and 6-month plan',
    timeline: 'About 3–4 weeks',
    cta: 'Discuss a Full Strategy Build',
  },
  {
    name: 'Ongoing Strategy Partner',
    price: '৳20,000/month',
    for: 'Businesses needing continuous guidance',
    scope: 'Performance reviews and ongoing strategy refinement',
    timeline: 'Ongoing, reviewed each cycle',
    cta: 'Discuss Ongoing Strategy Support',
  },
  {
    name: 'Enterprise / Multi-Brand',
    price: 'Custom Quote',
    for: 'Larger or complex content operations',
    scope: 'Multi-brand or multi-market strategy coordination',
    timeline: 'Scoped to the operation',
    tag: 'Custom scope',
    cta: 'Discuss a Multi-Brand Engagement',
  },
]

const included = [
  'Content audit',
  'Goal and priority alignment',
  'Audience and intent research',
  'Topic architecture',
  'Competitive gap analysis',
  'Strategy documentation',
  'Editorial planning',
  'Content roadmap',
  'Review session',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Pricing structure" title="Content Strategy Pricing">
          Content strategy pricing depends on the size of your existing content library, research depth, number of
          markets, strategic scope, and whether you need a one-time plan or ongoing support.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <div>
                <div className="mb-3 flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Plan 0{index + 1}
                  </span>
                  {pkg.tag && (
                    <span className="border-2 border-frame-border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Starting Price
                  </span>
                  <div className="mt-1 font-heading text-xl font-bold tracking-tight text-frame-fg md:text-2xl">
                    {pkg.price}
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-fg md:text-sm">{pkg.scope}</p>
              </div>

              <div className="mt-7 border-t-2 border-frame-border pt-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Typical Timeline
                </span>
                <span className="mt-1 block text-xs font-semibold leading-relaxed text-frame-fg md:text-sm">
                  {pkg.timeline}
                </span>
                <div className="mt-5">
                  <PosterButton href="/contact" variant="outline" className="w-full">
                    {pkg.cta}
                  </PosterButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-[1.4fr_0.6fr]">
          <div className="bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Typical inclusions
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
              What Every Engagement Covers
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 bg-frame-accent/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-frame-fg">
              Pricing depends on audit scope, research depth, content library size, number of markets, and ongoing
              support required.
            </p>
            <div>
              <PosterButton href="/contact" className="w-full">
                Get a Custom Content Strategy Quote &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
