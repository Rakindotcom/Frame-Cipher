'use client'

import React from 'react'
import {
  Briefcase,
  MapPin,
  Laptop,
  GraduationCap,
  Shield,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react'

const verticals = [
  {
    icon: Briefcase,
    title: 'B2B & Professional Services',
    desc: 'Management consultancies, IT service providers, legal firms, and corporate solutions requiring multi-touch pipeline nurturing and committee consensus.',
    deliverables: [
      'Account-based targeting on LinkedIn & Google Search',
      'Executive whitepaper and assessment lead funnels',
      'CRM integration for MQL/SQL lifecycle tracking',
    ],
  },
  {
    icon: MapPin,
    title: 'Local & Regional Services',
    desc: 'Healthcare clinics, home improvement, commercial contractors, and financial advisors seeking high-intent local phone calls and booked appointments.',
    deliverables: [
      'High-intent localized Google Search campaigns',
      'Click-to-Call and WhatsApp instant consultation ads',
      'Radius-based demographic and postal code exclusions',
    ],
  },
  {
    icon: Laptop,
    title: 'SaaS & Enterprise Technology',
    desc: 'Software companies driving qualified product demos, sandbox trials, and executive sales consultations with decision-makers.',
    deliverables: [
      'Demo request landing pages with automated calendar booking',
      'Pre-qualified job seniority and company size filters',
      'Downstream product usage and trial conversion tracking',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education & Professional Training',
    desc: 'Executive academies, universities, certification bodies, and specialized bootcamps enrolling high-value students and corporate cohorts.',
    deliverables: [
      'Course curriculum download and syllabus inquiry funnels',
      'Admission counselor direct phone routing',
      'Webinar registration and automated nurture sequencing',
    ],
  },
  {
    icon: Shield,
    title: 'High-Ticket & Complex Purchases',
    desc: 'Commercial real estate developers, luxury brands, and specialized industrial equipment suppliers where single deals represent massive LTV.',
    deliverables: [
      'De-risked consultation and private viewing workflows',
      'Extended 90-day consideration retargeting sequences',
      'Offline contract tracking tied back to ad source',
    ],
  },
  {
    icon: PhoneCall,
    title: 'Consultation & Discovery Sales',
    desc: 'Advisory agencies and service businesses that close high-margin contracts through strategy sessions, discovery calls, and diagnostic audits.',
    deliverables: [
      'Diagnostic audit and strategy session application forms',
      'Pre-qualification budget and timeline dropdowns',
      'Automated SMS reminders to reduce consultation no-shows',
    ],
  },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Who Is Lead Generation{' '}
            <span className="italic text-frame-accent">Ads For?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Our lead acquisition frameworks are purpose-built for businesses whose sales models depend on qualified human conversations, proposals, and consultative closing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B] flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {v.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
