'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

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
        <article
          key={i}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              {g.h}
            </h3>
          </div>
          {g.items ? (
            <ul className="mt-5 space-y-3">
              {g.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm font-normal leading-relaxed text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 space-y-4">
              <p className="text-sm font-normal leading-relaxed text-zinc-300">{g.p1}</p>
              <p className="text-sm font-normal leading-relaxed text-zinc-300">{g.p2}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

export default function StudioHubExtended() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-tight text-white">
              What to Know Before You Book.
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Most Dhaka video problems are practical: noisy audio, mixed lighting, and power cuts. A dedicated physical studio eliminates these bottlenecks with acoustic isolation, softbox lighting, and generator backup.
          </p>
        </div>

        <GuideArticles />

        <div className="relative mt-8 flex items-start gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-5 sm:p-6 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
          <span>
            FrameCipher Studio: 6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar,
            Dhaka 1206. Hotline/WhatsApp +880 1768-146650. Open 24 hours by appointment. Full process detail on
            our <Link href="/studio/process/" className="font-medium text-white underline decoration-purple-600/50 hover:text-purple-300 transition-colors">production process page</Link> and
            facility specs on the <Link href="/studio/equipment-and-facilities/" className="font-medium text-white underline decoration-purple-600/50 hover:text-purple-300 transition-colors">equipment page</Link>.
          </span>
        </div>
      </div>
    </section>
  )
}
