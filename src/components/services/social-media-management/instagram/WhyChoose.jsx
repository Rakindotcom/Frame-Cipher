'use client'

import React from 'react'
import { Check, ShieldCheck, Sparkles, Layers, Users, Film, Lock, BarChart3, Globe } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const standards = [
  {
    num: '01',
    icon: Users,
    title: 'One In-House Team',
    body: 'Strategy, content creation, video editing, publishing, community management, and reporting can be handled by one in-house team. This keeps communication simpler and allows performance insights to inform future content decisions.',
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'Instagram-Specific Strategy',
    body: 'We do not simply copy the same content from Facebook or another platform and publish it on Instagram. Content is adapted to Instagram’s formats, audience behavior, visual environment, discovery opportunities, and business objectives.',
  },
  {
    num: '03',
    icon: Film,
    title: 'Reels & Short-Form Video Capability',
    body: 'Reels are an important part of modern Instagram content strategy. Our team can handle concept development, hooks, scripts, editing, captions, visual treatment, covers, and publishing preparation based on your content requirements.',
    points: ['Concept development', 'Hooks', 'Scripts', 'Editing', 'Captions', 'Visual treatment', 'Covers', 'Publishing preparation'],
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Human Review & Approval',
    body: 'Your brand should not publish content that does not match your voice or business standards. Content follows an agreed review and approval workflow before publication.',
  },
  {
    num: '05',
    icon: Globe,
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. For international campaigns, we consider the target audience, market context, language, cultural expectations, competition, and business objectives rather than simply replicating one market’s content calendar.',
  },
  {
    num: '06',
    icon: Lock,
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your Instagram account and related business assets should remain under your ownership. We use appropriate account permissions and access workflows rather than unnecessarily requiring clients to share personal passwords.',
  },
  {
    num: '07',
    icon: BarChart3,
    title: 'Clear Reporting & Communication',
    body: 'You should understand what is being created, what is being published, and what the performance data shows. Our reporting focuses on useful account, content, audience, and business insights rather than sending a collection of unexplained metrics.',
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
              Platform Standards · Why Framecipher
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Instagram Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Instagram work handled by people who know the platform, with clear boundaries between what your team controls and what the platform controls.
          </p>
        </div>

        {/* 7 Standards Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard) => {
            const Icon = standard.icon
            return (
              <article
                key={standard.title}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                      Standard {standard.num} · </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-purple-400">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {standard.title}
                  </h3>

                  <div className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                    <AutoLinks currentPath="/services/social-media-management/instagram" allowed={["/services/content-creation"]}>
                      {standard.body}
                    </AutoLinks>
                  </div>

                  {standard.points && (
                    <div className="mt-6 border-t border-white/[0.06] pt-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                        Workflow Deliverables:
                      </p>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                        {standard.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-frame-accent shrink-0" />
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

        {/* Bottom Verification CTA Box */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Ready to Upgrade Your Instagram Presence?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Get an honest review of your profile, Reels performance, and growth opportunities.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Your Free Account Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
