import Link from 'next/link'
import { PageHero, SectionIntro, SectionLabel } from '@/components/Kinetic'
import { ALL_ADS_CALCULATORS } from '@/data/calculators/allAdsCalculatorsConfig'
import QuickCalculatorBar from '@/components/calculators/QuickCalculatorBar'
import CalculatorServiceBridge from '@/components/calculators/CalculatorServiceBridge'
import { siteUrl } from '@/data/agency'
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Search,
  Video,
  Bot,
  Layers,
  Cpu,
  CheckCircle2,
} from 'lucide-react'

export const metadata = {
  title: 'All Advertising Calculators | Free Media Planning Tools | Frame Cipher',
  description:
    'Dedicated advertising budget and ROAS calculators for Google Ads, Meta (Facebook & Instagram), TikTok, LinkedIn B2B, Amazon ACoS/TACoS, ChatGPT, Microsoft Ads, Pinterest, and Remarketing.',
  alternates: {
    canonical: '/calculators',
  },
  openGraph: {
    title: 'All Advertising Calculators | Frame Cipher Media Science Suite',
    description:
      'Free suite of specialized advertising calculators with divided math equations, Quality Score forecasting, video view retention rates, and break-even unit economics.',
    url: `${siteUrl}/calculators`,
    siteName: 'Frame Cipher',
    type: 'website',
    images: ['/logo.png'],
  },
}

export default function CalculatorsIndexPage() {
  return (
    <div className="bg-frame-bg text-frame-fg min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Media Econometrics Directory"
        meta="10 Specialized Channel Simulators"
        number="CALCS"
        title="Advertising Budget & ROAS Calculators"
        actions={
          <Link
            href="/tools/ads-calculator"
            className="inline-flex items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-4 text-xs font-black uppercase tracking-wider text-frame-accent-fg hover:bg-transparent hover:text-frame-fg transition"
          >
            Launch All-in-One Multi-Channel Engine &rarr;
          </Link>
        }
      >
        Select your specific advertising channel below to run dedicated full-funnel simulations,
        analyze textbook mathematical equations, and download branded PDF client reports.
      </PageHero>

      <div className="mx-auto max-w-[95vw] px-4 py-12 md:px-8 md:py-20 space-y-16">
        {/* Instant Micro-Calculators */}
        <section>
          <QuickCalculatorBar />
        </section>

        {/* 10 Channel Calculators Grid */}
        <section>
          <SectionIntro
            eyebrow="Channel Specific Engines"
            title="Choose Your Advertising Platform"
          >
            Every ad network possesses unique auction dynamics. We have engineered dedicated calculators with channel-specific equations, terminology, and FAQs.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_ADS_CALCULATORS.map((calc, idx) => (
              <div
                key={calc.slug}
                className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between hover:border-frame-accent transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
                      Engine 0{idx + 1}
                    </span>
                    <span className="border border-frame-border px-2 py-0.5 text-[9px] font-mono font-bold uppercase text-frame-muted-fg">
                      {calc.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                    {calc.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
                    {calc.description}
                  </p>

                  <div className="mt-6 border-t border-frame-border/80 pt-4 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-muted-fg block mb-2">
                      Key Channel Equations Included:
                    </span>
                    {calc.equations.slice(0, 2).map((eq, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-2 text-xs font-mono text-frame-fg">
                        <CheckCircle2 className="h-3 w-3 text-frame-accent shrink-0" />
                        <span className="truncate">{eq.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/80 flex items-center justify-between">
                  <Link
                    href={`/calculators/${calc.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-accent group-hover:text-white transition"
                  >
                    Open Calculator <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href={calc.serviceSlug}
                    className="text-[11px] font-semibold text-frame-muted-fg hover:text-frame-fg transition"
                  >
                    Service Page &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agency Service Bridge */}
        <section>
          <CalculatorServiceBridge />
        </section>
      </div>
    </div>
  )
}
