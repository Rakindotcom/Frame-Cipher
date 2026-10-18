'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for promotional-video-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Promotional Video Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "High-energy launch and offer videos from ৳28,000, full campaign packs at ৳58,000, seasonal blitz coverage at ৳1,25,000. Express 48-hour delivery available for flash sales.",
  "tiers": [
    {
      "name": "Launch Cut",
      "price": "৳28,000",
      "priceNote": "per video",
      "tag": "Single Offer",
      "cta": "Book Launch Cut",
      "description": "One punchy 30–60 second promo: hook, product demo, kinetic price tag and hard call to action.",
      "features": [
        "Direct-response script structure (hook–demo–offer–CTA)",
        "Half-day studio product staging with gel lighting",
        "Kinetic price and offer typography animation",
        "Licensed upbeat track with risers and impact SFX",
        "Master plus 9:16 story cutdown with captions",
        "48-hour express lane available for flash sales"
      ]
    },
    {
      "name": "Campaign Pack",
      "price": "৳58,000",
      "priceNote": "per campaign",
      "tag": "Most Popular",
      "cta": "Book Campaign Pack",
      "popular": true,
      "description": "A coordinated promo set: hero video, two hook variants and teaser cuts sized for every feed.",
      "features": [
        "Hero 60s promo + 2 alternative-hook versions",
        "15s teaser and 6s bumper for retargeting",
        "Talent or presenter direction with teleprompter",
        "Animated offer badges in Bangla and English",
        "Platform pack: 16:9, 1:1, 9:16 with safe zones",
        "Thumbnail frames and ad-copy headline suggestions"
      ]
    },
    {
      "name": "Seasonal Blitz",
      "price": "৳1,25,000",
      "priceNote": "per season",
      "tag": "Eid · Puja · 11.11",
      "cta": "Book Seasonal Blitz",
      "description": "Full seasonal coverage: multi-product promos, daily story drops and retail-screen versions for the peak rush.",
      "features": [
        "Up to 4 product promos under one seasonal art direction",
        "Daily story-format drops for the campaign flight",
        "In-store and retail screen versions (landscape/portrait)",
        "Showroom or outlet field-shoot day included",
        "Priority edit lane with same-week turnarounds",
        "Performance review call to feed winning hooks back"
      ]
    }
  ],
  "priceFactors": [
    "Number of hook variants and teaser cuts",
    "Presenter, talent or voiceover direction",
    "Animated offer badges in Bangla and English",
    "Number of aspect ratios and platform versions",
    "Showroom or outlet field-shoot day add-on",
    "Turnaround: 48-hour flash-sale express adds 25%"
  ],
  "marketNote": "Dhaka social promos from freelancers run ৳5,000–15,000 per clip, while agency-built conversion assets with strategy, grade and versioning sit at ৳80,000–1,50,000 per video. Short-form social content from studios runs ৳80,000–150,000 per video with cutdowns (Public Pulse 2026). The gap is creative engineering: hook testing, kinetic offer design and platform-native exports. Our ৳28,000–58,000 band exists to give SMEs agency-grade conversion craft without enterprise overhead.",
  "costRows": [
    [
      "Single launch promo (30–60s + story cut)",
      "৳28,000"
    ],
    [
      "Campaign pack: hero + 2 hooks + teasers",
      "৳58,000"
    ],
    [
      "Seasonal blitz: 4 promos + daily drops",
      "৳1,25,000"
    ],
    [
      "Showroom field-shoot day add-on",
      "৳18,000"
    ],
    [
      "48-hour flash-sale express delivery",
      "+25%"
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
            What Promotional Video Costs in Dhaka
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
