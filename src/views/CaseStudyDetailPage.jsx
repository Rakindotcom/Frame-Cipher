'use client'

import Link from 'next/link'
import { growthCaseStudies } from '../data/growthWork'
import PosterButton from '../components/home/PosterButton'
import {
  CaseStudyDetailHero,
  CaseStudyDetailSnapshot,
  CaseStudyDetailBreakdown,
  CaseStudyDetailNext,
} from '../components/case-studies'
import {
  getCaseStudyServiceLinks,
  getCaseStudyCalculatorLink,
  getCaseStudyStudioLink,
} from '../lib/seo/internalLinks'
import { ArrowRight } from 'lucide-react'

export default function CaseStudyDetailPage({ study }) {
  const currentIndex = growthCaseStudies.findIndex((s) => s.slug === study.slug)
  const nextStudy =
    currentIndex >= 0 && currentIndex < growthCaseStudies.length - 1
      ? growthCaseStudies[currentIndex + 1]
      : growthCaseStudies[0]

  const serviceLinks = getCaseStudyServiceLinks(study)
  const calcLink = getCaseStudyCalculatorLink(study)
  const studioLink = getCaseStudyStudioLink(study)

  return (
    <main className="min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      <CaseStudyDetailHero study={study} />
      <CaseStudyDetailSnapshot study={study} />
      <CaseStudyDetailBreakdown study={study} />

      {/* Internal Linking: Deployed Services, Models & Studio Bridges */}
      {(serviceLinks.length > 0 || calcLink || studioLink) && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                <span>Ecosystem Bridges</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-white tracking-tight">
                Services &amp; Tools Deployed in This Engagement
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceLinks.map((srv) => (
                <Link
                  key={srv.href}
                  href={srv.href}
                  className="group rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-purple-600/40 hover:bg-[#18181B] shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/40 before:to-transparent before:transition-all"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400">
                    Core Service Capability
                  </span>
                  <h4 className="mt-2 font-heading text-base sm:text-lg font-medium text-white">
                    {srv.anchor}
                  </h4>
                  <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-x-1" />
                  </p>
                </Link>
              ))}

              {calcLink && (
                <Link
                  href={calcLink.href}
                  className="group rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#18181B] shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-emerald-500/40 before:to-transparent before:transition-all"
                >
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Interactive Planning Tool</span>
                  </div>
                  <h4 className="mt-2 font-heading text-base sm:text-lg font-medium text-white">
                    {calcLink.anchor}
                  </h4>
                  <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>Launch Calculator</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </p>
                </Link>
              )}

              {studioLink && (
                <Link
                  href={studioLink.href}
                  className="group rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-purple-600/40 hover:bg-[#18181B] shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent hover:before:via-purple-600/40 before:to-transparent before:transition-all"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400">
                    Physical Production Facility
                  </span>
                  <h4 className="mt-2 font-heading text-base sm:text-lg font-medium text-white">
                    {studioLink.anchor}
                  </h4>
                  <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-purple-400 group-hover:text-white transition-colors">
                    <span>Visit Studio Space</span>
                    <ArrowRight className="h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-x-1" />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <CaseStudyDetailNext nextStudy={nextStudy} />

      {/* Master CTA Section */}
      <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121214] p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  <span>Next Move</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-white">
                  Want Measurable Results Like This For Your Business?
                </h2>
              </div>
              <span
                aria-hidden="true"
                className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0"
              >
                &rarr;
              </span>
            </div>

            <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
              <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
                Frame Cipher connects positioning, content, SEO, paid media, and software into one unified
                growth engine. Book a strategy call to evaluate your channels.
              </p>
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                <PosterButton href="/contact">
                  Book a Strategy Call
                </PosterButton>
                <PosterButton href="/contact" variant="outline">
                  Send a Brief
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
