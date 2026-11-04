'use client'

import React from 'react'
import { ShoppingBag, Sparkles, Utensils, MapPin, Briefcase, Cpu, UserCheck, Globe, Check } from 'lucide-react'

const audiences = [
  {
    num: '01',
    title: 'Ecommerce & Product Brands',
    icon: ShoppingBag,
    body: 'We create product-focused content that can explain, demonstrate, compare, and contextualize products.',
    points: [
      'Product education',
      'Demonstrations',
      'UGC & Creator content',
      'Product storytelling',
      'Lifestyle videos',
    ],
  },
  {
    num: '02',
    title: 'Fashion, Beauty & Lifestyle Brands',
    icon: Sparkles,
    body: 'Visual categories can use TikTok to demonstrate products, showcase transformations, explain routines, introduce collections, and participate in relevant cultural conversations.',
    note: 'We build content around the brand rather than simply copying trending formats.',
  },
  {
    num: '03',
    title: 'Food & Hospitality Businesses',
    icon: Utensils,
    body: 'Restaurants, cafes, hotels, food brands, and hospitality businesses can use short-form video to showcase:',
    points: [
      'Products & Menus',
      'Atmosphere & Experiences',
      'Locations & Spaces',
      'People & Team',
      'Customer moments',
      'Behind-the-scenes activity',
    ],
    note: 'Local context and geolocation discoverability are especially critical for these businesses.',
  },
  {
    num: '04',
    title: 'Local Businesses',
    icon: MapPin,
    body: 'TikTok supports hyper-local brand awareness for businesses serving defined geographic markets. We develop location-relevant content around:',
    points: [
      'Products & Services',
      'Customer questions',
      'Team expertise',
      'Local interests & culture',
      'Local promotions',
      'Location-specific experiences',
    ],
  },
  {
    num: '05',
    title: 'Service Businesses',
    icon: Briefcase,
    body: 'Service businesses often need to explain how they solve problems before a customer feels ready to book an inquiry. We produce:',
    points: [
      'Educational videos',
      'Interactive FAQs',
      'Service demonstrations',
      'Problem-and-solution content',
      'Expert commentary',
      'Client success stories',
    ],
  },
  {
    num: '06',
    title: 'SaaS & Technology Businesses',
    icon: Cpu,
    body: 'Technology brands simplify complex workflows into bite-sized, high-retention video formats through:',
    points: [
      'Step-by-step tutorials',
      'Product demonstrations',
      'Real-world use cases',
      'Founder perspectives',
      'Industry commentary',
      'Feature explanations',
    ],
  },
  {
    num: '07',
    title: 'Creator-Led & Personal Brands',
    icon: UserCheck,
    body: 'Founders, consultants, creators, coaches, and public-facing professionals need a content system built around their knowledge. We turn expertise into repeatable content formats while maintaining authentic personal authority.',
  },
  {
    num: '08',
    title: 'International Businesses',
    icon: Globe,
    body: 'Framecipher supports businesses targeting audiences beyond Bangladesh across the US, UK, UAE, Australia, Canada, and Europe. Scope adapts around:',
    points: [
      'Target-market language',
      'Local terminology',
      'Cultural references',
      'Audience expectations',
      'Local trends',
      'Publishing windows',
    ],
    note: 'We do not simply publish Bangladesh-focused content to an international audience.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Market Fit · Who We Serve
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Our TikTok Management{' '}
            <span className="italic text-frame-accent">Service Is For.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our TikTok management service can be adapted to different business models, audiences, and content requirements across Bangladesh and international markets.
          </p>
        </div>

        {/* 8 Market Segments Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Segment {item.num} · </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {item.body}
                  </p>

                  {item.points && (
                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                        Tailored Focus:
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-400">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {item.note && (
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200">Standard: </strong>
                    {item.note}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
