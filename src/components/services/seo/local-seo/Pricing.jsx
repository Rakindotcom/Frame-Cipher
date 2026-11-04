'use client'

import React from 'react'
import { Check, Minus } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const plans = [
  {
    name: 'Starter Local',
    price: '৳15,000',
    frequency: '/month',
    bestFor: 'Small local businesses',
    recommended: 'Single-location businesses',
    locations: '1 Location',
    features: [
      'Google Business Profile Optimization',
      'Local Keyword Research',
      'Basic Competitor Analysis',
      'Core Local Website SEO',
      '1–2 Service / Location Pages/mo',
      'Citation Cleanup & Basic Building',
      'Review Acquisition Strategy',
      'Local Schema Markup',
      'Google Maps Optimization',
      'Local Search Monitoring & Monthly Report',
    ],
    popular: false,
  },
  {
    name: 'Growth Local',
    price: '৳30,000',
    frequency: '/month',
    bestFor: 'Growing businesses in competitive sectors',
    recommended: 'Competitive local markets',
    locations: '1–3 Locations',
    features: [
      'Everything in Starter Local',
      'Advanced Competitor Analysis',
      'Full Local Website Optimization',
      '2–4 Service / Location Pages/mo',
      'Full Citation Building & Cleanup',
      'Geo-Grid Rank Tracking Scans',
      'Local Authority & Link Building',
      'Biweekly Strategy Consultation',
      'Call & Direction Intent Attribution',
    ],
    popular: true,
  },
  {
    name: 'Multi-Location',
    price: '৳50,000+',
    frequency: '/month',
    bestFor: 'Multi-branch & franchise enterprises',
    recommended: 'Brands with multiple branches',
    locations: '4+ Locations',
    features: [
      'Everything in Growth Local',
      'Multi-Location Scaled Architecture',
      'Custom Dedicated Location Pages/mo',
      'Advanced Geo-Grid Coverage Mapping',
      'Centralized Franchise Profile Governance',
      'Advanced Local Authority & Digital PR',
      'Ongoing Strategy & Dedicated Lead',
      'Custom SLA & Executive Dashboard',
    ],
    popular: false,
  },
]

const comparisonRows = [
  { feature: 'Target Locations', starter: '1', growth: '1–3', multi: '4+' },
  { feature: 'Google Business Profile Optimization', starter: true, growth: true, multi: true },
  { feature: 'Local Keyword Research', starter: true, growth: true, multi: true },
  { feature: 'Competitor Analysis', starter: 'Basic', growth: 'Advanced', multi: 'Advanced' },
  { feature: 'Local Website SEO', starter: 'Core pages', growth: 'Full local optimization', multi: 'Multi-location optimization' },
  { feature: 'Service / Location Pages', starter: '1–2/month', growth: '2–4/month', multi: 'Custom' },
  { feature: 'Citation Cleanup', starter: true, growth: true, multi: true },
  { feature: 'Citation Building', starter: 'Basic', growth: true, multi: true },
  { feature: 'Review Strategy', starter: true, growth: true, multi: true },
  { feature: 'Local Schema (JSON-LD)', starter: true, growth: true, multi: true },
  { feature: 'Google Maps Optimization', starter: true, growth: true, multi: true },
  { feature: 'Geo-Grid Tracking', starter: false, growth: true, multi: true },
  { feature: 'Local Authority / Link Building', starter: 'Basic', growth: true, multi: 'Advanced' },
  { feature: 'Local Search Monitoring', starter: true, growth: true, multi: true },
  { feature: 'Monthly Reporting', starter: true, growth: true, multi: true },
  { feature: 'Strategy & Consultation', starter: 'Monthly', growth: 'Biweekly', multi: 'Ongoing' },
]

export default function Pricing() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Investment Options // Transparent Plans
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Local SEO Pricing in{' '}
            <span className="italic text-frame-accent">Bangladesh</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Local SEO pricing depends on your business model, number of locations, competition density, website condition, and amount of ongoing optimization required.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'border-frame-accent bg-frame-accent/[0.08] relative'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/20'
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-3 left-6 rounded-full bg-frame-accent px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-medium text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {plan.bestFor}
                  </p>
                </div>

                <div className="mt-5 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.frequency && (
                      <span className="font-mono text-xs text-zinc-400">
                        {plan.frequency}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-mono text-xs text-frame-accent">
                    Scope: {plan.locations} ({plan.recommended})
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <PosterButton
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Choose {plan.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-white/[0.08]">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Side-By-Side Comparison
            </span>
            <h3 className="mt-1 font-heading text-xl sm:text-2xl font-medium text-white">
              Deliverables Matrix
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] font-mono text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="py-4 px-6 font-semibold">Service Deliverable</th>
                  <th className="py-4 px-6 font-semibold">Starter Local</th>
                  <th className="py-4 px-6 font-semibold text-frame-accent">Growth Local</th>
                  <th className="py-4 px-6 font-semibold">Multi-Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-3.5 px-6">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="h-4 w-4 text-emerald-400" /> : <Minus className="h-4 w-4 text-zinc-600" />
                      ) : (
                        <span className="text-zinc-300 font-mono text-xs">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-6 bg-frame-accent/[0.02]">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? <Check className="h-4 w-4 text-frame-accent" /> : <Minus className="h-4 w-4 text-zinc-600" />
                      ) : (
                        <span className="text-frame-accent font-semibold font-mono text-xs">{row.growth}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-6">
                      {typeof row.multi === 'boolean' ? (
                        row.multi ? <Check className="h-4 w-4 text-emerald-400" /> : <Minus className="h-4 w-4 text-zinc-600" />
                      ) : (
                        <span className="text-zinc-300 font-mono text-xs">{row.multi}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-white/[0.01] border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-zinc-400">
              Request a consultation and we can assess your locations, competition, website, and current local visibility before recommending a suitable scope.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0">
              Request Custom Assessment &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
