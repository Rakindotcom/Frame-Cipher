'use client'

import React from 'react'
import { Users, Compass, Eye, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const reasons = [
  {
    num: '01',
    icon: Users,
    title: 'One In-House Team',
    para1:
      'Framecipher combines SEO, content, design, and development under one in-house team.',
    para2:
      'That matters when an on-page recommendation affects more than the words on a page. Content structure, internal linking, page templates, design elements, and implementation can sometimes need to work together.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Intent First, Keywords Second',
    para1: 'We do not treat keyword insertion as the definition of on-page SEO.',
    para2:
      'We start by understanding what the searcher wants, what the current search results indicate, and what the page needs to accomplish. Keywords are then incorporated naturally into a page that serves that intent.',
  },
  {
    num: '03',
    icon: Eye,
    title: 'Transparent Recommendations',
    para1: 'We explain what should change and why.',
    para2:
      'Depending on the engagement, recommendations can be reviewed before implementation so you have visibility into changes to content, structure, metadata, and internal linking.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Review-Based Implementation',
    para1:
      'We work with a review and approval process so important content changes do not go live without your visibility.',
    para2:
      'This is especially useful for businesses where product information, technical claims, pricing, legal information, or brand messaging require internal approval.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  The Framecipher Standard // In-House Synergy
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Why Choose Framecipher{' '}
                <span className="italic text-frame-accent">for On-Page</span> SEO
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                On-page SEO works best when it is driven by evidence about the searcher, not by a mechanical template of what a page should contain.
              </p>

              <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-frame-accent">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Cross-Disciplinary Handoff</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  SEO, copywriting, and UI/UX design integrated into unified deliverables. Zero external agency ping-pong.
                </p>
                <div className="pt-2">
                  <PosterButton href="/contact">
                    Get Free Consultation &rarr;
                  </PosterButton>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column (7 cols): Editorial Divided Rows */}
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-7">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.num}
                  className="group py-8 transition-colors duration-200 hover:bg-white/[0.02] px-2 sm:px-4"
                >
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-frame-accent/10 border border-frame-accent/20 text-frame-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-frame-accent uppercase tracking-wider">
                        Standard {reason.num}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      ONPAGE_STD_0{reason.num}
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                    {reason.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                    <p>{reason.para1}</p>
                    <p className="text-zinc-400">{reason.para2}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
