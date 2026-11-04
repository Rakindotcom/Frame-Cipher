'use client'

import React from 'react'

const reasons = [
  {
    title: 'No Approval Guarantees or Shortcuts',
    body: 'We do not sell “100% approval,” secret techniques, fixed article-count formulas, or artificial traffic strategies. Google makes the final decision, and its review remains outside any third-party provider’s control.',
    closing:
      'Our role is to prepare your site as thoroughly as possible and give you an honest assessment before you submit.',
  },
  {
    title: 'One In-House SEO, Content & Development Team',
    body: 'AdSense readiness often crosses several disciplines. Content quality, site structure, technical implementation, navigation, and SEO fundamentals can affect the overall condition of a website.',
    closing:
      'Our in-house team can address those areas together instead of treating approval as a single checklist item.',
  },
  {
    title: 'Site-Specific Diagnosis',
    body: 'Your rejection may not have the same cause as another publisher’s rejection.',
    closing:
      'We review your actual website, available AdSense feedback, content, structure, and technical setup before recommending changes.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Bangladesh and works with businesses and publishers serving both local and international audiences.',
    closing:
      'That allows us to account for different languages, website models, audiences, and market requirements instead of applying one generic publishing template.',
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
            <span>The Framecipher Standard // Competitive Differentiation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">AdSense Approval</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The final approval belongs to Google, so the honest value a team can add is a thorough
            review and real fixes.
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
