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
    </div>
  )
}
