'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for faq — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Consultation & Booking Costs",
  "pricingIntro": "Answers are free; quotes are free; walkthroughs are free. You only pay when cameras roll: sessions from ৳2,000/hour, productions scoped and itemised, 50% advance to confirm dates.",
  "tiers": [
    {
      "name": "Ask Anything",
      "price": "Free",
      "priceNote": "same-day replies",
      "tag": "WhatsApp First",
      "cta": "Ask on WhatsApp",
      "description": "Quotes, technical questions, availability and reference matching — answered on WhatsApp within hours.",
      "features": [
        "Same-day response on +880 1768-146650",
        "Itemised written quotes within 48 hours",
        "Reference and portfolio matching free",
        "Technical feasibility assessments free",
        "Rescheduling guidance with 48h notice",
        "No consultation or estimation fees ever"
      ]
    },
    {
      "name": "Verify In Person",
      "price": "Free",
      "priceNote": "by appointment",
      "tag": "Walkthrough Visit",
      "cta": "Book a Walkthrough",
      "popular": true,
      "description": "Inspect acoustics, lighting, backdrops and monitoring at ECB Chattar with test recordings on your media.",
      "features": [
        "Same-day/next-day walkthrough slots",
        "Clap-test acoustics, inspect grid and power",
        "Test recordings on request",
        "Meet director, DOP and engineers",
        "Parking and landmark-guided arrival",
        "Scope confirmation before you leave"
      ]
    },
    {
      "name": "Confirmed Booking",
      "price": "50% advance",
      "priceNote": "balance on delivery",
      "tag": "Locked Calendar",
      "cta": "Confirm a Booking",
      "description": "Written scope, locked dates, crewed stage and scheduled post — production with contractual certainty.",
      "features": [
        "Itemised scope with milestones and timeline",
        "VAT-compliant invoice for every payment",
        "bKash, Nagad, bank, cheque and cash rails",
        "2 revision rounds and 60-day archive",
        "Free rescheduling with 48-hour notice",
        "Balance only on final sign-off"
      ]
    }
  ],
  "priceFactors": [
    "Session length and crew configuration",
    "Kit and operator requirements",
    "Shoot days, locations and deliverable count",
    "Finishing depth and aspect-ratio versions",
    "Stakeholder approvals and timeline pressure",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Dhaka studios vary most in booking discipline: some demand full advance with no rescheduling; others confirm verbally and double-book dates. Our structure — free consultation and verification, 50% to confirm, balance on delivery, free 48-hour rescheduling — mirrors professional production practice internationally. The policy that protects you most is written scope before payment, which we observe without exception.",
  "costRows": [
    [
      "Consultation, quotes, walkthroughs",
      "Free"
    ],
    [
      "Studio sessions",
      "from ৳2,000/hour"
    ],
    [
      "Booking confirmation advance",
      "50%"
    ],
    [
      "Rescheduling with 48h notice",
      "Free"
    ],
    [
      "Balance payment timing",
      "On final sign-off"
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
            What Booking Certainty Costs in Dhaka
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
