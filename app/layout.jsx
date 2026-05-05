import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import RouteScrollToTop from '../src/components/RouteScrollToTop'
import ScrollToTopButton from '../src/components/ScrollToTop'
import { contact, services, siteUrl } from '../src/data/agency'
import '../src/index.css'

const siteDescription =
  'Frame Cipher is a 360 marketing, media and technology agency offering branding, digital marketing, video production, photography, websites, software solutions and growth systems.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    template: '%s | Frame Cipher',
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
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description: siteDescription,
    siteName: 'Frame Cipher',
    // TODO: Replace logo fallback with /public/og-image.jpg when a dedicated 1200x630 brand image is ready.
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
    title: 'Frame Cipher | 360 Marketing, Media & Technology Agency',
    description: siteDescription,
    images: ['/logo.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Frame Cipher',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  slogan: 'One Team for Brand, Content, Tech, and Growth.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mirpur 14',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contact.phoneHref,
    contactType: 'Customer Service',
    email: contact.email,
  },
  areaServed: ['Bangladesh', 'Worldwide'],
  serviceType: services.map((service) => service.title),
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
        <div className="min-h-screen overflow-x-hidden bg-[#07070b] text-white">
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
