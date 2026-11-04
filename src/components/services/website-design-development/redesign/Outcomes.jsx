'use client'

import React from 'react'

const improvements = [
  {
    title: 'Better User Experience',
    description: 'Clearer navigation, stronger information hierarchy, easier interactions, and fewer unnecessary steps help visitors find what they need faster.',
  },
  {
    title: 'Stronger Conversion Paths',
    description: 'Visitors should understand what to do next, whether that means contacting your team, requesting a quote, booking a service, buying a product, or exploring more content.',
  },
  {
    title: 'Faster Performance',
    description: 'The redesign should address the technical causes of slow pages instead of relying only on superficial image or asset compression.',
  },
  {
    title: 'Better Mobile Experience',
    description: 'Important pages, forms, navigation, content, and conversion actions should work properly across smaller screens and different devices.',
  },
  {
    title: 'Stronger SEO Foundations',
    description: 'The new structure should protect valuable SEO assets while creating a cleaner technical and content foundation for future growth.',
  },
  {
    title: 'Easier Content Management',
    description: 'Your team should be able to update important content without fighting an outdated, restrictive, or unnecessarily complicated system.',
  },
  {
    title: 'Better Measurement',
    description: 'Analytics, forms, conversion tracking, and important business events should remain measurable after the redesign so future improvements can be based on real data.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What a Successful{' '}
            <span className="italic text-frame-accent">Website Redesign Should Improve.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A redesign should produce more than a newer-looking interface. The finished website should make important parts of the business easier to use, manage, find, and measure.
          </p>
        </div>

        {/* 7 Outcomes Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {improvements.map((imp, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Outcome 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {imp.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {imp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
