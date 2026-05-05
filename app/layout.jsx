import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import RouteScrollToTop from '../src/components/RouteScrollToTop'
import ScrollToTopButton from '../src/components/ScrollToTop'
import '../src/index.css'

const siteUrl = 'https://framecipher.com'
const siteDescription =
  'Premium media production agency specializing in commercial video production, product campaigns, professional photography, and brand strategy. Transform your vision into cinematic reality.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Frame Cipher | Cinematic Media Production Agency',
    template: '%s | Frame Cipher',
  },
  description: siteDescription,
  keywords: [
    'video production',
    'commercial video',
    'photography',
    'brand strategy',
    'media production',
    'product campaign',
    'cinematic video',
    'Frame Cipher',
    'Bangladesh',
  ],
  authors: [{ name: 'Frame Cipher' }],
  icons: {
    icon: '/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Frame Cipher | Cinematic Media Production Agency',
    description: siteDescription,
    siteName: 'Frame Cipher',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Frame Cipher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frame Cipher | Cinematic Media Production Agency',
    description:
      'Premium media production agency specializing in commercial video production, product campaigns, professional photography, and brand strategy.',
    images: ['/logo.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Frame Cipher',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Premium media production agency specializing in commercial video production, product campaigns, professional photography, and brand strategy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mirpur 14',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-1768-146650',
    contactType: 'Customer Service',
    email: 'teamframecipher@gmail.com',
  },
  sameAs: [],
  areaServed: 'Worldwide',
  serviceType: [
    'Commercial Video Production',
    'Product Campaign',
    'Professional Photography',
    'Brand Strategy',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <RouteScrollToTop />
        <div className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
