import Link from 'next/link'
import { Calculator, ArrowRight, Sparkles, TrendingUp, Search, Video, Bot } from 'lucide-react'

const CONFIGS = {
  meta: {
    badge: 'Meta Ads Planning Engine',
    title: 'Model Your Meta Ads Spend & Break-Even ROAS',
    description:
      'Forecast impression CPMs, link click-through rates, creative fatigue frequencies, and Advantage+ ROAS targets before committing marketing budget.',
    href: '/calculators/meta-ads',
    ctaText: 'Launch Meta Ads Calculator',
    icon: TrendingUp,
  },
  google: {
    badge: 'Google Search & PMax Simulator',
    title: 'Calculate Quality Score Discounts & Impression Share',
    description:
      'Simulate high-intent keyword CPCs, Ad Rank discounts, and Search Impression Share bottlenecks to find out how much revenue your campaigns can capture.',
    href: '/calculators/google-ads',
    ctaText: 'Launch Google Ads Calculator',
    icon: Search,
  },
  tiktok: {
    badge: 'TikTok Video Retention Tool',
    title: 'Calculate 6-Second Video Retention & Viral CPAs',
    description:
      'Model creator Spark Ads engagement, hook rates (3s/6s VVR), and TikTok Shop purchase checkouts with empirically calibrated industry benchmarks.',
    href: '/calculators/tiktok-ads',
    ctaText: 'Launch TikTok Ads Calculator',
    icon: Video,
  },
  openai: {
    badge: 'Generative AI Media Science',
    title: 'Model Sponsored Citations & Conversational Intent',
    description:
      'Forecast ChatGPT sponsored answer citations, interactive product cards, and semantic relevance score pricing in modern AI search surfaces.',
    href: '/calculators/chatgpt-ads',
    ctaText: 'Launch AI Ads Calculator',
    icon: Bot,
  },
  linkedin: {
    badge: 'B2B Enterprise Pipeline CAC',
    title: 'Calculate LinkedIn Cost Per Lead & Deal Economics',
    description:
      'Reverse-engineer account-based marketing CPL, MQL-to-SQL demo conversion rates, and enterprise customer acquisition cost.',
    href: '/calculators/linkedin-ads',
    ctaText: 'Launch LinkedIn Ads Calculator',
    icon: Calculator,
  },
  amazon: {
    badge: 'Amazon ACoS & TACoS Engine',
    title: 'Calculate Amazon ACoS, TACoS & Organic BSR Lift',
    description:
      'Model Sponsored Products, Sponsored Brands, FBA margins, and break-even ACoS thresholds with marketplace unit economics.',
    href: '/calculators/amazon-ads',
    ctaText: 'Launch Amazon Ads Calculator',
    icon: Calculator,
  },
  microsoft: {
    badge: 'Bing & Copilot Search Arbitrage',
    title: 'Capture Desktop Audiences at 30% Cheaper CPCs',
    description:
      'Model high-income desktop searchers, Windows Copilot placements, and LinkedIn demographic search targeting.',
    href: '/calculators/microsoft-ads',
    ctaText: 'Launch Microsoft Ads Calculator',
    icon: Search,
  },
  pinterest: {
    badge: 'Visual Search Discovery',
    title: 'Model Promoted Pins & 30-Day Attribution',
    description:
      'Calculate Promoted Pin click costs, re-pin viral multipliers, and visual discovery conversion rates.',
    href: '/calculators/pinterest-ads',
    ctaText: 'Launch Pinterest Ads Calculator',
    icon: TrendingUp,
  },
  remarketing: {
    badge: 'Full-Funnel Cart Recovery',
    title: 'Model Retargeting Conversion Lift & Frequency Caps',
    description:
      'Simulate warm audience conversion rates (4%–12%), cart abandonment win-backs, and frequency safety caps.',
    href: '/calculators/remarketing',
    ctaText: 'Launch Remarketing Calculator',
    icon: Calculator,
  },
  leadgen: {
    badge: 'B2B Lead Qualification',
    title: 'Calculate True Cost Per Closed Client (CPL to CAC)',
    description:
      'Reverse-engineer lead-to-meeting rates, sales close percentages, and pipeline CAC beyond raw top-of-funnel lead forms.',
    href: '/calculators/lead-generation-ads',
    ctaText: 'Launch Lead Gen Calculator',
    icon: Calculator,
  },
  general: {
    badge: 'Paid Advertising Intelligence Suite',
    title: 'Simulate Multi-Channel Media Spend & Profitability',
    description:
      'Run our complete advertising budget wizard across Meta, Google, TikTok, and AI Search. Decode your Break-Even ROAS, Target CPA, and unit economics.',
    href: '/calculators',
    ctaText: 'Explore All 10 Calculators',
    icon: Calculator,
  },
}

export default function ServiceCalculatorBanner({ platform = 'general' }) {
  const cfg = CONFIGS[platform] || CONFIGS.general
  const Icon = cfg.icon

  return (
    <section className="border-t-2 border-b-2 border-frame-accent/40 bg-frame-bg px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[95vw]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-2 border-frame-accent bg-frame-muted/10 p-8 md:p-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-frame-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
                {cfg.badge}
              </span>
            </div>
            <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              {cfg.title}
            </h3>
            <p className="text-xs md:text-sm text-frame-muted-fg leading-relaxed">
              {cfg.description}
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <Link
              href={cfg.href}
              className="inline-flex items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-4 text-xs font-black uppercase tracking-wider text-frame-accent-fg hover:bg-transparent hover:text-frame-fg transition"
            >
              {cfg.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
