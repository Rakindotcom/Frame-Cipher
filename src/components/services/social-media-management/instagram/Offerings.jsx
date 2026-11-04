'use client'

import React from 'react'
import { Check, ArrowRight, ShieldCheck, Film, Layers, Sparkles, MessageCircle, BarChart3 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const offerings = [
  {
    num: '01',
    title: 'Instagram Strategy, Audience & Competitor Research',
    description:
      'Effective Instagram management starts with understanding your business, audience, market, and competitors. We review your existing account and research the people you want to reach. We also study competing accounts to identify content patterns, positioning opportunities, audience questions, and gaps your brand can address.',
    bullets: [
      'Business and account discovery',
      'Target audience research',
      'Customer question and pain-point research',
      'Competitor content analysis',
      'Competitor positioning review',
      'Content gap analysis',
      'Content pillar development',
      'Audience interests and behavior',
      'Market-specific content opportunities',
      'Content objectives',
      'Recurring content themes',
      'Format selection',
      'Brand messaging direction',
      'Content opportunities based on customer intent',
    ],
    note: 'The result is a structured content direction instead of publishing ideas whenever something comes to mind.',
  },
  {
    num: '02',
    title: 'Instagram Profile Optimization & SEO',
    description:
      'Your Instagram profile is often the first place someone evaluates after discovering your content. We optimize the profile so visitors can quickly understand who you serve, what you offer, and what action they can take next.',
    bullets: [
      'Username review',
      'Profile name optimization',
      'Bio optimization',
      'Relevant keyword placement',
      'Business category setup',
      'Contact information',
      'Location information',
      'Website and link strategy',
      'Profile image guidance',
      'Call-to-action setup',
      'Pinned post strategy',
      'Story Highlight organization',
      'Service or product information',
      'Search-friendly content structure',
      'Profile-to-conversion journey',
      'Relevant topic and hashtag discovery',
    ],
    note: 'Instagram search and discovery can change over time, so we focus on making your profile and content clear, relevant, and aligned with the language your target audience uses.',
  },
  {
    num: '03',
    title: 'Multi-Format Content Strategy',
    description:
      'Instagram gives businesses several content formats, and each format can support a different objective. We build a content system that can combine the formats that fit your business instead of forcing every idea into one post type.',
    bullets: [
      'Reels for short-form discovery and storytelling',
      'Feed posts for brand communication',
      'Carousels for educational and informational content',
      'Stories for regular interaction and updates',
      'Highlights for important evergreen information',
      'Product content for ecommerce brands',
      'Customer-focused content for trust and conversion',
    ],
    note: 'The format should support the idea. A product demonstration may work better as a Reel. A step-by-step explanation may work better as a Carousel. A limited-time update may work better through Stories. We plan content around that distinction.',
  },
  {
    num: '04',
    title: 'Reels Strategy, Production & Optimization',
    description:
      'Reels are an important part of Instagram\'s current content ecosystem, particularly for brands looking to reach people beyond their existing audience.',
    bullets: [
      'Reel concept development',
      'Topic research',
      'Audience-focused content angles',
      'Hook development',
      'Scriptwriting',
      'Short-form storytelling',
      'Trend and audio research',
      'Brand-specific trend adaptation',
      'Vertical video editing',
      'On-screen text',
      'Captions and subtitles',
      'Pacing and scene selection',
      'Cover design',
      'Caption writing',
      'Calls to action',
      'Performance review',
    ],
    note: 'We do not use every trend simply because it is popular. A trend should fit your audience, brand, message, and objective before it becomes part of your content plan. We also prioritize original and meaningful content rather than repetitive reposting.',
  },
  {
    num: '05',
    title: 'Feed, Carousel & Visual Content',
    description:
      'Your Feed remains important for people evaluating your brand after discovering your account. We maintain visual consistency without allowing design to become more important than the message.',
    bullets: [
      'Static Feed posts',
      'Educational Carousels',
      'Product Carousels',
      'Service-focused content',
      'Promotional posts',
      'Brand storytelling',
      'Customer-focused content',
      'Testimonials and social proof',
      'Educational graphics',
      'Infographics',
      'Product features',
      'Announcements',
      'Seasonal content',
      'FAQ-based content',
    ],
    carouselStructures: [
      'Checklists',
      'Comparisons',
      'Processes',
      'FAQs',
      'Step-by-step guides',
      'Practical tips',
      'Product education',
      'Industry insights',
    ],
  },
  {
    num: '06',
    title: 'Stories & Highlights Management',
    description:
      'Stories create a more frequent and interactive layer of communication between your brand and audience. We structure evergreen highlights so new visitors find critical answers immediately.',
    bullets: [
      'Daily or scheduled Story planning',
      'Product and service updates',
      'Behind-the-scenes content',
      'Polls, questions and quizzes',
      'Customer feedback & social proof',
      'Product demonstrations',
      'Promotions & limited-time offers',
      'Announcements',
      'Website and campaign links',
      'Story replies & interactions',
      'Highlight categorization',
      'Branded highlight covers',
      'Evergreen FAQ highlights',
      'Lead funnel routing',
      'Audience retention tracking',
    ],
    highlightExamples: [
      'Services',
      'Products',
      'Reviews',
      'FAQs',
      'About Us',
      'Offers',
      'Locations',
      'Contact',
    ],
  },
  {
    num: '07',
    title: 'Community & DM Management',
    description:
      'Instagram can function as an important customer communication channel, not just a publishing platform. We monitor interactions so inquiries turn into real conversations.',
    bullets: [
      'Comment responses',
      'Direct messages (DMs)',
      'Story replies',
      'Customer questions',
      'Product inquiries',
      'Service inquiries',
      'Basic information requests',
      'Lead qualification',
      'Inquiry escalation',
      'Spam and inappropriate comment moderation',
      'Community interactions',
      'Customer communication guidelines',
      'Brand voice consistency',
    ],
    note: 'For sensitive, complex, or sales-critical conversations, we follow an agreed escalation process so the appropriate person from your business can take over. Community coverage and response windows are defined according to your selected plan.',
  },
  {
    num: '08',
    title: 'UGC, Creator & Collaboration Management',
    description:
      'User-generated content and creator collaborations can provide additional content opportunities and social proof when the partnership fits your audience.',
    bullets: [
      'UGC content planning',
      'Creator research',
      'Collaboration planning',
      'Creator briefs',
      'Content requirements',
      'Communication coordination',
      'Content approval workflows',
      'Campaign content organization',
      'Brand guidelines for creators',
      'Performance tracking',
      'Usage-rights coordination',
      'Creator Marketplace coordination',
      'Audience demographic alignment',
    ],
    note: 'We focus on audience relevance and brand fit rather than selecting creators based only on follower count.',
  },
  {
    num: '09',
    title: 'Instagram Ecommerce & Product Content',
    description:
      'For ecommerce brands, Instagram can support product discovery, education, social proof, customer questions, and purchase consideration.',
    bullets: [
      'Product launches',
      'Product demonstrations',
      'Product features',
      'Benefits and use cases',
      'Product comparisons',
      'Customer reviews & unboxings',
      'User-generated content curation',
      'Product-focused Reels',
      'Promotional campaigns',
      'Seasonal collections',
      'Product FAQs',
      'Purchase-related DMs',
      'Website traffic routing',
      'Product discovery workflows',
      'Instagram Shopping integration support',
    ],
    note: 'Where Instagram Shopping or related commerce features are available and your account meets the applicable requirements, we can incorporate them into the broader content strategy based on eligibility and platform policies.',
  },
  {
    num: '10',
    title: 'Publishing & Content Calendar Management',
    description:
      'Consistent publishing becomes easier when content is planned before the publishing date. We build and manage structured monthly content calendars aligned with your operational roadmap.',
    bullets: [
      'Content themes',
      'Format allocation',
      'Campaign alignment',
      'Product launches',
      'Promotions & seasonal dates',
      'Audience needs analysis',
      'Brand priorities',
      'Production timelines',
      'Approval schedules',
      'Copywriting & caption drafting',
      'Multi-stakeholder review workflow',
      'Meta Business Suite scheduling',
      'Post-launch publication verification',
    ],
    note: 'Before publishing, content follows an agreed review and approval workflow so nothing goes live without your team\'s sign-off.',
  },
  {
    num: '11',
    title: 'Performance Tracking & Optimization',
    description:
      'Publishing content without reviewing performance makes it difficult to know what deserves more investment. We compare metrics across formats, topics, and objectives to guide future iterations.',
    bullets: [
      'Reach and impressions',
      'Video views and watch time',
      'Engagement rates',
      'Saves and shares',
      'Comments and direct responses',
      'Profile visits and taps',
      'Follow growth and audience demographics',
      'Link clicks and outbound traffic',
      'DM activity and qualified inquiries',
      'Format-by-format performance analysis',
      'Audience retention benchmarks',
      'Content theme performance comparison',
      'Website conversion correlations',
      'Monthly actionable strategy refinements',
    ],
    note: 'We compare performance across formats, content themes, audience responses, and business objectives to identify what should be repeated, improved, reduced, or tested next.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               SCOPE OF WORK · FULL CAPABILITIES 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our Instagram Management{' '}
            <span className="italic text-[#A855F7]">Service Includes.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our Instagram Management Service covers the strategic, creative, operational, and analytical work required to maintain and grow a professional Instagram presence.
          </p>
        </div>

        {/* 11 Modular Offerings Grid (Single-tier flat elevation #121214) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {offerings.map((item) => (
            <article
              key={item.num}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A855F7]">
                    Module {item.num} · </span>
                  <span className="font-mono text-[11px] uppercase text-zinc-500">
                    Full Execution
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.description}
                </p>

                {/* Bullet Grid */}
                <div className="border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#A855F7] block mb-3">
                    Deliverables &amp; Scope:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Structures (If Present) */}
                {item.carouselStructures && (
                  <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A855F7] block mb-2">
                      Carousel Content Formats:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.carouselStructures.map((cs) => (
                        <span
                          key={cs}
                          className="rounded border border-white/[0.08] bg-[#121214] px-2 py-1 font-mono text-[10px] text-zinc-300"
                        >
                          {cs}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlight Examples (If Present) */}
                {item.highlightExamples && (
                  <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A855F7] block mb-2">
                      Structured Highlight Categorization:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlightExamples.map((he) => (
                        <span
                          key={he}
                          className="rounded border border-white/[0.08] bg-[#121214] px-2 py-1 font-mono text-[10px] text-zinc-300"
                        >
                          {he}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Note / Philosophy Callout */}
              {item.note && (
                <div className="mt-6 rounded-lg border-l-2 border-[#A855F7] bg-[#18181B]/70 p-3.5 text-xs text-zinc-400">
                  <p className="leading-relaxed">{item.note}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Action Callout Card */}
        <div className="mt-12 flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Not Sure What Your Account Needs?
            </span>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              We review your actual account, existing content, and competitors to determine which improvements matter most before any management work begins.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <PosterButton href="/contact">
              Request Your Instagram Management Quote
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
