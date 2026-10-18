'use client'

import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const serviceTypes = [
  {
    title: 'Hourly and Session Hire',
    desc: 'Room, operated and booth hire by the hour — the fastest way to compare facility costs.',
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
  {
    title: 'Podcast and Catalogue Sessions',
    desc: 'Audio, video and retouching sessions with honest per-unit maths.',
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    title: 'Signature Productions',
    desc: 'Profiles, OVCs, wedding narratives and catalogue banks in fixed scopes.',
    anchor: 'video production in Dhaka',
    href: '/studio/video-production/',
  },
  {
    title: 'Flagship and Campaign Scopes',
    desc: 'TVCs, multi-film campaigns and documentaries with dedicated producers.',
    anchor: 'commercial video production in Dhaka',
    href: '/studio/commercial-video-production/',
  },
  {
    title: 'Post-Production and Finishing',
    desc: 'Edits, grades, subtitles and cutdowns priced by complexity and version count.',
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    title: 'Retainers and Always-On Lanes',
    desc: 'Reserved monthly capacity for shows and content banks at effective savings.',
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
]

export default function TypesOfService() {
  return (
    <section id="service-types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Package Lanes"
          title="Rate Lanes on Our Master Card"
          index="02"
        >
          Six pricing lanes, each linked to the service page where its scopes live.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((type, idx) => (
            <Link
              key={idx}
              href={type.href}
              className="group bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <span className="font-mono text-xs font-bold text-frame-muted-fg">
                TYPE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                {type.title}
              </h3>
              <p className="mt-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">{type.desc}</p>
              {type.anchor && (
                <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-frame-accent underline decoration-frame-accent/40 underline-offset-4">
                  {type.anchor} &rarr;
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
