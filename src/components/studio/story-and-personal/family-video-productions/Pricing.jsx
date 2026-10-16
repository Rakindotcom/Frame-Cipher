'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for family-video-productions — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Family & Legacy Film Rates in Dhaka",
  "pricingIntro": "Heirloom storytelling with patience built in: milestone films at ৳35,000, generational legacy documentaries at ৳75,000, full heritage archives with restoration from ৳1,40,000.",
  "tiers": [
    {
      "name": "Milestone Film",
      "price": "৳35,000",
      "priceNote": "per film",
      "tag": "Anniversaries & Birthdays",
      "cta": "Book Milestone Film",
      "description": "Golden anniversaries and milestone birthdays: gentle interviews, event coverage and photo weaving in one keepsake.",
      "features": [
        "Pre-interview family story consultation",
        "Half-day gentle interview session, home or studio",
        "Anniversary/birthday event coverage included",
        "Up to 30 photographs scanned and restored",
        "15-minute keepsake film with licensed score",
        "Engraved USB box + private cloud archive"
      ]
    },
    {
      "name": "Legacy Documentary",
      "price": "৳75,000",
      "priceNote": "per film",
      "tag": "Most Popular",
      "cta": "Book Legacy Documentary",
      "popular": true,
      "description": "An elder’s life story told properly: multi-session interviews, archive restoration and chaptered documentary edit.",
      "features": [
        "2–3 unhurried interview sessions at elder’s pace",
        "Up to 100 photographs, VHS and document digitisation",
        "Family-tree graphics and chapter structuring",
        "Colour restoration of faded vintage photographs",
        "25–35 minute documentary with trailer cut",
        "Heirloom box set with copies for siblings"
      ]
    },
    {
      "name": "Heritage Archive",
      "price": "৳1,40,000",
      "priceNote": "per project",
      "tag": "Multi-Generation",
      "cta": "Request Heritage Archive",
      "description": "The complete family record: several elders, business history, properties and a searchable digital vault.",
      "features": [
        "Up to 5 family members interviewed on camera",
        "Business and property history chapters",
        "Unlimited photograph restoration within project",
        "Bilingual narration (Bangla/English) options",
        "Feature-length master plus chaptered viewing cuts",
        "Searchable digital vault with 5-year access"
      ]
    }
  ],
  "priceFactors": [
    "Number of interview sessions and family members",
    "Photograph, VHS and document restoration volume",
    "Home vs studio sessions and event coverage",
    "Family-tree graphics and chapter structuring",
    "Bilingual narration and trailer versions",
    "USB box sets and vault access length"
  ],
  "marketNote": "Bespoke biography and anniversary filmmaking in Dhaka is quoted per scope rather than per hour, with single-session interview edits starting near ৳25,000–35,000 and multi-session archive projects reaching ৳1,00,000–1,50,000 once restoration volume grows. The cost driver is never the camera — it is interview patience and restoration hours. Our tiers price those honestly: unhurried sessions and real restoration labour, not rushed single-visit edits.",
  "costRows": [
    [
      "Milestone film: interview + event + 30 photos",
      "৳35,000"
    ],
    [
      "Legacy documentary: multi-session + 100 restorations",
      "৳75,000"
    ],
    [
      "Heritage archive: 5 members + vault",
      "৳1,40,000"
    ],
    [
      "Extra photograph restoration batch (50)",
      "৳8,000"
    ],
    [
      "Additional heirloom USB box set",
      "৳3,500"
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
          Every quote is itemised in writing within 48 hours, covering sessions, restoration volume, deliverables and timeline. A 50%
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
            What Family and Legacy Films Cost in Dhaka
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
            Sessions happen at your family home across Dhaka or in our quiet studio at ECB Chattar — with generator
            and IPS backup and fibre internet supporting every interview and archive transfer.
          </p>
        </div>
      </div>
    </section>
  )
}
