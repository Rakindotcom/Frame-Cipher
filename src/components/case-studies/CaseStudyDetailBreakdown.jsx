import Image from 'next/image'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'
import { Check } from 'lucide-react'

export default function CaseStudyDetailBreakdown({ study }) {
  return (
    <>
      {/* Detailed Strategy & Execution Sections */}
      {study.sections?.length > 0 && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                <span>Strategic Roadmap</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Strategy, Execution, and Architecture
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {study.sections.map((section, sectionIndex) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-purple-600/40 shadow-[0_15px_40px_rgba(0,0,0,0.3)] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/0 hover:before:via-purple-600/40 before:to-transparent before:transition-all"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-purple-400 tabular-nums">
                    {String(sectionIndex + 1).padStart(2, '0')} / Section
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-medium leading-tight tracking-tight text-white md:text-3xl">
                    {section.title}
                  </h3>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-base font-normal leading-relaxed text-zinc-300 md:text-lg"
                    >
                      {renderContextualParagraph(paragraph, {
                        currentSlug: `case-studies/${study.slug}`,
                        maxLinks: 1,
                        theme: 'frame',
                      })}
                    </p>
                  ))}
                  {section.items?.length > 0 && (
                    <ul className="mt-6 grid gap-3 border-t border-white/[0.08] pt-5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[auto_1fr] gap-3 text-sm font-medium leading-relaxed text-zinc-300 md:text-base"
                        >
                          <Check className="h-4 w-4 text-purple-600 shrink-0 mt-1" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured Execution Stages (when present) */}
      {study.processStages?.length > 0 && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                <span>Production Pipeline</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Multi-Stage Execution Architecture
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {study.processStages.map((stage) => (
                <div
                  key={stage.number}
                  className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-purple-600/40 transition-colors duration-200 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/0 hover:before:via-purple-600/40 before:to-transparent"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400 tabular-nums">
                    {stage.number} / Stage
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium text-white tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-normal leading-relaxed text-zinc-300">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Strategic Key Lessons & Operating Principles (when present) */}
      {study.lessons?.length > 0 && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                <span>Strategic Synthesis</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Strategic Takeaways &amp; Operating Principles
              </h2>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-9 md:p-11 shadow-[0_15px_40px_rgba(0,0,0,0.3)] relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/50 before:to-transparent">
              <ul className="grid gap-5">
                {study.lessons.map((lesson, idx) => (
                  <li
                    key={`${lesson.slice(0, 30)}-${idx}`}
                    className="grid grid-cols-[auto_1fr] gap-4 text-base font-medium leading-relaxed text-zinc-200 sm:text-lg"
                  >
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Campaign Evidence Snapshots Gallery */}
      {study.gallery?.length > 0 && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-purple-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  <span>Platform Verification</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                  First-Party Campaign Reporting
                </h2>
              </div>
              <p className="max-w-xl text-sm font-normal leading-relaxed text-zinc-400">
                Direct platform screenshots from Meta Ads Manager, Google Search Console, GA4,
                and analytics platforms verifying performance numbers.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {study.gallery.map((item, imageIndex) => (
                <figure
                  key={`${item.src}-${imageIndex}`}
                  className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-purple-600/40 shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative aspect-[16/10] bg-black">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 48vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-white/[0.08] bg-[#18181B]/80 px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] tabular-nums text-zinc-300 flex items-center justify-between">
                    <span className="truncate pr-4 flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                      <span className="truncate">{item.caption || `Performance snapshot ${imageIndex + 1}`}</span>
                    </span>
                    <span className="shrink-0 text-[10px] uppercase tracking-wider text-purple-400">
                      Receipt {imageIndex + 1}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
