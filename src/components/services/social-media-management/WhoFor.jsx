'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const audiences = [
  {
    title: 'Small Businesses',
    body: 'Small businesses can use professional social media management to maintain a consistent presence without assigning daily social tasks to an internal team.',
  },
  {
    title: 'Startups',
    body: 'Startups can build their initial social presence around clear messaging, audience education, brand awareness, and early community development.',
  },
  {
    title: 'Ecommerce Brands',
    body: 'Ecommerce businesses can use social content to showcase products, explain benefits, answer common questions, highlight customer experiences, and support product discovery.',
  },
  {
    title: 'Local Businesses',
    body: 'Local businesses can use social media to maintain an active presence, communicate with nearby customers, showcase products or services, and support local discovery.',
  },
  {
    title: 'B2B Companies',
    body: 'B2B businesses can use LinkedIn and other relevant platforms to share expertise, company updates, industry insights, educational content, and thought leadership.',
  },
  {
    title: 'Personal Brands & Founders',
    body: 'Founders, consultants, professionals, and creators can use social media to build authority and communicate expertise through a consistent personal brand.',
  },
  {
    title: 'Established Businesses',
    body: 'Established businesses can use professional social media management to maintain multiple platforms, coordinate campaigns, manage communities, and keep brand communication consistent.',
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               AUDIENCE FIT 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Is Social Media Management{' '}
            <span className="italic text-[#A855F7]">For?</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The plan, platform mix, and content volume are adjusted to the audience you already have and the stage your business is at.
          </p>
        </div>

        {/* 7 Audience Cards + 1 Advisory Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Segment 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Tailored Mix
                  </span>
                </div>

                <h3 className="font-heading text-lg font-medium text-white leading-snug">
                  {audience.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {audience.body}
                </p>
              </div>
            </article>
          ))}

          {/* Not Sure Where You Fit Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#A855F7]/30 bg-frame-accent/[0.04] p-6 space-y-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                Custom Evaluation
              </span>
              <h3 className="mt-2 font-heading text-lg font-medium text-white">
                Not Sure Where You Fit?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                The free initial social audit helps us understand your requirements before recommending a plan, so you never pay for scope you do not need.
              </p>
            </div>
            <PosterButton href="/contact" variant="accent" className="w-full justify-center">
              Get Free Social Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
