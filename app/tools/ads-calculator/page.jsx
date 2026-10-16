import { Suspense } from 'react'
import AdsCalculatorSuite from '@/components/calculators/AdsCalculatorSuite'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { siteUrl } from '@/data/agency'

export const metadata = {
  title: 'Ads Budget & ROAS Calculator | Paid Media Planning Suite',
  description:
    'Free advertising budget and ROAS calculator for Meta, Google Ads, TikTok, and ChatGPT. Model Quality Score, Break-Even ROAS, Video View Rates, and Target CPA.',
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
    title: 'Ads Budget & ROAS Calculator | Paid Media Planning Suite',
    description:
      'Model multi-channel advertising budgets, break-even unit economics, Quality Score discounts, and video retention funnels with agency-grade precision.',
    url: `${siteUrl}/tools/ads-calculator`,
    siteName: 'Frame Cipher',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ads Budget & ROAS Calculator | Frame Cipher',
    description:
      'Free advertising budget and ROAS calculator for Meta, Google, TikTok, and AI Search. Model unit economics and forecast media spend with verified industry benchmarks.',
    images: ['/og-image.png'],
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
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Ads Budget & ROAS Calculator', url: '/tools/ads-calculator' },
        ]}
      />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-frame-bg text-frame-fg font-mono text-sm">
            {/* The suite reads useSearchParams() and therefore streams in on the
                client. Without a server-rendered H1 here the prerendered HTML
                for this page had no heading at all. */}
            <h1 className="sr-only">Paid Advertising Budget &amp; ROAS Engine</h1>
            Initializing Frame Cipher Media Science Suite...
          </div>
        }
      >
        <AdsCalculatorSuite />
      </Suspense>
    </>
  )
}
