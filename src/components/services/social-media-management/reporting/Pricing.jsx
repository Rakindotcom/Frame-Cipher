import { SectionIntro, PosterButton } from '../../../Kinetic'

const plans = [
  {
    name: 'Standalone Reporting',
    price: '৳8,000/month',
    bestFor: 'Businesses managing social media in-house',
    included: [
      'Cross-platform report',
      'KPI tracking',
      'Content performance',
      'Growth analysis',
      'Recommendations',
    ],
  },
  {
    name: 'Advanced Analytics',
    price: '৳15,000/month',
    bestFor: 'Businesses needing more detailed analysis',
    included: [
      'Deeper performance analysis',
      'Custom KPIs',
      'Competitive context',
      'Campaign analysis',
      'Quarterly deep-dives',
    ],
  },
  {
    name: 'Bundled Reporting',
    price: 'Included',
    bestFor: 'Businesses using ongoing management',
    included: [
      'Reporting integrated with selected Framecipher social media management services',
    ],
  },
  {
    name: 'Enterprise / Multi-Brand',
    price: 'Custom Quote',
    bestFor: 'Large or complex organizations',
    included: [
      'Multi-account',
      'Multi-market',
      'Custom KPI framework',
      'Consolidated reporting',
    ],
  },
]

const standard = [
  'Goal & KPI review',
  'Cross-platform performance reporting',
  'Engagement & growth analysis',
  'Content performance analysis',
  'Key audience insights where available',
  'Strategic recommendations',
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Investment"
          title="Monthly Reporting &amp; Analytics Pricing"
        >
          Monthly reporting pricing depends on the number of platforms, reporting depth, tracking
          requirements, competitive analysis, and whether reporting is delivered standalone or alongside
          broader social media management.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className="flex flex-col bg-[#09090B] p-7 md:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                {plan.name}
              </span>
              <p className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-3xl">
                {plan.price}
              </p>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-[#A1A1AA]">{plan.bestFor}</p>

              <div className="mt-6 border-t border-white/[0.08]/60 pt-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                  What&rsquo;s Covered
                </span>
                <ul className="mt-3 space-y-2">
                  {plan.included.map((entry) => (
                    <li key={entry} className="flex items-start gap-2 text-xs font-medium leading-relaxed text-[#FAFAFA]">
                      <span aria-hidden="true" className="mt-0.5 text-[#A855F7]">
                        &bull;
                      </span>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-white/[0.08] bg-[#121214] p-7 md:p-8">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
            Included in Standard Reporting
          </span>
          <ul className="mt-4 flex flex-wrap gap-2">
            {standard.map((entry) => (
              <li
                key={entry}
                className="border border-white/[0.08] bg-[#09090B] px-2.5 py-1 text-[11px] font-semibold text-[#FAFAFA]"
              >
                {entry}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              Pricing note: Final pricing depends on platform count, data availability, reporting frequency,
              analytics depth, campaign requirements, tracking setup, and account complexity. Advanced
              dashboards, custom integrations, or specialized analysis may require separate scope.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Reporting Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
