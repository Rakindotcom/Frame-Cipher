'use client'

import React from 'react'
import { Check, ShieldCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Paid Media Strategy',
    summary: 'We build a paid media strategy around your business model, customers, sales cycle, offer, market, and budget.',
    body: [
      'The strategy determines which platforms deserve investment, which audiences to prioritize, what funnel stages need support, and how the budget should be distributed.',
      'For some businesses, that may mean capturing existing search demand. For others, it may require social discovery, lead generation, remarketing, marketplace advertising, or a combination of channels.',
    ],
    note: 'We do not recommend every platform simply because it is available.',
  },
  {
    title: 'Audience & Buyer Research',
    summary: 'The right audience is more important than simply reaching a large audience.',
    body: [
      'We examine who is most likely to buy, what they are searching for or responding to, what problems they are trying to solve, what objections may prevent conversion, and where they are in the buying journey.',
    ],
    bullets: [
      'Search intent and keyword behavior',
      'Customer segments',
      'Buyer roles and decision-makers',
      'Geographic markets',
      'Existing website audiences',
      'Remarketing groups',
      'Product or service interests',
      'Funnel stage',
      'Lead and customer quality',
    ],
    note: 'This creates targeting decisions based on customer behavior rather than assumptions.',
  },
  {
    title: 'Campaign & Account Management',
    summary: 'Campaign structure affects how clearly your budget, targeting, creative, and performance can be evaluated.',
    body: [
      'We organize accounts around meaningful business objectives and measurable campaign groups, with the right settings, targeting, budgets, bidding approach, audiences, exclusions, and conversion actions for each campaign.',
    ],
    bullets: [
      'Account and campaign structure',
      'Keyword and audience targeting',
      'Budget allocation',
      'Bid and bidding-strategy management',
      'Ad group and asset organization',
      'Negative targeting and exclusions',
      'Product feed or catalog coordination where applicable',
      'Campaign testing',
      'Ongoing optimization',
    ],
    note: 'The objective is to make account performance easier to understand and easier to improve.',
  },
  {
    title: 'Ad Creative & Testing',
    summary: 'A strong campaign can still struggle when the creative does not communicate the right message.',
    body: [
      'We develop and coordinate ad concepts around the audience, offer, funnel stage, and platform context.',
    ],
    bullets: [
      'Headlines and primary copy',
      'Offers and calls to action',
      'Static creative',
      'Short-form video',
      'Product-focused creative',
      'Customer pain points',
      'Benefits and differentiators',
      'Social proof',
      'Different creative angles',
      'Audience-to-message matching',
    ],
    note: 'Creative performance is reviewed as part of the campaign system rather than treated as a separate design task.',
  },
  {
    title: 'Conversion Tracking & Attribution',
    summary: 'You cannot optimize what you cannot measure reliably.',
    body: [
      'We establish the conversion events needed to understand what paid traffic actually produces, subject to the available website, analytics, CRM, and platform setup.',
    ],
    bullets: [
      'Website leads',
      'Form submissions',
      'Calls',
      'Purchases',
      'Add-to-cart actions',
      'Checkout events',
      'Sign-ups',
      'Bookings',
      'Key engagement events',
      'Platform and analytics reporting',
      'Offline or CRM-based conversion feedback where supported',
    ],
    note: 'Where included in scope, tracking setup is reviewed before launch so campaign optimization is based on conversion data instead of clicks alone.',
  },
  {
    title: 'Landing Page & Conversion Optimization',
    summary: 'The ad is only one part of the conversion path.',
    body: [
      'A relevant click can still fail because of a slow page, weak offer, poor message alignment, confusing navigation, weak trust signals, or unnecessary friction during the conversion process.',
      'We review the relationship between: Ad → Landing Page → Offer → Form or Checkout → Conversion.',
    ],
    bullets: [
      'Ad-to-page message alignment',
      'Landing page structure',
      'Offer presentation',
      'Call-to-action placement',
      'Lead form friction',
      'Mobile experience',
      'Ecommerce conversion flow',
      'Trust and credibility elements',
      'Page speed and technical barriers',
    ],
    note: 'When a campaign requires development or landing-page changes, our in-house design and development capabilities can support the post-click experience as well.',
  },
  {
    title: 'Remarketing & Retargeting',
    summary: 'Not every visitor is ready to convert on the first visit.',
    body: [
      'Remarketing helps reconnect with people who have already interacted with your website, products, ads, or other relevant touchpoints. We can build remarketing strategies around different stages of intent.',
    ],
    bullets: [
      'Website visitors',
      'Product viewers',
      'Cart or checkout visitors',
      'Previous leads',
      'Previous customers',
      'Engaged social audiences',
      'High-intent site visitors',
    ],
    note: 'The message should change according to what the user already knows. Someone who only viewed a page may need a different message from someone who added a product to their cart.',
  },
  {
    title: 'Performance Reporting & Optimization',
    summary: 'Reporting should lead to decisions, not simply display numbers.',
    body: [
      'We monitor the metrics that matter for the campaign objective and use performance data to determine what should be changed next.',
    ],
    bullets: [
      'Spend',
      'Impressions',
      'Clicks',
      'CTR',
      'CPC',
      'Leads',
      'Cost per lead',
      'Purchases',
      'Conversion rate',
      'Cost per acquisition',
      'Revenue',
      'Return on ad spend',
      'Campaign and audience performance',
    ],
    note: 'The goal is to explain what happened, why it happened, and what should happen next.',
  },
]

const researchAreas = [
  {
    title: 'Ad → Landing Page Alignment',
    body: 'The message that earns the click should be the message the page continues. We review whether the landing page delivers the promise the ad made and gives the visitor a clear next step.',
    tail: 'This is where a large share of paid campaign spend is wasted. The click is earned and then lost in the post-click experience.',
  },
  {
    title: 'Offer, Friction & Trust Review',
    body: 'A relevant click can still fail because of a weak offer, too much form friction, unclear pricing, missing trust signals, or a conversion path that does not match the customer’s readiness.',
    tail: 'We identify the specific barriers between the click and the action your campaign was built to produce.',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-20 border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Paid Advertising{' '}
            <span className="italic text-frame-accent">Services Include.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Paid advertising involves much more than creating ads and pressing launch. We manage the strategy, campaign structure, creative coordination, tracking, landing-page alignment, optimization, and reporting required to turn media spend into measurable business results.
          </p>
        </div>

        {/* 8-Part Blueprint Matrix (Modality 3) */}
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:bg-[#18181B]"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-zinc-200">
                  {item.summary}
                </p>

                <div className="space-y-2 text-sm leading-relaxed text-zinc-400">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-4 grid gap-2 pt-2 text-xs text-zinc-300 sm:grid-cols-1">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.note && (
                <div className="mt-6 rounded-lg border-l-2 border-frame-accent bg-black/40 p-3.5 font-mono text-xs text-zinc-400">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The Post-Click Experience Subsection */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="mb-10 max-w-3xl space-y-3">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
              Where Clicks Become <span className="italic text-frame-accent">Conversions.</span>
            </h3>
            <p className="text-base text-zinc-300">
              Paid advertising does not end when someone clicks. The quality of the landing page, offer, and conversion path determines whether the click produces business value.
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] lg:grid-cols-2">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-[#121214] p-6 sm:p-8 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                    Focus 0{index + 1}
                  </span>
                  <h4 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {area.title}
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {area.body}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono italic pt-2">
                    {area.tail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
