'use client'

import React from 'react'
import { Check, AlertCircle } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'Starter Store',
    price: '৳35,000',
    period: '/month',
    scope: 'Up to 100 products',
    bestFor: 'Small ecommerce stores',
    highlight: false,
    features: [
      'Ecommerce SEO audit',
      'Keyword and search intent research',
      'Product page optimization (core SKUs)',
      'Category page optimization',
      'Technical SEO audit & essential fixes',
      'Product structured data (Schema)',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Growth Store',
    price: '৳60,000',
    period: '/month',
    scope: 'Up to 500 products',
    bestFor: 'Growing ecommerce businesses',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Comprehensive store & catalog audit',
      'Full keyword & search intent mapping',
      'Priority product & collection optimization',
      'Site architecture & hierarchy review',
      'Internal linking distribution strategy',
      'Advanced Product Schema & Rich Snippets',
      'Faceted navigation & canonical controls',
      'Core Web Vitals & speed optimization',
      'Bi-weekly monitoring & monthly reporting',
    ],
  },
  {
    name: 'Large Catalog',
    price: '৳100,000',
    period: '/month',
    scope: '500+ products',
    bestFor: 'Large and complex stores',
    highlight: false,
    features: [
      'Enterprise catalog architecture systems',
      'Crawl efficiency & indexation governance',
      'Scalable category & subcategory optimization',
      'Duplicate URL & parameter management',
      'Automated product schema validation',
      'Google Merchant Center feed optimization',
      'Content-led link building & digital PR',
      'Developer coordination for code-level fixes',
      'Dedicated weekly reporting & sync',
    ],
  },
  {
    name: 'Custom Enterprise',
    price: 'Custom',
    period: '',
    scope: 'Custom scope',
    bestFor: 'Complex or enterprise ecommerce',
    highlight: false,
    features: [
      'Multi-market & international SEO (Hreflang)',
      'Multi-currency / multi-language catalog setup',
      'Custom headless / Next.js ecommerce SEO',
      'Dedicated technical SEO engineer',
      'Custom reporting dashboards & API integrations',
      'Comprehensive digital PR & authority building',
      'Direct developer implementation support',
    ],
  },
]

const includedFeatures = [
  'Ecommerce SEO audit',
  'Keyword and search intent research',
  'Product optimization',
  'Category optimization',
  'Technical SEO',
  'Site architecture recommendations',
  'Internal linking',
  'Product schema',
  'Performance monitoring',
  'Monthly reporting',
  'Ongoing SEO recommendations',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-frame-accent">
            Investment &amp; Scope // Transparent Retainers
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Ecommerce SEO Pricing{' '}
            <span className="italic text-frame-accent">in Bangladesh</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 pt-2">
            Ecommerce SEO pricing depends on catalog size, platform complexity, competition, technical requirements, and the amount of ongoing optimization required.
          </p>
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Our plans provide a starting framework. The final scope is confirmed after reviewing your store.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-colors ${
                plan.highlight
                  ? 'border-frame-accent bg-[#16131c] shadow-2xl ring-1 ring-frame-accent/40'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.16]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Plan 0{idx + 1}
                  </span>
                  {plan.badge && (
                    <span className="rounded-full bg-frame-accent/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-frame-accent border border-frame-accent/40">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-white">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="font-mono text-xs text-zinc-400">{plan.period}</span>
                  )}
                </div>

                <div className="mt-4 space-y-1 rounded-xl bg-white/[0.03] p-3 border border-white/[0.04]">
                  <div className="font-mono text-[11px] text-zinc-400">
                    Catalog: <span className="font-semibold text-white">{plan.scope}</span>
                  </div>
                  <div className="font-mono text-[11px] text-zinc-400">
                    Best for: <span className="text-emerald-400">{plan.bestFor}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={plan.highlight ? 'primary' : 'outline'}
                >
                  Select Plan &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Included in Ecommerce SEO Plans & Important Advisory Box */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-8 md:p-10">
          <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-white">
            Included in Ecommerce SEO Plans
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Depending on the selected plan and agreed scope, services can include:
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.06] pt-6">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 font-sans text-xs text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-amber-300">Large catalogs:</strong> Large catalogs may require additional technical work, content production, or development support.
              </p>
              <p>
                <strong className="text-amber-300">Important:</strong> Product count is only one pricing factor. Platform, catalog complexity, competition, technical condition, and monthly workload can also affect the final scope.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <PosterButton href="/contact">
              Request an Ecommerce SEO Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
