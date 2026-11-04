'use client'

import React from 'react'
import { Building2, UserCheck, Check, Sparkles } from 'lucide-react'

const companyPage = {
  label: 'Company Page',
  headline: 'Official Corporate Hub',
  body: 'A LinkedIn Company Page provides an official professional presence for your organization. It serves as your business communication, credibility, and brand content center.',
  points: [
    'Official company profile & business info',
    'Product, service, & solution visibility',
    'Showcase pages for key offerings',
    'Branded updates, case studies & announcements',
    'Recruitment, team culture & employer brand',
    'Lead form & CTA destinations',
    'Employee advocacy hub & re-shares',
    'Institutional B2B credibility asset',
  ],
  footer:
    'A company page provides the foundation for organizational visibility and professional credibility.',
}

const executiveProfile = {
  label: 'Executive Profile',
  headline: 'Personal Authority & Perspective',
  body: 'People connect with people. Founder, CEO, and executive profiles often drive deeper organic reach, higher conversation rates, and greater audience trust than brand pages alone.',
  points: [
    'Founder & leadership story positioning',
    'Original perspective & thought leadership',
    'Behind-the-scenes decision rationales',
    'Frameworks, playbooks & contrarian insights',
    'Direct industry peer-to-peer engagement',
    'Talent magnet & executive recruitment',
    'High organic algorithm distribution',
    'Speaking & media opportunity magnet',
  ],
  footer:
    'Executive content works best when it reflects the person’s authentic knowledge, experiences, opinions, and distinct point of view.',
}

export default function PageVsExecutive() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Strategic Architecture · Dual Engines
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Company Pages &amp; Executive Profiles{' '}
            <span className="italic text-frame-accent">Play Different Roles.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A company page and an executive profile can support the same business strategy without serving the same communication purpose. The company page represents the organization; the executive profile represents the person, expertise, and perspective behind it.
          </p>
        </div>

        {/* 2-Column Symmetrical Comparison Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Company Page */}
          <article className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors hover:border-white/[0.16]">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    {companyPage.label}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {companyPage.headline}
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-frame-accent">
                  <Building2 className="h-5 w-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                {companyPage.body}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                {companyPage.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-frame-accent mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200">Official Standard: </strong>
              {companyPage.footer}
            </div>
          </article>

          {/* Card 2: Executive Profile */}
          <article className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#15121c] p-7 md:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-500/20">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                    {executiveProfile.label}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {executiveProfile.headline}
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-frame-accent">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-200 mb-6 leading-relaxed">
                {executiveProfile.body}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-200">
                {executiveProfile.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/20 text-purple-300 mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4 text-xs text-purple-200/90 leading-relaxed">
              <strong className="text-white">Authentic Principle: </strong>
              {executiveProfile.footer}
            </div>
          </article>
        </div>

        {/* Coordination Architecture Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
          <div className="max-w-3xl space-y-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
              Harmonized Deployment · </span>
            <h4 className="font-heading text-xl font-medium tracking-tight text-white">
              Connecting Both Into One Strategy
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Your company page and executive profiles should not publish identical content all the time. Instead, we coordinate them around shared business themes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 block mb-2">
                Company Page Role
              </span>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Official company announcement, proprietary research, case study release, service insight, or organizational milestone.
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent block mb-2">
                Executive Profile Role
              </span>
              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Personal perspective, strategic lesson, firsthand experience, operational analysis, or leadership viewpoint connected to the same broader theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
