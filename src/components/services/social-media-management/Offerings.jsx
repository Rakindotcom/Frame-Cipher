'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Social Media Strategy & Account Management',
    paragraphs: [
      'We start by understanding your business, audience, competitors, existing social presence, and goals. This helps us build a practical social media strategy instead of relying on a generic posting template.',
      'Account management can include platform setup, ongoing management, content planning, publishing, audience engagement, and performance reviews.',
    ],
    bullets: [
      'Platform setup and account management',
      'Ongoing account management & workflow',
      'Content planning and publishing cadence',
      'Audience engagement & community monitoring',
      'Regular performance reviews & strategic iterations',
    ],
  },
  {
    title: 'Content Strategy & Monthly Content Calendar',
    paragraphs: [
      'A content calendar gives every post a clear purpose.',
      'We plan your monthly content around content pillars, campaigns, business priorities, important dates, audience interests, and platform-specific formats.',
      'You receive a structured calendar that shows what will be published, where it will appear, and how it supports your broader social strategy.',
    ],
    bullets: [
      'Content pillars mapped to business priorities',
      'Campaign, holiday, and event date mapping',
      'Platform-specific format specifications',
      'Documented calendar delivered in advance for review',
    ],
  },
  {
    title: 'Social Media Content Creation',
    paragraphs: [
      'We create social content that fits your brand and the platform where it will be published.',
      'Depending on your plan, content can include captions, educational posts, promotional content, brand stories, product content, engagement posts, campaign assets, and short-form video concepts.',
      'If you already have photography, videos, or other brand assets, we can also organize and repurpose them into platform-ready content.',
    ],
    bullets: [
      'Brand captions & voice copywriting',
      'Educational and problem-solving posts',
      'Promotional messages & product showcases',
      'Engagement posts & interactive Story prompts',
      'Repurposing of existing photos and raw footage',
    ],
  },
  {
    title: 'Graphic Design & Carousels',
    paragraphs: [
      'Visual consistency helps people recognize your brand across social platforms.',
      'We create branded graphics, carousel posts, promotional visuals, educational designs, product-focused content, and other visual assets based on your content strategy.',
      'Designs are created around the format and audience expectations of each platform rather than simply resizing the same graphic everywhere.',
    ],
    bullets: [
      'Custom branded graphic design templates',
      'Multi-slide educational and step-by-step carousels',
      'Promotional banners & seasonal campaign visuals',
      'Product-focused designs & feature breakdowns',
      'Platform-native aspect ratios (1:1, 4:5, 9:16)',
    ],
  },
  {
    title: 'Reels & Short-Form Video',
    paragraphs: [
      'Short-form video is an important part of modern social content.',
      'We develop concepts and platform-ready short-form videos for formats such as Instagram Reels, Facebook Reels, TikTok videos, and YouTube Shorts where relevant to your strategy.',
      'Content can include educational clips, product demonstrations, promotional videos, behind-the-scenes content, tips, trends, and brand-focused storytelling.',
    ],
    bullets: [
      'Concepts & platform-ready vertical video edits',
      'Educational tips and how-to explanations',
      'Product demonstrations, packaging, and unboxing',
      'Behind-the-scenes culture & craftsmanship',
      'Reels, TikToks, and YouTube Shorts distribution',
    ],
  },
  {
    title: 'Publishing & Scheduling',
    paragraphs: [
      'Consistent publishing keeps your content plan moving without requiring your team to manage every post manually.',
      'We prepare, schedule, and publish approved content according to your content calendar and platform requirements.',
      'Publishing schedules are adjusted based on your audience, platform, campaign timing, and performance data rather than following one fixed schedule for every business.',
    ],
    bullets: [
      'Preparation and scheduling of approved posts',
      'Platform-specific publishing specs and tags',
      'Audience peak-activity timing optimization',
      'Data-driven schedule refinements',
    ],
  },
  {
    title: 'Community & Inbox Management',
    paragraphs: [
      'Social media management does not stop when a post is published.',
      'We monitor comments, direct messages, mentions, and relevant interactions across the platforms included in your plan. We respond in your approved brand voice and escalate customer-service issues or sensitive conversations to your team when needed.',
      'We also help moderate spam and inappropriate interactions so your social profiles remain useful and professional.',
    ],
    bullets: [
      'Comment replies in approved brand voice',
      'Direct message triage and customer inquiries',
      'Escalation of sensitive or complex queries',
      'Spam, bot, and troll interaction moderation',
    ],
  },
  {
    title: 'Profile Optimization',
    paragraphs: [
      'Your profile is often one of the first places potential customers check after discovering your brand.',
      'We can optimize important profile elements such as your bio or About section, profile and cover visuals, contact information, links, calls to action, categories, location details, and other platform-specific information.',
      'The goal is to make your profiles clear, consistent, trustworthy, and easier for relevant audiences to understand.',
    ],
    bullets: [
      'Bio, About, and positioning statement clarity',
      'Profile image and branded cover visual alignment',
      'Contact channels, links, and primary CTA buttons',
      'Category tags, location info, and platform badges',
    ],
  },
  {
    title: 'Social Listening & Reputation Management',
    paragraphs: [
      'We monitor relevant conversations, mentions, customer feedback, and recurring questions that can influence how people perceive your brand.',
      'Social listening can reveal common customer concerns, content opportunities, reputation issues, and conversations worth joining.',
      'When a matter requires information or action from your business, we flag it to the appropriate team rather than making unsupported commitments on your behalf.',
    ],
    bullets: [
      'Brand mentions & customer sentiment monitoring',
      'Identification of common concerns & FAQs',
      'Surfacing new content & engagement opportunities',
      'Early alert and escalation for reputation risks',
    ],
  },
  {
    title: 'Analytics, Reporting & Optimization',
    paragraphs: [
      'Monthly reporting should explain performance, not simply display numbers.',
      'We track relevant metrics such as reach, engagement, follower growth, content performance, profile activity, website traffic, and other platform-specific signals where available.',
      'We then use those insights to identify what is working, what needs improvement, and what should change in the next content cycle.',
    ],
    bullets: [
      'Reach, impressions, and unique audience growth',
      'Engagement, saves, shares, and comment rates',
      'Top-performing formats and content pillars',
      'Actionable recommendations for the next cycle',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[#A855F7]">
               CAPABILITIES &amp; SCOPE 
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Social Media Management{' '}
            <span className="italic text-[#A855F7]">Services Include.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Every engagement covers strategy, content, publishing, community, and reporting. The mix inside each area depends on your plan, platform selection, and content requirements.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Core In-House Capability
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white leading-snug">
                  {item.title}
                </h3>

                <div className="mt-4 space-y-3 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  {item.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              {item.bullets?.length > 0 && (
                <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-4 text-xs font-mono text-zinc-400">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* Action Callout Banner */}
        <div className="flex flex-col gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A855F7]">
              Custom Social Media Scope
            </span>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Scope is agreed before work begins. If you already have photography, videos, or other brand assets, we can also organize and repurpose them into platform-ready content.
            </p>
          </div>
          <PosterButton href="/contact" variant="accent" className="shrink-0">
            Request a Custom Social Media Plan
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
