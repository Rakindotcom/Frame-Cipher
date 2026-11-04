'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'

const services = [
  {
    title: 'Account Audit & Campaign Strategy',
    badge: 'Diagnostic & Architecture',
    body: [
      'We begin by understanding the business before changing the account.',
      'For existing campaigns, we review business and ad account structure, campaign objectives, conversion events, Pixel configuration, Conversions API setup, audience strategy, creative performance, frequency, cost per result, budget distribution, landing-page experience, and historical campaign data.',
      'For new campaigns, we define the objective, offer, customer journey, measurement framework, creative direction, and initial testing plan before launch.',
    ],
    bullets: [
      'Business & ad account structure review',
      'Pixel & Conversions API verification',
      'Historical CPA & ROAS diagnostics',
      'Creative fatigue & frequency audit',
      'Audience overlap & cannibalization check',
      'Offer & customer journey mapping',
      'Budget allocation & pacing plan',
      'Landing-page conversion flow review',
    ],
    note: 'The result is a strategy built around the business rather than a generic Meta Ads template.',
  },
  {
    title: 'Creative Strategy & Production',
    badge: 'High-Impact Creative',
    body: [
      'Creative is one of the most important inputs in Meta advertising, particularly when campaigns are reaching people who are not actively searching for the product.',
      'We develop creative around customer problems, product benefits, offers, proof, objections, demonstrations, before-and-after narratives where appropriate, product use cases, testimonials, social proof, and brand differentiation.',
    ],
    bullets: [
      'Customer problem & hook research',
      'Static direct response ad designs',
      'Multi-slide storytelling carousels',
      'Short-form vertical video & Reels',
      'UGC-style product demonstrations',
      'Social proof & testimonial integration',
      'Multiple 3-second hook testing frames',
      'Advantage+ creative asset adaptations',
    ],
    note: 'Each variation tests a meaningful hypothesis about audience, offer, message, format, or proof—never random color changes.',
  },
  {
    title: 'Audience Strategy & Advantage+ Targeting',
    badge: 'Audience Science',
    body: [
      'Meta\'s targeting system has evolved beyond simply selecting interests and demographics. We combine appropriate first-party signals and audience inputs with Meta\'s automated delivery systems.',
      'Meta\'s current Advantage+ audience system allows advertisers to provide audience information and signals while using Meta\'s delivery system to find people more likely to respond.',
    ],
    bullets: [
      'Granular location & demographic filters',
      'First-party customer list matching (CRM)',
      'High-intent website visitor audiences',
      'Video view & profile engagement pools',
      'High-value purchase Custom Audiences',
      'Value-based Lookalike Audiences',
      'Advantage+ audience signal inputs',
      'Broad targeting & algorithm training',
    ],
    note: 'The audience strategy starts with the customer and the first-party data available to teach the delivery system.',
  },
  {
    title: 'Pixel, Conversions API & Tracking',
    badge: 'Signal Resilience',
    body: [
      'Meta optimization depends on useful conversion signals. Where appropriate, we use Meta Pixel together with Conversions API to improve the quality and resilience of event data.',
      'Conversions API creates a direct connection between business data and Meta technologies to bypass browser ad-blockers and iOS privacy restrictions.',
    ],
    bullets: [
      'Meta Pixel browser event tracking',
      'Server-side Conversions API (CAPI)',
      'Event deduplication & data consistency',
      'Aggregated Event Measurement setup',
      'Purchase value & currency parameters',
      'Lead form & appointment tracking',
      'Messenger & WhatsApp conversion tags',
      'Downstream CRM sales feedback loops',
    ],
    note: 'Accurate conversion signals train Meta\'s machine learning to bid for paying customers rather than passive window-shoppers.',
  },
  {
    title: 'Campaign, Budget & Delivery Optimization',
    badge: 'Bid Management',
    body: [
      'Once campaigns are collecting reliable data, we monitor how spend is distributed and how campaigns are responding.',
      'We do not make major changes simply to keep an account "active." The objective is to identify what the data is telling us, determine whether enough evidence exists, and implement changes with a clear reason.',
    ],
    bullets: [
      'Advantage Campaign Budget (CBO) tuning',
      'Cost-per-result & Target CPA pacing',
      'Conversion-volume & ROAS analysis',
      'Campaign consolidation to unlock data',
      'Audience segmentation & pruning',
      'Placement analysis (Feed vs Reels)',
      'Scaling winning ad sets with stability',
      'Restructuring underperforming campaigns',
    ],
    note: 'Decisions are driven by statistical confidence and unit economics rather than daily emotional tweaks.',
  },
  {
    title: 'Landing Page & Funnel Alignment',
    badge: 'Post-Click CRO',
    body: [
      'The ad is only one part of the acquisition system. We review whether the post-click or post-message experience supports the same promise that the creative makes.',
    ],
    bullets: [
      'Ad promise-to-headline congruency',
      'Clear, immediate value propositions',
      'Sub-second mobile page load speed',
      'Friction-free mobile checkout flows',
      'Trust badges, reviews & social proof',
      'Lead form field reduction & testing',
      'Product-page visual demonstration',
      'Seamless WhatsApp/Messenger handoff',
    ],
    note: 'Our in-house web engineers optimize the landing page and chat flows so traffic converts into revenue.',
  },
  {
    title: 'Creative Testing & Fatigue Management',
    badge: 'Performance Longevity',
    body: [
      'Meta performance can change as audiences, competition, offers, and creative exposure change. We monitor signals such as frequency, CTR, CPA, and audience size to refresh creative before fatigue sets in.',
    ],
    bullets: [
      'Ad frequency threshold monitoring',
      'Click-through rate (CTR) fatigue tracking',
      'Cost-per-result trend surveillance',
      'Creative-level spend concentration',
      'Systematic hook variation deployment',
      'New format exploration (Reels vs Static)',
      'Comment sentiment & moderation check',
      'Multiple winning creative backups',
    ],
    note: 'Creative refresh is based on real performance data and audience exposure, keeping your account insulated from sudden CPA spikes.',
  },
  {
    title: 'Reporting & Attribution',
    badge: 'Executive Clarity',
    body: [
      'Reporting should explain what happened and what should happen next. We distinguish platform-reported performance from broader business results wherever the measurement setup allows us to do so.',
    ],
    bullets: [
      'Transparent net ad spend reporting',
      'Cost per lead & cost per acquisition',
      'Blended ROAS & verified revenue',
      'Creative-by-creative winner rankings',
      'Placement & device breakdown logs',
      'Audience signal performance comparisons',
      'Platform vs internal CRM data alignment',
      'Executive roadmap & next testing sprints',
    ],
    note: 'Actionable executive insights that connect Meta ad spend directly with bankable business progression.',
  },
]

export default function Includes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our Meta Ads Management{' '}
            <span className="italic text-frame-accent">Service Includes.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            From creative strategy and production to server-side Conversions API and Advantage+ campaign scaling, we manage every component as one unified growth system.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (8 Core Deliverables) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-9 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div className="space-y-5">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <div className="space-y-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      <AutoLinks currentPath="/services/paid-advertising/meta-ads" allowed={["/services/content-creation/video-production"]}>
                        {paragraph}
                      </AutoLinks>
                    </p>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {item.note && (
                <div className="mt-6 rounded-lg border-l-2 border-frame-accent bg-[#09090B] p-4 text-xs font-normal leading-relaxed text-zinc-400">
                  <span className="font-semibold text-zinc-300">Standard: </span>
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
