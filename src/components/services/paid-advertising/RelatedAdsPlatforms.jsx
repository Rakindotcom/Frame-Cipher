'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Layers } from 'lucide-react'
import { getAdsComparisonLinks } from '../../../lib/seo/internalLinks'
import { getServiceDisplayName } from '../../../data/servicePages'

/**
 * In-body platform navigation for the paid advertising service pages.
 * SoftWebGrove modern styling: #09090B canvas, #121214 cards, border-white/[0.08].
 */
export default function RelatedAdsPlatforms({ service }) {
  if (!service) return null

  const links = getAdsComparisonLinks(service)
  if (!links.length) return null

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
            Compare {getServiceDisplayName(service)} With Other Channels
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            Each platform operates on distinct auction dynamics, intent horizons, and data algorithms. Compare how your ad budget performs across competing channels before dividing spend:
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#09090B] px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-colors duration-200 hover:border-white/[0.14] hover:text-white hover:bg-white/[0.04]"
              >
                <span>{link.anchor}</span>
                <ArrowRight className="h-3 w-3 text-frame-accent" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
