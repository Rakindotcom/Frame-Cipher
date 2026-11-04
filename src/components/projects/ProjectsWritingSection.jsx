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
      className="relative isolate scroll-mt-36 border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="07"
          title="Writing & content"
          count={`${samples.length} sample${samples.length === 1 ? '' : 's'}`}
        />

        {categories.length > 2 && (
          <div className="mt-8 flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    isActive
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'border border-white/[0.08] bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    ({String(count).padStart(2, '0')})
                  </span>
                </button>
              )
            })}
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayed.map((sample, index) => (
            <article
              key={`${sample.url}-${index}`}
              className="group flex min-w-0 flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-[#161618] hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                    {sample.category}
                  </span>
                  {sample.client && (
                    <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                      {sample.client}
                    </span>
                  )}
                </div>

                <h4 className="mt-4 font-heading text-lg sm:text-xl font-medium leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {sample.title}
                </h4>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <a
                  href={sample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                >
                  <span>Read full sample</span>
                  <span className="ml-2 text-base transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
