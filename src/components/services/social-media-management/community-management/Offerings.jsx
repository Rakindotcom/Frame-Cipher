import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const offerings = [
  {
    number: '01',
    tag: 'Inbox & Comments',
    title: 'Comment & Message Management',
    description: 'We monitor and respond to customer interactions across the social platforms included in your scope.',
    listTitle: 'What We Do',
    items: [
      'Comment monitoring and response',
      'Direct message management',
      'Customer inquiry response',
      'Frequently asked question handling',
      'Response tone and brand voice consistency',
      'Response status tracking',
      'Identification of conversations requiring escalation',
      'Platform-specific response management',
    ],
    note: 'We can follow approved response guidelines while adapting each reply to the actual question or situation.',
    cta: 'Discuss Comment & DM Management',
  },
  {
    number: '02',
    tag: 'Reputation & Reviews',
    title: 'Review Monitoring & Response',
    description: 'Public reviews can influence how prospective customers perceive your business. We help monitor relevant review channels and respond professionally to customer feedback.',
    listTitle: 'What We Do',
    items: [
      'Google Business Profile review monitoring',
      'Relevant social platform review monitoring',
      'Positive review responses',
      'Professional responses to negative feedback',
      'Review escalation for serious complaints',
      'Identification of recurring customer concerns',
      'Review response reporting',
    ],
    note: "Legitimate negative feedback should not simply be removed because it is unfavorable. Where a review violates the applicable platform's policies, we can help identify and flag it through the appropriate process.",
    cta: 'Discuss Review Management',
  },
  {
    number: '03',
    tag: 'Tiered Workflows',
    title: 'Customer Service Escalation',
    description: 'Community managers should know when they can answer something themselves and when the issue belongs with your internal team. We create an escalation process for situations that require additional authority, information, or access.',
    listTitle: 'Examples of Escalations',
    items: [
      'Order or delivery problems',
      'Refund or payment issues',
      'Account-specific problems',
      'Technical issues',
      'Complaints requiring investigation',
      'Sensitive customer situations',
      'Legal or compliance-related concerns',
      'High-risk reputation issues',
    ],
    note: 'Instead of guessing, we route the issue to the appropriate person. Where your team provides the resolution, we can also track the escalation so important issues do not disappear after handoff.',
    cta: 'Setup Escalation Routing',
  },
  {
    number: '04',
    tag: 'Community Trust',
    title: 'Moderation & Brand Safety',
    description: 'A healthy community needs clear moderation standards. We help keep your comment and community spaces useful without treating legitimate criticism as something that should automatically be removed.',
    listTitle: 'What We Do',
    items: [
      'Spam and bot-comment monitoring',
      'Inappropriate content moderation',
      'Repeated promotional comment management',
      'Suspicious or abusive interaction monitoring',
      'Community guideline enforcement',
      'Blocked-word and moderation-rule coordination where supported',
      'Escalation of serious or threatening situations',
    ],
    note: 'Moderation standards are based on your brand guidelines and the rules of each platform.',
    cta: 'Configure Moderation Rules',
  },
  {
    number: '05',
    tag: 'Intelligence & Radar',
    title: 'Social Listening & Sentiment Monitoring',
    description: 'Not every important conversation happens directly on your page. We monitor relevant community activity within the agreed scope to identify recurring themes, customer concerns, questions, and changes in audience sentiment.',
    listTitle: 'What We Look For',
    items: [
      'Frequently asked customer questions',
      'Repeated complaints',
      'Product or service concerns',
      'Positive customer feedback',
      'Emerging conversation themes',
      'Brand mentions where monitoring access is available',
      'Potential reputation issues',
      'Content topics suggested by audience feedback',
    ],
    note: 'These insights can feed back into your content strategy, customer experience, and marketing decisions.',
    cta: 'Explore Social Listening',
  },
  {
    number: '06',
    tag: 'Audience Cultivation',
    title: 'Proactive Community Engagement',
    description: 'Community management should not always wait for someone to comment first. Where included in your scope, we can participate in relevant conversations and encourage meaningful interaction around your brand.',
    listTitle: 'This Can Include',
    items: [
      'Responding to audience questions',
      'Starting relevant conversations',
      'Engaging with appropriate customer comments',
      'Supporting campaign discussions',
      'Encouraging useful audience participation',
      'Highlighting relevant community contributions',
    ],
    note: 'The objective is meaningful interaction, not artificial engagement.',
    cta: 'Activate Proactive Outreach',
  },
  {
    number: '07',
    tag: 'Advocacy & Reach',
    title: 'User-Generated Content & Community Advocacy',
    description: 'Your customers can become an important source of authentic brand content. We can help identify relevant customer contributions and coordinate appropriate engagement around them.',
    listTitle: 'What We Can Support',
    items: [
      'Identifying useful customer-generated content',
      'Encouraging customers to share experiences',
      'Coordinating approved repost opportunities',
      'Recognizing highly engaged customers',
      'Identifying potential brand advocates',
      'Supporting community-driven campaigns',
    ],
    note: 'Any reposting, usage rights, permissions, or incentives should follow your approval process and applicable platform rules.',
    cta: 'Coordinate UGC Campaigns',
  },
  {
    number: '08',
    tag: 'Accountability & Data',
    title: 'Community Reporting & Insights',
    description: 'Community activity should produce more than a list of replies. Our reporting can help you understand what your audience is asking, what issues are recurring, and how consistently your community is being managed.',
    listTitle: 'Reporting Can Include',
    items: [
      'Response volume and response time',
      'Comment and message trends',
      'Review activity tracking',
      'Common customer questions analysis',
      'Escalated issues breakdown',
      'Sentiment or feedback themes',
      'Community engagement patterns',
      'Notable customer feedback',
      'Recommendations for future content or response workflows',
    ],
    note: 'Where website, lead, or conversion tracking is available, relevant downstream actions can also be reviewed.',
    cta: 'Review Sample Reports',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              What our community management service{' '}
              <span className="italic text-frame-accent">includes.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Our community management service combines reactive response, proactive engagement, moderation, monitoring, and reporting into one coordinated system.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x4 Technical Continuum) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-2">
          {offerings.map((offering) => (
            <article
              key={offering.number}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {offering.tag}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    {offering.number}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {offering.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {offering.description}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                    {offering.listTitle}
                  </span>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {offering.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {offering.note && (
                  <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#18181B] p-4 text-xs font-normal leading-relaxed text-zinc-300">
                    {offering.note}
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                >
                  <span>{offering.cta || 'Inquire About This Service'}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
