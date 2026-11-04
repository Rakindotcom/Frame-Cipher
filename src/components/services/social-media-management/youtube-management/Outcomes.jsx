'use client'

import React from 'react'
import { Search, ShieldCheck, Globe, UserCheck, Play, Award, ShoppingBag, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const outcomes = [
  {
    icon: Search,
    title: 'Increase Brand Discovery',
    body: 'Reach people who are actively searching for information, exploring topics, or discovering new creators and brands across YouTube search and recommendations.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Audience Trust',
    body: 'Useful educational content gives potential customers an opportunity to understand your expertise and credibility before they contact or buy from you.',
  },
  {
    icon: Globe,
    title: 'Generate Website Traffic',
    body: 'Relevant videos can direct interested viewers toward your website, high-converting landing pages, product pages, resources, or other destinations.',
  },
  {
    icon: UserCheck,
    title: 'Support Lead Generation',
    body: 'Educational and problem-solving videos can help potential customers understand your service before submitting an inquiry or booking a consultation.',
  },
  {
    icon: Play,
    title: 'Showcase Products & Services',
    body: 'Demonstrations, tutorials, product explanations, comparisons, and customer-focused videos make complex commercial offerings intuitive to understand.',
  },
  {
    icon: Award,
    title: 'Strengthen Expertise & Authority',
    body: 'Consistent, useful content helps your business communicate expertise in a more detailed, memorable format than short-form social posts allow.',
  },
  {
    icon: ShoppingBag,
    title: 'Support Ecommerce Discovery',
    body: 'Product-focused YouTube content helps shoppers discover products, understand their practical benefits, compare options, and move toward purchase.',
  },
]

export default function Outcomes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Commercial Impact · 07 Levers
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What YouTube Management Can{' '}
            <span className="italic text-frame-accent">Help Your Business Achieve.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            YouTube can support different business objectives depending on your market, audience, content, and conversion system.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/website-design-development/landing-pages"]}>
                      {item.body}
                    </AutoLinks>
                  </p>
                </div>
              </article>
            )
          })}

          {/* Honest Framing 8th Spotlight Card */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121C] p-6 space-y-4 shadow-xl shadow-purple-950/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-frame-accent border-b border-white/[0.08] pb-3">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  The Honest Framing
                </span>
              </div>

              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                We build a disciplined content system, publish consistently, and use real performance data to continuously optimize. We do not promise viral shortcuts, fabricated views, or unrealistic vanity guarantees.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Get a Free Consultation
              </PosterButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
