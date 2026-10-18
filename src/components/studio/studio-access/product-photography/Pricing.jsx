'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for product-photography — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Product Photography Rates in Dhaka",
  "pricingIntro": "Marketplace-ready stills with honest per-product math: catalogue sets at ৳1,500 per product, half-day studio banks around 10 products at ৳14,000, lifestyle and model days from ৳34,000.",
  "tiers": [
    {
      "name": "Catalogue Five",
      "price": "৳7,500",
      "priceNote": "5 products",
      "tag": "৳1,500 / product",
      "cta": "Book Catalogue Five",
      "description": "Daraz/Shopify-ready catalogue: pure-white sets, 3 retouched angles per product, marketplace-ratio exports.",
      "features": [
        "5 products, 3 retouched photos each (15 images)",
        "Pure-white RGB 255 compliant backgrounds",
        "Reflection and glare control for tricky materials",
        "Dust cleanup, colour correction, background clipping",
        "Square and vertical ad-format exports",
        "Extra products at ৳1,500, extra angles ৳300"
      ]
    },
    {
      "name": "Half-Day Bank",
      "price": "৳14,000",
      "priceNote": "approx 10 products",
      "tag": "Most Popular",
      "cta": "Book Half-Day Bank",
      "popular": true,
      "description": "Volume catalogue day: around 10 products with styling, macro detail and transparent PNG cuts.",
      "features": [
        "4-hour studio block with crew and tabletop styling",
        "Approx 10 products, 3 retouched photos each",
        "Macro texture and label detail shots",
        "Transparent-background PNG cuts included",
        "360° multi-angle coverage sets",
        "Raw handover same day, retouched in 3–4 days"
      ]
    },
    {
      "name": "Lifestyle + Model Day",
      "price": "৳34,000",
      "priceNote": "full day",
      "tag": "Campaign Visuals",
      "cta": "Book Lifestyle + Model Day",
      "description": "Advertising-grade storytelling: styled scenes, hand/face models, campaign stills plus product reels.",
      "features": [
        "Full-day styled tabletop and lifestyle scenes",
        "Hand/face model direction for cosmetics and gadgets",
        "Creative direction matching campaign identity",
        "Campaign hero stills plus social ad formats",
        "Short product reel add-on available",
        "Priority retouching lane for launch deadlines"
      ]
    }
  ],
  "priceFactors": [
    "Number of products and angles per product",
    "White-background catalogue versus styled lifestyle scenes",
    "Models, props and location-level art direction",
    "Macro, jewellery and reflective-material labour",
    "Retouching depth and transparent PNG cutouts",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Dhaka product photography runs ৳1,000–1,500 per product (3 retouched photos, minimum 5) at Black Box, ৳3,000 per-product / ৳6,000 indoor / ৳12,000 outdoor packages at Studio89, and ৳8,000–14,000 half-day room rates — with full days at ৳14,000–25,000. Macro, jewellery and reflective materials command premiums for reflection-control labour. Our ৳1,500/product catalogue tier matches the honest market middle with retouching genuinely included.",
  "costRows": [
    [
      "Catalogue set: 5 products × 3 retouched photos",
      "৳7,500"
    ],
    [
      "Half-day bank: ~10 products, crew + styling",
      "৳14,000"
    ],
    [
      "Lifestyle + model campaign day",
      "৳34,000"
    ],
    [
      "Extra retouched angle",
      "৳300"
    ],
    [
      "Product reel add-on per product",
      "৳2,500"
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
          Every quote is itemised in writing within 48 hours, covering products, angles, styling and timeline. A 50%
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
            What Product Photography Costs in Dhaka
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
