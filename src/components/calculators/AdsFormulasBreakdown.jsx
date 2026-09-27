'use client'

import { useState } from 'react'
import { ADS_FORMULAS_EXPLAINED } from '@/data/calculators/adsFormulas'
import {
  Cpu,
  ArrowRight,
  TrendingUp,
  Percent,
  Calculator,
  CheckCircle2,
  Layers,
} from 'lucide-react'

export default function AdsFormulasBreakdown() {
  const [selectedFormulaId, setSelectedFormulaId] = useState(ADS_FORMULAS_EXPLAINED[0].id)
  const activeFormula =
    ADS_FORMULAS_EXPLAINED.find((f) => f.id === selectedFormulaId) ??
    ADS_FORMULAS_EXPLAINED[0]

  return (
    <div className="border-2 border-frame-border bg-frame-bg p-4 sm:p-6 md:p-10" id="mathematical-derivations">
      {/* Header */}
      <div className="border-b border-frame-border pb-6">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-frame-accent" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
            Under the Hood // Mathematical Derivations
          </span>
        </div>
        <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          How the Performance Math Works
        </h3>
        <p className="mt-2 max-w-2xl text-xs md:text-sm text-frame-muted-fg leading-relaxed">
          The exact mathematical models, auction algorithms, and unit economics equations that power our advertising calculators and client media plans.
        </p>
      </div>

      {/* Formula Selector Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {ADS_FORMULAS_EXPLAINED.map((formula, idx) => {
          const isSelected = selectedFormulaId === formula.id
          return (
            <button
              key={formula.id}
              onClick={() => setSelectedFormulaId(formula.id)}
              className={`border px-4 py-2.5 text-xs font-black uppercase tracking-wider transition ${
                isSelected
                  ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                  : 'border-frame-border bg-frame-muted/20 text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg'
              }`}
            >
              0{idx + 1}. {formula.title.split('. ')[1] || formula.title}
            </button>
          )
        })}
      </div>

      {/* Active Formula Display Panel */}
      <div className="mt-8 border border-frame-border bg-frame-muted/10 p-6 md:p-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
            {activeFormula.subtitle}
          </span>
          <h4 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            {activeFormula.title}
          </h4>
          <p className="mt-2 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
            {activeFormula.summary}
          </p>
        </div>

        {/* Step-by-Step Breakdown */}
        <div className="space-y-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-frame-accent block">
            Mathematical Sequence & Step-by-Step Logic
          </span>

          <div className="grid gap-4 md:grid-cols-2">
            {activeFormula.steps.map((step, idx) => (
              <div key={idx} className="border border-frame-border bg-frame-bg p-5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-frame-accent">
                    {step.step}
                  </div>
                  <div className="my-2 border border-frame-border/60 bg-frame-muted/20 px-3 py-2 font-mono text-xs font-bold text-frame-fg">
                    {step.formula}
                  </div>
                </div>
                <p className="text-xs text-frame-muted-fg leading-relaxed mt-2">
                  {step.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Worked Numerical Example */}
        <div className="border border-frame-border bg-frame-bg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Worked Numerical Scenario
            </span>
          </div>

          <div className="border-l-2 border-emerald-400 bg-frame-muted/10 p-3 text-xs font-mono text-frame-fg mb-4">
            <strong>Input Variables:</strong> {activeFormula.workedExample.inputs}
          </div>

          <div className="space-y-2">
            {activeFormula.workedExample.calculations.map((calcLine, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-frame-muted-fg">
                <span className="font-mono text-frame-accent font-bold mt-0.5">[{i + 1}]</span>
                <span className="font-mono text-frame-fg/90">{calcLine}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
