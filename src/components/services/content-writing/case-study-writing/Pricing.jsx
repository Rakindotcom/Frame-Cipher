import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Pricing({ service }) {
  const pricingData = service?.pricing || {
  "intro": "Case study writing pricing depends on interview complexity, format requirements, and whether it's a single piece or an ongoing library-building engagement.",
  "packages": [],
  "table": {
    "headers": [
      "",
      "Starting Price"
    ],
    "rows": [
      [
        "",
        "What's Covered"
      ],
      [
        "",
        "Best For"
      ],
      [
        "",
        "Single Case Study"
      ],
      [
        "",
        "৳12,000"
      ],
      [
        "",
        "One long-form case study, client interview included"
      ],
      [
        "",
        "Businesses documenting one specific result"
      ],
      [
        "",
        "Case Study + Formats"
      ],
      [
        "",
        "৳18,000"
      ],
      [
        "",
        "Long-form plus short-form and social-ready versions"
      ],
      [
        "",
        "Businesses wanting sales and marketing-ready material"
      ],
      [
        "",
        "Case Study Library (3-5)"
      ],
      [
        "",
        "৳45,000"
      ],
      [
        "",
        "Multiple case studies, prioritized around real sales gaps"
      ],
      [
        "",
        "Businesses building out a genuine proof library"
      ],
      [
        "",
        "Ongoing Case Study Pipeline"
      ],
      [
        "",
        "Custom Quote"
      ],
      [
        "",
        "Continuous capture as new results happen"
      ],
      [
        "",
        "Businesses with regular, recurring success stories"
      ],
      [
        "",
        "Included at every tier:"
      ]
    ]
  }
}
  const packages = pricingData?.packages || []
  const table = pricingData?.table

  if (!packages.length && !table) return null

  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Plans"
          title="Pricing & Packages"
        >
          Clear investment tiers based on project scope, strategic complexity, and technical requirements.
        </SectionIntro>

        {packages.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`border-2 p-7 md:p-9 flex flex-col justify-between ${
                  index === 1
                    ? 'border-frame-accent bg-frame-accent/10'
                    : 'border-frame-border bg-frame-bg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Tier 0{index + 1}
                    </span>
                    {index === 1 && (
                      <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pkg.name}
                  </h3>
                  <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                      Starting Price
                    </span>
                    <div className="mt-1 font-heading text-2xl md:text-3xl font-bold tracking-tight text-frame-fg">
                      {pkg.price}
                    </div>
                  </div>
                  {pkg.description && (
                    <p className="mt-3 text-xs font-medium text-frame-muted-fg leading-relaxed">
                      {pkg.description}
                    </p>
                  )}
                  {pkg.features?.length > 0 && (
                    <ul className="mt-6 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8">
                  <PosterButton
                    href="/contact"
                    variant={index === 1 ? 'accent' : 'outline'}
                    className="w-full"
                  >
                    Choose {pkg.name}
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>
        ) : table?.headers ? (
          <div>
            <div className="overflow-hidden border-2 border-frame-border bg-frame-bg">
              <table className="w-full text-left">
                <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                  <tr>
                    {table.headers.map((h, i) => (
                      <th key={i} className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                  {table.rows?.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-frame-muted/20">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`p-4 md:p-6 ${
                            cIdx === 0
                              ? 'font-bold text-frame-fg'
                              : cIdx === 1
                              ? 'font-bold text-frame-accent'
                              : 'text-frame-muted-fg'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg max-w-2xl">
                * Pricing is indicative rather than fixed. Final pricing is confirmed after scoping requirements.
              </p>
              <div className="shrink-0">
                <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
