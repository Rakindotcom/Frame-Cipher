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
      'Conversion-Focused Design (Expanded)',
      'Mobile-First Development',
      'Basic Lead Capture Form',
      'CRM / Email Platform Integration',
      'Conversion Tracking & Pixel Setup',
      'Custom Animations / Interactions (Limited)',
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
      'Conversion-Focused Design (Expanded)',
      'Mobile-First Development',
      'Basic Lead Capture Form',
      'CRM / Email Platform Integration',
      'Conversion Tracking & Pixel Setup (Multi-platform)',
      'A/B Test-Ready Structure',
      'Custom Animations / Interactions (Full Scope)',
      'Extended Launch Support',
    ],
  },
]

const comparisonMatrix = [
  { feature: 'Best for', launch: 'Single-offer campaigns needing a focused page', growth: 'Campaigns needing CRM integration and stronger design', campaign: 'Larger campaigns needing variants or complex tracking' },
  { feature: 'Starting Price', launch: '৳15,000', growth: '৳30,000', campaign: '৳55,000+ / Custom Quote' },
  { feature: 'Page Scope', launch: '1 page, 1 offer', growth: '1 page, expanded sections', campaign: '1 page + A/B variant(s)' },
  { feature: 'Strategy & Goal Definition', launch: '✓', growth: '✓', campaign: '✓' },
  { feature: 'Conversion-Focused Design', launch: '✓', growth: '✓ Expanded', campaign: '✓ Expanded' },
  { feature: 'Mobile-First Development', launch: '✓', growth: '✓', campaign: '✓' },
  { feature: 'Basic Lead Capture Form', launch: '✓', growth: '✓', campaign: '✓' },
  { feature: 'CRM / Email Platform Integration', launch: '—', growth: '✓', campaign: '✓' },
  { feature: 'Conversion Tracking & Pixel Setup', launch: '—', growth: '✓', campaign: '✓ Multi-platform' },
  { feature: 'A/B Test-Ready Structure', launch: '—', growth: '—', campaign: '✓' },
  { feature: 'Custom Animations / Interactions', launch: '—', growth: '✓ Limited', campaign: '✓ Full Scope' },
  { feature: 'Launch Support', launch: '✓', growth: '✓', campaign: '✓ Extended' },
]

const timelineTable = [
  { type: 'Launch Page', timeline: '3–5 business days', scope: 'Single-offer page, core lead capture, fast delivery' },
  { type: 'Growth Page', timeline: '5–7 business days', scope: 'Expanded sections, CRM integration, conversion tracking' },
  { type: 'Campaign Build', timeline: '1.5–2 weeks', scope: 'A/B variants, full custom interactions, multi-platform pixels' },
]

const bangladeshPoints = [
  'Mobile-first campaign experiences',
  'Bangla-English messaging',
  'WhatsApp and click-to-call actions',
  'Local lead-generation campaigns',
  'bKash or Nagad for suitable purchase-focused campaigns',
  'Google and Meta advertising traffic',
  'Bangladesh-focused offers and audience messaging',
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
            Landing page development is custom quoted based on the complexity of your campaign, conversion goal, design requirements, tracking setup, CRM integrations, and required functionality. Choose from a focused Launch Page for straightforward campaigns, a Growth Page for more advanced requirements, or a Campaign Build for larger and more testable launches.
          </p>
        </div>

        {/* 3 PACKAGE CARDS */}
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
                    Tier 0{idx + 1}
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

        {/* COMPARISON MATRIX - STRICTLY H2 */}
        <div className="mt-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Side-by-Side Breakdown
            </p>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Technical Architecture & Platform Comparison
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
              Compare package deliverables, capabilities, and tracking integrations to find the right scope for your campaign.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-frame-border bg-frame-muted/40">
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent w-1/4">
                    Feature
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg w-1/4">
                    Launch Page
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent w-1/4 bg-frame-accent/10">
                    Growth Page
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg w-1/4">
                    Campaign Build
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm font-medium">
                {comparisonMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-frame-fg border-r border-frame-border/40">
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg border-r border-frame-border/40">
                      {row.launch}
                    </td>
                    <td className="p-4 md:p-5 font-semibold text-frame-fg border-r border-frame-border/40 bg-frame-accent/5">
                      {row.growth}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg">
                      {row.campaign}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-frame-border bg-frame-muted/20 p-5">
            <p className="text-xs md:text-sm font-medium text-frame-muted-fg">
              These packages provide a starting framework rather than fixed limits. Final pricing depends on the campaign objective, design complexity, integrations, functionality, and project scope.
            </p>
            <PosterButton href="/contact" className="shrink-0">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* TIMELINE / DURATION - STRICTLY H2 */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Delivery Windows</span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Landing Page Development Timeline
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            Landing page projects can move quickly when the campaign objective, copy, brand assets, and required integrations are ready before development begins.
          </p>

          <div className="mt-8 overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-frame-border bg-frame-muted/40">
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent">Estimated Timeline</th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg">Scope Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm font-medium">
                {timelineTable.map((item, tIdx) => (
                  <tr key={tIdx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-5 font-bold text-frame-fg">{item.type}</td>
                    <td className="p-4 md:p-5 text-frame-accent font-bold">{item.timeline}</td>
                    <td className="p-4 md:p-5 text-frame-muted-fg">{item.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg">
            More complex tracking setups, custom animations, multiple variants, third-party integrations, or delayed content and approvals may require additional time. We confirm the estimated delivery schedule after reviewing the campaign requirements and final project scope.
          </p>
        </div>

        {/* LOCAL & INTERNATIONAL CAMPAIGNS - STRICTLY H2 */}
        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Market Alignment</span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Landing Page Development for Local & International Campaigns
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            We build landing pages for businesses targeting customers in Bangladesh and international markets. The page structure, messaging, conversion path, and integrations are adapted to the audience and campaign rather than based on a single-market template.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="border border-frame-border bg-frame-muted/20 p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Domestic Focus</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                For Bangladesh Campaigns
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                {bangladeshPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-frame-border bg-frame-muted/20 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Global Reach</span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  For International Campaigns
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {[
                    'Target-market messaging & language adaptation',
                    'International lead capture & supported payments',
                    'Campaign-specific analytics, pixels & CRM setup',
                    'Adapted conversion path for the audience',
                  ].map((pt, iPnt) => (
                    <li key={iPnt} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 font-semibold text-frame-fg text-xs md:text-sm border-t border-frame-border/60 pt-4">
                Whether your campaign targets Dhaka, another part of Bangladesh, or customers in the US, UK, Australia, Canada, UAE, or other markets, the landing page is built around the audience you need to convert.
              </p>
            </div>
          </div>
        </div>

        {/* POST-LAUNCH SUPPORT & MAINTENANCE - STRICTLY H2 */}
        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Campaign Longevity</span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Post-Launch Support & Landing Page Maintenance
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8 lg:col-span-2">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Support Scope</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                After Launch, We Can Help With:
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs md:text-sm font-medium text-frame-fg/90">
                {[
                  'Tracking & pixel checks',
                  'Technical updates & fixes',
                  'Minor content changes',
                  'Integration troubleshooting',
                  'New campaign variants',
                  'Performance & speed reviews',
                ].map((item, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-frame-accent/50 bg-frame-accent/5 p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Scope & Expectations</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                What&apos;s Included / What&apos;s Separate
              </h3>
              <div className="mt-4 space-y-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                <div className="border-l-2 border-frame-accent pl-3">
                  <span className="font-bold text-frame-fg">Included:</span> the launch support and handover defined in the project agreement.
                </div>
                <div className="border-l-2 border-frame-border pl-3">
                  <span className="font-bold text-frame-fg">Separate scope:</span> ongoing maintenance, new sections, additional variants, and larger changes.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Honest Expectations</span>
              <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                What We Don&apos;t Guarantee
              </h3>
              <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not guarantee a specific conversion rate or campaign result. Performance depends on traffic quality, offer strength, targeting, pricing, and competition outside the build itself.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 lg:col-span-2 flex flex-col justify-between">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Our Commitment</span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                The Landing Page We Hand Over
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-fg">
                Our goal is to provide a technically sound, measurable, conversion-focused landing page that your campaigns can build on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
