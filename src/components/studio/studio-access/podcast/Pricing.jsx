'use client'

import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for podcast — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Podcast Studio Rates in Dhaka",
  "pricingIntro": "Acoustic multi-mic recording with 4K video: audio sessions at ৳8,000, full video podcasts at ৳18,000, turnkey production with editing and clips at ৳35,000 per episode.",
  "tiers": [
    {
      "name": "Audio Podcast Session",
      "price": "৳8,000",
      "priceNote": "per session",
      "tag": "Audio Only",
      "cta": "Book Audio Podcast Session",
      "description": "Broadcast audio in acoustic isolation: up to 4 mics, engineer monitoring and mastered loudness-normalised delivery.",
      "features": [
        "Up to 2 hours studio time, 4 Shure/RØDE dynamics",
        "Acoustic isolation from Dhaka traffic and hum",
        "Engineer-monitored gain and level riding",
        "Multi-track 24-bit 48kHz WAV exports",
        "Levelling and loudness normalisation included",
        "Raw handover same day, mastered in 48 hours"
      ]
    },
    {
      "name": "4K Video Podcast Session",
      "price": "৳18,000",
      "priceNote": "per session",
      "tag": "Most Popular",
      "cta": "Book 4K Video Podcast Session",
      "popular": true,
      "description": "YouTube-ready video podcast: 3 cinema 4K angles, ceiling grid lighting and live-switched monitoring.",
      "features": [
        "Up to 3 hours: host, guest and wide 4K angles",
        "Broadcast mics for up to 4 speakers",
        "Softbox ceiling grid with backdrop styling",
        "Technical director with live switching monitor",
        "Raw 4K angles + synced multi-track audio",
        "Teleprompter and show-format guidance"
      ]
    },
    {
      "name": "Full Production Suite",
      "price": "৳35,000",
      "priceNote": "per episode",
      "tag": "Turnkey Hands-Off",
      "cta": "Book Full Production Suite",
      "description": "Record to published: multicam edit, cinematic grade, subtitles, vertical clips and YouTube packaging.",
      "features": [
        "Complete 4K multi-camera recording session",
        "Full multicam edit with pacing and switching",
        "DaVinci colour grade and audio sweetening",
        "Bangla and English subtitle authoring",
        "3 hook-driven vertical clips for Reels/Shorts",
        "Thumbnail design and RSS-ready metadata"
      ]
    }
  ],
  "priceFactors": [
    "Number of speakers and microphones required",
    "Audio-only recording versus 3-angle 4K video",
    "Session length and number of episodes batched",
    "Editing, grading, subtitles and thumbnail packaging",
    "Number of vertical cutdowns per episode",
    "Turnaround: 48-hour priority adds 30%"
  ],
  "marketNote": "Dhaka podcast studios charge ৳2,500/hour (Gold, 2-person) to ৳4,500/hour (Platinum) with 2-hour minimums at Black Box Aftabnagar; Desh Shamachar lists ৳3,500–8,000 session packages; Genesis Mirpur DOHS offers 2-camera at ৳3,000–5,000/hour with editing at ৳5,000–9,000 per episode. Our ৳8,000 audio and ৳18,000 video sessions align with premium operated tiers — engineer, isolation and 4K multi-cam included rather than added.",
  "costRows": [
    [
      "Audio session: 2h, 4 mics, mastered WAV/MP3",
      "৳8,000"
    ],
    [
      "4K video session: 3h, 3 cameras, raw handover",
      "৳18,000"
    ],
    [
      "Full production: edit, grade, subs, 3 clips",
      "৳35,000"
    ],
    [
      "Extra vertical clip with captions",
      "৳2,500"
    ],
    [
      "Weekly show retainer (4 episodes)",
      "from ৳1,20,000/mo"
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

        <p className="mt-6 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
          Every quote is itemised in writing within 48 hours, covering crew, hours, deliverables and timeline. A 50%
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
            What Podcast Recording Costs in Dhaka
          </h4>
          <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
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
