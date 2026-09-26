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
    name: 'Brand Identity Starter',
    price: '৳40,000+',
    period: 'starting',
    suitableFor: 'Businesses with an existing logo that need a consistent system around it',
    features: [
      'Visual identity system built around your existing logo',
      'Primary, secondary & background color palette calibration',
      'Typography pairing rules, hierarchy & font recommendations',
      'Imagery, photography & art direction guidance',
      'Supporting graphic elements & iconography direction',
      '10–15 page Brand Identity Reference Guidebook',
      'Organized digital & vector asset library handover',
      'Structured revision rounds included'
    ]
  },
  {
    name: 'Full Brand Identity System',
    price: '৳70,000+',
    period: 'starting',
    suitableFor: 'New brands and businesses building a complete identity from scratch',
    popular: true,
    features: [
      'Comprehensive brand strategy & positioning session',
      'Full logo development or complete redesign (3 concept directions)',
      'Complete visual identity (colors, typography, imagery, graphic motifs)',
      'Brand voice framework, tone guidance & messaging pillars',
      'Key messaging, elevator pitch & terminology standards',
      '25–40 page Comprehensive Brand Manual',
      'Master vector source files (AI, SVG, EPS, PDF) & raster packages',
      'Rollout guidance for web, social, and business collateral'
    ]
  },
  {
    name: 'Rebrand & Repositioning',
    price: 'Custom Quote',
    period: 'tailored',
    suitableFor: 'Established businesses evolving an existing brand or entering new markets',
    features: [
      'In-depth brand equity audit & stakeholder discovery interviews',
      'Category competitor analysis & repositioning framework',
      'Modernized visual identity & updated brand architecture',
      'Complete brand voice, messaging & copywriting guidelines',
      'Legacy collateral audit & transition rollout roadmap',
      'Comprehensive Enterprise Brand Governance Manual',
      'Internal team rollout presentation & vendor onboarding support',
      'Tailored revision rounds & dedicated creative director queue'
    ]
  }
]

const includedAcrossScopes = [
  'Collaborative brand discovery & strategic alignment session',
  'Competitive landscape & category conventions review',
  'Tailored visual identity development & color calibration',
  'Brand voice, tone & key messaging documentation',
  'Actionable Brand Guidelines manual with usage rules',
  'Production-ready vector and web asset preparation',
  'Structured revision rounds at defined project milestones',
  'Organized, cloud-accessible final asset library handover'
]

export default function Pricing({ service }) {
  const packages = service?.pricing?.packages?.length ? service.pricing.packages : defaultPackages

  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Commercial Investment"
          title="Branding Service Pricing in Bangladesh"
        >
          Branding investment varies based on whether your business requires a visual system built around an existing logo or an end-to-end strategic rebrand.
        </SectionIntro>

        {/* 3 PRICING TIERS */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => {
            const isHighlighted = pkg.popular || index === 1
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
                      Package 0{index + 1}
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

        {/* INCLUDED IN RELEVANT SCOPE */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <div className="border-b border-frame-border/60 pb-3">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Core Assurance
            </span>
            <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Included in the Relevant Project Scope
            </h4>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {includedAcrossScopes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 border border-frame-border/80 bg-frame-bg p-3.5">
                <CheckIcon />
                <span className="text-xs font-medium text-frame-fg leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GEOGRAPHIC MARKETS: BANGLADESH & INTERNATIONAL */}
        <div className="mt-16 border-t-2 border-frame-border pt-16">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Global Standards / Cultural Context
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Branding Services in Bangladesh & International Markets
            </h3>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Ecosystem
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Branding in Bangladesh
              </h4>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We support startups, SMEs, ecommerce platforms, product lines, lifestyle brands, and established enterprises across Dhaka and Bangladesh. For domestic operations, our brand systems specifically account for bilingual Bangla-English copywriting voice, custom Bangla typography pairings, and local consumer trust signals.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global Operations
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Branding for International Businesses
              </h4>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We work remotely with businesses in the US, UK, Australia, Canada, and UAE. Brand strategy and visual direction are adapted to international market expectations, digital accessibility standards, and category conventions rather than applying one region’s conventions everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
