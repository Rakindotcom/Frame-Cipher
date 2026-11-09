'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SectionHeading } from '../GrowthPortfolioSection'
import {
  MapPin,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Radio,
  Layers,
} from 'lucide-react'

export default function ProjectsEventCoverageSection({
  projects = [],
  number = '07',
  onSelectPhoto = null,
}) {
  const [activePhoto, setActivePhoto] = useState(null)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  // Internal lightbox state if no external onSelectPhoto is passed
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenPhoto = (project, index) => {
    if (onSelectPhoto) {
      onSelectPhoto(project)
    } else {
      setActivePhoto(project)
      setActivePhotoIndex(index)
      setModalOpen(true)
    }
  }

  // Keyboard navigation for modal
  useEffect(() => {
    if (!modalOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false)
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => {
          const nextIdx = (prev + 1) % projects.length
          setActivePhoto(projects[nextIdx])
          return nextIdx
        })
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => {
          const prevIdx = (prev - 1 + projects.length) % projects.length
          setActivePhoto(projects[prevIdx])
          return prevIdx
        })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, projects])

  if (!projects || projects.length === 0) return null

  const currentModalPhoto = projects[activePhotoIndex] || projects[0]

  return (
    <section
      id="event-coverage"
      className="relative isolate scroll-mt-36 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number={number}
          title="On-Location event coverage"
          count={`${projects.length} verified showcases`}
        />

        {/* Overview Header Banner */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-400 border border-purple-600/20 bg-purple-600/10 px-3 py-1 rounded-full">
                <Radio className="h-3 w-3 text-purple-400 animate-pulse" />
                <span>Field Production &bull; Barishal Bakerganj</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                Live Rig &amp; Event Production Archive
              </h3>
              <p className="mt-3 text-sm md:text-base font-normal leading-relaxed text-zinc-300 max-w-2xl">
                High-resolution photographic documentation of our on-location event coverage in Bakerganj, Barishal. Featuring multi-angle stage rigs, dignitary keynotes, crowd atmosphere, and calibrated live lighting architecture.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 lg:border-t-0 lg:border-l lg:border-white/[0.08] lg:pl-8 lg:pt-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-600/20 bg-purple-600/10 text-purple-400">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-purple-400 font-semibold">
                    Rig Specification
                  </p>
                  <p className="text-xs text-zinc-400">
                    4K DCI Multi-Camera Setup + Soundstage Mics
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-600/20 bg-purple-600/10 text-purple-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-purple-400 font-semibold">
                    Deployment Location
                  </p>
                  <p className="text-xs text-zinc-400">
                    Bakerganj, Barishal, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-600/20 bg-purple-600/10 text-purple-400">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-purple-400 font-semibold">
                    Master Archive
                  </p>
                  <p className="text-xs text-zinc-400">
                    {projects.length} High-Res Color Graded Captures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, idx) => {
            const isFeaturedFirst = idx === 0

            return (
              <article
                key={item.id || idx}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0F] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent ${
                  isFeaturedFirst ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Photo Preview Container */}
                <button
                  type="button"
                  onClick={() => handleOpenPhoto(item, idx)}
                  className={`group/btn relative block w-full overflow-hidden bg-[#18181B] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 ${
                    isFeaturedFirst ? 'aspect-[16/10] lg:aspect-[16/9]' : 'aspect-[16/10]'
                  }`}
                  aria-label={`View full preview: ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={
                      isFeaturedFirst
                        ? '(max-width: 1024px) 100vw, 66vw'
                        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    }
                    className="object-cover transition-transform duration-500 group-hover/btn:scale-105"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent opacity-80" />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-300 backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 font-mono text-[10px] tabular-nums text-zinc-300 backdrop-blur-md">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Hover Inspection Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/80 backdrop-blur-md px-4 py-2 font-mono text-xs uppercase tracking-wider text-white shadow-xl">
                      <Maximize2 className="h-3.5 w-3.5 text-purple-400" />
                      <span>Inspect photo &rarr;</span>
                    </span>
                  </div>
                </button>

                {/* Card Content Details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                      <MapPin className="h-3 w-3 text-purple-400" />
                      <span>{item.location}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400 font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="mt-2.5 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-zinc-500">
                      4K DCI Capture
                    </span>
                    <button
                      type="button"
                      onClick={() => handleOpenPhoto(item, idx)}
                      className="font-mono text-[11px] uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Full view</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-label={currentModalPhoto.title}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative flex h-full max-h-[94vh] w-full max-w-7xl flex-col rounded-2xl border border-white/15 bg-[#0D0D0F] p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Event Production Archive
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] tabular-nums text-zinc-300">
                  {activePhotoIndex + 1} of {projects.length}
                </span>
                <span className="hidden sm:inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[11px] text-purple-300">
                  {currentModalPhoto.badge}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-white/15 active:scale-95"
              >
                <X className="h-4 w-4 mr-1.5" />
                Close
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-0 w-full overflow-hidden rounded-xl bg-black flex items-center justify-center">
              <Image
                src={currentModalPhoto.src}
                alt={currentModalPhoto.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={() => {
                  const prevIdx = (activePhotoIndex - 1 + projects.length) % projects.length
                  setActivePhotoIndex(prevIdx)
                  setActivePhoto(projects[prevIdx])
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const nextIdx = (activePhotoIndex + 1) % projects.length
                  setActivePhotoIndex(nextIdx)
                  setActivePhoto(projects[nextIdx])
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="pt-4 border-t border-white/[0.08] mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="font-heading text-lg font-medium text-white">
                  {currentModalPhoto.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {currentModalPhoto.location} &bull; {currentModalPhoto.description}
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

