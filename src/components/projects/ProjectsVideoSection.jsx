'use client'

import { useState } from 'react'
import { SectionHeading } from '../GrowthPortfolioSection'
import { Play } from 'lucide-react'

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
          className="scroll-mt-28 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-[95vw]">
            <SectionHeading
              number="02"
              title="Long videos"
              count={`${longVideos.length} pieces`}
            />

            <div className="mt-7 grid border-l border-t border-frame-border bg-frame-bg grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {longVideos.map((video, index) => (
                <article
                  key={video.videoId}
                  className="border-b border-r border-frame-border bg-frame-bg flex flex-col justify-between"
                >
                  <div className="p-3.5 sm:p-5">
                    <button
                      type="button"
                      onClick={() => onPlayVideo(video)}
                      className="group relative block aspect-video w-full overflow-hidden rounded-md border-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      aria-label={`Play the video: ${video.title}`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-90 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100">
                        <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-frame-accent text-frame-accent-fg shadow-lg">
                          <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-current ml-0.5" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="grid gap-4 sm:gap-5 p-3.5 sm:p-5 pt-0">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                        {String(index + 1).padStart(2, '0')} / Long-Form
                      </p>
                      <h3 className="mt-2 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
                        {video.title}
                      </h3>
                      {video.category && (
                        <p className="mt-2 text-xs font-mono font-semibold uppercase tracking-wider text-frame-muted-fg">
                          {video.category}
                        </p>
                      )}
                      {video.summary && (
                        <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                          {video.summary}
                        </p>
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => onPlayVideo(video)}
                        className="w-full sm:w-auto border-2 border-frame-accent bg-frame-accent px-4 py-2.5 sm:py-3 text-center text-xs font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      >
                        Play the video &rarr;
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
          className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-[95vw]">
            <SectionHeading
              number="03"
              title="Short videos"
              count={`${shortVideos.length} pieces`}
            />

            {/* Sub-filter tabs for short video formats - Scrollable on a single line */}
            <div className="mt-5 flex w-full items-center gap-2 overflow-x-auto scrollbar-x py-1.5 flex-nowrap max-w-full">
              {SHORT_GENRE_TABS.map((tab) => {
                const isActive = selectedGenre === tab.id
                const count = counts[tab.id] || 0
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedGenre(tab.id)}
                    className={`shrink-0 whitespace-nowrap flex items-center gap-2 border-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                        : 'border-frame-border bg-frame-bg text-frame-muted-fg hover:border-frame-fg hover:text-frame-fg'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                        isActive
                          ? 'bg-frame-accent-fg/20 text-frame-accent-fg'
                          : 'bg-frame-muted text-frame-muted-fg'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-7 grid border-l border-t border-frame-border bg-frame-bg grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {displayedShorts.map((video, index) => {
                const isProductPromo =
                  video.genre === 'product-promotion' ||
                  video.tags?.includes('product-promotion')
                const isPodcast =
                  video.genre === 'podcast' || video.tags?.includes('podcast')

                return (
                  <article
                    key={video.videoId}
                    className="border-b border-r border-frame-border bg-frame-bg flex flex-col justify-between"
                  >
                    <div className="p-5">
                      <button
                        type="button"
                        onClick={() => onPlayVideo(video)}
                        className="group relative block aspect-[9/16] w-full overflow-hidden rounded-md border-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                        aria-label={`Play the short video: ${video.title}`}
                      >
                        <img
                          src={video.thumbnailUrl}
                          alt={`${video.title} thumbnail`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-frame-accent text-frame-accent-fg shadow-lg">
                            <Play className="h-6 w-6 fill-current ml-0.5" />
                          </span>
                        </div>
                        <span className="absolute bottom-2.5 right-2.5 rounded bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                          Reel
                        </span>
                      </button>
                    </div>
                    <div className="grid gap-4 p-5 pt-0">
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-2">
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
                              ? 'Podcast / Mindset'
                              : 'Commercial'}
                          </span>
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                          {String(index + 1).padStart(2, '0')} / Short
                        </p>
                        <h3 className="mt-1 font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-xl line-clamp-2">
                          {video.title}
                        </h3>
                        {video.category && (
                          <p className="mt-1 text-xs font-mono text-frame-muted-fg">
                            {video.category}
                          </p>
                        )}
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => onPlayVideo(video)}
                          className="w-full border-2 border-frame-accent bg-frame-accent px-4 py-2.5 text-center text-xs font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                        >
                          Play the short &rarr;
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

