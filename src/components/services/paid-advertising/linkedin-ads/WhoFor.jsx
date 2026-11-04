'use client'

import React from 'react'
import { CheckCircle2, Building, Briefcase, Globe, Cpu, UserCheck } from 'lucide-react'

const audiences = [
  {
    title: 'B2B SaaS & Technology Companies',
    icon: Cpu,
    body: [
      'LinkedIn can support SaaS and technology companies targeting specific business types, professional roles, technical stakeholders, and decision-makers.',
    ],
    bullets: [
      'Demo requests',
      'Enterprise enquiries',
      'Product education',
      'Webinar registrations',
      'Content downloads',
      'Account-based campaigns',
    ],
  },
  {
    title: 'Professional Services',
    icon: Briefcase,
    body: [
      'Consulting firms, agencies, technology providers, financial services, legal businesses, and other professional services can use LinkedIn to reach relevant professional audiences.',
    ],
    bullets: [
      'Business problems',
      'Expertise',
      'Thought leadership',
      'Industry-specific content',
      'Consultation offers',
      'High-value enquiries',
    ],
  },
  {
    title: 'Enterprise & Account-Based Sales',
    icon: Building,
    body: [
      'Businesses selling to a defined list of high-value companies can use LinkedIn to reach multiple stakeholders within those organizations.',
    ],
    bullets: [
      'Named-account targeting',
      'Job functions',
      'Seniority',
      'Industry',
      'Company size',
      'Retargeting',
      'Sales outreach',
    ],
    tail: 'The objective is to support an account-level sales strategy rather than generate disconnected individual leads.',
  },
  {
    title: 'B2B Lead Generation Businesses',
    icon: UserCheck,
    body: [
      'LinkedIn can support businesses that need a consistent flow of professional leads for their sales teams.',
    ],
    bullets: [
      'Business services',
      'Software',
      'Consulting',
      'Agencies',
      'Training',
      'Technology',
      'Enterprise solutions',
    ],
    tail: 'The right strategy depends on customer value, audience availability, sales cycle, qualification process, and sales capacity.',
  },
  {
    title: 'Businesses Selling to International B2B Markets',
    icon: Globe,
    body: [
      'LinkedIn can be useful for businesses expanding into international markets where professional audiences can be clearly defined.',
    ],
    bullets: [
      'Country',
      'Industry',
      'Company type',
      'Job function',
      'Seniority',
      'Buying behavior',
      'Local competition',
      'Sales cycle',
      'Market-specific offers',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            Who LinkedIn Ads{' '}
            <span className="italic text-frame-accent">Management Is For.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The right ICP, campaign format, and measurement approach depends on the B2B sales process behind the account.
          </p>
        </div>

        {/* 3-Column / Responsive Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-[#121214] p-6 sm:p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Segment 0{index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-600 group-hover:text-frame-accent transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {item.bullets?.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/[0.04] pt-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {item.tail && (
                  <div className="mt-5 border-l-2 border-frame-accent bg-frame-accent/10 p-3.5 rounded-r-lg text-xs leading-relaxed text-zinc-400">
                    {item.tail}
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
