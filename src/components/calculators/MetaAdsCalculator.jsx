'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  COUNTRIES,
  INDUSTRIES,
  OBJECTIVES,
  PLACEMENTS,
  COMPETITION_LEVELS,
  SEASONS,
  CURRENCIES,
} from '@/data/calculators/metaAdsData'
import {
  ArrowRight,
  Download,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  RotateCcw,
  BarChart3,
  Sliders,
  AlertCircle,
  HelpCircle,
} from 'lucide-react'

const STEPS = [
  { id: 1, label: 'Market & Industry' },
  { id: 2, label: 'Campaign Architecture' },
  { id: 3, label: 'Revenue & Unit Economics' },
  { id: 4, label: 'Advanced Overrides' },
  { id: 5, label: 'Performance Forecast' },
]

function fmtMoney(n, currency) {
  if (!isFinite(n)) return 'N/A'
  const sym = CURRENCIES[currency]?.symbol ?? '$'
  const rounded = Math.round(n * 100) / 100
  return `${sym}${rounded.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: rounded % 1 === 0 ? 0 : 2,
  })}`
}

function fmtMoneyPdf(n, currency) {
  const rounded = Math.round(n * 100) / 100
  const formatted = rounded.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: rounded % 1 === 0 ? 0 : 2,
  })
  if (!isFinite(n)) return 'N/A'
  if (currency === 'BDT') return `BDT ${formatted}`
  return fmtMoney(n, currency)
}

function fmtNum(n, decimals = 0) {
  if (!isFinite(n)) return 'N/A'
  return Number(n.toFixed(decimals)).toLocaleString('en-US', { maximumFractionDigits: decimals })
}

function fmtPct(n, decimals = 1) {
  if (!isFinite(n)) return 'N/A'
  return `${n.toFixed(decimals)}%`
}

function convertFromUsd(usdValue, currency) {
  const rate = CURRENCIES[currency]?.usdRate ?? 1
  return usdValue * rate
}

function valueLabel(objective) {
  switch (objective.id) {
    case 'app-promotion':
      return 'Value per install (LTV)'
    case 'leads':
      return 'Value per lead'
    case 'engagement':
      return 'Value per engagement'
    default:
      return 'Average order value (AOV)'
  }
}

export default function MetaAdsCalculator({ onLeadSubmit }) {
  const [step, setStep] = useState(1)

  // Step 1
  const [countryId, setCountryId] = useState('BD')
  const [currency, setCurrency] = useState('BDT')
  const [industryId, setIndustryId] = useState('ecommerce')

  // Step 2
  const [objectiveId, setObjectiveId] = useState('sales')
  const [placementId, setPlacementId] = useState('auto')
  const [competitionId, setCompetitionId] = useState('medium')
  const [seasonId, setSeasonId] = useState('normal')

  // Step 3
  const [revenueGoal, setRevenueGoal] = useState('150000')
  const [aov, setAov] = useState('1800')
  const [profitMargin, setProfitMargin] = useState('35')
  const [days, setDays] = useState('30')

  // Step 4: Overrides
  const [cpmOverride, setCpmOverride] = useState('')
  const [ctrOverride, setCtrOverride] = useState('')
  const [cvrOverride, setCvrOverride] = useState('')
  const [freqOverride, setFreqOverride] = useState('')

  // Report & Lead Capture
  const [clientName, setClientName] = useState('')
  const [preparedBy, setPreparedBy] = useState('Frame Cipher Media Team')
  const [lead, setLead] = useState({ name: '', email: '', phone: '', company: '' })
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const n = (v) => {
    const f = parseFloat(v)
    return isFinite(f) ? f : 0
  }

  const country = COUNTRIES.find((c) => c.id === countryId) ?? COUNTRIES[0]
  const industry = INDUSTRIES.find((i) => i.id === industryId) ?? INDUSTRIES[0]
  const objective = OBJECTIVES.find((o) => o.id === objectiveId) ?? OBJECTIVES[0]
  const placement = PLACEMENTS.find((p) => p.id === placementId) ?? PLACEMENTS[0]
  const competition = COMPETITION_LEVELS.find((c) => c.id === competitionId) ?? COMPETITION_LEVELS[1]
  const season = SEASONS.find((s) => s.id === seasonId) ?? SEASONS[0]

  const calc = useMemo(() => {
    const baseCpmUsd =
      industry.cpm *
      country.cpmMultiplier *
      placement.cpmMult *
      competition.cpmMult *
      season.cpmMult

    const baseCtr = industry.ctr * objective.ctrMult
    const baseCvr = industry.cvr * objective.cvrMult
    const baseFreq = industry.freq

    const effectiveCpm = cpmOverride !== '' ? n(cpmOverride) : convertFromUsd(baseCpmUsd, currency)
    const effectiveCtr = ctrOverride !== '' ? n(ctrOverride) : baseCtr
    const effectiveCvr = cvrOverride !== '' ? n(cvrOverride) : baseCvr
    const effectiveFreq = freqOverride !== '' ? n(freqOverride) : baseFreq

    const AOV = n(aov)
    const MARGIN = n(profitMargin)
    const COGS = 100 - MARGIN
    const DAYS = n(days) || 1
    const REVENUE_GOAL = n(revenueGoal)

    const effectiveCpc = effectiveCtr > 0 ? effectiveCpm / (10 * effectiveCtr) : 0
    const costPerConversion = effectiveCvr > 0 ? (effectiveCpc / (effectiveCvr / 100)) / 0.94 : 0

    const targetConversions = AOV > 0 ? REVENUE_GOAL / AOV : 0
    const recommendedBudget = targetConversions * costPerConversion
    const dailyBudget = recommendedBudget / DAYS

    const computeFunnel = (usedBudget) => {
      const impressions = effectiveCpm > 0 ? (usedBudget / effectiveCpm) * 1000 : 0
      const reach = effectiveFreq > 0 ? impressions / effectiveFreq : impressions
      const clicks = effectiveCpc > 0 ? usedBudget / effectiveCpc : 0
      const landingPageVisits = clicks * 0.94
      const conversions = landingPageVisits * (effectiveCvr / 100)
      const cpa = conversions > 0 ? usedBudget / conversions : 0
      const revenue = conversions * AOV
      const roas = usedBudget > 0 ? revenue / usedBudget : 0
      const cogsAmount = revenue * (COGS / 100)
      const grossProfit = revenue - usedBudget - cogsAmount
      const profitMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0
      const roi = usedBudget > 0 ? (grossProfit / usedBudget) * 100 : 0
      const breakEvenROAS = COGS < 100 ? 1 / (1 - COGS / 100) : Infinity
      const breakEvenCPA = AOV * (1 - COGS / 100)

      return {
        usedBudget,
        impressions,
        reach,
        clicks,
        landingPageVisits,
        conversions,
        cpa,
        revenue,
        roas,
        cogsAmount,
        grossProfit,
        profitMarginPct,
        roi,
        breakEvenROAS,
        breakEvenCPA,
      }
    }

    const main = computeFunnel(recommendedBudget)

    const lowMult = competition.id === 'low' ? 0.6 : competition.id === 'medium' ? 0.7 : 0.8
    const aggressiveMult = competition.id === 'very-high' ? 2.1 : competition.id === 'high' ? 1.8 : 1.5

    const scenarioDefs = [
      { id: 'low', label: 'Conservative Testing', mult: lowMult, note: 'Safe sandbox testing budget to validate hook rates & CVR.' },
      { id: 'recommended', label: 'Target Trajectory', mult: 1.0, note: 'Engineered directly to hit your specific revenue target.' },
      { id: 'aggressive', label: 'Aggressive Scale', mult: aggressiveMult, note: 'Outbids category rivals and unlocks rapid volume expansion.' },
    ]

    const scenarios = scenarioDefs.map((s) => {
      const scenarioBudget = recommendedBudget * s.mult
      const f = computeFunnel(scenarioBudget)
      return { ...s, budget: scenarioBudget, ...f }
    })

    // Strategic Diagnostic Recommendations
    const recommendations = []
    if (effectiveCtr < industry.ctr * 0.85) {
      recommendations.push(
        `Projected CTR (${effectiveCtr.toFixed(2)}%) is below the ${industry.label} benchmark (${industry.ctr}%). The first 3 seconds of your video or headline hook is losing user attention. Test 3 new hook angles immediately.`
      )
    } else {
      recommendations.push(
        `Projected CTR (${effectiveCtr.toFixed(2)}%) is at or above industry benchmark. Your creative messaging has strong stopping power.`
      )
    }

    if (effectiveCvr < industry.cvr * 0.85) {
      recommendations.push(
        `Projected conversion rate (${effectiveCvr.toFixed(2)}%) sits under benchmark (${industry.cvr}%). Optimize your mobile checkout friction, review page speed, or introduce one-click payment options.`
      )
    } else {
      recommendations.push(
        `On-site conversion rate assumption (${effectiveCvr.toFixed(2)}%) is healthy. Focus on maintaining offer clarity as spend scales.`
      )
    }

    recommendations.push(
      `Your product unit economics require a minimum ${main.breakEvenROAS.toFixed(2)}x ROAS just to break even. Aim for at least ${(main.breakEvenROAS * 1.35).toFixed(2)}x for solid bottom-line EBITDA.`
    )

    if (main.roas >= main.breakEvenROAS * 1.3) {
      recommendations.push(
        `At the target spend, projected ROAS is ${main.roas.toFixed(2)}x, leaving strong margin to aggressively scale spend into the Aggressive scenario.`
      )
    } else if (main.roas < main.breakEvenROAS) {
      recommendations.push(
        `CRITICAL: Projected ROAS (${main.roas.toFixed(2)}x) is below your break-even threshold (${main.breakEvenROAS.toFixed(2)}x). Do NOT scale ad spend until you lift AOV via bundles or improve conversion rate.`
      )
    }

    if (competition.id === 'high' || competition.id === 'very-high') {
      recommendations.push(
        `High category competition is inflating CPMs by 25%–55%. Advantage+ Shopping and broad demographic targeting will prevent audience bidding overlap.`
      )
    }

    const summaryParagraph = `To generate ${fmtMoney(REVENUE_GOAL, currency)} in gross revenue at a ${fmtMoney(AOV, currency)} AOV in ${industry.label}, your Meta campaigns must generate approximately ${fmtNum(targetConversions, 1)} ${objective.conversionLabel.toLowerCase()}. At an estimated ${effectiveCtr.toFixed(2)}% CTR and ${effectiveCvr.toFixed(2)}% CVR, this requires roughly ${fmtNum(main.clicks)} clicks from ${fmtNum(main.impressions)} impressions. The recommended ${DAYS}-day media budget is ${fmtMoney(recommendedBudget, currency)} in ${country.label}, delivering a projected ${main.roas.toFixed(2)}x ROAS and ${fmtMoney(main.grossProfit, currency)} gross profit.`

    return {
      effectiveCpm,
      effectiveCtr,
      effectiveCvr,
      effectiveFreq,
      effectiveCpc,
      costPerConversion,
      targetConversions,
      recommendedBudget,
      dailyBudget,
      main,
      scenarios,
      recommendations,
      summaryParagraph,
    }
  }, [
    country,
    currency,
    industry,
    objective,
    placement,
    competition,
    season,
    revenueGoal,
    aov,
    profitMargin,
    days,
    cpmOverride,
    ctrOverride,
    cvrOverride,
    freqOverride,
  ])

  const maxLog = Math.log10(Math.max(calc.main.impressions, 10) + 1)

  const handleDownloadPdf = async () => {
    setDownloading(true)
    try {
      const { default: jsPDF } = await import('jspdf')
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const marginX = 40
      const contentWidth = pageWidth - marginX * 2
      let y = 60

      pdf.setFillColor('#0A0A0A')
      pdf.rect(0, 0, pageWidth, pageHeight, 'F')

      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(18)
      pdf.setTextColor('#A855F7')
      pdf.text('FRAME CIPHER // PERFORMANCE FORECAST', marginX, y)
      y += 24

      pdf.setFontSize(11)
      pdf.setTextColor('#EDEDED')
      pdf.text(`Prepared for: ${clientName || 'Confidential Client'}  |  Author: ${preparedBy}`, marginX, y)
      y += 18
      pdf.text(`Market: ${country.label} (${currency})  |  Industry: ${industry.label}  |  Objective: ${objective.label}`, marginX, y)
      y += 30

      pdf.setDrawColor('#262626')
      pdf.line(marginX, y, pageWidth - marginX, y)
      y += 20

      // Financial Metrics
      pdf.setFontSize(14)
      pdf.setTextColor('#A855F7')
      pdf.text('KEY FINANCIAL FORECAST', marginX, y)
      y += 20

      const drawPdfRow = (k, v) => {
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(10)
        pdf.setTextColor('#A1A1AA')
        pdf.text(k, marginX + 10, y)
        pdf.setFont('helvetica', 'bold')
        pdf.setTextColor('#FFFFFF')
        pdf.text(String(v), marginX + 260, y)
        y += 18
      }

      drawPdfRow('Recommended Ad Budget', fmtMoneyPdf(calc.recommendedBudget, currency))
      drawPdfRow('Daily Spend Pacing', fmtMoneyPdf(calc.dailyBudget, currency))
      drawPdfRow('Projected Revenue', fmtMoneyPdf(calc.main.revenue, currency))
      drawPdfRow('Projected ROAS', `${calc.main.roas.toFixed(2)}x`)
      drawPdfRow('Estimated Cost Per Acquisition (CPA)', fmtMoneyPdf(calc.main.cpa, currency))
      drawPdfRow('Break-Even ROAS Hurdle', `${calc.main.breakEvenROAS.toFixed(2)}x`)
      drawPdfRow('Projected Gross Profit (after COGS & Ads)', fmtMoneyPdf(calc.main.grossProfit, currency))
      drawPdfRow('Return on Investment (ROI)', fmtPct(calc.main.roi))

      y += 15
      pdf.setDrawColor('#262626')
      pdf.line(marginX, y, pageWidth - marginX, y)
      y += 20

      pdf.setFontSize(14)
      pdf.setTextColor('#A855F7')
      pdf.text('FUNNEL PROJECTION METRICS', marginX, y)
      y += 20

      drawPdfRow('Ad Impressions', fmtNum(calc.main.impressions))
      drawPdfRow('Unique Audience Reach', fmtNum(calc.main.reach))
      drawPdfRow('Link Clicks', fmtNum(calc.main.clicks))
      drawPdfRow('Landing Page Visits (94% retention)', fmtNum(calc.main.landingPageVisits))
      drawPdfRow(`Target Conversions (${objective.conversionLabel})`, fmtNum(calc.main.conversions, 1))
      drawPdfRow('Effective CPM', fmtMoneyPdf(calc.effectiveCpm, currency))
      drawPdfRow('Effective CPC', fmtMoneyPdf(calc.effectiveCpc, currency))

      y += 25
      pdf.setFontSize(10)
      pdf.setTextColor('#71717A')
      pdf.text('Generated by Frame Cipher Growth Intelligence Suite | https://framecipher.com', marginX, pageHeight - 30)

      pdf.save(`frame-cipher-meta-forecast-${Date.now()}.pdf`)
    } catch (err) {
      console.error('PDF generation error:', err)
      alert('PDF generation could not complete. Check console log.')
    } finally {
      setDownloading(false)
    }
  }

  const handleLead = (e) => {
    e.preventDefault()
    if (onLeadSubmit) {
      onLeadSubmit({
        platform: 'Meta Ads',
        currency,
        recommendedBudget: calc.recommendedBudget,
        revenueGoal,
        industry: industry.label,
        country: country.label,
        ...lead,
      })
    }
    setLeadSubmitted(true)
  }

  return (
    <div className="space-y-10">
      {/* Wizard Step Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-frame-border pb-4">
        {STEPS.map((s, idx) => (
          <div key={s.id} className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => s.id < step && setStep(s.id)}
              disabled={s.id > step}
              className={`flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center text-xs font-mono font-bold transition-all ${
                s.id === step
                  ? 'border-2 border-frame-accent bg-frame-accent text-frame-accent-fg'
                  : s.id < step
                  ? 'border border-frame-accent/40 bg-frame-accent/10 text-frame-accent'
                  : 'border border-frame-border bg-frame-muted/10 text-frame-muted-fg'
              }`}
            >
              0{s.id}
            </button>
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                s.id === step ? 'text-frame-fg' : 'text-frame-muted-fg'
              }`}
            >
              {s.label}
            </span>
            {idx < STEPS.length - 1 && <span className="mx-2 h-px w-6 bg-frame-border" />}
          </div>
        ))}
      </div>

      {/* STEP 1: Market & Industry */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 01 // Geography & Market Selection
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Where Are You Advertising & In What Industry?
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              This initializes baseline CPM, CTR, and Conversion Rate benchmarks based on verified regional and vertical medians.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Target Country
              </label>
              <select
                value={countryId}
                onChange={(e) => setCountryId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-frame-bg text-frame-fg">
                    {c.label} ({c.currency})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Accounting Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {Object.entries(CURRENCIES).map(([k, v]) => (
                  <option key={k} value={k} className="bg-frame-bg text-frame-fg">
                    {v.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Industry Vertical
              </label>
              <select
                value={industryId}
                onChange={(e) => setIndustryId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {INDUSTRIES.map((i) => (
                  <option key={i.id} value={i.id} className="bg-frame-bg text-frame-fg">
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Industry Baseline Card */}
          <div className="border border-frame-border bg-frame-muted/10 p-5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-frame-accent">
              {industry.label} Baseline Reference (US Normal)
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 text-center sm:grid-cols-4">
              <div className="border-r border-frame-border pr-2">
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Base CPM</span>
                <p className="font-mono text-lg font-bold text-frame-fg">${industry.cpm}</p>
              </div>
              <div className="border-r border-frame-border pr-2">
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Base CTR</span>
                <p className="font-mono text-lg font-bold text-frame-fg">{industry.ctr}%</p>
              </div>
              <div className="border-r border-frame-border pr-2">
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Base CVR</span>
                <p className="font-mono text-lg font-bold text-frame-fg">{industry.cvr}%</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Ref ROAS</span>
                <p className="font-mono text-lg font-bold text-frame-accent">{industry.roas}x</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-end">
            <button
              onClick={() => setStep(2)}
              className="flex w-full items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg sm:w-auto"
            >
              Continue to Campaign Setup <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Campaign Architecture */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 02 // Campaign Architecture & Auction Dynamics
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Campaign Objective & Placement Surface
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Placement choice and seasonal market demand shift auction CPMs significantly.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Campaign Objective
              </label>
              <select
                value={objectiveId}
                onChange={(e) => setObjectiveId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {OBJECTIVES.map((o) => (
                  <option key={o.id} value={o.id} className="bg-frame-bg text-frame-fg">
                    {o.label}: {o.note}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Placement Strategy
              </label>
              <select
                value={placementId}
                onChange={(e) => setPlacementId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {PLACEMENTS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-frame-bg text-frame-fg">
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Market Competition Level
              </label>
              <select
                value={competitionId}
                onChange={(e) => setCompetitionId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {COMPETITION_LEVELS.map((c) => (
                  <option key={c.id} value={c.id} className="bg-frame-bg text-frame-fg">
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Seasonality / Auction Load
              </label>
              <select
                value={seasonId}
                onChange={(e) => setSeasonId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {SEASONS.map((s) => (
                  <option key={s.id} value={s.id} className="bg-frame-bg text-frame-fg">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setStep(1)}
              className="w-full justify-center border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex w-full items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg sm:w-auto"
            >
              Continue to Financial Goals <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Goals & Unit Economics */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 03 // Financial Goals & Unit Economics
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Revenue Goal & Margin Assumptions
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Your profit margin directly dictates your Break-Even ROAS and maximum allowable acquisition cost.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Target Revenue Goal ({currency})
              </label>
              <input
                type="number"
                min="0"
                value={revenueGoal}
                onChange={(e) => setRevenueGoal(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
              <span className="text-[11px] text-frame-muted-fg">Expected gross sales target</span>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                {valueLabel(objective)} ({currency})
              </label>
              <input
                type="number"
                min="1"
                value={aov}
                onChange={(e) => setAov(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
              <span className="text-[11px] text-frame-muted-fg">Average cart / transaction size</span>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Gross Profit Margin (%)
              </label>
              <input
                type="number"
                min="1"
                max="99"
                value={profitMargin}
                onChange={(e) => setProfitMargin(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
              <span className="text-[11px] text-frame-muted-fg">Margin remaining after COGS & shipping</span>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Campaign Flight Duration (Days)
              </label>
              <input
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
              <span className="text-[11px] text-frame-muted-fg">Typical: 30 days for monthly planning</span>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setStep(2)}
              className="w-full justify-center border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
            >
              Back
            </button>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setStep(4)}
                className="w-full justify-center border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
              >
                Optional Overrides
              </button>
              <button
                onClick={() => setStep(5)}
                className="flex w-full items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg sm:w-auto"
              >
                Calculate Results <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Advanced Overrides */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 04 // Custom Account Overrides (Optional)
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Have Historical Account Data?
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Leave blank to use our empirical industry benchmarks, or enter your verified historical figures.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Custom CPM ({currency})
              </label>
              <input
                type="number"
                step="any"
                placeholder={`Benchmark: ${fmtMoney(calc.effectiveCpm, currency)}`}
                value={cpmOverride}
                onChange={(e) => setCpmOverride(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-sm text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Custom CTR (%)
              </label>
              <input
                type="number"
                step="0.1"
                placeholder={`Benchmark: ${calc.effectiveCtr.toFixed(2)}%`}
                value={ctrOverride}
                onChange={(e) => setCtrOverride(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-sm text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Custom CVR (%)
              </label>
              <input
                type="number"
                step="0.1"
                placeholder={`Benchmark: ${calc.effectiveCvr.toFixed(2)}%`}
                value={cvrOverride}
                onChange={(e) => setCvrOverride(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-sm text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Custom Frequency
              </label>
              <input
                type="number"
                step="0.1"
                placeholder={`Benchmark: ${calc.effectiveFreq.toFixed(1)}`}
                value={freqOverride}
                onChange={(e) => setFreqOverride(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-sm text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={() => setStep(3)}
              className="w-full justify-center border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
            >
              Back
            </button>
            <button
              onClick={() => setStep(5)}
              className="flex w-full items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg sm:w-auto"
            >
              View Results Forecast <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Results & Full Forecast */}
      {step === 5 && (
        <div className="space-y-10">
          {/* Header Summary */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-frame-border pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Simulation Computed Successfully
                </span>
              </div>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Meta Ads Performance Blueprint
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 border border-frame-border px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Adjust Parameters
              </button>
              <button
                onClick={handleDownloadPdf}
                disabled={downloading}
                className="flex items-center gap-2 border border-frame-accent bg-frame-accent/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg transition"
              >
                <Download className="h-3.5 w-3.5" /> {downloading ? 'Compiling PDF...' : 'Export Client PDF'}
              </button>
            </div>
          </div>

          {/* Primary Financial KPI Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-5">
              <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
                Recommended Budget
              </div>
              <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-fg">
                {fmtMoney(calc.recommendedBudget, currency)}
              </div>
              <div className="mt-1 text-xs text-frame-muted-fg">
                {fmtMoney(calc.dailyBudget, currency)} / day pacing
              </div>
            </div>

            <div className="border border-frame-border bg-frame-bg p-5">
              <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
                Target ROAS
              </div>
              <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-accent">
                {calc.main.roas.toFixed(2)}x
              </div>
              <div className="mt-1 text-xs text-frame-muted-fg">
                Break-even: <span className="text-amber-400 font-bold">{calc.main.breakEvenROAS.toFixed(2)}x</span>
              </div>
            </div>

            <div className="border border-frame-border bg-frame-bg p-5">
              <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
                Projected Gross Profit
              </div>
              <div className={`mt-2 font-mono text-2xl md:text-3xl font-black ${calc.main.grossProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {fmtMoney(calc.main.grossProfit, currency)}
              </div>
              <div className="mt-1 text-xs text-frame-muted-fg">
                ROI: {fmtPct(calc.main.roi)}
              </div>
            </div>

            <div className="border border-frame-border bg-frame-bg p-5">
              <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
                Cost Per {objective.conversionLabel}
              </div>
              <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-fg">
                {fmtMoney(calc.main.cpa, currency)}
              </div>
              <div className="mt-1 text-xs text-frame-muted-fg">
                Max allowable: {fmtMoney(calc.main.breakEvenCPA, currency)}
              </div>
            </div>
          </div>

          {/* Interactive Conversion Funnel Bar */}
          <div className="border border-frame-border bg-frame-bg p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-frame-border pb-4">
              <div>
                <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  Funnel Drop-Off & Delivery Velocity
                </h4>
                <p className="text-xs text-frame-muted-fg">
                  Logarithmic throughput visualization from ad impressions down to revenue realization.
                </p>
              </div>
              <span className="font-mono text-xs text-frame-accent">94% LP retention modeled</span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: 'Ad Impressions', val: calc.main.impressions, display: fmtNum(calc.main.impressions), color: 'bg-zinc-600' },
                { label: 'Audience Reach', val: calc.main.reach, display: fmtNum(calc.main.reach), color: 'bg-zinc-500' },
                { label: 'Link Clicks', val: calc.main.clicks, display: fmtNum(calc.main.clicks), color: 'bg-purple-600' },
                { label: 'Landing Page Visits', val: calc.main.landingPageVisits, display: fmtNum(calc.main.landingPageVisits), color: 'bg-purple-500' },
                { label: `${objective.conversionLabel} Completed`, val: calc.main.conversions, display: fmtNum(calc.main.conversions, 1), color: 'bg-emerald-500' },
              ].map((stepItem, idx) => {
                const logVal = Math.log10(Math.max(stepItem.val, 1) + 1)
                const widthPct = Math.max(10, Math.min(100, (logVal / maxLog) * 100))
                return (
                  <div key={idx}>
                    <div className="flex items-baseline justify-between text-xs mb-1">
                      <span className="font-medium text-frame-muted-fg">{stepItem.label}</span>
                      <span className="font-mono font-bold text-frame-fg">{stepItem.display}</span>
                    </div>
                    <div className="h-2.5 w-full bg-frame-muted/20">
                      <div className={`h-full ${stepItem.color}`} style={{ width: `${widthPct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 3 Scaling Scenarios */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
                Execution Playbooks
              </span>
              <h4 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                3 Scenarios for Your Media Plan
              </h4>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {calc.scenarios.map((sc) => {
                const isTarget = sc.id === 'recommended'
                return (
                  <div
                    key={sc.id}
                    className={`flex flex-col justify-between border-2 p-6 transition-all ${
                      isTarget
                        ? 'border-frame-accent bg-frame-accent/5'
                        : 'border-frame-border bg-frame-bg hover:border-frame-fg/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isTarget ? 'text-frame-accent' : 'text-frame-muted-fg'}`}>
                          {sc.label}
                        </span>
                        {isTarget && (
                          <span className="border border-frame-accent bg-frame-accent/20 px-2 py-0.5 text-[9px] font-black uppercase text-frame-accent">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="mt-3 font-mono text-2xl font-black text-frame-fg">
                        {fmtMoney(sc.budget, currency)}
                      </div>
                      <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                        {sc.note}
                      </p>

                      <div className="mt-5 space-y-2 border-t border-frame-border pt-4 text-xs">
                        <div className="flex justify-between">
                          <span className="text-frame-muted-fg">{objective.conversionLabel}:</span>
                          <span className="font-mono font-bold text-frame-fg">{fmtNum(sc.conversions, 1)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-frame-muted-fg">Revenue:</span>
                          <span className="font-mono font-bold text-frame-fg">{fmtMoney(sc.revenue, currency)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-frame-muted-fg">Projected ROAS:</span>
                          <span className="font-mono font-bold text-frame-accent">{sc.roas.toFixed(2)}x</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-frame-muted-fg">Gross Profit:</span>
                          <span className={`font-mono font-bold ${sc.grossProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {fmtMoney(sc.grossProfit, currency)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-frame-border">
                      <Link
                        href={`/contact?plan=${sc.id}&budget=${Math.round(sc.budget)}&platform=meta`}
                        className={`block w-full text-center py-2.5 text-xs font-black uppercase tracking-wider transition ${
                          isTarget
                            ? 'border border-frame-accent bg-frame-accent text-frame-accent-fg hover:bg-transparent hover:text-frame-fg'
                            : 'border border-frame-border hover:border-frame-fg text-frame-fg'
                        }`}
                      >
                        Deploy This Plan
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* AI-Style Strategic Diagnostics */}
          <div className="border border-frame-border bg-frame-bg p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 text-frame-accent">
              <Sparkles className="h-5 w-5" />
              <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Algorithmic Diagnostics & Action Items
              </h4>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {calc.recommendations.map((rec, i) => (
                <div key={i} className="flex gap-3 border border-frame-border/80 bg-frame-muted/10 p-4">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-frame-muted-fg leading-relaxed">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Narrative */}
          <div className="border-l-2 border-frame-accent bg-frame-muted/20 p-4 text-sm leading-relaxed text-frame-fg sm:p-6">
            <span className="font-bold text-frame-accent uppercase tracking-wider block text-xs mb-2">
              Executive Synthesis
            </span>
            {calc.summaryParagraph}
          </div>

          {/* Two-Way Service Link: Meta Ads Service & Audit */}
          <div className="border-2 border-frame-accent/40 bg-frame-muted/10 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
                  Execution Pathway
                </span>
                <h4 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Ready to Turn This Model into Real Revenue?
                </h4>
                <p className="mt-1 max-w-xl text-xs md:text-sm text-frame-muted-fg">
                  Frame Cipher runs full-funnel Meta advertising sprints: creative direction, video editing, pixel & CAPI integration, Advantage+ scaling, and weekly profit reconciliation.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link
                  href="/services/paid-advertising/meta-ads"
                  className="flex w-full items-center justify-center border-2 border-frame-accent bg-frame-accent px-5 py-3 text-center text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg sm:w-auto"
                >
                  Explore Meta Ads Service
                </Link>
                <Link
                  href="/services/paid-advertising"
                  className="flex w-full items-center justify-center border border-frame-border px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-frame-fg transition hover:border-frame-fg sm:w-auto"
                >
                  All Paid Media Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
