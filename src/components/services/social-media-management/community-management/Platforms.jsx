import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const platforms = [
  {
    number: '01',
    channel: 'Social Network',
    name: 'Facebook Community Management',
    description:
      'Facebook can generate comments, Messenger conversations, reviews, recommendations, and customer questions. We manage the relevant interactions within your agreed scope while keeping responses aligned with your brand voice.',
  },
  {
    number: '02',
    channel: 'Visual Community',
    name: 'Instagram Community Management',
    description:
      'Instagram communities often interact through comments, DMs, Stories, Reels, and other content touchpoints. We help manage those conversations while maintaining a consistent response style across the account.',
  },
  {
    number: '03',
    channel: 'B2B Professional',
    name: 'LinkedIn Community Management',
    description:
      'LinkedIn interactions often involve professional questions, industry discussions, prospects, partners, and business audiences. Responses are adapted to a professional and context-driven communication style.',
  },
  {
    number: '04',
    channel: 'Short-Form Video',
    name: 'TikTok Community Management',
    description:
      'TikTok conversations can develop quickly around videos, trends, questions, and audience reactions. We monitor relevant interactions and respond in a way that fits the platform and your brand.',
  },
  {
    number: '05',
    channel: 'Long-Form & Shorts',
    name: 'YouTube Community Management',
    description:
      'YouTube can generate ongoing discussion around long-form videos, Shorts, and channel content. We can support comment monitoring, response, moderation, and community interaction within the agreed scope. YouTube provides channel owners and moderators with tools for filtering, holding, hiding, and reviewing comments, making moderation an important part of ongoing channel management.',
  },
  {
    number: '06',
    channel: 'Local Search & Maps',
    name: 'Google Business Profile Reviews',
    description:
      'For eligible and verified Business Profiles, businesses can respond to customer reviews. We can support review monitoring and professional response management within the agreed scope. Google also allows Business Profile managers to respond to reviews without requiring businesses to share their account password.',
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Platforms we support for{' '}
              <span className="italic text-frame-accent">community management.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Different platforms create different types of conversations. We adapt response style, moderation, and engagement workflows to the platform rather than using one identical approach everywhere.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x3 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <article
              key={platform.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {platform.channel}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {platform.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {platform.name}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {platform.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                >
                  <span>Connect {platform.name.replace(' Community Management', '').replace(' Reviews', '')}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
