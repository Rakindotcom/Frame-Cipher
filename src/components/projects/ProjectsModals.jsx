'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export function WorkArchiveModal({
  isOpen,
  onClose,
  designWorks,
  onSelectWork,
}) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-label="Full creative visual archive"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-7xl flex-col rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">
              Full Archive Grid
            </p>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl">
              All Selected Visual Work
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          >
            Close &times;
          </button>
        </div>

        <div className="mt-6 min-h-0 flex-1 overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#09090B] p-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {designWorks.map((work) => (
              <article key={work.src} className="group">
                <button
                  type="button"
                  onClick={() => onSelectWork(work)}
                  className="relative block aspect-square w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#18181B] text-left transition duration-300 hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  aria-label={`View full image ${work.number}`}
                >
                  <Image
                    src={work.src}
                    alt={`Frame Cipher selected work ${work.number}`}
                    fill
                    sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 24vw"
                    quality={80}
                    className="object-contain p-2 transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-4">
                    <span className="rounded-full border border-white/20 bg-black/80 backdrop-blur-md px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-white">
                      View preview &rarr;
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorkImageModal({ work, onClose }) {
  if (!work) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-label={`Work image ${work.number} full preview`}
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-[92vh] w-full max-w-7xl flex-col rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">
              Full Preview
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tabular-nums text-zinc-400">
              Piece #{work.number}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          >
            Close &times;
          </button>
        </div>
        <div className="relative mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B] p-4 flex items-center justify-center">
          <Image
            src={work.src}
            alt={`Frame Cipher selected work ${work.number}`}
            fill
            sizes="(max-width: 767px) 92vw, 1200px"
            quality={85}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export function VideoPlayerModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [video, onClose])

  if (!video) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} video player`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[96vh] sm:max-h-[92vh] w-full max-w-5xl flex-col rounded-xl border border-white/[0.08] bg-[#121214] p-4 sm:p-6 overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-400">
                {video.isShort ? 'Short Reel' : 'Long-Form Video'}
              </span>
              {video.category && (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase text-zinc-400">
                  {video.category}
                </span>
              )}
            </div>
            <h2 className="mt-1 font-heading text-lg sm:text-2xl font-bold leading-tight tracking-tight text-white truncate">
              {video.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] h-10 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-4 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
              title="Open video directly on YouTube in a new tab"
            >
              <span>YouTube</span>
              <span className="text-xs">&rarr;</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[44px] h-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
              aria-label="Close video player"
            >
              Close &times;
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black p-2 sm:p-3  flex items-center justify-center overflow-hidden">
          <div
            className={
              video.isShort
                ? 'mx-auto aspect-[9/16] h-[54vh] sm:h-[62vh] max-h-[560px] w-auto max-w-full'
                : 'mx-auto aspect-video w-full max-h-[54vh] sm:max-h-[62vh]'
            }
          >
            <iframe
              key={video.videoId}
              className="h-full w-full rounded-xl"
              src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 px-1 font-mono text-[11px] text-zinc-400">
          <span className="truncate">&bull; Click video or controls to play / pause</span>
          {video.summary && (
            <span className="hidden md:inline-block max-w-xl truncate text-right text-zinc-500">
              {video.summary}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function PreviewToast({ show, onClose }) {
  if (!show) return null

  return (
    <div
      className="fixed bottom-6 left-6 right-6 z-40 md:right-auto md:max-w-md rounded-2xl border border-white/[0.12] bg-[#18181B]/95 backdrop-blur-xl p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Visual Archive Tip
          </p>
          <p className="mt-1.5 text-xs font-normal leading-relaxed text-zinc-300">
            The carousel cycles automatically. Click <span className="font-medium text-white">View full archive</span> to browse all 25 pieces in an interactive grid.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-white transition-colors hover:border-white/40 hover:bg-white/10"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
