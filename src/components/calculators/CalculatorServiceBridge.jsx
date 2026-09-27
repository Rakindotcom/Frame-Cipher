'use client'

import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
} from 'lucide-react'

const SERVICE_CARDS = [
  {
    title: 'Meta Ads Management',
    slug: '/services/paid-advertising/meta-ads',
    category: 'Facebook & Instagram',
    description:
      'Advantage+ shopping campaigns, dynamic creative testing (DCT), CAPI server-side tracking, and creative fatigue rotation for high-volume scale.',
    deliverables: ['Creative Testing Matrices', '7-Day Click Attribution', 'Advantage+ Audience Setup'],
    ctaText: 'View Meta Ads Service',
  },
  {
    title: 'Google Ads Architecture',
    slug: '/services/paid-advertising/google-ads',
    category: 'Search & Performance Max',
    description:
      'High-intent search keyword structures, negative match keyword shields, single-theme ad groups (STAGs), and Performance Max asset groups.',
    deliverables: ['Search Intent Funnels', 'Quality Score Engineering', 'Server-Side Conversions'],
    ctaText: 'View Google Ads Service',
  },
  {
    title: 'TikTok Ads & Creative Sprints',
    slug: '/services/paid-advertising/tiktok-ads',
    category: 'Short-Form Video & UGC',
    description:
      'Viral creator hook mechanics, 6-second retention engineering, Spark Ads amplification, and direct TikTok Shop catalog integration.',
    deliverables: ['Short-Form UGC Production', 'Spark Ads Management', 'TikTok Shop Funnels'],
    ctaText: 'View TikTok Ads Service',
  },
  {
    title: 'ChatGPT & AI Search Optimization',
    slug: '/services/paid-advertising/chatgpt-ads',
    category: 'Conversational Commerce',
    description:
      'Sponsored answers, interactive AI product cards, entity citations, and conversational search engine optimization (GEO/AEO).',
    deliverables: ['Entity Knowledge Optimization', 'Conversational Citations', 'Shopping Assistant Feeds'],
    ctaText: 'View ChatGPT Ads Service',
  },
  {
    title: 'Full Paid Advertising Engine',
    slug: '/services/paid-advertising',
    category: 'Cross-Channel Media Buying',
    description:
      'Holistic cross-channel performance marketing combining Search, Social, Video, and Retargeting with strict unit economics discipline.',
    deliverables: ['Omnichannel Media Allocation', 'Blended MER Tracking', 'Continuous Creative Testing'],
    ctaText: 'Explore Paid Advertising Pillar',
  },
  {
    title: '360 Marketing Operating System',
    slug: '/services/360-marketing',
    category: 'Full-Funnel Growth Infrastructure',
    description:
      'Complete omnichannel system uniting brand strategy, high-converting landing pages, SEO authority, paid media, and customer retention.',
    deliverables: ['16-Module Growth System', 'Conversion Rate Optimization', 'Full Brand Architecture'],
    ctaText: 'Explore 360 Marketing OS',
  },
]

export default function CalculatorServiceBridge() {
  return (
    <section className="border-2 border-frame-border bg-frame-bg p-4 sm:p-6 md:p-10" id="related-services">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-frame-border pb-8">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-frame-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-frame-accent">
              Agency Execution Services
            </span>
          </div>
          <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            Turn These Projections Into Real Revenue
          </h3>
          <p className="mt-2 max-w-2xl text-xs md:text-sm text-frame-muted-fg leading-relaxed">
            Calculations without execution are just theoretical spreadsheets. Frame Cipher is the specialized growth partner that brings these models to life.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex w-full max-w-full items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-center text-xs font-black uppercase tracking-wider text-frame-accent-fg transition hover:bg-transparent hover:text-frame-fg md:w-auto"
        >
          Book a Free Media Audit <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICE_CARDS.map((srv, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 transition-all hover:border-frame-accent hover:bg-frame-muted/20"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
                {srv.category}
              </span>
              <h4 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {srv.title}
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-frame-muted-fg">
                {srv.description}
              </p>

              <div className="mt-5 space-y-1.5 border-t border-frame-border/80 pt-4">
                {srv.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-frame-fg">
                    <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-frame-border/80">
              <Link
                href={srv.slug}
                className="group flex items-center justify-between text-xs font-black uppercase tracking-wider text-frame-accent hover:text-white transition"
              >
                <span>{srv.ctaText}</span>
                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
