'use client'

import React from 'react'
import { Check, Building2, Cpu, Briefcase, Factory, Compass, UserCheck, Globe2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const audiences = [
  {
    num: '01',
    icon: Building2,
    title: 'B2B Companies',
    body: 'For B2B businesses that need stronger professional visibility, company content, executive positioning, thought leadership, and strategic relationship building.',
    points: [
      'Corporate visibility in target sectors',
      'High-authority company content',
      'Executive leadership positioning',
      'Thought leadership & point of view',
      'Targeted B2B relationship building',
    ],
  },
  {
    num: '02',
    icon: Cpu,
    title: 'SaaS & Technology Businesses',
    body: 'For technology companies that need to explain complex products, demonstrate engineering expertise, communicate product value, and build credibility with professional buyers.',
    points: [
      'Complex software & feature explainers',
      'Demonstrated engineering expertise',
      'Articulating ROI & business value',
      'Building credibility with enterprise buyers',
    ],
  },
  {
    num: '03',
    icon: Briefcase,
    title: 'Professional Services',
    body: 'For law firms, consulting practices, accounting firms, financial services providers, digital agencies, and IT firms that sell specialized expertise and trust.',
    points: [
      'Legal & corporate governance practices',
      'Management & financial consulting firms',
      'Accounting & audit advisory practices',
      'IT outsourcing & specialized agencies',
    ],
  },
  {
    num: '04',
    icon: Factory,
    title: 'Manufacturers & Exporters',
    body: 'For manufacturers, suppliers, exporters, and industrial businesses that need to communicate production capabilities, certifications, compliance, and international positioning.',
    points: [
      'Manufacturing capabilities & machinery',
      'Compliance, safety & ESG standards',
      'International export certifications',
      'Global supply chain credibility',
    ],
  },
  {
    num: '05',
    icon: Compass,
    title: 'Consultants & Agencies',
    body: 'For independent consultants and boutique agencies that need to demonstrate specialized methodology, share proprietary frameworks, and attract inbound client inquiries.',
    points: [
      'Proprietary frameworks & methodologies',
      'Proven client outcomes & case studies',
      'Actionable industry trend insights',
      'Direct prospect relationship nurture',
    ],
  },
  {
    num: '06',
    icon: UserCheck,
    title: 'Founders & Executives',
    body: 'For founders, CEOs, managing directors, and subject-matter experts who want to build a recognized professional presence around their firsthand knowledge and experience.',
    points: [
      'Authentic leadership storytelling',
      'High-authority personal branding',
      'Founder perspectives & business lessons',
      'Industry thought leadership positioning',
    ],
  },
  {
    num: '07',
    icon: Globe2,
    title: 'International Businesses',
    body: 'For businesses targeting customers, partners, investors, or talent outside Bangladesh (US, UK, UAE, Australia, Canada, Europe).',
    points: [
      'Target market cultural & business context',
      'Localized industry language & terminology',
      'Global timezone-aligned publishing schedules',
      'International competitor benchmarking',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Market Fit · Who We Serve
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Our LinkedIn Management{' '}
            <span className="italic text-frame-accent">Service Is For.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We adapt LinkedIn management to your industry, audience, sales process, expertise, content requirements, and commercial growth goals.
          </p>
        </div>

        {/* 7 Market Segments Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, idx) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16] ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Segment {item.num} · </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    {item.body}
                  </p>

                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                      Tailored Scope:
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Does Your Business Fit One of These Profiles?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Schedule a strategy call to evaluate your executive and company page positioning.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Discuss Your LinkedIn Strategy
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
