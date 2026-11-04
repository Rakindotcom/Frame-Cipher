'use client'

import React from 'react'
import {
  Users,
  Smartphone,
  Compass,
  Layout,
  CheckCircle2,
  ShieldCheck,
  Check,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const whyChooseUs = [
  {
    num: '01',
    title: 'One In-House Team',
    desc: 'Strategy, design, development, testing, and deployment stay connected rather than being divided between unrelated contractors.',
    icon: Users,
  },
  {
    num: '02',
    title: 'Built for Android, Not Simply Ported to It',
    desc: 'We consider Android platform conventions, device diversity, supported versions, and native capabilities from the beginning.',
    icon: Smartphone,
  },
  {
    num: '03',
    title: 'Platform-Neutral Advice',
    desc: 'Although this page focuses on Android, we can also advise when cross-platform development or another technical approach makes more sense for your wider product.',
    icon: Compass,
  },
  {
    num: '04',
    title: 'Development-Aware UI/UX',
    desc: 'Our design decisions consider responsive behavior, interaction states, implementation requirements, and Android-specific conventions.',
    icon: Layout,
  },
  {
    num: '05',
    title: 'Transparent Review Process',
    desc: 'Key stages can include review and approval checkpoints so you remain involved throughout the project.',
    icon: CheckCircle2,
  },
  {
    num: '06',
    title: 'Full-Cycle Support',
    desc: 'We can support the product from discovery and architecture through development, testing, Google Play release, and post-launch improvements.',
    icon: ShieldCheck,
  },
]

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Modality 4: Asymmetrical Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column (Sticky Anchor, 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why Choose Framecipher for{' '}
              <span className="italic text-frame-accent">Android App Development.</span>
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Framecipher connects product planning, Android UI/UX, native development, backend engineering, testing, and Google Play release within one coordinated in-house workflow.
            </p>

            {/* Stat Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
              <span className="font-mono text-[11px] uppercase text-zinc-500 tracking-wider">
                Intellectual Property Guarantee
              </span>
              <p className="font-heading text-3xl font-semibold text-white">
                100% Client IP
              </p>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Complete Kotlin source code, Jetpack Compose layouts, assets, and deployment keys transferred to your repository upon milestone completion.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent">
                Consult Our Android Team
              </PosterButton>
            </div>
          </div>

          {/* Right Column (Divided Rows, 7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="py-8 transition-colors hover:bg-white/[0.015] px-2 sm:px-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm uppercase text-frame-accent mt-1">
                    {reason.num}
                  </span>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-heading text-xl font-medium tracking-tight text-white flex items-center justify-between">
                      <span>{reason.title}</span>
                      <reason.icon className="h-5 w-5 text-frame-accent shrink-0 opacity-60" />
                    </h3>
                    <p className="text-sm font-normal leading-relaxed text-zinc-400">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
