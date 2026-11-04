'use client'

import React from 'react'
import { Check, Sparkles } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const services = [
  {
    number: '01',
    title: 'YouTube Channel Strategy & Positioning',
    body: 'We establish a clear direction for your channel based on your business, audience, market, competitors, and content opportunities.',
    points: [
      'Channel positioning',
      'Audience research',
      'Content pillars',
      'Topic selection',
      'Competitor research',
      'Content formats',
      'Publishing cadence',
      'Channel goals',
      'Content priorities',
      'Calls to action',
    ],
    note: 'The objective is to make your channel easier to understand for both viewers and your internal team.',
  },
  {
    number: '02',
    title: 'Content Ideation & Scripting',
    body: 'Strong YouTube channels begin with strong content ideas. We research topics around your audience’s questions, interests, problems, products, services, and search behavior.',
    points: [
      'Video topic research',
      'Content briefs',
      'Video concepts',
      'Hooks and introductions',
      'Video outlines',
      'Script development',
      'Educational content',
      'Product-focused content',
      'FAQ-based content',
      'Expert-led content',
      'Content series',
    ],
    note: 'Each idea should have a clear reason to exist rather than simply filling an upload calendar.',
  },
  {
    number: '03',
    title: 'YouTube Video SEO & Metadata Optimization',
    body: 'YouTube SEO helps your videos become easier to discover when people search for relevant topics. We optimize important elements such as video titles, descriptions, primary search topics, relevant keywords, video structure, chapters, metadata, playlists, related content, and internal channel connections.',
    points: [
      'Video titles & descriptions',
      'Primary search topics',
      'Relevant keywords & tags',
      'Video structure & chapters',
      'Playlists & related content',
      'Internal channel connections',
    ],
    note: 'YouTube Search considers relevance, engagement, and quality when determining search results. We therefore optimize for people first, while making the video’s topic and value clear to YouTube.',
  },
  {
    number: '04',
    title: 'Thumbnail & Title Strategy',
    body: 'A great video can struggle if viewers do not understand why they should watch it. We develop titles and thumbnails as part of the same packaging strategy.',
    points: [
      'Viewer intent',
      'Search intent',
      'Topic relevance',
      'Curiosity & emotional hook',
      'Clarity of value',
      'Brand consistency',
      'Thumbnail readability',
      'Mobile viewing optimization',
      'Expected viewer experience',
    ],
    note: 'CTR is useful for understanding how effectively a video’s packaging encourages viewers to choose it, but it should be evaluated alongside impressions, traffic sources, retention, and other performance signals.',
  },
  {
    number: '05',
    title: 'Long-Form Video Production & Editing',
    body: 'Long-form videos can give your business more room to educate, demonstrate expertise, explain products, answer complex questions, and build viewer trust.',
    points: [
      'Video editing & story structure',
      'Pacing & hook development',
      'B-roll integration & screen recordings',
      'Motion graphics & kinetic captions',
      'Audio cleanup & visual transitions',
      'End screens & interactive calls to action',
    ],
    note: 'Video length is determined by the content and audience rather than an arbitrary target. YouTube itself notes that there is no universal ideal video length.',
  },
  {
    number: '06',
    title: 'YouTube Shorts Strategy & Production',
    body: 'Shorts can create additional discovery opportunities and provide another way to communicate your brand.',
    points: [
      'Original short-form concepts',
      'Repurposed long-form content',
      'Educational tips & product highlights',
      'FAQs & quick demonstrations',
      'Expert insights & behind-the-scenes',
      'Trend-aware formats where relevant',
    ],
    note: 'Shorts and long-form content can support the same broader channel strategy while serving different viewing behaviors.',
  },
  {
    number: '07',
    title: 'Channel Branding & Optimization',
    body: 'Your channel should communicate who you are before someone watches a video. We help organize key channel elements.',
    points: [
      'Channel name and positioning',
      'Channel description & keywords',
      'Profile image & banner direction',
      'Visual consistency & branding',
      'Featured content & homepage organization',
      'Content sections & playlist structure',
    ],
    note: 'The goal is to create a channel experience that feels consistent, professional, and relevant to your audience.',
  },
  {
    number: '08',
    title: 'Playlist, End Screen & Channel Organization',
    body: 'A well-organized channel makes it easier for viewers to find related content. We can structure the pathways between videos.',
    points: [
      'Topic-based playlists',
      'Series playlists',
      'Educational collections',
      'Product-related collections',
      'End-screen connections',
      'Related-video pathways',
      'Channel homepage sections',
    ],
    note: 'These elements help create clearer paths between relevant pieces of content across your channel.',
  },
  {
    number: '09',
    title: 'Publishing & Upload Management',
    body: 'Consistent publishing requires more than pressing the upload button. We can manage the publishing workflow, including titles, descriptions, thumbnails, playlists, chapters, visibility settings, and publishing checks.',
    points: [
      'Upload scheduling & calendar management',
      'Optimized titles & descriptions',
      'Custom high-converting thumbnails',
      'Playlists, tags & chapters',
      'Visibility settings & end screens',
      'Quality control & pre-flight checks',
    ],
    note: 'Every upload follows an agreed workflow so content is reviewed before it goes live.',
  },
  {
    number: '10',
    title: 'Community Management & Engagement',
    body: 'YouTube is also a community platform. Depending on your package, we can help manage engagement around your videos.',
    points: [
      'Comment monitoring & responses',
      'Audience questions & handling',
      'Community feedback & polls',
      'Engagement opportunities',
      'Content ideas from viewer conversations',
    ],
    note: 'Comments are also useful qualitative feedback. They can reveal questions, objections, and topics your audience wants you to address.',
  },
  {
    number: '11',
    title: 'Content Repurposing',
    body: 'One strong piece of content can often support multiple content formats. We can repurpose suitable long-form content into other platform-ready formats.',
    points: [
      'YouTube Shorts',
      'Short educational clips',
      'Social media videos (Instagram Reels & TikTok)',
      'Quote-based graphics & takeaways',
      'FAQ content & promotional snippets',
    ],
    note: 'Repurposing helps extend the value of your original production without treating every platform as if it has the same audience behavior.',
  },
  {
    number: '12',
    title: 'Performance Tracking & Analytics',
    body: 'We monitor channel and video performance to understand what is working and where improvements may be needed.',
    points: [
      'Views, impressions & CTR',
      'Average view duration & retention curves',
      'Watch time & traffic sources',
      'Audience behavior & demographics',
      'Top-performing vs underperforming topics',
      'Subscriber changes & format performance',
    ],
    note: 'The goal is not simply to report numbers. We use the data to improve future content decisions.',
  },
  {
    number: '13',
    title: 'YouTube Conversion & CTA Strategy',
    body: 'YouTube can support business outcomes beyond views and subscribers. We structure relevant calls to action around your commercial objectives.',
    points: [
      'Visit your website & landing pages',
      'Request a consultation & contact sales',
      'Explore products & online store catalog',
      'Download lead magnets & resources',
      'Book appointments & watch related series',
    ],
    note: 'The CTA should fit the viewer’s stage and the purpose of the video rather than interrupting the content unnecessarily.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro Header */}
        <div className="mb-14 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Service Scope · 13 Core Pillars
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our YouTube Management{' '}
            <span className="italic text-frame-accent">Service Includes.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Our YouTube management service can cover the full content lifecycle, from channel strategy and ideation to production, optimization, publishing, and performance analysis.
          </p>
        </div>

        {/* 13 Pillar Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors duration-200 hover:border-purple-500/30 hover:bg-[#15121C]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-frame-accent">
                    Pillar {service.number}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">YouTube Channel OS</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  <AutoLinks currentPath="/services/social-media-management/youtube-management" allowed={["/services/content-creation", "/services/video-production"]}>
                    {service.body}
                  </AutoLinks>
                </p>

                {service.points && (
                  <div className="border-t border-white/[0.06] pt-3">
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {service.note && (
                <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] leading-relaxed text-zinc-400 font-normal">
                  <span className="font-mono text-[10px] uppercase text-frame-accent font-semibold block mb-0.5">
                    Strategic Focus
                  </span>
                  {service.note}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              The Objective Across Every Stage
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Useful content that is easy to discover, easy to click, and satisfying enough to keep earning views and compounding business value.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Get a Free Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
