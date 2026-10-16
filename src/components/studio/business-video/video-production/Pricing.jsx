'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

const DATA = {
  "pricingTitle": "Video Production Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Fixed-scope packages with crew, studio time and deliverables itemised in writing.",
  "tiers": [
    {
      "name": "Studio Day Essential",
      "price": "৳35,000",
      "priceNote": "per session",
      "tag": "Single Setup",
      "cta": "Book Studio Day Essential",
      "description": "One controlled studio setup for an interview, founder talk or product spotlight, with a clean master export. Best when you have a finished script and need one polished asset.",
      "features": [
        "Up to 4 hours of studio time with a calibrated softbox grid",
        "Single cinema 4K camera and wireless lapel audio kit",
        "Teleprompter and client monitoring screen",
        "Basic edit: pacing, audio levelling and light colour correction",
        "One 16:9 master or one 9:16 export",
        "1 structured revision round, raw files within 24 hours",
        "Delivery in 3 to 5 business days"
      ]
    },
    {
      "name": "Signature Commercial",
      "price": "৳78,000",
      "priceNote": "per project",
      "tag": "Most Popular",
      "cta": "Book Signature Commercial",
      "popular": true,
      "description": "Multi-camera production with concept, storyboard, cinematic grade and social cutdowns, for videos that must persuade people who do not know you yet.",
      "features": [
        "Concept, script polish and storyboard outline",
        "Multi-camera 4K with three-point softbox lighting design",
        "DaVinci Resolve colour grade and audio sweetening",
        "Licensed music, animated titles and lower thirds",
        "16:9 master plus 2 vertical 9:16 shorts",
        "Bangla and English subtitles, 2 revision rounds"
      ]
    },
    {
      "name": "Flagship Brand Film",
      "price": "from ৳1,85,000",
      "priceNote": "scoped quote",
      "tag": "Full Turnkey",
      "cta": "Request Flagship Brand Film",
      "description": "A full brand film with creative direction, multi-day filming and multi-ratio masters. Choose Flagship when the story needs multiple locations, casting or broadcast deliverables.",
      "features": [
        "Creative direction, scriptwriting and casting support",
        "Multi-day filming with a cinema crew and specialty optics",
        "Motion graphics packaging and custom sound design",
        "Masters in 16:9, 1:1, 9:16 and 4:5",
        "Dedicated creative director and a priority delivery lane",
        "Uncompressed archive and raw footage handover"
      ]
    }
  ],
  "priceFactors": [
    "Number of shoot days and locations",
    "Crew size, specialty optics and casting",
    "Scriptwriting, storyboard and creative direction",
    "Motion graphics, sound design and licensed music",
    "Number of deliverables and aspect ratios",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Video production prices in Dhaka vary widely with crew size, equipment, locations and edit complexity. A single cameraman with a basic edit costs far less than a directed multi-camera commercial, and the two are not like-for-like. When you compare quotes, ask each studio whether these are included: crew roles, studio or location hire, backup power, revision rounds, music licensing, subtitles, aspect-ratio versions and file archiving. Our written quotes list every one.",
  "costRows": [
    [
      "Studio interview, single setup with clean edit",
      "৳35,000"
    ],
    [
      "Multi-camera commercial with grade and 2 shorts",
      "৳78,000"
    ],
    [
      "Brand film, multi-day with motion graphics",
      "From ৳1,85,000"
    ],
    [
      "Vertical cutdown pack, 3 captioned 9:16 clips",
      "৳12,000 to ৳18,000"
    ],
    [
      "48-hour priority turnaround",
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
            What Video Production Costs in Dhaka
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
