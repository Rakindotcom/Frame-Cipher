'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for pricing — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Master Rate Card — Dhaka 2026",
  "pricingIntro": "The complete FrameCipher rate framework in one table: hourly hire from ৳2,000, sessions from ৳7,500, signature productions ৳45,000–1,85,000, flagship campaigns scoped past ৳5,00,000. VAT-compliant invoices; 50% advance confirms booking.",
  "tiers": [
    {
      "name": "Hourly & Session Hire",
      "price": "৳2,000–4,500/hr",
      "priceNote": "facility rates",
      "tag": "Studios & Booths",
      "cta": "Book Hourly Hire",
      "description": "Room, operated and booth hire by the hour: the fastest way to compare our facility costs with any Dhaka studio.",
      "features": [
        "Studio room-only with own gear: ৳2,000/hr (min 2h)",
        "Operated with camera + crew: ৳2,500/hr (min 2h)",
        "Podcast Gold/Platinum bands: ৳2,500–4,500/hr",
        "Vocal booth + engineer: ৳1,500/hr",
        "Half-day blocks ৳12,000–14,000; full days ৳22,000–25,000",
        "Weekend and overnight at standard rates"
      ]
    },
    {
      "name": "Signature Productions",
      "price": "৳45,000–1,85,000",
      "priceNote": "fixed scopes",
      "tag": "Most Popular",
      "cta": "Scope a Signature Production",
      "popular": true,
      "description": "The professional middle where most Dhaka brands buy: profile films, OVCs, wedding narratives, catalogue banks.",
      "features": [
        "Company profile: studio + b-roll ৳95,000",
        "Digital OVC with cutdowns ৳88,000",
        "Two-event wedding story ৳68,000",
        "Luxury property + drone ৳65,000",
        "Batch-20 social bank ৳62,000",
        "All with 2 revision rounds, itemised quotes"
      ]
    },
    {
      "name": "Flagship & Campaign",
      "price": "৳2,60,000+",
      "priceNote": "scoped quotes",
      "tag": "Enterprise Scale",
      "cta": "Scope a Flagship Campaign",
      "description": "Multi-film, multi-day and broadcast scopes: TVCs, campaigns, documentaries and summit coverage.",
      "features": [
        "Broadcast TVC from ৳3,60,000; campaigns ৳12,50,000+",
        "Enterprise AV suites from ৳2,60,000",
        "Documentaries ৳1,85,000–7,80,000+ by scope",
        "Multi-day summits from ৳1,25,000",
        "Dedicated producers, priority lanes, archives",
        "48-hour written quotes from completed briefs"
      ]
    }
  ],
  "priceFactors": [
    "Hours and crew: room-only versus operated sessions",
    "Shoot days, locations and specialty optics",
    "Scriptwriting, casting and creative direction",
    "Motion graphics, sound design and licensed music",
    "Deliverable count, ratios and subtitle languages",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Cross-checked July 2026: corporate profiles ৳30k–80k (Brandtics) and AV ৳2.5L–6L (Libanza); OVC from ৳80k–1.5L, TVC ৳3.5L–10L+; wedding ৳8k–1.4L per event bands to ৳2.5L–5L signature houses; podcast ৳2.5k–4.5k/hr; product ৳1k–1.5k/unit; rental ৳1k–3k/hr; editing ৳500–25k by complexity; VO ৳3k–5k short reads. Our card sits at the equipped middle of every band — never the cheapest quote in Dhaka, always itemised so you can see what the cheaper quote omitted.",
  "costRows": [
    [
      "Studio hire: room-only / operated",
      "৳2,000 / ৳2,500 per hour"
    ],
    [
      "Podcast session: audio / 4K video / full",
      "৳8,000 / ৳18,000 / ৳35,000"
    ],
    [
      "Catalogue photography",
      "৳1,500 per product"
    ],
    [
      "Signature productions band",
      "৳45,000–1,85,000"
    ],
    [
      "Flagship campaigns",
      "৳2,60,000–12,50,000+"
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
          Every quote is itemised in writing within 48 hours, covering crew, days, deliverables and timeline. A 50%
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
            What Studio Production Costs in Dhaka
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
