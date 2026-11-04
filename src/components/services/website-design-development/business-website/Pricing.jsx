import { Check, Minus } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Launch Kit',
    for: 'New businesses needing a focused, conversion-ready foundational site',
    price: '৳45,000 ($499)',
    pages: 'Up to 5 pages',
    timeline: '~1 week',
    features: [
      'Strategy & Consultation',
      'Core Site Architecture',
      'UI/UX Design',
      'Responsive Development & Hosting Setup',
      'Basic Lead Capture Forms',
      'Speed & SEO Optimization',
      '3 Revision Cycles',
    ],
  },
  {
    name: 'Growth Build',
    for: 'Established SMEs needing CRM integration and deeper architecture',
    price: '৳90,000 ($999)',
    pages: 'Up to 15 pages',
    timeline: '~2 weeks',
    featured: true,
    features: [
      'Strategy & Consultation',
      'Advanced Site Architecture',
      'UI/UX Design',
      'Responsive Development & Hosting Setup',
      'Lead Capture & Routing',
      'Speed & SEO Optimization',
      '5 Revision Cycles',
      'CRM Integration',
      'Analytics & Conversion Tracking Setup',
      'Custom Functionality (as scoped)',
    ],
  },
  {
    name: 'Enterprise Tech Build',
    for: 'Corporate brands with complex stack integrations and custom requirements',
    price: '৳180,000+ ($1,999+) / Custom Quote',
    pages: 'Up to 40+ pages',
    timeline: '~4 to 8 weeks',
    features: [
      'Strategy & Consultation',
      'Enterprise Site Architecture',
      'UI/UX Design',
      'Responsive Development & Hosting Setup',
      'Advanced Lead Capture Forms',
      'Speed & SEO Optimization',
      '10 Revision Cycles',
      'CRM Integration (multi-system)',
      'Full Analytics & Event Tracking',
      'Full Custom Functionality & APIs',
    ],
  },
]

const comparisonMatrix = [
  { feature: 'Best for', launch: 'New businesses needing a focused, conversion-ready foundational site', growth: 'Established SMEs needing CRM integration and deeper architecture', enterprise: 'Corporate brands with complex stack integrations and custom requirements' },
  { feature: 'Starting Price', launch: '৳45,000 ($499)', growth: '৳90,000 ($999)', enterprise: '৳180,000+ ($1,999+) / Custom Quote' },
  { feature: 'Page Count', launch: 'Up to 5 pages', growth: 'Up to 15 pages', enterprise: 'Up to 40+ pages' },
  { feature: 'Delivery Time', launch: '~1 week', growth: '~2 weeks', enterprise: '~4 to 8 weeks' },
  { feature: 'Strategy & Consultation', launch: true, growth: true, enterprise: true },
  { feature: 'Core Site Architecture', launch: true, growth: 'Included (advanced)', enterprise: 'Included (advanced)' },
  { feature: 'UI/UX Design', launch: true, growth: true, enterprise: true },
  { feature: 'Responsive Development & Hosting Setup', launch: true, growth: true, enterprise: true },
  { feature: 'Basic Lead Capture Forms', launch: true, growth: true, enterprise: true },
  { feature: 'Speed & SEO Optimization', launch: true, growth: true, enterprise: true },
  { feature: 'Revisions', launch: '3', growth: '5', enterprise: '10' },
  { feature: 'CRM Integration', launch: false, growth: true, enterprise: 'Included (multi-system)' },
  { feature: 'Analytics & Conversion Tracking Setup', launch: false, growth: true, enterprise: true },
  { feature: 'Custom Functionality', launch: false, growth: 'Included (as scoped)', enterprise: 'Included (full custom)' },
]

const ownershipDeliverables = [
  'Website administrator access',
  'CMS access for content updates',
  'Domain and hosting access where applicable',
  'Agreed design and development deliverables',
  'Handover documentation or guidance',
  'Basic training for managing supported website content',
]

function MatrixCell({ val, isHighlighted }) {
  if (val === true || val === 'Included' || val === 'Yes') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/15 text-frame-accent">
        <Check className="h-3 w-3 stroke-[2.5]" />
      </span>
    )
  }

  if (val === false || val === '—' || val === 'None' || val === 'No') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-600">
        <Minus className="h-3 w-3 stroke-[2]" />
      </span>
    )
  }

  if (typeof val === 'string' && val.startsWith('Included ')) {
    const detail = val.replace(/^Included\s*/, '')
    return (
      <div className="inline-flex items-center gap-2">
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/15 text-frame-accent">
          <Check className="h-3 w-3 stroke-[2.5]" />
        </span>
        <span className={isHighlighted ? "text-xs font-medium text-white" : "text-xs text-zinc-400"}>
          {detail}
        </span>
      </div>
    )
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
            Business Website{' '}
            <span className="italic text-frame-accent">Development Pricing.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Business website development is custom-quoted based on engagement level, from a foundational Launch Kit for new businesses to a comprehensive Enterprise Tech Build for established SMEs and corporate brands. Pricing typically depends on site complexity, CRM/tool integrations, custom functionality, and timeline.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-colors duration-200 ${
                pkg.featured
                  ? 'border-frame-accent/50 bg-[#121214]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {pkg.for}
                </p>

                <div className="mt-6 border-y border-white/[0.08] py-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">Starting Price</span>
                  <div className="mt-1 font-mono text-2xl font-medium text-white sm:text-3xl">
                    {pkg.price}
                  </div>
                  <div className="mt-3 flex justify-between border-t border-white/[0.06] pt-2 font-mono text-xs text-zinc-400">
                    <span>Scope: {pkg.pages}</span>
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
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
        <div className="mt-20">
          <div className="mb-8 max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              Side-by-Side Breakdown
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Technical Architecture &amp;{' '}
              <span className="italic text-frame-accent">Platform Comparison.</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              Compare package deliverables, capabilities, and system integrations to find the right scope for your sales workflow.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#09090B]">
                  <th className="w-1/4 p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Deliverable / Feature
                  </th>
                  <th className="w-1/4 p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-white">
                    Launch Kit
                  </th>
                  <th className="w-1/4 p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-frame-accent bg-white/[0.02]">
                    Growth Build
                  </th>
                  <th className="w-1/4 p-4 md:p-5 font-mono text-xs uppercase tracking-wider text-white">
                    Enterprise Tech Build
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm font-normal">
                {comparisonMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="border-r border-white/[0.08] p-4 font-medium text-white md:p-5">
                      {row.feature}
                    </td>
                    <td className="border-r border-white/[0.08] p-4 text-zinc-400 md:p-5">
                      <MatrixCell val={row.launch} isHighlighted={false} />
                    </td>
                    <td className="border-r border-white/[0.08] bg-white/[0.02] p-4 text-white md:p-5">
                      <MatrixCell val={row.growth} isHighlighted={true} />
                    </td>
                    <td className="p-4 text-zinc-400 md:p-5">
                      <MatrixCell val={row.enterprise} isHighlighted={false} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TIMELINE / DURATION */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
            Delivery Windows
          </span>
          <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-white">
            Timeline &amp; <span className="italic text-frame-accent">Duration.</span>
          </h3>
          <div className="mt-4 max-w-4xl space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300">
            <p>
              Business website development typically takes 4 to 8 weeks, depending on the complexity of the tech stack, custom animations, and CRM integrations required. A simpler, single-integration build moves toward the shorter end; a build involving multiple CRM connections or extensive custom functionality will run longer.
            </p>
            <p>
              Projects move faster when content, brand assets, and CRM access are ready before development begins; most delays come from waiting on these inputs mid-build, not from the build process itself.
            </p>
          </div>
        </div>

        {/* WEBSITE OWNERSHIP & POST-LAUNCH MAINTENANCE */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Ownership */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Governance &amp; IP
              </span>
              <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                Website Ownership, Handover &amp; Content Management
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Your website should remain a practical business asset after development is complete. The project agreement defines the ownership, access, deliverables, and handover terms for your website. Based on the platform and project scope, this may include:
              </p>
              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {ownershipDeliverables.map((item, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-400">
              We also explain what is included in ongoing maintenance and what falls outside the original development scope, so there are no surprises after launch.
            </p>
          </div>

          {/* Post-Launch Support & Maintenance */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Quality Guarantee
              </span>
              <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                Post-Launch Support &amp; Maintenance
              </h3>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-300">
                <p>
                  Every stage of the build architecture, design, development, and integration &mdash; goes through your review and approval before we proceed, so nothing reaches launch without your sign-off.
                </p>
                <p>
                  We don&apos;t guarantee a specific number of leads or conversion rate from the website alone, since that depends on traffic volume, offer, and market factors outside of the build itself. What we guarantee is a site structurally built to convert the traffic you send to it.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <PosterButton href="/contact" variant="accent" className="w-full">
                Discuss Your Build Requirements
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
