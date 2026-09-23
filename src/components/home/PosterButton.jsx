import Link from 'next/link'

export default function PosterButton({ href, children, variant = 'accent', className = '' }) {
  const classes =
    variant === 'accent'
      ? 'border-frame-accent bg-frame-accent text-frame-accent-fg hover:bg-transparent hover:text-frame-fg'
      : 'border-frame-border bg-transparent text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg'

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 border-2 px-7 py-4 text-sm font-black uppercase tracking-tighter transition-all duration-200 active:scale-95 md:min-h-18 md:px-10 md:text-base ${classes} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  )
}