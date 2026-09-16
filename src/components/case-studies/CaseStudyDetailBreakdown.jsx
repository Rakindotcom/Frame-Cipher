import Image from 'next/image'

export default function CaseStudyDetailBreakdown({ study }) {
  return (
    <>
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
              {study.tools?.map((tool) => (
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
              {study.lessons?.map((lesson, lessonIndex) => (
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
    </>
  )
}
