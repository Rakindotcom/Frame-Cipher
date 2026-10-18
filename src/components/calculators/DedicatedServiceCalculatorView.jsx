'use client'

import Link from 'next/link'
import { PageHero, SectionIntro } from '@/components/Kinetic'
import GoogleAdsCalculator from './GoogleAdsCalculator'
import MetaAdsCalculator from './MetaAdsCalculator'
import TikTokAdsCalculator from './TikTokAdsCalculator'
import OpenAiAdsCalculator from './OpenAiAdsCalculator'
import GenericPlatformCalculator from './GenericPlatformCalculator'
import MathEquationCard from './MathEquationCard'
import CalculatorFaqSection from './CalculatorFaqSection'
import QuickCalculatorBar from './QuickCalculatorBar'
import {
  Calculator,
  ArrowRight,
  BookOpen,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  TrendingUp,
} from 'lucide-react'

export default function DedicatedServiceCalculatorView({ config }) {
  if (!config) return null

  return (
    <main className="bg-frame-bg text-frame-fg min-h-screen w-full min-w-0 max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Media Econometrics & Calculators"
        meta={config.badge}
        number="CALC"
        title={config.title}
        actions={
          <>
            <a
              href="#simulator"
              className="inline-flex w-full max-w-full items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-4 text-center text-xs font-black uppercase tracking-wider text-frame-accent-fg hover:bg-transparent hover:text-frame-fg transition sm:w-auto"
            >
              Launch Simulator &rarr;
            </a>
            <Link
              href={config.serviceSlug}
              className="inline-flex w-full max-w-full items-center justify-center border-2 border-frame-border px-6 py-4 text-center text-xs font-black uppercase tracking-wider text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg transition sm:w-auto"
            >
              View {config.shortTitle} Service
            </Link>
          </>
        }
      >
        {config.description}
      </PageHero>

      {/* Quick Jump Bar */}
      <section className="border-b-2 border-frame-border bg-frame-muted/20 px-4 py-4 md:px-8 w-full min-w-0 max-w-full overflow-hidden">
        <div className="mx-auto flex w-full max-w-[95vw] min-w-0 flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-frame-accent animate-pulse" />
            <span className="font-mono font-bold uppercase text-frame-accent">Page Jump:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-8 font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
            <a href="#simulator" className="hover:text-frame-fg transition whitespace-nowrap">
              [01] Interactive Simulator
            </a>
            <a href="#divided-equations" className="hover:text-frame-fg transition whitespace-nowrap">
              [02] Textbook Equations
            </a>
            <a href="#terms-glossary" className="hover:text-frame-fg transition whitespace-nowrap">
              [03] Platform Terms
            </a>
            <a href="#faqs" className="hover:text-frame-fg transition whitespace-nowrap">
              [04] Methodology FAQs
            </a>
            <a href="#service-execution" className="hover:text-frame-fg transition whitespace-nowrap">
              [05] Service Execution
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto w-full max-w-[95vw] min-w-0 px-4 py-12 md:px-8 md:py-20 space-y-16">
        {/* 1. Interactive Simulator Engine */}
        <section id="simulator" className="scroll-mt-24 space-y-6 w-full min-w-0 max-w-full overflow-hidden">
          <SectionIntro
            eyebrow={`${config.shortTitle} Engine`}
            title={config.headline}
          >
            Adjust financial targets, click costs, and conversion assumptions to generate an executive performance forecast and branded PDF report.
          </SectionIntro>

          {config.slug === 'google-ads' && <GoogleAdsCalculator />}
          {config.slug === 'meta-ads' && <MetaAdsCalculator />}
          {config.slug === 'tiktok-ads' && <TikTokAdsCalculator />}
          {config.slug === 'chatgpt-ads' && <OpenAiAdsCalculator />}
          {![
            'google-ads',
            'meta-ads',
            'tiktok-ads',
            'chatgpt-ads',
          ].includes(config.slug) && (
            <GenericPlatformCalculator config={config} />
          )}
        </section>

        {/* 2. Rapid Math Bar */}
        <section className="scroll-mt-24">
          <QuickCalculatorBar />
        </section>

        {/* 3. Divided Textbook Mathematical Equations */}
        <section id="divided-equations" className="scroll-mt-24 space-y-6 w-full min-w-0 max-w-full overflow-hidden">
          <div className="border-b border-frame-border pb-6">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-frame-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
                Textbook Mathematics // Divided Formulas
              </span>
            </div>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              The Mathematical Architecture of {config.shortTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-xs md:text-sm text-frame-muted-fg leading-relaxed wide:text-lg">
              Real stacked mathematical formulas formatted as vertical fractions (numerator / denominator), exactly as presented in economic and media buying textbooks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full min-w-0 max-w-full">
            {config.equations.map((eq, i) => (
              <MathEquationCard key={i} equation={eq} />
            ))}
          </div>
        </section>

        {/* 4. Platform Terms & Metric Definitions */}
        <section id="terms-glossary" className="scroll-mt-24 space-y-6 w-full min-w-0 max-w-full overflow-hidden">
          <div className="border-b border-frame-border pb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-frame-accent" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
                Channel Nomenclature // Glossary
              </span>
            </div>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Key {config.shortTitle} Metrics & Nomenclature
            </h3>
            <p className="mt-2 max-w-2xl text-xs md:text-sm text-frame-muted-fg leading-relaxed wide:text-lg">
              Essential advertising terminology decoded for business owners, media buyers, and growth directors.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full min-w-0 max-w-full">
            {config.terms.map((item, idx) => (
              <div
                key={idx}
                className="w-full min-w-0 max-w-full overflow-hidden border-2 border-frame-border bg-frame-bg p-5 sm:p-6 space-y-2 hover:border-frame-accent transition-colors"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
                  Term 0{idx + 1}
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-frame-fg break-words">
                  {item.term}
                </h4>
                <p className="text-xs text-frame-muted-fg leading-relaxed break-words">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FAQs with Schema.org JSON-LD */}
        <section id="faqs" className="scroll-mt-24 w-full min-w-0 max-w-full overflow-hidden">
          <CalculatorFaqSection
            faqs={config.faqs}
            title={`${config.shortTitle} Bidding & Calculation FAQs`}
          />
        </section>

        {/* 6. Two-Way Internal Link to Service Page */}
        <section id="service-execution" className="scroll-mt-24 w-full min-w-0 max-w-full overflow-hidden">
          <div className="border-2 border-frame-accent bg-frame-bg p-6 sm:p-8 md:p-12 w-full min-w-0 max-w-full overflow-hidden">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
                  Dedicated Agency Execution
                </span>
                <h3 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                  Need Help Scaling Your {config.shortTitle} Campaigns?
                </h3>
                <p className="text-xs md:text-sm text-frame-muted-fg leading-relaxed wide:text-lg">
                  Don’t let bad ad accounts burn your capital. Frame Cipher provides end-to-end campaign architecture, creative testing pipelines, landing page conversion design, and weekly profit attribution.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href={config.serviceSlug}
                  className="inline-flex w-full items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-4 text-center text-xs font-black uppercase tracking-wider text-frame-accent-fg hover:bg-transparent hover:text-frame-fg transition sm:w-auto"
                >
                  Explore {config.shortTitle} Service <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center border-2 border-frame-border px-6 py-4 text-center text-xs font-black uppercase tracking-wider text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg transition sm:w-auto"
                >
                  Book a Free Media Audit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Directory Hub Footer Links */}
        <section className="border-t border-frame-border pt-10 text-center space-y-3 w-full min-w-0 max-w-full overflow-hidden">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-frame-muted-fg block">
            Explore All Advertising Calculators:
          </span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-mono font-bold text-frame-accent">
            <Link href="/calculators/google-ads" className="hover:underline whitespace-nowrap">Google Ads</Link>
            <span>/</span>
            <Link href="/calculators/meta-ads" className="hover:underline whitespace-nowrap">Meta Ads</Link>
            <span>/</span>
            <Link href="/calculators/tiktok-ads" className="hover:underline whitespace-nowrap">TikTok Ads</Link>
            <span>/</span>
            <Link href="/calculators/linkedin-ads" className="hover:underline whitespace-nowrap">LinkedIn Ads</Link>
            <span>/</span>
            <Link href="/calculators/amazon-ads" className="hover:underline whitespace-nowrap">Amazon Ads</Link>
            <span>/</span>
            <Link href="/calculators/chatgpt-ads" className="hover:underline whitespace-nowrap">ChatGPT Ads</Link>
            <span>/</span>
            <Link href="/calculators/microsoft-ads" className="hover:underline whitespace-nowrap">Microsoft Ads</Link>
            <span>/</span>
            <Link href="/calculators/pinterest-ads" className="hover:underline whitespace-nowrap">Pinterest Ads</Link>
            <span>/</span>
            <Link href="/calculators/remarketing" className="hover:underline whitespace-nowrap">Remarketing</Link>
            <span>/</span>
            <Link href="/calculators/lead-generation-ads" className="hover:underline whitespace-nowrap">Lead Gen Ads</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
