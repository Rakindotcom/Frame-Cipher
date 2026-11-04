'use client'

import React from 'react'
import {
  ShoppingCart,
  FileText,
  Briefcase,
  Zap,
  Shield,
  Repeat,
  CheckCircle2,
} from 'lucide-react'

const models = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce & D2C Brands',
    desc: 'Turn browsing traffic into verified checkouts with dynamic catalog retargeting, cart recovery incentives, and post-purchase replenishment loops.',
    highlights: [
      'Product-view and cart abandoner dynamic ads',
      'Average order value (AOV) cross-sell campaigns',
      'Automated replenishment reminders',
    ],
  },
  {
    icon: FileText,
    title: 'Lead Generation Businesses',
    desc: 'Re-engage prospects who explored service solutions or began submitting contact forms without completing their consultation request.',
    highlights: [
      'Pricing-page visitor direct follow-up sequences',
      'Form abandonment friction removal campaigns',
      'Social proof and video testimonial retargeting',
    ],
  },
  {
    icon: Briefcase,
    title: 'B2B & Enterprise Accounts',
    desc: 'Support longer sales cycles by nurturing buying committee decision-makers with case studies, whitepapers, and account-based retargeting.',
    highlights: [
      'Account-based marketing (ABM) audience alignment',
      'Executive trust credentials and security proofs',
      'Sales pipeline stage synchronized ads',
    ],
  },
  {
    icon: Zap,
    title: 'SaaS & Subscription Apps',
    desc: 'Guide free trial signups toward paid activation, convert demo visitors, and launch automated feature upgrade campaigns for current users.',
    highlights: [
      'Trial sign-up abandoner re-activation campaigns',
      'Free-to-paid tier conversion nudges',
      'New feature launch and annual upgrade offers',
    ],
  },
  {
    icon: Shield,
    title: 'High-Consideration Services',
    desc: 'Keep your brand top-of-mind over extended consideration windows for healthcare, legal, luxury, real estate, and financial solutions.',
    highlights: [
      'Extended 60–90 day recency trust building',
      'Objection-handling video sequences',
      'Direct WhatsApp and consultation booking hooks',
    ],
  },
  {
    icon: Repeat,
    title: 'Repeat-Purchase Consumables',
    desc: 'Maximize customer lifetime value (LTV) with smart replenishment windows timed to the exact cycle when a customer runs out of your product.',
    highlights: [
      'Usage-cycle synchronized repurchase ads',
      'VIP customer early access to new product lines',
      'Exclusive loyalty and bundle discounts',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Is Remarketing{' '}
            <span className="italic text-frame-accent">Services For?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Our remarketing frameworks are engineered for businesses that have already invested in driving website or app traffic and need to convert that existing momentum into revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {models.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {m.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
