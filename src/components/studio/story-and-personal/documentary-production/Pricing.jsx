'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for documentary-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Documentary Production Rates in Bangladesh",
  "pricingIntro": "Research-led impact storytelling: field shorts from ৳1,85,000, standard NGO and CSR documentaries at ৳3,60,000, feature and series work scoped from ৳7,80,000 with festival masters.",
  "tiers": [
    {
      "name": "Impact Short",
      "price": "৳1,85,000",
      "priceNote": "10–12 min",
      "tag": "CSR & Donor",
      "cta": "Book Impact Short",
      "description": "A focused field story: one location arc, character-led interviews and festival-capable finish for donor reporting.",
      "features": [
        "Pre-production research and character identification",
        "Up to 5 field days with self-sufficient crew",
        "HDR cinema capture with drone establishing shots",
        "Ethical consent protocols and dialect translation",
        "Teaser trailer plus 3 social character cutdowns",
        "Bangla/English subtitles, 3–5 week delivery"
      ]
    },
    {
      "name": "Standard Documentary",
      "price": "৳3,60,000",
      "priceNote": "15–25 min",
      "tag": "Most Popular",
      "cta": "Book Standard Documentary",
      "popular": true,
      "description": "The development-sector standard: multi-location narrative with archival research and international-version masters.",
      "features": [
        "Multi-district fieldwork with fixer coordination",
        "Archival research, licensing and restoration handling",
        "Original score direction and full sound design",
        "Stakeholder review structure for institutional clients",
        "Festival DCP plus broadcast and web masters",
        "Impact measurement cutdowns for campaigns"
      ]
    },
    {
      "name": "Feature & Series",
      "price": "৳7,80,000+",
      "priceNote": "scoped quote",
      "tag": "Festival & Broadcast",
      "cta": "Request Feature & Series",
      "description": "Long-form ambition: extended production windows, multi-season arcs and distribution-grade finishing.",
      "features": [
        "Extended research, treatment and script development",
        "Multi-phase shooting across seasons if needed",
        "International co-production paperwork support",
        "Colour pipeline with cinema-gamut finishing",
        "Trailer, poster stills and press-kit assets",
        "Festival submission strategy and premiere planning"
      ]
    }
  ],
  "priceFactors": [
    "Research depth, treatment and character scouting",
    "Field days, districts and fixer coordination",
    "Archival licensing and restoration volume",
    "Original score, sound design and translation",
    "Version stack: DCP, broadcast, web and social cuts",
    "Review rounds across programme and country offices"
  ],
  "marketNote": "Bangladesh documentary and corporate-AV budgets run ৳1,50,000 for capability showcases, ৳2,00,000 for welfare films, ৳2,50,000 for compliance tours and ৳3,50,000–6,00,000 for sustainability documentaries (Libanza 2026 RMG/NGO benchmarks). International fixer-supported productions bill USD 2,000–8,000 for logistics alone. Our tiers reflect full production — not fixer-only — with ethical protocols and translation that donor audiences require.",
  "costRows": [
    [
      "Impact short, single-arc field story (10–12 min)",
      "৳1,85,000"
    ],
    [
      "Standard documentary, multi-location (15–25 min)",
      "৳3,60,000"
    ],
    [
      "Feature / series production",
      "৳7,80,000+"
    ],
    [
      "Archival licensing and restoration",
      "quoted per asset"
    ],
    [
      "Additional language versioning",
      "৳25,000–45,000"
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

        <p className="mt-6 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
          Every quote is itemised in writing within 48 hours, covering research, field days, deliverables and timeline. A 50%
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
            What Documentary Production Costs in Bangladesh
          </h4>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
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
            Field shoots happen on-location across Bangladesh — riverine districts, industrial belts and heritage sites —
            with the studio at ECB Chattar as base for interviews, grading and backup power on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
