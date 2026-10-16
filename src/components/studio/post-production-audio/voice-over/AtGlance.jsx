'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Short read (up to 2 min)', '৳4,500 with directed session and master'],
  ['Commercial VO (per commercial)', '৳9,500 with timing to picture and rights'],
  ['Series / course (per 60 min)', '৳28,000 with session continuity'],
  ['Priority session lane', '+30% for 48–72 hour turnaround'],
  ['Standard turnaround', '24–48 hours for short reads, 5–10 working days for series'],
  ['Revisions', 'Pickups and corrections window on full scopes'],
  ['Quote', 'Itemised, in writing, within 48 hours'],
  ['Payment', '50% advance confirms dates, balance on final sign-off, VAT-compliant invoices'],
  ['Studio', '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206'],
  ['Phone and WhatsApp', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Voice Over Studio Essentials"
          index="01"
        >
          Prices, timelines and booking terms for Bangla and English VO at ECB Chattar. Last updated October 2026.
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
