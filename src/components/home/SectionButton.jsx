import Link from 'next/link'

export default function SectionButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 whitespace-nowrap border-2 border-frame-border bg-transparent px-7 py-4 text-sm font-black uppercase tracking-tighter text-frame-fg transition-all duration-200 hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg active:scale-95 md:min-h-16 md:px-9 md:text-base"
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  )
}