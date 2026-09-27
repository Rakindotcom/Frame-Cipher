'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  COUNTRIES,
  INDUSTRIES,
  OBJECTIVES,
  AD_FORMATS,
  PLACEMENTS,
  NETWORKS,
  BID_STRATEGIES,
  COMPETITION_LEVELS,
  SEASONS,
  CURRENCIES,
} from '@/data/calculators/openAiAdsData'
import {
  ArrowRight,
  Download,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Bot,
  AlertTriangle,
} from 'lucide-react'

const STEPS = [
  { id: 1, label: 'Market & Industry' },
  { id: 2, label: 'AI Placement Type' },
  { id: 3, label: 'Revenue Target' },
  { id: 4, label: 'Relevance Score & Overrides' },
  { id: 5, label: 'AI Conversational Forecast' },
]

function fmtMoney(n, currency) {
  if (!isFinite(n)) return '—'
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
  if (!isFinite(n)) return '-'
  if (currency === 'BDT') return `BDT ${formatted}`
  return fmtMoney(n, currency)
}

function fmtNum(n, decimals = 0) {
  if (!isFinite(n)) return '—'
  return Number(n.toFixed(decimals)).toLocaleString('en-US', { maximumFractionDigits: decimals })
}

function fmtPct(n, decimals = 1) {
  if (!isFinite(n)) return '—'
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
    case 'traffic':
      return 'Value per visit'
    default:
      return 'Average order value (AOV)'
  }
}

export default function OpenAiAdsCalculator({ onLeadSubmit }) {
  const [step, setStep] = useState(1)

  // Step 1
  const [countryId, setCountryId] = useState('BD')
  const [currency, setCurrency] = useState('BDT')
  const [industryId, setIndustryId] = useState('ecommerce')

  // Step 2
  const [objectiveId, setObjectiveId] = useState('sales')
  const [adFormatId, setAdFormatId] = useState('sponsored-answer')
  const [placementId, setPlacementId] = useState('prompt-response')
  const [networkId, setNetworkId] = useState('chatgpt-web-app')
  const [bidStrategyId, setBidStrategyId] = useState('value-optimized')
  const [competitionId, setCompetitionId] = useState('medium')
  const [seasonId, setSeasonId] = useState('normal')

  // Step 3
  const [revenueGoal, setRevenueGoal] = useState('150000')
  const [aov, setAov] = useState('1800')
  const [profitMargin, setProfitMargin] = useState('35')
  const [days, setDays] = useState('30')

  // Step 4
  const [cpcOverride, setCpcOverride] = useState('')
  const [ctrOverride, setCtrOverride] = useState('')
  const [cvrOverride, setCvrOverride] = useState('')
  const [qsOverride, setQsOverride] = useState('')

  // Report
  const [clientName, setClientName] = useState('')
  const [preparedBy, setPreparedBy] = useState('Frame Cipher AI Media Group')
  const [downloading, setDownloading] = useState(false)

  const n = (v) => {
    const f = parseFloat(v)
    return isFinite(f) ? f : 0
  }

  const country = COUNTRIES.find((c) => c.id === countryId) ?? COUNTRIES[0]
  const industry = INDUSTRIES.find((i) => i.id === industryId) ?? INDUSTRIES[0]
  const objective = OBJECTIVES.find((o) => o.id === objectiveId) ?? OBJECTIVES[0]
  const adFormat = AD_FORMATS.find((f) => f.id === adFormatId) ?? AD_FORMATS[0]
  const placement = PLACEMENTS.find((p) => p.id === placementId) ?? PLACEMENTS[0]
  const network = NETWORKS.find((nw) => nw.id === networkId) ?? NETWORKS[0]
  const bidStrategy = BID_STRATEGIES.find((b) => b.id === bidStrategyId) ?? BID_STRATEGIES[0]
  const competition = COMPETITION_LEVELS.find((c) => c.id === competitionId) ?? COMPETITION_LEVELS[1]
  const season = SEASONS.find((s) => s.id === seasonId) ?? SEASONS[0]

  const calc = useMemo(() => {
    const baseCpcUsd =
      industry.cpc *
      country.cpcMultiplier *
      objective.cpcMult *
      adFormat.cpcMult *
      placement.cpcMult *
      network.cpcMult *
      bidStrategy.cpcMult *
      competition.cpcMult *
      season.cpcMult

    const baseCtr = industry.ctr * objective.ctrMult * adFormat.ctrMult
    const baseCvr = industry.cvr * objective.cvrMult * adFormat.cvrMult
    const baseQs = industry.qs

    const effectiveQs = qsOverride !== '' ? n(qsOverride) : baseQs
    const qsMultiplier = Math.min(1.5, Math.max(0.6, 1 + (baseQs - effectiveQs) * 0.05))

    const cpcBeforeOverride = convertFromUsd(baseCpcUsd, currency) * qsMultiplier
    const effectiveCpc = cpcOverride !== '' ? n(cpcOverride) : cpcBeforeOverride
    const effectiveCtr = ctrOverride !== '' ? n(ctrOverride) : baseCtr
    const effectiveCvr = cvrOverride !== '' ? n(cvrOverride) : baseCvr

    const AOV = n(aov)
    const MARGIN = n(profitMargin)
    const COGS = 100 - MARGIN
    const DAYS = n(days) || 1
    const REVENUE_GOAL = n(revenueGoal)

    const costPerConversion = effectiveCvr > 0 ? (effectiveCpc / (effectiveCvr / 100)) / 0.94 : 0
    const targetConversions = AOV > 0 ? REVENUE_GOAL / AOV : 0
    const recommendedBudget = targetConversions * costPerConversion
    const dailyBudget = recommendedBudget / DAYS

    const idealBudget = recommendedBudget * 1.3
    const lostIsBudget = Math.max(0, Math.min(100, 100 - (recommendedBudget / (idealBudget || 1)) * 100))
    const lostIsRank = Math.max(0, Math.min(100, (7.5 - effectiveQs) * 6))
    const impressionShare = Math.max(0, 100 - lostIsBudget - lostIsRank)

    const computeFunnel = (usedBudget) => {
      const clicks = effectiveCpc > 0 ? usedBudget / effectiveCpc : 0
      const impressions = effectiveCtr > 0 ? clicks / (effectiveCtr / 100) : 0
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
      { id: 'low', label: 'Pilot Sandbox', mult: lowMult, note: 'Early adopter test flight to claim high-intent conversational real estate.' },
      { id: 'recommended', label: 'Target Trajectory', mult: 1.0, note: 'Calibrated to hit your revenue goal via conversational citations.' },
      { id: 'aggressive', label: 'Category Dominance', mult: aggressiveMult, note: 'Outbids competing brands to guarantee sponsored recommendation frequency.' },
    ]

    const scenarios = scenarioDefs.map((s) => {
      const scenarioBudget = recommendedBudget * s.mult
      const f = computeFunnel(scenarioBudget)
      return { ...s, budget: scenarioBudget, ...f }
    })

    const recommendations = [
      `Prompt Semantic Relevance: AI search answers prioritize brands that match deep user conversation context. Semantic citations outperform generic sales copy.`,
      `Relevance Score (${effectiveQs.toFixed(1)}/10) directly modulates simulated CPC. Ensure your brand knowledge graph and digital PR entities are clearly indexed by OpenAI web crawlers.`,
      `ChatGPT Shopping Assistant placements convert at ~25% higher CVR because users are already in deep comparison mode before clicking.`,
      `Unit Economics: Break-Even ROAS hurdle is ${main.breakEvenROAS.toFixed(2)}x. Projected ROAS is ${main.roas.toFixed(2)}x.`,
    ]

    const summaryParagraph = `To generate ${fmtMoney(REVENUE_GOAL, currency)} in revenue for ${industry.label} in ${country.label} via ChatGPT and AI Search, this ${adFormat.label} campaign requires ~${fmtNum(targetConversions, 1)} ${objective.conversionLabel.toLowerCase()}. At a projected Relevance Score of ${effectiveQs.toFixed(1)}/10, estimated CPC of ${fmtMoney(effectiveCpc, currency)}, and ${effectiveCvr.toFixed(2)}% CVR, you will need roughly ${fmtNum(main.clicks)} outbound citations. The recommended ${DAYS}-day budget is ${fmtMoney(recommendedBudget, currency)} with a projected ${main.roas.toFixed(2)}x ROAS.`

    return {
      effectiveCpc,
      effectiveCtr,
      effectiveCvr,
      effectiveQs,
      costPerConversion,
      targetConversions,
      recommendedBudget,
      dailyBudget,
      impressionShare,
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
    adFormat,
    placement,
    network,
    bidStrategy,
    competition,
    season,
    revenueGoal,
    aov,
    profitMargin,
    days,
    cpcOverride,
    ctrOverride,
    cvrOverride,
    qsOverride,
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
      let y = 60

      pdf.setFillColor('#0A0A0A')
      pdf.rect(0, 0, pageWidth, pageHeight, 'F')

      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(18)
      pdf.setTextColor('#A855F7')
      pdf.text('FRAME CIPHER // CHATGPT & AI SEARCH MEDIA BLUEPRINT', marginX, y)
      y += 24

      pdf.setFontSize(11)
      pdf.setTextColor('#EDEDED')
      pdf.text(`Prepared for: ${clientName || 'Confidential Client'}  |  Author: ${preparedBy}`, marginX, y)
      y += 18
      pdf.text(`Market: ${country.label} (${currency})  |  Format: ${adFormat.label}  |  Industry: ${industry.label}`, marginX, y)
      y += 30

      pdf.setDrawColor('#262626')
      pdf.line(marginX, y, pageWidth - marginX, y)
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

      pdf.setFontSize(14)
      pdf.setTextColor('#A855F7')
      pdf.text('FINANCIAL TARGETS & CITATIONS', marginX, y)
      y += 20

      drawPdfRow('Recommended Ad Spend', fmtMoneyPdf(calc.recommendedBudget, currency))
      drawPdfRow('Daily Spend Pacing', fmtMoneyPdf(calc.dailyBudget, currency))
      drawPdfRow('Projected Revenue', fmtMoneyPdf(calc.main.revenue, currency))
      drawPdfRow('Projected ROAS', `${calc.main.roas.toFixed(2)}x`)
      drawPdfRow('Break-Even ROAS', `${calc.main.breakEvenROAS.toFixed(2)}x`)
      drawPdfRow('Target Cost Per Lead/Sale', fmtMoneyPdf(calc.main.cpa, currency))
      drawPdfRow('Simulated CPC per Citation', fmtMoneyPdf(calc.effectiveCpc, currency))
      drawPdfRow('Prompt Impressions', fmtNum(calc.main.impressions))
      drawPdfRow('Target Conversions', fmtNum(calc.main.conversions, 1))

      y += 25
      pdf.setFontSize(10)
      pdf.setTextColor('#71717A')
      pdf.text('Generated by Frame Cipher Generative AI Ads Intelligence — https://framecipher.com', marginX, pageHeight - 30)

      pdf.save(`frame-cipher-chatgpt-ads-${Date.now()}.pdf`)
    } catch (err) {
      console.error('PDF export error:', err)
      alert('Could not export PDF. Check console log.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="space-y-10">
      {/* Early-stage Market Disclosure Banner */}
      <div className="flex items-start gap-3 border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-200">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
        <p>
          <strong className="text-white uppercase tracking-wider font-bold">Generative AI Media Disclosure:</strong>{' '}
          OpenAI and conversational search ad placements (ChatGPT Sponsored Answers, Product Cards, Voice mentions) represent emerging inventory. All CPC and CTR metrics are modeled planning estimates based on early pilot tests and adjacent search benchmarks.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-frame-border pb-4">
        {STEPS.map((s, idx) => (
          <div key={s.id} className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => s.id < step && setStep(s.id)}
              disabled={s.id > step}
              className={`flex h-8 w-8 items-center justify-center text-xs font-mono font-bold transition-all ${
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
              Phase 01 // Geographic Region & Industry
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Target Geography & Industry Vertical
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Sets baseline conversational CPC and AI Search intent values.
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

          <div className="border border-frame-border bg-frame-muted/10 p-5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-frame-accent">
              {industry.label} Conversational Search Benchmarks
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
              <div className="border-r border-frame-border pr-2">
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Base Citation CPC</span>
                <p className="font-mono text-lg font-bold text-frame-fg">${industry.cpc}</p>
              </div>
              <div className="border-r border-frame-border pr-2">
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Citation CTR</span>
                <p className="font-mono text-lg font-bold text-frame-fg">{industry.ctr}%</p>
              </div>
              <div className="border-r border-frame-border pr-2">
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Base CVR</span>
                <p className="font-mono text-lg font-bold text-frame-fg">{industry.cvr}%</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-frame-muted-fg">Semantic QS</span>
                <p className="font-mono text-lg font-bold text-frame-accent">{industry.qs}/10</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg"
            >
              Continue to AI Placement Selection <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Placement Type */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 02 // AI Placement & Surface Selection
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Conversational Surface & Format
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Choose between Sponsored Answer Citations, Interactive Product Cards, or Shopping Assistant tables.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Ad Format
              </label>
              <select
                value={adFormatId}
                onChange={(e) => setAdFormatId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {AD_FORMATS.map((f) => (
                  <option key={f.id} value={f.id} className="bg-frame-bg text-frame-fg">
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Placement Location
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
                Surface Network
              </label>
              <select
                value={networkId}
                onChange={(e) => setNetworkId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {NETWORKS.map((n) => (
                  <option key={n.id} value={n.id} className="bg-frame-bg text-frame-fg">
                    {n.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Campaign Goal
              </label>
              <select
                value={objectiveId}
                onChange={(e) => setObjectiveId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {OBJECTIVES.map((o) => (
                  <option key={o.id} value={o.id} className="bg-frame-bg text-frame-fg">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Prompt Competition
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
                Bid Strategy
              </label>
              <select
                value={bidStrategyId}
                onChange={(e) => setBidStrategyId(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 text-sm font-semibold text-frame-fg outline-none focus:border-frame-accent"
              >
                {BID_STRATEGIES.map((b) => (
                  <option key={b.id} value={b.id} className="bg-frame-bg text-frame-fg">
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(1)}
              className="border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg"
            >
              Continue to Revenue Targets <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Goals */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 03 // Revenue Goal & Margin Economics
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Revenue Target & Unit Economics
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Model required citation volume and conversion economics.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Revenue Target ({currency})
              </label>
              <input
                type="number"
                min="0"
                value={revenueGoal}
                onChange={(e) => setRevenueGoal(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
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
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Gross Margin (%)
              </label>
              <input
                type="number"
                min="1"
                max="99"
                value={profitMargin}
                onChange={(e) => setProfitMargin(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Flight Days
              </label>
              <input
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-base font-bold text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
            >
              Back
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(4)}
                className="border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
              >
                Relevance Overrides
              </button>
              <button
                onClick={() => setStep(5)}
                className="flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg"
              >
                Calculate Results <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Overrides */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
              Phase 04 // Semantic Relevance Score & Metric Overrides
            </div>
            <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Relevance Score (1-10) & Custom CPC
            </h3>
            <p className="mt-1 text-sm text-frame-muted-fg">
              Higher semantic match with conversational queries gives priority in prompt answers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Relevance Score (1-10)
              </label>
              <input
                type="number"
                min="1"
                max="10"
                step="0.5"
                placeholder={`Benchmark: ${calc.effectiveQs.toFixed(1)}/10`}
                value={qsOverride}
                onChange={(e) => setQsOverride(e.target.value)}
                className="mt-2 w-full border border-frame-border bg-frame-bg px-4 py-3 font-mono text-sm text-frame-fg outline-none focus:border-frame-accent"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-frame-muted-fg block">
                Custom CPC ({currency})
              </label>
              <input
                type="number"
                step="any"
                placeholder={`Benchmark: ${fmtMoney(calc.effectiveCpc, currency)}`}
                value={cpcOverride}
                onChange={(e) => setCpcOverride(e.target.value)}
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
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(3)}
              className="border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-muted-fg hover:text-frame-fg hover:border-frame-fg"
            >
              Back
            </button>
            <button
              onClick={() => setStep(5)}
              className="flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg"
            >
              View Results Forecast <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Results */}
      {step === 5 && (
        <div className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-frame-border pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  AI Conversational Simulation Computed
                </span>
              </div>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                ChatGPT & AI Search Performance Blueprint
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
                Simulated Citation CPC
              </div>
              <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-emerald-400">
                {fmtMoney(calc.effectiveCpc, currency)}
              </div>
              <div className="mt-1 text-xs text-frame-muted-fg">
                Relevance: {calc.effectiveQs.toFixed(1)} / 10
              </div>
            </div>

            <div className="border border-frame-border bg-frame-bg p-5">
              <div className="text-[11px] font-black uppercase tracking-widest text-frame-muted-fg">
                Target CPA
              </div>
              <div className="mt-2 font-mono text-2xl md:text-3xl font-black text-frame-fg">
                {fmtMoney(calc.main.cpa, currency)}
              </div>
              <div className="mt-1 text-xs text-frame-muted-fg">
                Target: {fmtNum(calc.main.conversions, 1)} {objective.conversionLabel.toLowerCase()}
              </div>
            </div>
          </div>

          {/* Funnel */}
          <div className="border border-frame-border bg-frame-bg p-6 md:p-8">
            <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
              Conversational Citation Funnel
            </h4>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Prompt Citations & Ad Impressions', val: calc.main.impressions, display: fmtNum(calc.main.impressions), color: 'bg-zinc-600' },
                { label: 'Outbound Citation Clicks', val: calc.main.clicks, display: fmtNum(calc.main.clicks), color: 'bg-purple-600' },
                { label: 'Landing Page Visits', val: calc.main.landingPageVisits, display: fmtNum(calc.main.landingPageVisits), color: 'bg-purple-500' },
                { label: `${objective.conversionLabel} Completed`, val: calc.main.conversions, display: fmtNum(calc.main.conversions, 1), color: 'bg-emerald-400' },
              ].map((item, idx) => {
                const logVal = Math.log10(Math.max(item.val, 1) + 1)
                const widthPct = Math.max(10, Math.min(100, (logVal / maxLog) * 100))
                return (
                  <div key={idx}>
                    <div className="flex items-baseline justify-between text-xs mb-1">
                      <span className="font-medium text-frame-muted-fg">{item.label}</span>
                      <span className="font-mono font-bold text-frame-fg">{item.display}</span>
                    </div>
                    <div className="h-2.5 w-full bg-frame-muted/20">
                      <div className={`h-full ${item.color}`} style={{ width: `${widthPct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 3 Scenarios */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
                AI Budget Horizons
              </span>
              <h4 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                3 Scenarios for Your AI Ads Strategy
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
                          <span className="text-frame-muted-fg">Conversions:</span>
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
                        href={`/contact?plan=${sc.id}&budget=${Math.round(sc.budget)}&platform=chatgpt`}
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
          <div className="border border-frame-border bg-frame-bg p-6 md:p-8">
            <div className="flex items-center gap-2 text-frame-accent">
              <Sparkles className="h-5 w-5" />
              <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Generative AI Search Strategy Insights
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
          <div className="border-l-2 border-frame-accent bg-frame-muted/20 p-6 text-sm leading-relaxed text-frame-fg">
            <span className="font-bold text-frame-accent uppercase tracking-wider block text-xs mb-2">
              Executive Summary
            </span>
            {calc.summaryParagraph}
          </div>

          {/* Two-Way Service Link: ChatGPT Ads Service */}
          <div className="border-2 border-frame-accent/40 bg-frame-muted/10 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
                  Next-Gen Advertising
                </span>
                <h4 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Ready to Capture Intent in ChatGPT & AI Search?
                </h4>
                <p className="mt-1 max-w-xl text-xs md:text-sm text-frame-muted-fg">
                  Frame Cipher optimizes entity citation graphs, semantic search relevance, and conversational commerce funnels for modern AI platforms.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services/paid-advertising/chatgpt-ads"
                  className="border-2 border-frame-accent bg-frame-accent px-5 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg hover:bg-transparent hover:text-frame-fg transition"
                >
                  Explore ChatGPT Ads Service
                </Link>
                <Link
                  href="/services/paid-advertising"
                  className="border border-frame-border px-5 py-3 text-xs font-bold uppercase tracking-wider text-frame-fg hover:border-frame-fg transition"
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
