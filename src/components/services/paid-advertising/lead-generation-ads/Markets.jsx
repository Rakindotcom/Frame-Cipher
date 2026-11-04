'use client'

import React from 'react'
import { Globe, MapPin, CheckCircle2 } from 'lucide-react'

const territories = [
  {
    title: 'Bangladesh (Hub)',
    featured: true,
    desc: 'Local agency presence in Dhaka engineering high-intent lead funnels tailored to Bangladeshi business buyers and high-value consumer services.',
    details: [
      'Bilingual Bangla & English ad messaging and qualification forms',
      'Click-to-WhatsApp and direct phone consultation routing',
      'Division and commercial hub geographic targeting (Dhaka, CTG)',
      'Local qualification criteria to eliminate non-commercial inquiries',
    ],
  },
  {
    title: 'United States',
    desc: 'B2B and SaaS lead generation across Google Search, LinkedIn Ads, and Meta, with instant CRM routing into HubSpot, Salesforce, and enterprise stacks.',
    details: [
      'High-intent commercial search keyword harvesting',
      'Enhanced Conversions for Leads & Google Data Manager setup',
      'Strict firmographic and job-title filtering on LinkedIn',
    ],
  },
  {
    title: 'United Kingdom',
    desc: 'Consent-compliant lead acquisition campaigns structured around British commercial demand, professional titles, and GDPR compliance standards.',
    details: [
      'Google Consent Mode v2 implementation',
      'UK localized copy, terminology, and business proofs',
      'Direct calendar booking and consultation funnels',
    ],
  },
  {
    title: 'Canada',
    desc: 'Targeted lead campaigns across Ontario, BC, Quebec, and Canadian commercial hubs with bilingual English and French targeting where appropriate.',
    details: [
      'Provincial and city-specific geographic targeting',
      'Bilingual lead capture landing pages and form assets',
      'Sales-qualified lead (SQL) pipeline tracking',
    ],
  },
  {
    title: 'Australia',
    desc: 'High-margin professional service and B2B trade lead generation across Sydney, Melbourne, and Australian metropolitan centers.',
    details: [
      'Localized seasonal timing and corporate buying cycles',
      'Mobile-first responsive consultation booking pages',
      'Cost Per Qualified Lead (CPQL) optimization',
    ],
  },
  {
    title: 'UAE & Middle East',
    desc: 'High-AOV enterprise, luxury real estate, and B2B corporate lead funnels tailored to the UAE market with bilingual English and Arabic capabilities.',
    details: [
      'Bilingual English and Arabic lead ad sequences',
      'Direct WhatsApp Business API automated lead triage',
      'High-AOV executive and investor qualification workflows',
    ],
  },
]

export default function Markets() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Lead Generation for Bangladesh &amp;{' '}
            <span className="italic text-frame-accent">International Markets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Whether generating local commercial inquiries in Dhaka or enterprise B2B sales opportunities across North America, Europe, and the Middle East, we tailor contact methods and qualification to each territory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {territories.map((territory) => (
            <div
              key={territory.title}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-colors duration-300 ${
                territory.featured
                  ? 'border-frame-accent bg-[#141218]'
                  : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  {territory.featured && (
                    <span className="rounded-full bg-frame-accent/10 border border-frame-accent/30 px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider text-frame-accent">
                      Local Agency Hub
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-2">
                  {territory.title}
                </h3>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {territory.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {territory.details.map((item) => (
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
