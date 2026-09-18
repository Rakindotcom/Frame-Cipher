import { PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Launch Page',
    for: 'Single-offer campaigns needing a focused page',
    price: '৳15,000',
    scope: '1 page, 1 offer',
    timeline: '3–5 business days',
    features: [
      'Strategy & Goal Definition',
      'Conversion-Focused Design',
      'Mobile-First Development',
      'Basic Lead Capture Form',
      'Launch Support',
    ],
  },
  {
    name: 'Growth Page',
    for: 'Campaigns needing CRM integration and stronger design',
    price: '৳30,000',
    scope: '1 page, expanded sections',
    timeline: '5–7 business days',
    featured: true,
    features: [
      'Strategy & Goal Definition',
      'Expanded Conversion Design',
      'Mobile-First Development',
      'Advanced Lead Forms',
      'CRM / Email Platform Integration',
      'Conversion Tracking & Pixel Setup',
      'Custom Animations (limited)',
      'Launch Support',
    ],
  },
  {
    name: 'Campaign Build',
    for: 'Larger campaigns needing variants or complex tracking',
    price: '৳55,000+ / Custom Quote',
    scope: '1 page + A/B variant(s)',
    timeline: '1.5–2 weeks',
    features: [
      'Strategy & Goal Definition',
      'Expanded Conversion Design',
      'Mobile-First Development',
      'Multi-step Lead Capture',
      'CRM / Email Platform Integration',
      'Multi-platform Pixel & Event Setup',
      'A/B Test-Ready Structure',
      'Full Custom Interactions',
      'Extended Launch Support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Investment & Value / Rapid Turnaround
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Landing Page Development Pricing
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Straightforward pricing packages based on scope, copy requirements, integration depth, and split testing needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-7 md:p-10 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Package Tier 0{idx + 1}
                  </span>
                  {pkg.featured && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Starting Price</span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                  <div className="mt-3 text-xs font-semibold text-frame-muted-fg flex justify-between border-t border-frame-border/40 pt-2">
                    <span>Scope: {pkg.scope}</span>
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <PosterButton
                  href="/contact"
                  variant={pkg.featured ? 'accent' : 'outline'}
                  className="w-full"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILS */}
        <div className="mt-20 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Measurement</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Full Analytics & Conversion Tracking
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We configure Google Analytics 4, Meta Pixel events (Lead, Purchase, Schedule), and Google Tag Manager containers so your marketing team has accurate attribution from the first click.
            </p>
          </div>

          <div className="bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Autonomy</span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Zero Lock-In Asset Handover
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You own all source code, landing page files, connected webhooks, and domain setups completely. Make edits in-house or hire anyone you wish without restriction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
