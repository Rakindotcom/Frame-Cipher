'use client'

import { useState } from 'react'
import { SectionHeading } from '../GrowthPortfolioSection'
import { videoScriptSamples, contentWritingSamples } from '../../data/writingWork'

const ALL_SAMPLES = [...contentWritingSamples, ...videoScriptSamples]

export default function ProjectsWritingSection({ samples = ALL_SAMPLES }) {
  const [activeCategory, setActiveCategory] = useState('All')

  if (!samples || samples.length === 0) return null

  const categories = ['All', ...Array.from(new Set(samples.map((sample) => sample.category)))]

  const displayed =
    activeCategory === 'All'
      ? samples
      : samples.filter((sample) => sample.category === activeCategory)

  return (
    <section
      id="writing-work"
      className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionHeading
          number="07"
          title="Writing & content"
          count={`${samples.length} sample${samples.length === 1 ? '' : 's'}`}
        />

        {categories.length > 2 && (
          <div className="mt-6 flex flex-nowrap items-center gap-2 overflow-x-auto pb-1.5 scrollbar-x">
            {categories.map((category) => {
              const isActive = category === activeCategory
              const count =
                category === 'All'
                  ? samples.length
                  : samples.filter((sample) => sample.category === category).length

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 whitespace-nowrap border-2 px-3 py-2 text-[11px] font-black uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent ${
                    isActive
                      ? 'border-frame-accent bg-frame-accent text-frame-accent-fg'
                      : 'border-frame-border text-frame-muted-fg hover:border-frame-accent hover:text-frame-fg'
                  }`}
                >
                  {category}
                  <span className="ml-2 opacity-70">{String(count).padStart(2, '0')}</span>
                </button>
              )
            })}
          </div>
        )}

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {displayed.map((sample, index) => (
            <article
              key={`${sample.url}-${index}`}
              className="group flex min-w-0 flex-col border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="border border-frame-accent/50 bg-frame-accent/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-frame-accent">
                  {sample.category}
                </span>
                {sample.client && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-frame-muted-fg">
                    {sample.client}
                  </span>
                )}
              </div>

              <h4 className="mt-4 font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-xl">
                {sample.title}
              </h4>

              <a
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-black uppercase tracking-tighter text-frame-fg transition hover:text-frame-accent"
              >
                Read sample
                <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
