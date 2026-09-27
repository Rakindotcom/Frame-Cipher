import { Suspense } from 'react'
import AdsCalculatorSuite from '@/components/calculators/AdsCalculatorSuite'
import { siteUrl } from '@/data/agency'

export const metadata = {
  title: 'Ads Budget & ROAS Calculator | Paid Media Planning Suite | Frame Cipher',
  description:
    'Free enterprise advertising budget and ROAS calculator for Meta (Facebook & Instagram), Google Ads, TikTok, and ChatGPT. Model Quality Score, Search Impression Share, Video View Rates, Break-Even ROAS, and Target CPA.',
  keywords: [
    'ads calculator',
    'roas calculator',
    'break even roas calculator',
    'facebook ads budget calculator',
    'google ads budget calculator',
    'tiktok ads calculator',
    'chatgpt ads calculator',
    'target cpa calculator',
    'paid media planning tool',
    'frame cipher',
  ],
  alternates: {
    canonical: '/tools/ads-calculator',
  },
  openGraph: {
    title: 'Ads Budget & ROAS Calculator | Paid Media Planning Suite | Frame Cipher',
    description:
      'Model multi-channel advertising budgets, break-even unit economics, Quality Score discounts, and video retention funnels with agency-grade precision.',
    url: `${siteUrl}/tools/ads-calculator`,
    siteName: 'Frame Cipher',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ads Budget & ROAS Calculator | Frame Cipher',
    description:
      'Free advertising budget and ROAS calculator for Meta, Google, TikTok, and AI Search. Model unit economics and forecast media spend with verified industry benchmarks.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Frame Cipher Paid Advertising Budget & ROAS Calculator',
  url: `${siteUrl}/tools/ads-calculator`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Interactive advertising budget wizard, Break-Even ROAS calculator, and multi-channel performance forecasting suite for Meta, Google Ads, TikTok, and Conversational AI search.',
  featureList: [
    'Meta Ads Budget & Advantage+ ROAS Wizard',
    'Google Ads Quality Score & Search Impression Share Simulator',
    'TikTok Ads 6-Second Video Retention & Spark Ads Planner',
    'ChatGPT & AI Search Sponsored Answer Citation Simulator',
    'Instant Break-Even ROAS & Allowable CPA Micro-Calculators',
    'Complete Advertising Metrics Encyclopedia & Diagnostic Playbooks',
    'Mathematical Derivations & Funnel Equations',
  ],
}

export default function AdsCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-frame-bg text-frame-fg font-mono text-sm">
            Initializing Frame Cipher Media Science Suite...
          </div>
        }
      >
        <AdsCalculatorSuite />
      </Suspense>
    </>
  )
}
