'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for post-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Post-Production Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Fixed-scope finishing with intake, grade, sound and deliverables itemised in writing. External footage welcome via SSD or cloud.",
  "tiers": [
    {
      "name": "Essential Finish",
      "price": "৳12,000",
      "priceNote": "up to 5 min",
      "tag": "Clean & Correct",
      "cta": "Book Essential Finish",
      "description": "Assembly, dialogue cleanup, balanced grade and loudness-safe master for straightforward footage.",
      "features": [
        "Narrative assembly with dead-air removal",
        "iZotope dialogue cleanup: hiss, hum, room echo",
        "Balanced DaVinci colour correction (Rec.709)",
        "Lower thirds and basic title cards",
        "SRT subtitles in Bangla or English",
        "ProRes + MP4 masters, 1 revision round"
      ]
    },
    {
      "name": "Commercial Grade",
      "price": "৳45,000",
      "priceNote": "up to 10 min",
      "tag": "Most Popular",
      "cta": "Book Commercial Grade",
      "popular": true,
      "description": "Broadcast-adjacent finishing: cinematic grade, full sound design, motion graphics and multi-ratio versioning.",
      "features": [
        "Cinema-gamut colour pipeline with shot matching",
        "Full sound design: SFX, beds, loudness compliance",
        "Logo animation and kinetic typography package",
        "LOG profile handling: S-Log3, C-Log, BRAW, REDCODE",
        "Multi-ratio versioning (16:9, 1:1, 9:16, 4:5)",
        "Timestamped cloud review, 2 revision rounds"
      ]
    },
    {
      "name": "Feature Finish",
      "price": "৳1,25,000+",
      "priceNote": "scoped quote",
      "tag": "Long-Form & Series",
      "cta": "Request Feature Finish",
      "description": "Documentary, course and series finishing: conform, VFX cleanup, stems and archival masters.",
      "features": [
        "Multi-episode conform and colour continuity",
        "Rotoscoping, object removal and beauty cleanup",
        "Dialogue, music and effects stem delivery",
        "DCP/projection and broadcast compliance masters",
        "Archive-grade uncompressed preservation copies",
        "Dedicated finishing producer and priority lane"
      ]
    }
  ],
  "priceFactors": [
    "Total runtime and volume of raw footage to conform",
    "LOG profiles, multi-camera sync and rescue work needed",
    "Motion graphics, VFX cleanup and custom sound design",
    "Number of deliverables, aspect ratios and subtitle languages",
    "Revision rounds beyond the included structured cycles",
    "Turnaround: 48–72 hour priority adds 30%"
  ],
  "marketNote": "Dhaka post-production splits by complexity: corporate profile edits ৳5,000–25,000, heavy-graphics YouTube work ৳5,000–15,000, per-minute editing benchmarks ৳2,000 basic to ৳20,000+ for commercial finishing (Nexteio 2026; MultimediaGen; Bangladhol). The premium reflects calibrated monitoring, LOG colour science and sound restoration that laptop edits cannot replicate. Sending externally shot footage for professional finishing typically costs less than reshooting it.",
  "costRows": [
    [
      "Essential finish, up to 5 minutes",
      "৳12,000"
    ],
    [
      "Commercial grade, up to 10 minutes",
      "৳45,000"
    ],
    [
      "Feature / series finishing",
      "৳1,25,000+"
    ],
    [
      "Subtitling per 10 minutes (Bangla/English)",
      "৳3,000"
    ],
    [
      "48-hour priority turnaround",
      "+30%"
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
          Every quote is itemised in writing within 48 hours, covering footage volume, deliverables and timeline. A 50%
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
            What Post-Production Costs in Dhaka
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
            All finishing runs from our studio on the 6th Floor, Eurasia Building, Matikata ECB Chattar, with
            generator and IPS backup and fibre internet on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
