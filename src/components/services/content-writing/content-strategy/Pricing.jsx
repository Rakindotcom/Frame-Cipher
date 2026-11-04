import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Strategy Sprint',
    price: '৳25,000',
    for: 'Businesses that need strategic direction',
    scope: 'Content audit, goal alignment, and 3-month roadmap',
    timeline: 'About 1 to 2 weeks',
    cta: 'Request a Strategy Sprint Quote',
  },
  {
    name: 'Full Strategy Build',
    price: '৳45,000',
    for: 'Businesses building a comprehensive content system',
    scope: 'Full audit, audience research, topic architecture, and 6-month plan',
    timeline: 'About 3 to 4 weeks',
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
      className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Pricing structure" title="Content Strategy Pricing">
          Content strategy pricing depends on the size of your existing content library, research depth, number of
          markets, strategic scope, and whether you need a one-time plan or ongoing support.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="flex flex-col justify-between bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40"
            >
              <div>
                <div className="mb-3 flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                    Plan 0{index + 1}
                  </span>
                  {pkg.tag && (
                    <span className="border border-white/[0.08] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA] md:text-sm wide:text-lg">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y border-white/[0.08]/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
                    Starting Price
                  </span>
                  <div className="mt-1 font-heading text-xl font-bold tracking-tight text-[#FAFAFA] md:text-2xl">
                    {pkg.price}
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium leading-relaxed text-[#FAFAFA] md:text-sm">{pkg.scope}</p>
              </div>

              <div className="mt-7 border-t border-white/[0.08] pt-4">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                  Typical Timeline
                </span>
                <span className="mt-1 block text-xs font-semibold leading-relaxed text-[#FAFAFA] md:text-sm">
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

        <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border lg:grid-cols-[1.4fr_0.6fr]">
          <div className="bg-[#09090B] p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Typical inclusions
            </span>
            <h3 className="mt-3 font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
              What Every Engagement Covers
            </h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-[#A855F7]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 bg-[#A855F7]/10 p-7 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-[#FAFAFA]">
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
