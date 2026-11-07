import { contact } from '../../data/agency'
import { Mail, MessageSquare, MapPin, Clock, Globe, ArrowUpRight } from 'lucide-react'

function ContactCard({ icon: Icon, label, value, href, subtext }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#18181B] text-purple-600 transition-colors duration-200 group-hover:border-purple-600/30 group-hover:bg-purple-600/10">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
          {label}
        </p>
        <p className="mt-1 break-words font-heading text-lg sm:text-xl font-medium leading-snug text-white transition-colors duration-200 group-hover:text-purple-300">
          {value}
        </p>
        {subtext && (
          <p className="mt-1 text-xs text-zinc-500 font-normal leading-relaxed">
            {subtext}
          </p>
        )}
      </div>
      {href && (
        <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition-all duration-200 group-hover:border-purple-600/30 group-hover:bg-purple-600/10 group-hover:text-white group-hover:translate-x-0.5">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      )}
    </div>
  )

  const classes =
    'group block relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 transition-all duration-300 hover:border-purple-600/40 hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
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
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
          <span>Direct Executive Channels</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-highlighted">
          No Mystery Inboxes. Real Executive Access.
        </h2>
        <p className="mt-4 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
          Use the project brief form for structured scope assessment, or connect directly through our executive channels for urgent consultations and studio bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <ContactCard
          icon={Mail}
          label="Executive Email"
          value={contact.email}
          href={`mailto:${contact.email}`}
          subtext="Direct response from technical partners & leadership"
        />
        <ContactCard
          icon={MessageSquare}
          label="WhatsApp & Direct Line"
          value={contact.phone}
          href={contact.whatsapp}
          subtext="Instant messaging, voice briefing & quick scheduling"
        />
        <ContactCard
          icon={MapPin}
          label="Studio Headquarters"
          value={contact.location}
          href={contact.officeMapsUrl}
          subtext="6th Floor, Eurasia Building, ECB Chattar, Dhaka 1206"
        />
        <ContactCard
          icon={Clock}
          label="Standard Response SLA"
          value={contact.responseTime}
          subtext="Every brief reviewed and answered with strategic recommendations"
        />
        <ContactCard
          icon={Globe}
          label="Global Operating Hours"
          value="BST (UTC+6) · US, UK & Gulf Overlap"
          subtext="Coordinated client communications across North America, Europe & Asia"
        />
      </div>
    </div>
  )
}
