'use client'

import { useState } from 'react'
import { SectionHeading } from '../GrowthPortfolioSection'
import { Play, ArrowRight } from 'lucide-react'

const SHORT_GENRE_TABS = [
  { id: 'All', label: 'All Short Form' },
  { id: 'product-promotion', label: 'Product Promotions & Commercials' },
  { id: 'podcast', label: 'Podcasts & Thought Leadership' },
]

export default function ProjectsVideoSection({
  longVideos,
  shortVideos,
  isLongVideosVisible,
  isShortVideosVisible,
  onPlayVideo,
}) {
  const [selectedGenre, setSelectedGenre] = useState('All')

  // Calculate short video counts
  const counts = {
    All: shortVideos?.length || 0,
    'product-promotion': shortVideos?.filter(
      (v) => v.genre === 'product-promotion' || v.tags?.includes('product-promotion')
    ).length || 0,
    podcast: shortVideos?.filter(
      (v) => v.genre === 'podcast' || v.tags?.includes('podcast')
    ).length || 0,
  }

  const displayedShorts =
    selectedGenre === 'All'
      ? shortVideos
      : shortVideos?.filter((v) => {
          if (selectedGenre === 'product-promotion') {
            return v.genre === 'product-promotion' || v.tags?.includes('product-promotion')
          }
          if (selectedGenre === 'podcast') {
            return v.genre === 'podcast' || v.tags?.includes('podcast')
          }
          return true
        })

  return (
    <>
      {/* Category 02: Long Videos */}
      {isLongVideosVisible && (
        <section
          id="long-video-work"
          className="relative isolate scroll-mt-28 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="02"
              title="Long videos"
              count={`${longVideos.length} pieces`}
            />

            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {longVideos.map((video, index) => (
                <article
                  key={video.id || `${video.videoId}-${index}`}
                  className="group rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#151518] flex flex-col justify-between relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/50 before:to-transparent before:transition-all"
                >
                  <div className="p-4 sm:p-5">
                    <button
                      type="button"
                      onClick={() => onPlayVideo(video)}
                      className="group/btn relative block aspect-video w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950 text-left cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                      aria-label={`Play the video: ${video.title}`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover transition duration-500 group-hover/btn:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-90 sm:opacity-0 transition-opacity duration-300 sm:group-hover/btn:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAFAFA] text-[#09090B] shadow-lg">
                          <Play className="h-5 w-5 fill-current ml-0.5" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="grid gap-4 p-5 sm:p-6 pt-0">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[1.1px] tabular-nums text-purple-400 font-semibold">
                        {String(index + 1).padStart(2, '0')} / Long-Form
                      </p>
                      <h3 className="mt-2 font-heading text-lg sm:text-xl font-medium leading-tight tracking-tight text-white">
                        {video.title}
                      </h3>
                      {video.category && (
                        <p className="mt-2 text-xs font-mono text-zinc-400">
                          {video.category}
                        </p>
                      )}
                      {video.summary && (
                        <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                          {video.summary}
                        </p>
                      )}
                    </div>
                    <div className="pt-2 border-t border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => onPlayVideo(video)}
                        className="group/btn inline-flex min-h-[44px] h-[44px] items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-[#18181B] px-5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 hover:border-purple-600/40 hover:bg-[#1f1f23] cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                      >
                        <span>Play video</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category 03: Short Videos */}
      {isShortVideosVisible && (
        <section
          id="short-video-work"
          className="relative isolate scroll-mt-36 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="03"
              title="Short videos"
              count={`${shortVideos.length} pieces`}
            />

            {/* Sub-filter tabs for short video formats */}
            <div className="mt-6 flex w-full items-center gap-2 overflow-x-auto scrollbar-none py-1.5 flex-nowrap max-w-full">
              {SHORT_GENRE_TABS.map((tab) => {
                const isActive = selectedGenre === tab.id
                const count = counts[tab.id] || 0
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedGenre(tab.id)}
                    className={`shrink-0 whitespace-nowrap min-h-[40px] flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer ${
                      isActive
                        ? 'bg-[#FAFAFA] text-[#09090B] shadow-md'
                        : 'border border-white/[0.08] bg-[#121214] text-zinc-400 hover:border-purple-600/40 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-mono tabular-nums ${
                        isActive
                          ? 'bg-black/10 text-[#09090B]'
                          : 'bg-white/[0.06] text-zinc-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {displayedShorts.map((video, index) => {
                const isProductPromo =
                  video.genre === 'product-promotion' ||
                  video.tags?.includes('product-promotion')
                const isPodcast =
                  video.genre === 'podcast' || video.tags?.includes('podcast')

                return (
                  <article
                    key={video.id || `${video.videoId}-${index}`}
                    className="group rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#151518] flex flex-col justify-between relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/50 before:to-transparent before:transition-all"
                  >
                    <div className="p-4 sm:p-5">
                      <button
                        type="button"
                        onClick={() => onPlayVideo(video)}
                        className="group/btn relative block aspect-[9/16] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950 text-left cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                        aria-label={`Play the short video: ${video.title}`}
                      >
                        <img
                          src={video.thumbnailUrl}
                          alt={`${video.title} thumbnail`}
                          className="h-full w-full object-cover transition duration-500 group-hover/btn:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAFAFA] text-[#09090B] shadow-lg">
                            <Play className="h-6 w-6 fill-current ml-0.5" />
                          </span>
                        </div>
                      </button>
                    </div>
                    <div className="grid gap-4 p-5 sm:p-6 pt-0">
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-2">
                          <span className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider border border-purple-500/30 bg-purple-500/10 text-purple-300">
                            {isProductPromo
                              ? 'Product Promo'
                              : isPodcast
                              ? 'Podcast / Mindset'
                              : 'Commercial'}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[1.1px] tabular-nums text-zinc-500">
                          /{String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-1 font-heading text-base sm:text-lg font-medium leading-tight tracking-tight text-white line-clamp-2">
                          {video.title}
                        </h3>
                        {video.category && (
                          <p className="mt-1 text-xs font-mono text-zinc-400">
                            {video.category}
                          </p>
                        )}
                      </div>
                      <div className="pt-2 border-t border-white/[0.08]">
                        <button
                          type="button"
                          onClick={() => onPlayVideo(video)}
                          className="group/btn inline-flex min-h-[44px] h-[44px] items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-[#18181B] px-4 font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 hover:border-purple-600/40 hover:bg-[#1f1f23] cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                        >
                          <span>Play short</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
