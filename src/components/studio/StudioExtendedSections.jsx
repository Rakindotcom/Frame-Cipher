'use client'

import Link from 'next/link'
import { BadgeCheck, MapPin } from 'lucide-react'

/**
 * StudioExtendedSections: long-form SEO content rendered from studioExtended data.
 * Adds ~1000+ words of unique, passage-optimised content per service page:
 * market pricing note, cost-breakdown table, 5 deep-dive sections,
 * extra FAQs and internal related-service links.
 */
export default function StudioExtendedSections({ data }) {
  if (!data) return null
  const { marketNote, sections = [], costRows = [], extraFaqs = [], related = [] } = data
  if (!sections.length && !marketNote) return null

  return (
    <>
      {/* MARKET PRICING CONTEXT + COST TABLE */}
      {(marketNote || costRows.length > 0) && (
        <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
                What this costs in Dhaka:{' '}
                <span className="text-white">honestly priced.</span>
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {marketNote && (
                <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
                  <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-300">{marketNote}</p>
                  <p className="mt-4 flex items-start gap-2 text-xs md:text-sm font-normal leading-relaxed text-zinc-400">
                    <MapPin className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                    <span>
                      All sessions run from our physical stage: 6th Floor, Eurasia Building, Matikata ECB Chattar,
                      Dhaka 1206, with generator + IPS backup and fibre internet on every booking.
                    </span>
                  </p>
                </div>
              )}
              {costRows.length > 0 && (
                <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
                  <div className="border-b border-white/[0.08] bg-white/[0.02] px-6 py-4">
                    <h3 className="font-heading text-base md:text-lg font-medium tracking-tight text-white">
                      Indicative Cost Breakdown
                    </h3>
                  </div>
                  <dl>
                    {costRows.map(([item, range], i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-4 border-b border-white/[0.08] px-6 py-3.5 last:border-0"
                      >
                        <dt className="text-xs md:text-sm font-normal leading-relaxed text-zinc-300">{item}</dt>
                        <dd className="shrink-0 font-mono text-xs md:text-sm font-semibold text-white text-right">{range}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* LONG-FORM DEEP DIVE SECTIONS */}
      {sections.length > 0 && (
        <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
                Planning guide:{' '}
                <span className="text-white">quality, budget &amp; delivery.</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {sections.map((s, i) => (
                <article key={i} className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-medium tracking-tight text-white leading-snug">
                    {s.h}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">{s.p1}</p>
                  {s.p2 && (
                    <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">{s.p2}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXTENDED FAQS + RELATED SERVICES */}
      {(extraFaqs.length > 0 || related.length > 0) && (
        <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {extraFaqs.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl sm:text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-white mb-8">
                  Pricing &amp; planning{' '}
                  <span className="text-white">questions.</span>
                </h2>
                <div className="space-y-4">
                  {extraFaqs.map((f, i) => (
                    <details
                      key={i}
                      className="group rounded-xl border border-white/[0.08] bg-[#121214] p-5 md:p-6"
                    >
                      <summary className="cursor-pointer font-heading text-base md:text-lg font-medium tracking-tight text-white list-none flex items-start gap-3">
                        <span className="font-mono text-xs text-frame-accent mt-1">0{i + 1}</span>
                        <span>{f.q}</span>
                      </summary>
                      <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
            {related.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl sm:text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-white mb-8">
                  Related studio{' '}
                  <span className="text-white">services.</span>
                </h2>
                <div className="space-y-3">
                  {related.map((r, i) => (
                    <Link
                      key={i}
                      href={r.href}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-5 transition-all hover:border-frame-accent"
                    >
                      <span className="flex items-center gap-3 text-sm sm:text-base font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                        <BadgeCheck className="h-4 w-4 shrink-0 text-frame-accent" />
                        {r.label}
                      </span>
                      <span className="text-frame-accent font-semibold transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="mt-6 rounded-xl border border-white/[0.08] bg-[#121214] p-5 text-xs md:text-sm font-normal leading-relaxed text-zinc-300">
                  Not sure which service fits? Message our directors on WhatsApp at{' '}
                  <a href="https://wa.me/8801768146650" className="font-medium text-white underline decoration-frame-accent/50">
                    +880 1768-146650
                  </a>{' '}
                  with your goal and deadline: scoping guidance and itemised quotes are free.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
