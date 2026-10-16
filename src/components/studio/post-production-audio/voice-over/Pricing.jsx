'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for voice-over — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Voice Over Studio Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Fixed-scope VO with booth, engineer, talent coordination and mastering itemised in writing — in Bangla and English.",
  "tiers": [
    {
      "name": "Short Read",
      "price": "৳4,500",
      "priceNote": "up to 2 min",
      "tag": "IVR & Explainers",
      "cta": "Book Short Read",
      "description": "IVR prompts, short explainers and social VO: directed session plus de-breathed, levelled broadcast master.",
      "features": [
        "Directed session in isolated vocal booth",
        "Male/female Bangla and English talent roster",
        "De-breathing, de-essing, EQ and compression",
        "24-bit 48kHz WAV broadcast master + MP3",
        "Live in-person or Zoom direction included",
        "24–48 hour standard turnaround"
      ]
    },
    {
      "name": "Commercial VO",
      "price": "৳9,500",
      "priceNote": "per commercial",
      "tag": "Most Popular",
      "cta": "Book Commercial VO",
      "popular": true,
      "description": "TVC and brand-film narration with performance direction, timing to picture and multilingual options.",
      "features": [
        "Performance direction for emotional delivery",
        "Timing and sync to locked picture",
        "Shuddho Bangla, conversational or neutral English",
        "British/American accent options on request",
        "Raw + processed stems for post flexibility",
        "Usage-rights documentation for broadcast"
      ]
    },
    {
      "name": "Series & Course",
      "price": "৳28,000",
      "priceNote": "per 60 min",
      "tag": "E-Learning & Docs",
      "cta": "Request Series & Course",
      "description": "Long-form narration at consistent quality: documentary, audiobook and course modules with session continuity.",
      "features": [
        "Multi-session scheduling with voice continuity",
        "Pronunciation glossaries for technical terms",
        "Chaptered delivery with metadata sheets",
        "Pickups and corrections window included",
        "Mixing and mastering to course platforms’ specs",
        "Dedicated engineer across all sessions"
      ]
    }
  ],
  "priceFactors": [
    "Finished audio minutes and script word count",
    "Talent profile and commercial usage rights required",
    "Languages: Bangla, English or bilingual delivery",
    "Timing and sync to locked picture versus audio-only",
    "Pickup sessions and pronunciation correction rounds",
    "Turnaround: 48–72 hour priority adds 30%"
  ],
  "marketNote": "Dhaka voice-over benchmarks run ৳3,000–5,000 for short reads up to 10 minutes, with studio rental at ৳1,500/hour and mixing/mastering around ৳6,000 (Bangladhol published rates). Talent fees for commercial usage add ৳5,000–20,000 depending on artist profile. Our tiers bundle booth, engineer, talent coordination and mastering — the four line items that fragmented bookings multiply.",
  "costRows": [
    [
      "Short read up to 2 min + mastered WAV",
      "৳4,500"
    ],
    [
      "Commercial VO with direction + rights",
      "৳9,500"
    ],
    [
      "Series/course narration per 60 min",
      "৳28,000"
    ],
    [
      "Booth + engineer rental (own artist)",
      "৳1,500/hr"
    ],
    [
      "Mixing and mastering standalone",
      "৳6,000"
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
          Every quote is itemised in writing within 48 hours, covering talent, booth time, deliverables and timeline. A 50%
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
            What Voice Over Recording Costs in Dhaka
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
