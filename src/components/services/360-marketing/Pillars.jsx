import Link from 'next/link'
import { SectionIntro } from '../../Kinetic'
import { Compass, Video, TrendingUp, Search, Code2, Cpu, Check, ArrowRight } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Strategic Brand Positioning & Category Moats',
    icon: Compass,
    summary: 'Clarifying why you exist, who you serve, and why customers must choose you over every alternative.',
    bullets: [
      'Comprehensive customer persona (ICP) and objection mapping',
      'Value proposition engineering & competitive moat formulation',
      'Offer structure design: pricing strategy, bundles, guarantees & bonuses',
      'Brand voice, messaging framework, and public PR narrative guidelines',
    ],
    link: '/services/content-creation/branding',
    linkText: 'Explore Brand Architecture',
  },
  {
    number: '02',
    title: 'Creative Media & High-Retention Video Production',
    icon: Video,
    summary: 'Cinematic commercials, breakout short-form video reels, and conversion-engineered ad creatives.',
    bullets: [
      'Short-form reels, shorts, and TikTok video production (scripted, shot & edited)',
      'High-end 4K commercial video production and brand documentaries',
      'Conversion-focused ad creative batches: UGC angles, founder stories & motion demos',
      'Studio product photography, 3D renderings, and kinetic digital design assets',
    ],
    link: '/services/content-creation/video-production',
    linkText: 'Explore Video Production',
  },
  {
    number: '03',
    title: 'Precision Multi-Channel Paid Advertising',
    icon: TrendingUp,
    summary: 'Targeted media buying across Meta, Google, YouTube, and LinkedIn engineered for profitable acquisition.',
    bullets: [
      'Meta Ads (Facebook & Instagram): CBO/ABO scaling, Advantage+ and creative testing matrices',
      'Google Search & Performance Max (PMax): capturing high-intent commercial buyers',
      'YouTube pre-roll & in-feed discovery campaigns for visual category authority',
      'LinkedIn Ads & Account-Based Marketing (ABM) for high-ticket B2B client acquisition',
    ],
    link: '/services/paid-advertising',
    linkText: 'Explore Paid Advertising',
  },
  {
    number: '04',
    title: 'Technical, Programmatic & Local SEO Dominance',
    icon: Search,
    summary: 'Ensuring your brand dominates Google organic search and local map packs when buyers research.',
    bullets: [
      'Comprehensive technical SEO architecture: crawlability, Core Web Vitals & schema markup',
      'Commercial keyword clustering and high-intent programmatic service page content',
      'Local SEO & Google Business Profile 3-pack domination across Dhaka and Bangladesh',
      'Generative Engine Optimization (GEO/AEO) for modern AI-assisted search tools',
    ],
    link: '/services/seo',
    linkText: 'Explore Search Architecture',
  },
  {
    number: '05',
    title: 'Conversion Web Infrastructure & CRO',
    icon: Code2,
    summary: 'Fast, bespoke landing pages and digital touchpoints engineered to convert clicks into paying customers.',
    bullets: [
      'Custom Next.js & Webflow landing pages with sub-100ms Largest Contentful Paint (LCP)',
      'Frictionless lead capture flows, custom price calculators & instant checkout paths',
      'Continuous A/B split-testing: headline angles, offer framing, proof placements & form steps',
      'Mobile-first responsive UX optimized for Bangladesh network realities and mobile shoppers',
    ],
    link: '/services/website-design-development',
    linkText: 'Explore Web Development',
  },
  {
    number: '06',
    title: 'Lifecycle CRM, WhatsApp Automations & Tracking',
    icon: Cpu,
    summary: 'Automating customer retention, nurturing warm inquiries, and attributing every single dollar earned.',
    bullets: [
      'Meta Conversions API (CAPI) & server-side Google Tag Manager (sGTM) tracking setup',
      'WhatsApp Business API chatbots and automated lead routing for immediate sales follow-up',
      'Lifecycle email marketing: automated welcome series, abandoned cart recovery & VIP retention',
      'Custom real-time Looker Studio executive dashboards tracking actual blended CAC, ROAS & LTV',
    ],
    link: '/services/app-development/saas-apps',
    linkText: 'Explore CRM & Automations',
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="relative isolate px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 flex justify-center">
        <div className="h-96 w-[800px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Complete 360 Marketing Architecture.">
          A true 360-degree marketing system is not a random checklist of services. It is an interlocking
          flywheel where each discipline reinforces the next to compound your brand equity and revenue.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.number}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {pillar.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/[0.08] pt-5 text-sm font-normal leading-relaxed text-zinc-200">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-5">
                  <Link
                    href={pillar.link}
                    className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.12] bg-[#18181B] px-5 text-xs font-medium text-white transition-all duration-200 hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white group"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
