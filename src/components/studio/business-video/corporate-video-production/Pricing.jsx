'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for corporate-video-production — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Corporate Video Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Board-ready corporate films with executive teleprompter support and confidential handling. Interviews from ৳48,000, full company profiles at ৳95,000, enterprise AV suites scoped from ৳2,60,000.",
  "tiers": [
    {
      "name": "Executive Interview",
      "price": "৳48,000",
      "priceNote": "per session",
      "tag": "Leadership",
      "cta": "Book Executive Interview",
      "description": "Polished single-speaker executive interview: teleprompter, corporate lighting design and LinkedIn-ready highlight reel.",
      "features": [
        "Half-day studio session with executive teleprompter operator",
        "Corporate lighting design for skin tone and authority",
        "Dual-camera 4K (wide master + tight editorial angle)",
        "Conversational directing for first-time on-camera leaders",
        "60–90 second LinkedIn highlight reel included",
        "English and Bangla subtitles, 2 revision rounds"
      ]
    },
    {
      "name": "Company Profile Film",
      "price": "৳95,000",
      "priceNote": "per project",
      "tag": "Most Popular",
      "cta": "Book Company Profile Film",
      "popular": true,
      "description": "The complete capability story: studio interviews plus office and facility b-roll, motion graphics and investor-grade finish.",
      "features": [
        "Script consultation and B2B message structuring",
        "Studio interview day + one location b-roll day",
        "Direct venue soundboard capture for facility audio",
        "Logo animation, kinetic data graphics, brand-grade colour",
        "2–5 minute master plus 60-second and 30-second cuts",
        "ProRes + high-bitrate MP4, SRT files, 5–7 day delivery"
      ]
    },
    {
      "name": "Enterprise AV Suite",
      "price": "৳2,60,000+",
      "priceNote": "scoped quote",
      "tag": "Board & Investor",
      "cta": "Request Enterprise AV Suite",
      "description": "Multi-film suites for AGMs, investor decks and employer branding: several leaders, locations, languages and versions.",
      "features": [
        "Multi-executive filming schedule with confidentiality protocol",
        "Multiple locations: HQ, plant, showroom, event coverage",
        "Bilingual voiceover and subtitle versioning",
        "Annual-report graphics, charts and archive integration",
        "Board-meeting 48-hour priority lane available",
        "Dedicated producer and 60-day secure archive"
      ]
    }
  ],
  "priceFactors": [
    "Number of shoot days and locations",
    "Number of executives and interview schedules",
    "Scriptwriting, message structuring and teleprompter direction",
    "Motion graphics, data visualisation and logo animation",
    "Bilingual voiceover and subtitle versioning",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Dhaka company-profile videos typically cost ৳30,000–80,000 for a basic crew, while corporate AV with scripted storytelling across locations runs ৳2,50,000–6,00,000 (Libanza Films 2026 guide). Premium cinematic corporate productions with cinema cameras and full departments reach ৳70,000–4,00,000+ (Brandtics). Our ৳95,000 profile tier sits at the professional mid-point: real pre-production and grade, without the agency overhead that doubles enterprise quotes.",
  "costRows": [
    [
      "Executive interview + LinkedIn highlight reel",
      "৳48,000"
    ],
    [
      "Company profile: studio + b-roll + motion graphics",
      "৳95,000"
    ],
    [
      "Enterprise multi-film AV suite",
      "৳2,60,000+"
    ],
    [
      "Additional language version (VO + subtitles)",
      "৳15,000–25,000"
    ],
    [
      "48-hour board-meeting priority delivery",
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
            What Corporate Video Costs in Dhaka
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
