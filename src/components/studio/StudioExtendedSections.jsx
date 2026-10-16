'use client'

import Link from 'next/link'
import { BadgeCheck, CircleDollarSign, MapPin, ListChecks, GitCompareArrows, MessagesSquare } from 'lucide-react'

/**
 * StudioExtendedSections — long-form SEO content rendered from studioExtended data.
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
        <section className="border-t-2 border-frame-border bg-frame-muted/15 px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="mb-10 max-w-4xl">
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-3 flex items-center gap-2">
                <CircleDollarSign className="h-4 w-4" />
                <span>Dhaka Market Context</span>
              </p>
              <h2 className="font-heading text-[clamp(1.8rem,4vw,3.2rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
                What This Costs in Dhaka — Honestly Priced
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {marketNote && (
                <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">{marketNote}</p>
                  <p className="mt-4 flex items-start gap-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    <MapPin className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                    <span>
                      All sessions run from our physical stage: 6th Floor, Eurasia Building, Matikata ECB Chattar,
                      Dhaka 1206 — with generator + IPS backup and fibre internet on every booking.
                    </span>
                  </p>
                </div>
              )}
              {costRows.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg overflow-hidden">
                  <div className="border-b-2 border-frame-border bg-frame-muted/20 px-6 py-4">
                    <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                      Indicative Cost Breakdown
                    </h3>
                  </div>
                  <dl>
                    {costRows.map(([item, range], i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-4 border-b border-frame-border/50 px-6 py-3.5 last:border-0"
                      >
                        <dt className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">{item}</dt>
                        <dd className="shrink-0 text-xs md:text-sm font-black text-frame-fg text-right">{range}</dd>
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
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-3 flex items-center gap-2">
                <ListChecks className="h-4 w-4" />
                <span>In-Depth Guide</span>
              </p>
              <h2 className="font-heading text-[clamp(1.8rem,4vw,3.2rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
                Planning Guide: Quality, Budget & Delivery
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {sections.map((s, i) => (
                <article key={i} className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                    {s.h}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{s.p1}</p>
                  {s.p2 && (
                    <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{s.p2}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXTENDED FAQS + RELATED SERVICES */}
      {(extraFaqs.length > 0 || related.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-muted/15 px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw] grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {extraFaqs.length > 0 && (
              <div>
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-3 flex items-center gap-2">
                  <MessagesSquare className="h-4 w-4" />
                  <span>More Answers</span>
                </p>
                <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg mb-8">
                  Pricing & Planning Questions
                </h2>
                <div className="space-y-4">
                  {extraFaqs.map((f, i) => (
                    <details
                      key={i}
                      className="group border-2 border-frame-border bg-frame-bg p-5 md:p-6"
                    >
                      <summary className="cursor-pointer font-heading text-sm md:text-base font-bold uppercase tracking-tight text-frame-fg list-none flex items-start gap-3">
                        <span className="text-frame-accent font-black">Q{i + 1}</span>
                        <span>{f.q}</span>
                      </summary>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
            {related.length > 0 && (
              <div>
                <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-3 flex items-center gap-2">
                  <GitCompareArrows className="h-4 w-4" />
                  <span>Keep Exploring</span>
                </p>
                <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg mb-8">
                  Related Studio Services
                </h2>
                <div className="space-y-3">
                  {related.map((r, i) => (
                    <Link
                      key={i}
                      href={r.href}
                      className="group flex items-center justify-between gap-4 border-2 border-frame-border bg-frame-bg p-5 transition-all hover:border-frame-accent"
                    >
                      <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                        <BadgeCheck className="h-4 w-4 shrink-0 text-frame-accent" />
                        {r.label}
                      </span>
                      <span className="text-frame-accent font-black transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="mt-6 border-2 border-frame-border bg-frame-bg p-5 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Not sure which service fits? Message our directors on WhatsApp at{' '}
                  <a href="https://wa.me/8801768146650" className="font-bold text-frame-fg underline decoration-frame-accent/50">
                    +880 1768-146650
                  </a>{' '}
                  with your goal and deadline — scoping guidance and itemised quotes are free.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
