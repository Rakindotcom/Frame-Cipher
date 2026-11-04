'use client'

import React from 'react'
import { Check } from 'lucide-react'

const includesModules = [
  {
    tag: '01',
    title: 'Site Audit & Diagnosis',
    intro: 'Every project starts with understanding what is underperforming and why.',
    subhead: 'What We Review:',
    items: [
      'Technical performance and mobile responsiveness',
      'Crawl and indexing issues',
      'Existing website structure',
      'Content quality and organization',
      'User journeys and conversion paths',
      'Existing rankings and organic traffic',
      'Backlinks and important URLs',
      'Analytics and available performance data',
    ],
    outro: 'The audit turns redesign decisions from assumptions into a practical plan.',
  },
  {
    tag: '02',
    title: 'UX & Information Architecture',
    intro: 'A redesign should make it easier for visitors to find information and complete important actions.',
    subhead: 'We can review and improve:',
    items: [
      'Navigation',
      'Sitemap and page hierarchy',
      'User journeys',
      'Content relationships',
      'Calls to action',
      'Forms and inquiry paths',
      'Product and category structures',
      'Mobile navigation',
    ],
    outro: null,
  },
  {
    tag: '03',
    title: 'Visual Redesign',
    intro: 'We modernize the visual experience around the needs identified during the audit.',
    subhead: 'This can include:',
    items: [
      'Updated layouts',
      'Typography and visual hierarchy',
      'Brand alignment',
      'UI components',
      'Page templates',
      'Visual consistency',
      'Responsive layouts',
      'Mobile-first interface improvements',
    ],
    outro: 'The objective is not to change everything for the sake of change. The design should solve the problems identified during the discovery stage.',
  },
  {
    tag: '04',
    title: 'Technical Rebuild & Performance',
    intro: 'When the existing technical foundation is part of the problem, the redesign may require deeper development work.',
    subhead: 'This can include:',
    items: [
      'Platform migration',
      'Frontend redevelopment',
      'Legacy code cleanup',
      'Performance optimization',
      'Responsive implementation',
      'CMS improvements',
      'Third-party integrations',
      'API connections',
      'Technical architecture improvements',
    ],
    outro: null,
  },
  {
    tag: '05',
    title: 'Testing & Launch',
    intro: 'Before launch, we test the redesigned website across the areas that matter to users and search engines.',
    subhead: 'This can include:',
    items: [
      'Mobile and desktop testing',
      'Cross-browser testing',
      'Forms and conversion actions',
      'Navigation and internal links',
      'Redirects',
      'Tracking',
      'Page speed',
      'Technical SEO',
      'Structured data',
      'Broken links',
      'Indexability',
    ],
    outro: null,
  },
]

export default function Included() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What Your Website{' '}
            <span className="italic text-frame-accent">Redesign Includes.</span>
          </h2>
        </div>

        {/* 5 Modules Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {includesModules.map((mod, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  {mod.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white">
                  {mod.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                  {mod.intro}
                </p>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-zinc-300 border-t border-white/[0.08] pt-4">
                  {mod.subhead}
                </p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-300">
                  {mod.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                        <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {mod.outro && (
                <p className="mt-6 border-t border-white/[0.08] pt-4 text-xs italic text-zinc-400 leading-relaxed">
                  {mod.outro}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
