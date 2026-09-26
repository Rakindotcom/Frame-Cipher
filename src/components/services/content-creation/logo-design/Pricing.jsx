import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const defaultPackages = [
  {
    name: 'New Logo Design',
    price: '৳20,000+',
    period: 'starting',
    suitableFor: 'New businesses, startups, and new product ventures',
    features: [
      'Strategic discovery & competitor category review',
      '3 distinct, fully developed creative concept directions',
      'Refinement of chosen direction (kerning, balance, proportions)',
      'Primary horizontal, stacked vertical & icon-only lockups',
      'Full-color, solid black & reversed white colorways',
      'Vector master source files (AI, SVG, EPS, PDF)',
      'High-resolution transparent PNG & web JPG exports',
      'Favicon & app icon package (multi-resolution)',
      'Basic logo usage reference guidelines document'
    ]
  },
  {
    name: 'Logo Redesign / Refresh',
    price: '৳15,000+',
    period: 'starting',
    suitableFor: 'Established businesses updating an outdated or inconsistent mark',
    features: [
      'Brand equity & recognized visual elements assessment',
      'Modernized proportions, typography, and geometry',
      'Resolution of technical scaling & digital display bottlenecks',
      'Refined color palette and monochrome contrast optimization',
      'Complete vector source file suite (AI, SVG, EPS, PDF)',
      'Favicon, app icon & social profile avatar assets',
      'Organized file handover and updated usage reference'
    ]
  },
  {
    name: 'Logo + Extended Guidelines',
    price: '৳25,000+',
    period: 'starting',
    suitableFor: 'Growing companies wanting rigorous internal usage governance',
    popular: true,
    features: [
      'Complete New Logo or Redesign scope included',
      'Expanded 10–15 page Brand Usage Guidebook',
      'Precise clear space, minimum size & placement rules',
      'Comprehensive color specifications (HEX, RGB, CMYK, Pantone)',
      'Approved primary & secondary typography pairing rules',
      'Co-branding, sponsorship & partner lockup rules',
      'Extensive visual incorrect usage & distortion examples'
    ]
  }
]

export default function Pricing({ service }) {
  const packages = service?.pricing?.packages?.length ? service.pricing.packages : defaultPackages

  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Commercial Investment"
          title="Logo Design Pricing in Bangladesh"
        >
          Transparent, fixed investment tiers based on concept depth, revision scope, brand guidelines detail, and deliverable packages.
        </SectionIntro>

        {/* 3 PRICING TIERS */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => {
            const isHighlighted = pkg.popular || index === 2
            return (
              <div
                key={index}
                className={`border-2 p-6 md:p-8 flex flex-col justify-between ${
                  isHighlighted
                    ? 'border-frame-accent bg-frame-accent/5'
                    : 'border-frame-border bg-frame-bg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Tier 0{index + 1}
                    </span>
                    {isHighlighted && (
                      <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pkg.name}
                  </h3>
                  <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Starting Investment
                    </span>
                    <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                      {pkg.price}
                    </div>
                  </div>
                  {pkg.suitableFor && (
                    <p className="mt-3 text-xs font-semibold text-frame-muted-fg leading-relaxed">
                      {pkg.suitableFor}
                    </p>
                  )}
                  {pkg.features?.length > 0 && (
                    <ul className="mt-6 space-y-2.5 text-xs font-medium text-frame-fg/90">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8">
                  <PosterButton
                    href="/contact"
                    variant={isHighlighted ? 'accent' : 'outline'}
                    className="w-full text-center"
                  >
                    Select {pkg.name.split('/')[0].trim()}
                  </PosterButton>
                </div>
              </div>
            )
          })}
        </div>

        {/* CUSTOM QUOTE CALLOUT */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
              Need a Complete Brand Identity or Enterprise Architecture?
            </h4>
            <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              For businesses that need a comprehensive brand system beyond the logo—including full collateral suites, packaging systems, custom typography licensing, or sub-brand architectures—we build custom project scopes.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* GEOGRAPHIC SCOPE: BANGLADESH & INTERNATIONAL MARKETS */}
        <div className="mt-16 border-t-2 border-frame-border pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Cross-Border Delivery
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Logo Design Services in Bangladesh & International Markets
            </h3>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Ecosystem
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Logo Design in Bangladesh
              </h4>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We provide logo design for businesses across Dhaka and Bangladesh spanning startups, small businesses, ecommerce brands, product lines, professional firms, and established corporations. Where relevant, logo development considers custom Bangla typography, bilingual Bangla-English mark lockups, and local cultural relevance.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global Standards
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Logo Design for International Businesses
              </h4>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We support companies serving international audiences across the US, UK, Australia, Canada, and UAE through a streamlined remote design workflow. Projects strictly adhere to international visual standards, digital accessibility rules, and modern cross-platform scaling requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
