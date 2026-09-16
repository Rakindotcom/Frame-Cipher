import Link from 'next/link'

export default function CaseStudyDetailNext({ nextStudy }) {
  if (!nextStudy) return null

  return (
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
            Read next study &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
