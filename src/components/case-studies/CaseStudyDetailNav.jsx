import Link from 'next/link'

export default function CaseStudyDetailNav({ study }) {
  return (
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
  )
}
