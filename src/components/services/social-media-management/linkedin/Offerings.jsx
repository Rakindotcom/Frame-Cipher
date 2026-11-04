'use client'

import React from 'react'
import { Check, ArrowRight, ShieldCheck, FileText, Layers, Sparkles, MessageSquare, BarChart3, Users, Send } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const offerings = [
  {
    num: '01',
    title: 'LinkedIn Strategy & Audience Research',
    description:
      'Effective LinkedIn management starts with understanding your business, market, audience, and commercial goals. We research the people and organizations you want to reach and identify the topics, questions, expertise, and content angles that matter to them.',
    bullets: [
      'Business and LinkedIn presence discovery',
      'Ideal customer profile (ICP) research',
      'Target audience & decision-maker research',
      'Industry and competitive market research',
      'Competitor content & positioning analysis',
      'Audience pain-point & question research',
      'Content gap analysis & differentiation',
      'Strategic content pillar development',
      'Topic development & format selection',
      'Brand & executive positioning alignment',
      'Market-specific B2B content planning',
    ],
    note: 'The result is a structured LinkedIn strategy built around your business goals and audience rather than a generic posting calendar.',
  },
  {
    num: '02',
    title: 'Company Page Management',
    description:
      'Your LinkedIn Company Page provides an official professional presence for your organization. We can manage the page as a business communication, credibility, and content hub.',
    bullets: [
      'Company Page strategic architecture',
      'Page optimization & About section improvement',
      'Company description & positioning refinement',
      'Industry, product & service positioning',
      'Showcase Page strategy where relevant',
      'Corporate news, updates & milestones',
      'Educational content & industry insights',
      'Case-study & customer-focused proof',
      'Employer-brand & recruitment communication',
      'Event, launch & announcement publishing',
      'Active comment monitoring & page engagement',
    ],
    note: 'We avoid turning your page into a stream of product announcements. The goal is useful, credible content that gives people a reason to understand and follow your business.',
  },
  {
    num: '03',
    title: 'Executive & Founder LinkedIn Management',
    description:
      'Executive profiles can provide a more personal channel for expertise, professional perspective, and relationship building. Framecipher can support founders, CEOs, directors, consultants, subject-matter experts, and other executives with structured LinkedIn management.',
    bullets: [
      'Executive profile review & positioning',
      'Authentic personal voice development',
      'Thought leadership content pillar planning',
      'Ghostwritten post drafting & editing',
      'Founder-led storytelling & industry commentary',
      'Case-study & expertise-based narratives',
      'Professional lessons & strategic frameworks',
      'Structured content review & approval workflow',
      'Publishing support & scheduling cadence',
      'Comment & engagement guidance',
      'Executive profile performance analysis',
    ],
    note: 'For ghostwritten content, we work from the executive’s actual experience, opinions, expertise, and communication style. The objective is to turn genuine expertise into useful content while keeping the executive’s voice central.',
  },
  {
    num: '04',
    title: 'LinkedIn Profile & Page SEO',
    description:
      'Your LinkedIn profile and company page should make it easy for people to understand who you are, what you do, and who you serve. We optimize relevant profile and page elements for clarity, professional positioning, and discoverability.',
    bullets: [
      'Keyword-optimized profile headlines',
      'High-converting About section narratives',
      'Company description & business details',
      'Services & product positioning modules',
      'Experience section structuring',
      'Featured content & document curation',
      'Showcase Pages architecture where relevant',
      'Clear profile-to-inquiry calls to action',
      'Website links & conversion pathways',
      'Visual branding & banner alignment',
      'Search-friendly content-topic structuring',
    ],
    note: 'LinkedIn search and discovery depend on context, relevance, profile information, content, and relationships. We focus on meaningful professional optimization rather than artificial keyword stuffing.',
  },
  {
    num: '05',
    title: 'Thought Leadership Content Strategy',
    description:
      'Strong LinkedIn thought leadership starts with genuine expertise. We identify the subjects where your executives and business have something useful to contribute and turn those insights into a structured content system.',
    bullets: [
      'Industry insights & market commentary',
      'Expert opinions on evolving trends',
      'Original strategic perspectives',
      'Founder stories & pivotal business lessons',
      'In-depth case-study breakdowns',
      'Customer problem solving frameworks',
      'Data & scholarly research commentary',
      'Debunking common industry misconceptions',
      'Behind-the-scenes engineering & operations',
      'Actionable decision-making frameworks',
    ],
    note: 'We avoid producing generic motivational content simply because it is common on LinkedIn. Your content should give the audience a reason to remember the professional or business behind it.',
  },
  {
    num: '06',
    title: 'LinkedIn Posts, Carousels & Documents',
    description:
      'Different LinkedIn formats can support different communication goals. We create and manage the formats that fit the objective rather than forcing every topic into the same type of post.',
    bullets: [
      'Founder-led story & perspective posts',
      'Text-based executive thought leadership',
      'Educational carousels & slide decks',
      'Multi-page PDF document posts',
      'High-authority data visualizations & charts',
      'Actionable checklists & process diagrams',
      'Customer-focused case study posts',
      'Recruitment & team milestone spotlights',
      'Event & announcement communications',
    ],
    carousel: [
      'Step-by-step implementation guides',
      'Industry trend & data breakdowns',
      'Strategic business frameworks',
      'Operational checklists & playbooks',
      'Platform & tool comparisons',
      'Client case study breakdowns',
      'Executive research summaries',
    ],
    note: 'The format follows the communication objective rather than forcing every topic into the same type of post.',
  },
  {
    num: '07',
    title: 'Employee Advocacy & Internal Amplification',
    description:
      'Your employees can help extend your organization’s professional presence when participation is voluntary, relevant, and properly supported. We can help businesses structure employee advocacy around the right foundations.',
    bullets: [
      'Employee advocacy strategy & planning',
      'Internal content distribution workflows',
      'Ready-to-share social copy & assets',
      'Clear employee participation guidelines',
      'Executive amplification coordination',
      'Employee-generated content ideation',
      'Safe, authentic engagement guidance',
      'Company announcement amplification',
      'Internal advocacy performance tracking',
    ],
    note: 'We do not treat employees as automated distribution channels. The goal is to make participation simple while allowing employees to communicate naturally and add their own professional perspective where appropriate.',
  },
  {
    num: '08',
    title: 'Community Engagement & Networking',
    description:
      'LinkedIn management should not stop when a post is published. We can support ongoing engagement around your content and relevant industry conversations.',
    bullets: [
      'Daily comment monitoring & moderation',
      'Professional, brand-aligned comment replies',
      'Company Page community engagement',
      'Executive strategic commenting guidance',
      'Participation in trending industry discussions',
      'Professional relationship nurture',
      'High-intent B2B inquiry identification',
      'Prompt lead escalation to internal sales teams',
      'Safe community engagement protocols',
    ],
    note: 'We do not rely on spammy automation or indiscriminate connection activity. Sensitive, sales-critical, or relationship-specific conversations are promptly escalated to your designated team members.',
  },
  {
    num: '09',
    title: 'LinkedIn Events, Newsletters & Additional Features',
    description:
      'LinkedIn provides additional publishing and community features that may be useful depending on your business and account eligibility. Where relevant and available, we can support them as part of the broader strategy.',
    bullets: [
      'LinkedIn Audio & Video Events strategy',
      'Event pre-promotion & registration content',
      'Post-event takeaways & highlight posts',
      'Branded LinkedIn Newsletter publication',
      'Newsletter editorial calendar & copywriting',
      'Showcase Pages for distinct product lines',
      'Product-focused content integration',
      'Employer-brand & recruitment modules',
      'Live stream coordination where eligible',
    ],
    note: 'We assess whether a feature supports your actual business objective before adding it to the strategy. Using more LinkedIn features does not automatically create a better LinkedIn presence.',
  },
  {
    num: '10',
    title: 'Performance Tracking & Reporting',
    description:
      'LinkedIn management should be measured against meaningful objectives rather than activity alone. We monitor relevant metrics and, where reliable tracking exists, align them with agreed business indicators.',
    metrics: [
      'Impressions & Views',
      'Reach & Audience Demographics',
      'Engagement & Reaction Rate',
      'Meaningful Comment Quality',
      'Shares & Document Downloads',
      'High-Intent Saves & Bookmarks',
      'Follower Growth by Seniority',
      'Company Page & Profile Visits',
      'Inbound Direct Message Volume',
      'Website Referral Traffic',
    ],
    business: [
      'Qualified B2B commercial inquiries',
      'Direct sales contact requests',
      'Content-assisted conversions',
      'Pipeline influence tracking',
      'Senior decision-maker reach',
      'Employer brand talent inquiries',
    ],
    note: 'We compare content performance by topic, format, audience response, and business objective to determine what should be repeated, improved, reduced, or tested.',
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
              Core Capabilities · 10 Pillars
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our LinkedIn Management{' '}
            <span className="italic text-frame-accent">Service Includes.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Our LinkedIn Management Service covers the strategic, creative, operational, and analytical work required to build and maintain a professional LinkedIn presence.
          </p>
        </div>

        {/* 10 Offerings Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {offerings.map((item) => (
            <article
              key={item.num}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    Capability {item.num} · </span>
                  <span className="font-mono text-xs text-zinc-500">
                    Pillar {item.num} of 10
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.description}
                </p>

                {item.bullets && (
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 mb-2.5">
                      Deliverables &amp; Focus Areas:
                    </p>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-zinc-400">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.carousel && (
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-frame-accent mb-2.5">
                      Carousel &amp; Document Structures:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.carousel.map((cItem, cIdx) => (
                        <span
                          key={cIdx}
                          className="rounded-md border border-white/[0.08] bg-[#18181B] px-2.5 py-1 font-mono text-[10px] text-zinc-300"
                        >
                          {cItem}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.metrics && (
                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-frame-accent mb-2.5">
                      Monitored Growth Metrics:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="rounded-md border border-white/[0.08] bg-[#18181B] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.business && (
                  <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-purple-300 mb-2">
                      Commercial B2B Impact Indicators:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-purple-200/90">
                      {item.business.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-frame-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {item.note && (
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B] p-3 text-[11px] text-zinc-400 leading-relaxed">
                  <span className="font-semibold text-zinc-300">Strategic Principle: </span>
                  {item.note}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <div className="space-y-1">
            <h4 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Ready to Formulate Your B2B LinkedIn Strategy?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Review your company page and leadership profiles with our B2B social strategists.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <PosterButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              Request Your Custom LinkedIn Management Quote
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
