'use client'

import React from 'react'
import {
  Search,
  Server,
  FileCode,
  FileText,
  Target,
  GitFork,
  Link2,
  BarChart2,
  LineChart,
  ShoppingBag,
  Cpu,
  Globe2,
  Check,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const assessmentAreas = [
  { name: 'Crawlability and indexation', icon: Search },
  { name: 'Technical SEO and site architecture', icon: Server },
  { name: 'On-page optimization', icon: FileCode },
  { name: 'Content quality and search intent', icon: FileText },
  { name: 'Keyword targeting and cannibalization', icon: Target },
  { name: 'Internal linking', icon: GitFork },
  { name: 'Backlink quality and authority', icon: Link2 },
  { name: 'Competitor and SERP performance', icon: BarChart2 },
  { name: 'Search Console and analytics data', icon: LineChart },
  { name: 'Conversion tracking', icon: ShoppingBag },
  { name: 'AI search visibility', icon: Cpu },
  { name: 'Ecommerce, local, or international SEO requirements', icon: Globe2 },
]

export default function Overview() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Holistic Diagnostic // Meaningful Impact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Find Out What Is{' '}
            <span className="italic text-frame-accent">Holding Your Website Back</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            An SEO audit should do more than identify problems. It should explain what is wrong, why it matters, how it affects search performance, and what should happen next.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Framecipher reviews your website from multiple SEO perspectives to separate meaningful problems from low-impact technical warnings. Depending on the project, we assess:
          </p>
        </div>

        {/* 12 Assessment Areas Grid */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {assessmentAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <div
                key={idx}
                className="group flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-white/[0.16] hover:bg-[#151518]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06] shrink-0 group-hover:bg-frame-accent/10 transition-colors">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-sans text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {area.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Summary & Practical Recommendation Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h4 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-white">
              Every Finding Backed by Evidence
            </h4>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Every important finding is documented with a practical recommendation. The result is an SEO audit your team can actually use, whether you implement the work internally or continue with Framecipher.
            </p>
          </div>

          <div className="shrink-0">
            <PosterButton href="/contact">
              Request an SEO Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
