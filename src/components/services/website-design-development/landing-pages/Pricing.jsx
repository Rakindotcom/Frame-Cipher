import { Check, Minus } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

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

function MatrixCell({ val, isHighlighted }) {
  if (val === true || val === 'Included' || val === 'Yes' || val === '✓') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/15 text-frame-accent">
        <Check className="h-3 w-3 stroke-[2.5]" />
      </span>
    )
  }

  if (val === false || val === '—' || val === 'None' || val === 'No' || val === '✗') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/[0.08] bg-[#09090B] text-zinc-600">
        <Minus className="h-3 w-3 stroke-[2]" />
      </span>
    )
  }

  if (typeof val === 'string') {
    const trimmed = val.trim()
    if (trimmed.startsWith('✓') || trimmed.startsWith('Included')) {
      const detail = trimmed.replace(/^[✓Included\s]+/, '').trim()
      return (
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/15 text-frame-accent">
            <Check className="h-3 w-3 stroke-[2.5]" />
          </span>
          {detail && (
            <span className={isHighlighted ? "text-xs font-medium text-frame-accent" : "text-xs text-zinc-300"}>
              {detail}
            </span>
          )}
        </div>
      )
    }
  }

  return <span>{val}</span>
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Landing Page Development{' '}
            <span className="italic text-frame-accent">Pricing.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Landing page development is custom quoted based on the complexity of your campaign, conversion goal, design requirements, tracking setup, CRM integrations, and required functionality. Choose from a focused Launch Page for straightforward campaigns, a Growth Page for more advanced requirements, or a Campaign Build for larger and more testable launches.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl p-7 md:p-8 transition-colors duration-200 ${
                pkg.featured
                  ? 'border border-frame-accent/40 bg-[#121214] shadow-[0_0_30px_rgba(168,85,247,0.08)]'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y border-white/[0.08] py-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                    Starting Price
                  </span>
                  <div className="mt-1 font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
                    {pkg.price}
                  </div>
                  <div className="mt-3 flex justify-between border-t border-white/[0.08] pt-2 font-mono text-xs text-zinc-400">
                    <span>Scope: {pkg.scope}</span>
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs md:text-sm text-zinc-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="leading-relaxed">{feat}</span>
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

        {/* COMPARISON MATRIX */}
        <div className="mt-24">
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
              Technical Architecture &amp; Platform Comparison
            </h2>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Compare package deliverables, capabilities, and tracking integrations to find the right scope for your campaign.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/4">
                    Feature
                  </th>
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-white w-1/4">
                    Launch Page
                  </th>
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent w-1/4 bg-frame-accent/5">
                    Growth Page
                  </th>
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-white w-1/4">
                    Campaign Build
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-xs md:text-sm">
                {comparisonMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-5 font-medium text-white border-r border-white/[0.08]">
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-5 text-zinc-300 border-r border-white/[0.08]">
                      <MatrixCell val={row.launch} isHighlighted={false} />
                    </td>
                    <td className="p-4 md:p-5 text-white border-r border-white/[0.08] bg-frame-accent/5">
                      <MatrixCell val={row.growth} isHighlighted={true} />
                    </td>
                    <td className="p-4 md:p-5 text-zinc-300">
                      <MatrixCell val={row.campaign} isHighlighted={false} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-5">
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
              These packages provide a starting framework rather than fixed limits. Final pricing depends on the campaign objective, design complexity, integrations, functionality, and project scope.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* TIMELINE / DURATION */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
            Landing Page Development Timeline
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl">
            Landing page projects can move quickly when the campaign objective, copy, brand assets, and required integrations are ready before development begins.
          </p>

          <div className="mt-8 overflow-x-auto rounded-lg border border-white/[0.08] bg-[#09090B]">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent">Project Type</th>
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent">Estimated Timeline</th>
                  <th className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-white">Scope Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-xs md:text-sm">
                {timelineTable.map((item, tIdx) => (
                  <tr key={tIdx} className="hover:bg-white/[0.02]">
                    <td className="p-4 md:p-5 font-medium text-white">{item.type}</td>
                    <td className="p-4 md:p-5 font-mono text-frame-accent font-medium">{item.timeline}</td>
                    <td className="p-4 md:p-5 text-zinc-300">{item.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs md:text-sm text-zinc-400 leading-relaxed">
            More complex tracking setups, custom animations, multiple variants, third-party integrations, or delayed content and approvals may require additional time. We confirm the estimated delivery schedule after reviewing the campaign requirements and final project scope.
          </p>
        </div>

        {/* LOCAL & INTERNATIONAL CAMPAIGNS */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
            Landing Page Development for Local &amp; International Campaigns
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl">
            We build landing pages for businesses targeting customers in Bangladesh and international markets. The page structure, messaging, conversion path, and integrations are adapted to the audience and campaign rather than based on a single-market template.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-white/[0.08] bg-[#09090B] p-6 md:p-8">
              <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                For Bangladesh Campaigns
              </h3>
              <p className="mt-2 font-mono text-xs text-zinc-400">Where relevant, we can account for:</p>
              <ul className="mt-4 space-y-2.5 text-xs md:text-sm text-zinc-300">
                {bangladeshPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#09090B] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  For International Campaigns
                </h3>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-300">
                  We adapt landing pages to the target market, audience expectations, language, traffic source, payment requirements, and campaign objective. This can include campaign-specific messaging, international lead capture, supported payment options, analytics, CRM connections, and other required integrations.
                </p>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-300">
                  Whether your campaign targets Dhaka, another part of Bangladesh, or customers in the US, UK, Australia, Canada, UAE, or other markets, the landing page is built around the audience you need to convert.
                </p>
              </div>
              <p className="mt-6 text-xs md:text-sm font-medium text-frame-accent border-t border-white/[0.08] pt-4">
                The goal is simple: make the page feel relevant to the people who see it, wherever your campaign is running.
              </p>
            </div>
          </div>
        </div>

        {/* POST-LAUNCH SUPPORT & MAINTENANCE */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
            Post-Launch Support &amp; Landing Page Maintenance
          </h2>

          <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-zinc-300 max-w-4xl">
            <p>
              After launch, a campaign page may need tracking checks, technical updates, minor content changes, integration fixes, or new variants as campaign requirements change.
            </p>
            <p>
              Development projects include the launch support and handover defined in the project agreement. Ongoing maintenance, new sections, additional variants, and larger changes can be handled through a separate support scope.
            </p>
            <p>
              We do not guarantee a specific conversion rate or campaign result. Performance depends on traffic quality, offer strength, audience targeting, pricing, competition, and other factors outside the landing-page build itself.
            </p>
            <p className="font-medium text-white">
              Our goal is to provide a technically sound, measurable, conversion-focused landing page that your campaigns can build on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
