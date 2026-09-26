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
    name: 'Single Design Piece',
    price: '৳5,000+',
    period: 'starting',
    suitableFor: 'One defined business or marketing design asset',
    features: [
      'One deliverable (flyer, one-pager, single ad, or poster)',
      'Custom layout tailored to your brand guidelines',
      'High-resolution print-ready and digital PDF exports',
      'Web-optimized PNG and JPG formats',
      'Structured revision rounds included'
    ]
  },
  {
    name: 'Pitch Deck / Presentation',
    price: '৳15,000+',
    period: 'starting',
    suitableFor: 'Structured presentation design for fundraising & sales',
    popular: true,
    features: [
      '10–20 slide custom structured presentation deck',
      'Narrative visual hierarchy, charts & infographics',
      'Problem, solution, market & financial projections slides',
      'Editable PowerPoint / Keynote / Canva master file',
      'Interactive digital PDF distribution export',
      'Structured revision rounds included'
    ]
  },
  {
    name: 'Print Collateral Package',
    price: '৳20,000+',
    period: 'starting',
    suitableFor: 'Multiple coordinated business materials',
    features: [
      'Coordinated business card, letterhead & envelope suite',
      'Multi-page corporate brochure or product booklet',
      'Event roll-up banner or conference backdrop',
      'Complete print-ready PDFs with bleeds & trim marks',
      'Editable Adobe InDesign / Illustrator source files',
      'Structured revision rounds included'
    ]
  },
  {
    name: 'Design Retainer',
    price: '৳25,000/mo',
    period: 'starting',
    suitableFor: 'Ongoing recurring design support at agreed volume',
    features: [
      'Agreed monthly quota of marketing and sales assets',
      'Priority turnaround and dedicated creative designer queue',
      'Decks, brochures, packaging updates & campaign banners',
      'Ongoing brand consistency & visual system governance',
      'Continuous template creation and asset organization',
      'Agreed turnaround expectations & revision workflow'
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
          title="Graphic Design Pricing in Bangladesh"
        >
          Graphic design pricing depends on the format, complexity, number of pages or assets, content readiness, production requirements, revision scope, and timeline.
        </SectionIntro>

        {/* 4 PRICING TIERS */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                      Tier 0{index + 1}
                    </span>
                    {isHighlighted && (
                      <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                        Most Popular
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

        {/* CUSTOM ENTERPRISE SCOPING */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
              Need a Custom Enterprise Scope?
            </h4>
            <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Larger company profiles, multi-page catalogues, annual reports, comprehensive packaging systems, multi-format campaigns, and complex projects receive custom pricing tailored to exact specifications.
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
              Global Standards / Local Execution
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Graphic Design Services in Bangladesh & International Markets
            </h3>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Focus
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Graphic Design in Bangladesh
              </h4>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We support businesses across Dhaka and Bangladesh with graphic design for sales, marketing, corporate communication, presentations, packaging, print production, and digital campaigns. Projects can be prepared for local audiences and bilingual communication (Bangla and English) with precise typography and direct coordination with local commercial print vendors.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global Operations
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Graphic Design for International Businesses
              </h4>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We also support businesses serving international audiences across the US, UK, Australia, Canada, and UAE. Projects strictly adhere to supplied brand guidelines, international visual systems, digital specifications, and commercial print-production parameters. The complete workflow is managed seamlessly remotely, from briefing to final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
