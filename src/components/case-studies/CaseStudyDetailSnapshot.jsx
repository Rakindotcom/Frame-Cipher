'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudyServiceLinks } from '../../lib/seo/internalLinks'

function MetaItem({ label, value, href, wide = false }) {
  return (
    <div className={`p-4 sm:p-5 border-b border-white/[0.08] ${wide ? 'sm:col-span-2' : ''}`}>
      <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-frame-accent">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm sm:text-base font-normal leading-relaxed text-white">
        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-white hover:text-frame-accent transition-colors group"
          >
            <span>{value}</span>
            <span
              className="text-frame-accent group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

export default function CaseStudyDetailSnapshot({ study }) {
  const serviceLinks = getCaseStudyServiceLinks(study)

  const normalizeItem = (item, defaultAlt) => {
    if (!item) return null
    if (typeof item === 'string') {
      return {
        src: item,
        alt: defaultAlt || `${study.client} verified performance proof`,
        caption: `${study.client} - Verified Performance Proof`,
      }
    }
    return {
      src: item.src || '',
      alt: item.alt || defaultAlt || `${study.client} verified performance proof`,
      caption: item.caption || `${study.client} - Verified Performance Proof`,
    }
  }

  // Collect all available proof gallery images with robust string/object normalization
  const rawItems =
    study.gallery && study.gallery.length > 0
      ? study.gallery
      : study.image
      ? [study.image]
      : []

  const galleryItems = rawItems
    .map((item, idx) => normalizeItem(item, `${study.client} proof snapshot ${idx + 1}`))
    .filter((item) => Boolean(item?.src))

  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = galleryItems[activeIndex] || galleryItems[0] || normalizeItem(study.image)

  return (
    <section className="relative isolate border-b border-white/[0.08] px-4 py-16 md:px-8 md:py-24 bg-[#09090B]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* LEFT COLUMN: Sticky Interactive Visual Proof Showcase (7 cols) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 self-start space-y-4">
            {/* Main Visual Frame */}
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]  transition-all duration-300 hover:border-white/[0.14]">
              <div className="relative aspect-[16/10] w-full bg-zinc-950">
                {activeImage?.src ? (
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt || `${study.client} case study proof`}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 58vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-xs text-zinc-500">
                    Verified performance proof data
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-white/[0.02] px-5 py-3 font-mono text-xs font-medium text-zinc-400">
                <span className="truncate pr-4 text-[11px] uppercase tracking-wider text-zinc-300">
                  {activeImage?.caption || `${study.client} - Verified Performance Proof`}
                </span>
                <span className="shrink-0 text-[10px] uppercase tracking-wider tabular-nums text-frame-accent">
                  Snapshot {galleryItems.length > 0 ? activeIndex + 1 : 1} of {Math.max(galleryItems.length, 1)}
                </span>
              </div>
            </div>

            {/* Interactive Thumbnail Selector Strip */}
            {galleryItems.length > 1 && (
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-3 sm:p-4">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[1.1px] text-zinc-400">
                  Select Verified Evidence Snapshot:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {galleryItems.map((item, idx) => {
                    const isSelected = activeIndex === idx
                    return (
                      <button
                        key={`${item.src}-${idx}`}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`group relative aspect-[16/10] w-full overflow-hidden rounded-lg border transition-all text-left touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent ${
                          isSelected
                            ? 'border-frame-accent ring-2 ring-frame-accent/40 scale-[1.02]'
                            : 'border-white/[0.08] hover:border-white/30 opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`View evidence screenshot ${idx + 1}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt || `Thumbnail ${idx + 1}`}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Executive Snapshot & Project Context (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-white/[0.08]">
              <h2 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
                {study.headline || study.title}
              </h2>

              <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                {study.summary}
              </p>
            </div>

            {/* Core Engagement Attributes */}
            <div className="grid sm:grid-cols-2 divide-x divide-white/[0.08]">
              <MetaItem label="Client" value={study.client} />
              <MetaItem label="Industry" value={study.industry} />
            </div>
            <div className="grid sm:grid-cols-2 divide-x divide-white/[0.08]">
              <MetaItem label="Timeline" value={study.timeline} />
              {study.primaryFocus ? (
                <MetaItem
                  label="Primary Focus"
                  value={study.primaryFocus}
                  href={serviceLinks[0]?.href}
                />
              ) : (
                <div className="p-4 sm:p-5 border-b border-white/[0.08]" />
              )}
            </div>

            {/* Key Deliverables Matrix */}
            {study.snapshot?.length > 0 && (
              <div className="border-t border-white/[0.08]">
                <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-white/[0.02]">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-frame-accent">
                    Engagement Scorecard
                  </p>
                </div>
                <dl className="grid sm:grid-cols-2 divide-y sm:divide-y-0 divide-white/[0.08]">
                  {study.snapshot.slice(4).map(([label, val]) => (
                    <div key={label} className="p-4 sm:p-5 border-b border-white/[0.08]">
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">{label}</dt>
                      <dd className="mt-1 font-heading text-sm font-medium tabular-nums text-white">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
