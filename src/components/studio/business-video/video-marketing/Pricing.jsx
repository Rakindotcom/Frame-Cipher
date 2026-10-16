'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for video-marketing — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Video Marketing Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Creative wired to acquisition: funnel starter at ৳55,000, growth sprint at ৳1,25,000, always-on creative retainer from ৳2,40,000 per month with managed testing.",
  "tiers": [
    {
      "name": "Funnel Starter",
      "price": "৳55,000",
      "priceNote": "one-time",
      "tag": "Awareness → Conversion",
      "cta": "Book Funnel Starter",
      "description": "A minimum viable video funnel: one awareness film, one explainer and one conversion ad with distribution map.",
      "features": [
        "Audience research and search-query content roadmap",
        "3-video funnel set (awareness, consideration, conversion)",
        "CTR-engineered scripting with 3 hook variants",
        "YouTube SEO: titles, descriptions, chapters, thumbnails",
        "Meta + YouTube distribution and placement guide",
        "Launch metrics review call at day 30"
      ]
    },
    {
      "name": "Growth Sprint",
      "price": "৳1,25,000",
      "priceNote": "per sprint",
      "tag": "Most Popular",
      "cta": "Book Growth Sprint",
      "popular": true,
      "description": "A 30-day creative testing sprint: 8 assets, weekly hook rotation and spend-backed winners for scaling.",
      "features": [
        "8-asset creative library across funnel stages",
        "Weekly hook rotation driven by thumb-stop data",
        "A/B creative matrix with kill/scale rules",
        "Landing-page video embeds with CRO notes",
        "Retargeting sequences (viewers → leads → buyers)",
        "End-of-sprint scaling playbook for your media team"
      ]
    },
    {
      "name": "Always-On Engine",
      "price": "৳2,40,000",
      "priceNote": "per month",
      "tag": "Retainer",
      "cta": "Request Always-On Engine",
      "description": "Monthly creative supply for scaling accounts: studio days, edit lane and strategist embedded with your team.",
      "features": [
        "2 dedicated studio shoot days per month",
        "12+ finished assets monthly (masters + cutdowns)",
        "Embedded strategist in your media buying loop",
        "Competitor creative monitoring and response briefs",
        "Quarterly funnel rebuild from performance data",
        "Priority turnaround on reactive and seasonal briefs"
      ]
    }
  ],
  "priceFactors": [
    "Number of funnel stages and assets",
    "Number of hook variants and A/B tests",
    "Landing-page embeds and CRO notes",
    "Retargeting sequences and versioning",
    "YouTube SEO packaging per video",
    "Turnaround: 48–72 hour express adds 30%"
  ],
  "marketNote": "Dhaka retainers for single-platform social or paid-ads management start around ৳45,000 per month, with full multi-channel engagements at ৳1,20,000 or more per month. Content production retainers for editing alone typically run ৳15,000–60,000 per month. Our ৳2,40,000 engine tier reflects the full stack — strategy, studio, crew and edit — for accounts where creative volume is the growth constraint.",
  "costRows": [
    [
      "Funnel starter: 3-video set + distribution map",
      "৳55,000"
    ],
    [
      "Growth sprint: 8 assets + 30-day testing",
      "৳1,25,000"
    ],
    [
      "Always-on engine retainer",
      "৳2,40,000/mo"
    ],
    [
      "YouTube SEO packaging per video",
      "৳8,000–12,000"
    ],
    [
      "Landing-page video CRO notes",
      "included in sprint+"
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
            What Video Marketing Costs in Dhaka
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
