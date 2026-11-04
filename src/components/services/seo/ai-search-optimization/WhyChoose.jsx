'use client'

import React from 'react'
import { Check } from 'lucide-react'

const reasons = [
  {
    title: 'Evidence-Based AI Visibility Strategy',
    body: 'We do not rely on claims that a specific formatting trick will make an AI platform cite your page. We test relevant queries, examine sources and competitors, review your existing content and entities, then recommend changes based on the evidence available.',
    points: [],
  },
  {
    title: 'SEO + Content + Development in One Team',
    body: 'AI Search Optimization touches more than content.',
    lead: 'It may require:',
    points: [
      'Technical SEO',
      'Content strategy',
      'Page development',
      'Structured data',
      'Internal linking',
      'Entity information',
      'Conversion optimization',
    ],
    closing: 'Framecipher keeps these areas connected through one in-house workflow.',
  },
  {
    title: 'Entity + Content + Source Strategy',
    body: 'A strong AI-search strategy cannot rely on one page.',
    lead: 'We connect:',
    points: [
      'Content',
      'Entities',
      'Authors',
      'Brand information',
      'Third-party sources',
      'Technical signals',
      'Topical coverage',
    ],
    closing: 'This gives the business a more complete AI-search presence.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. We can adapt AI-search research to local, multilingual, international, ecommerce, B2B, professional, and service-business contexts.',
    points: [],
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Competitive Edge // The Framecipher Standard</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">AI Search Optimization</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Evidence-driven AI search work that stays connected across content, technical, and brand
            strategy.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Pillar 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {reason.body}
                </p>

                {reason.lead && (
                  <p className="mt-4 text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {reason.lead}
                  </p>
                )}

                {reason.points.length > 0 && (
                  <ul className="mt-3 space-y-2 border-t border-white/[0.06] pt-3 text-xs sm:text-sm text-zinc-300">
                    {reason.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-3 w-3 mt-0.5 text-frame-accent shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {reason.closing && (
                <div className="mt-6 pt-3 border-t border-white/[0.06]">
                  <p className="text-xs text-zinc-400">
                    {reason.closing}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
