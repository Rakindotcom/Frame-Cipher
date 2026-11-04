'use client'

import React from 'react'
import { GitCompare, CheckCircle2 } from 'lucide-react'

const maintenanceVsDevelopment = {
  headers: ['Situation', 'Appropriate Approach'],
  rows: [
    ['Existing app works but needs regular updates', 'Maintenance'],
    ['Existing feature needs improvement', 'Feature Enhancement'],
    ['Codebase has growing technical limitations', 'Modernization'],
    ['Architecture is no longer practical to maintain', 'Redevelopment'],
    ['Application needs a completely different product direction', 'New Development'],
  ],
}

const approachesDetail = [
  {
    num: '01',
    title: 'Maintenance',
    desc: 'Choose maintenance when the existing application remains suitable for your business and mainly needs ongoing technical support.',
  },
  {
    num: '02',
    title: 'Feature Enhancement',
    desc: 'Choose feature enhancement when the core application is stable but you need additional functionality or improvements.',
  },
  {
    num: '03',
    title: 'Major Modernization',
    desc: 'Modernization may be appropriate when the application needs significant technical improvements while preserving important parts of the existing product.',
  },
  {
    num: '04',
    title: 'Complete Redevelopment',
    desc: 'Redevelopment may make more sense when the existing architecture has become too difficult or costly to maintain.',
  },
]

export default function MaintenanceVsNewDev() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            App Maintenance vs.{' '}
            <span className="italic text-frame-accent">New Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every software challenge requires building a brand new application. We evaluate your current technical state before recommending the most cost-effective path.
          </p>
        </div>

        {/* Comparison Matrix Table on #121214 */}
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-black/40 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {maintenanceVsDevelopment.headers.map((h, i) => (
                    <th key={i} className="p-4 sm:p-5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {maintenanceVsDevelopment.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="p-4 sm:p-5 font-normal text-zinc-300">
                      {row[0]}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs font-semibold text-frame-accent">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-frame-accent/10 px-3 py-1 text-frame-accent">
                        <CheckCircle2 className="h-3 w-3" />
                        {row[1]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Detail Approach Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachesDetail.map((app, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors hover:border-white/[0.16]"
            >
              <span className="font-mono text-xs text-zinc-500 block mb-2">
                {app.num}
              </span>
              <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                {app.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm font-mono text-zinc-400 pt-4 border-t border-white/[0.06]">
          * We assess the application before recommending the appropriate path so you never overpay for unnecessary rebuilds.
        </p>
      </div>
    </section>
  )
}

