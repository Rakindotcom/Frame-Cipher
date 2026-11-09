'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PosterButton from './PosterButton'
import SectionButton from './SectionButton'

const studioSpaces = [
  {
    studio: 'Studio 01',
    title: 'Creative Interview Stage',
    description: 'Ambient RGB lighting, designer set staging, and multi-angle camera setups for commercial shoots and high-impact discussions.',
    image: '/studio/studio-01-set.jpg',
    alt: 'Frame Cipher Studio 01 creative lighting and interview stage in Dhaka',
  },
  {
    studio: 'Studio 01',
    title: 'Camera Setup & Monitor POV',
    description: 'Live field monitor framing, studio tripod rigs, and direct audio capture for seamless creator sessions.',
    image: '/studio/studio-01-camera.jpg',
    alt: 'Frame Cipher Studio 01 camera on tripod facing interview stage',
  },
  {
    studio: 'Studio 02',
    title: 'Live Recording Session',
    description: 'Active client recording session with live camera feedback, executive desk staging, and directional microphone capture.',
    image: '/studio/studio-02-recording.jpg',
    alt: 'Frame Cipher Studio 02 live recording session on camera monitor',
  },
  {
    studio: 'Studio 02',
    title: 'Acoustic Podcast Desk',
    description: 'Acoustically isolated setup with studio softbox lighting, boom arm microphone, and clean background framing.',
    image: '/studio/studio-02-podcast.jpg',
    alt: 'Frame Cipher Studio 02 acoustic podcast recording desk with softbox',
  },
  {
    studio: 'Studio 02',
    title: 'Multi-Camera Soundstage',
    description: 'Wide soundstage layout with acoustic drapery, overhead lighting, and multi-person podcast capability.',
    image: '/studio/studio-02-wide.jpg',
    alt: 'Frame Cipher Studio 02 wide soundstage setup with acoustic curtains',
  },
]

export default function HomeStudioShowcase({
  exploreHref = '/studio',
  bookingHref = '/contact',
} = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [maxIndex, setMaxIndex] = useState(2) // 3-column view by default on desktop (5 - 3 = 2)

  const trackRef = useRef(null)
  const containerRef = useRef(null)

  // Touch swipe state for buttery mobile gestures without any scroll jump
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Determine max slide index based on visible columns (1 on mobile, 2 on tablet, 3 on desktop)
  const calculateMaxIndex = useCallback(() => {
    if (typeof window === 'undefined') return 2
    if (window.innerWidth < 640) return studioSpaces.length - 1 // 1 column: max index 4
    if (window.innerWidth < 1024) return Math.max(0, studioSpaces.length - 2) // 2 columns: max index 3
    return Math.max(0, studioSpaces.length - 3) // 3 columns: max index 2
  }, [])

  // Calculate exact horizontal offset for active slide (pure CSS transform: ZERO window scroll possible)
  const updateOffset = useCallback((index) => {
    if (!trackRef.current || !containerRef.current) return
    const cards = trackRef.current.children
    if (cards && cards[index]) {
      const card = cards[index]
      const maxTranslate = Math.max(0, trackRef.current.scrollWidth - containerRef.current.offsetWidth)
      const targetTranslate = Math.min(card.offsetLeft, maxTranslate)
      setTranslateX(Math.max(0, targetTranslate))
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const newMax = calculateMaxIndex()
      setMaxIndex(newMax)
      setCurrentIndex((prev) => Math.min(prev, newMax))
      updateOffset(Math.min(currentIndex, newMax))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [calculateMaxIndex, currentIndex, updateOffset])

  useEffect(() => {
    updateOffset(currentIndex)
  }, [currentIndex, updateOffset])

  const scrollPrev = (e) => {
    e?.preventDefault?.()
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const scrollNext = (e) => {
    e?.preventDefault?.()
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const scrollToIndex = (idx, e) => {
    e?.preventDefault?.()
    setCurrentIndex(Math.min(idx, maxIndex))
  }

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50 && currentIndex < maxIndex) {
      // Swiped left -> next
      setCurrentIndex((prev) => prev + 1)
    } else if (diff < -50 && currentIndex > 0) {
      // Swiped right -> prev
      setCurrentIndex((prev) => prev - 1)
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section id="studio-spaces" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Symmetrical Heading and Carousel Controls (No forbidden badge) */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-white">
              Two in-house production studios in Dhaka
            </h2>
            <p className="mt-5 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Two dedicated physical studios at Matikata ECB Chattar equipped for multi-camera video podcasts, commercial brand shoots, and creator content.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <SectionButton href={exploreHref}>Explore studio packages</SectionButton>

            {/* Symmetrical Carousel Controls with Slide Counter */}
            <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-[#121214] p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                aria-label="Previous studio slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-white transition-all hover:border-white/[0.3] hover:bg-white/[0.08] disabled:opacity-25 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <span className="px-2 font-mono text-xs text-zinc-400 tabular-nums">
                0{currentIndex + 1} / 0{maxIndex + 1}
              </span>

              <button
                type="button"
                onClick={scrollNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next studio slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-white transition-all hover:border-white/[0.3] hover:bg-white/[0.08] disabled:opacity-25 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Studio Photographic Carousel Viewport (3-Column Grid on Desktop, Pure Transform, 0% Window Jump) */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-hidden select-none py-2"
        >
          <div
            ref={trackRef}
            style={{ transform: `translateX(-${translateX}px)` }}
            className="flex gap-6 transition-transform duration-500 ease-out will-change-transform"
          >
            {studioSpaces.map((item, index) => {
              const isLeadCard = currentIndex === index
              return (
                <article
                  key={`${item.title}-${index}`}
                  className={`group relative w-[85vw] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 bg-[#121214] ${
                    isLeadCard
                      ? 'border-purple-500/50 shadow-[0_20px_50px_rgba(168,85,247,0.12)]'
                      : 'border-white/[0.08] hover:border-white/[0.2]'
                  }`}
                >
                  {/* Clean Visual Image Bay: Strictly NO text or badge overlay */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-white/[0.08]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Story: Strictly NO specs lists/boxes */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <span className="font-mono text-xs uppercase tracking-wider text-purple-600">
                          {item.studio}
                        </span>
                        <span className="font-mono text-xs text-zinc-500 tabular-nums">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-4 font-heading text-xl font-semibold text-highlighted">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm font-normal leading-relaxed text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Nuxt-Grade Interactive Pagination Dots Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
            const isActive = currentIndex === idx
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => scrollToIndex(idx, e)}
                aria-label={`Go to slide set ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isActive
                    ? 'w-10 bg-purple-600 shadow-[0_0_12px_rgba(147,51,234,0.6)]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            )
          })}
        </div>

        {/* Clean Footer Bar with Physical Location */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/[0.08] pt-8">
          <p className="font-mono text-xs text-muted uppercase tracking-wider">
            6th Floor, Eurasia Building, Matikata ECB Chattar, Dhaka 1206
          </p>
          <div className="flex items-center gap-4">
            <PosterButton href={bookingHref}>Book Studio Session</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
