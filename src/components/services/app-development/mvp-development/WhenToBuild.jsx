'use client'

import React from 'react'
import { Check, AlertCircle } from 'lucide-react'

const mvpSenseConditions = [
  "You have identified a specific problem to solve",
  "You know who the initial users are",
  "Real user behavior needs to be tested",
  "A prototype cannot answer the main question",
  "You need usage or transaction data",
  "You want evidence before a larger investment",
  "You need to test a core product workflow",
  "You want to validate demand before expanding development"
]

export default function WhenToBuild() {
  return (
    <section id="when-to-build" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            When Should You <span className="italic text-frame-accent">Build an MVP?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An MVP is useful when you have enough clarity about the problem to build a focused solution, but important uncertainty still remains.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: When an MVP Makes Sense */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.16]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 block mb-2">
                &bull; Positive Signals
              </span>
              <h3 className="font-heading text-2xl font-medium text-white">
                When an MVP Makes Sense
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                An MVP is appropriate when your product satisfies these criteria:
              </p>

              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-300">
                {mvpSenseConditions.map((cond, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-4 font-mono text-xs text-frame-accent">
              The MVP should answer a defined question rather than attempt to represent the entire future product.
            </div>
          </div>

          {/* Card 2: When You May Need a Prototype or PoC First */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 transition-colors hover:border-white/[0.16]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400 block mb-2">
                &bull; Alternative Starting Points
              </span>
              <h3 className="font-heading text-2xl font-medium text-white">
                When You May Need a Prototype or PoC First
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                An MVP is not always the first step. Depending on your uncertainties:
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
                <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4">
                  <h4 className="font-heading text-sm font-medium text-white">Prototype Preferred:</h4>
                  <p className="text-zinc-400 mt-1">
                    A prototype may be more appropriate when the main uncertainty is the user experience, interface adoption, or product concept.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4">
                  <h4 className="font-heading text-sm font-medium text-white">Proof of Concept (PoC) Preferred:</h4>
                  <p className="text-zinc-400 mt-1">
                    A PoC may be more appropriate when the main uncertainty is whether a specialized technical or algorithmic approach can work.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4">
                  <h4 className="font-heading text-sm font-medium text-white">Customer Research First:</h4>
                  <p className="text-zinc-400 mt-1">
                    You may also need more customer discovery before development if the target problem, audience, or value proposition is still unclear.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-4 flex items-start gap-2.5 font-mono text-xs text-amber-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
              <span>
                Strategic Safeguard: Choosing the right starting point prevents spending development budget before you know what needs to be tested.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

