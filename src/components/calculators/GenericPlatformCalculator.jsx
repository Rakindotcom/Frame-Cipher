'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { generateBrandedPdfReport } from '@/lib/pdf/generateBrandedReport'
import {
  Download,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'

export default function GenericPlatformCalculator({ config }) {
  const [currency, setCurrency] = useState('USD')
  const [revenueGoal, setRevenueGoal] = useState('50000')
  const [aov, setAov] = useState('120')
  const [margin, setMargin] = useState('45')
  const [cpcEstimate, setCpcEstimate] = useState(
    config.slug === 'linkedin-ads'
      ? '8.50'
      : config.slug === 'amazon-ads'
      ? '1.20'
      : config.slug === 'microsoft-ads'
      ? '1.80'
      : config.slug === 'pinterest-ads'
      ? '0.65'
      : config.slug === 'remarketing'
      ? '0.75'
      : '3.50'
  )
  const [cvrEstimate, setCvrEstimate] = useState(
    config.slug === 'remarketing'
      ? '6.5'
      : config.slug === 'lead-generation-ads'
      ? '8.0'
      : '2.5'
  )
  const [clientName, setClientName] = useState('')
  const [downloading, setDownloading] = useState(false)

  const n = (v) => {
    const f = parseFloat(v)
    return isFinite(f) ? f : 0
  }

  const calc = useMemo(() => {
    const GOAL = n(revenueGoal)
    const AOV = n(aov) || 1
    const MARGIN = n(margin)
    const COGS = 100 - MARGIN
    const CPC = n(cpcEstimate)
    const CVR = n(cvrEstimate) / 100

    const targetOrders = AOV > 0 ? GOAL / AOV : 0
    const costPerOrder = CVR > 0 ? CPC / CVR : 0
    const recommendedBudget = targetOrders * costPerOrder
    const clicksNeeded = CPC > 0 ? recommendedBudget / CPC : 0
    const impressionsNeeded = clicksNeeded * 60 // est ~1.6% CTR
    const roas = recommendedBudget > 0 ? GOAL / recommendedBudget : 0
    const cogsAmount = GOAL * (COGS / 100)
    const grossProfit = GOAL - recommendedBudget - cogsAmount
    const breakEvenROAS = COGS < 100 ? 1 / (1 - COGS / 100) : Infinity
    const breakEvenCPA = AOV * (1 - COGS / 100)

    // Platform-specific secondary KPIs
    let secondaryKpiLabel = 'Break-Even ROAS'
    let secondaryKpiValue = `${breakEvenROAS.toFixed(2)}x`

    if (config.slug === 'amazon-ads') {
      const acos = GOAL > 0 ? (recommendedBudget / GOAL) * 100 : 0
      secondaryKpiLabel = 'Target ACoS'
      secondaryKpiValue = `${acos.toFixed(1)}%`
    } else if (config.slug === 'linkedin-ads') {
      secondaryKpiLabel = 'Target Cost Per Lead'
      secondaryKpiValue = `$${(costPerOrder * 0.35).toFixed(2)}`
    }

    const scenarios = [
      {
        id: 'low',
        label: 'Validation Test',
        budget: recommendedBudget * 0.65,
        budgetFormatted: `$${Math.round(recommendedBudget * 0.65).toLocaleString()}`,
        conversions: Math.round(targetOrders * 0.65),
        revenueFormatted: `$${Math.round(GOAL * 0.65).toLocaleString()}`,
        roas: roas.toFixed(2),
        profitFormatted: `$${Math.round(grossProfit * 0.65).toLocaleString()}`,
        note: 'Low-spend testing flight to validate creative hooks and audience relevance.',
      },
      {
        id: 'recommended',
        label: 'Target Trajectory',
        budget: recommendedBudget,
        budgetFormatted: `$${Math.round(recommendedBudget).toLocaleString()}`,
        conversions: Math.round(targetOrders),
        revenueFormatted: `$${Math.round(GOAL).toLocaleString()}`,
        roas: roas.toFixed(2),
        profitFormatted: `$${Math.round(grossProfit).toLocaleString()}`,
        note: 'Calibrated to hit your exact revenue benchmark.',
      },
      {
        id: 'aggressive',
        label: 'Aggressive Scale',
        budget: recommendedBudget * 1.8,
        budgetFormatted: `$${Math.round(recommendedBudget * 1.8).toLocaleString()}`,
        conversions: Math.round(targetOrders * 1.8),
        revenueFormatted: `$${Math.round(GOAL * 1.8).toLocaleString()}`,
        roas: roas.toFixed(2),
        profitFormatted: `$${Math.round(grossProfit * 1.8).toLocaleString()}`,
        note: 'Outbids market competition and accelerates market share capture.',
      },
    ]

    const recommendations = [
      `Your product/service unit economics dictate a Break-Even ROAS of ${breakEvenROAS.toFixed(2)}x. Target ROAS is projected at ${roas.toFixed(2)}x.`,
      `Estimated CPC of $${CPC.toFixed(2)} with a ${n(cvrEstimate)}% CVR yields a projected CPA of $${costPerOrder.toFixed(2)}.`,
      `To generate $${GOAL.toLocaleString()} in revenue, your ${config.shortTitle} campaigns require approximately ${Math.round(clicksNeeded).toLocaleString()} clicks.`,
    ]

    const summaryParagraph = `To generate $${GOAL.toLocaleString()} in revenue via ${config.shortTitle} at an average value of $${AOV.toLocaleString()}, this campaign requires ~${Math.round(targetOrders)} conversions. At an estimated CPC of $${CPC.toFixed(2)} and ${n(cvrEstimate)}% CVR, recommended 30-day budget is $${Math.round(recommendedBudget).toLocaleString()}, yielding a projected ${roas.toFixed(2)}x ROAS.`

    return {
      recommendedBudget,
      targetOrders,
      costPerOrder,
      clicksNeeded,
      impressionsNeeded,
      roas,
      grossProfit,
      breakEvenROAS,
      breakEvenCPA,
      secondaryKpiLabel,
      secondaryKpiValue,
      scenarios,
      recommendations,
      summaryParagraph,
    }
  }, [revenueGoal, aov, margin, cpcEstimate, cvrEstimate, config])

  const handleDownloadPdf = async () => {
    setDownloading(true)
    try {
      await generateBrandedPdfReport({
        reportTitle: `${config.title} Blueprint`,
        platformName: config.shortTitle,
        clientName: clientName || 'Confidential Client',
        preparedBy: 'Frame Cipher Performance Team',
        currency,
        country: 'Primary Target Market',
        industry: 'Specified Vertical',
        summaryRows: [
          ['Recommended Ad Spend', `$${Math.round(calc.recommendedBudget).toLocaleString()}`],
          ['Projected Revenue', `$${Math.round(n(revenueGoal)).toLocaleString()}`],
          ['Projected ROAS', `${calc.roas.toFixed(2)}x`],
          [calc.secondaryKpiLabel, calc.secondaryKpiValue],
          ['Break-Even ROAS Hurdle', `${calc.breakEvenROAS.toFixed(2)}x`],
          ['Target CPA / Cost Per Result', `$${calc.costPerOrder.toFixed(2)}`],
          ['Projected Gross Profit', `$${Math.round(calc.grossProfit).toLocaleString()}`],
        ],
        funnelRows: [
          ['Forecast Ad Impressions', Math.round(calc.impressionsNeeded).toLocaleString()],
          ['Forecast Clicks', Math.round(calc.clicksNeeded).toLocaleString()],
          ['Target Completed Orders / Leads', Math.round(calc.targetOrders).toLocaleString()],
          ['Assumed CPC', `$${n(cpcEstimate).toFixed(2)}`],
          ['Assumed CVR', `${n(cvrEstimate)}%`],
        ],
        scenarios: calc.scenarios,
        recommendations: calc.recommendations,
        summaryParagraph: calc.summaryParagraph,
      })
    } catch (err) {
      console.error('PDF export failed:', err)
      alert('Could not export PDF. Check console log.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-10 space-y-8">
      {/* Simulator Inputs Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-frame-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              {config.badge} // Interactive Simulator
            </span>
          </div>
          <h3 className="mt-1 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            {config.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="flex items-center gap-2 border border-frame-accent bg-frame-accent/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg transition"
          >
            <Download className="h-3.5 w-3.5" />
            {downloading ? 'Compiling PDF...' : 'Download Branded PDF Report'}
          </button>
        </div>
      </div>

      {/* Input Controls */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
            Target Revenue Goal ($)
          </label>
          <input
            type="number"
            min="100"
            value={revenueGoal}
            onChange={(e) => setRevenueGoal(e.target.value)}
            className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
            Average Order / Deal Value ($)
          </label>
          <input
            type="number"
            min="1"
            value={aov}
            onChange={(e) => setAov(e.target.value)}
            className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
            Gross Margin (%)
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
            className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
          />
          <span className="text-[10px] text-frame-muted-fg">Margin remaining after product/labor costs</span>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
            Estimated CPC ($)
          </label>
          <input
            type="number"
            step="0.1"
            value={cpcEstimate}
            onChange={(e) => setCpcEstimate(e.target.value)}
            className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
          />
          <span className="text-[10px] text-frame-muted-fg">Average cost per click for {config.shortTitle}</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-frame-border bg-frame-bg p-5">
          <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
            Recommended Media Spend
          </div>
          <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-fg">
            ${Math.round(calc.recommendedBudget).toLocaleString()}
          </div>
          <div className="mt-1 text-xs text-frame-muted-fg">
            ~${Math.round(calc.recommendedBudget / 30).toLocaleString()} / day pacing
          </div>
        </div>

        <div className="border border-frame-border bg-frame-bg p-5">
          <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
            Target ROAS
          </div>
          <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-accent">
            {calc.roas.toFixed(2)}x
          </div>
          <div className="mt-1 text-xs text-frame-muted-fg">
            Break-even: {calc.breakEvenROAS.toFixed(2)}x
          </div>
        </div>

        <div className="border border-frame-border bg-frame-bg p-5">
          <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
            {calc.secondaryKpiLabel}
          </div>
          <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-emerald-400">
            {calc.secondaryKpiValue}
          </div>
          <div className="mt-1 text-xs text-frame-muted-fg">
            Cost per action: ${calc.costPerOrder.toFixed(2)}
          </div>
        </div>

        <div className="border border-frame-border bg-frame-bg p-5">
          <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
            Projected Gross Profit
          </div>
          <div className={`mt-2 font-mono text-2xl md:text-3xl font-black ${calc.grossProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            ${Math.round(calc.grossProfit).toLocaleString()}
          </div>
          <div className="mt-1 text-xs text-frame-muted-fg">
            After product cost & ad spend
          </div>
        </div>
      </div>

      {/* 3 Scenarios */}
      <div>
        <div className="mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
            Pacing Playbooks
          </span>
          <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
            3 Execution Scenarios
          </h4>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {calc.scenarios.map((sc) => (
            <div
              key={sc.id}
              className={`border-2 p-6 flex flex-col justify-between ${
                sc.id === 'recommended'
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${sc.id === 'recommended' ? 'text-frame-accent' : 'text-frame-muted-fg'}`}>
                    {sc.label}
                  </span>
                  {sc.id === 'recommended' && (
                    <span className="border border-frame-accent bg-frame-accent/20 px-2 py-0.5 text-[9px] font-black uppercase text-frame-accent">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="mt-3 font-mono text-2xl font-black text-frame-fg">
                  {sc.budgetFormatted}
                </div>
                <p className="mt-2 text-xs text-frame-muted-fg">{sc.note}</p>

                <div className="mt-4 space-y-1.5 border-t border-frame-border pt-4 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-frame-muted-fg">Conversions:</span>
                    <span className="font-bold text-frame-fg">{sc.conversions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-frame-muted-fg">Revenue:</span>
                    <span className="font-bold text-frame-fg">{sc.revenueFormatted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-frame-muted-fg">ROAS:</span>
                    <span className="font-bold text-frame-accent">{sc.roas}x</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-frame-border">
                <Link
                  href={`/contact?plan=${sc.id}&service=${config.slug}`}
                  className="block w-full py-2.5 text-center text-xs font-black uppercase tracking-wider border border-frame-border hover:border-frame-accent hover:text-frame-accent transition"
                >
                  Deploy This Model &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Synthesis */}
      <div className="border-l-2 border-frame-accent bg-frame-muted/20 p-5 text-xs md:text-sm text-frame-fg leading-relaxed">
        <strong className="text-frame-accent uppercase font-mono block text-xs mb-1">
          Strategic Summary:
        </strong>
        {calc.summaryParagraph}
      </div>
    </div>
  )
}
