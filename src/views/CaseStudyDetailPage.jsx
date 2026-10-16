'use client'

import Link from 'next/link'
import { CTASection } from '../components/Kinetic'
import { growthCaseStudies } from '../data/growthWork'
import {
  CaseStudyDetailNav,
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

export default function CaseStudyDetailPage({ study }) {
  const currentIndex = growthCaseStudies.findIndex((s) => s.slug === study.slug)
  const nextStudy =
    currentIndex >= 0 && currentIndex < growthCaseStudies.length - 1
      ? growthCaseStudies[currentIndex + 1]
      : growthCaseStudies[0]

  const studyNumber = String(currentIndex >= 0 ? currentIndex + 1 : 1).padStart(2, '0')
  const serviceLinks = getCaseStudyServiceLinks(study)
  const calcLink = getCaseStudyCalculatorLink(study)
  const studioLink = getCaseStudyStudioLink(study)

  return (
    <main className="bg-frame-bg text-frame-fg">
      <CaseStudyDetailNav study={study} />
      <CaseStudyDetailHero study={study} studyNumber={studyNumber} />
      <CaseStudyDetailSnapshot study={study} />
      <CaseStudyDetailBreakdown study={study} />

      {/* Internal Linking: Deployed Services, Models & Studio Bridges */}
      {(serviceLinks.length > 0 || calcLink || studioLink) && (
        <section className="border-b-2 border-frame-border bg-frame-muted/20 px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[95vw]">
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Execution Infrastructure
              </p>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase text-frame-fg tracking-tight">
                Services &amp; Tools Deployed in This Engagement
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceLinks.map((srv) => (
                <Link
                  key={srv.href}
                  href={srv.href}
                  className="group border-2 border-frame-border bg-frame-bg p-6 transition-all duration-200 hover:border-frame-accent hover:-translate-y-0.5"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-frame-muted-fg group-hover:text-frame-accent transition-colors">
                    Core Service Capability
                  </span>
                  <h4 className="mt-2 font-heading text-base font-bold uppercase text-frame-fg group-hover:text-frame-accent transition-colors">
                    {srv.anchor}
                  </h4>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent">
                    <span>Explore Service</span>
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              ))}

              {calcLink && (
                <Link
                  href={calcLink.href}
                  className="group border-2 border-emerald-500/30 bg-emerald-500/5 p-6 transition-all duration-200 hover:border-emerald-500 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Interactive Planning Tool</span>
                  </div>
                  <h4 className="mt-2 font-heading text-base font-bold uppercase text-frame-fg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {calcLink.anchor}
                  </h4>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <span>Launch Calculator</span>
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              )}

              {studioLink && (
                <Link
                  href={studioLink.href}
                  className="group border-2 border-purple-500/30 bg-purple-500/5 p-6 transition-all duration-200 hover:border-purple-500 hover:-translate-y-0.5"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Physical Production Facility
                  </span>
                  <h4 className="mt-2 font-heading text-base font-bold uppercase text-frame-fg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {studioLink.anchor}
                  </h4>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    <span>Visit Studio Space</span>
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <CaseStudyDetailNext nextStudy={nextStudy} />

      <CTASection title="Want measurable results like this for your business?">
        Frame Cipher connects positioning, content, SEO, paid media, and software into one unified
        growth engine. Book a strategy call to evaluate your channels.
      </CTASection>
    </main>
  )
}
