'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['WhatsApp and phone', '+880 1768-146650, same-day replies'],
  ['Email', 'teamframecipher@gmail.com'],
  ['Walkthrough visits', 'Free, same or next day by appointment'],
  ['Quote turnaround', 'Itemised, in writing, within 48 hours'],
  ['Studio hire from', '৳2,000/hour with 50% advance'],
  ['Rescheduling', 'Free with 48-hour notice'],
  ['Response standard', 'Scoping questions the same day'],
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
          title="Contact Channels and Response Times"
          index="01"
        >
          Every channel, every response promise and the booking facts behind them. Last updated October 2026.
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
