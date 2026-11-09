'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  X,
  MapPin,
  Camera,
  Layers,
  Sparkles,
  ArrowRight,
  Radio,
} from 'lucide-react'
import { barishalEventProjects } from '../../data/eventProjects'

export default function StudioEventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)
  const thumbnailScrollRef = useRef(null)

  const activeProject = barishalEventProjects[currentIndex]
  const total = barishalEventProjects.length

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPlaying, lightboxOpen, total])

  // Center active thumbnail in track
  useEffect(() => {
    if (!thumbnailScrollRef.current) return
    const container = thumbnailScrollRef.current
    const activeThumb = container.querySelector(`[data-thumb-index="${currentIndex}"]`)
    if (activeThumb) {
      const containerWidth = container.clientWidth
      const thumbLeft = activeThumb.offsetLeft
      const thumbWidth = activeThumb.offsetWidth
      container.scrollTo({
        left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % total)
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + total) % total)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, total])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
    setTouchStartX(null)
  }

  return (
    <section
      id="on-location-production"
      className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-900/[0.08] blur-[100px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.2px] text-purple-400 border border-purple-600/20 bg-purple-600/10 px-3 py-1 rounded-full">
              <Radio className="h-3 w-3 text-purple-400 animate-pulse" />
              <span>On-Location Field Production</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
              On-Location &amp; Event Production Archive.
            </h2>
            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Cinematic 4K multi-camera filming, soundstage lighting, and live audio capture delivered on location in Barishal Bakerganj.
            </p>
          </div>

          {/* Action & Nav Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Play/Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 transition-colors hover:border-purple-600/40 hover:bg-white/10 hover:text-white"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 transition-colors hover:border-purple-600/40 hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-zinc-300 transition-colors hover:border-purple-600/40 hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Link to Projects Page */}
            <Link
              href="/projects#event-coverage"
              className="group inline-flex h-[52px] items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-purple-600/50 hover:bg-white/10 shrink-0"
            >
              <span>View in Projects</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Main Stage Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0F] shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
        >
          {/* Main Visual Display */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full bg-[#050507] overflow-hidden group">
            <Image
              src={activeProject.src}
              alt={activeProject.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Cinematic Gradient Vignettes */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-black/30" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden md:block" />

            {/* Top-Right Lightbox Trigger */}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="Expand image to fullscreen"
              className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-purple-500/50 hover:bg-black/90 active:scale-95"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>

            {/* Slide Index Counter Badge */}
            <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-xs text-zinc-300">
              <span className="text-purple-400 font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">{String(total).padStart(2, '0')}</span>
            </div>

            {/* Desktop Overlay Content inside Main Stage */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20 flex flex-col justify-end">
              <div className="max-w-3xl space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-purple-300">
                    <Sparkles className="h-3 w-3 text-purple-400" />
                    <span>{activeProject.badge}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300">
                    <MapPin className="h-3 w-3 text-purple-400" />
                    <span>{activeProject.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    <Camera className="h-3 w-3 text-purple-400" />
                    <span>Multi-Cam 4K Rig</span>
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                  {activeProject.title}
                </h3>

                <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-300 line-clamp-2 md:line-clamp-none max-w-2xl">
                  {activeProject.description}
                </p>
              </div>
            </div>
          </div>

          {/* Autoplay Progress Line */}
          <div className="h-1 w-full bg-white/[0.06] overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-purple-600 to-violet-500 transition-all duration-300`}
              style={{
                width: `${((currentIndex + 1) / total) * 100}%`,
              }}
            />
          </div>

          {/* Interactive Thumbnail Strip */}
          <div className="p-4 md:p-6 bg-[#09090B]/80 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-purple-600" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Production Shots ({total} Total)
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500">
                Click any thumbnail to preview
              </span>
            </div>

            <div
              ref={thumbnailScrollRef}
              className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x"
            >
              {barishalEventProjects.map((item, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    data-thumb-index={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`group/thumb relative aspect-video h-20 sm:h-24 flex-shrink-0 snap-start overflow-hidden rounded-lg border text-left transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'border-purple-600 ring-2 ring-purple-600/40 shadow-[0_0_20px_rgba(147,51,234,0.35)] scale-[1.02]'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                    aria-label={`Jump to slide ${idx + 1}: ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-white/90 truncate max-w-[80px]">
                        {item.badge}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-purple-400">
                        #{idx + 1}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex h-full max-h-[94vh] w-full max-w-7xl flex-col rounded-2xl border border-white/15 bg-[#0D0D0F] p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                  On-Location Master Shot
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] tabular-nums text-zinc-300">
                  {currentIndex + 1} of {total}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-white/15 active:scale-95"
              >
                <X className="h-4 w-4 mr-1.5" />
                Close
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-0 w-full overflow-hidden rounded-xl bg-black flex items-center justify-center">
              <Image
                src={activeProject.src}
                alt={activeProject.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

              {/* Navigation overlays */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="pt-4 border-t border-white/[0.08] mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="font-heading text-lg font-medium text-white">
                  {activeProject.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {activeProject.location} &bull; {activeProject.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-zinc-500 uppercase">
                  Use &larr; &rarr; arrows to browse &bull; ESC to exit
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

