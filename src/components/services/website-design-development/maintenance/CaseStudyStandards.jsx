'use client'

import React from 'react'
import { Check } from 'lucide-react'

const caseStudyPillars = [
  {
    title: 'Website Type & Platform',
    desc: 'Business, ecommerce, content blog, or custom application running across WordPress, WooCommerce, Shopify, Webflow, Magento, or Next.js.',
  },
  {
    title: 'The Challenge',
    desc: 'Technical or operational issues the website was experiencing, such as outdated plugin conflicts, slow checkout latency, or unverified backups.',
  },
  {
    title: 'Maintenance Work',
    desc: 'Safe staging updates, security hardening, backup restoration testing, database optimization, 24/7 monitoring, and custom troubleshooting.',
  },
  {
    title: 'Verified Result',
    desc: 'Restored uptime, faster page load speeds, resolved form/checkout errors, and seamless handover of maintenance responsibility.',
  },
  {
    title: 'Ongoing Care',
    desc: 'Scheduled monthly update cycles, proactive vulnerability scans, database grooming, and rapid incident response.',
  },
]

const technicalCapabilities = [
  'Zero-Downtime Safe Patching',
  'Simulated Disaster Recovery',
  '24/7 Endpoint Health Checks',
  'Checkout & Form Integrity',
  'Sub-Second Core Web Vitals',
  'Third-Party API Monitoring',
  'Malware & Vulnerability Scans',
  'Transparent Monthly Logs',
]

export default function CaseStudyStandards() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What Each Maintenance{' '}
            <span className="italic text-frame-accent">Case Study Highlights.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We document our maintenance engagements with real operational evidence, showing how proactive engineering prevents costly downtime and protects revenue.
          </p>
        </div>

        {/* 5 Stage Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {caseStudyPillars.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Safeguards Card */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
          <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
            Core Technical Capabilities Demonstrated
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {technicalCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400">
            Only publish project metrics, response times, performance improvements, client counts, or other measurable claims when you have actual evidence for them.
          </p>
        </div>
      </div>
    </section>
  )
}
