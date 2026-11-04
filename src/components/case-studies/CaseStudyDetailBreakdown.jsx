import Image from 'next/image'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

export default function CaseStudyDetailBreakdown({ study }) {
  return (
    <>
      {/* Detailed Strategy & Execution Sections */}
      {study.sections?.length > 0 && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                Strategy, execution, and{' '}
                <span className="italic text-frame-accent">architecture.</span>
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {study.sections.map((section, sectionIndex) => (
                <article
                  key={section.title}
                  className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-400 tabular-nums">
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
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" aria-hidden="true" />
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

      {/* Campaign Evidence Snapshots Gallery */}
      {study.gallery?.length > 0 && (
        <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                  First-party campaign{' '}
                  <span className="italic text-frame-accent">reporting.</span>
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
                  className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]  transition-colors duration-200 hover:border-white/[0.14]"
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
                  <figcaption className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] tabular-nums text-zinc-400">
                    {item.caption || `Performance snapshot ${imageIndex + 1}`}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools Used & Lessons Learned (Modality 5 Cards) */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
            <h3 className="font-heading text-2xl md:text-3xl font-medium leading-tight tracking-tight text-white">
              Tools &amp; Frameworks
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.tools?.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-white/[0.08] bg-[#18181B] px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
            <h3 className="font-heading text-2xl md:text-3xl font-medium leading-tight tracking-tight text-white">
              Core Lessons Learned
            </h3>
            <ol className="mt-6 grid gap-5">
              {study.lessons?.map((lesson, lessonIndex) => (
                <li
                  key={lesson}
                  className="grid grid-cols-[auto_1fr] gap-4 text-base font-normal leading-relaxed text-zinc-300"
                >
                  <span className="font-mono text-xl font-bold tabular-nums text-violet-400">
                    {lessonIndex + 1}
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
