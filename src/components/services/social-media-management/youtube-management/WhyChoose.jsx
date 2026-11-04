'use client'

import React from 'react'
import { Users, Video, Layers, Smartphone, ShieldCheck, Globe, Lock, BarChart3, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const reasons = [
  {
    icon: Users,
    title: 'One In-House Team',
    body: 'You work with one coordinated team for strategy, content, SEO, design, editing, and reporting rather than managing disconnected freelancers or agencies.',
  },
  {
    icon: Video,
    title: 'YouTube-Specific Strategy',
    body: 'We treat YouTube differently from short-lived social feeds. The content, packaging, search strategy, and measurement framework are built around YouTube’s unique viewing environment.',
  },
  {
    icon: Layers,
    title: 'Production & Optimization in One Workflow',
    body: 'Your content does not stop at video editing. We connect production with high-converting titles, thumbnails, SEO, publishing, retention analytics, and ongoing optimization.',
  },
  {
    icon: Smartphone,
    title: 'Long-Form + Shorts Strategy',
    body: 'We structure both long-form and Shorts content within one broader channel strategy when both formats fit your target audience and commercial goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Human Review & Approval',
    body: 'Content goes through rigorous human review before publication to maintain accuracy, quality, brand alignment, and consistency.',
  },
  {
    icon: Globe,
    title: 'Bangladesh & International Experience',
    body: 'Framecipher serves businesses in Bangladesh while also executing international-market strategies across the US, UK, Australia, Canada, and UAE.',
  },
  {
    icon: Lock,
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your YouTube channel and business assets remain 100% under your ownership. We use standard delegate access to perform agreed work without ownership risks.',
  },
  {
    icon: BarChart3,
    title: 'Clear Reporting & Communication',
    body: 'You receive transparent monthly reporting around agreed performance metrics, completed deliverables, audience behavior, and recommended next steps.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Framecipher Differentiators · 08 Pillars
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">YouTube Management.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            YouTube management works best when strategy, production, SEO, and business objectives are connected instead of being handed to separate providers.
          </p>
        </div>

        {/* 8 Differentiators Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.title}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
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
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/content-creation", "/services/video-production"]}>
                      {reason.body}
                    </AutoLinks>
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Data-Driven Channel Evolution
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Our goal is to create better content systems, improve discoverability, learn from audience response, and continuously optimize the channel based on verified data.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
