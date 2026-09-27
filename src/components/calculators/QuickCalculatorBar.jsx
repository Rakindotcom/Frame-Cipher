'use client'

import { useState } from 'react'
import { Calculator, ArrowRight, TrendingUp, DollarSign, Percent, Target } from 'lucide-react'

export default function QuickCalculatorBar() {
  const [activeTab, setActiveTab] = useState('breakeven')

  // Tab 1: Break-Even ROAS
  const [margin, setMargin] = useState(40)
  const breakEvenROAS = margin > 0 ? (100 / margin).toFixed(2) : '—'
  const recommendedROAS = margin > 0 ? ((100 / margin) * 1.35).toFixed(2) : '—'

  // Tab 2: Target CPA / Allowable CAC
  const [aov, setAov] = useState(85)
  const [cogsPercent, setCogsPercent] = useState(50)
  const [targetNetProfitPercent, setTargetNetProfitPercent] = useState(15)
  const maxCpa = Math.max(0, aov * (1 - cogsPercent / 100)).toFixed(2)
  const targetCpa = Math.max(0, aov * (1 - cogsPercent / 100 - targetNetProfitPercent / 100)).toFixed(2)

  // Tab 3: CPM to CPC Estimator
  const [cpmInput, setCpmInput] = useState(12)
  const [ctrInput, setCtrInput] = useState(1.8)
  const estCpc = ctrInput > 0 ? (cpmInput / (10 * ctrInput)).toFixed(2) : '—'

  // Tab 4: Funnel Multiplier (CTR x CVR)
  const [ctrLift, setCtrLift] = useState(25)
  const [cvrLift, setCvrLift] = useState(25)
  const compoundMultiplier = ((1 + ctrLift / 100) * (1 + cvrLift / 100)).toFixed(2)
  const cpaReduction = (100 - (1 / ((1 + ctrLift / 100) * (1 + cvrLift / 100))) * 100).toFixed(1)

  return (
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-frame-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Instant Micro-Calculators
            </span>
          </div>
          <h3 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Rapid Advertising Math
          </h3>
        </div>
        <p className="text-xs md:text-sm font-medium text-frame-muted-fg max-w-md">
          Calculate your unit economics safeguards in 5 seconds before running full multi-channel simulations.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { id: 'breakeven', label: 'Break-Even ROAS', icon: Percent },
          { id: 'targetcpa', label: 'Max Allowable CPA', icon: Target },
          { id: 'cpmtocpc', label: 'CPM to CPC Converter', icon: DollarSign },
          { id: 'multiplier', label: 'Two-Stage Multiplier', icon: TrendingUp },
        ].map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all ${
                isActive
                  ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                  : 'border-frame-border bg-frame-muted/20 text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab Panels */}
      <div className="mt-6 border border-frame-border bg-frame-muted/10 p-5 md:p-6">
        {/* TAB 1: Break-Even ROAS */}
        {activeTab === 'breakeven' && (
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <div>
                <label className="flex items-baseline justify-between text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  <span>Product Gross Profit Margin (%)</span>
                  <span className="font-mono text-frame-accent">{margin}%</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="95"
                  step="1"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="mt-2 w-full accent-frame-accent cursor-pointer"
                />
                <p className="mt-1 text-[11px] text-frame-muted-fg">
                  Gross Margin = (Sale Price - Product COGS - Packaging - Processing Fees) / Sale Price
                </p>
              </div>

              <div className="border-l-2 border-frame-accent bg-frame-bg p-3 text-xs text-frame-muted-fg">
                <span className="font-bold text-frame-fg">Rule:</span> Any campaign ROAS below{' '}
                <span className="font-mono font-bold text-rose-400">{breakEvenROAS}x</span> burns cash on every single order.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-frame-border bg-frame-bg p-5 text-center">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                  Zero-Profit Hurdle
                </div>
                <div className="mt-2 font-mono text-3xl md:text-4xl font-black text-frame-fg">
                  {breakEvenROAS}x
                </div>
                <div className="mt-1 text-[10px] text-rose-400 uppercase font-bold">Break-Even ROAS</div>
              </div>
              <div className="border-l border-frame-border pl-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                  Target Safe Scale
                </div>
                <div className="mt-2 font-mono text-3xl md:text-4xl font-black text-emerald-400">
                  {recommendedROAS}x
                </div>
                <div className="mt-1 text-[10px] text-emerald-400 uppercase font-bold">Recommended ROAS</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Target CPA */}
        {activeTab === 'targetcpa' && (
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg block">
                  AOV ($ / ৳)
                </label>
                <input
                  type="number"
                  min="1"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value) || 0)}
                  className="mt-1 w-full border border-frame-border bg-frame-bg px-3 py-2 font-mono text-sm font-bold text-frame-fg outline-none focus:border-frame-accent"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg block">
                  COGS (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={cogsPercent}
                  onChange={(e) => setCogsPercent(Number(e.target.value) || 0)}
                  className="mt-1 w-full border border-frame-border bg-frame-bg px-3 py-2 font-mono text-sm font-bold text-frame-fg outline-none focus:border-frame-accent"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg block">
                  Desired Net (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={targetNetProfitPercent}
                  onChange={(e) => setTargetNetProfitPercent(Number(e.target.value) || 0)}
                  className="mt-1 w-full border border-frame-border bg-frame-bg px-3 py-2 font-mono text-sm font-bold text-frame-fg outline-none focus:border-frame-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-frame-border bg-frame-bg p-5 text-center">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                  Absolute Max CPA
                </div>
                <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-fg">
                  ${maxCpa}
                </div>
                <div className="mt-1 text-[10px] text-amber-400 uppercase font-bold">Zero-Profit Cap</div>
              </div>
              <div className="border-l border-frame-border pl-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                  Target Bidding CPA
                </div>
                <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-emerald-400">
                  ${targetCpa}
                </div>
                <div className="mt-1 text-[10px] text-emerald-400 uppercase font-bold">With {targetNetProfitPercent}% Profit</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CPM to CPC */}
        {activeTab === 'cpmtocpc' && (
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg block">
                  Auction CPM ($ / ৳)
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0.1"
                  value={cpmInput}
                  onChange={(e) => setCpmInput(Number(e.target.value) || 0)}
                  className="mt-1 w-full border border-frame-border bg-frame-bg px-3 py-2 font-mono text-sm font-bold text-frame-fg outline-none focus:border-frame-accent"
                />
                <span className="text-[10px] text-frame-muted-fg">Cost per 1,000 views</span>
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg block">
                  Click-Through Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="15"
                  value={ctrInput}
                  onChange={(e) => setCtrInput(Number(e.target.value) || 0)}
                  className="mt-1 w-full border border-frame-border bg-frame-bg px-3 py-2 font-mono text-sm font-bold text-frame-fg outline-none focus:border-frame-accent"
                />
                <span className="text-[10px] text-frame-muted-fg">Clicks / impressions</span>
              </div>
            </div>

            <div className="border border-frame-border bg-frame-bg p-5 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                Resulting Effective Cost Per Click
              </div>
              <div className="mt-2 font-mono text-3xl md:text-4xl font-black text-frame-accent">
                ${estCpc}
              </div>
              <div className="mt-1 text-[11px] text-frame-muted-fg">
                Formula: CPC = CPM / (10 × CTR%)
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Multiplier */}
        {activeTab === 'multiplier' && (
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <div>
                <label className="flex items-baseline justify-between text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  <span>Creative CTR Improvement</span>
                  <span className="font-mono text-frame-accent">+{ctrLift}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={ctrLift}
                  onChange={(e) => setCtrLift(Number(e.target.value))}
                  className="mt-2 w-full accent-frame-accent cursor-pointer"
                />
              </div>
              <div>
                <label className="flex items-baseline justify-between text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                  <span>Landing Page CVR Improvement</span>
                  <span className="font-mono text-frame-accent">+{cvrLift}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={cvrLift}
                  onChange={(e) => setCvrLift(Number(e.target.value))}
                  className="mt-2 w-full accent-frame-accent cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-frame-border bg-frame-bg p-5 text-center">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                  Conversion Multiplier
                </div>
                <div className="mt-2 font-mono text-3xl md:text-4xl font-black text-emerald-400">
                  +{((Number(compoundMultiplier) - 1) * 100).toFixed(0)}%
                </div>
                <div className="mt-1 text-[10px] text-emerald-400 uppercase font-bold">
                  {compoundMultiplier}x Total Output
                </div>
              </div>
              <div className="border-l border-frame-border pl-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg">
                  CPA Reduction
                </div>
                <div className="mt-2 font-mono text-3xl md:text-4xl font-black text-frame-accent">
                  -{cpaReduction}%
                </div>
                <div className="mt-1 text-[10px] text-frame-accent uppercase font-bold">
                  Cheaper Acquisitions
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
