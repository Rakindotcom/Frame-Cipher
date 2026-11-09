'use client'

import { Check, Users, Layers, ShieldCheck } from 'lucide-react'
import { SectionIntro } from '../Kinetic'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

function OverviewBenefits({ service }) {
  if (!service.benefits || service.benefits.length === 0) return null
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
      <div className="mb-6 flex items-center gap-2.5">
        <Layers className="h-5 w-5 text-purple-400" />
        <h3 className="font-heading text-xl font-medium tracking-tight text-white md:text-2xl">
          Key Inclusions & Standards
        </h3>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {service.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3 text-sm wide:text-lg font-normal leading-relaxed text-zinc-300">
            <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OverviewAudience({ service }) {
  const list = service.targetAudience || [
    'Dhaka-based enterprises wanting brand-aligned video assets',
    'High-growth tech startups and founders building personal brands',
    'E-commerce merchants scaling Daraz, Shopify & social media orders',
    'Marketing managers needing predictable, on-schedule deliverables',
    'Content creators and podcasters who want broadcast-tier polish',
  ]
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
      <div>
        <div className="mb-3 flex items-center gap-2 text-purple-400">
          <Users className="h-5 w-5" />
          <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] md:text-sm">Who This Service Is For</span>
        </div>
        <h3 className="font-heading text-xl font-medium tracking-tight text-white md:text-2xl">Target Project Types</h3>
        <ul className="mt-6 space-y-4">
          {list.map((aud, i) => (
            <li key={i} className="flex items-start gap-3 border-b border-white/[0.06] pb-3 text-sm wide:text-lg font-normal leading-relaxed text-zinc-300">
              <span className="mt-0.5 font-mono text-xs font-medium text-purple-400">0{i + 1}</span>
              <span className="text-zinc-200">{aud}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#18181B] p-5 text-sm wide:text-lg font-normal leading-relaxed text-zinc-300">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
        <p>
          <strong className="font-semibold text-white">Studio Standard:</strong> Every session includes pre-shoot environment checks, sound level calibration, and structured deliverable sign-offs before project completion.
        </p>
      </div>
    </div>
  )
}

export default function StudioSubOverview({ service }) {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Production capabilities" title="Engineered for results. Not just filming." index="02">
          {renderContextualParagraph(service.detailedDescription || service.intro, {
            currentSlug: `studio/${service.slug}`,
            maxLinks: 2,
            theme: 'frame',
          })}
        </SectionIntro>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <OverviewBenefits service={service} />
          </div>
          <OverviewAudience service={service} />
        </div>
      </div>
    </section>
  )
}
