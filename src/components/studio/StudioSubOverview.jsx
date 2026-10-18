'use client'

import { CheckCircle2, Users, Layers, ShieldCheck } from 'lucide-react'
import { SectionIntro } from '../Kinetic'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

function OverviewBenefits({ service }) {
  if (!service.benefits || service.benefits.length === 0) return null
  return (
    <div className="border-2 border-frame-border bg-frame-muted/15 p-6 md:p-8">
      <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
        <Layers className="h-5 w-5 text-frame-accent" />
        <span>Key Inclusions & Standards</span>
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {service.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-frame-accent" />
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
    <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
      <div>
        <div className="mb-3 flex items-center gap-2 text-frame-accent">
          <Users className="h-5 w-5" />
          <span className="text-xs font-black uppercase tracking-[0.28em] md:text-sm">Who This Service Is For</span>
        </div>
        <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">Target Project Types</h3>
        <ul className="mt-6 space-y-4">
          {list.map((aud, i) => (
            <li key={i} className="flex items-start gap-3 border-b border-frame-border/50 pb-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
              <span className="mt-0.5 font-mono text-xs font-bold text-frame-accent">0{i + 1}</span>
              <span className="font-medium text-frame-fg">{aud}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex items-start gap-3 border-2 border-frame-border bg-frame-bg p-5 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-frame-accent" />
        <p>
          <strong className="font-bold text-frame-fg">Studio Standard:</strong> Every session includes pre-shoot environment checks, sound level calibration, and structured deliverable sign-offs before project completion.
        </p>
      </div>
    </div>
  )
}

export default function StudioSubOverview({ service }) {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
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
