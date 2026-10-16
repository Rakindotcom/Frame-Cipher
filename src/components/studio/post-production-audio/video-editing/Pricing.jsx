'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for video-editing — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Video Editing Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Fixed-scope editing with grade, sound, cutdowns and captions itemised in writing. External footage welcome via SSD or cloud.",
  "tiers": [
    {
      "name": "Shorts Pack ×5",
      "price": "৳9,500",
      "priceNote": "5 verticals",
      "tag": "Reels & Shorts",
      "cta": "Book Shorts Pack ×5",
      "description": "Five high-retention verticals from your footage or our studio captures: captions, SFX and trend pacing.",
      "features": [
        "Jump-cut pacing with zoom punches and B-roll",
        "Kinetic captions in Bangla or English + SRT",
        "Sound-effect design and licensed music beds",
        "Hook-first restructuring of weak openings",
        "Cover frames sized per platform",
        "48-hour delivery available on request"
      ]
    },
    {
      "name": "Creator Edit",
      "price": "৳22,000",
      "priceNote": "up to 15 min",
      "tag": "Most Popular",
      "cta": "Book Creator Edit",
      "popular": true,
      "description": "YouTube and commercial edits with narrative flow: multi-cam sync, graphics, grade and search-ready packaging.",
      "features": [
        "Multi-camera and audio-track synchronisation",
        "Retention pacing with graphics and callouts",
        "Cinematic colour grade + dialogue mastering",
        "Intro/outro, lower thirds, animated titles",
        "2 vertical cutdowns extracted per edit",
        "Thumbnail concept + 2 revision rounds"
      ]
    },
    {
      "name": "Studio Suite",
      "price": "৳48,000",
      "priceNote": "up to 30 min",
      "tag": "Commercial & Course",
      "cta": "Book Studio Suite",
      "description": "Commercial and course finishing: long-form assembly, chaptering, motion package and full version stack.",
      "features": [
        "Long-form assembly with chapter architecture",
        "Full motion-graphics and data-visualisation package",
        "Advanced cleanup: reverb, hiss, exposure rescue",
        "Multi-ratio masters plus audiogram versions",
        "Course-lesson splitting with metadata sheets",
        "Priority lane with dedicated editor"
      ]
    }
  ],
  "priceFactors": [
    "Total runtime and volume of raw footage to ingest",
    "Multi-camera sync, LOG rescue and audio repair needed",
    "Motion graphics, captions and thumbnail packaging",
    "Number of cutdowns, aspect ratios and subtitle languages",
    "Revision rounds beyond the included structured cycles",
    "Turnaround: 48–72 hour priority adds 30%"
  ],
  "marketNote": "Dhaka editing rates run ৳500–2,000 per captioned short, ৳1,500–5,000 for simple 8–15 minute YouTube edits, ৳5,000–15,000 with heavy graphics, ৳5,000–25,000 for corporate highlights and ৳15,000–60,000 monthly for weekly output (Nexteix 2026; paikaribaba from ৳800/video). Per-minute benchmarks span ৳500 basic to ৳10,000+ commercial. Our tiers bundle the extras — grade, sound, cutdowns — that itemised freelancers add later.",
  "costRows": [
    [
      "Shorts pack: 5 captioned verticals",
      "৳9,500"
    ],
    [
      "Creator edit: up to 15 min + 2 cutdowns",
      "৳22,000"
    ],
    [
      "Studio suite: up to 30 min + motion package",
      "৳48,000"
    ],
    [
      "Monthly weekly-output retainer",
      "৳35,000–60,000"
    ],
    [
      "24-hour express edit lane",
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
          Every quote is itemised in writing within 48 hours, covering footage volume, deliverables and timeline. A 50%
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
            What Video Editing Costs in Dhaka
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
            All edits run from our studio on the 6th Floor, Eurasia Building, Matikata ECB Chattar, with
            generator and IPS backup and fibre internet on every booking.
          </p>
        </div>
      </div>
    </section>
  )
}
