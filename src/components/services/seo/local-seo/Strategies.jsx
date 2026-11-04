'use client'

import React from 'react'
import {
  UtensilsCrossed,
  Stethoscope,
  Wrench,
  Network,
  CheckCircle2,
} from 'lucide-react'

const strategies = [
  {
    icon: UtensilsCrossed,
    title: 'Retail, Restaurants & Physical Storefronts',
    focus: 'Immediate Discovery & High-Frequency Walk-ins',
    desc: 'Customers often need immediate information before walking in: opening hours, live directions, high-resolution food/store photos, menus, and recent reviews.',
    points: [
      'Cuisine, menu items & dining occasion optimization',
      'In-store product category and local inventory schema',
      'Real-time opening hours and holiday schedule updates',
      'Store-specific localized landing pages',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Clinics, Professional Services & Offices',
    focus: 'High-Trust Research & Qualified Bookings',
    desc: 'Professional practices require deeper customer research before booking: doctor credentials, patient testimonials, case histories, and transparent service details.',
    points: [
      'Comprehensive medical / legal / financial service pages',
      'Practitioner schema and specialized board certifications',
      'Strict HIPAA / medical advertising policy adherence',
      'Direct appointment booking widget integrations',
    ],
  },
  {
    icon: Wrench,
    title: 'Service-Area Businesses (SABs)',
    focus: 'Territory Coverage & Mobile Inquiries',
    desc: 'Contractors traveling to clients need explicit service-territory clarity without falling into low-value, duplicate "city page" traps.',
    points: [
      'Service-to-location mapping based on verified travel radiuses',
      'Compliant address-hidden Google Business Profile setup',
      'Emergency / urgent 24/7 localized search targeting',
      'Real job photos and neighborhood case studies',
    ],
  },
  {
    icon: Network,
    title: 'Multi-Location & Franchise Brands',
    focus: 'Centralized Governance & Scaled Local Authority',
    desc: 'Enterprises managing dozens of branches need central brand consistency paired with distinct, hyper-local community authority for each outlet.',
    points: [
      'Dedicated branch landing pages with unique local NAP & staff',
      'Bulk Google Business Profile verification & centralized governance',
      'Individual branch geo-grid rank tracking & call attribution',
      'Automated multi-location review collection workflows',
    ],
  },
]

export default function Strategies() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Sector Playbooks // Customized By Business Type
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Local SEO Strategies by{' '}
            <span className="italic text-frame-accent">Business Type</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Different businesses compete in vastly different local search environments. We tailor your optimization playbook to how buyers actually research, evaluate, and purchase in your sector.
          </p>
        </div>

        {/* 4 Strategy Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {strategies.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frame-accent/15 text-frame-accent border border-frame-accent/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                          Playbook 0{index + 1}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Target: {item.focus}
                  </p>

                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Implementation Focus:
                    </span>
                    <ul className="space-y-1.5">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
