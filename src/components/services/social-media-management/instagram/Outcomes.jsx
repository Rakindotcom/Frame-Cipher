'use client'

import React from 'react'
import { Check, Eye, Heart, ShieldCheck, MessageCircle, ShoppingBag } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const outcomes = [
  {
    icon: Eye,
    num: '01',
    title: 'Increase Content Discovery',
    body: 'A combination of relevant content, original creative work, strong topics, profile optimization, and consistent publishing can create more opportunities for people to discover your account.',
    points: [
      'Different formats used for different discovery opportunities',
      'Strong original topics and creative work',
      'Profile optimization for discoverability',
      'Consistent, structured publishing cadence',
    ],
    note: 'We use different formats for different discovery opportunities rather than relying on one content type.',
  },
  {
    icon: Heart,
    num: '02',
    title: 'Build Audience Engagement',
    body: 'Useful and relevant content gives people reasons to interact with your brand. Depending on the content and audience, we create structured opportunities for active dialogue.',
    points: [
      'Meaningful comments and conversations',
      'High-intent saves and bookmarking',
      'Social sharing across DM circles',
      'Story polls, questions, and replies',
    ],
    note: 'The goal is meaningful audience activity, not vanity engagement numbers without business context.',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'Strengthen Brand Trust',
    body: 'A well-managed Instagram profile can help potential customers understand your business before they contact you. Professional presentation builds customer confidence.',
    points: [
      'Consistent branded visual identity',
      'Educational and problem-solving content',
      'Verified customer feedback & reviews',
      'Authentic behind-the-scenes culture',
      'Responsive, helpful direct communication',
    ],
    note: 'Trust converts profile visitors into qualified inquiries and repeat customers over time.',
  },
  {
    icon: MessageCircle,
    num: '04',
    title: 'Generate DMs & Inquiries',
    body: 'Your Instagram profile should make it clear how an interested person can take the next step. We structure content, CTAs, Stories, profile information, and community management around common customer questions.',
    points: [
      'Clear profile-to-inquiry funnel',
      'Actionable caption CTAs in every post',
      'Interactive Story question boxes & links',
      'Structured DM lead qualification workflow',
    ],
    note: 'Where appropriate, qualified inquiries can be escalated directly to your sales or customer-service team.',
  },
  {
    icon: ShoppingBag,
    num: '05',
    title: 'Support Ecommerce & Product Discovery',
    body: 'Instagram can help customers discover products, understand how they work, compare options, and see how other customers use them in everyday situations.',
    points: [
      'Product demonstrations & unboxings',
      'Feature breakdowns and use cases',
      'Social proof & customer testimonial reels',
      'New collection launches and seasonal drops',
      'Purchase-related DM customer support',
    ],
    note: 'For ecommerce brands, we connect product storytelling directly with website traffic and sales consideration.',
  },
]

export default function Outcomes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               MEASURABLE RESULTS · VALUE PILLARS 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Instagram Management Can{' '}
            <span className="italic text-[#A855F7]">Help Your Business Achieve.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Instagram performance depends on your market, audience, offer, content quality, account history, competition, and other factors. Our role is to build a structured management system that supports measurable business objectives without promising outcomes the platform cannot guarantee.
          </p>
        </div>

        {/* 5 Outcome Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <article
                key={item.num}
                className={`flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.16] ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A855F7]">
                      {item.num} · </span>
                    <Icon className="h-4 w-4 text-[#A855F7]" />
                  </div>

                  <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>

                  <div className="space-y-2 border-t border-white/[0.06] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {item.note && (
                  <div className="mt-6 rounded-lg border-l-2 border-[#A855F7] bg-[#18181B]/70 p-3 text-xs text-zinc-400">
                    <p className="leading-relaxed">{item.note}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <p className="font-heading text-lg font-medium uppercase text-white">
            Ready to give your Instagram a defined commercial purpose?
          </p>
          <PosterButton href="/contact">
            Discuss Your Instagram Strategy
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
