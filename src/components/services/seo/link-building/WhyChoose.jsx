'use client'

import React from 'react'
import {
  Users,
  Sparkles,
  ShieldCheck,
  Globe,
} from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'One In-House Team',
    body: 'Strategy, outreach, content creation, SEO analysis, and reporting are handled entirely within one cohesive team. The people planning outreach understand your technical website structure, priority content assets, and wider SEO roadmap, eliminating outsourced agency disconnects.',
  },
  {
    icon: Sparkles,
    title: 'Manual, Relevance-First Outreach',
    body: 'We never judge a prospect solely by third-party DA or DR metric scores. We rigorously evaluate the real publication context, editorial standards, readership relevance, and commercial fit before investing outreach effort.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Publisher & Placement Review',
    body: 'You maintain full visibility into campaign activity: target publisher lists, outreach communication status, approved opportunities, verified live placements, exact target destination URLs, and ongoing backlink health monitoring.',
  },
  {
    icon: Globe,
    title: 'Bangladesh & International Experience',
    body: 'Based in Dhaka, we run tailored campaigns across domestic Bangladeshi publications as well as competitive international media ecosystems in the US, UK, Australia, Canada, and UAE, avoiding single-market assumptions.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              The Framecipher Standard
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Off-Page SEO</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Link building works best when relevance and editorial quality come before volume. The way a campaign is run decides whether the authority it builds lasts.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      Standard 0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
