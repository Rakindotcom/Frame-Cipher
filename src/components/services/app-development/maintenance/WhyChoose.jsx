'use client'

import React from 'react'
import {
  Users2,
  Cpu,
  FolderGit2,
  FileSpreadsheet,
  Globe2,
  LifeBuoy,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const whyChooseUs = [
  {
    icon: Users2,
    num: '01',
    title: 'One In-House Team',
    desc: 'Your maintenance work stays with our in-house team. This keeps communication, technical decisions, development, testing, and ongoing support connected.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'Platform-Specific Support',
    desc: 'Android, iOS, cross-platform, SaaS, and enterprise applications have different maintenance requirements. We structure support around the actual platform and architecture instead of treating every application the same way.',
  },
  {
    icon: FolderGit2,
    num: '03',
    title: 'Existing Codebase Takeover',
    desc: 'We can assess applications developed by another team. Our takeover process helps establish the application\'s current condition before ongoing maintenance begins.',
  },
  {
    icon: FileSpreadsheet,
    num: '04',
    title: 'Transparent Reporting',
    desc: 'You receive clear information about completed work, current issues, maintenance activities, and recommended improvements.',
  },
  {
    icon: Globe2,
    num: '05',
    title: 'Local & International Delivery',
    desc: 'We provide app maintenance support from Bangladesh for businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    icon: LifeBuoy,
    num: '06',
    title: 'Long-Term Product Support',
    desc: 'An application should not become difficult to maintain after launch. Our ongoing support model helps businesses manage technical changes, resolve issues, maintain integrations, and improve their applications over time.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column (Sticky Anchor - 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why Choose Framecipher for App Maintenance.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Maintenance requires more than reacting to support tickets. Your team needs a partner that understands the application, its business purpose, and the technical environment around it.
            </p>

            <div className="pt-2">
              <PosterButton href="/contact" variant="primary" className="h-[52px]">
                Start Your Maintenance Plan
              </PosterButton>
            </div>

            {/* Quick Proof Card */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-5 space-y-3 font-mono text-xs text-zinc-400 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span>ENGAGEMENT MODEL</span>
                <span className="text-white">MONTHLY RETAINER SLA</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span>INCIDENT RESPONSE</span>
                <span className="text-emerald-400">&lt; 1 TO 4 HOURS</span>
              </div>
              <div className="flex items-center justify-between">
                <span>TEAM MODEL</span>
                <span className="text-white">100% IN-HOUSE ENGINEERS</span>
              </div>
            </div>
          </div>

          {/* Right Column (6 Pillars - 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.num}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-purple-400">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {item.desc}
                      </p>
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
