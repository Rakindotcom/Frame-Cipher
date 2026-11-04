'use client'

import React from 'react'
import { Check, ArrowRight, Video, Sparkles } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const services = [
  {
    number: '01',
    title: 'TikTok Strategy & Audience Research',
    lead: 'We begin by understanding who you want to reach, what you offer, and what you want TikTok to accomplish.',
    groups: [
      {
        label: 'Our research can cover',
        items: [
          'Target audience',
          'Customer questions',
          'Buyer interests',
          'Competitor accounts',
          'Competitor content patterns',
          'Content gaps',
          'Market opportunities',
          'Brand positioning',
          'Existing account performance',
          'Conversion paths',
          'Business goals',
        ],
      },
    ],
    notes: [
      'We also review how competitors communicate with the same audience.',
      'This helps us identify repeated content patterns, underserved topics, audience questions, and opportunities for your account to develop a distinct content position.',
      'The result is a TikTok strategy connected to your business rather than a generic monthly content calendar.',
    ],
  },
  {
    number: '02',
    title: 'Content Strategy & Content Pillars',
    lead: 'A strong TikTok account needs more than individual video ideas.',
    notes: [
      'We create content pillars that give your account a clear direction while leaving room for trends, audience questions, cultural moments, and new opportunities.',
    ],
    groups: [
      {
        label: 'Depending on your business, content pillars may include',
        items: [
          'Educational content',
          'Product demonstrations',
          'Problem-and-solution videos',
          'Tutorials',
          'Product comparisons',
          'Founder-led content',
          'Behind-the-scenes content',
          'Customer questions',
          'Customer stories',
          'Industry insights',
          'Lifestyle content',
          'Community-focused content',
          'Trend-based content',
        ],
      },
      {
        label: 'We also define the brand voice and creative direction. This can include',
        items: [
          'Messaging style',
          'Tone of voice',
          'Visual direction',
          'On-camera style',
          'Hook style',
          'Storytelling approach',
          'Calls to action',
        ],
      },
    ],
    notesAfter: [
      'Each content pillar has a purpose. Some content builds awareness. Some create trust. Some introduce products. Others encourage profile visits, website actions, inquiries, or product discovery.',
    ],
  },
  {
    number: '03',
    title: 'TikTok Video Production & Editing',
    lead: 'TikTok is a video-first platform, so production needs to support the content strategy.',
    notes: [
      'We can manage the short-form production workflow from concept development through editing and publishing, depending on your selected scope.',
    ],
    groups: [
      {
        label: 'Production may include',
        items: [
          'Video concepts',
          'Content hooks',
          'Scripts',
          'Talking points',
          'Storyboards or shot planning',
          'Filming guidance',
          'Short-form editing',
          'Captions',
          'On-screen text',
          'Visual transitions',
          'Brand elements',
          'Product demonstrations',
          'Educational videos',
          'Founder or team videos',
          'UGC-based content',
          'Repurposed content',
        ],
      },
    ],
    flowLead: 'For suitable videos, we can structure the content around a clear sequence such as:',
    flow: ['Hook', 'Context', 'Value', 'Proof or Demonstration', 'Next Action'],
    notesAfter: [
      'The structure changes according to the content rather than forcing every video into the same template.',
      'If you already have footage, we can turn suitable raw material into platform-ready TikTok content.',
      'If filming is required, production requirements such as location, talent, equipment, travel, and filming responsibilities are defined in the project scope.',
    ],
  },
  {
    number: '04',
    title: 'TikTok Trend Research & Adaptation',
    lead: 'Trends can create opportunities, but blindly copying trends can make a brand look disconnected from its audience.',
    groups: [
      {
        label: 'We monitor relevant',
        items: [
          'Formats',
          'Sounds',
          'Topics',
          'Storytelling patterns',
          'Cultural moments',
          'Creative styles',
          'Audience conversations',
        ],
      },
    ],
    notesAfter: [
      'We then evaluate whether a trend fits your brand, audience, market, and content strategy.',
      'The goal is not to chase every viral format. It is to identify useful opportunities and adapt them in a way that makes sense for your business.',
    ],
  },
  {
    number: '05',
    title: 'TikTok SEO & Content Discoverability',
    lead: 'TikTok can function as both a content platform and a discovery environment.',
    notes: [
      'People may use it to explore products, find information, discover businesses, learn how something works, or research topics that interest them.',
    ],
    groups: [
      {
        label: 'Our TikTok SEO approach can include',
        items: [
          'Topic research',
          'Search-oriented content ideas',
          'Keyword research',
          'Search-aware video concepts',
          'Captions',
          'On-screen text',
          'Spoken topic context',
          'Profile optimization',
          'Bio optimization',
          'Pinned-content planning',
          'Relevant hashtags',
          'Content organization',
        ],
      },
    ],
    notesAfter: [
      'We do not treat any single element as a guaranteed ranking factor. Instead, we make the subject, purpose, and value of each video clearer while using relevant search terminology naturally.',
    ],
  },
  {
    number: '06',
    title: 'Posting & Publishing Management',
    lead: 'Consistent publishing becomes easier when strategy, production, scheduling, and publishing are handled through one workflow.',
    groups: [
      {
        label: 'Depending on your plan, publishing management can include',
        items: [
          'Content scheduling',
          'Caption preparation',
          'Hashtag selection',
          'Publishing',
          'Profile checks',
          'Content organization',
          'Publishing calendar management',
          'Campaign-content coordination',
          'Timely trend publishing',
        ],
      },
    ],
    notesAfter: [
      'We maintain the agreed publishing schedule while allowing room for relevant trends and timely opportunities.',
    ],
  },
  {
    number: '07',
    title: 'Community Management & Engagement',
    lead: 'Publishing is only one part of managing a TikTok account.',
    notes: [
      'Your audience may ask questions, request product information, share experiences, mention your brand, or provide feedback. We manage these interactions within the agreed scope.',
    ],
    groups: [
      {
        label: 'Basic community management may include',
        items: [
          'Comment monitoring',
          'Basic comment responses',
          'Customer questions',
          'Relevant brand mentions',
          'Issue escalation',
        ],
      },
      {
        label: 'Active community management may include',
        items: [
          'Regular comment monitoring',
          'Comment responses',
          'DM management within scope',
          'Customer-question escalation',
          'Audience feedback collection',
          'Recurring-question identification',
          'Content opportunities from community conversations',
        ],
      },
    ],
    notesAfter: [
      'Community interactions can also inform future content. A recurring question can become a tutorial. A product concern can become an explanation video. A common customer request can become a new content topic.',
      'Response volume, monitoring frequency, and escalation procedures are defined in the selected service scope.',
    ],
  },
  {
    number: '08',
    title: 'TikTok LIVE Support',
    lead: 'TikTok LIVE can provide a more direct format for audience interaction when it fits the business and account.',
    notes: ['Where LIVE is available and appropriate, we can support:'],
    groups: [
      {
        items: [
          'LIVE content ideas',
          'Session topics',
          'Promotional planning',
          'Talking points',
          'Product or service demonstrations',
          'Audience-question planning',
          'Promotional content',
          'Post-LIVE content opportunities',
        ],
      },
    ],
    notesAfter: [
      'Our standard LIVE support focuses on planning and content preparation. If you require hosting, technical production, real-time moderation, or full LIVE operations, those requirements can be scoped separately.',
      'LIVE availability and account requirements can vary by market and account.',
    ],
  },
  {
    number: '09',
    title: 'Creator & UGC Coordination',
    lead: 'Creator and user-generated content can introduce different voices, formats, and audience perspectives to a TikTok strategy.',
    notes: [
      'Where appropriate, we can coordinate creator or UGC activities around your content plan. This workflow may include:',
    ],
    flow: ['Creator Research', 'Brief', 'Production', 'Review', 'Usage Coordination', 'Publishing', 'Performance Review'],
    groups: [
      {
        label: 'Our support may include',
        items: [
          'Creator research',
          'UGC concepts',
          'Creator selection support',
          'Creative briefs',
          'Content requirements',
          'Creator communication',
          'Content review',
          'Usage coordination',
          'Publishing coordination',
          'Repurposing suitable creator content',
        ],
      },
    ],
    notesAfter: [
      'Creator content is planned around your wider brand strategy rather than treated as a disconnected influencer activity.',
      'Creator fees, influencer payments, and third-party production costs are separate unless specifically included in your proposal.',
    ],
  },
  {
    number: '10',
    title: 'Cross-Platform Content Repurposing',
    lead: 'A strong TikTok idea does not always need to stay on TikTok.',
    notes: ['Where appropriate, we can adapt suitable short-form content for:'],
    chips: ['Instagram Reels', 'Facebook', 'YouTube Shorts', 'Other agreed channels'],
    groups: [
      {
        label: 'Repurposing does not mean publishing the same asset everywhere. We can adapt',
        items: [
          'Hooks',
          'Captions',
          'Format',
          'Aspect requirements',
          'Calls to action',
          'Platform context',
          'Audience angle',
        ],
      },
    ],
    notesAfter: [
      'We also decide which platform should lead the content when appropriate. Not every TikTok should be copied to another platform, and not every existing social post should automatically become a TikTok.',
    ],
  },
  {
    number: '11',
    title: 'Performance Tracking & Reporting',
    lead: 'We track performance against the goals defined during strategy development.',
    groups: [
      {
        label: 'Depending on your account, goals, and available analytics, reporting may include',
        items: [
          'Video views',
          'Reach',
          'Average watch time',
          'Completion rate',
          'Retention patterns',
          'Engagement',
          'Shares',
          'Saves',
          'Comments',
          'Profile visits',
          'Follower growth',
          'Website clicks',
          'Leads',
          'Product interest',
          'Content-level performance',
          'Top-performing topics',
          'Format performance',
          'Audience response',
        ],
      },
    ],
    notesAfter: [
      'We do not treat follower growth or views as the only measures of success.',
      'For businesses with reliable tracking, we can connect TikTok activity with relevant business outcomes such as website visits, inquiries, leads, product interest, or conversions.',
      'The purpose of reporting is not to create a list of numbers. We use performance data to determine what should be repeated, tested, refined, or removed from future content cycles.',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Core Capabilities · 11 Pillars
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our TikTok Management{' '}
            <span className="italic text-frame-accent">Service Includes.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our TikTok management service covers the full content lifecycle: research, strategy, content pillars, production, trends, discoverability, publishing, community, LIVE, creators, repurposing, and reporting.
          </p>
        </div>

        {/* 11 Offerings Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Capability {service.number} · </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Pillar {service.number} of 11
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/tiktok-management" allowed={["/services/content-writing/content-strategy"]}>
                    {service.lead}
                  </AutoLinks>
                </p>

                {/* Pre-notes if any */}
                {service.notes && (
                  <div className="mt-4 space-y-2">
                    {service.notes.map((note, nIdx) => (
                      <p key={nIdx} className="text-xs text-zinc-400 leading-relaxed">
                        {note}
                      </p>
                    ))}
                  </div>
                )}

                {/* Chips (Platform targets) */}
                {service.chips && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                {/* Flow / Step sequence */}
                {service.flow && (
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    {service.flowLead && (
                      <p className="font-mono text-[11px] uppercase tracking-wider text-frame-accent mb-2.5">
                        {service.flowLead}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {service.flow.map((entry, fIdx) => (
                        <React.Fragment key={entry}>
                          <span className="rounded-md border border-white/[0.08] bg-[#18181B] px-2.5 py-1 font-mono text-[10px] text-zinc-200">
                            {entry}
                          </span>
                          {fIdx < service.flow.length - 1 && (
                            <span aria-hidden="true" className="text-frame-accent text-xs">
                              &rarr;
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Groups checklist */}
                {service.groups && (
                  <div className="mt-6 space-y-4 border-t border-white/[0.06] pt-4">
                    {service.groups.map((group, gIdx) => (
                      <div key={group.label || gIdx}>
                        {group.label && (
                          <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                            {group.label}:
                          </p>
                        )}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                          {group.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Notes After */}
              {service.notesAfter && (
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B] p-4 text-[11px] text-zinc-400 leading-relaxed space-y-2">
                  {service.notesAfter.map((note, aIdx) => (
                    <p key={aIdx}>{note}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Ready to Formulate Your Brand&apos;s TikTok Strategy?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              The result is a TikTok strategy connected to your business rather than a generic monthly content calendar.
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
