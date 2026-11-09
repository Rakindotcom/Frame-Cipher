'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'

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
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            App Maintenance vs. New Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every software challenge requires building a brand new application. We evaluate your current technical state before recommending the most cost-effective path.
          </p>
        </div>

        {/* Comparison Matrix Table on #0D0D0F */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#121214] font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {maintenanceVsDevelopment.headers.map((h, i) => (
                    <th key={i} className="p-4 sm:p-5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {maintenanceVsDevelopment.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="p-4 sm:p-5 font-normal text-zinc-300">
                      {row[0]}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs font-semibold text-purple-400">
                      {/* Directive 17 compliant: Clean unboxed cell with icon */}
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                        <span>{row[1]}</span>
                      </div>
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
            >
              <div>
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
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm font-mono text-zinc-400 pt-4 border-t border-white/10">
          * We assess the application before recommending the appropriate path so you never overpay for unnecessary rebuilds.
        </p>
      </div>
    </section>
  )
}
