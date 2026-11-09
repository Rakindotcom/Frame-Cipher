'use client'

import React from 'react'
import {
  PackageCheck,
  KeyRound,
  LayoutGrid,
  FileText,
  GitBranch,
  Rocket,
  MessageSquareCode,
  Activity,
  AlertCircle,
} from 'lucide-react'

const playStoreRelease = [
  {
    num: '01',
    title: 'Production Build Preparation',
    desc: 'Preparing the release build and configuration required for production.',
    icon: PackageCheck,
  },
  {
    num: '02',
    title: 'App Signing & Release Configuration',
    desc: 'Supporting the required signing and release configuration for the Android application where included.',
    icon: KeyRound,
  },
  {
    num: '03',
    title: 'Play Console Support',
    desc: 'Assisting with the relevant Google Play Console release workflow and configuration.',
    icon: LayoutGrid,
  },
  {
    num: '04',
    title: 'Store Listing Support',
    desc: 'Supporting app information, screenshots, descriptions, categories, and other required materials where included.',
    icon: FileText,
  },
  {
    num: '05',
    title: 'Testing & Release Tracks',
    desc: 'Supporting appropriate testing or release-track workflows when required by the project.',
    icon: GitBranch,
  },
  {
    num: '06',
    title: 'Production Submission',
    desc: 'Preparing and submitting the application for production release.',
    icon: Rocket,
  },
  {
    num: '07',
    title: 'Review Feedback',
    desc: 'If Google requests technical or product changes during review, we can help identify the required updates for resubmission.',
    icon: MessageSquareCode,
  },
  {
    num: '08',
    title: 'Post-Launch Monitoring',
    desc: 'After release, we can monitor crash reports, review performance signals, and address any issues identified in the early post-launch period.',
    icon: Activity,
  },
]

export default function StoreLaunch() {
  return (
    <section
      id="store-launch"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Google Play Store Launch &amp; Release Support
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Building a production-ready Android application is only part of the release process. We can support the preparation and submission of the app to Google Play.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {playStoreRelease.map((step, i) => (
            <div
              key={i}
              className="group bg-[#121214] p-8 transition-colors duration-200 hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                  {step.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-lg font-medium tracking-tight text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Google Publishing Policy Disclaimer */}
        <div className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-6 md:p-8 flex items-start gap-4">
          <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-300">
            <strong className="text-amber-300">Google Play Policy Notice:</strong> Google makes the final publishing and policy decisions, so no development partner can guarantee approval on a first submission.
          </p>
        </div>
      </div>
    </section>
  )
}
