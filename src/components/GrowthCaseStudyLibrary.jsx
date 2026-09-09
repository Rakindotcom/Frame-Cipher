'use client'

import { useState } from 'react'
import Link from 'next/link'
import { growthCaseStudies } from '../data/growthWork'

export default function GrowthCaseStudyLibrary() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Paid Ads', 'SEO']

  const filteredStudies =
    activeCategory === 'All'
      ? growthCaseStudies
      : growthCaseStudies.filter((study) => study.category === activeCategory)

  return (
    <section className="border-t-2 border-frame-border px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-12 grid gap-8 border-b-2 border-frame-border pb-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Documented outcomes · Systematic execution
            </p>
            <h2 className="mt-5 font-heading text-[clamp(2.8rem,7vw,7rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
              Growth & performance library.
            </h2>
          </div>
          <div>
            <p className="max-w-4xl text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">
              Case studies document the underlying challenge, systematic work process, conversion mechanics,
              and first-party verified results across our paid-media and search growth programs. Select any study to inspect the complete operational breakdown and reporting data.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? growthCaseStudies.length
                    : growthCaseStudies.filter((s) => s.category === cat).length
                const isActive = activeCategory === cat

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`border-2 px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                        : 'border-frame-border bg-frame-bg text-frame-fg hover:border-frame-accent hover:text-frame-accent'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* 3 in a Row Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.map((study, index) => {
            const trueIndex = growthCaseStudies.findIndex((s) => s.slug === study.slug)
            return (
              <CaseStudyCard
                key={study.slug}
                study={study}
                index={trueIndex >= 0 ? trueIndex : index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, index }) {
  const displayMetrics = study.metrics?.slice(0, 4) || []

  return (
    <Link
      id={study.slug}
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col justify-between border-2 border-frame-border bg-frame-bg transition-all duration-300 hover:border-frame-accent hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
    >
      <div>
        {/* Card Header: Index & Badge */}
        <div className="flex items-center justify-between border-b-2 border-frame-border p-5 pb-4">
          <span className="font-heading text-xl font-bold tracking-tight text-frame-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="border border-frame-accent/40 bg-frame-accent/10 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-frame-accent">
            {study.category}
          </span>
        </div>

        {/* Client & Title & Summary */}
        <div className="p-5">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-frame-muted-fg line-clamp-1">
            {study.client} · {study.industry}
          </p>
          <h3 className="mt-2.5 font-heading text-xl font-bold uppercase leading-snug tracking-tight text-frame-fg transition-colors group-hover:text-frame-accent md:text-2xl line-clamp-2">
            {study.title}
          </h3>
          <p className="mt-3 text-xs font-medium leading-relaxed text-frame-muted-fg line-clamp-3">
            {study.summary}
          </p>

          {/* Performance Data Metrics Grid */}
          <div className="mt-6 border-2 border-frame-border bg-frame-muted/15 p-3.5">
            <div className="flex items-center justify-between border-b border-frame-border/80 pb-2">
              <span className="text-[0.6rem] font-black uppercase tracking-[0.22em] text-frame-accent">
                Case Study Metrics
              </span>
              <span className="text-[0.6rem] font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
                Verified Data
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {displayMetrics.map(([val, lbl], mIdx) => (
                <div key={mIdx} className="border-l-2 border-frame-accent/40 pl-2.5">
                  <span className="block font-heading text-lg font-bold tracking-tight text-frame-fg transition-colors group-hover:text-frame-accent md:text-xl">
                    {val}
                  </span>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-frame-muted-fg line-clamp-1">
                    {lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Action */}
      <div className="border-t-2 border-frame-border bg-frame-muted/5 p-4 px-5 transition-colors group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider">
            Inspect Case Breakdown
          </span>
          <span
            className="text-lg text-frame-accent transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-frame-accent-fg"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
