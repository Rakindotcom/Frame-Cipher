'use client'

import React from 'react'
import { Sparkles, MessageSquare, Calendar, Share2, Layers, MousePointerClick, Globe } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const outcomes = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consistent Brand Messaging',
    body: 'Keep important messages, positioning, commercial offers, and campaign information tightly aligned across all the platforms your business uses.',
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Better Campaign Coordination',
    body: 'Plan supporting content around product launches, seasonal promotions, company events, and commercial dates with weeks of runway.',
  },
  {
    icon: Share2,
    number: '03',
    title: 'More Efficient Content Production',
    body: 'Identify repurposing opportunities before shooting so one strong source asset supports multiple relevant platform-specific pieces.',
  },
  {
    icon: Layers,
    number: '04',
    title: 'Stronger Content Coverage',
    body: 'Create a balanced mix of educational, promotional, trust-building, proof-based, and community content across every customer stage.',
  },
  {
    icon: MousePointerClick,
    number: '05',
    title: 'Clearer Calls to Action',
    body: 'Give every piece of content a relevant next step based on its purpose in the funnel:',
    points: [
      'Reading a high-value resource or guide',
      'Visiting the website or product page',
      'Requesting a consultation or quote',
      'Watching another related video deep dive',
      'Sending an inquiry or initiating a purchase',
      'Engaging actively with the brand community',
    ],
  },
  {
    icon: Globe,
    number: '06',
    title: 'Better Cross-Platform Visibility',
    body: 'Coordinate related content across multiple platforms so audiences encounter your brand, campaigns, and expertise across multiple touchpoints.',
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
              Commercial Impact · Operational Realism
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What a Strategic Content Calendar{' '}
            <span className="italic text-frame-accent">Helps Your Business Achieve.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A well-structured content calendar is not a guarantee of specific business results. Its role is to create a stronger planning and execution system that supports your wider marketing objectives.
          </p>
        </div>

        {/* 6 Outcomes Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.number}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 space-y-4 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">
                      Outcome {item.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/content-calendar-strategy" allowed={["/services/content-creation", "/services/content-writing/content-strategy"]}>
                      {item.body}
                    </AutoLinks>
                  </p>

                  {item.points && (
                    <div className="border-t border-white/[0.06] pt-3">
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0 mt-1.5" />
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Plan With Calm Predictability
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Turn reactive scramble into an organized, stress-free publishing operation that drives real business results.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Content Strategy Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
