'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Half-day cover', '৳25,000, up to 4 hours, single crew'],
  ['Full-day crew', '৳48,000, up to 9 hours, two cameras'],
  ['Multi-day summit', '৳1,25,000+, 2–3 days, 3-person crew'],
  ['Drone aerial slot', '৳25,000, permission liaised'],
  ['24-hour teaser', 'Standard on full-day tiers, not a surcharge'],
  ['Same-day edit', 'Evening delivery, +30%'],
  ['Raw recordings', 'Full sessions within 24 hours'],
  ['Quote and payment', 'Itemised within 48 hours — 50% advance, VAT invoices'],
  ['Studio and field', '6th Floor, Eurasia Building, Matikata ECB Chattar, Dhaka 1206 — shoots on-location across Bangladesh'],
  ['Phone and hours', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Event Videography Essentials"
          index="01"
        >
          Prices, turnarounds and booking terms for event coverage in Dhaka and beyond. Last updated October 2026.
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
