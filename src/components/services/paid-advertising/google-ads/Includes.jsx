'use client'

import React from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'
import Link from 'next/link'

const services = [
  {
    title: 'Account Audit & Campaign Strategy',
    badge: 'Foundation',
    body: [
      'We begin by understanding the account before making changes.',
      'For an existing account, we review the campaign and account structure, conversion goals, tracking configuration, keyword targeting, search terms, bidding strategies, budget allocation, ad quality and relevance, landing-page alignment, Shopping and Merchant Center setup where relevant, and existing performance trends. For a new account, we build the strategy around your offer, audience, market, buying journey, and commercial goals.',
    ],
    bullets: [
      'Campaign & account structure',
      'Conversion goals validation',
      'Tracking configuration review',
      'Keyword targeting analysis',
      'Search terms audit',
      'Bidding strategies evaluation',
      'Budget allocation checks',
      'Ad quality & relevance score',
      'Landing-page alignment',
      'Merchant Center feed setup',
      'Performance trend diagnostics',
    ],
    note: 'The result is a clear account structure designed to make optimization easier as data accumulates.',
  },
  {
    title: 'Keyword Research & Search Intent',
    badge: 'Precision',
    body: [
      'Keyword volume alone does not tell us whether a search is valuable. We examine the intent behind the search and separate commercially meaningful queries from traffic that is unlikely to produce a useful business outcome.',
    ],
    bullets: [
      'Commercial keyword research',
      'Buyer-intent analysis',
      'Competitor search analysis',
      'Match-type strategy',
      'Negative keyword development',
      'Search-term review cadence',
      'Location-specific queries',
      'Bangla-English language nuance',
    ],
    note: 'We continually review search terms after launch because real user queries can reveal opportunities and sources of wasted spend that initial keyword research cannot fully predict.',
  },
  {
    title: 'Campaign Structure & Targeting',
    badge: 'Architecture',
    body: [
      'Campaign structure determines how clearly we can control budgets, messaging, targeting, bidding, and performance analysis. We organize campaigns around meaningful business and search themes instead of creating unnecessary complexity.',
    ],
    bullets: [
      'Granular location targeting',
      'Multi-language parameters',
      'First-party audience signals',
      'High-intent search clusters',
      'Product & service grouping',
      'Customer tier segmentation',
      'Device bid adjustments',
      'New vs returning visitors',
      'Market-specific account silos',
    ],
    note: 'The goal is to create enough control for useful optimization without splitting campaigns into structures that are too fragmented to gather meaningful data.',
  },
  {
    title: 'Ad Copy & Asset Optimization',
    badge: 'Conversion Copy',
    body: [
      'Your ad is part of the conversion journey, not simply a vehicle for gaining the click. We create and refine ad messaging around search intent, customer problems, product or service benefits, differentiators, offers, calls to action, geographic relevance, and landing-page alignment.',
      'For Search campaigns, this includes Responsive Search Ads and relevant ad assets such as sitelinks, callouts, structured snippets, calls, and other applicable assets.',
    ],
    bullets: [
      'Search intent mapping',
      'Problem-solution headlines',
      'Verified differentiators & proofs',
      'Compelling commercial offers',
      'Action-oriented CTAs',
      'Responsive Search Ads (RSA)',
      'Sitelinks & callout assets',
      'Structured snippets & lead forms',
    ],
    note: 'We test messaging based on actual performance rather than relying on assumptions about which headline or benefit "sounds better."',
  },
  {
    title: 'Conversion Tracking & Measurement',
    badge: 'Telemetry',
    body: [
      'Good optimization depends on reliable measurement. We configure and review conversion tracking for the actions that matter to your business, including purchases, lead forms, phone calls, appointment requests, quote requests, downloads, and ecommerce events.',
      'Where appropriate, we connect Google Ads with Google Analytics, Google Tag Manager, and other measurement systems used in your setup. We can also review Enhanced Conversions where supported. For businesses with a suitable CRM or sales pipeline, we can also support qualified-lead measurement and offline conversion imports so campaigns can be evaluated beyond the initial form submission.',
    ],
    bullets: [
      'GA4 & GTM server-side tagging',
      'Enhanced Conversions (SHA256)',
      'Lead form submission tracking',
      'Call tracking & duration filters',
      'Ecommerce purchase value & ROAS',
      'Appointment & demo bookings',
      'Offline Conversion Import (OCI)',
      'CRM pipeline synchronization',
    ],
    note: 'Google describes Enhanced Conversions as a measurement feature that can improve conversion measurement accuracy and support stronger bidding by using hashed first-party customer data in a privacy-conscious way.',
  },
  {
    title: 'Bid, Budget & Performance Optimization',
    badge: 'Algorithm Management',
    body: [
      'Once campaigns are collecting reliable data, we manage the factors that influence how the budget is allocated and how campaigns respond to performance.',
    ],
    bullets: [
      'Smart Bidding strategy review',
      'Target CPA & Target ROAS pacing',
      'Cost-per-conversion control',
      'Conversion-value maximization',
      'Search-term pruning',
      'Negative keyword expansion',
      'Ad-level asset strength checks',
      'Geographic bid adjustments',
      'Audience performance analysis',
      'A/B creative testing',
      'Controlled budget scaling',
      'Waste elimination audits',
    ],
    note: 'Automated bidding can require time and sufficient data to stabilize after launch or major changes. We avoid unnecessary changes that make it harder to understand what actually influenced performance.',
  },
  {
    title: 'Landing Page & CRO Alignment',
    badge: 'Post-Click Experience',
    body: [
      'A strong ad cannot compensate for a poor post-click experience. We review whether the landing page matches the ad’s promise, makes the offer immediately clear, supports the intended conversion, loads effectively, works well on mobile, uses a relevant call to action, reduces unnecessary friction, and supports trust before the conversion.',
    ],
    bullets: [
      'Ad promise-to-page congruency',
      'Headline & value proposition clarity',
      'Sub-second page speed verification',
      'Mobile checkout & form friction audit',
      'Single focused conversion goal',
      'Social proof & trust badging',
      'Exit friction reduction',
      'Form length optimization',
    ],
    note: 'Where needed, our advertising team can collaborate with the web team on landing-page recommendations, CRO improvements, tracking requirements, and campaign-to-page alignment.',
  },
  {
    title: 'Shopping & Merchant Center Management',
    badge: 'Ecommerce Catalog',
    body: [
      'For ecommerce accounts, Google Ads performance depends heavily on the quality of the underlying product information.',
      'Google states that Merchant Center product data is used to help match products to relevant searches and support product advertising across Google’s channels. This means Shopping optimization cannot be treated as an isolated ad-setting exercise. Product data, campaign structure, product pages, and the overall buying experience need to work together.',
    ],
    bullets: [
      'Merchant Center feed configuration',
      'Product title SEO optimization',
      'Custom labels & product tiering',
      'Item disapproval resolution',
      'Inventory & price feed sync',
      'GTIN / MPN identifier audits',
      'Product margin segmentation',
      'Shopping vs PMax structure',
      'Catalog ROAS optimization',
      'Mobile product page review',
    ],
    note: 'Product data, campaign structure, product pages, and the overall buying experience need to work together for sustainable Shopping performance.',
  },
]

export default function Includes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What Our Google Ads Management{' '}
            <span className="italic text-frame-accent">Service Includes.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Google Ads management covers strategy, structure, tracking, ad messaging, landing-page alignment, and ongoing optimization. Each part is managed as one connected system.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix Grid (8 Deliverables) */}
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
                      <AutoLinks currentPath="/services/paid-advertising/google-ads" allowed={["/services/seo/keyword-research"]}>
                        {paragraph}
                      </AutoLinks>
                    </p>
                  ))}
                </div>

                {/* Bullets Subgrid */}
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

              {/* Note callout */}
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
