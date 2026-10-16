'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Shorts pack (5 verticals)', '৳9,500 with captions and SFX'],
  ['Creator edit (up to 15 min)', '৳22,000 with 2 vertical cutdowns'],
  ['Studio suite (up to 30 min)', '৳48,000 with motion-graphics package'],
  ['Priority edit lane', '+30% for 48–72 hour turnaround'],
  ['Standard turnaround', '3–5 working days for edits'],
  ['Revisions', '2 structured rounds, timestamped review'],
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
          title="Video Editing Essentials"
          index="01"
        >
          Prices, timelines and booking terms for editing at ECB Chattar. External footage welcome. Last updated October 2026.
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
