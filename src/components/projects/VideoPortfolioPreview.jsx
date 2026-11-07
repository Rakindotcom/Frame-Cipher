'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Play, X, ArrowUpRight } from 'lucide-react'
import { getVideosByCategory } from '../../data/videoProjects'

export default function VideoPortfolioPreview({
  category = 'product-promotion',
  items = null,
  limit = 4,
  eyebrow = 'Verified Video Deployments',
  title = 'Commercial & Promotional Video Portfolio',
  description = 'High-converting vertical reels and cinematic commercial video work produced in-house by Frame Cipher.',
  buttonText = 'View Full Video Archive →',
  buttonHref = '/projects#short-video-work',
}) {
  const [activeVideo, setActiveVideo] = useState(null)

  const displayedVideos = items || getVideosByCategory(category, limit)

  if (!displayedVideos || displayedVideos.length === 0) return null

  return (
    <>
      <section
        id="video-portfolio-preview"
        className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header Row */}
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
                {title}
              </h2>
              {description && (
                <p className="text-base font-normal leading-relaxed text-zinc-300">
                  {description}
                </p>
              )}
            </div>
            <Link
              href={buttonHref}
              className="group inline-flex h-[52px] items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:border-white/40 hover:bg-white/10 shrink-0"
            >
              <span>{buttonText.replace('→', '').trim()}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>

          {/* Modality 5 Dark Surface Media Cards Grid */}
          <div
            className={`grid gap-6 ${
              displayedVideos.length >= 4
                ? 'sm:grid-cols-2 lg:grid-cols-4'
                : displayedVideos.length === 3
                ? 'md:grid-cols-3'
                : 'sm:grid-cols-2'
            }`}
          >
            {displayedVideos.map((video, idx) => {
              const isProductPromo =
                video.genre === 'product-promotion' ||
                video.tags?.includes('product-promotion')
              const isPodcast =
                video.genre === 'podcast' || video.tags?.includes('podcast')

              return (
                <article
                  key={video.videoId || idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl"
                >
                  <div className="p-4 pb-0">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className={`group/btn relative block w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#18181B] text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 ${
                        video.isShort ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                      aria-label={`Play video: ${video.title}`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover transition duration-300 group-hover/btn:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#09090B]  transition-transform duration-200 group-hover/btn:scale-110">
                          <Play className="h-5 w-5 fill-current ml-0.5" />
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-purple-400">
                          {isProductPromo
                            ? 'Product Promo'
                            : isPodcast
                            ? 'Podcast Short'
                            : 'Commercial Reel'}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                          {video.isShort ? '9:16 Reel' : '16:9 Master'}
                        </span>
                      </div>

                      <h3 className="font-heading text-base font-medium leading-snug tracking-tight text-white line-clamp-2">
                        {video.title}
                      </h3>

                      {video.summary && (
                        <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-400 line-clamp-2">
                          {video.summary}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white transition-all hover:border-purple-500 hover:bg-purple-600 hover:text-white cursor-pointer"
                    >
                      <Play className="h-3 w-3 fill-current" />
                      <span>Watch Preview</span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightweight Video Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-3 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 px-3 mb-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                  {activeVideo.category || 'Video Deployment'}
                </p>
                <h4 className="font-heading text-base font-medium tracking-tight text-white truncate max-w-lg">
                  {activeVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Close video player"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              className={`relative mx-auto overflow-hidden rounded-lg bg-black ${
                activeVideo.isShort
                  ? 'max-h-[75vh] aspect-[9/16]'
                  : 'w-full aspect-video'
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
