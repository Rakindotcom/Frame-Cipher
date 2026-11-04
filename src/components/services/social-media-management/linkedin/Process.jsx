'use client'

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const steps = [
  {
    number: '01',
    title: 'Account & Business Audit',
    body: 'We begin by reviewing your existing LinkedIn presence and understanding your business. We then identify the most important priorities for your LinkedIn management program.',
    bullets: [
      'Company Page audit & structure',
      'Executive leadership profile review',
      'Profile positioning & bio clarity',
      'Historical content & performance check',
      'Audience demographics & follower quality',
      'Competitor presence & positioning',
      'Direct engagement & comment health',
      'Visual branding & banner consistency',
      'Content gap & opportunity mapping',
    ],
  },
  {
    number: '02',
    title: 'Audience, ICP & Competitor Research',
    body: 'We research your ideal customer profile (ICP) and the professional decision-makers you want to reach. This research informs both company and executive content.',
    bullets: [
      'Ideal Customer Profile (ICP) definition',
      'Target decision-maker job titles & seniority',
      'Industry trends & market dynamics',
      'Competitor content pattern analysis',
      'Buyer pain points & business concerns',
      'High-intent customer questions',
      'Trending industry conversation themes',
      'Market-specific B2B content angles',
    ],
  },
  {
    number: '03',
    title: 'Positioning & Voice Development',
    body: 'Before writing executive content, we need to understand the person behind the profile and articulate a distinct, credible point of view.',
    bullets: [
      'Executive positioning & narrative angle',
      'Authentic tone of voice & writing style',
      'Core content pillars & topic territories',
      'Preferred vocabulary & industry terms',
      'Personal stories & pivotal business lessons',
      'Topics to intentionally avoid',
      'Client review & approval boundaries',
    ],
    note: 'For ghostwriting, we can use interviews, voice recordings, existing writing, and direct feedback to capture the executive’s authentic communication style.',
  },
  {
    number: '04',
    title: 'Content Strategy & Calendar',
    body: 'We develop a structured LinkedIn content calendar based on your commercial objectives, audience intent, and publishing cadence.',
    bullets: [
      'Company Page corporate editorial calendar',
      'Executive thought leadership roadmap',
      'Format mix (carousels, text, documents)',
      'Educational frameworks & case studies',
      'Product & service capability spotlights',
      'Employer-brand & culture stories',
      'Structured conversion calls to action',
      'Peak-time publishing scheduling',
    ],
  },
  {
    number: '05',
    title: 'Content Creation & Approval',
    body: 'Our team develops the agreed content for your company page and executive profiles. Content goes through an agreed review and approval process before publishing.',
    bullets: [
      'Original LinkedIn posts & hooks',
      'Executive thought leadership ghostwriting',
      'Branded multi-page PDF carousels',
      'Document posts & practical frameworks',
      'Engaging copywriting & clear CTAs',
      'Custom visual graphics & data charts',
      'LinkedIn newsletter edition drafting',
      'Client review & sign-off workflow',
    ],
  },
  {
    number: '06',
    title: 'Publishing & Engagement',
    body: 'Approved content is scheduled or published according to the agreed calendar. Our team can also manage the agreed community engagement activities.',
    bullets: [
      'Peak-time post scheduling & publishing',
      'Comment moderation & brand-aligned replies',
      'Strategic commenting on industry posts',
      'Company Page community interaction',
      'Executive engagement guidance & prompts',
      'High-intent lead & inquiry escalation',
    ],
    note: 'For executives, personal participation remains with the executive whenever a conversation requires their direct personal relationship or deep technical judgment.',
  },
  {
    number: '07',
    title: 'Reporting & Optimization',
    body: 'We review performance regularly and use the empirical findings to improve future content sprints and executive positioning.',
    bullets: [
      'High-performing topic & hook analysis',
      'Content format engagement comparisons',
      'Audience seniority & company demographics',
      'Executive vs. Company Page reach metrics',
      'Inbound DM & contact request tracking',
      'Iterative content sprint refinement',
    ],
  },
]

export default function Process() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Execution Playbook · 7 Steps
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How Our LinkedIn Management{' '}
            <span className="italic text-frame-accent">Process Works.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our process connects research, positioning, content creation, publishing, engagement, reporting, and ongoing optimization into one reliable workflow.
          </p>
        </div>

        {/* 7 Process Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <article
              key={step.number}
              className={`flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16] ${
                idx === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Step {step.number} · </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {step.body}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                    Activities &amp; Outputs:
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {step.note && (
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-zinc-400 leading-relaxed">
                  <span className="font-semibold text-zinc-300">Principle: </span>
                  {step.note}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
