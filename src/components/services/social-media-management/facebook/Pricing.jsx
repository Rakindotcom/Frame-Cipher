import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Essential',
    price: '৳10,000',
    period: '/mo',
    bestFor: 'Small businesses',
    description: 'Designed for businesses that need a consistent and professionally maintained Facebook presence.',
    features: [
      '3 posts per week',
      'Content planning & calendar',
      'Basic community management',
      'Comment monitoring',
      'Monthly performance reporting',
      'Facebook Page optimization',
    ],
    popular: false,
    ctaText: 'Start Essential Plan',
  },
  {
    name: 'Growth',
    price: '৳18,000',
    period: '/mo',
    bestFor: 'Growing businesses',
    description: 'Designed for businesses that need more active publishing and customer interaction.',
    features: [
      'Everything in Essential',
      '5 posts per week',
      'Active community management',
      'Review monitoring & response',
      'Broader content formats (Reels/Carousels)',
      'More frequent optimization & refinement',
      'Expanded performance reporting',
    ],
    popular: true,
    ctaText: 'Start Growth Plan',
  },
  {
    name: 'Full Coverage',
    price: '৳28,000',
    period: '/mo',
    bestFor: 'Businesses needing broader management',
    description: 'Designed for businesses that depend heavily on Facebook for communication and customer engagement.',
    features: [
      'Daily content publishing',
      'Broader content formats & creative',
      'Expanded community & Messenger triage',
      'Review management & brand care',
      'Priority response coverage',
      'Detailed monthly reporting & insights',
      'Ongoing strategic optimization',
      'Group management where included in scope',
    ],
    popular: false,
    ctaText: 'Start Full Coverage',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    bestFor: 'Multi-location / larger brands',
    description: 'For larger brands, multi-location businesses, and businesses requiring customized workflows.',
    features: [
      'Multiple Facebook Pages',
      'Location-specific management',
      'Custom content volume & creative production',
      'Dedicated account coordination',
      'Custom response SLA & escalation',
      'Advanced multi-tier approval workflows',
      'Strategic executive reviews',
      'Custom analytics & tracking integrations',
    ],
    popular: false,
    ctaText: 'Request Enterprise Quote',
  },
]

export default function Pricing() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Facebook Management Pricing
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Predictable monthly management plans.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our Facebook management pricing depends on content volume, creative requirements, community
            coverage, response expectations, and the number of Pages or locations.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col justify-between  border p-7 transition-colors duration-300 ${
                pkg.popular
                  ? 'border-frame-accent/40 bg-[#121214] ring-1 ring-frame-accent/30'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.18]'
              }`}
            >
              <div>
                {pkg.popular && (
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-frame-accent/30 bg-frame-accent/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-frame-accent">
                    Most Popular
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {pkg.name}
                  </h3>
                  <span className="text-xs font-mono text-[#A1A1AA]">{pkg.bestFor}</span>
                </div>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-semibold tracking-tight text-[#FAFAFA] sm:text-4xl">
                    {pkg.price}
                  </span>
                  {pkg.period && (
                    <span className="font-mono text-xs text-[#A1A1AA]">{pkg.period}</span>
                  )}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[#A1A1AA]">
                  {pkg.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                    Included Scope
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'default' : 'outline'}
                  className="w-full justify-center"
                >
                  {pkg.ctaText}
                </PosterButton>
              </div>
            </article>
          ))}
        </div>

        {/* Ad Spend & Boundary Note */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
              Transparent Scope
            </span>
            <p className="mt-2 text-base leading-relaxed text-[#FAFAFA] sm:text-lg">
              Ad spend is separate from Facebook management fees. Facebook Ads Management can be added
              through a separate paid advertising engagement when required.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Request a Custom Quote</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
