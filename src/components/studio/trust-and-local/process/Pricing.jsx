'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for process — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Process Timelines & Lanes",
  "pricingIntro": "Standard projects deliver in 5–10 working days with 2 revision rounds included. Priority 48–72 hour lanes run at +30%; retainer clients hold permanent fast-lane capacity.",
  "tiers": [
    {
      "name": "Standard Lane",
      "price": "5–10 days",
      "priceNote": "included",
      "tag": "Most Projects",
      "cta": "Book the Standard Lane",
      "description": "Brief, scope, shoot, post and delivery with two structured revision rounds and cloud approvals.",
      "features": [
        "Written scope with deliverables and milestones",
        "Scheduled shoot with pre-checked setups",
        "Assembly cut → timestamped stakeholder review",
        "2 structured revision rounds included",
        "Grade, sound finish and platform masters",
        "60-day archive with free re-exports"
      ]
    },
    {
      "name": "Priority Lane",
      "price": "48–72 hours",
      "priceNote": "+30% fee",
      "tag": "Urgent Deadlines",
      "cta": "Book the Priority Lane",
      "popular": true,
      "description": "Board meetings, launches and news cycles: compressed approvals with dedicated crew and edit.",
      "features": [
        "Same-day scoping and script lock",
        "Dedicated crew pulled from standby roster",
        "Overlapping shoot-and-edit pipeline",
        "Single consolidated approval round structure",
        "Raw captures within 24 hours guaranteed",
        "Available for studio and urgent field work"
      ]
    },
    {
      "name": "Retainer Lane",
      "price": "Monthly",
      "priceNote": "reserved capacity",
      "tag": "Always-On Brands",
      "cta": "Reserve a Retainer Lane",
      "description": "Reserved studio days and edit capacity monthly: briefing to publishing becomes routine, not project.",
      "features": [
        "Standing monthly studio and edit slots",
        "Same crew learning your brand grammar",
        "10–20% effective savings vs spot booking",
        "Quarterly content planning workshops",
        "Trend-response pickup slots included",
        "Pause-or-cancel flexibility, no lock-in"
      ]
    }
  ],
  "priceFactors": [
    "Scope size: crew, shoot days and deliverable count",
    "Creative development: scripting and storyboarding weight",
    "Finishing depth: grading, sound design and graphics",
    "Aspect-ratio versions and subtitle languages",
    "Stakeholder count and approval consolidation speed",
    "Lane choice: priority 48–72h adds 30%"
  ],
  "marketNote": "Dhaka production timelines cluster at 3–7 days for standard edits, 2–4 weeks for corporate films and 10–14 days for commercial campaigns from storyboard approval. Express 24–48 hour turnarounds command 25–40% premiums market-wide. Our 5-stage workflow exists to make those numbers reliable: 80% of smooth delivery is preparation, and every delay we have ever post-mortemed traced to skipped briefing or unscoped feedback — both structurally prevented here.",
  "costRows": [
    [
      "Standard lane delivery",
      "5–10 working days"
    ],
    [
      "Priority lane (48–72h)",
      "+30% fee"
    ],
    [
      "Retainer lane effective saving",
      "10–20% vs spot"
    ],
    [
      "Structured revision rounds included",
      "2 rounds"
    ],
    [
      "Archive with free re-exports",
      "60 days"
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
          Every lane quote is itemised in writing within 48 hours, covering crew, days, deliverables and timeline. A 50%
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
            What Production Timelines Cost in Dhaka
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
