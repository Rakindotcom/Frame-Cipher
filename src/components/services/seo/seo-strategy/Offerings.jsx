'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const services = [
  {
    title: 'SEO Strategy Development',
    body: 'Building the overall roadmap that everything else gets prioritized against.',
    points: [
      {
        heading: 'Business Goal Alignment',
        text: 'Connecting SEO priorities to what actually matters for your business leads, sales, brand visibility.',
      },
      {
        heading: 'Competitive Landscape Assessment',
        text: "Understanding where genuine opportunity exists relative to what you're actually up against.",
      },
      {
        heading: 'Resource-Realistic Roadmapping',
        text: 'A plan built around the team, budget, and timeline you actually have, not an idealized version of them.',
      },
      {
        heading: 'Priority Sequencing',
        text: 'Deciding what to tackle first based on impact and feasibility together, not impact alone.',
      },
    ],
    note: 'A strategy that ignores your actual resources is a strategy that gets abandoned three months in.',
  },
  {
    title: 'Fractional SEO Leadership',
    body: 'Ongoing strategic direction for businesses that need senior-level guidance without a full-time hire.',
    points: [
      {
        heading: 'Ongoing Strategic Advisory',
        text: 'Regular check-ins to review progress, adjust priorities, and answer questions as they come up.',
      },
      {
        heading: 'Internal Team Direction',
        text: 'Providing the strategic oversight an internal marketing team often lacks without a dedicated SEO lead.',
      },
      {
        heading: 'Executive Reporting',
        text: 'Translating SEO performance into terms that make sense to leadership and stakeholders.',
      },
      {
        heading: 'Vendor & Agency Oversight',
        text: "Reviewing work from other SEO vendors or freelancers on your behalf, if you're already working with one.",
      },
    ],
    note: 'Not every business is ready for a full-time SEO hire, and not every business needs one, fractional leadership fills that gap deliberately.',
  },
  {
    title: 'Audit-to-Roadmap Translation',
    body: "Turning a completed audit, ours or anyone else's into an actual execution plan.",
    points: [
      {
        heading: 'Findings Prioritization',
        text: 'Taking a list of audit findings and turning it into a sequenced, resourced plan.',
      },
      {
        heading: 'Internal Team Briefing',
        text: 'Explaining findings and priorities to your team in terms they can act on directly.',
      },
      {
        heading: 'Execution Planning',
        text: 'Breaking a roadmap into specific tasks, owners, and realistic timelines.',
      },
      {
        heading: 'Progress Check-Ins',
        text: 'Periodic reviews to confirm the plan is actually being executed as intended.',
      },
    ],
    note: 'An audit tells you what’s wrong. This is where "what’s wrong" becomes "here’s what we’re doing about it, starting Monday."',
  },
  {
    title: 'Team Training & Enablement',
    body: 'Building internal SEO capability, not just handing over answers.',
    points: [
      {
        heading: 'SEO Fundamentals Training',
        text: 'Getting your existing content or marketing team up to speed on core SEO principles.',
      },
      {
        heading: 'Tool & Workflow Setup',
        text: 'Establishing the reporting and tracking systems your team needs to work independently over time.',
      },
      {
        heading: 'Content Team SEO Coaching',
        text: 'Working directly with writers and content creators to build SEO thinking into their process.',
      },
      {
        heading: 'Documentation & Playbooks',
        text: 'Written guides your team can reference after the engagement ends, not knowledge that leaves when we do.',
      },
    ],
    note: 'Some clients want us to do the work forever. Others want to eventually not need us for this specific thing, both are legitimate goals we plan around honestly.',
  },
  {
    title: 'Ongoing Strategic Advisory',
    body: "Strategy isn't a one-time document: markets, algorithms, and business priorities all keep shifting.",
    points: [
      {
        heading: 'Quarterly Strategy Reviews',
        text: 'Revisiting the roadmap as results come in and priorities evolve.',
      },
      {
        heading: 'Algorithm Update Guidance',
        text: 'Interpreting what a significant Google update actually means for your specific situation.',
      },
      {
        heading: 'New Opportunity Identification',
        text: 'Flagging emerging channels or tactics like AI search optimization — worth considering as they mature.',
      },
      {
        heading: 'Performance-Based Adjustment',
        text: 'Recalibrating priorities based on what’s actually working, not sticking rigidly to the original plan regardless of results.',
      },
    ],
    note: 'A strategy engagement can lead into full execution — see our other SEO service pages for the specific work a roadmap might call for.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#A855F7]">Capabilities &amp; Scope</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Our SEO Strategy &amp;{' '}
            <span className="italic text-frame-accent">Consulting Services</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Strategic work covers several distinct needs, depending on where a business actually stands.
          </p>
        </div>

        {/* 5 Core Strategy Offerings Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  Offering // 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-2.5">
                    What We Do:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">
                          <strong className="text-white font-medium">{pt.heading}:</strong> {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-3.5 text-xs text-zinc-400">
                  <p className="leading-relaxed">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
