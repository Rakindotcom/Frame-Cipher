'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for contact — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Engagement Routes & Costs",
  "pricingIntro": "Three free ways to start — WhatsApp quote, walkthrough visit, technical scout — then scoped production from ৳2,000/hour hire to ৳12,50,000+ campaigns. Open 24 hours by appointment.",
  "tiers": [
    {
      "name": "WhatsApp Quote",
      "price": "Free",
      "priceNote": "same-day",
      "tag": "Fastest Start",
      "cta": "Start on WhatsApp",
      "description": "Send brief, references and deadline; receive scoping questions within hours and an itemised quote in 48.",
      "features": [
        "Direct line: +880 1768-146650, call or WhatsApp",
        "Reference reels and storyboards accepted",
        "Budget-band guidance before you commit",
        "Technical feasibility verdict in writing",
        "Corporate vendor documentation on request",
        "No fees for quotes or consultations"
      ]
    },
    {
      "name": "Studio Walkthrough",
      "price": "Free",
      "priceNote": "same/next-day",
      "tag": "Verify First",
      "cta": "Book a Walkthrough",
      "popular": true,
      "description": "Test acoustics, inspect the grid, meet the team and record test clips at ECB Chattar before booking.",
      "features": [
        "Acoustic, lighting and power verification",
        "Meet director, DOP and sound engineers",
        "Test recordings on your media",
        "Scope confirmation during the visit",
        "Parking and landmark-guided arrival",
        "Combine with shoot day to save trips"
      ]
    },
    {
      "name": "Reserved Production",
      "price": "From ৳2,000/hr",
      "priceNote": "50% advance",
      "tag": "Locked & Crewed",
      "cta": "Reserve Production",
      "description": "Confirmed calendar, crewed stage, scheduled post and contractual delivery — from hourly hire to campaigns.",
      "features": [
        "Written scope with milestones and timeline",
        "Crew, equipment and post scheduled together",
        "2 revision rounds, 60-day archive",
        "VAT-compliant invoicing, all payment rails",
        "24-hour operation by appointment",
        "Balance only on final sign-off"
      ]
    }
  ],
  "priceFactors": [
    "Session length and crew configuration",
    "Kit, operators and backdrop requirements",
    "Shoot days, locations and deliverable count",
    "Finishing depth and aspect-ratio versions",
    "Timeline pressure and priority scheduling",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Studios are judged on responsiveness before craft: Dhaka buyers report unanswered enquiries and vague quotes as the top hiring friction. Our contact standard is same-day WhatsApp response, 48-hour itemised quotes and next-day walkthroughs — because the studio that communicates precisely before payment produces precisely after it. The 6th-floor ECB Chattar stage operates 24 hours by appointment, serving overnight edits, early call times and international client time zones.",
  "costRows": [
    [
      "WhatsApp consultation and quotes",
      "Free, same-day"
    ],
    [
      "Walkthrough and test recordings",
      "Free by appointment"
    ],
    [
      "Studio hire from",
      "৳2,000/hour"
    ],
    [
      "Productions scoped from brief",
      "48-hour quotes"
    ],
    [
      "Operating hours",
      "24 hours by appointment"
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
            What Responsive Booking Costs in Dhaka
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
