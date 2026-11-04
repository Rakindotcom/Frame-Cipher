'use client'

import React from 'react'
import { Check, Users, UserCheck, Target, ShieldCheck, Globe, Lock, BarChart3 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const standards = [
  {
    num: '01',
    icon: Users,
    title: 'One In-House Team',
    body: 'Strategy, content creation, design, video editing where required, publishing, engagement, and reporting can be coordinated through one in-house team. This keeps communication simpler and allows performance insights to influence future content decisions.',
  },
  {
    num: '02',
    icon: UserCheck,
    title: 'Executive Voice Development',
    body: 'Executive content should not sound like generic corporate marketing. We build content around the executive’s actual expertise, experiences, opinions, stories, and communication style. Every ghostwritten post goes through an agreed review process before publication.',
  },
  {
    num: '03',
    icon: Target,
    title: 'B2B-Focused Content Strategy',
    body: 'LinkedIn requires a different content approach from consumer-focused social platforms. We build content around professional audiences, industry expertise, business problems, buyer questions, credibility, and relationship building.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Human Review & Approval',
    body: 'Your company and executives should have control over what gets published. Content follows an agreed review and approval workflow before publication. This is particularly important for executive thought leadership, technical subjects, confidential information, and industry-sensitive topics.',
  },
  {
    num: '05',
    icon: Globe,
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. We do not assume that one content style works equally well in every market.',
    points: [
      'Target market & industry norms',
      'Audience seniority & cultural context',
      'Professional communication tone',
      'Competitive landscape analysis',
      'Commercial B2B objectives',
    ],
  },
  {
    num: '06',
    icon: Lock,
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your LinkedIn accounts and business assets should remain under your ownership. We use appropriate account permissions and access workflows rather than unnecessarily requiring clients to share personal passwords.',
  },
  {
    num: '07',
    icon: BarChart3,
    title: 'Clear Reporting & Communication',
    body: 'You should understand what is being created, what is being published, what is performing, and what we recommend changing. Our reporting focuses on useful insights rather than presenting a collection of disconnected social-media numbers.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              The Framecipher Standard · Why Us
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">LinkedIn Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            LinkedIn work handled by people who understand the B2B platform, with clear boundaries between what your team controls and what the platform controls.
          </p>
        </div>

        {/* 7 Standards Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, idx) => {
            const Icon = standard.icon
            return (
              <article
                key={standard.title}
                className={`flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16] ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Standard {standard.num} · </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {standard.title}
                  </h3>

                  <div className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/linkedin" allowed={["/studio/video-editing"]}>
                      {standard.body}
                    </AutoLinks>
                  </div>

                  {standard.points && (
                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                        Operational Considerations:
                      </p>
                      <ul className="space-y-2 text-xs text-zinc-400">
                        {standard.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Ready to Work With a Dedicated B2B Team?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Get an honest evaluation of your company page and leadership profiles.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Request a Custom Quote
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
