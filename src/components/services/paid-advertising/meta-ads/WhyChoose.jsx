'use client'

import React from 'react'
import { Layers, Sparkles, Cpu, Globe, Lock, Eye } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const advantages = [
  {
    num: '01',
    icon: Layers,
    title: 'One In-House Team',
    body: 'Meta Ads does not operate separately from creative, landing pages, analytics, and conversion systems. Framecipher brings advertising, video production, graphic design, direct-response copywriting, and landing-page engineering into one in-house team, making it easier to identify and solve problems beyond the ad account itself.',
    proof: 'Video editors, copywriters & media buyers sitting in one room.',
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'Creative + Performance Strategy',
    body: 'We do not treat media buying and creative as separate disciplines. The same campaign needs a strong offer, relevant messaging, appropriate mobile vertical formats, accurate tracking, and a clear path to conversion.',
    proof: 'Direct response video scripts & carousels engineered specifically to lower CAC.',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Data Before Scaling',
    body: 'We want campaigns to produce usable information before scaling spend aggressively. Conversion signals, creative performance, audience behavior, and business margins all contribute to the next budget decision.',
    proof: 'Server-side CAPI verified data prior to Advantage+ automated budget scaling.',
  },
  {
    num: '04',
    icon: Globe,
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Bangladesh and works with businesses targeting both local and international markets. That means campaign planning can account for differences in market size, competition, language, buying behavior, creative style, and customer journey.',
    proof: 'Proven track records in Dhaka, USA, UK, Australia, Canada, and UAE.',
  },
  {
    num: '05',
    icon: Lock,
    title: 'Transparent Account Ownership',
    body: 'Your Meta Business account and advertising assets remain under your control. You retain full administrative access to campaign data, spend information, audiences, creative assets, and account history throughout the engagement.',
    proof: 'Zero black-box agency accounts. You hold 100% legal ownership forever.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Modality 4 Asymmetrical Editorial Split (5 cols sticky + 7 cols feed) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Sticky Anchor (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Why Businesses Choose{' '}
              <span className="italic text-frame-accent">Framecipher.</span>
            </h2>

            <p className="text-base font-normal leading-relaxed text-zinc-300">
              The way a Meta campaign is managed matters as much as the ad spend. We operate with strict creative accountability, technical server-side attribution, and total transparency.
            </p>

            {/* Permanent Account Ownership Callout Box */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-frame-accent">
                <Eye className="h-4 w-4 text-frame-accent" />
                <span>100% Meta Asset Ownership</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Your Meta Business Manager, Pixels, custom audiences, catalog feeds, and billing stay registered to your company. You never lose historical data or pixel learning if you ever choose to bring ads in-house.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent">
                Book a Strategy Walkthrough &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right Column: Scrolling Standards Feed (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {advantages.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 space-y-4 transition-colors duration-200 hover:border-white/[0.14]"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Standard {item.num}
                    </span>
                    <Icon className="h-4 w-4 text-frame-accent" />
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                    {item.body}
                  </p>

                  <div className="pt-2">
                    <div className="rounded-lg border border-white/[0.04] bg-[#09090B] p-3 text-xs font-mono text-zinc-400">
                      <span className="text-frame-accent font-semibold">Verification: </span>
                      {item.proof}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
