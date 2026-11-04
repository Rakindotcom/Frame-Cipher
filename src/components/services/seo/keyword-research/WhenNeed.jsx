'use client'

import React from 'react'
import {
  Rocket,
  Compass,
  AlertTriangle,
  Target,
  Globe2,
  PackagePlus,
  Check,
} from 'lucide-react'

const scenarios = [
  {
    number: '01',
    icon: Rocket,
    title: 'Launching a New Website',
    description:
      'A new website has no established keyword strategy or ranking history to guide content planning. We research the market, competitors, search intent, and topic opportunities before pages are created.',
    pointsHead: 'This helps establish:',
    points: [
      'Priority keywords & core business terms',
      'Core service and product opportunities',
      'Supporting informational content silos',
      'Appropriate page types & initial content hierarchy',
    ],
    note: 'Starting with a structured keyword strategy reduces the risk of building pages around terms that are too competitive, too broad, or misaligned with customer intent.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Planning a New Content Strategy',
    description:
      'Publishing more content does not guarantee organic visibility. Keyword research identifies the topics worth covering, the questions users actually ask, and the relationship between core pages and supporting articles.',
    pointsHead: 'We identify:',
    points: [
      'Pillar topics & supporting content clusters',
      'High-intent long-tail & question queries',
      'Commercial vs. informational opportunities',
      'Critical competitor & content gaps',
    ],
    note: 'This gives your editorial team an empirical roadmap instead of an unstructured, guesswork list of article ideas.',
  },
  {
    number: '03',
    icon: AlertTriangle,
    title: "Existing Pages Aren't Ranking",
    description:
      'When important commercial pages fail to rank, the problem may not be the writing alone. The target keyword may be overly competitive, targeting the wrong intent, or suffering from internal cannibalization.',
    pointsHead: 'We assess:',
    points: [
      'Current keyword targets & ranking positions',
      'Search intent & competing URLs',
      'Keyword cannibalization & duplicate targeting',
      'SERP composition & competitor page quality',
    ],
    note: 'The goal is to determine whether the page needs optimization, repositioning, consolidation, or a completely restructured keyword strategy.',
  },
  {
    number: '04',
    icon: Target,
    title: "Traffic Isn't Reaching the Right Customers",
    description:
      'Traffic volume only matters when it originates from qualified, commercial searches. We evaluate whether your keywords align with what your business actually monetizes.',
    pointsHead: 'We evaluate alignment with:',
    points: [
      'Products & actual service offerings',
      'Customer buying stage & commercial intent',
      'Geographic market & customer needs',
      'Bottom-line conversion goals',
    ],
    note: 'A lower-volume keyword with strong commercial relevance can generate vastly more revenue than a high-volume head term with zero buying intent.',
  },
  {
    number: '05',
    icon: Globe2,
    title: 'Expanding Into New Markets',
    description:
      'Search behavior changes significantly across countries, even when the language is similar. We uncover localized terminology, regional competitors, and distinct commercial intent before entering new markets.',
    pointsHead: 'We research:',
    points: [
      'Country-specific terminology & local query nuances',
      'Regional keyword variations & search demand',
      'Market-specific competitors & SERP landscape',
      'Content localization & regional language intent',
    ],
    note: 'This ensures businesses entering new territories build keyword strategies around how customers in those markets actually search—never direct machine translation.',
  },
  {
    number: '06',
    icon: PackagePlus,
    title: 'Entering a New Product or Service Category',
    description:
      'Launching a new offering creates an immediate search opportunity, but existing site architecture may lack the semantic structure to support it.',
    pointsHead: 'We research the category across:',
    points: [
      'Core product/service terms & problem-based queries',
      'Feature-based searches & comparison terms',
      'Commercial modifiers & informational topics',
      'Supporting questions & competitor coverage',
    ],
    note: 'This determines which high-intent landing pages must be built first and how supporting topic clusters should be sequenced.',
  },
]

export default function WhenNeed() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              When This Applies
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            When Does Your Business Need <span className="italic text-frame-accent">Keyword Research?</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-400">
            Keyword research is crucial whenever you need to make informed, defensible decisions about what your website and content team should target next.
          </p>
        </div>

        {/* 6 Scenario Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-frame-accent/40 hover:bg-[#151518] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-frame-accent">
                      Scenario {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-300 transition-colors group-hover:border-frame-accent/30 group-hover:text-frame-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  {item.pointsHead && (
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-zinc-300 border-t border-white/[0.06] pt-4">
                      {item.pointsHead}
                    </p>
                  )}

                  <ul className="mt-2.5 space-y-2 text-xs text-zinc-300">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-xs text-zinc-400 font-normal leading-relaxed">
                  {item.note}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
