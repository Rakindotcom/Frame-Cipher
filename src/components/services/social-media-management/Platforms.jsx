'use client'

import React from 'react'
import Link from 'next/link'
import PosterButton from '../../home/PosterButton'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const platforms = [
  {
    title: 'Facebook',
    href: '/services/social-media-management/facebook',
    body: 'We manage Facebook pages with a focus on useful content, community engagement, customer communication, local discovery, and consistent brand presence.',
    note: 'Depending on your strategy, management can include posts, Reels, Stories, Groups, events, reviews, and community interactions.',
  },
  {
    title: 'Instagram',
    href: '/services/social-media-management/instagram',
    body: 'We manage Instagram content across formats such as feed posts, carousels, Stories, and Reels.',
    note: 'The strategy can combine visual storytelling, educational content, product or service promotion, community interaction, and short-form video based on your audience and business objectives.',
  },
  {
    title: 'LinkedIn',
    href: '/services/social-media-management/linkedin',
    body: 'We manage LinkedIn company pages and can support founder or executive content where it makes sense for a B2B strategy.',
    note: 'Content can include thought leadership, industry insights, company updates, educational posts, employer-brand content, and relevant professional commentary.',
  },
  {
    title: 'TikTok',
    href: '/services/social-media-management/tiktok-management',
    body: 'We create and manage TikTok content around short-form storytelling, native creative formats, relevant trends, and audience discovery.',
    note: 'Content concepts are developed specifically for TikTok instead of simply reposting content created for another platform.',
  },
  {
    title: 'YouTube',
    href: '/services/social-media-management/youtube-management',
    body: 'We support YouTube channel management with a focus on content planning, publishing, titles, descriptions, thumbnails, playlists, and audience engagement.',
    note: 'Where appropriate, we also connect long-form YouTube content with Shorts and other social formats to extend the value of your content production.',
  },
]

export default function Platforms() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               PLATFORM ECOSYSTEM 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Social Media Platforms{' '}
            <span className="italic text-[#A855F7]">We Manage.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Each platform is planned around its own audience, format conventions, and role within your marketing strategy.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <article
              key={platform.title}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Platform {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#A855F7]" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white leading-snug">
                  <Link href={platform.href} className="hover:text-[#A855F7] transition-colors">
                    {platform.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {platform.body}
                </p>

                {platform.note && (
                  <div className="mt-4 rounded-lg border-l-2 border-[#A855F7]/40 border-white/[0.04] bg-[#18181B] p-3 text-xs text-zinc-300 leading-relaxed font-normal">
                    {platform.note}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                <Link
                  href={platform.href}
                  className="inline-flex items-center gap-1.5 text-[#A855F7] hover:text-white transition-colors uppercase tracking-wider text-[11px]"
                >
                  <span>Explore {platform.title} Service</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Action Callout */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Platform Recommendation
            </span>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              There is no universal platform mix. We consider your audience, industry, business goals, content capabilities, and existing performance before recommending the platforms that make sense for your business.
            </p>
          </div>
          <PosterButton href="/contact" variant="outline" className="shrink-0">
            Find the Right Platforms for Your Business
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
