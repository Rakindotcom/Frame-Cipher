'use client'

import React from 'react'

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
    <section id="comparison" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            MVP vs Prototype vs <span className="italic text-frame-accent">PoC vs Full Product.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            These terms are often used interchangeably, but they serve different purposes.
          </p>
        </div>

        {/* Architectural Comparison Table on #121214 Surface */}
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-[#18181b]/60 font-mono text-xs uppercase tracking-wider text-zinc-300">
                <tr>
                  {stageComparison.headers.map((h, i) => (
                    <th key={i} className="p-4 sm:p-5 border-r border-white/[0.08] last:border-r-0 text-white font-medium">
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
                        className={`p-4 sm:p-5 border-r border-white/[0.08] last:border-r-0 ${
                          cIdx === 0
                            ? 'font-heading font-medium text-white whitespace-nowrap text-base'
                            : cIdx === 2
                            ? 'font-mono text-xs text-frame-accent'
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
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-2">01</span>
            <h4 className="font-heading text-lg font-medium text-white">Proof of Concept (PoC)</h4>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              A PoC can be useful when technical feasibility is the biggest uncertainty. It answers whether a technical approach can work before any user-facing software is designed.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-2">02</span>
            <h4 className="font-heading text-lg font-medium text-white">Interactive Prototype</h4>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              A prototype can be appropriate when you need to test an idea or user experience before building working software, validating user flows with stakeholders or test users.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-2">03</span>
            <h4 className="font-heading text-lg font-medium text-white">MVP &amp; Full Product</h4>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              An MVP goes further. It contains enough working functionality for real users to interact with the product and generate meaningful evidence. A full product normally expands beyond initial validation with deeper infrastructure and broader integrations.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

