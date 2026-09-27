'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { PageHero, SectionIntro, SectionLabel } from '@/components/Kinetic'
import QuickCalculatorBar from './QuickCalculatorBar'
import MetaAdsCalculator from './MetaAdsCalculator'
import GoogleAdsCalculator from './GoogleAdsCalculator'
import TikTokAdsCalculator from './TikTokAdsCalculator'
import OpenAiAdsCalculator from './OpenAiAdsCalculator'
import AdsFormulasBreakdown from './AdsFormulasBreakdown'
import AdsMetricsHandbook from './AdsMetricsHandbook'
import CalculatorServiceBridge from './CalculatorServiceBridge'
import {
  Calculator,
  Search,
  Video,
  Bot,
  Layers,
  Cpu,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'

const PLATFORMS = [
  {
    id: 'meta',
    name: 'Meta Ads',
    subtitle: 'Facebook & Instagram',
    icon: TrendingUp,
    badge: 'Advantage+ & Reels',
    description: 'Model impression CPMs, link CTRs, creative fatigue, and Advantage+ ROAS.',
  },
  {
    id: 'google',
    name: 'Google Ads',
    subtitle: 'Search, PMax & Shopping',
    icon: Search,
    badge: 'Quality Score & IS',
    description: 'Reverse-engineer keyword CPC, Quality Score discounts, and Impression Share.',
  },
  {
    id: 'tiktok',
    name: 'TikTok Ads',
    subtitle: 'For You Feed & Spark Ads',
    icon: Video,
    badge: '6s Retention & UGC',
    description: 'Calculate video retention (VVR), creator Spark engagement, and viral CPAs.',
  },
  {
    id: 'openai',
    name: 'ChatGPT & AI Search',
    subtitle: 'Conversational Ads',
    icon: Bot,
    badge: 'Generative AI / Citations',
    description: 'Plan sponsored answer citations, product cards, and semantic relevance pricing.',
  },
]

export default function AdsCalculatorSuite() {
  const searchParams = useSearchParams()
  const initialPlatform = searchParams.get('platform') || 'meta'
  const [activePlatform, setActivePlatform] = useState(initialPlatform)

  useEffect(() => {
    const p = searchParams.get('platform')
    if (p && PLATFORMS.some((item) => item.id === p)) {
      setActivePlatform(p)
    }
  }, [searchParams])

  return (
    <div className="bg-frame-bg text-frame-fg min-h-screen">
      {/* Hero Section with Kinetic Styling */}
      <PageHero
        eyebrow="Growth Intelligence & Media Science"
        meta="Interactive Advertising Econometrics"
        number="ADS"
        title="Paid Advertising Budget & ROAS Engine"
      >
        Enterprise-grade media budget forecasting, reverse-engineered funnel economics,
        Google Quality Score discounting, Search Impression Share modeling, and unit-level
        profitability safeguards for high-growth brands.
      </PageHero>

      {/* Quick Jump Bar */}
      <section className="border-b-2 border-frame-border bg-frame-muted/20 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-[95vw] flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-frame-accent" />
            <span className="font-mono font-bold uppercase text-frame-accent">Quick Jumps:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-6 font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
            <a href="#platform-calculators" className="hover:text-frame-fg transition">
              [01] Platform Wizards
            </a>
            <a href="#quick-math" className="hover:text-frame-fg transition">
              [02] Rapid Micro-Math
            </a>
            <a href="#mathematical-derivations" className="hover:text-frame-fg transition">
              [03] Formula Math
            </a>
            <a href="#metrics-encyclopedia" className="hover:text-frame-fg transition">
              [04] Metrics Encyclopedia
            </a>
            <a href="#related-services" className="hover:text-frame-fg transition">
              [05] Execution Services
            </a>
          </div>
        </div>
      </section>

      {/* Main Suite Container */}
      <div className="mx-auto max-w-[95vw] px-4 py-12 md:px-8 md:py-20 space-y-16">
        {/* SECTION 1: Platform Switcher & Calculator Wizards */}
        <section id="platform-calculators" className="space-y-8 scroll-mt-24">
          <SectionIntro
            eyebrow="Multi-Channel Media Forecasting"
            title="Select Your Advertising Ecosystem"
          >
            Each platform operates under fundamentally distinct auction mechanics. Switch below to model platform-specific economics, retention funnels, and algorithmic levers.
          </SectionIntro>

          {/* Platform Tab Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((platform) => {
              const Icon = platform.icon
              const isActive = activePlatform === platform.id
              return (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatform(platform.id)}
                  className={`flex flex-col justify-between border-2 p-6 text-left transition-all ${
                    isActive
                      ? 'border-frame-accent bg-frame-accent/10 shadow-lg shadow-frame-accent/10'
                      : 'border-frame-border bg-frame-bg hover:border-frame-fg/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <Icon
                        className={`h-6 w-6 ${
                          isActive ? 'text-frame-accent' : 'text-frame-muted-fg'
                        }`}
                      />
                      <span
                        className={`border px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest ${
                          isActive
                            ? 'border-frame-accent bg-frame-accent/20 text-frame-accent'
                            : 'border-frame-border text-frame-muted-fg'
                        }`}
                      >
                        {platform.badge}
                      </span>
                    </div>

                    <h4 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                      {platform.name}
                    </h4>
                    <span className="text-xs font-semibold text-frame-muted-fg block">
                      {platform.subtitle}
                    </span>
                    <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-frame-accent">
                    {isActive ? (
                      <span>Active Engine</span>
                    ) : (
                      <span className="text-frame-muted-fg group-hover:text-frame-fg">
                        Launch Simulator &rarr;
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Render Active Calculator Component */}
          <div className="border-2 border-frame-border bg-frame-bg p-4 sm:p-6 md:p-10">
            {activePlatform === 'meta' && <MetaAdsCalculator />}
            {activePlatform === 'google' && <GoogleAdsCalculator />}
            {activePlatform === 'tiktok' && <TikTokAdsCalculator />}
            {activePlatform === 'openai' && <OpenAiAdsCalculator />}
          </div>
        </section>

        {/* SECTION 2: Instant Rapid Micro-Calculators */}
        <section id="quick-math" className="scroll-mt-24">
          <QuickCalculatorBar />
        </section>

        {/* SECTION 3: Mathematical Derivations & Explanations */}
        <section className="scroll-mt-24">
          <AdsFormulasBreakdown />
        </section>

        {/* SECTION 4: Digital Advertising Metrics Encyclopedia */}
        <section className="scroll-mt-24">
          <AdsMetricsHandbook />
        </section>

        {/* SECTION 5: Two-Way Strategic Internal Linking to Services */}
        <section className="scroll-mt-24">
          <CalculatorServiceBridge />
        </section>
      </div>
    </div>
  )
}
