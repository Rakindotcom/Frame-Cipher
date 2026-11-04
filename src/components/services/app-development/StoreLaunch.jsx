'use client'

import React from 'react'

const storeLaunchPillars = [
  {
    title: 'Release Preparation',
    desc: 'Preparing the production build, configuration, release information, and required assets.',
  },
  {
    title: 'Store Listing Support',
    desc: 'Supporting required app information, screenshots, descriptions, categories, and other submission materials where included.',
  },
  {
    title: 'Google Play Submission',
    desc: 'Preparing and submitting the Android application through the Google Play release process.',
  },
  {
    title: 'Apple App Store Submission',
    desc: "Preparing and submitting the iOS application through Apple's publishing workflow.",
  },
  {
    title: 'Review Feedback',
    desc: 'If Apple or Google requests changes, we can help identify the required technical or product updates for resubmission.',
  },
]

export default function StoreLaunch() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            App Store &amp;{' '}
            <span className="italic text-frame-accent">Google Play Launch.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Development does not end when the application builds successfully. We can support the preparation and submission process for the relevant app stores.
          </p>
        </div>

        {/* Modality 2: Architectural 5-Column Divided Band */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] sm:grid-cols-2 lg:grid-cols-5 lg:divide-y-0 lg:divide-x">
          {storeLaunchPillars.map((pillar, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 sm:p-7 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            Final approval remains under the control of Apple and Google.
          </p>
        </div>
      </div>
    </section>
  )
}
