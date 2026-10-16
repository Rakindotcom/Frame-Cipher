'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for event-video-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Event Videography Rates in Dhaka",
  "pricingIntro": "Conference and celebration coverage that moves fast: half-day crews from ৳25,000, full-day multi-camera at ৳48,000, multi-day summit coverage from ৳1,25,000 with 24-hour teaser delivery.",
  "tiers": [
    {
      "name": "Half-Day Cover",
      "price": "৳25,000",
      "priceNote": "up to 4 hours",
      "tag": "Launches & Panels",
      "cta": "Book Half-Day Cover",
      "description": "Agile single-crew coverage: keynote capture, audience energy and a social-ready highlight teaser.",
      "features": [
        "1 cinematographer + gimbal and monopod coverage",
        "Direct soundboard audio feed for clean speeches",
        "Keynote and panel full-length recordings",
        "60-second highlight teaser within 24 hours",
        "Candid networking and branding detail shots",
        "Ideal for launches, seminars and award evenings"
      ]
    },
    {
      "name": "Full-Day Crew",
      "price": "৳48,000",
      "priceNote": "up to 9 hours",
      "tag": "Most Popular",
      "cta": "Book Full-Day Crew",
      "popular": true,
      "description": "Two-camera conference coverage with photographer-grade stills discipline and cinematic aftermovie.",
      "features": [
        "2 videographers: locked stage + roaming audience",
        "Wireless lavaliers for VIPs plus board feed",
        "Exhibition booth and sponsor branding coverage",
        "2–4 minute cinematic aftermovie + 24h teaser",
        "Interview corner for delegate testimonials",
        "Drone slot coordination where venue permits"
      ]
    },
    {
      "name": "Multi-Day Summit",
      "price": "৳1,25,000+",
      "priceNote": "2–3 days",
      "tag": "Expos & Conferences",
      "cta": "Request Multi-Day Summit",
      "description": "Summit-scale documentation across halls and days, with daily social drops and a flagship recap film.",
      "features": [
        "3-person crew across parallel halls and sessions",
        "Daily 60-second social drops during the event",
        "Speaker interview series with branded backdrop",
        "Sponsor deliverable sets for post-event reporting",
        "Travel-ready crew for Cox’s Bazar, Sylhet, Chattogram",
        "Flagship 4-minute recap plus full session archive"
      ]
    }
  ],
  "priceFactors": [
    "Coverage hours and number of event days",
    "Crew size and camera count on the floor",
    "Venue recce, AV coordination and multi-hall feeds",
    "Drone slot, permissions and interview setups",
    "Teaser speed: 24-hour standard vs same-day edit",
    "Aftermovie length, grade and vertical cutdown count"
  ],
  "marketNote": "Dhaka event filming runs ৳20,000–50,000 per day for seminars and launches including highlight reels (Brandtics 2025), with premium multi-day conference crews priced by headcount and turnaround. Same-day edits command 25–40% premiums market-wide. Our 24-hour teaser is standard — not a surcharge — because post-event PR windows close within a day and late highlights lose most of their earned-media value.",
  "costRows": [
    [
      "Half-day single crew + 24h teaser",
      "৳25,000"
    ],
    [
      "Full-day two-camera + aftermovie",
      "৳48,000"
    ],
    [
      "Multi-day summit, 3 crew + daily drops",
      "৳1,25,000+"
    ],
    [
      "Licensed drone aerial slot (permission liaised)",
      "৳25,000"
    ],
    [
      "Same-day edit (evening delivery)",
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
            What Event Videography Costs in Dhaka
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
            Event shoots happen on-location across Bangladesh — convention halls, expos and resorts — with the studio
            at ECB Chattar as base for interview corners, editing and backup power on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
