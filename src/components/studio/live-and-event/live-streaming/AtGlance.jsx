'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Single-camera stream', '৳18,000 per stream, up to 2 hours'],
  ['Multi-camera broadcast', '৳45,000 per event, up to 4 hours'],
  ['Summit command', '৳95,000 per day, multi-room'],
  ['Extra streaming hour', '৳8,000 with crew'],
  ['Highlight teaser', '৳12,000, delivered within 72 hours'],
  ['Raw recording', 'Full master within 24 hours'],
  ['Quote', 'Itemised, in writing, within 48 hours'],
  ['Payment', '50% advance confirms dates, balance on final sign-off, VAT-compliant invoices'],
  ['Studio and field', '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — venue streams across Bangladesh'],
  ['Phone and hours', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Live Streaming Essentials"
          index="01"
        >
          Prices, redundancy and booking terms for live streaming from ECB Chattar and venues. Last updated October 2026.
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
