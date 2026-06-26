'use client'

import { useEffect, useRef, useState } from 'react'
import { PageHero } from '../components/Kinetic'

const designWorks = Array.from({ length: 25 }, (_, index) => ({
  number: index + 1,
  src: `/${index + 1}.webp`,
}))

const videoWorkSections = [
  {
    title: 'Long videos',
    description: 'Long-form video work produced for deeper storytelling, campaign context, and platform publishing.',
    items: [
      {
        title: 'Long video 01',
        videoId: 'j5r_HVWKnAA',
        thumbnailUrl: '/video-thumbnails/long-01.webp',
      },
      {
        title: 'Long video 02',
        videoId: 'bqdK_EifW8k',
        thumbnailUrl: '/video-thumbnails/long-02.webp',
      },
      {
        title: 'Long video 03',
        videoId: '3MR8SvdrMkU',
        thumbnailUrl: '/video-thumbnails/long-03.webp',
      },
      {
        title: 'Long video 04',
        videoId: 'kekOmxPCfNw',
        thumbnailUrl: '/video-thumbnails/long-04.webp',
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
        thumbnailUrl: '/video-thumbnails/short-01.webp',
        isShort: true,
      },
      {
        title: 'Short video 02',
        videoId: 'Qw1unPMli6k',
        thumbnailUrl: '/video-thumbnails/short-02.webp',
        isShort: true,
      },
      {
        title: 'Short video 03',
        videoId: 'fkiGzxB6qTE',
        thumbnailUrl: '/video-thumbnails/short-03.webp',
        isShort: true,
      },
    ],
  },
]

const websiteProjects = [
  {
    name: 'Hotel Ashrafee',
    url: 'https://www.hotelashrafee.com/',
    domain: 'hotelashrafee.com',
    category: 'Hospitality website',
    screenshot: '/website-shots/hotel-ashrafee.png',
    summary: 'Hotel website presentation for rooms, location, and direct guest trust.',
  },
  {
    name: 'ALFIS Limited',
    url: 'https://alfisltd.vercel.app/',
    domain: 'alfisltd.vercel.app',
    category: 'Business website',
    screenshot: '/website-shots/alfis-limited.png',
    summary: 'Company website structure for a garments accessories business.',
  },
  {
    name: 'BD For Palestine',
    url: 'https://bdforpalestine.org/',
    domain: 'bdforpalestine.org',
    category: 'Community platform',
    screenshot: '/website-shots/bd-for-palestine.png',
    summary: 'Public-facing advocacy and information site for a movement-focused initiative.',
  },
  {
    name: 'Muhsin Mashkur',
    url: 'https://www.muhsinmashkur.com/',
    domain: 'muhsinmashkur.com',
    category: 'Personal website',
    screenshot: '/website-shots/muhsin-mashkur.png',
    summary: 'Personal site for profile, public identity, and digital presence.',
  },
  {
    name: 'Business Byte',
    url: 'https://businessbyte-rakin.vercel.app/',
    domain: 'businessbyte-rakin.vercel.app',
    category: 'Web product',
    screenshot: '/website-shots/business-byte.png',
    summary: 'Digital business resource presented as a lightweight web experience.',
  },
]

export default function ProjectsPage({ initialView = null }) {
  const [workView, setWorkView] = useState(initialView)
  const [activeWork, setActiveWork] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const [showWorkArchive, setShowWorkArchive] = useState(false)
  const [showPreviewToast, setShowPreviewToast] = useState(false)
  const [toastDismissed, setToastDismissed] = useState(false)
  const imageSectionRef = useRef(null)
  const carouselRef = useRef(null)

  const currentWork = designWorks[currentWorkIndex]

  const chooseWorkView = (view) => {
    setWorkView(view)
    setActiveWork(null)
    setActiveVideo(null)
    setShowWorkArchive(false)
    setShowPreviewToast(false)
  }

  useEffect(() => {
    if (!workView) return

    window.setTimeout(() => {
      document.getElementById(`${workView}-work`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }, [workView])

  useEffect(() => {
    if (!activeWork && !activeVideo && !showWorkArchive) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveWork(null)
        setActiveVideo(null)
        setShowWorkArchive(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeWork, activeVideo, showWorkArchive])

  useEffect(() => {
    if (workView !== 'media') return
    if (toastDismissed || !imageSectionRef.current) return

    let toastTimer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setShowPreviewToast(true)
        toastTimer = window.setTimeout(() => {
          setShowPreviewToast(false)
        }, 7500)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(imageSectionRef.current)

    return () => {
      observer.disconnect()
      window.clearTimeout(toastTimer)
    }
  }, [toastDismissed, workView])

  useEffect(() => {
    if (workView !== 'media') return
    if (activeWork || activeVideo || showWorkArchive) return

    const slideshowTimer = window.setInterval(() => {
      setCurrentWorkIndex((index) => (index === designWorks.length - 1 ? 0 : index + 1))
    }, 3200)

    return () => window.clearInterval(slideshowTimer)
  }, [activeWork, activeVideo, showWorkArchive, workView])

  useEffect(() => {
    const carousel = carouselRef.current
    const activeCard = carousel?.querySelector(`[data-carousel-card="${currentWork.number}"]`)
    if (!carousel || !activeCard) return

    const centeredOffset = activeCard.offsetLeft - (carousel.clientWidth - activeCard.clientWidth) / 2
    carousel.scrollTo({ left: Math.max(centeredOffset, 0), behavior: 'smooth' })
  }, [currentWork.number])

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

      <section id="work-lanes" className="scroll-mt-28 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.56fr_auto_1fr] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
                Choose a work lane
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-[clamp(2.4rem,5vw,4.8rem)] font-bold uppercase leading-[0.86] tracking-tighter">
                What do you want to see?
              </h2>
            </div>
            <div className="hidden h-32 w-px bg-frame-border lg:block" aria-hidden="true" />
            <div className="flex h-full items-center">
              <p className="max-w-4xl text-lg font-medium leading-tight text-frame-muted-fg md:text-3xl">
                Choose one side: creative visuals and videos, or software and website builds.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden border-2 border-frame-border bg-frame-muted p-4 md:p-8">
            <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
              <svg viewBox="0 0 1200 520" className="h-full w-full" preserveAspectRatio="none">
                <path d="M600 260 L245 260" stroke="rgb(63 63 70)" strokeWidth="72" strokeLinecap="square" fill="none" />
                <path d="M600 260 L955 260" stroke="rgb(63 63 70)" strokeWidth="72" strokeLinecap="square" fill="none" />
                <path d="M600 260 L245 260" stroke="rgb(250 250 250 / 0.62)" strokeWidth="7" strokeDasharray="34 34" strokeLinecap="square" fill="none" />
                <path d="M600 260 L955 260" stroke="rgb(250 250 250 / 0.62)" strokeWidth="7" strokeDasharray="34 34" strokeLinecap="square" fill="none" />
              </svg>
            </div>

            <div className="relative grid gap-5 md:grid-cols-[1fr_10rem_1fr] md:items-stretch">
              <button
                type="button"
                onClick={() => chooseWorkView('media')}
                className={`group relative min-h-64 overflow-hidden border-2 p-6 text-left transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent md:order-1 md:min-h-72 md:p-7 ${
                  workView === 'media'
                    ? 'border-frame-accent bg-frame-accent text-frame-accent-fg shadow-[0_24px_80px_rgba(168,85,247,0.22)]'
                    : 'border-frame-border bg-frame-bg/95 hover:border-frame-accent'
                }`}
              >
                <span className={`absolute right-5 top-4 font-heading text-6xl font-bold leading-none transition-transform duration-300 group-hover:translate-x-1 md:text-7xl ${workView === 'media' ? 'text-frame-accent-fg/14' : 'text-frame-muted/70 group-hover:text-frame-accent/20'}`} aria-hidden="true">
                  01
                </span>
                <span className={`relative inline-flex border-2 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] ${workView === 'media' ? 'border-frame-accent-fg/70 text-frame-accent-fg' : 'border-frame-accent text-frame-accent'}`}>
                  Images & videos
                </span>
                <h3 className={`relative mt-7 max-w-xl font-heading text-4xl font-bold uppercase leading-none tracking-tighter md:text-5xl ${workView === 'media' ? 'text-frame-accent-fg' : 'text-frame-fg group-hover:text-frame-accent'}`}>
                  Creative archive
                </h3>
                <p className={`relative mt-5 max-w-xl text-base font-semibold leading-tight md:text-lg ${workView === 'media' ? 'text-frame-accent-fg/80' : 'text-frame-muted-fg'}`}>
                  Videos, shorts, campaign visuals, posters, social content, and design pieces.
                </p>
                <span className={`relative mt-8 inline-flex min-h-12 items-center border-2 px-5 py-3 text-sm font-black uppercase tracking-tighter transition-colors ${workView === 'media' ? 'border-frame-accent-fg bg-frame-accent-fg text-frame-accent' : 'border-frame-border text-frame-fg group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg'}`}>
                  Take this path
                </span>
              </button>

              <div className="relative grid min-h-24 place-items-center md:order-2 md:min-h-72" aria-hidden="true">
                <div className="absolute inset-x-8 top-1/2 h-1 -translate-y-1/2 bg-frame-border md:hidden" />
                <div className="relative grid h-24 w-24 place-items-center rounded-full border-2 border-frame-accent bg-frame-bg shadow-[0_18px_70px_rgba(168,85,247,0.25)] md:h-32 md:w-32">
                  <span className="font-heading text-4xl font-bold uppercase leading-none text-frame-accent md:text-5xl">Or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => chooseWorkView('software')}
                className={`group relative min-h-64 overflow-hidden border-2 p-6 text-left transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent md:order-3 md:min-h-72 md:p-7 ${
                  workView === 'software'
                    ? 'border-frame-accent bg-frame-accent text-frame-accent-fg shadow-[0_24px_80px_rgba(168,85,247,0.22)]'
                    : 'border-frame-border bg-frame-bg/95 hover:border-frame-accent'
                }`}
              >
                <span className={`absolute right-5 top-4 font-heading text-6xl font-bold leading-none transition-transform duration-300 group-hover:-translate-x-1 md:text-7xl ${workView === 'software' ? 'text-frame-accent-fg/14' : 'text-frame-muted/70 group-hover:text-frame-accent/20'}`} aria-hidden="true">
                  02
                </span>
                <span className={`relative inline-flex border-2 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] ${workView === 'software' ? 'border-frame-accent-fg/70 text-frame-accent-fg' : 'border-frame-accent text-frame-accent'}`}>
                  Software & websites
                </span>
                <h3 className={`relative mt-7 max-w-xl font-heading text-4xl font-bold uppercase leading-none tracking-tighter md:text-5xl ${workView === 'software' ? 'text-frame-accent-fg' : 'text-frame-fg group-hover:text-frame-accent'}`}>
                  Digital systems
                </h3>
                <p className={`relative mt-5 max-w-xl text-base font-semibold leading-tight md:text-lg ${workView === 'software' ? 'text-frame-accent-fg/80' : 'text-frame-muted-fg'}`}>
                  Websites, landing pages, dashboards, automations, portals, and software-style builds.
                </p>
                <span className={`relative mt-8 inline-flex min-h-12 items-center border-2 px-5 py-3 text-sm font-black uppercase tracking-tighter transition-colors ${workView === 'software' ? 'border-frame-accent-fg bg-frame-accent-fg text-frame-accent' : 'border-frame-border text-frame-fg group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg'}`}>
                  Take this path
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {workView === 'media' && (
        <>
      <section id="media-work" className="scroll-mt-28 border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
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
                      <div className="p-5">
                        <button
                          type="button"
                          onClick={() => setActiveVideo(video)}
                          className={`group block overflow-hidden rounded-md border-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent ${
                            video.isShort ? 'mx-auto aspect-[9/16] max-h-[34rem] w-full max-w-[18rem]' : 'aspect-video w-full'
                          }`}
                          aria-label={`Play the video: ${video.title}`}
                        >
                          <img
                            src={video.thumbnailUrl}
                            alt={`${video.title} thumbnail`}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                            loading="lazy"
                          />
                        </button>
                      </div>
                      <div className="grid gap-5 p-5 pt-0">
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

      <section ref={imageSectionRef} className="px-4 py-16 md:px-8 md:py-24">
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
            </div>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border">
            <aside className="grid gap-8 bg-frame-bg p-6 md:grid-cols-[0.82fr_1fr] md:p-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Auto carousel
                </p>
                <h3 className="mt-4 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                  Moving through the archive.
                </h3>
              </div>
              <div className="md:max-w-2xl">
                <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg md:text-lg">
                  The carousel cycles through selected visual work automatically. Open the archive when you want the full grid for closer browsing.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div className="border-t-2 border-frame-border pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Archive depth
                    </p>
                    <p className="mt-2 text-sm font-bold uppercase leading-tight text-frame-muted-fg">
                      {designWorks.length} selected visuals in rotation
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowWorkArchive(true)}
                    className="min-h-14 border-2 border-frame-accent bg-frame-accent px-5 py-4 text-sm font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                  >
                    View more
                  </button>
                </div>
              </div>
            </aside>

            <div className="bg-frame-bg p-4 md:p-6">
              <div
                ref={carouselRef}
                className="overflow-hidden"
                aria-label="Automatic selected work carousel"
              >
                <div className="flex gap-4 py-2">
                  {designWorks.map((work) => {
                    const isActive = work.number === currentWork.number

                    return (
                      <button
                        key={work.src}
                        type="button"
                        data-carousel-card={work.number}
                        onClick={() => setActiveWork(work)}
                        className={`group relative block aspect-[4/3] min-w-[82vw] overflow-hidden border-2 bg-white text-left transition duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent sm:min-w-[48%] lg:min-w-[31%] ${
                          isActive
                            ? 'scale-[1.02] border-frame-accent opacity-100 shadow-[0_24px_80px_rgba(168,85,247,0.18)]'
                            : 'border-frame-border opacity-55 hover:opacity-90'
                        }`}
                        aria-label={`View full image ${work.number}`}
                      >
                        <img
                          src={work.src}
                          alt={`Frame Cipher selected work ${work.number}`}
                          className="h-full w-full object-contain transition duration-300 group-hover:scale-95"
                          loading="lazy"
                        />
                        {isActive && (
                          <span className="absolute left-4 top-4 bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                            Now showing
                          </span>
                        )}
                        <span className="absolute inset-x-4 bottom-4 border-2 border-frame-border bg-frame-bg px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-frame-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Open preview
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="h-2 bg-frame-border" aria-hidden="true">
                  <div
                    className="h-full bg-frame-accent transition-all duration-500"
                    style={{ width: `${((currentWorkIndex + 1) / designWorks.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Auto rotating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showWorkArchive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-frame-bg/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Full creative archive"
          onClick={() => setShowWorkArchive(false)}
        >
          <div
            className="flex max-h-full w-full max-w-7xl flex-col gap-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  Full archive
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                  All selected work
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowWorkArchive(false)}
                className="min-h-12 border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 overflow-y-auto border-2 border-frame-border bg-frame-border p-px">
              <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
                {designWorks.map((work) => (
                  <article key={work.src} className="group bg-frame-bg">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentWorkIndex(work.number - 1)
                        setActiveWork(work)
                      }}
                      className="relative block aspect-square w-full overflow-hidden bg-white text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      aria-label={`View full image ${work.number}`}
                    >
                      <img
                        src={work.src}
                        alt={`Frame Cipher selected work ${work.number}`}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-95"
                        loading="lazy"
                      />
                      <span className="absolute inset-x-4 bottom-4 border-2 border-frame-border bg-frame-bg px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-frame-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Open preview
                      </span>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showPreviewToast && (
        <div
          className="fixed bottom-5 left-4 right-4 z-40 border-2 border-frame-border bg-frame-accent p-4 text-frame-accent-fg shadow-2xl md:right-auto md:max-w-md"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] opacity-80">Image archive</p>
              <p className="mt-2 text-sm font-black uppercase leading-tight tracking-tighter md:text-base">
                The showcase rotates automatically. View more opens all 40 pieces in a full-screen grid.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setToastDismissed(true)
                setShowPreviewToast(false)
              }}
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
        </>
      )}

      {workView === 'software' && (
        <section id="software-work" className="scroll-mt-28 px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-[95vw] overflow-hidden">
            <div className="mb-7 grid gap-5 border-b-2 border-frame-border pb-6 lg:grid-cols-[0.7fr_1fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
                  Software portfolio
                </p>
                <h2 className="mt-3 font-heading text-[clamp(2.35rem,5vw,4.5rem)] font-bold uppercase leading-[0.88] tracking-tighter">
                  Websites in action.
                </h2>
              </div>
              <p className="max-w-3xl text-base font-medium leading-tight text-frame-muted-fg md:text-xl">
                Real screenshots from live builds, so visitors can recognize the product before they open the site.
              </p>
            </div>

            <div className="grid min-w-0 gap-5 overflow-hidden lg:grid-cols-2">
              {websiteProjects.map((project, index) => {
                const isFinalOddCard = websiteProjects.length % 2 === 1 && index === websiteProjects.length - 1

                return (
                  <article
                    key={project.url}
                    className={`group min-w-0 overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors duration-300 hover:border-frame-accent ${
                      isFinalOddCard ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div className={`grid ${isFinalOddCard ? 'lg:grid-cols-[1.25fr_0.75fr]' : ''}`}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/image block min-w-0 border-b-2 border-frame-border bg-frame-muted focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent ${
                          isFinalOddCard ? 'lg:border-b-0 lg:border-r-2' : ''
                        }`}
                        aria-label={`Visit ${project.name}`}
                      >
                        <div className="flex items-center gap-2 border-b-2 border-frame-border bg-frame-bg px-4 py-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-frame-accent" />
                          <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/50" />
                          <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/30" />
                          <span className="ml-3 min-w-0 truncate text-xs font-black uppercase tracking-[0.18em] text-frame-muted-fg">
                            {project.domain}
                          </span>
                        </div>

                        <div className="aspect-video overflow-hidden bg-frame-muted">
                          <img
                            src={project.screenshot}
                            alt={`${project.name} website screenshot`}
                            className="h-full w-full object-cover object-top transition duration-500 group-hover/image:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                      </a>

                      <div className="grid content-between gap-4 p-4 md:p-5">
                        <div className="min-w-0">
                          <p className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                            {project.category}
                          </p>
                          <h3 className="mt-3 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                            {project.name}
                          </h3>
                          <p className="mt-3 break-words text-sm font-black uppercase tracking-[0.14em] text-frame-muted-fg">
                            {project.domain}
                          </p>
                        </div>
                        <p className="max-w-2xl text-sm font-medium leading-tight text-frame-muted-fg md:text-base">
                          {project.summary}
                        </p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 w-fit items-center justify-center border-2 border-frame-accent bg-frame-accent px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                        >
                          Visit website
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
