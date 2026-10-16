'use client'

import Link from 'next/link'
import { MapPin, ClipboardCheck } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const guides = [
  {
    h: 'Match the service to the goal',
    items: [
      'Persuade strangers (ads, launches, campaigns): promotional and commercial production, built on a strong hook and multi-ratio cutdowns.',
      'Build authority: corporate video, founder interviews and documentary.',
      'Publish consistently: podcast sessions, social clip batches and catalogue photography.',
      'Preserve moments: wedding cinema and event coverage.',
    ],
  },
  {
    h: 'Compare quotes the right way',
    p1: 'When you compare quotes from any Dhaka studio, check whether crew roles, revision rounds, licensing, versioning and backup power are included. Low quotes often leave these out, and ours list each one.',
    p2: 'A studio day often costs less than a location shoot once venue hire, portable lighting, sound treatment, travel and weather contingency are added up. We itemise both options so you can compare them.',
  },
]

function GuideArticles() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {guides.map((g, i) => (
        <article key={i} className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <h3 className="font-heading text-lg font-bold uppercase leading-snug tracking-tight text-frame-fg md:text-xl">{g.h}</h3>
          {g.items ? (
            <ul className="mt-4 space-y-2.5">
              {g.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  <span className="font-bold text-frame-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{g.p1}</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{g.p2}</p>
            </>
          )}
        </article>
      ))}
    </div>
  )
}

export default function StudioHubExtended() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Studio booking in Dhaka" title="What to know before you book." index="09">
          Most Dhaka video problems are practical ones: noisy audio, mixed lighting, power cuts mid-take and footage
          that was never planned for its platform. A physical studio removes these with acoustic isolation, a softbox
          lighting grid, IPS and generator backup, and fibre internet.
        </SectionIntro>
        <GuideArticles />
        <p className="mt-8 flex max-w-4xl items-start gap-2 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
          <span>
            FrameCipher Studio — 6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar,
            Dhaka 1206. Hotline/WhatsApp +880 1768-146650. Open 24 hours by appointment. Full process detail on
            our <Link href="/studio/process/" className="font-bold text-frame-fg underline decoration-frame-accent/50">production process page</Link> and
            facility specs on the <Link href="/studio/equipment-and-facilities/" className="font-bold text-frame-fg underline decoration-frame-accent/50">equipment page</Link>.
          </span>
        </p>
      </div>
    </section>
  )
}
