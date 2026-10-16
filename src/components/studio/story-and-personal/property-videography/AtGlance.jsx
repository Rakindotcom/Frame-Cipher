'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Apartment walkthrough', '৳28,000 per property, with vertical reels'],
  ['Luxury villa with drone', '৳65,000 per property, host-led'],
  ['Commercial tower showcase', '৳1,30,000 per project, multi-day'],
  ['Standalone drone slot', '৳25,000, permission liaised'],
  ['Standard delivery', '3–4 business days after the shoot'],
  ['Urgent listing lane', '48-hour delivery, +25%'],
  ['Quote and payment', 'Itemised within 48 hours — 50% advance, VAT invoices'],
  ['Shoots and studio', 'On-location across Dhaka — studio at ECB Chattar is base'],
  ['Studio', '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206'],
  ['Phone and hours', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Property Videography Essentials"
          index="01"
        >
          Prices, turnarounds and booking terms for property films in Dhaka. Last updated October 2026.
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
