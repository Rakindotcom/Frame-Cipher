'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Topics covered', 'Booking, kit, access, reviews, delivery'],
  ['Response time', 'Same-day replies on WhatsApp'],
  ['Quotes', 'Itemised, in writing, within 48 hours'],
  ['Walkthroughs', 'Free by appointment with test recordings'],
  ['Standard delivery', '5–10 working days, 2 revisions'],
  ['Sessions from', '৳2,000/hour with 50% advance'],
  ['Rescheduling', 'Free with 48-hour notice'],
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
          title="Answer Index"
          index="01"
        >
          What this page covers, how fast we reply and the booking facts behind the answers. Last updated October 2026.
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
