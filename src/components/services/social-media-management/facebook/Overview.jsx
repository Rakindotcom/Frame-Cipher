'use client'

import React from 'react'
import PosterButton from '../../../home/PosterButton'

const businessTypes = [
  {
    step: '01',
    title: 'For a Local Business',
    body: 'Facebook may help customers discover your location, check reviews, and start a conversation.',
  },
  {
    step: '02',
    title: 'For Ecommerce Brands',
    body: 'It can support product discovery, customer questions, social proof, and repeat engagement.',
  },
  {
    step: '03',
    title: 'For Service Businesses',
    body: 'It can help potential customers understand your expertise before they contact you.',
  },
]

const approachList = [
  'Facebook Page optimization',
  'Facebook content strategy',
  'Branded graphics and creative content',
  'Reels, Stories, and feed content',
  'Content calendar planning',
  'Publishing and scheduling',
  'Comment and Messenger management',
  'Review monitoring and response',
  'Page moderation',
  'Facebook Page SEO and discoverability',
  'Audience and competitor research',
  'Performance reporting',
  'Ongoing content optimization',
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
               STRATEGIC PURPOSE · BUSINESS ALIGNMENT 
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Facebook Management Built Around{' '}
            <span className="italic text-frame-accent">Your Business Goals.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Facebook management should not mean publishing random posts every week. Your Page has a different job depending on your business. That is why we build your Facebook management strategy around your business model, audience, customer journey, content opportunities, and measurable goals.
          </p>
        </div>

        {/* Modality 3: 3 Business Models Blueprint Matrix */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((type) => (
            <div
              key={type.title}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Model {type.step}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-xl">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {type.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Approach Matrix & Audit Callout Split */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Approach List (8 cols) */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Strategic Scope Matrix
              </span>
              <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Our approach combines:
              </h3>
            </div>

            <div className="grid border-t border-white/[0.08] sm:grid-cols-2">
              {approachList.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-white/[0.08] py-3.5 pr-4 transition-colors duration-200 hover:bg-white/[0.02]"
                >
                  <span className="font-mono text-[10px] text-zinc-500 pt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-normal text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audit CTA Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14] sm:p-8">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Free Facebook Page Audit
                </span>
                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  See what your Page is communicating
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  A poorly structured Page creates friction before a customer ever contacts you. We review the information customers see and the operational setup behind your Page.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3.5 border-t border-white/[0.08] pt-6">
                <PosterButton href="/contact" variant="accent" className="w-full">
                  Get Your Facebook Page Audited
                </PosterButton>
                <PosterButton href="/contact" variant="outline" className="w-full">
                  Request a Custom Plan
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
