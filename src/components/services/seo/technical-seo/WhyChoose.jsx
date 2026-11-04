'use client'

import React from 'react'
import { Users, FileSearch, Eye, Globe2, ShieldCheck } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const reasons = [
  {
    num: '01',
    icon: Users,
    title: 'SEO + Development Under One Team',
    para1:
      'Technical SEO often requires changes to code, templates, website architecture, or server-side implementation.',
    para2:
      'Framecipher combines SEO, content, design, and development under one in-house team, reducing the gap between identifying a technical problem and implementing the solution.',
  },
  {
    num: '02',
    icon: FileSearch,
    title: 'Diagnosis Before Implementation',
    para1: 'We do not treat every website with the same checklist.',
    para2:
      'We investigate the actual technical condition of your website, prioritize the issues that matter, and recommend fixes based on evidence.',
  },
  {
    num: '03',
    icon: Eye,
    title: 'Transparent Technical Recommendations',
    para1:
      'You can understand what needs to change, why it matters, and how the recommended work fits into your website.',
    para2:
      'Depending on the project, technical changes can be reviewed and approved before implementation.',
  },
  {
    num: '04',
    icon: Globe2,
    title: 'Bangladesh & International Experience',
    para1:
      'We support businesses targeting Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
    para2:
      'Our technical recommendations account for the website platform, target market, business model, and technical environment.',
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
                <span className="italic text-frame-accent">for Technical</span> SEO
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Technical SEO works best when strategy, content, design, and development operate as one in-house team instead of separate handoffs.
              </p>

              <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-frame-accent">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Integrated Engineering SLA</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Direct code implementation by developers who understand SEO architecture. Zero external agency ping-pong.
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
                      SYS_0{reason.num}
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
