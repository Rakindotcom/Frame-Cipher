'use client'

import React, { useState } from 'react'
import {
  FileText,
  Target,
  MessageSquare,
  Building2,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'
import { AutoLinks } from '../../../seo/AutoLinks'

const campaigns = [
  {
    id: 'sponsored-content',
    num: '01',
    title: 'Sponsored Content Campaigns',
    label: 'Reach Professionals in the Feed',
    icon: FileText,
    body: [
      'Sponsored Content places advertising into the LinkedIn feed and can support formats including single-image, video, carousel, document, and other eligible creative types.',
    ],
    listLabel: 'We can use Sponsored Content for:',
    bullets: [
      'B2B demand generation',
      'Industry education',
      'Product or service discovery',
      'Thought leadership',
      'Content promotion',
      'Webinar promotion',
      'Lead generation',
      'Website conversions',
      'Retargeting',
    ],
    metric: 'Feed Engagement / CTR & Conversions',
    tail: 'Cold audiences may need a problem-led or educational message. Warmer audiences may respond better to case studies, proof, demonstrations, or a direct consultation offer. The creative and objective should change with the stage of the buying journey.',
  },
  {
    id: 'lead-gen-forms',
    num: '02',
    title: 'Lead Gen Form Campaigns',
    label: 'Capture Leads Inside LinkedIn',
    icon: Target,
    body: [
      'LinkedIn Lead Gen Forms allow prospects to submit information directly within the LinkedIn experience using pre-filled professional profile data.',
    ],
    listLabel: 'We manage:',
    bullets: [
      'Lead Gen Form strategy',
      'Form field selection',
      'Qualification questions',
      'Offer and CTA alignment',
      'Confirmation experience',
      'Lead routing',
      'CRM integration where supported',
      'Lead-quality measurement',
      'Retargeting after form interaction',
    ],
    metric: 'Form Completion Rate / Cost per Qualified Lead',
    tail: 'LinkedIn recommends keeping forms focused, with three to four fields often providing a better balance between information and completion rate, while custom questions can be used when additional qualification is important. The objective is not to collect the maximum number of form submissions. It is to collect information that helps your sales team identify useful prospects.',
  },
  {
    id: 'sponsored-messaging',
    num: '03',
    title: 'Sponsored Messaging & Conversation Ads',
    label: 'Reach Professionals in Their Inbox',
    icon: MessageSquare,
    body: [
      'LinkedIn offers advertising formats that can reach professionals through its messaging environment, including Message Ads and Conversation Ads.',
    ],
    listLabel: 'These formats can support:',
    bullets: [
      'Consultation offers',
      'Event registration',
      'Content promotion',
      'Product education',
      'Lead qualification',
      'Sales conversations',
      'Follow-up campaigns',
      'Retargeting',
    ],
    metric: 'Open Rate / Message Response Velocity',
    tail: 'Conversation Ads can provide multiple calls to action and connect prospects with Lead Gen Forms, landing pages, or other relevant destinations. Messaging needs to provide a useful reason to engage. We avoid turning professional inboxes into generic promotional blasts.',
  },
  {
    id: 'abm',
    num: '04',
    title: 'Account-Based Marketing Campaigns',
    label: 'Target Defined Companies',
    icon: Building2,
    body: [
      'For businesses selling high-value products or services to a defined set of companies, LinkedIn can support account-based marketing around named target accounts.',
    ],
    listLabel: 'We can structure campaigns around:',
    bullets: [
      'Target company lists',
      'Industry',
      'Company size',
      'Job function',
      'Seniority',
      'Geography',
      'Target-account priority',
      'Existing customers',
      'Prospect accounts',
      'Multiple buying-committee roles',
    ],
    metric: 'Target Account Penetration / Committee Reach',
    tail: 'This allows campaigns to reach several stakeholders inside a target organization rather than relying on one job title. We can also coordinate account-based advertising with sales outreach and CRM feedback where the client’s sales infrastructure supports it.',
  },
  {
    id: 'retargeting',
    num: '05',
    title: 'Retargeting & Website Audiences',
    label: 'Reconnect with Engaged Professionals',
    icon: RotateCcw,
    body: [
      'B2B prospects rarely make a high-value decision after one interaction.',
    ],
    listLabel: 'Retargeting can reconnect with people who have:',
    bullets: [
      'Visited key website pages',
      'Viewed high-value content',
      'Engaged with LinkedIn campaigns',
      'Interacted with Lead Gen Forms',
      'Visited product or service pages',
      'Shown other eligible engagement signals',
    ],
    metric: 'Pipeline Progression / Opportunity Velocity',
    tail: 'The message can then progress from education to proof, consultation, demo, or another relevant conversion.',
  },
  {
    id: 'formats',
    num: '06',
    title: 'Document, Video, Carousel & Thought Leader Ads',
    label: 'Match Format to Buying Stage',
    icon: Sparkles,
    body: [
      'Different formats can support different stages of a B2B buying journey.',
    ],
    listLabel: 'We can use:',
    bullets: [
      'Document Ads for reports, guides, research, case studies, and presentations',
      'Video Ads for demonstrations and education',
      'Carousel Ads for multiple products, benefits, or use cases',
      'Thought Leader Ads for executive or expert content',
      'Single-image ads for focused offers and messages',
    ],
    metric: 'Dwell Time / Asset Consumption & Authority',
    tail: 'LinkedIn Document Ads can promote content such as ebooks, case studies, white papers, presentations, and infographics, with support for lead-generation, website-visit, website-conversion, engagement, and awareness objectives. Thought Leader Ads allow approved LinkedIn member content to be promoted through Campaign Manager, making them useful for amplifying credible founder, executive, or subject-matter content.',
  },
]

export default function Campaigns() {
  const [activeTab, setActiveTab] = useState(0)
  const current = campaigns[activeTab]
  const Icon = current.icon

  return (
    <section id="campaigns" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
            LinkedIn Ads Campaigns{' '}
            <span className="italic text-frame-accent">We Manage.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We select objectives, formats, audiences, and conversion paths based on your sales process rather than treating every LinkedIn campaign as a standard feed-ad setup.
          </p>
        </div>

        {/* Master Y-Axis Tabbed Layout: Left Sidebar + Right Display Panel */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Vertical Y-Axis Navigation Tabs (4 cols on desktop) */}
          <div className="flex flex-col space-y-2 lg:col-span-4">
            <div className="mb-2 hidden lg:flex items-center justify-between px-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              <span>Select Campaign Type</span>
              <span>06 Formats</span>
            </div>

            {campaigns.map((camp, index) => {
              const TabIcon = camp.icon
              const isActive = activeTab === index

              return (
                <button
                  key={camp.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex w-full items-center justify-between rounded-xl border p-4 text-left transition-colors duration-200 ${
                    isActive
                      ? 'border-frame-accent bg-[#18181B] text-white'
                      : 'border-white/[0.08] bg-[#121214]/70 text-zinc-400 hover:border-white/[0.16] hover:bg-[#121214] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? 'border-frame-accent bg-frame-accent/10 text-frame-accent'
                          : 'border-white/[0.08] bg-[#09090B] text-zinc-500 group-hover:text-white'
                      }`}
                    >
                      <TabIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                          {camp.num}
                        </span>
                        <span className="truncate text-xs font-mono uppercase tracking-wider text-zinc-400">
                          {camp.label}
                        </span>
                      </div>
                      <p className="truncate font-heading text-sm font-medium text-white mt-0.5">
                        {camp.title}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? 'translate-x-0 text-frame-accent'
                        : '-translate-x-1 text-zinc-600 group-hover:translate-x-0 group-hover:text-white'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Campaign Detail Panel (8 cols on desktop) */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 lg:p-10 lg:col-span-8 space-y-8">
            {/* Top Detail Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div className="space-y-1.5">
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
                  {current.title}
                </h3>
              </div>

              {/* Metric Tag */}
              <div className="rounded-lg border border-white/[0.08] bg-[#18181B] px-3.5 py-2 shrink-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Primary KPI
                </span>
                <span className="font-mono text-xs font-semibold text-frame-accent">
                  {current.metric}
                </span>
              </div>
            </div>

            {/* Campaign Narrative */}
            <div className="space-y-3 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              {current.body.map((para, pIdx) => (
                <p key={pIdx}>
                  <AutoLinks currentPath="/services/paid-advertising/linkedin-ads" allowed={["/services/website-design-development/landing-pages"]}>
                    {para}
                  </AutoLinks>
                </p>
              ))}
            </div>

            {/* Deliverables / Capabilities List */}
            <div className="space-y-4 rounded-xl border border-white/[0.06] bg-[#18181B]/70 p-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <h4 className="font-mono text-xs tracking-wider text-zinc-300">
                  {current.listLabel}
                </h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {current.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tail Context Note */}
            {current.tail && (
              <div className="border-l-2 border-frame-accent bg-frame-accent/10 p-4 rounded-r-lg">
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {current.tail}
                </p>
              </div>
            )}

            {/* Bottom CTA for Active Tab */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <span className="font-mono text-xs text-zinc-400">
                Ready to deploy {current.title.toLowerCase()}?
              </span>
              <PosterButton href="/contact" variant="accent">
                Book a Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
