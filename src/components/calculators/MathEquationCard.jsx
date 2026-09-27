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
    <div className="border-2 border-frame-border bg-frame-bg p-4 sm:p-6 md:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 border-b border-frame-border/80 pb-3">
        <h4 className="min-w-0 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg [overflow-wrap:anywhere]">
          {equation.name}
        </h4>
        <span className="shrink-0 border border-frame-accent/40 bg-frame-accent/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
          Formula
        </span>
      </div>

      {/* Visual Stacked Textbook Equation Block */}
      <div className="-mx-1 overflow-x-auto px-1 py-3">
        <div className="inline-flex items-center gap-2 border border-frame-border/80 bg-frame-muted/15 px-3 py-4 sm:gap-3 sm:px-6 sm:py-5">
          {/* Left Hand Side */}
          <span className="whitespace-nowrap font-mono text-sm font-extrabold text-frame-accent sm:text-base md:text-xl">
            {equation.leftSide}
          </span>

          <span className="font-mono text-base font-bold text-frame-fg sm:text-lg md:text-2xl">
            =
          </span>

          {/* Right Hand Side: Stacked Fraction or Direct Expression */}
          {equation.numerator && equation.denominator ? (
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex flex-col items-center">
                {/* Numerator (Top) */}
                <div className="w-full whitespace-nowrap border-b-2 border-frame-accent px-2 pb-1 text-center font-mono text-[11px] font-bold text-frame-fg sm:px-3 sm:text-xs md:text-sm">
                  {equation.numerator}
                </div>
                {/* Denominator (Bottom) */}
                <div className="w-full whitespace-nowrap px-2 pt-1 text-center font-mono text-[11px] font-semibold text-frame-muted-fg sm:px-3 sm:text-xs md:text-sm">
                  {equation.denominator}
                </div>
              </div>
              {equation.suffix && (
                <span className="whitespace-nowrap font-mono text-[11px] font-bold text-frame-fg sm:text-xs md:text-sm">
                  {equation.suffix}
                </span>
              )}
            </div>
          ) : (
            <span className="font-mono text-[11px] font-bold text-frame-fg sm:text-xs md:text-sm">
              {equation.expression}
            </span>
          )}
        </div>
      </div>

      {/* Theoretical Explanation */}
      <p className="text-xs md:text-sm leading-relaxed text-frame-muted-fg">
        {equation.explanation}
      </p>

      {/* Worked Numerical Example */}
      {equation.example && (
        <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-4">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent mb-1">
            Worked Numerical Application:
          </div>
          <p className="font-mono text-xs text-frame-fg/90 leading-relaxed">
            {equation.example}
          </p>
        </div>
      )}
    </div>
  )
}
