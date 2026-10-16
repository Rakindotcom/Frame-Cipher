'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for live-streaming — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Live Streaming Rates in Dhaka",
  "pricingIntro": "Broadcast-grade streaming with redundancy built in: single-camera streams from ৳18,000, multi-camera productions at ৳45,000, full summit command at ৳95,000 with simulcast and highlight edit.",
  "tiers": [
    {
      "name": "Single-Cam Live",
      "price": "৳18,000",
      "priceNote": "per stream",
      "tag": "Webinars & Launches",
      "cta": "Book Single-Cam Live",
      "description": "Reliable one-camera stream with pro audio, branded graphics and bonded internet for small launches and webinars.",
      "features": [
        "Up to 2 hours live with dedicated operator",
        "Broadcast lapel + room audio engineering",
        "Lower thirds, logo bug and holding slates",
        "Fibre + cellular bonding redundancy hardware",
        "Single-platform 1080p60 broadcast + full recording",
        "Slide and remote-guest (Zoom/Meet) integration"
      ]
    },
    {
      "name": "Multi-Cam Broadcast",
      "price": "৳45,000",
      "priceNote": "per event",
      "tag": "Most Popular",
      "cta": "Book Multi-Cam Broadcast",
      "popular": true,
      "description": "Three-camera switched production with director, audience mics and simulcast for conferences and brand events.",
      "features": [
        "3 broadcast cameras with hardware switcher + director",
        "Soundboard XLR feed + wireless audience mics",
        "Animated stingers, polls, Q&A and countdown timers",
        "Simulcast to YouTube, Facebook, LinkedIn simultaneously",
        "Up to 4 hours continuous with recording backup",
        "Edited highlight recap delivered within 72 hours"
      ]
    },
    {
      "name": "Summit Command",
      "price": "৳95,000",
      "priceNote": "per day",
      "tag": "Conferences & Expos",
      "cta": "Request Summit Command",
      "description": "Full-day conference streaming: 4 cameras, roaming gimbal, multi-room feeds and same-day social teasers.",
      "features": [
        "4-camera coverage plus roaming gimbal unit",
        "Multi-room and breakout session capture",
        "Remote keynote speaker pipeline with rehearsal",
        "Same-day 60-second social teaser for PR",
        "On-site streaming engineer + audio technician",
        "Full multi-track archive for on-demand publishing"
      ]
    }
  ],
  "priceFactors": [
    "Number of cameras and switched vs single-feed direction",
    "Stream duration and continuous hours on air",
    "Venue recce, rehearsal and multi-room feeds",
    "Graphics, slides, polls and remote-guest integration",
    "Simulcast platforms and recording backup scope",
    "Highlight recap turnaround: 72-hour standard, same-day adds crew"
  ],
  "marketNote": "Dhaka live-streaming market rates run ৳15,000 for a basic single-HD-camera 4-hour Facebook stream, ৳25,000 for two cameras with switching, and ৳50,000 for four-camera broadcast productions (GOCON published rates). Dedicated streaming services quote around ৳20,000 per event (BackspaceX). Our ৳18,000 entry matches the market floor while adding bonded redundancy and pro audio that budget streams skip — the two failure points that ruin reputations.",
  "costRows": [
    [
      "Single-camera stream, pro audio + graphics (2h)",
      "৳18,000"
    ],
    [
      "Multi-camera switched broadcast + simulcast (4h)",
      "৳45,000"
    ],
    [
      "Full-day summit command, 4 cams + teasers",
      "৳95,000"
    ],
    [
      "Extra streaming hour with crew",
      "৳8,000"
    ],
    [
      "Same-day highlight teaser edit",
      "৳12,000"
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
          Every quote is itemised in writing within 48 hours, covering crew, hours, platforms and timeline. A 50%
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
            What Live Streaming Costs in Dhaka
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
            Venue streams run on-location across Bangladesh with bonded backup lines; the studio at ECB Chattar is our
            base, with generator and IPS backup and fibre internet on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
