'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for commercial-video-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Commercial Video Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "From high-converting digital OVCs at ৳88,000 to broadcast-ready TVCs from ৳3,60,000 and national campaigns above ৳12,50,000. Every tier includes multi-ratio cutdowns for TV, YouTube and paid social.",
  "tiers": [
    {
      "name": "Digital OVC",
      "price": "৳88,000",
      "priceNote": "per commercial",
      "tag": "Meta · YouTube · TikTok",
      "cta": "Book Digital OVC",
      "description": "Performance-built online commercial: hook-first scripting, studio tabletop or lifestyle staging, paid-ad cutdown set.",
      "features": [
        "Hook-first concept and storyboard for 3-second retention",
        "Half-day studio shoot with commercial lighting design",
        "Licensed music, sound design and kinetic typography",
        "15s, 30s and 60s cutdowns plus 9:16 verticals",
        "EBU R128 loudness-ready audio masters",
        "A/B hook variants (3 opening alternatives) included"
      ]
    },
    {
      "name": "Broadcast TVC",
      "price": "৳3,60,000",
      "priceNote": "per commercial",
      "tag": "Most Popular",
      "cta": "Book Broadcast TVC",
      "popular": true,
      "description": "Television-compliant commercial: casting, styling, art direction and broadcast mastering for national channels.",
      "features": [
        "Full casting, wardrobe and on-set makeup artistry",
        "Cinema crew with art direction and set design",
        "High-speed and macro optics for product beauty shots",
        "Broadcast-spec ProRes master, channel-compliant loudness",
        "30s hero plus 15s and 10s reminder versions",
        "Bangla VO recording session in our vocal booth"
      ]
    },
    {
      "name": "National Campaign",
      "price": "৳12,50,000+",
      "priceNote": "scoped quote",
      "tag": "Multi-Film",
      "cta": "Request National Campaign",
      "description": "Multi-film campaign universe: hero TVC, OVC series, retail cutdowns and stills — one art direction across everything.",
      "features": [
        "Campaign creative platform and multi-script development",
        "Multi-day production with specialty rigs and locations",
        "Celebrity or influencer talent negotiation support",
        "Full funnel asset library: 10+ platform cutdowns",
        "Stills, key visuals and retail adaptation masters",
        "Media-agency liaison for broadcast traffic and specs"
      ]
    }
  ],
  "priceFactors": [
    "Casting, wardrobe and makeup artistry",
    "Art direction, set design and specialty optics",
    "Number of shoot days and locations",
    "Number of cutdowns, hooks and aspect ratios",
    "Motion graphics, sound design and licensed music",
    "Turnaround: 48–72 hour express adds 30%"
  ],
  "marketNote": "Bangladesh TVC production starts at ৳3,50,000 and runs past ৳10,00,000 before airtime, while lean social-first OVCs run ৳60,000–2,50,000 and shoot-based OVCs from ৳1,50,000 (Libanza 2026 guides). Premium story-driven OVCs reach ৳8,00,000–25,00,000. Our ৳88,000 OVC tier targets the proven middle: real shoot, real grade, engineered for ROAS.",
  "costRows": [
    [
      "Digital OVC with 15s/30s/60s + verticals",
      "৳88,000"
    ],
    [
      "Broadcast TVC with casting + styling",
      "৳3,60,000"
    ],
    [
      "National multi-film campaign",
      "৳12,50,000+"
    ],
    [
      "Celebrity/influencer talent handling",
      "৳50,000–2,00,000"
    ],
    [
      "Additional language VO + versioning",
      "৳18,000–30,000"
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
            What Commercial Video Costs in Dhaka
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
