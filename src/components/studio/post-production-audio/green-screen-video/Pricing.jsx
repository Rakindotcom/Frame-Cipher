'use client'


import { AutoLinks } from '../../../seo/AutoLinks'
import { SectionIntro, PosterButton } from '../../../Kinetic'

// Unique BDT pricing for green-screen-video — researched Dhaka market bands, July 2026.
// Source of truth lives in src/data/studioExtended*.js; inlined here at build time.
const DATA = {
  "pricingTitle": "Green Screen Studio Packages and Prices in Dhaka (BDT)",
  "pricingIntro": "Fixed-scope chroma sessions with stage, crew, keying and deliverables itemised in writing — shot and composited in one building.",
  "tiers": [
    {
      "name": "Chroma Session",
      "price": "৳3,500/hr",
      "priceNote": "min 2 hours",
      "tag": "Space + Crew",
      "cta": "Book Chroma Session",
      "description": "Pre-lit green stage with operator: walk in, present, leave with clean keyable footage the same day.",
      "features": [
        "Seamless chroma stage with zero-hot-spot grid",
        "Camera operator + correctly distanced framing",
        "Real-time hardware key preview on monitors",
        "Wardrobe check against green-spill risks",
        "Flat-profile high-bitrate footage handover",
        "Teleprompter available for presenters"
      ]
    },
    {
      "name": "Virtual Half-Day",
      "price": "৳19,000",
      "priceNote": "up to 4 hours",
      "tag": "Most Popular",
      "cta": "Book Virtual Half-Day",
      "popular": true,
      "description": "Presentations with finished backgrounds: shoot plus keying and compositing into newsroom, classroom or brand sets.",
      "features": [
        "Everything in Chroma Session, extended time",
        "Custom virtual set design in your brand style",
        "In-house keying with spill suppression",
        "Slide and screen-capture compositing",
        "Lower thirds and chapter graphics",
        "Finished composite master + transparent ProRes"
      ]
    },
    {
      "name": "VFX Production Day",
      "price": "৳39,000",
      "priceNote": "up to 8 hours",
      "tag": "Full Compositing",
      "cta": "Request VFX Production Day",
      "description": "Effects-heavy production: multi-subject keys, 3D environments, tracking and broadcast-grade compositing.",
      "features": [
        "Full-day stage with gaffer and keying artist",
        "Multi-subject and moving-camera keys",
        "3D virtual environments and camera tracking",
        "Rotoscoping for difficult edges (hair, glass)",
        "Colour matching subjects to virtual light",
        "Priority compositing lane, 5–7 day delivery"
      ]
    }
  ],
  "priceFactors": [
    "Stage hours and number of presenters or subjects",
    "Custom virtual set design versus stock backgrounds",
    "Multi-subject keys, moving cameras and 3D tracking",
    "Rotoscoping for difficult edges like hair and glass",
    "Slide compositing, graphics and aspect-ratio versions",
    "Turnaround: 48–72 hour priority adds 30%"
  ],
  "marketNote": "Dhaka studio rental with green screen runs ৳1,500–3,000/hour room-only (Agdum, Studio89, Space Mirpur), with operated sessions at ৳2,500/hour and keying/compositing billed as post-production (৳5,000–25,000 by complexity). Bad green screens — uneven light, spill, ragged edges — cost more in rescue compositing than a proper stage saves. Our pre-lit grid exists to make keying a non-event.",
  "costRows": [
    [
      "Chroma session, operated (2h minimum)",
      "৳7,000"
    ],
    [
      "Virtual half-day with compositing",
      "৳19,000"
    ],
    [
      "VFX production day with 3D environments",
      "৳39,000"
    ],
    [
      "Custom virtual set design",
      "from ৳8,000"
    ],
    [
      "Additional compositing minute",
      "৳2,000"
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
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed"><AutoLinks currentPath="/studio/green-screen-video" allowed={["/studio/rental"]}>
                  {pkg.description}
                </AutoLinks></p>

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
          Every quote is itemised in writing within 48 hours, covering stage time, crew, set design and timeline. A 50%
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
            What Green Screen Studio Time Costs in Dhaka
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
