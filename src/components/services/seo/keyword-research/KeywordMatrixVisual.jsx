'use client'

import React, { useState, useEffect } from 'react'
import { Search, TrendingUp, Target, DollarSign } from 'lucide-react'

const keywords = [
  {
    term: 'b2b crm software pricing comparison',
    vol: '18.4K',
    kd: '34%',
    intent: 'Commercial',
    intentColor: '#9F67FF',
    cpc: '$19.20',
    opportunity: 'High',
  },
  {
    term: 'best enterprise crm for sales teams',
    vol: '22.1K',
    kd: '41%',
    intent: 'Transactional',
    intentColor: '#10B981',
    cpc: '$24.50',
    opportunity: 'Very High',
  },
  {
    term: 'how to build customer retention workflow',
    vol: '14.8K',
    kd: '22%',
    intent: 'Informational',
    intentColor: '#38BDF8',
    cpc: '$6.80',
    opportunity: 'Quick Win',
  },
  {
    term: 'cloud crm migration checklist 2026',
    vol: '9.2K',
    kd: '28%',
    intent: 'Commercial',
    intentColor: '#9F67FF',
    cpc: '$14.10',
    opportunity: 'High',
  },
]

export default function KeywordMatrixVisual() {
  const [activeIdx, setActiveIdx] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % keywords.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto w-full select-none">
      {/* Ambient Glow */}
      <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-blue-500/15 to-emerald-500/15 blur-3xl pointer-events-none" />

      {/* Main Glass Chassis — Clean, Zero Outside Clutter */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0E0E12] shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05]">
        
        {/* Minimal macOS Window Dots Only (No header text strings) */}
        <div className="flex items-center gap-2 bg-[#141418] px-4 py-3 border-b border-white/[0.08]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]/90" />
        </div>

        {/* Dashboard Body */}
        <div className="p-4 sm:p-5 bg-[#09090B] space-y-3.5">
          
          {/* Query Bar */}
          <div className="flex items-center justify-between rounded-xl bg-[#141418] px-3.5 py-2.5 border border-white/[0.08]">
            <div className="flex items-center gap-2.5 min-w-0">
              <Search className="h-4 w-4 text-frame-accent shrink-0" />
              <span className="font-mono text-xs text-white truncate">
                cluster: &quot;enterprise b2b crm&quot;
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-400 border border-emerald-500/30 shrink-0">
              High Intent
            </span>
          </div>

          {/* Metric Stats Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/[0.06] bg-[#141418] p-2.5">
              <div className="flex items-center justify-between text-zinc-400 font-mono text-[9px]">
                <span>Total Vol</span>
                <TrendingUp className="h-3 w-3 text-emerald-400" />
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-white">64.5K</div>
              <span className="font-mono text-[9px] text-zinc-500">monthly searches</span>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-[#141418] p-2.5">
              <div className="flex items-center justify-between text-zinc-400 font-mono text-[9px]">
                <span>Avg KD</span>
                <Target className="h-3 w-3 text-amber-400" />
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-amber-400">31%</div>
              <span className="font-mono text-[9px] text-zinc-500">opportunity score</span>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-[#141418] p-2.5">
              <div className="flex items-center justify-between text-zinc-400 font-mono text-[9px]">
                <span>Top CPC</span>
                <DollarSign className="h-3 w-3 text-frame-accent" />
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-white">$24.50</div>
              <span className="font-mono text-[9px] text-zinc-500">commercial value</span>
            </div>
          </div>

          {/* Keyword Cluster Rows */}
          <div className="space-y-2">
            {keywords.map((kw, idx) => {
              const isSelected = activeIdx === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'border-frame-accent/50 bg-frame-accent/10 text-white shadow-sm ring-1 ring-frame-accent/20'
                      : 'border-white/[0.04] bg-[#141418] text-zinc-300 hover:border-white/[0.1] hover:bg-[#16161B]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: kw.intentColor }}
                    />
                    <span className="font-sans text-[11px] font-medium truncate">{kw.term}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] shrink-0">
                    <span className="text-emerald-400 font-semibold">{kw.vol}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-amber-400">KD {kw.kd}</span>
                    <span className="text-zinc-600">·</span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[9px] font-semibold"
                      style={{
                        backgroundColor: `${kw.intentColor}20`,
                        color: kw.intentColor,
                        border: `1px solid ${kw.intentColor}40`,
                      }}
                    >
                      {kw.intent}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </div>
  )
}
