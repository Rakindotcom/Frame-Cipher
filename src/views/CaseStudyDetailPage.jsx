'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CTASection, PageHero, PosterButton } from '../components/Kinetic'
import { growthCaseStudies } from '../data/growthWork'

export default function CaseStudyDetailPage({ study }) {
  const currentIndex = growthCaseStudies.findIndex((s) => s.slug === study.slug)
  const nextStudy =
    currentIndex >= 0 && currentIndex < growthCaseStudies.length - 1
      ? growthCaseStudies[currentIndex + 1]
      : growthCaseStudies[0]

  const studyNumber = String(currentIndex >= 0 ? currentIndex + 1 : 1).padStart(2, '0')

  return (
    <main className="bg-frame-bg text-frame-fg">
      {/* Top Back Navigation Bar */}
      <nav
        aria-label="Breadcrumb navigation"
        className="sticky top-[74px] z-40 border-b-2 border-frame-border bg-frame-bg/95 backdrop-blur-xl px-4 py-3 shadow-md md:px-8"
      >
        <div className="mx-auto flex max-w-[95vw] items-center justify-between gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-frame-border bg-frame-bg px-3.5 py-2 text-xs font-black uppercase tracking-wider text-frame-fg transition-all duration-200 hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Case Studies</span>
          </Link>

          <div className="hidden items-center gap-2 text-xs font-black uppercase tracking-widest text-frame-muted-fg sm:flex">
            <Link href="/case-studies" className="hover:text-frame-fg">
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-frame-accent">{study.category}</span>
            <span>/</span>
            <span className="max-w-xs truncate text-frame-fg">{study.client}</span>
          </div>

          <Link
            href="/contact"
            className="hidden border-2 border-frame-accent bg-frame-accent px-4 py-2 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg md:inline-flex"
          >
            Book a strategy call
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <PageHero
        eyebrow={study.category}
        meta={`${study.client} · ${study.industry}`}
        number={studyNumber}
        title={study.title}
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/case-studies" variant="outline">
              All case studies
            </PosterButton>
          </>
        }
      >
        {study.summary}
      </PageHero>

      {/* Metrics Banner */}
      {study.metrics?.length > 0 && (
        <section aria-label="Key performance metrics" className="border-b-2 border-frame-border">
          <div className="mx-auto grid max-w-[95vw] gap-px border-x-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map(([value, label]) => (
              <div key={label} className="bg-frame-muted p-6 md:p-8">
                <p className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-none tracking-tighter text-frame-accent">
                  {value}
                </p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hero Image & Metadata Snapshot */}
      <section className="border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="overflow-hidden border-2 border-frame-border bg-frame-muted">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={study.image.src}
                  alt={study.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="border-t-2 border-frame-border bg-frame-bg px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-frame-muted-fg">
                {study.image.caption || `${study.client} - primary campaign reporting view`}
              </div>
            </div>

            <div className="grid gap-px border-2 border-frame-border bg-frame-border">
              <div className="bg-frame-bg p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Project overview
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
                  {study.summary}
                </h2>
              </div>
              <div className="grid gap-px bg-frame-border sm:grid-cols-2">
                <MetaItem label="Client" value={study.client} />
                <MetaItem label="Industry" value={study.industry} />
                <MetaItem label="Timeline" value={study.timeline} />
                <MetaItem label="Primary focus" value={study.primaryFocus} />
              </div>
              {study.snapshot?.length > 0 && (
                <div className="grid gap-px bg-frame-border">
                  {study.snapshot.map(([label, value]) => (
                    <MetaItem key={label} label={label} value={value} wide />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Strategy & Execution Sections */}
      {study.sections?.length > 0 && (
        <section className="border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[95vw]">
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
                In-depth breakdown
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                Strategy, execution, and architecture
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {study.sections.map((section, sectionIndex) => (
                <article
                  key={section.title}
                  className="border-2 border-frame-border bg-frame-bg p-6 md:p-9"
                >
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {String(sectionIndex + 1).padStart(2, '0')} / Section
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                    {section.title}
                  </h3>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items?.length > 0 && (
                    <ul className="mt-6 grid gap-3 border-t-2 border-frame-border pt-5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[auto_1fr] gap-3 text-sm font-semibold leading-relaxed text-frame-muted-fg md:text-base"
                        >
                          <span className="mt-2 h-2 w-2 bg-frame-accent" aria-hidden="true" />
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
        <section className="border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[95vw]">
            <div className="flex flex-col gap-3 border-b-2 border-frame-border pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Evidence & data
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                  First-party campaign reporting
                </h2>
              </div>
              <p className="max-w-xl text-sm font-medium leading-relaxed text-frame-muted-fg">
                Direct platform screenshots from Meta Ads Manager, Google Search Console, GA4,
                and analytics platforms verifying performance numbers.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {study.gallery.map((item, imageIndex) => (
                <figure
                  key={`${item.src}-${imageIndex}`}
                  className="overflow-hidden border-2 border-frame-border bg-frame-muted"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 48vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="border-t-2 border-frame-border bg-frame-bg px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-frame-muted-fg">
                    {item.caption || `Performance snapshot ${imageIndex + 1}`}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools Used & Lessons Learned */}
      <section className="border-b-2 border-frame-border">
        <div className="mx-auto grid max-w-[95vw] gap-px border-x-2 border-frame-border bg-frame-border lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-frame-muted p-6 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Tools & frameworks
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
              Systems utilized
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="border-2 border-frame-border bg-frame-bg px-3.5 py-2 text-xs font-black uppercase tracking-[0.14em] text-frame-fg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-frame-bg p-6 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Takeaways & learnings
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
              Core lessons learned
            </h3>
            <ol className="mt-6 grid gap-5">
              {study.lessons.map((lesson, lessonIndex) => (
                <li
                  key={lesson}
                  className="grid grid-cols-[auto_1fr] gap-4 text-base font-semibold leading-relaxed text-frame-muted-fg md:text-lg"
                >
                  <span className="font-heading text-2xl font-bold text-frame-accent">
                    {lessonIndex + 1}
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation Banner */}
      {nextStudy && (
        <section className="border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[95vw]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Next Case Study
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                  {nextStudy.title}
                </h3>
                <p className="mt-2 text-xs font-black uppercase tracking-wider text-frame-muted-fg">
                  {nextStudy.client} · {nextStudy.category}
                </p>
              </div>
              <Link
                href={`/case-studies/${nextStudy.slug}`}
                className="inline-flex min-h-12 items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg shrink-0"
              >
                Read next study →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection title="Want measurable results like this for your business?">
        Frame Cipher connects positioning, content, SEO, paid media, and software into one unified
        growth engine. Book a strategy call to evaluate your channels.
      </CTASection>
    </main>
  )
}

function MetaItem({ label, value, wide = false }) {
  return (
    <div className={`bg-frame-bg p-5 md:p-6 ${wide ? 'sm:col-span-2' : ''}`}>
      <dt className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">{label}</dt>
      <dd className="mt-2.5 text-sm font-bold leading-tight text-frame-fg md:text-base">{value}</dd>
    </div>
  )
}
