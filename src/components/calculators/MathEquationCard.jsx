'use client'

import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react'

/**
 * MathEquationCard
 * Renders mathematical equations with real stacked vertical fraction bars
 * (Numerator / Denominator) exactly as written in academic math textbooks.
 */
export default function MathEquationCard({ equation }) {
  if (!equation) return null

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-5 hover:border-white/[0.14] transition-colors duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 border-b border-white/[0.08] pb-4">
        <h4 className="min-w-0 font-heading text-lg md:text-xl font-medium tracking-tight text-white [overflow-wrap:anywhere]">
          {equation.name}
        </h4>
        <span className="shrink-0 rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-widest text-frame-accent">
          Formula
        </span>
      </div>

      {/* Visual Stacked Textbook Equation Block */}
      <div className="w-full min-w-0 max-w-full overflow-x-auto py-2">
        <div className="inline-flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.08] bg-black/60 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
          {/* Left Hand Side */}
          <span className="whitespace-nowrap font-mono text-sm font-semibold text-frame-accent sm:text-base md:text-xl tabular-nums">
            {equation.leftSide}
          </span>

          <span className="font-mono text-base font-medium text-white sm:text-lg md:text-2xl">
            =
          </span>

          {/* Right Hand Side: Stacked Fraction or Direct Expression */}
          {equation.numerator && equation.denominator ? (
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex flex-col items-center">
                {/* Numerator (Top) */}
                <div className="w-full whitespace-nowrap border-b-2 border-frame-accent px-2 pb-1 text-center font-mono text-[11px] font-semibold text-white sm:px-3 sm:text-xs md:text-sm tabular-nums">
                  {equation.numerator}
                </div>
                {/* Denominator (Bottom) */}
                <div className="w-full whitespace-nowrap px-2 pt-1 text-center font-mono text-[11px] font-medium text-zinc-400 sm:px-3 sm:text-xs md:text-sm tabular-nums">
                  {equation.denominator}
                </div>
              </div>
              {equation.suffix && (
                <span className="whitespace-nowrap font-mono text-[11px] font-semibold text-white sm:text-xs md:text-sm">
                  {equation.suffix}
                </span>
              )}
            </div>
          ) : (
            <span className="font-mono text-[11px] font-semibold text-white sm:text-xs md:text-sm tabular-nums">
              {equation.expression}
            </span>
          )}
        </div>
      </div>

      {/* Theoretical Explanation */}
      <p className="text-xs md:text-sm leading-relaxed text-zinc-400 break-words [overflow-wrap:anywhere] wide:text-lg">
        {equation.explanation}
      </p>

      {/* Worked Numerical Example */}
      {equation.example && (
        <div className="w-full min-w-0 max-w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#18181B] border-l-2 border-l-frame-accent p-4">
          <div className="text-[10px] font-mono font-medium uppercase tracking-widest text-frame-accent mb-1">
            Worked Numerical Application:
          </div>
          <p className="font-mono text-xs text-zinc-300 leading-relaxed break-words [overflow-wrap:anywhere] tabular-nums">
            {equation.example}
          </p>
        </div>
      )}
    </div>
  )
}
