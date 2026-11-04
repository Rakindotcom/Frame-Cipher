'use client'

import React from 'react'
import { Check, Eye, UserCheck, ShieldCheck, Target, Users, Share2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const outcomes = [
  {
    num: '01',
    icon: Eye,
    title: 'Build B2B Visibility',
    body: 'Consistent and relevant LinkedIn content can help your business remain visible within professional audiences. We build content around your industry, expertise, customers, market, and business priorities.',
  },
  {
    num: '02',
    icon: UserCheck,
    title: 'Strengthen Executive Authority',
    body: 'Founders and executives can use LinkedIn to communicate their expertise, experiences, opinions, and professional perspective. We turn those insights into structured thought leadership content while keeping the executive’s authentic voice central.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Build Professional Credibility',
    body: 'Your LinkedIn presence should answer an important question for potential customers: why should I take this business or professional seriously?',
    points: [
      'Verified company information',
      'Specialized engineering & industry expertise',
      'Published case studies & client outcomes',
      'Educational problem-solving content',
      'Polished executive leadership profiles',
      'Customer-focused business insights',
      'Consistent, structured communication',
    ],
  },
  {
    num: '04',
    icon: Target,
    title: 'Support Lead Generation',
    body: 'LinkedIn can contribute to the B2B customer journey by helping potential customers understand your expertise before they contact you. We align content and calls to action with buyer intent:',
    points: [
      'Customer questions & operational pain points',
      'Buyer evaluation criteria & risk concerns',
      'Service & methodology education',
      'Detailed client case studies',
      'Proprietary industry insights & playbooks',
      'High-authority website resource links',
      'Direct consultation contact opportunities',
      'Nurturing warm sales conversations',
    ],
    note: 'Where appropriate, organic LinkedIn management can also work alongside separate paid campaigns and lead-generation activity.',
  },
  {
    num: '05',
    icon: Users,
    title: 'Support Recruitment & Employer Brand',
    body: 'LinkedIn can also support recruitment and employer branding. The goal is to communicate what your organization is truly like, not simply announce open vacancies.',
    points: [
      'Authentic company culture & engineering standards',
      'Employee spotlights & career progression stories',
      'Strategic hiring announcements & role contexts',
      'Team achievements & project deliveries',
      'Workplace initiatives & continuous learning',
      'Executive leadership philosophy',
      'Professional development & mentorship',
      'Key organizational milestones',
      'High-intent open position reach',
    ],
  },
  {
    num: '06',
    icon: Share2,
    title: 'Build Industry Relationships',
    body: 'LinkedIn is also a professional relationship-building platform. Relevant engagement can help your business participate in industry conversations, stay connected with partners, engage with peers, and maintain relationships with potential customers.',
    note: 'We focus on relevant and meaningful interaction rather than indiscriminate networking.',
  },
]

export default function Outcomes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Realistic Impact · Outcomes
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What LinkedIn Management Can{' '}
            <span className="italic text-frame-accent">Help Your Business Achieve.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            LinkedIn cannot guarantee a specific number of leads, followers, impressions, or sales. But a structured LinkedIn presence can support important commercial objectives when strategy, content, engagement, and measurement work together.
          </p>
        </div>

        {/* 6 Outcomes Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.num}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Outcome {item.num} · </span>
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

                  {item.points && (
                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                        Key Levers:
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-400">
                        {item.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {item.note && (
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                    <span className="font-semibold text-zinc-300">Focus: </span>
                    {item.note}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
