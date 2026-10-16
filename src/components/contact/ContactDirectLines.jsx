import Link from 'next/link'
import { contact } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

function ContactCard({ label, value, href }) {
  const content = (
    <>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/70">
        {label}
      </p>
      <p className="mt-4 break-words text-xl font-black leading-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
        {value}
      </p>
    </>
  )

  const classes = 'group min-h-44 bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent'

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return <div className={classes}>{content}</div>
}

export default function ContactDirectLines() {
  return (
    <div>
      <SectionIntro eyebrow="Direct lines" title="No mystery inbox.">
        Use the form for project context, or use the direct channels if you already know what you need.
      </SectionIntro>
      <div className="grid bg-frame-border gap-px sm:grid-cols-2">
        <ContactCard label="Email" value={contact.email} href={`mailto:${contact.email}`} />
        <ContactCard label="Phone" value={contact.phone} href={`tel:${contact.phoneHref}`} />
        <ContactCard label="Office" value={contact.location} />
        <ContactCard label="Response time" value={contact.responseTime} />
      </div>

      <div className="mt-8 border-2 border-frame-border p-6 bg-frame-muted/30 space-y-3">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
          Studio Production &amp; Space Booking
        </p>
        <p className="text-xs text-frame-muted-fg leading-relaxed">
          Need podcast recording, commercial photography, or video production studio space in Dhaka?
        </p>
        <div className="flex flex-wrap gap-4 pt-1">
          <Link
            href="/studio/contact"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-fg hover:text-frame-accent transition-colors underline decoration-frame-accent/40"
          >
            <span>Book Studio Session</span>
            <span>&rarr;</span>
          </Link>
          <Link
            href="/studio/equipment-and-facilities"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg transition-colors"
          >
            <span>Inspect Studio Gear</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="mt-4 border border-frame-border/80 p-5 bg-frame-bg flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-wider text-frame-fg">
            Explore Documented Client Results
          </p>
          <p className="text-[11px] text-frame-muted-fg mt-0.5">
            Review verified spend, revenue, and organic growth benchmarks.
          </p>
        </div>
        <Link
          href="/case-studies"
          className="text-xs font-black uppercase tracking-wider text-frame-accent hover:text-frame-fg shrink-0"
        >
          Case Studies &rarr;
        </Link>
      </div>
    </div>
  )
}
