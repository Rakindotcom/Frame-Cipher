'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Single-event cinema', '৳32,000 per event, highlight + teaser'],
  ['Two-event story', '৳68,000, unified narrative + couple session'],
  ['Signature celebration', '৳1,45,000, 3–4 events, multi-crew'],
  ['Drone aerial add-on', '৳25,000, permission liaised'],
  ['4K master add-on', '৳15,000'],
  ['Social teaser', '60 seconds within 7 days'],
  ['Full film delivery', '3–4 weeks, heirloom premiere'],
  ['Quote and payment', 'Itemised within 48 hours — 50% advance, VAT invoices'],
  ['Shoots and studio', 'On-location across Bangladesh — studio at ECB Chattar is base'],
  ['Phone and hours', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Wedding Videography Essentials"
          index="01"
        >
          Prices, timelines and booking terms for wedding films in Dhaka and beyond. Last updated October 2026.
        </SectionIntro>

        <dl className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {glanceRows.map(([label, value], i) => (
            <div key={i} className="flex items-start justify-between gap-4 bg-frame-bg px-5 py-4 md:px-6">
              <dt className="text-xs font-black uppercase tracking-[0.18em] text-frame-accent">{label}</dt>
              <dd className="text-right text-sm font-bold text-frame-fg">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
