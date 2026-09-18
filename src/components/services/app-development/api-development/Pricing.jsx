import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    "name": "Single Integration",
    "price": "৳60,000",
    "description": "One third-party service, standard authentication, basic testing",
    "timeline": "~1–2 weeks",
    "featured": false
  },
  {
    "name": "Custom API (Standard)",
    "price": "৳150,000",
    "description": "REST or GraphQL API, moderate endpoint count, documentation included",
    "timeline": "~3–5 weeks",
    "featured": true
  },
  {
    "name": "Multi-System Integration",
    "price": "৳280,000",
    "description": "Multiple third-party systems, webhook handling, retry logic",
    "timeline": "~5–8 weeks",
    "featured": false
  },
  {
    "name": "Complex / Enterprise Integration",
    "price": "Custom Quote",
    "description": "High-volume data sync, multiple legacy systems, compliance-related technical requirements",
    "timeline": "~8+ weeks",
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
      "Single Integration",
      "৳60,000",
      "One third-party service, standard authentication, basic testing",
      "~1–2 weeks"
    ],
    [
      "Custom API (Standard)",
      "৳150,000",
      "REST or GraphQL API, moderate endpoint count, documentation included",
      "~3–5 weeks"
    ],
    [
      "Multi-System Integration",
      "৳280,000",
      "Multiple third-party systems, webhook handling, retry logic",
      "~5–8 weeks"
    ],
    [
      "Complex / Enterprise Integration",
      "Custom Quote",
      "High-volume data sync, multiple legacy systems, compliance-related technical requirements",
      "~8+ weeks"
    ]
  ]
}



export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Value / Scope Tiers"
          title="API Development & Integration Pricing"
        >
          API development pricing depends on the number of systems, endpoint complexity, authentication requirements, data flow, third-party dependencies, and testing requirements.
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
                  {pricingTable.headers.map((h, i) => (
                    <th key={i} className="p-4 border-r-2 border-frame-border last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {pricingTable.rows.map((row, rIdx) => (
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
            Prices shown are starting guidelines. The final proposal confirms the project scope, fee, deliverables, and delivery schedule before work begins. Exact investments depend on specific system integrations, custom workflow complexity, database architectures, and required compliance standards.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Is Included
            </h2>
            <ul className="mt-5 grid gap-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
              {[
                'Strategy and API architecture',
                'Custom API development or third-party integration',
                'Authentication and authorization',
                'Documentation and integration testing',
                'Error, webhook, and retry handling',
                'Launch support and agreed monitoring setup',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-frame-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Can Affect the Timeline?
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Most API and integration projects take 1–8+ weeks. A single third-party integration usually moves faster than a multi-system integration. Multiple systems, complex data mapping, legacy infrastructure, custom authentication, high-volume synchronization, extensive testing, compliance requirements, and limited third-party documentation can extend delivery.
            </p>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
              Work moves faster when third-party documentation, credentials, API access, and required approvals are available early.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
