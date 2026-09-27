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
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-frame-border/80 pb-3">
        <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
          {equation.name}
        </h4>
        <span className="border border-frame-accent/40 bg-frame-accent/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
          Formula
        </span>
      </div>

      {/* Visual Stacked Textbook Equation Block */}
      <div className="overflow-x-auto py-3">
        <div className="inline-flex items-center gap-3 border border-frame-border/80 bg-frame-muted/15 px-6 py-5">
          {/* Left Hand Side */}
          <span className="font-mono text-base md:text-xl font-extrabold text-frame-accent whitespace-nowrap">
            {equation.leftSide}
          </span>

          <span className="font-mono text-lg md:text-2xl font-bold text-frame-fg">
            =
          </span>

          {/* Right Hand Side: Stacked Fraction or Direct Expression */}
          {equation.numerator && equation.denominator ? (
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex flex-col items-center">
                {/* Numerator (Top) */}
                <div className="text-center font-mono text-xs md:text-sm font-bold text-frame-fg px-3 pb-1 border-b-2 border-frame-accent w-full whitespace-nowrap">
                  {equation.numerator}
                </div>
                {/* Denominator (Bottom) */}
                <div className="text-center font-mono text-xs md:text-sm font-semibold text-frame-muted-fg px-3 pt-1 w-full whitespace-nowrap">
                  {equation.denominator}
                </div>
              </div>
              {equation.suffix && (
                <span className="font-mono text-xs md:text-sm font-bold text-frame-fg whitespace-nowrap">
                  {equation.suffix}
                </span>
              )}
            </div>
          ) : (
            <span className="font-mono text-xs md:text-sm font-bold text-frame-fg">
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
