'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'
import { testimonials } from '../data/agency'

function getProofLabel(source) {
  if (source === 'Facebook') return 'Public mention'
  if (source === 'WhatsApp') return 'Client note'
  return 'Client signal'
}

export default function Testimonials({
  eyebrow,
  title = 'What people are saying',
  description = "A growing wall of public mentions, client notes, and social proof from people who have seen Frame Cipher's work in motion.",
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = testimonials.length

  // Touch swipe refs for mobile gestures
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Navigation handlers with wrap-around
  const scrollPrev = useCallback((e) => {
    e?.preventDefault?.()
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const scrollNext = useCallback((e) => {
    e?.preventDefault?.()
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const scrollToIndex = (idx, e) => {
    e?.preventDefault?.()
    setCurrentIndex(idx)
  }

  // 1-by-1 Auto-scroll carousel timer (5s interval, pauses on hover / touch)
  useEffect(() => {
    if (isPaused || total <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused, total])

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsPaused(true)
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    setIsPaused(false)
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      scrollNext()
    } else if (diff < -50) {
      scrollPrev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section className={`relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden ${className}`}>
      <div className="mx-auto max-w-5xl">
        {/* Section Header with Symmetrical Carousel Controls */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-purple-600">
                // {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-white md:text-lg">
              {description}
            </p>
          </div>

          {/* Carousel Arrows with Counter Pill */}
          <div className="shrink-0 flex items-center gap-2 rounded-full border border-white/[0.1] bg-[#121214] p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-white transition-all hover:border-white/[0.3] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <span className="px-2 font-mono text-xs text-zinc-400 tabular-nums">
              0{currentIndex + 1} / 0{total}
            </span>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-white transition-all hover:border-white/[0.3] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Single Grid Column Auto-Scroll Carousel Viewport */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-hidden select-none py-2"
        >
          <div
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            className="flex w-full transition-transform duration-700 ease-in-out will-change-transform"
          >
            {testimonials.map((testimonial, index) => {
              return (
                <div key={`${testimonial.name}-${index}`} className="w-full shrink-0 px-1">
                  <article className="group relative rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-10 md:p-12 flex flex-col justify-between hover:border-white/[0.2] hover:bg-[#151518] transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent min-h-[300px] shadow-2xl">
                    <div>
                      {/* Top Header: Author Avatar & Identity & Source */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-white/[0.12] object-cover shrink-0 shadow-md"
                            loading="lazy"
                          />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-highlighted truncate">
                              {testimonial.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-normal leading-snug text-white/90 truncate mt-0.5">
                              {testimonial.profession}
                            </p>
                          </div>
                        </div>

                        {/* Source Badge & Quote Icon */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="rounded-full border border-white/[0.12] bg-[#18181B] px-3 py-1 font-mono text-xs uppercase tracking-wider text-zinc-300 font-medium">
                            {testimonial.source}
                          </span>
                          <MessageSquareQuote className="h-6 w-6 text-purple-600 hidden sm:block opacity-70" />
                        </div>
                      </div>

                      {/* Quotation */}
                      <blockquote className="mt-7 sm:mt-9 font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white">
                        “{testimonial.quote}”
                      </blockquote>
                    </div>

                    {/* Clean Bottom Accent */}
                    <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-muted">
                      <span className="font-mono text-xs text-zinc-500">
                        {getProofLabel(testimonial.source)}
                      </span>
                      <span className="font-mono text-xs text-zinc-500 tabular-nums">
                        Signal 0{index + 1} of 0{total}
                      </span>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>

        {/* Nuxt-Grade Interactive Pagination Dots Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((_, idx) => {
            const isActive = currentIndex === idx
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => scrollToIndex(idx, e)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 ${
                  isActive
                    ? 'w-10 bg-purple-600 shadow-[0_0_12px_rgba(147,51,234,0.6)]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
