'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for social-media-video-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Social Video Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Batch-recorded vertical content: 10 finished Reels at ৳32,000, 20-clip packs at ৳62,000, monthly content engines from ৳1,15,000. One half-day session banks weeks of posting.",
  "tiers": [
    {
      "name": "Batch-10 Pack",
      "price": "৳32,000",
      "priceNote": "per session",
      "tag": "Half-Day Bank",
      "cta": "Book Batch-10 Pack",
      "description": "Record 10 scripted verticals in one 4-hour studio visit: 4K vertical, kinetic captions, trending sound design.",
      "features": [
        "4-hour studio session with vertical-composed 4K rig",
        "Pre-shoot hook review for all 10 scripts",
        "Kinetic Bangla/English captions on every clip",
        "Viral SFX, transitions and licensed music beds",
        "Cover frames and posting-order recommendation",
        "Delivery in 3–5 days with SRT caption files"
      ]
    },
    {
      "name": "Batch-20 Pack",
      "price": "৳62,000",
      "priceNote": "per session",
      "tag": "Most Popular",
      "cta": "Book Batch-20 Pack",
      "popular": true,
      "description": "A full-day content bank: 20 verticals with B-roll overlays, styling changes and a month of posting calendar.",
      "features": [
        "Full-day session: up to 20 finished 15–60s clips",
        "Mid-session styling and backdrop change",
        "B-roll overlays and product insert shots",
        "3 hook variants on your 2 priority topics",
        "30-day posting calendar with caption drafts",
        "Priority edit lane, delivery in 5–7 days"
      ]
    },
    {
      "name": "Monthly Engine",
      "price": "৳1,15,000",
      "priceNote": "per month",
      "tag": "Always Posting",
      "cta": "Request Monthly Engine",
      "description": "Never stare at an empty calendar: monthly shoot day, 30+ clips, trend response and performance review.",
      "features": [
        "Monthly studio day + one trend-response pickup slot",
        "30+ finished verticals with captions and covers",
        "Trend-jacking scripts written for your niche",
        "Monthly analytics review: keep, kill, double-down",
        "Community-comment reply clips for engagement",
        "Pause-or-cancel flexibility, no lock-in quarter"
      ]
    }
  ],
  "priceFactors": [
    "Number of clips per batch session",
    "Styling changes and backdrop swaps",
    "B-roll overlays and product insert shots",
    "Hook variants on priority topics",
    "Posting calendar and caption drafts",
    "Turnaround: 48-hour rush lane adds 25%"
  ],
  "marketNote": "Freelance reel editing in Dhaka runs ৳500–2,000 per short, while agency monthly content packages span ৳15,000–60,000. Shoot-based social ads from studios start at ৳1,50,000, and one planned shoot day typically yields 8 to 20 assets. Batch studio recording compresses the expensive part — shoot time — so per-clip cost falls 40–60% versus filming each reel separately.",
  "costRows": [
    [
      "Batch-10: half-day record + edited captioned clips",
      "৳32,000"
    ],
    [
      "Batch-20: full-day bank + posting calendar",
      "৳62,000"
    ],
    [
      "Monthly engine: 30+ clips + trend response",
      "৳1,15,000/mo"
    ],
    [
      "Extra hook variant per priority topic",
      "৳3,500"
    ],
    [
      "Rush 48-hour edit lane",
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

        <p className="mt-6 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
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
            What Social Video Costs in Dhaka
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
            All sessions run from our studio on the 6th Floor, Eurasia Building, Matikata ECB Chattar, with
            generator and IPS backup and fibre internet on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
