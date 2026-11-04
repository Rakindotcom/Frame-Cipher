'use client'

import React from 'react'
import {
  Search,
  Users,
  FileText,
  Megaphone,
  Link2,
  AtSign,
  MapPin,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react'

const offerings = [
  {
    icon: Search,
    title: 'Backlink Prospecting & Competitor Link Gap Analysis',
    description:
      'We start by understanding where your website stands and where relevant opportunities already exist. We review your current backlink profile and compare it with competitors that are genuinely relevant to your market. The purpose is not to copy every link they have. Instead, we identify patterns and opportunities that may make sense for your business.',
    bullets: [
      'Relevant referring domains',
      'Competitor link sources',
      'Links pointing to competitor content but not yours',
      'Industry publications and resource pages',
      'Local and regional websites',
      'Publisher categories worth pursuing',
      'Unlinked brand mentions',
      'Broken or lost backlink opportunities',
      'Content assets that could attract references',
    ],
    footerNote:
      'We separate realistic opportunities from low-value sources so outreach effort stays focused.',
  },
  {
    icon: Users,
    title: 'Manual Outreach & Relationship Building',
    description:
      'Good outreach begins before the first email. We research the publication, understand its audience, review its existing content, and identify a reason our contribution or resource would be relevant.',
    bullets: [
      'Publication-specific research',
      'Personalized pitch development',
      'Relevant topic selection',
      'Relationship-focused communication',
      'Follow-up without excessive messaging',
      'Clear placement expectations',
      'Ongoing publisher relationships where appropriate',
    ],
    footerNote:
      'We do not rely on generic templates sent to hundreds of unrelated sites. The objective is to make outreach relevant enough that publishers have a genuine reason to consider it.',
  },
  {
    icon: FileText,
    title: 'Guest Content & Editorial Placements',
    description:
      'Guest content can be useful when the publication, subject, audience, and contribution all make sense. We develop article ideas around the publisher’s readers rather than creating thin posts solely to insert links. Where content creation is part of the campaign, the article should have value even without considering the backlink.',
    bullets: [
      'Topic research',
      'Publisher-specific content ideas',
      'Editorial pitch development',
      'Original article writing',
      'Contextual link placement',
      'Natural anchor selection',
      'Editorial revisions',
      'Final placement verification',
    ],
    footerNote:
      'Google’s spam policies specifically address paid or manipulative guest-post links. Our approach prioritizes genuine editorial value and appropriate qualification where required.',
  },
  {
    icon: Megaphone,
    title: 'Digital PR & Linkable Asset Promotion',
    description:
      'Some of the strongest outreach opportunities begin with something worth talking about. Digital PR campaigns can promote original information, useful research, expert commentary, proprietary data, tools, visual resources, or other assets that publications naturally want to reference.',
    bullets: [
      'Original research',
      'Industry statistics',
      'Data studies',
      'Expert insights',
      'Surveys',
      'Expert-led guides',
      'Useful tools or calculators',
      'Original visual resources',
      'Proprietary business findings',
    ],
    footerNote:
      'The campaign is built around the asset first. Outreach comes after we identify why that asset deserves attention, creating brand exposure beyond direct SEO value.',
  },
  {
    icon: Link2,
    title: 'Broken Link Building & Link Reclamation',
    description:
      'Broken link building finds relevant pages where an existing outbound link no longer works and where your content provides a useful replacement. Link reclamation recovers links or mentions that once existed but are no longer delivering their original value.',
    bullets: [
      'Broken external links on relevant pages',
      'Lost backlinks',
      'Links pointing to outdated URLs',
      'Redirected or changed destinations',
      'Missing links from relevant brand mentions',
      'Older references that could be updated',
      'Relevant resource pages with outdated sources',
    ],
    footerNote:
      'The opportunity is strongest when the replacement is genuinely useful to the publisher’s readers.',
  },
  {
    icon: AtSign,
    title: 'Unlinked Brand Mention Outreach',
    description:
      'Not every authority-building opportunity starts with a new piece of content. A publication may already mention your brand, product, founder, research, or business contribution without linking to your website.',
    bullets: [
      'Identification of unlinked brand mentions',
      'Evaluation of link contextual relevance',
      'Simple, polite publisher outreach requests',
      'Conversion of mentions into source citations',
    ],
    footerNote:
      'This turns existing brand visibility into a potential link opportunity without forcing an unrelated placement.',
  },
  {
    icon: MapPin,
    title: 'Local & Industry Citation Building',
    description:
      'Relevant business directories and industry listings provide useful foundational references, especially for businesses that depend on local or sector-specific discovery. We focus on accuracy and relevance rather than mass submission.',
    bullets: [
      'Local business directory research',
      'Industry-specific directories',
      'Organization and association listings',
      'Business profile consistency',
      'NAP consistency checks',
      'Duplicate listing identification',
      'Relevant regional references',
    ],
    footerNote:
      'Citation work supports the foundation of a local presence, but is not treated as a replacement for broader authority-building work.',
  },
  {
    icon: ShieldAlert,
    title: 'Backlink Monitoring & Risk Review',
    description:
      'Your backlink profile changes even when you are not actively building links. We monitor new and lost backlinks, review unusual patterns, and identify links that may require attention.',
    bullets: [
      'New referring domains',
      'Lost backlinks',
      'Linking page changes',
      'Anchor text patterns',
      'Target pages receiving external links',
      'Relevant versus unrelated domains',
      'Potentially manipulative patterns',
      'Links that may warrant further review',
    ],
    footerNote:
      'Google says most sites do not need the disavow tool. We only recommend disavow guidance where genuine artificial or spam patterns warrant it.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Outreach Methods &amp; Capabilities
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Our Off-Page SEO &amp;{' '}
            <span className="italic text-frame-accent">Link Building Services</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            We combine several link acquisition methods because different businesses need different authority-building strategies. The exact mix depends on your industry, competitors, existing backlink profile, target market, content assets, and business goals.
          </p>
        </div>

        {/* 8 Offerings Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offerings.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Method 0{index + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Scope &amp; Coverage:
                    </span>
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {item.footerNote && (
                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-zinc-400 italic">
                    {item.footerNote}
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
