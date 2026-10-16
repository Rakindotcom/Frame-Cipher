'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Impact short (10–12 min)', '৳1,85,000, single-arc field story'],
  ['Standard documentary (15–25 min)', '৳3,60,000, multi-location'],
  ['Feature and series', '৳7,80,000+, scoped quote'],
  ['Language versioning', '৳25,000–45,000 per additional version'],
  ['Standard delivery', '3–5 weeks (short), 6–10 weeks (standard)'],
  ['Quote and payment', 'Itemised within 48 hours — 50% advance, VAT invoices'],
  ['Field and studio', 'Field shoots on-location across Bangladesh — studio at ECB Chattar is base'],
  ['Studio', '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206'],
  ['Phone and hours', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
  ['Updated', 'Last updated October 2026'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Documentary Production Essentials"
          index="01"
        >
          Prices, timelines and booking terms for documentary films in Bangladesh. Last updated October 2026.
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
