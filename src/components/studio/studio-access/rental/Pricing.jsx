'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for rental — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Studio Rental Rates in Dhaka",
  "pricingIntro": "Quiet, powered, ready-to-shoot space at ECB Chattar: room-only from ৳2,000/hour, operated sessions at ৳2,500/hour, half-days at ৳12,000 and full production days at ৳22,000.",
  "tiers": [
    {
      "name": "Hourly Flex",
      "price": "৳2,500/hr",
      "priceNote": "min 2 hours",
      "tag": "Your Crew, Our Stage",
      "cta": "Book Hourly Flex",
      "description": "Bring cameras and crew to a ready stage: lighting grid, backdrops, power backup and assistant included.",
      "features": [
        "Sound-isolated stage with overhead softbox grid",
        "Backdrop of choice rigged before arrival",
        "Generator + IPS backup, high-speed fibre Wi-Fi",
        "Room-only option at ৳2,000/hr with own gear",
        "Makeup vanity, changing area, client lounge",
        "On-site assistant for lighting and facilities"
      ]
    },
    {
      "name": "Half-Day Block",
      "price": "৳12,000",
      "priceNote": "up to 4 hours",
      "tag": "Most Popular",
      "cta": "Book Half-Day Block",
      "popular": true,
      "description": "Half-day production block with operator support: interviews, podcasts, catalogues and YouTube sessions.",
      "features": [
        "4-hour exclusive stage reservation",
        "Camera + operator available within block",
        "Green screen or seamless paper configurations",
        "Teleprompter and live monitoring setup",
        "Styling lounge and refreshment service",
        "Parking beside Eurasia Building included"
      ]
    },
    {
      "name": "Full Production Day",
      "price": "৳22,000",
      "priceNote": "up to 9 hours",
      "tag": "Maximum Output",
      "cta": "Book Full Production Day",
      "description": "Full-day lockout for batch recording, campaign shoots and multi-setup productions with priority support.",
      "features": [
        "9-hour exclusive access with setup evening before",
        "Multiple backdrop changes across the day",
        "Crew catering coordination and rest scheduling",
        "Live-streaming encoder access for hybrid events",
        "Priority rebooking for series productions",
        "Weekend availability at standard rates"
      ]
    }
  ],
  "priceFactors": [
    "Room-only hire versus operated with camera and crew",
    "Hours booked: hourly, half-day or full-day lockout",
    "Backdrop changes and green-screen configurations",
    "Teleprompter, monitoring and streaming encoder needs",
    "After-hours, weekend and overnight scheduling",
    "Overtime past the agreed wrap time"
  ],
  "marketNote": "Dhaka studio rental runs ৳1,000–1,500/hour basic (Space Mirpur, Agdum, minimum 2 hours), ৳2,000/hour room-only and ৳2,500/hour with camera and operator (Black Box, Dhaka Digital), ৳3,000/hour premium (Studio89), half-days ৳6,000–14,000 and full days ৳15,000–25,000. Power backup, acoustic isolation and elevator access separate real studios from rooms with lights — our ECB Chattar facility prices at the equipped middle with backup genuinely included.",
  "costRows": [
    [
      "Room-only, own gear (2h minimum)",
      "৳2,000/hr"
    ],
    [
      "Operated with camera + operator (2h min)",
      "৳2,500/hr"
    ],
    [
      "Half-day exclusive block (4h)",
      "৳12,000"
    ],
    [
      "Full production day lockout (9h)",
      "৳22,000"
    ],
    [
      "Weekend and overnight sessions",
      "standard rates"
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
          Every quote is itemised in writing within 48 hours, covering hours, stage configuration and support. A 50%
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
            What Studio Rental Costs in Dhaka
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
