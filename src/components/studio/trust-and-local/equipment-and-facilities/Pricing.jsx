'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for equipment-and-facilities — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Facility & Operator Rates",
  "pricingIntro": "Transparent facility economics: room-only ৳2,000/hour, operated ৳2,500/hour, half-day ৳12,000, full-day ৳22,000. Specialist operators (teleprompter, drone, keying artists) quoted per session.",
  "tiers": [
    {
      "name": "Room-Only Access",
      "price": "৳2,000/hr",
      "priceNote": "min 2 hours",
      "tag": "Your Kit, Our Room",
      "cta": "Book Room-Only Access",
      "description": "The isolated stage with grid, backdrops, power and internet — for crews arriving fully equipped.",
      "features": [
        "Acoustic-isolated stage, 6th floor elevator access",
        "Overhead softbox grid with dimming control",
        "Seamless paper: white, black, grey, chroma green",
        "Generator + IPS backup, fibre Wi-Fi, parking",
        "Makeup vanity, changing room, client lounge",
        "Assistant on-site for facilities and power"
      ]
    },
    {
      "name": "Operated Session",
      "price": "৳2,500/hr",
      "priceNote": "min 2 hours",
      "tag": "Most Popular",
      "cta": "Book Operated Session",
      "popular": true,
      "description": "Stage plus camera, operator and technical setup — arrive with ideas, leave with footage.",
      "features": [
        "4K cinema camera with operator and audio kit",
        "Lighting design for your format and backdrop",
        "Teleprompter and live monitoring included",
        "Green-screen key-ready configuration option",
        "Same-day raw handover to your drives",
        "Half-day ৳12,000 / full-day ৳22,000 caps"
      ]
    },
    {
      "name": "Crewed Production Day",
      "price": "৳38,000",
      "priceNote": "full day",
      "tag": "Director + Crew",
      "cta": "Book Crewed Production Day",
      "description": "Full crew day on our stage: director, DOP, gaffer support, sound engineer and finishing handover.",
      "features": [
        "Director + DOP + sound engineer on stage",
        "Multi-camera 4K with switched monitoring",
        "Art styling and tabletop configuration",
        "Casting and makeup coordination available",
        "Dailies graded overnight for review",
        "Post-production scheduled in same pipeline"
      ]
    }
  ],
  "priceFactors": [
    "Room-only hire versus operated sessions",
    "Hours booked and half-day or full-day caps",
    "Camera, audio and teleprompter operator needs",
    "Green-screen, styling and art configuration",
    "Specialist operators: drone, keying, teleprompter",
    "After-hours and weekend scheduling"
  ],
  "marketNote": "Dhaka facility benchmarks: basic rooms ৳1,000–1,500/hour, equipped stages ৳2,000–3,000/hour, camera-plus-operator bundles at ৳2,500/hour, white-set half/full days ৳8,000–25,000. Equipment verification visits are standard practice among serious hirers — ceiling height, grid load, acoustic behaviour, power conditioning and backup cannot be judged from photos. Our 6th-floor ECB Chattar stage welcomes inspection with test recordings.",
  "costRows": [
    [
      "Room-only stage hire",
      "৳2,000/hour (min 2h)"
    ],
    [
      "Operated session with camera + crew",
      "৳2,500/hour (min 2h)"
    ],
    [
      "Half-day / full-day caps",
      "৳12,000 / ৳22,000"
    ],
    [
      "Crewed production day (director + DOP + sound)",
      "৳38,000"
    ],
    [
      "Specialist operators (drone, keying, teleprompter)",
      "quoted per session"
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
          Every quote is itemised in writing within 48 hours, covering hours, kit, operators and timeline. A 50%
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
            What Equipped Stage Hire Costs in Dhaka
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
