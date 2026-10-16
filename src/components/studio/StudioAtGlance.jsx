'use client'

import { MapPin, Clock, Wallet, BadgeCheck, Captions, Phone, CalendarClock } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const rows = [
  { icon: MapPin, label: 'Location', value: '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206' },
  { icon: Clock, label: 'Hours', value: 'Open 24 hours — sessions by advance reservation' },
  { icon: Wallet, label: 'Studio hire', value: 'From ৳2,000 per hour (room only)' },
  { icon: Wallet, label: 'Studio + crew', value: 'From ৳8,000 per session' },
  { icon: Wallet, label: 'Full production', value: 'From ৳35,000 per project' },
  { icon: CalendarClock, label: 'Quote turnaround', value: 'Itemised written quote within 48 hours' },
  { icon: BadgeCheck, label: 'Payment', value: '50% advance confirms dates, balance on final sign-off, VAT-compliant invoices' },
  { icon: Captions, label: 'Subtitles', value: 'English and Bangla' },
  { icon: Phone, label: 'Phone and WhatsApp', value: '+880 1768-146650' },
]

export default function StudioAtGlance() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="At a glance" title="Studio essentials." index="02">
          The facts you need before you book — prices, location, hours and payment terms.
        </SectionIntro>
        <dl className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row, i) => {
            const Icon = row.icon
            return (
              <div key={i} className="flex items-start gap-4 bg-frame-bg p-5 md:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-frame-border bg-frame-muted/40 text-frame-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">{row.label}</dt>
                  <dd className="mt-1 text-sm font-bold leading-snug text-frame-fg">{row.value}</dd>
                </div>
              </div>
            )
          })}
        </dl>
        <p className="mt-4 text-xs font-medium text-frame-muted-fg">Last updated: October 2026. For stage dimensions and guest capacity, ask on WhatsApp.</p>
      </div>
    </section>
  )
}
