import React from 'react'
import {
  FileWarning,
  Cpu,
  ServerCrash,
  ShieldAlert,
  BarChart2,
  CheckCircle2,
} from 'lucide-react'

const causes = [
  {
    icon: FileWarning,
    title: 'Manual Actions in Google Search Console',
    body: 'A manual action means a human reviewer at Google determined that some or all of the site does not comply with Google’s spam policies.',
    closing:
      'The issue appears in the Manual Actions report, and the standard recovery path is to fix the violation, document the remediation, and submit a reconsideration request when the site is genuinely ready.',
  },
  {
    icon: Cpu,
    title: 'Google Core & Spam Update Impacts',
    body: 'A ranking decline following a Google update does not automatically mean Google issued a penalty.',
    closing:
      'For these cases, we analyze timing, affected pages, queries, content patterns, search intent, technical signals, and competitive changes to understand what may have contributed to the loss.',
  },
  {
    icon: ServerCrash,
    title: 'Technical, Migration & Indexing Problems',
    body: 'Some major traffic drops have nothing to do with a penalty.',
    lead: 'Examples include:',
    points: [
      'Accidental no index directives',
      'Canonical problems',
      'Redirect failures',
      'Robots.txt changes',
      'URL migrations',
      'Indexing issues',
      'Server errors',
      'Other technical changes that prevent Google from accessing or understanding pages correctly',
    ],
    closing:
      'Google’s traffic-drop guidance specifically recommends checking recent site changes, indexing, crawl-related issues, manual actions, security issues, and other non-penalty causes.',
  },
  {
    icon: ShieldAlert,
    title: 'Security, Hacking & Spam Issues',
    body: 'A hacked site can contain injected pages, malicious files, phishing content, or unwanted software.',
    closing:
      'Google provides a separate Security Issues report for these problems, and security reviews follow a different process from standard manual-action reviews.',
  },
  {
    icon: BarChart2,
    title: 'Search Demand, Competition & SERP Changes',
    body: 'Not every ranking decline is caused by something “wrong” with the website. Search demand can change. Competitors can improve. Search results can change. User behavior can shift.',
    closing:
      'We compare your performance with the broader SERP and search landscape before attributing a loss to a Google penalty or update.',
  },
]

export default function RootCause() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Root Cause Identification
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Manual Action, Algorithmic Impact or Something Else?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            A lost ranking does not always mean a penalty. We establish which category the problem falls into before recommending a recovery path.
          </p>
        </div>

        {/* Symmetrical 12-Column Responsive Grid (Row 1: 2 x 6-cols, Row 2: 3 x 4-cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {causes.map((item, index) => {
            const Icon = item.icon
            // Row 1: items 0 and 1 take 6 columns each (50% each on lg)
            // Row 2: items 2, 3, and 4 take 4 columns each (33.3% each on lg)
            const colSpanClass =
              index < 2
                ? 'md:col-span-6 lg:col-span-6'
                : 'md:col-span-6 lg:col-span-4'

            return (
              <div
                key={item.title}
                className={`flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.16] transition-colors ${colSpanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Category // 0{index + 1}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#18181B] border border-white/[0.08] text-zinc-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {item.body}
                  </p>

                  {item.lead && (
                    <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                      {item.lead}
                    </p>
                  )}

                  {item.points && (
                    <div className="mt-3 space-y-2 text-xs text-zinc-300">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {item.closing && (
                  <div className="mt-6 rounded-xl border-l-2 border-frame-accent bg-[#18181B] p-3.5 text-xs text-zinc-400 leading-relaxed">
                    {item.closing}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
