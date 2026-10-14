'use client'

import { CheckCircle2, Users, Layers, ShieldCheck } from 'lucide-react'

export default function StudioSubOverview({ service }) {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column: Detailed Service Breakdown */}
          <div className="space-y-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Production Capabilities
              </p>
              <h2 className="mt-3 font-heading text-2xl md:text-4xl font-extrabold uppercase text-frame-fg leading-tight">
                Engineered For Results. Not Just Filming.
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-frame-muted-fg">
                {service.detailedDescription || service.intro}
              </p>
            </div>

            {/* Core Advantages List */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="border-2 border-frame-border bg-frame-muted/15 p-6 md:p-8">
                <h3 className="font-heading text-lg font-bold uppercase text-frame-fg mb-6 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-frame-accent" />
                  <span>Key Inclusions & Standards</span>
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-frame-muted-fg">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Audience & Target Commercial Fit */}
          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
            <div>
              <div className="flex items-center gap-2 text-frame-accent mb-4">
                <Users className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-[0.22em]">
                  Who This Service Is For
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-frame-fg">
                Target Project Types
              </h3>

              <ul className="mt-6 space-y-3.5">
                {(service.targetAudience || [
                  'Dhaka-based enterprises wanting brand-aligned video assets',
                  'High-growth tech startups and founders building personal brands',
                  'E-commerce merchants scaling Daraz, Shopify & social media orders',
                  'Marketing managers needing predictable, on-schedule deliverables',
                  'Content creators and podcasters who want broadcast-tier polish',
                ]).map((aud, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-frame-muted-fg border-b border-frame-border/50 pb-3">
                    <span className="font-mono text-[10px] font-bold text-frame-accent mt-0.5">0{i+1}</span>
                    <span className="text-frame-fg font-medium">{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Guarantee / Assurance */}
            <div className="mt-8 border border-frame-border bg-frame-bg p-4 text-xs text-frame-muted-fg flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-frame-accent mt-0.5" />
              <p>
                <strong className="text-frame-fg font-bold">Studio Standard:</strong> Every session includes pre-shoot environment checks, sound level calibration, and structured deliverable sign-offs before project completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
