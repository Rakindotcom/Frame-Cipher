'use client'

import React from 'react'
import { Share2, Layers, Repeat, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const platformRoles = [
  { platform: 'LinkedIn Post', role: 'Focuses on industry insight, executive point-of-view & B2B frameworks' },
  { platform: 'Instagram Reel / Carousel', role: 'Demonstrates the product visually with high-retention graphic slides' },
  { platform: 'TikTok Short Video', role: 'Leverages relatable conversational hooks and concise product proofs' },
  { platform: 'YouTube Video / Short', role: 'Provides in-depth problem solving, detailed walkthroughs and search SEO' },
  { platform: 'Facebook Community Post', role: 'Engages broader community discussions, questions and promotional offers' },
]

const repurposingChecks = [
  'Which core insights should be reused across networks',
  'Which scripts and captions should be rewritten natively',
  'Which visual assets need a vertical vs landscape format',
  'Which platforms require a different hook or angle',
  'Which source materials can support future content cycles',
]

export default function CrossPlatform() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Platform-Native Planning · Omnichannel Efficiency
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            One Core Idea, Multiple{' '}
            <span className="italic text-frame-accent">Platform-Native Formats.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Cross-platform planning does not mean copying one post onto every social network. The better approach is to identify the central idea first, then determine how that idea should be communicated on each platform.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1: Shared Message */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Consistency
                </span>
                <Sparkles className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl font-medium text-white">
                Shared Campaign Message
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                We identify the core message behind a campaign, product launch, announcement, educational topic, or brand initiative.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                This creates consistency across the campaign while allowing each platform to communicate the message in its own format.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Single Value Proposition:</strong>
              For example, a product launch has one central value proposition but uses different supporting angles across Instagram, LinkedIn, TikTok, Facebook, and YouTube.
            </div>
          </article>

          {/* Card 2: Adapted Execution */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Platform Roles
                </span>
                <Layers className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl font-medium text-white">
                Platform-Specific Execution
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Each platform plays a distinct role within the same campaign:
              </p>

              <div className="space-y-2 pt-1">
                {platformRoles.map((entry) => (
                  <div key={entry.platform} className="text-xs text-zinc-300 border-l-2 border-purple-500/30 pl-2.5 py-0.5">
                    <span className="font-semibold text-white block">{entry.platform}</span>
                    <span className="text-zinc-400 text-[11px]">{entry.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">True Platform Gravity:</strong>
              The campaign stays connected without forcing every social channel to look or behave identically.
            </div>
          </article>

          {/* Card 3: Efficient Repurposing */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 space-y-6 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  Asset Leverage
                </span>
                <Repeat className="h-4 w-4 text-frame-accent" />
              </div>

              <h3 className="font-heading text-xl font-medium text-white">
                Repurposing Without Duplication
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Repurposing means adapting useful ideas and assets for new contexts, not broadcasting the same file everywhere:
              </p>

              <ul className="space-y-2 text-xs text-zinc-300 pt-1">
                {repurposingChecks.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400">
              <strong className="text-white block font-medium mb-1">Production Efficiency:</strong>
              This creates a far more efficient content workflow without sacrificing platform relevance or viewer engagement.
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
