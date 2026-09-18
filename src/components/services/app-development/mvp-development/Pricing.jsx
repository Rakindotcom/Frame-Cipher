import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    "name": "Minimal MVP",
    "price": "৳180,000",
    "description": "Single core workflow, basic backend, one platform",
    "timeline": "~4–6 weeks",
    "featured": false
  },
  {
    "name": "Standard MVP",
    "price": "৳300,000",
    "description": "Multiple core features, standard backend, single platform",
    "timeline": "~6–10 weeks",
    "featured": true
  },
  {
    "name": "Multi-Platform MVP",
    "price": "৳450,000",
    "description": "Core functionality across web and mobile, moderate backend",
    "timeline": "~10–14 weeks",
    "featured": false
  },
  {
    "name": "Complex MVP",
    "price": "Custom Quote",
    "description": "Multiple core workflows, advanced backend, extensive integrations",
    "timeline": "~14+ weeks",
    "featured": false
  }
]

const pricingTable = {
  "headers": [
    "Project Type",
    "Starting Price",
    "Typical Scope",
    "Typical Delivery"
  ],
  "rows": [
    [
      "Minimal MVP",
      "৳180,000",
      "Single core workflow, basic backend, one platform",
      "~4–6 weeks"
    ],
    [
      "Standard MVP",
      "৳300,000",
      "Multiple core features, standard backend, single platform",
      "~6–10 weeks"
    ],
    [
      "Multi-Platform MVP",
      "৳450,000",
      "Core functionality across web and mobile, moderate backend",
      "~10–14 weeks"
    ],
    [
      "Complex MVP",
      "Custom Quote",
      "Multiple core workflows, advanced backend, extensive integrations",
      "~14+ weeks"
    ]
  ]
}

const comparisonTable = {
  "headers": [
    "Product Stage",
    "Main Question",
    "Typical Users",
    "Primary Purpose"
  ],
  "rows": [
    [
      "Proof of Concept (PoC)",
      "Can the technical approach work?",
      "Internal team",
      "Test technical feasibility"
    ],
    [
      "Prototype",
      "Does the concept or user flow make sense?",
      "Stakeholders or test users",
      "Test experience and concept"
    ],
    [
      "MVP",
      "Will real users use or pay for the core solution?",
      "Early real users",
      "Validate the product assumption"
    ],
    [
      "Full Product",
      "How do we serve a broader market reliably?",
      "Larger user base",
      "Expand functionality and scale"
    ]
  ]
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Value / Scope Tiers"
          title="MVP Development Pricing"
        >
          MVP development pricing depends on the number of platforms, core workflows, backend complexity, integrations, authentication, payment requirements, testing needs, and overall scope.
        </SectionIntro>

        
        {/* PACKAGES GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                pkg.featured
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                    Most Requested
                  </span>
                )}
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Timeline: {pkg.timeline}
                  </p>
                )}
                {pkg.description && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {pkg.description}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full text-xs">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>
        

        
        {/* COMPARISON / SPECIFICATION TABLE */}
        <div className="mt-16">
          <h2 className="mb-6 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Technical Architecture & Platform Comparison
          </h2>
          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  {comparisonTable.headers.map((h, i) => (
                    <th key={i} className="p-4 border-r-2 border-frame-border last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {comparisonTable.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={`p-4 border-r-2 border-frame-border last:border-r-0 ${cIdx === 0 ? 'font-semibold text-frame-fg' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        

        {/* PRICING FACTORS NOTE */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent mb-2">
            Pricing Guidance & Cost Factors
          </p>
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Most MVPs can take approximately 4–14+ weeks, depending on scope. Projects can take longer when they involve multiple platforms, complex workflows, advanced backend requirements, payment systems, multiple third-party APIs, real-time functionality, complex authentication, large data requirements, extensive testing, advanced analytics, legacy-system integration, or complex administrative functionality. The final timeline should be confirmed after reviewing the actual product requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
