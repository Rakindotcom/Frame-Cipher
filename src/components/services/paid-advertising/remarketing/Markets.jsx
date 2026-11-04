'use client'

import React from 'react'
import { Globe, MapPin, CheckCircle2 } from 'lucide-react'

const regions = [
  {
    title: 'Bangladesh (Hub)',
    featured: true,
    desc: 'Local agency expertise in Dhaka specializing in local buying patterns, bilingual Bangla/English messaging, and direct WhatsApp commerce follow-ups.',
    details: [
      'Bilingual Bangla & English ad copywriting & video hooks',
      'Direct WhatsApp and Messenger click-to-chat remarketing',
      'Local cash-on-delivery (COD) objection handling & reassurance',
      'Division and city-level geographic audience calibration',
    ],
  },
  {
    title: 'United States',
    desc: 'Engineering high-velocity, multi-touch retargeting across Meta, Google, and TikTok for US ecommerce brands, SaaS companies, and B2B pipelines.',
    details: [
      'Fast 24-to-72 hour cart abandoner recovery workflows',
      'Extended 60–90 day B2B buying committee nurturing',
      'Advanced first-party CRM list matching and lookalike exclusions',
    ],
  },
  {
    title: 'United Kingdom',
    desc: 'Strictly consent-compliant remarketing structured around UK customer behavior, British English terminology, and GDPR Consent Mode v2 standards.',
    details: [
      'Full Google Consent Mode v2 implementation',
      'Localized UK pricing, VAT transparency, and delivery hooks',
      'Cross-platform GDN, Meta, and Pinterest coverage',
    ],
  },
  {
    title: 'Canada',
    desc: 'Bilingual English and Canadian French audience segmentation with cross-provincial campaign controls for growing retail and service brands.',
    details: [
      'Bilingual creative variation testing (EN/FR)',
      'Cross-border US/Canada inventory and shipping coordination',
      'High-AOV service and luxury product nurturing',
    ],
  },
  {
    title: 'Australia',
    desc: 'High-conversion remarketing for Australian retail, trades, and professional service brands seeking lower CPAs across Meta, Google, and TikTok.',
    details: [
      'Localized Australian seasonal calendar pacing',
      'Mobile-first video and carousel retargeting formats',
      'Transparent CPA and revenue attribution reporting',
    ],
  },
  {
    title: 'UAE & Middle East',
    desc: 'Tailored for high-AOV retail, luxury real estate, and B2B enterprises across Dubai and Abu Dhabi with bilingual English and Arabic capabilities.',
    details: [
      'Bilingual English and Arabic ad sequencing',
      'High mobile adoption and social video focus',
      'White Friday and regional holiday promotional campaigns',
    ],
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Remarketing for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">Global Markets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Whether re-engaging local consumers in Dhaka or recovering cart abandoners across North America, Europe, and the Middle East, we adapt language, timing, and compliance to each market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((region) => (
            <div
              key={region.title}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-colors duration-300 ${
                region.featured
                  ? 'border-frame-accent bg-[#141218]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  {region.featured && (
                    <span className="rounded-full bg-frame-accent/10 border border-frame-accent/30 px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider text-frame-accent">
                      Local Agency Hub
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {region.title}
                </h3>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {region.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {region.details.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
