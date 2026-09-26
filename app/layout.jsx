import Script from 'next/script'
import { ConditionalLayout } from '../src/components/layout/ConditionalLayout'
import RouteScrollToTop from '../src/components/RouteScrollToTop'
import { AnalyticsTracker } from '../src/components/analytics/AnalyticsTracker'
import { siteUrl } from '../src/data/agency'
import { buildSiteGraph } from '../src/lib/seo/schema'
import { getPillarServices, getServiceDisplayName, getSubServicesForPillar } from '../src/data/servicePages'
import '../src/index.css'

const siteDescription =
  'Frame Cipher is a Dhaka-based marketing, media, branding, website, software, and growth agency helping brands plan, build, launch, and optimize campaigns.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
  },
  description: siteDescription,
  keywords: [
    '360 marketing agency in Bangladesh',
    'digital marketing agency in Dhaka',
    'social media marketing agency in Dhaka',
    'video production agency Bangladesh',
    'website development company Bangladesh',
    'software company Bangladesh',
    'branding agency Bangladesh',
    'e-commerce website development Bangladesh',
    'Facebook ads agency Bangladesh',
    'SEO agency Bangladesh',
  ],
  authors: [{ name: 'Frame Cipher' }],
  icons: {
    icon: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description: siteDescription,
    siteName: 'Frame Cipher',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description: siteDescription,
    images: ['/logo.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d11',
}

const siteGraph = JSON.stringify(buildSiteGraph())

const pillarNavServices = getPillarServices().map((pillar) => ({
  name: getServiceDisplayName(pillar),
  path: pillar.fullPath,
  subServices: getSubServicesForPillar(pillar.slug).map((service) => ({
    name: getServiceDisplayName(service),
    path: service.fullPath,
  })),
}))

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;1,9..144,500;1,9..144,700&family=Montserrat:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: siteGraph.replace(/</g, '\\u003c') }}
        />
        {/* Google Analytics 4 (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VCCWEYVH74"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VCCWEYVH74', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <AnalyticsTracker />
        <RouteScrollToTop />
        <ConditionalLayout pillarNavServices={pillarNavServices}>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
