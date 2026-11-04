import Link from 'next/link'
import { PageHero, SectionIntro, SectionLabel } from '@/components/Kinetic'
import { ALL_ADS_CALCULATORS } from '@/data/calculators/allAdsCalculatorsConfig'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumb from '@/components/common/Breadcrumb'
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
  // Kept under the ~60 character SERP limit, the brand is already shown by
  // Google next to the URL, so the suffix only wasted title space here.
  title: 'All Advertising Calculators | Free Media Planning Tools',
  description:
    'Advertising budget and ROAS calculators for Google Ads, Meta, TikTok, LinkedIn B2B, Amazon ACoS/TACoS, ChatGPT, Microsoft Ads, Pinterest, and Remarketing.',
  alternates: {
    canonical: '/calculators',
  },
  openGraph: {
    title: 'All Advertising Calculators | Media Science Suite',
    description:
      'Specialized advertising calculators with divided math equations, Quality Score forecasting, video retention rates, and break-even unit economics.',
    url: `${siteUrl}/calculators`,
    siteName: 'Frame Cipher',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function CalculatorsIndexPage() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen w-full min-w-0 max-w-full overflow-x-hidden relative">
      {/* Ambient background glow & cyber grid */}
      <div className="pointer-events-none absolute inset-0 bg-radial-[at_top] from-purple-950/20 via-[#09090B] to-[#09090B]" />
      <div className="pointer-events-none absolute inset-0 fc-grid-pattern opacity-10" />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Calculators', url: '/calculators' },
        ]}
      />
      {/* Hero */}
      <PageHero
        eyebrow="Media Econometrics Directory"
        meta="10 Specialized Channel Simulators"
        number="CALCS"
        title="Advertising Budget & ROAS Calculators"
        actions={
          <Link
            href="/tools/ads-calculator"
            className="inline-flex w-full max-w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-center text-xs font-heading font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all sm:w-auto"
          >
            Launch All-in-One Multi-Channel Engine &rarr;
          </Link>
        }
      >
        Select your specific advertising channel below to run dedicated full-funnel simulations,
        analyze textbook mathematical equations, and download branded PDF client reports.
      </PageHero>

      <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-4 py-12 md:px-8 md:py-20 space-y-16">
        {/* Instant Micro-Calculators */}
        <section className="w-full min-w-0 max-w-full overflow-hidden">
          <QuickCalculatorBar />
        </section>

        {/* 10 Channel Calculators Grid */}
        <section className="w-full min-w-0 max-w-full overflow-hidden">
          <SectionIntro
            eyebrow="Channel Specific Engines"
            title="Choose Your Advertising Platform"
          >
            Every ad network possesses unique auction dynamics. We have engineered dedicated calculators with channel-specific equations, terminology, and FAQs.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full min-w-0 max-w-full">
            {ALL_ADS_CALCULATORS.map((calc, idx) => (
              <div
                key={calc.slug}
                className="w-full min-w-0 max-w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-300 group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-accent">
                      Engine 0{idx + 1}
                    </span>
                    <span className="rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 px-3 py-1 text-[10px] font-mono font-bold uppercase backdrop-blur-md">
                      {calc.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors break-words">
                    {calc.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed wide:text-lg">
                    {calc.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4 space-y-1.5 w-full min-w-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-muted-fg block mb-2">
                      Key Channel Equations Included:
                    </span>
                    {calc.equations.slice(0, 2).map((eq, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300 w-full min-w-0">
                        <CheckCircle2 className="h-3 w-3 text-frame-accent shrink-0" />
                        <span className="truncate">{eq.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/calculators/${calc.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-accent group-hover:text-white transition whitespace-nowrap"
                  >
                    Open Calculator <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>

                  <Link
                    href={calc.serviceSlug}
                    className="text-[11px] font-semibold text-frame-muted-fg hover:text-frame-fg transition whitespace-nowrap"
                  >
                    Service Page &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agency Service Bridge */}
        <section className="w-full min-w-0 max-w-full overflow-hidden">
          <CalculatorServiceBridge />
        </section>
      </div>
    </main>
  )
}
