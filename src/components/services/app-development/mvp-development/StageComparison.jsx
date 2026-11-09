'use client'

import React from 'react'
import { Cpu, Layout, Rocket } from 'lucide-react'

const stageComparison = {
  headers: ["Product Stage", "Main Question", "Typical Users", "Primary Purpose"],
  rows: [
    [
      "Proof of Concept (PoC)",
      "Can the technical approach work?",
      "Internal team",
      "Test technical feasibility"
    ],
    [
      "Prototype",
      "Does the concept or user flow make sense?",
      "Stakeholders or test users",
      "Test experience and concept"
    ],
    [
      "MVP",
      "Will real users use or pay for the core solution?",
      "Early real users",
      "Validate the product assumption"
    ],
    [
      "Full Product",
      "How do we serve a broader market reliably?",
      "Larger user base",
      "Expand functionality and scale"
    ]
  ]
}

export default function StageComparison() {
  return (
    <section id="comparison" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            MVP vs Prototype vs PoC vs Full Product.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            These terms are often used interchangeably, but they serve different purposes.
          </p>
        </div>

        {/* Architectural Comparison Table */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] shadow-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-[#121214] font-mono text-xs uppercase tracking-wider text-purple-400">
                <tr>
                  {stageComparison.headers.map((h, i) => (
                    <th key={i} className="p-4 sm:p-5 border-r border-white/10 last:border-r-0 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-sans">
                {stageComparison.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="transition-colors hover:bg-white/[0.02]">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`p-4 sm:p-5 border-r border-white/10 last:border-r-0 ${
                          cIdx === 0
                            ? 'font-heading font-medium text-white whitespace-nowrap text-base'
                            : cIdx === 2
                            ? 'font-mono text-xs text-purple-400'
                            : 'text-zinc-300'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Detail Cards Explaining the Stages */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">01</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-white">Proof of Concept (PoC)</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                A PoC can be useful when technical feasibility is the biggest uncertainty. It answers whether a technical approach can work before any user-facing software is designed.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                  <Layout className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">02</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-white">Interactive Prototype</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                A prototype can be appropriate when you need to test an idea or user experience before building working software, validating user flows with stakeholders or test users.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                  <Rocket className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">03</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium text-white">MVP &amp; Full Product</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                An MVP goes further. It contains enough working functionality for real users to interact with the product and generate meaningful evidence. A full product normally expands beyond initial validation with deeper infrastructure and broader integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
