'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, X } from 'lucide-react'
import { getVideosByCategory, shortVideos } from '../../data/videoProjects'

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
        className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                {eyebrow}
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.2rem,6vw,5.5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-base md:text-lg font-medium text-frame-muted-fg leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            <Link
              href={buttonHref}
              className="inline-flex min-h-12 items-center justify-center border-2 border-frame-border px-5 py-3 text-center text-sm font-black uppercase tracking-tighter text-frame-fg transition hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg shrink-0"
            >
              {buttonText}
            </Link>
          </div>

          <div
            className={`grid gap-5 ${
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
                  className="group flex flex-col overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors hover:border-frame-accent"
                >
                  <div className="p-4 pb-0">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className={`group/btn relative block w-full overflow-hidden rounded border-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent ${
                        video.isShort ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                      aria-label={`Play video: ${video.title}`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover transition duration-300 group-hover/btn:scale-105 group-hover/btn:opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-frame-accent text-frame-accent-fg shadow-xl">
                          <Play className="h-6 w-6 fill-current ml-0.5" />
                        </span>
                      </div>
                      <span className="absolute bottom-2.5 right-2.5 rounded bg-black/85 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        {video.isShort ? '9:16 Reel' : '16:9 Master'}
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isProductPromo
                            ? 'border border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                            : isPodcast
                            ? 'border border-purple-500/50 bg-purple-500/10 text-purple-600 dark:text-purple-400'
                            : 'border border-frame-accent/50 bg-frame-accent/10 text-frame-accent'
                        }`}
                      >
                        {isProductPromo
                          ? 'Product Promo'
                          : isPodcast
                          ? 'Podcast Short'
                          : 'Commercial Reel'}
                      </span>
                      <span className="text-[10px] font-mono text-frame-muted-fg">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg line-clamp-2">
                      {video.title}
                    </h3>

                    {video.summary && (
                      <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg line-clamp-2">
                        {video.summary}
                      </p>
                    )}

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="inline-flex text-xs font-black uppercase tracking-tighter text-frame-accent hover:underline"
                      >
                        Play video &rarr;
                      </button>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono font-bold uppercase text-frame-muted-fg hover:text-frame-fg"
                      >
                        YouTube ↗
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Embedded Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl border-2 border-frame-border bg-frame-bg p-3 sm:p-4 md:p-6 shadow-2xl overflow-hidden max-h-[96vh] sm:max-h-[94vh] flex flex-col gap-2 sm:gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 border-b-2 border-frame-border pb-2.5">
              <div className="min-w-0 flex-1">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-frame-accent">
                  {activeVideo.category || (activeVideo.isShort ? 'Short Reel' : 'Long-Form Video')}
                </span>
                <h3 className="font-heading text-base sm:text-xl md:text-2xl font-bold uppercase text-frame-fg truncate">
                  {activeVideo.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border-2 border-frame-border bg-frame-bg px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-accent hover:text-frame-accent"
                  title="Open video directly on YouTube"
                >
                  <span className="hidden sm:inline">Watch on </span>
                  <span>YouTube</span>
                  <span className="text-xs sm:text-sm">↗</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border-2 border-frame-border text-frame-fg hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg transition-colors"
                  aria-label="Close video player"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            <div className="border-2 border-frame-border bg-black p-1.5 sm:p-2 flex items-center justify-center">
              <div
                className={`mx-auto w-full ${
                  activeVideo.isShort
                    ? 'aspect-[9/16] h-[56vh] sm:h-[65vh] max-h-[580px] max-w-sm'
                    : 'aspect-video max-h-[56vh] sm:max-h-[65vh]'
                }`}
              >
                <iframe
                  key={activeVideo.videoId}
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-frame-muted-fg px-1">
              <span>▶ Click video or controls to play / pause</span>
              {activeVideo.summary && (
                <span className="hidden md:inline-block max-w-md truncate text-right">
                  {activeVideo.summary}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
