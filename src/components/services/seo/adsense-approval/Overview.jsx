'use client'

import React from 'react'

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Readiness Strategy // Before You Apply</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Prepare Your Website for a{' '}
            <span className="italic text-frame-accent">Successful AdSense Review</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AdSense approval is not about finding a secret article count or using a shortcut. Google expects sites to provide useful, original content, offer a good user experience, comply with its policies, and meet its eligibility requirements.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Our job is to identify what is holding your site back, fix the issues we can address, and give you an honest assessment of whether the site is ready to submit.
          </p>
        </div>

        {/* Editorial Callout */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 border-l-4 border-l-frame-accent">
          <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
            You get a site-specific preparation process instead of a generic checklist copied from outdated AdSense advice.
          </p>
        </div>
      </div>
    </section>
  )
}
