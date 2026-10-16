'use client'

import { SectionIntro } from '../../../Kinetic'

const glanceRows = [
  ['Milestone film', '৳35,000 per film, interview + event + 30 photos'],
  ['Legacy documentary', '৳75,000 per film, multi-session + 100 restorations'],
  ['Heritage archive', '৳1,40,000 per project, 5 members + vault'],
  ['Extra restoration batch', '৳8,000 per 50 photographs'],
  ['Heirloom USB box set', '৳3,500 per additional set'],
  ['Standard delivery', '5–10 working days after final session'],
  ['Quote and payment', 'Itemised within 48 hours — 50% advance, VAT invoices'],
  ['Sessions and studio', 'Home sessions across Dhaka or quiet studio at ECB Chattar'],
  ['Studio', '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206'],
  ['Phone and hours', '+880 1768-146650 — Open 24 hours, sessions by advance reservation'],
]

export default function AtGlance() {
  return (
    <section id="at-a-glance" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="At a glance"
          title="Family and Legacy Film Essentials"
          index="01"
        >
          Prices, timelines and booking terms for family films in Dhaka. Last updated October 2026.
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
