'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Room-only hire', '৳2,000 per hour, 2-hour minimum'],
  ['Operated session', '৳2,500 per hour, 2-hour minimum'],
  ['Half-day / full-day caps', '৳12,000 / ৳22,000'],
  ['Crewed production day', '৳38,000 with director and crew'],
  ['Specialist operators', 'Quoted per session'],
  ['Verification visit', 'Free by appointment with test recordings'],
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
          title="Facilities Essentials"
          index="01"
        >
          Hire rates, kit categories and verification terms at ECB Chattar. Last updated October 2026.
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
