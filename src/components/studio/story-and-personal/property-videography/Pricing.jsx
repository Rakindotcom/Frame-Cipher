'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for property-videography — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Property Videography Rates in Dhaka",
  "pricingIntro": "Cinematic tours that sell space: apartment walkthroughs at ৳28,000, luxury villa films with drone at ৳65,000, commercial tower showcases from ৳1,30,000 with agent hosting options.",
  "tiers": [
    {
      "name": "Apartment Tour",
      "price": "৳28,000",
      "priceNote": "per property",
      "tag": "Listings That Move",
      "cta": "Book Apartment Tour",
      "description": "A polished 2–3 minute walkthrough with balanced interiors, gimbal flow and vertical reels for portals and social.",
      "features": [
        "Half-day on-site with ultra-wide cinema lenses",
        "Motorised gimbal walkthrough mimicking real visits",
        "Window-balancing exposure (no blown-out skies)",
        "Vertical 9:16 reels for Facebook and Instagram ads",
        "Architectural still captures for listings",
        "Delivery in 3–4 business days"
      ]
    },
    {
      "name": "Luxury Villa + Drone",
      "price": "৳65,000",
      "priceNote": "per property",
      "tag": "Most Popular",
      "cta": "Book Luxury Villa + Drone",
      "popular": true,
      "description": "High-end presentation: host-led tour, aerial neighbourhood context and twilight-grade luxury finishing.",
      "features": [
        "Full-day shoot with host/agent presentation direction",
        "Licensed drone aerials of property and neighbourhood",
        "Interior lighting balancing with practical accents",
        "Luxury fittings callouts: materials, smart features",
        "Cinematic grade with day-to-dusk colour timing",
        "Teaser, full tour and vertical ads set"
      ]
    },
    {
      "name": "Commercial Tower",
      "price": "৳1,30,000",
      "priceNote": "per project",
      "tag": "Developers & REITs",
      "cta": "Request Commercial Tower",
      "description": "Developer-grade showcase: multi-unit coverage, amenity films and investor-ready architectural narrative.",
      "features": [
        "Multi-day coverage: units, amenities, surroundings",
        "Scripted architectural narrative with graphics",
        "Tenant and buyer testimonial integration",
        "Day, dusk and night exterior sequences",
        "Sales-gallery loop and agent briefing versions",
        "Stills library for brochures and hoardings"
      ]
    }
  ],
  "priceFactors": [
    "Property size, units and shoot days on-site",
    "Host or agent presentation direction",
    "Drone aerials, permissions and dusk sequences",
    "Lighting design for interiors and luxury fittings",
    "Deliverable count: tours, reels, stills and loops",
    "Turnaround: 48-hour listing lane adds 25%"
  ],
  "marketNote": "Dhaka property marketing typically separates interior walkthroughs (৳25,000–40,000), drone aerial slots (৳25,000 standalone, or ৳40,000–80,000 as part of larger shoots; dedicated drone days from ৳1,50,000) and luxury presentation films that double those bands with hosting and grading. Our ৳28,000 apartment tier exists because gimbal-and-grade walkthroughs — without drone or host — cover most resale and rental listings completely.",
  "costRows": [
    [
      "Apartment walkthrough + vertical reels",
      "৳28,000"
    ],
    [
      "Luxury villa with host + drone aerials",
      "৳65,000"
    ],
    [
      "Commercial tower multi-day showcase",
      "৳1,30,000"
    ],
    [
      "Standalone drone aerial slot",
      "৳25,000"
    ],
    [
      "Urgent 48-hour listing delivery",
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
          Every quote is itemised in writing within 48 hours, covering crew, shoot time, deliverables and timeline. A 50%
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
            What Property Videography Costs in Dhaka
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
            Property shoots happen on-location across Dhaka — Gulshan, Banani, Uttara, Mirpur DOHS, Bashundhara and
            beyond — with the studio at ECB Chattar as base for editing, grading and backup power on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
