import { contact } from '../../data/agency'

function ContactCard({ label, value, href }) {
  const content = (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
          {label}
        </p>
        <p className="mt-2 break-words font-heading text-lg sm:text-xl font-medium leading-snug text-white transition-colors duration-200 group-hover:text-frame-accent">
          {value}
        </p>
      </div>
      {href && (
        <span
          aria-hidden="true"
          className="shrink-0 font-mono text-sm text-zinc-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
        >
          &rarr;
        </span>
      )}
    </div>
  )

  const classes =
    'group block rounded-xl border border-white/[0.08] bg-[#121214] p-5 md:p-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#151518]'

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
      <div className="mb-8">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
          No mystery{' '}
          <span className="italic text-frame-accent">
            inbox.
          </span>
        </h2>
        <p className="mt-4 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
          Use the form for project context, or use the direct channels if you already know what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3.5">
        <ContactCard label="Email" value={contact.email} href={`mailto:${contact.email}`} />
        <ContactCard label="Phone / WhatsApp" value={contact.phone} href={`tel:${contact.phoneHref}`} />
        <ContactCard label="Studio Headquarters" value={contact.location} href={contact.officeMapsUrl} />
        <ContactCard label="Standard Response SLA" value={contact.responseTime} />
      </div>
    </div>
  )
}
