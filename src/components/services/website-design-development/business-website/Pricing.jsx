import { PosterButton } from '../../../Kinetic'

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
    timeline: '~4–8 weeks',
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
  { feature: 'Delivery Time', launch: '~1 week', growth: '~2 weeks', enterprise: '~4–8 weeks' },
  { feature: 'Strategy & Consultation', launch: '✅', growth: '✅', enterprise: '✅' },
  { feature: 'Core Site Architecture', launch: '✅', growth: '✅ (advanced)', enterprise: '✅ (advanced)' },
  { feature: 'UI/UX Design', launch: '✅', growth: '✅', enterprise: '✅' },
  { feature: 'Responsive Development & Hosting Setup', launch: '✅', growth: '✅', enterprise: '✅' },
  { feature: 'Basic Lead Capture Forms', launch: '✅', growth: '✅', enterprise: '✅' },
  { feature: 'Speed & SEO Optimization', launch: '✅', growth: '✅', enterprise: '✅' },
  { feature: 'Revisions', launch: '3', growth: '5', enterprise: '10' },
  { feature: 'CRM Integration', launch: '—', growth: '✅', enterprise: '✅ (multi-system)' },
  { feature: 'Analytics & Conversion Tracking Setup', launch: '—', growth: '✅', enterprise: '✅' },
  { feature: 'Custom Functionality', launch: '—', growth: '✅ (as scoped)', enterprise: '✅ (full custom)' },
]

const ownershipDeliverables = [
  'Website administrator access',
  'CMS access for content updates',
  'Domain and hosting access where applicable',
  'Agreed design and development deliverables',
  'Handover documentation or guidance',
  'Basic training for managing supported website content',
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Clear Investment / Transparent Estimates
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Business Website Development Pricing
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Business website development is custom-quoted based on engagement level, from a foundational Launch Kit for new businesses to a comprehensive Enterprise Tech Build for established SMEs and corporate brands. Pricing typically depends on site complexity, CRM/tool integrations, custom functionality, and timeline.
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
                    <span>Scope: {pkg.pages}</span>
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
              Compare package deliverables, capabilities, and system integrations to find the right scope for your sales workflow.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-frame-border bg-frame-muted/40">
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent w-1/4">
                    Deliverable / Feature
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg w-1/4">
                    Launch Kit
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-accent w-1/4 bg-frame-accent/10">
                    Growth Build
                  </th>
                  <th className="p-4 md:p-5 text-xs font-black uppercase tracking-wider text-frame-fg w-1/4">
                    Enterprise Tech Build
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
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TIMELINE / DURATION - STRICTLY H2 */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Delivery Windows</span>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Timeline / Duration
          </h2>
          <div className="mt-5 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            <p>
              Business website development typically takes 4 to 8 weeks, depending on the complexity of the tech stack, custom animations, and CRM integrations required. A simpler, single-integration build moves toward the shorter end; a build involving multiple CRM connections or extensive custom functionality will run longer.
            </p>
            <p>
              Projects move faster when content, brand assets, and CRM access are ready before development begins; most delays come from waiting on these inputs mid-build, not from the build process itself.
            </p>
          </div>
        </div>

        {/* WEBSITE OWNERSHIP & POST-LAUNCH MAINTENANCE - STRICTLY H2 */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {/* Ownership */}
          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Governance & IP</span>
              <h2 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Ownership, Handover & Content Management
              </h2>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Your website should remain a practical business asset after development is complete. The project agreement defines the ownership, access, deliverables, and handover terms for your website. Based on the platform and project scope, this may include:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                {ownershipDeliverables.map((item, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-xs font-medium italic text-frame-muted-fg border-t border-frame-border/60 pt-4">
              We also explain what is included in ongoing maintenance and what falls outside the original development scope, so there are no unnecessary surprises after launch.
            </p>
          </div>

          {/* Post-Launch Support & Maintenance */}
          <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Quality Guarantee</span>
              <h2 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Post-Launch Support & Maintenance
              </h2>
              <div className="mt-4 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                <p>
                  Every stage of the build architecture, design, development, and integration &mdash; goes through your review and approval before we proceed, so nothing reaches launch without your sign-off.
                </p>
                <p>
                  We don&apos;t guarantee a specific number of leads or conversion rate from the website alone, since that depends on traffic volume, offer, and market factors outside of the build itself. What we guarantee is a site structurally built to convert the traffic you send to it.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-frame-border/60 pt-6">
              <PosterButton href="/contact" className="w-full">
                Discuss Your Build Requirements &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
