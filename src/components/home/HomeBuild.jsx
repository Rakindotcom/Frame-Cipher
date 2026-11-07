import Link from 'next/link'
import {
  Sparkles,
  Cpu,
  Globe,
  ShoppingBag,
  TrendingUp,
  Video,
  Zap,
  Search,
  Palette,
  Workflow,
  ShieldCheck,
  Clock,
} from 'lucide-react'

const capabilities = [
  {
    title: 'Zero Vendor Drift',
    description: 'Strategy, web architecture, 4K media, and paid campaigns under one coordinated team. No fragmented agencies.',
    icon: Sparkles,
    href: '/services',
  },
  {
    title: 'Server-Side Attribution',
    description: 'Meta Conversions API (CAPI) and Google Tag Manager server routing with 9.4/10 Event Match Quality for signal recovery.',
    icon: Cpu,
    href: '/services/paid-advertising',
  },
  {
    title: 'High-Converting Web Apps',
    description: 'Sub-second Next.js 15 web applications and conversion-engineered landing pages built for mobile checkout.',
    icon: Globe,
    href: '/services/website-design-development',
  },
  {
    title: 'Headless E-Commerce',
    description: 'Custom Shopify storefronts and scalable commerce backends built for high average order value (AOV) and retention.',
    icon: ShoppingBag,
    href: '/services/website-design-development',
  },
  {
    title: 'Algorithmic Paid Media',
    description: 'Data-driven campaign management across Meta, Google PMax, TikTok, and LinkedIn with continuous ROAS optimization.',
    icon: TrendingUp,
    href: '/services/paid-advertising',
  },
  {
    title: 'In-House 4K Cinema Studio',
    description: 'Two dedicated Dhaka studios equipped with Sony FX cinema rigs, acoustic podcast staging, and DaVinci post-production.',
    icon: Video,
    href: '/studio',
  },
  {
    title: 'Viral Short-Form Engine',
    description: 'High-retention reels, TikToks, and founder podcast clips engineered for algorithmic reach and organic trust.',
    icon: Zap,
    href: '/services/content-creation/video-production',
  },
  {
    title: 'Technical & Local Search (SEO)',
    description: 'Dhaka Google Maps 3-pack dominance, programmatic keyword clustering, and modern AI/AEO search authority.',
    icon: Search,
    href: '/services/seo',
  },
  {
    title: 'Brand Positioning & Identity',
    description: 'Offer messaging, visual identity systems, kinetic design guidelines, and conversion-first campaign visuals.',
    icon: Palette,
    href: '/services/content-creation/branding',
  },
  {
    title: 'Custom CRM & Automations',
    description: 'Automated lead routing, custom executive reporting dashboards, and webhook workflows that eliminate manual work.',
    icon: Workflow,
    href: '/services/app-development',
  },
  {
    title: 'Full-Funnel CRO & Testing',
    description: 'A/B landing page testing, offer angles, cart checkout optimization, and behavioral heatmaps for conversion lifts.',
    icon: ShieldCheck,
    href: '/services/website-design-development',
  },
  {
    title: 'Sub-45m Turnaround SLAs',
    description: 'Dedicated team pods, async reporting boards, and active response SLAs engineered for fast-moving brands.',
    icon: Clock,
    href: '/contact',
  },
]

export default function HomeBuild() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Matching Nuxt's exact display typography and clean tone */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
            A curated set of capabilities and growth systems engineered for business compounding and rapid execution.
          </p>
        </div>

        {/* Nuxt 4-Column Feature Grid: Open, borderless, unified purple accent icons sitting directly above crisp titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-14">
          {capabilities.map((item) => {
            const IconComponent = item.icon
            return (
              <article
                key={item.title}
                className="group relative flex flex-col items-start"
              >
                {/* Unified Deep Purple Accent Icon sitting directly on dark canvas */}
                <IconComponent
                  className="h-6 w-6 shrink-0 text-purple-600 transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                {/* White Crisp Title */}
                <h3 className="mt-4 font-heading text-base sm:text-lg font-semibold text-highlighted tracking-tight transition-colors duration-200">
                  <Link href={item.href} className="focus:outline-none">
                    {item.title}
                  </Link>
                </h3>

                {/* Muted Gray Description */}
                <p className="mt-2 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
