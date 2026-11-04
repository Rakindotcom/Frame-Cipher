'use client'

import React, { useState } from 'react'
import {
  Compass,
  Layout,
  Filter,
  Sparkles,
  Database,
  TrendingUp,
  Sliders,
  BarChart3,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'strategy',
    icon: Compass,
    name: 'Platform & Campaign Strategy',
    subtitle: 'Buyer Intent & Channel Architecture',
    desc: 'We start with your buyer personas, deal size, sales cycle, and margins before selecting channels. We align Google, Meta, and LinkedIn into a coherent acquisition funnel rather than running disjointed campaigns.',
    deliverables: [
      'Multi-channel allocation based on commercial buyer intent',
      'Target account & firmographic criteria definition',
      'Commercial keyword research and search query isolation',
      'Geographic targeting and local exclusion parameters',
      'Competitor ad positioning and offer gap analysis',
      'Budget pacing and initial customer acquisition cost (CAC) modeling',
      'End-to-end multi-touch measurement blueprint',
    ],
    technicalNote:
      'We never force a single platform default. Channel selection is guided by where your buyers actively search, compare, and make financial decisions.',
  },
  {
    id: 'destination',
    icon: Layout,
    name: 'Lead Destination & Form Strategy',
    subtitle: 'Friction-Calibrated Conversion Paths',
    desc: 'Choosing the right capture point determines both submission volume and lead readiness. We deploy website landing pages, native in-app forms, click-to-WhatsApp funnels, and calendar booking flows.',
    deliverables: [
      'Native in-app Lead Gen Form setup (LinkedIn & Meta)',
      'High-converting mobile landing page UX alignment',
      'Direct Click-to-WhatsApp and Messenger commerce flows',
      'Direct calendar booking funnels (Calendly, HubSpot Meetings)',
      'Call-only ad campaigns for immediate phone inquiries',
      'Form placement and responsive touchpoint testing',
      'Post-submission thank-you page next-step instructions',
    ],
    technicalNote:
      'Native in-app forms reduce friction for mobile discovery, while dedicated landing pages are superior when complex technical requirements must be collected.',
  },
  {
    id: 'form-qualification',
    icon: Filter,
    name: 'Form & Qualification Design',
    subtitle: 'Filtering Noise Before It Hits Sales',
    desc: 'Balancing form completion rates with lead qualification. We engineer strategic drop-downs, budget selectors, and custom questions that filter out low-intent contacts without tanking conversion rates.',
    deliverables: [
      'Custom qualification question design (budget, timeline, role)',
      'Required vs. optional field strategic balance',
      'Pre-filled profile field configuration on LinkedIn and Meta',
      'Progressive qualification logic across follow-up touchpoints',
      'Spam suppression, honeypot fields, and phone number validation',
      'Clear expectation-setting copy regarding follow-up timing',
      'A/B testing of form question order and micro-copy',
    ],
    technicalNote:
      'Adding just 1 to 2 targeted qualification questions can eliminate up to 70% of low-quality spam submissions while preserving high-intent buyers.',
  },
  {
    id: 'offer-creative',
    icon: Sparkles,
    name: 'Offer & Creative Strategy',
    subtitle: 'High-Utility Value Propositions',
    desc: 'The offer dictates who responds. We design and test consultation offers, quote calculators, live product demos, and executive audits that attract qualified decision-makers rather than freebie seekers.',
    deliverables: [
      'High-intent commercial offer ideation (demos, audits, quotes)',
      'Direct-response ad copywriting focused on tangible client ROI',
      'Scroll-stopping visual assets (static, carousel, and video)',
      'Social proof, client testimonials, and industry badges integration',
      'Value proposition testing contrasting your service against competitors',
      'Hook testing addressing specific executive pain points',
      'Continuous creative refresh cycles to prevent ad fatigue',
    ],
    technicalNote:
      'We test offers for downstream sales readiness, not simply raw submission volume. An offer that generates 50 qualified leads beats one that generates 300 tire-kickers.',
  },
  {
    id: 'crm-routing',
    icon: Database,
    name: 'CRM Integration & Instant Routing',
    subtitle: 'Sub-Minute Lead Delivery to Sales Reps',
    desc: 'A lead loses 80% of its value if left sitting in an inbox. We configure real-time webhooks, direct API syncs, and automated routing into your CRM within seconds of form submission.',
    deliverables: [
      'Direct CRM integration (HubSpot, Salesforce, Zoho, LeadSquared)',
      'Real-time automated lead routing and sales rep assignment',
      'Instant SMS, Slack, and email notifications for sales teams',
      'Full UTM parameter and ad creative source tracking mapping',
      'Lead status lifecycle mapping (New → Contacted → MQL → SQL)',
      'De-duplication rules preventing overwritten contact records',
      'Custom field mapping ensuring form answers sync cleanly',
    ],
    technicalNote:
      'Connecting ad forms directly to your sales reps via instant Slack or SMS alerts ensures follow-up occurs within the vital 5-minute decision window.',
  },
  {
    id: 'offline-feedback',
    icon: TrendingUp,
    name: 'Offline Conversion & CRM Feedback',
    subtitle: 'Feeding Sales Reality Back to Ad Algorithms',
    desc: 'Connecting downstream sales milestones back into Google Ads (Enhanced Conversions for Leads / Data Manager) and Meta CAPI so smart bidding optimizes for revenue, not just form fills.',
    deliverables: [
      'Google Enhanced Conversions for Leads implementation',
      'Google Data Manager offline conversion upload workflows',
      'Meta Offline Conversions API integration',
      'Downstream milestone tracking (MQL → SQL → Opportunity → Closed Won)',
      'Value-based bidding calibration tied to actual deal revenue',
      'Hashed first-party data matching compliance (GCLID / email)',
      'Lead-to-opportunity conversion rate cohort analysis',
    ],
    technicalNote:
      'Feeding offline sales data back to Google and Meta trains their machine learning algorithms to seek out profiles identical to your actual paying clients.',
  },
  {
    id: 'testing',
    icon: Sliders,
    name: 'Creative & Campaign Testing',
    subtitle: 'Continuous Pipeline Iteration',
    desc: 'We execute systematic testing across ad headlines, audience segments, qualification questions, landing page layouts, and lead hooks to systematically lower your Cost Per Qualified Lead (CPQL).',
    deliverables: [
      'A/B testing of ad messaging, pain points, and hooks',
      'Audience segmentation tests (firmographics vs. job titles vs. lookalikes)',
      'Lead destination tests (native forms vs. dedicated landing pages)',
      'Form field friction testing (short forms vs. qualified forms)',
      'Call-to-action (CTA) variation testing (Book Demo vs. Get Quote)',
      'Weekly winner scaling and underperforming variation pruning',
      'Transparent testing logs with statistical significance tracking',
    ],
    technicalNote:
      'We evaluate test winners based on Cost Per Qualified Opportunity and pipeline velocity rather than superficial click-through rates.',
  },
  {
    id: 'reporting',
    icon: BarChart3,
    name: 'Sales-Aligned Reporting & Analytics',
    subtitle: 'Full-Funnel Pipeline Visibility',
    desc: 'Transparent executive reporting that connects ad spend directly to Cost Per Qualified Lead (CPQL), sales pipeline generated, customer acquisition cost (CAC), and closed revenue.',
    deliverables: [
      'Cost Per Qualified Lead (CPQL) and Cost Per Opportunity tracking',
      'Lead-to-customer conversion rate comparison by channel and ad set',
      'Customer Acquisition Cost (CAC) and customer lifetime value (LTV) context',
      'Sales rep feedback integration identifying lead quality patterns',
      'Channel attribution modeling (first-touch vs. multi-touch)',
      'Bi-weekly executive pipeline review calls',
      'Actionable recommendations based on closed deal data',
    ],
    technicalNote:
      'Our reports speak the language of your executive team: pipeline value, sales velocity, and closed-won revenue rather than disconnected ad metrics.',
  },
]

export default function Includes() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const currentService = services.find((s) => s.id === activeTab) || services[0]

  return (
    <section id="services" className="scroll-mt-20 relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Lead Generation Ads{' '}
            <span className="italic text-frame-accent">Services.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Everything required to build, manage, and optimize an end-to-end lead acquisition engine that connects paid advertising to qualified sales pipeline and revenue.
          </p>
        </div>

        {/* Desktop Y-Axis Interactive Tabs Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left Vertical Tab Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between gap-3 p-4 rounded-xl border text-left transition-colors duration-200 ${
                    isActive
                      ? 'border-frame-accent bg-[#18181B] text-white'
                      : 'border-white/[0.06] bg-[#121214] text-zinc-400 hover:border-white/[0.12] hover:bg-[#151518] hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 rounded-lg flex items-center justify-center border transition-colors ${
                        isActive
                          ? 'border-frame-accent/40 bg-frame-accent/10 text-frame-accent'
                          : 'border-white/[0.08] bg-white/[0.02] text-zinc-400'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-medium leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive ? 'text-frame-accent translate-x-0.5' : 'text-zinc-600'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Active Content Panel (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg border border-frame-accent/40 bg-frame-accent/10 flex items-center justify-center text-frame-accent">
                <currentService.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-medium text-white">
                  {currentService.name}
                </h3>
              </div>
            </div>

            <p className="text-base text-zinc-300 font-normal leading-relaxed mb-8">
              {currentService.desc}
            </p>

            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">
                What We Do &amp; Deliver:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentService.deliverables.map((del) => (
                  <div key={del} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {currentService.technicalNote && (
              <div className="rounded-xl border border-frame-accent/30 bg-frame-accent/[0.04] p-4 text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent font-semibold block mb-1">
                  Strategy Rule:
                </span>
                {currentService.technicalNote}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-3">
          {services.map((item) => {
            const Icon = item.icon
            const isOpen = activeTab === item.id
            return (
              <div
                key={item.id}
                className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveTab(isOpen ? '' : item.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-frame-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-heading text-base font-medium text-white">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-zinc-400 transition-transform ${
                      isOpen ? 'rotate-90 text-frame-accent' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.06] p-5 pt-3 space-y-4">
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                    <div className="space-y-2">
                      <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                        Deliverables:
                      </p>
                      {item.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                    {item.technicalNote && (
                      <div className="rounded-lg border border-frame-accent/30 bg-frame-accent/[0.04] p-3 text-xs text-zinc-300">
                        {item.technicalNote}
                      </div>
                    )}
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
