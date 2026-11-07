'use client'

import { useState } from 'react'
import { SectionHeading } from '../GrowthPortfolioSection'
import { videoScriptSamples, contentWritingSamples } from '../../data/writingWork'
import { ArrowRight } from 'lucide-react'

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
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 ${
                    isActive
                      ? 'bg-[#FAFAFA] text-[#09090B] font-semibold shadow-md'
                      : 'border border-white/[0.08] bg-[#121214] text-zinc-400 hover:border-purple-600/40 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] font-mono tabular-nums ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
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
              className="group flex min-w-0 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-600/40 hover:bg-[#151518] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/50 before:to-transparent before:transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                    {sample.category}
                  </span>
                  {sample.client && (
                    <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                      {sample.client}
                    </span>
                  )}
                </div>

                <h4 className="mt-4 font-heading text-lg sm:text-xl font-medium leading-tight tracking-tight text-white">
                  {sample.title}
                </h4>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <a
                  href={sample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-200 hover:border-purple-600/40 hover:bg-white/[0.08]"
                >
                  <span>Read full sample</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:text-purple-400" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
