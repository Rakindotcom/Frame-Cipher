'use client'

import { useState } from 'react'
import {
  METRIC_CATEGORIES,
  ADS_METRICS,
} from '@/data/calculators/adsMetricsGlossary'
import {
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  HelpCircle,
  Layers,
} from 'lucide-react'

export default function AdsMetricsHandbook() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedMetricId, setExpandedMetricId] = useState('roas')

  const filteredMetrics = ADS_METRICS.filter((metric) => {
    const matchesCategory =
      selectedCategory === 'all' || metric.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      metric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      metric.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      metric.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      metric.importance.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-10" id="metrics-encyclopedia">
      {/* Section Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-frame-border pb-8">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-frame-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
              Knowledge Base // Diagnostics
            </span>
          </div>
          <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            The Digital Advertising Metrics Encyclopedia
          </h3>
          <p className="mt-2 max-w-2xl text-xs md:text-sm text-frame-muted-fg leading-relaxed">
            Every critical performance advertising metric mathematically decoded. Includes healthy cross-industry benchmarks and tactical diagnostic playbooks for when performance drops.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-72">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-frame-muted-fg" />
            <input
              type="text"
              placeholder="Search metrics (e.g. ROAS, CPA, QS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-frame-border bg-frame-muted/10 py-2.5 pl-9 pr-3 text-xs text-frame-fg placeholder:text-frame-muted-fg outline-none focus:border-frame-accent"
            />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {METRIC_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`border px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                isSelected
                  ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                  : 'border-frame-border bg-frame-muted/20 text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Metrics Accordion List */}
      <div className="mt-8 space-y-4">
        {filteredMetrics.length === 0 ? (
          <div className="border border-frame-border p-8 text-center text-frame-muted-fg">
            No metrics matched your search &quot;{searchQuery}&quot;. Try searching for ROAS, CPA, CTR, or CPM.
          </div>
        ) : (
          filteredMetrics.map((metric) => {
            const isExpanded = expandedMetricId === metric.id
            return (
              <div
                key={metric.id}
                className={`border-2 transition-all ${
                  isExpanded
                    ? 'border-frame-accent bg-frame-muted/10'
                    : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
                }`}
              >
                {/* Metric Header Bar */}
                <button
                  onClick={() => setExpandedMetricId(isExpanded ? null : metric.id)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xl md:text-2xl font-black text-frame-fg">
                      {metric.name}
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-frame-muted-fg">
                      // {metric.fullName}
                    </span>
                    <span className="border border-frame-accent/40 bg-frame-accent/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
                      {metric.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden sm:block text-right font-mono text-xs text-frame-muted-fg">
                      Formula: {metric.formula}
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-frame-accent" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-frame-muted-fg" />
                    )}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-frame-border/80 p-5 md:p-8 space-y-6">
                    {/* Definition & Formula Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-frame-accent">
                          Definition & Interpretation
                        </span>
                        <p className="text-xs md:text-sm leading-relaxed text-frame-fg">
                          {metric.description}
                        </p>
                        <div className="border-l-2 border-frame-border bg-frame-muted/20 p-3 text-xs text-frame-muted-fg leading-relaxed">
                          <strong className="text-frame-fg">Why it matters:</strong> {metric.importance}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-frame-accent">
                          Mathematical Equation
                        </span>
                        <div className="border border-frame-border bg-frame-bg p-4 font-mono text-xs md:text-sm font-bold text-frame-accent">
                          {metric.formula}
                        </div>
                        <div className="text-[11px] text-frame-muted-fg">
                          <strong className="text-frame-fg uppercase font-mono">Platform Nuance:</strong>{' '}
                          {metric.platformNuance}
                        </div>
                      </div>
                    </div>

                    {/* Benchmarks Grid */}
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-frame-accent block mb-3">
                        Healthy Benchmark Ranges by Industry
                      </span>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <div className="border border-frame-border bg-frame-bg p-3">
                          <span className="text-[10px] font-bold uppercase text-frame-muted-fg block">
                            E-Commerce / Retail
                          </span>
                          <span className="font-mono text-xs md:text-sm font-bold text-frame-fg mt-1 block">
                            {metric.benchmarks.ecommerce}
                          </span>
                        </div>
                        <div className="border border-frame-border bg-frame-bg p-3">
                          <span className="text-[10px] font-bold uppercase text-frame-muted-fg block">
                            B2B & SaaS
                          </span>
                          <span className="font-mono text-xs md:text-sm font-bold text-frame-fg mt-1 block">
                            {metric.benchmarks.b2b}
                          </span>
                        </div>
                        <div className="border border-frame-border bg-frame-bg p-3">
                          <span className="text-[10px] font-bold uppercase text-frame-muted-fg block">
                            Lead Generation
                          </span>
                          <span className="font-mono text-xs md:text-sm font-bold text-frame-fg mt-1 block">
                            {metric.benchmarks.leadgen}
                          </span>
                        </div>
                        <div className="border border-frame-border bg-frame-bg p-3">
                          <span className="text-[10px] font-bold uppercase text-frame-muted-fg block">
                            Local & Services
                          </span>
                          <span className="font-mono text-xs md:text-sm font-bold text-frame-fg mt-1 block">
                            {metric.benchmarks.local}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Diagnostic Action Plan */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="h-4 w-4 text-amber-400" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400">
                          Diagnostic Troubleshooting: What To Fix If This Metric is Underperforming
                        </span>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {metric.troubleshooting.map((fix, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 border border-frame-border bg-frame-bg p-3 text-xs text-frame-muted-fg"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                            <span>{fix}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
