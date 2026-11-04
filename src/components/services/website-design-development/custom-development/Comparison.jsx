'use client'

import React from 'react'

const comparisonData = [
  {
    requirement: 'Custom application logic',
    nextjs: 'Strong fit',
    wordpress: 'Possible with development',
    platforms: 'More limited for complex logic',
    highlight: 'nextjs',
  },
  {
    requirement: 'Content-driven websites',
    nextjs: 'Strong',
    wordpress: 'Strong',
    platforms: 'Strong for many use cases',
  },
  {
    requirement: 'Visual editing',
    nextjs: 'Depends on CMS setup',
    wordpress: 'Strong with the right setup',
    platforms: 'Strong',
  },
  {
    requirement: 'Complex integrations',
    nextjs: 'Strong',
    wordpress: 'Strong with development',
    platforms: 'Depends on available integrations',
    highlight: 'nextjs',
  },
  {
    requirement: 'SaaS / dashboards',
    nextjs: 'Strong fit',
    wordpress: 'Possible with additional architecture',
    platforms: 'Usually less suitable',
    highlight: 'nextjs',
  },
  {
    requirement: 'Headless architecture',
    nextjs: 'Strong fit',
    wordpress: 'Strong option',
    platforms: 'Depends on platform',
    highlight: 'nextjs',
  },
  {
    requirement: 'Technical flexibility',
    nextjs: 'High',
    wordpress: 'High with development',
    platforms: 'Varies by platform',
    highlight: 'nextjs',
  },
  {
    requirement: 'Platform maintenance',
    nextjs: 'More development responsibility',
    wordpress: 'More ongoing management',
    platforms: 'Lower for many hosted solutions',
  },
  {
    requirement: 'Best fit',
    nextjs: 'Custom websites, applications, SaaS, portals, advanced systems',
    wordpress: 'Content-driven and extensible CMS websites',
    platforms: 'Businesses prioritizing managed editing and faster implementation',
  },
]

export default function Comparison() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js vs WordPress,{' '}
            <span className="italic text-frame-accent">Webflow &amp; Other Platforms.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The right technology depends on what your website or application needs to accomplish.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full text-left min-w-[720px]">
            <thead className="border-b border-white/[0.08] bg-white/[0.02]">
              <tr>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">Requirement</th>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-frame-accent">Next.js</th>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">WordPress</th>
                <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">Webflow / Hosted Platforms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-5 font-medium text-white">{row.requirement}</td>
                  <td className={`p-5 ${row.highlight === 'nextjs' ? 'font-medium text-frame-accent' : 'text-zinc-300'}`}>
                    {row.nextjs}
                  </td>
                  <td className="p-5 text-zinc-400">{row.wordpress}</td>
                  <td className="p-5 text-zinc-400">{row.platforms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs sm:text-sm italic text-zinc-400">
          We recommend the platform based on your requirements, budget, internal team, content workflow, integrations, and long-term plans.
        </p>
      </div>
    </section>
  )
}
