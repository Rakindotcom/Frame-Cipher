'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for portfolio — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Project Bands in Our Portfolio",
  "pricingIntro": "Every portfolio piece maps to a real budget band: starter productions ৳25,000–80,000, signature work ৳1,00,000–3,00,000, flagship campaigns above ৳5,00,000. Ask for the band behind any reel.",
  "tiers": [
    {
      "name": "Starter Productions",
      "price": "৳25,000–80,000",
      "priceNote": "band reference",
      "tag": "Interviews & Shorts",
      "cta": "Replicate a Starter Project",
      "description": "Studio interviews, batch shorts, catalogue shoots and event teasers — the efficient end of the portfolio.",
      "features": [
        "Single-session studio recordings and interviews",
        "Batch vertical packs and catalogue banks",
        "Half-day event coverage with 24h teasers",
        "Portfolio pieces tagged with scope and crew",
        "Reference contacts available on request",
        "Fastest to replicate: 3–7 day turnarounds"
      ]
    },
    {
      "name": "Signature Work",
      "price": "৳1,00,000–3,00,000",
      "priceNote": "band reference",
      "tag": "Most Requested",
      "cta": "Replicate a Signature Project",
      "popular": true,
      "description": "Company profiles, OVCs, documentaries and wedding narratives — where concept and craft visibly compound.",
      "features": [
        "Multi-day productions with creative direction",
        "Before/after grading reels on request",
        "Retention and ROAS case metrics where shared",
        "Industry-matched private showreels via WhatsApp",
        "Crew sheets showing exact roles deployed",
        "Replication timelines quoted per reference"
      ]
    },
    {
      "name": "Flagship Campaigns",
      "price": "৳5,00,000+",
      "priceNote": "band reference",
      "tag": "National Scale",
      "cta": "Scope a Flagship Campaign",
      "description": "TVCs, multi-film campaigns and feature documentaries — the productions that anchor categories.",
      "features": [
        "Broadcast and festival-grade finishing pipelines",
        "Casting, art direction and location portfolios",
        "Media-plan context: where assets ran and why",
        "Full case studies with metrics and testimonials",
        "Executive reference calls for enterprise buyers",
        "Co-production and white-label agency options"
      ]
    }
  ],
  "priceFactors": [
    "Shoot days, locations and crew size on the reference",
    "Creative direction, casting and art department weight",
    "Motion graphics, sound design and licensed music",
    "Number of deliverables and aspect-ratio versions",
    "Talent, wardrobe and location permissions",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Dhaka portfolios rarely disclose budgets, forcing buyers to guess whether a reel cost ৳30,000 or ৳3,00,000. We tag every case with its band — starter (৳25k–80k), signature (৳1L–3L), flagship (৳5L+) — so expectations calibrate before the first call. Always judge studios on full films in your industry, not trailers; ask for grading before/afters and, where relevant, performance metrics rather than view counts alone.",
  "costRows": [
    [
      "Starter-band productions",
      "৳25,000–80,000"
    ],
    [
      "Signature-band productions",
      "৳1,00,000–3,00,000"
    ],
    [
      "Flagship-band campaigns",
      "৳5,00,000+"
    ],
    [
      "Private curated showreel",
      "free on request"
    ],
    [
      "Studio walkthrough verification visit",
      "free by appointment"
    ]
  ]
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Pricing & Investment"
          title={DATA.pricingTitle}
          index="05"
        >
          {DATA.pricingIntro}
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-3">
          {DATA.tiers.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border-2 p-7 md:p-8 ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {pkg.tag}
                  </span>
                  {pkg.popular && (
                    <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-frame-accent-fg">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-6 border-b-2 border-frame-border/60 pb-6">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-frame-fg">
                    {pkg.price}
                  </span>
                  {pkg.priceNote && (
                    <span className="ml-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                      {pkg.priceNote}
                    </span>
                  )}
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

              <div className="mt-8 pt-6 border-t-2 border-frame-border/60">
                <PosterButton
                  href="#booking"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  {pkg.cta || 'Book This Package'} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
          Every replication quote is itemised in writing within 48 hours, covering crew, days, deliverables and timeline. A 50%
          advance confirms dates, and the balance is due on final sign-off. All payments get VAT-compliant invoices.
        </p>

        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
            What changes the price
          </h4>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs md:text-sm font-medium text-frame-fg/90">
            {DATA.priceFactors.map((factor, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
            What Portfolio Bands Mean in Dhaka
          </h4>
          <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
            {DATA.marketNote}
          </p>
          {DATA.costRows && DATA.costRows.length > 0 && (
            <dl className="mt-5 grid gap-px border border-frame-border/60 bg-frame-border/40 sm:grid-cols-2">
              {DATA.costRows.map(([item, range], i) => (
                <div key={i} className="flex items-start justify-between gap-3 bg-frame-bg px-4 py-3">
                  <dt className="text-xs font-medium text-frame-muted-fg">{item}</dt>
                  <dd className="shrink-0 text-xs font-black text-frame-fg text-right">{range}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
            All sessions run from our studio on the 6th Floor, Eurasia Building, Matikata ECB Chattar, with
            generator and IPS backup and fibre internet on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
