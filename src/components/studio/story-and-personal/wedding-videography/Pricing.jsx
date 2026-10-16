'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for wedding-videography — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Wedding Videography Rates in Dhaka",
  "pricingIntro": "Narrative wedding films, not static stage recordings: single-event cinema at ৳32,000, two-event stories at ৳68,000, signature multi-day celebrations at ৳1,45,000 with teaser in 7 days.",
  "tiers": [
    {
      "name": "Single Event Cinema",
      "price": "৳32,000",
      "priceNote": "per event",
      "tag": "Holud / Wedding / Reception",
      "cta": "Book Single Event Cinema",
      "description": "One function filmed cinematically: candid coverage, highlight film and social teaser with feature-grade colour.",
      "features": [
        "Up to 6 hours with lead cinematographer + assistant",
        "3–5 minute cinematic highlight film",
        "60-second Instagram teaser within 7 days",
        "Full ceremony documentary edit included",
        "Licensed emotional score, studio sound master",
        "Feature-film colour grade, 4K delivery ready"
      ]
    },
    {
      "name": "Two-Event Story",
      "price": "৳68,000",
      "priceNote": "two events",
      "tag": "Most Popular",
      "cta": "Book Two-Event Story",
      "popular": true,
      "description": "Holud plus wedding (or wedding plus reception) woven into one narrative with couple-session portraits.",
      "features": [
        "Two full functions with consistent creative team",
        "Pre-event couple portrait session included",
        "Unified narrative edit across both events",
        "Teaser + highlight + full ceremony films",
        "Family interview snippets woven into story",
        "Priority edit lane, heirloom USB presentation box"
      ]
    },
    {
      "name": "Signature Celebration",
      "price": "৳1,45,000",
      "priceNote": "3–4 events",
      "tag": "Multi-Day Heirloom",
      "cta": "Request Signature Celebration",
      "description": "The complete celebration: Holud, wedding, reception with multi-cinematographer coverage and premiere edit.",
      "features": [
        "3–4 functions, 2 cinematographers throughout",
        "Drone aerials of venue and baraat (where permitted)",
        "Same-week teaser, 3–4 week heirloom premiere",
        "Parents’ story chapter with legacy interview",
        "Premium grade + custom score direction",
        "Private screening link for family before release"
      ]
    }
  ],
  "priceFactors": [
    "Number of functions and hours per event",
    "Cinematographer count and consistent team",
    "Couple portrait session and interview chapters",
    "Drone aerials, permissions and 4K delivery",
    "Score licensing and premium grade direction",
    "Teaser speed and premiere edit lane"
  ],
  "marketNote": "Dhaka wedding videography spans ৳8,000–25,000 per event for single-operator coverage, ৳30,000–60,000 for standard two-crew cinematic packages, ৳1,00,000–1,40,000 for premium multi-crew productions and ৳2,50,000–5,00,000 for signature storytelling houses (Chitrogolpo, weddingpixbd, BD Event Management 2025–26). Drone adds ~৳25,000 and 4K delivery ~৳15,000–25,000 market-wide. Our bands sit at the cinematic middle: narrative craft without signature-house premiums.",
  "costRows": [
    [
      "Single-event cinematic film + teaser",
      "৳32,000"
    ],
    [
      "Two-event narrative + couple session",
      "৳68,000"
    ],
    [
      "Signature 3–4 event celebration",
      "৳1,45,000"
    ],
    [
      "Drone aerial add-on (permission liaised)",
      "৳25,000"
    ],
    [
      "4K master delivery add-on",
      "৳15,000"
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
          Every quote is itemised in writing within 48 hours, covering functions, crew, deliverables and timeline. A 50%
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
            What Wedding Videography Costs in Dhaka
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
            Wedding shoots happen on-location — venues, homes and destinations across Bangladesh — with the studio
            at ECB Chattar as base for editing, grading and backup power on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
