import StudioServiceLayout from '../../common/StudioServiceLayout'
import Link from 'next/link'
import { Video, Camera, Mic, Film, ArrowRight, Play } from 'lucide-react'

export default function PortfolioService({ service }) {
  const projectCategories = [
    {
      title: 'Corporate & Brand Films',
      serviceLink: '/studio/corporate-video-production/',
      count: '12+ Films',
      desc: 'Executive talks, company profiles, and investor masterclasses filmed at our Dhaka studio.',
      icon: Film
    },
    {
      title: 'Commercial Ads & TVCs',
      serviceLink: '/studio/commercial-video-production/',
      count: '18+ Commercials',
      desc: 'Consumer brand spots and product advertising with cinema color grading.',
      icon: Video
    },
    {
      title: 'Podcast Episodes & Series',
      serviceLink: '/studio/podcast/',
      count: '30+ Episodes',
      desc: 'Multi-camera 4K podcast recordings with broadcast sound isolation.',
      icon: Mic
    },
    {
      title: 'E-Commerce Product Catalogs',
      serviceLink: '/studio/product-photography/',
      count: '500+ SKUs',
      desc: 'Clean white background and creative lifestyle product staging.',
      icon: Camera
    }
  ]

  const extraSections = (
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-frame-border/60 pb-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-frame-accent">
            Real Studio Deliverables
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-frame-fg mt-1">
            Projects Grouped By Service
          </h3>
        </div>
        <span className="text-xs font-mono text-frame-muted-fg">Matikata ECB Chattar</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projectCategories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <div
              key={idx}
              className="border border-frame-border bg-frame-muted/10 p-5 flex flex-col justify-between hover:border-frame-accent transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 border border-frame-border bg-frame-bg text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-frame-muted-fg">{cat.count}</span>
                </div>
                <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                  {cat.title}
                </h4>
                <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <Link
                href={cat.serviceLink}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-frame-accent hover:underline"
              >
                <span>View Related Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )
        })}
      </div>

      <div className="border border-frame-border bg-frame-muted/20 p-4 text-xs font-medium text-frame-muted-fg flex items-center justify-between">
        <span>Verified client projects added only with permission. No simulated view counts or fabricated statistics.</span>
        <Link href="/studio/contact/" className="text-frame-fg font-bold hover:text-frame-accent shrink-0 ml-4">
          Request Portfolio Reel &rarr;
        </Link>
      </div>
    </div>
  )

  const customData = {
    h1: 'Studio Production Portfolio in Dhaka',
    lead: 'This page shows work produced at and for FrameCipher Studio. Each project links to the service behind it, so you can see how a similar project could be planned for your business. We let our finished deliverables demonstrate the quality of our lighting, acoustic sound isolation, and DaVinci Resolve color grading.',
    whatIncluded: [
      'Commercial case studies and high-definition video archives',
      'Podcast episode recordings featuring multi-camera 4K switching',
      'E-commerce product catalog photographs formatted for marketplaces',
      'Before-and-after DaVinci Resolve color grading demonstration reels',
      'Direct links from portfolio evidence to corresponding studio service scopes'
    ],
    serviceTypes: [
      { title: 'Commercial TVC & Brand Ads', desc: 'Broadcast-grade brand films engineered for paid distribution and television.' },
      { title: 'Multi-Camera Video Podcasts', desc: 'Acoustically isolated talk shows formatted for YouTube and Spotify.' },
      { title: 'E-Commerce Product Staging', desc: 'Macro detail and pure white catalog imagery for leading retail brands.' },
      { title: 'Corporate Leadership Profiles', desc: 'Executive interviews guiding B2B trust and investor presentations.' }
    ],
    whyMatters: 'We let our finished deliverables demonstrate the quality of our studio. Explore real projects filmed on our 6th-floor stage at Matikata ECB Chattar, showcasing our lighting, acoustic isolation, and color grading.',
    howRuns: [
      'Review portfolio examples similar to your planned visual project.',
      'Send inquiry citing reference work and target deliverables.',
      'We formulate a custom scope aligning with your quality tier.',
      'Production executed at our studio or on-location in Dhaka.',
      'Delivery of broadcast-ready files matching demonstrated standards.'
    ],
    costFactors: [
      'Custom scopes based on demonstrated project tiers and deliverable complexity',
      'Production crew requirements and studio reservation hours'
    ],
    linksOut: [
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Corporate Video Production', href: '/studio/corporate-video-production/' },
      { label: 'Commercial Video Production', href: '/studio/commercial-video-production/' },
      { label: 'Podcast Recording Studio', href: '/studio/podcast/' },
      { label: 'Product Photography Studio', href: '/studio/product-photography/' },
      { label: 'Studio Production Pricing', href: '/studio/pricing/' }
    ],
    extraSections
  }

  return <StudioServiceLayout service={service} {...customData} />
}
