'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Audio session', '৳8,000 per session, up to 2 hours'],
  ['4K video session', '৳18,000 per session, up to 3 hours'],
  ['Full production episode', '৳35,000 per episode, edit included'],
  ['Extra vertical clip', '৳2,500 with captions'],
  ['Weekly show retainer', 'From ৳1,20,000 per month, 4 episodes'],
  ['Priority delivery', '+30% for 48-hour turnaround'],
  ['Quote', 'Itemised, in writing, within 48 hours'],
  ['Payment', '50% advance confirms dates, balance on final sign-off, VAT-compliant invoices'],
  ['Studio', '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206'],
  ['Phone and WhatsApp', '+880 1768-146650'],
  ['Hours', 'Open 24 hours — sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Podcast Studio Essentials"
          index="01"
        >
          Prices, timelines and booking terms for podcast recording at ECB Chattar. Last updated October 2026.
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
