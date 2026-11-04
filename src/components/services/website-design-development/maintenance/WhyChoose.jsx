'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const whyFramecipherPillars = [
  {
    title: 'One In-House Team',
    description: 'Security, updates, backups, monitoring, content support, and technical maintenance stay coordinated within one team.',
  },
  {
    title: 'Platform-Specific Maintenance',
    description: 'We adapt maintenance to the actual platform and website type rather than applying one generic checklist to every site.',
  },
  {
    title: 'Proactive Monitoring',
    description: 'The goal is to identify issues before they become customer-facing problems wherever monitoring can detect them.',
  },
  {
    title: 'Tested Backup & Recovery Approach',
    description: 'Backups are treated as part of a recovery process, not simply as files stored somewhere in the background.',
  },
  {
    title: 'Transparent Reporting',
    description: 'You receive clear information about completed maintenance work, detected issues, and recommended next steps.',
  },
  {
    title: 'Direct Team Access',
    description: 'You work with a team that already understands your website instead of repeatedly explaining the same setup to a new support contact.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'When a website has outgrown its existing platform, we can recommend redesign, migration, or custom development rather than forcing every problem into a maintenance plan.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Why Choose Framecipher for{' '}
                <span className="italic text-frame-accent">Website Maintenance.</span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                Website maintenance works best when the team understands the website before problems appear.
              </p>

              {/* Stat Card */}
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-2">
                <p className="font-mono text-3xl font-medium text-white">99.9%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Targeted Availability &amp; Rapid SLA
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Proactive checks detect vulnerabilities, broken workflows, and slow database queries before they impact real customers.
                </p>
              </div>

              <div>
                <PosterButton href="/contact" variant="accent" className="w-full sm:w-auto">
                  Start Your Maintenance Plan
                </PosterButton>
              </div>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214]">
              {whyFramecipherPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums tracking-wider text-frame-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 pl-8">
                    <AutoLinks currentPath="/services/website-design-development/maintenance" allowed={["/services/website-design-development/custom-development"]}>
                      {pillar.description}
                    </AutoLinks>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
