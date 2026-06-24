'use client'

import { useEffect, useState } from 'react'
import { PageHero } from '../components/Kinetic'

const designWorks = Array.from({ length: 40 }, (_, index) => {
  const number = index + 1

  return {
    number,
    src: `/${number}.webp`,
  }
})

const videoWorkSections = [
  {
    title: 'Long videos',
    description: 'Long-form video work produced for deeper storytelling, campaign context, and platform publishing.',
    items: [
      {
        title: 'Long video 01',
        videoId: 'j5r_HVWKnAA',
        thumbnailUrl: 'https://i.ytimg.com/vi/j5r_HVWKnAA/hqdefault.jpg',
      },
      {
        title: 'Long video 02',
        videoId: 'bqdK_EifW8k',
        thumbnailUrl: 'https://i.ytimg.com/vi/bqdK_EifW8k/hqdefault.jpg',
      },
      {
        title: 'Long video 03',
        videoId: '3MR8SvdrMkU',
        thumbnailUrl: 'https://i.ytimg.com/vi/3MR8SvdrMkU/hqdefault.jpg',
      },
    ],
  },
  {
    title: 'Short videos',
    description: 'Vertical short-form edits built for retention, rhythm, and fast social distribution.',
    items: [
      {
        title: 'Short video 01',
        videoId: 'KGD6GGqEliA',
        thumbnailUrl: 'https://i.ytimg.com/vi/KGD6GGqEliA/hqdefault.jpg',
        isShort: true,
      },
      {
        title: 'Short video 02',
        videoId: 'Qw1unPMli6k',
        thumbnailUrl: 'https://i.ytimg.com/vi/Qw1unPMli6k/hqdefault.jpg',
        isShort: true,
      },
      {
        title: 'Short video 03',
        videoId: 'fkiGzxB6qTE',
        thumbnailUrl: 'https://i.ytimg.com/vi/fkiGzxB6qTE/hqdefault.jpg',
        isShort: true,
      },
    ],
  },
]

export default function ProjectsPage() {
  const [activeWork, setActiveWork] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [showPreviewToast, setShowPreviewToast] = useState(true)

  useEffect(() => {
    const toastTimer = window.setTimeout(() => {
      setShowPreviewToast(false)
    }, 6500)

    return () => window.clearTimeout(toastTimer)
  }, [])

  useEffect(() => {
    if (!activeWork && !activeVideo) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveWork(null)
        setActiveVideo(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeWork, activeVideo])

  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Work"
        meta="Selected creative archive"
        number="06"
        title="Creative work across formats"
      >
        A growing archive of Frame Cipher work across brand visuals, campaign assets, social
        content, and production pieces.
      </PageHero>

      <section className="border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 flex flex-col gap-4 border-b-2 border-frame-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
                Video work
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.8rem,8vw,8rem)] font-bold uppercase leading-[0.82] tracking-tighter">
                Motion portfolio
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">
              Selected long-form productions and short-form social videos from the Frame Cipher
              video archive.
            </p>
          </div>

          <div className="grid gap-12">
            {videoWorkSections.map((section) => (
              <section key={section.title} aria-labelledby={`${section.title.replace(/\s+/g, '-').toLowerCase()}-heading`}>
                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      {section.items.length} pieces
                    </p>
                    <h3
                      id={`${section.title.replace(/\s+/g, '-').toLowerCase()}-heading`}
                      className="mt-2 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-6xl"
                    >
                      {section.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-base font-medium leading-tight text-frame-muted-fg md:text-lg">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-px bg-frame-border lg:grid-cols-3">
                  {section.items.map((video, index) => (
                    <article key={video.videoId} className="bg-frame-bg">
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="group block aspect-video w-full overflow-hidden border-b-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                        aria-label={`Play the video: ${video.title}`}
                      >
                        <img
                          src={video.thumbnailUrl}
                          alt={`${video.title} thumbnail`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                          loading="lazy"
                        />
                      </button>
                      <div className="grid gap-5 p-5">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                            {String(index + 1).padStart(2, '0')} / {video.isShort ? 'Short' : 'Long'}
                          </p>
                          <h4 className="mt-2 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                            {video.title}
                          </h4>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveVideo(video)}
                            className="border-2 border-frame-accent bg-frame-accent px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                          >
                            Play the video
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 flex flex-col gap-4 border-b-2 border-frame-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
                Creative archive
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.8rem,8vw,8rem)] font-bold uppercase leading-[0.82] tracking-tighter">
                Selected work
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">
                Brand communication, campaign creative, social content, and visual systems collected
                in one place.
              </p>
              <p className="mt-5 border-2 border-frame-border bg-frame-muted p-4 text-sm font-black uppercase tracking-[0.18em] text-frame-fg">
                Hover any piece, or tap it, to view the full image.
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {designWorks.map((work) => (
              <article key={work.src} className="group bg-frame-bg">
                <button
                  type="button"
                  onClick={() => setActiveWork(work)}
                  className="relative block aspect-square w-full overflow-hidden bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                  aria-label={`View full image ${work.number}`}
                >
                  <img
                    src={work.src}
                    alt={`Frame Cipher selected work ${work.number}`}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-95"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                    {String(work.number).padStart(2, '0')}
                  </span>
                  <span className="absolute inset-x-4 bottom-4 border-2 border-frame-border bg-frame-bg px-4 py-3 text-center text-xs font-black uppercase tracking-[0.2em] text-frame-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View full image
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showPreviewToast && (
        <div
          className="fixed bottom-5 left-4 right-4 z-40 border-2 border-frame-border bg-frame-accent p-4 text-frame-accent-fg shadow-2xl md:right-auto md:max-w-md"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] opacity-80">Preview tip</p>
              <p className="mt-2 text-sm font-black uppercase leading-tight tracking-tighter md:text-base">
                Hover or tap any work image to see it in full.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPreviewToast(false)}
              className="shrink-0 border-2 border-frame-accent-fg/70 px-3 py-2 text-xs font-black uppercase tracking-tighter transition-colors hover:bg-frame-accent-fg hover:text-frame-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent-fg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activeWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-frame-bg/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Work image ${activeWork.number} full preview`}
          onClick={() => setActiveWork(null)}
        >
          <div className="relative flex h-full w-full max-w-7xl flex-col gap-4" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Full preview</p>
              <button
                type="button"
                onClick={() => setActiveWork(null)}
                className="min-h-12 border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
              >
                Close
              </button>
            </div>
            <div className="min-h-0 flex-1 border-2 border-frame-border bg-white p-3 md:p-5">
              <img
                src={activeWork.src}
                alt={`Frame Cipher selected work ${activeWork.number}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-frame-bg/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.title} video player`}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative flex max-h-full w-full max-w-7xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Video player</p>
                <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                  {activeVideo.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="min-h-12 border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
              >
                Close
              </button>
            </div>
            <div className="border-2 border-frame-border bg-frame-muted p-3 md:p-5">
              <div className={activeVideo.isShort ? 'mx-auto aspect-[9/16] max-h-[70vh] w-full max-w-sm' : 'aspect-video w-full'}>
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
