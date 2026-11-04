'use client'

import React from 'react'

const devopsAreas = [
  'Production environment setup',
  'Hosting configuration',
  'Environment variables',
  'Preview environments',
  'CI/CD workflows',
  'Deployment configuration',
  'Error monitoring',
  'Performance monitoring',
  'Application analytics',
  'Production troubleshooting',
  'Release and rollback planning',
]

export default function Devops() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Next.js Deployment, Monitoring &amp;{' '}
            <span className="italic text-frame-accent">DevOps.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A completed codebase still needs a reliable path to production. Depending on the project, deployment support can include:
          </p>
        </div>

        {/* 11 DevOps Areas Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {devopsAreas.map((dev, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#121214] p-3.5 text-xs sm:text-sm font-medium text-white transition-colors hover:border-white/[0.14]"
            >
              <span className="text-frame-accent font-bold">&bull;</span>
              <span>{dev}</span>
            </div>
          ))}
        </div>

        {/* Takeaway Paragraph */}
        <p className="mt-8 text-xs sm:text-sm text-zinc-400">
          The deployment approach is selected around the application&apos;s architecture, traffic, integrations, operational requirements, and future growth.
        </p>
      </div>
    </section>
  )
}
