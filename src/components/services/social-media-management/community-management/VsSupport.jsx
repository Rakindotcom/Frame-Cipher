import React from 'react'
import { AutoLinks } from '../../../seo/AutoLinks'

const services = [
  {
    number: '01',
    role: 'Frontline Interaction',
    title: 'Community Management',
    description:
      'Community management focuses on social interactions, audience engagement, moderation, public feedback, DMs, reviews, listening, and first-line response.',
    highlight: true,
  },
  {
    number: '02',
    role: 'Transactional Resolution',
    title: 'Customer Support',
    description:
      'Customer support handles deeper issues that may require order access, account information, refunds, technical investigation, operational decisions, or specialized assistance.',
    highlight: false,
  },
  {
    number: '03',
    role: 'Macro Brand Strategy',
    title: 'Social Media Management',
    description:
      'Social media management is broader. It can include strategy, content planning, content production, publishing, community management, reporting, and platform optimization.',
    highlight: false,
  },
]

const workflowSteps = [
  'Content',
  'Audience Interaction',
  'Community Response',
  'Escalation',
  'Customer Resolution',
  'Feedback',
  'Future Content',
]

export default function VsSupport() {
  return (
    <section id="vs-support" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Community management vs customer support vs{' '}
              <span className="italic text-frame-accent">social media management.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            These services overlap, but they are not the same. Each addresses a distinct layer of audience communication, operational authority, and brand strategy.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (3 Disciplines) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.number}
              className={`group flex flex-col justify-between border-r border-b border-white/[0.08] p-8 sm:p-10 transition-colors duration-200 ${
                item.highlight ? 'bg-[#18181B]' : 'bg-[#121214] hover:bg-white/[0.02]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {item.role}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  <AutoLinks currentPath="/services/social-media-management/community-management" allowed={["/services/content-creation"]}>
                    {item.description}
                  </AutoLinks>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Integrated Workflow Sequence Container */}
        <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
          <h3 className="font-heading text-xl font-medium text-white">
            How They Work Together
          </h3>
          <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-300">
            A practical workflow connects public-facing audience interaction with back-office operations:
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {workflowSteps.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
                    step === 'Community Response' || step === 'Escalation'
                      ? 'border border-frame-accent/40 bg-frame-accent/10 text-frame-accent font-medium'
                      : 'border border-white/[0.08] bg-white/[0.04] text-zinc-300'
                  }`}
                >
                  {step}
                </span>
                {index < workflowSteps.length - 1 && (
                  <span className="text-white/30" aria-hidden="true">&rarr;</span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-6 border-t border-white/[0.06] pt-4 text-xs font-normal leading-relaxed text-zinc-400 sm:text-sm">
            Community management connects the public-facing conversation with the wider marketing and customer experience system.
          </p>
        </div>
      </div>
    </section>
  )
}
