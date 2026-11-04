import Link from 'next/link'

export default function SectionButton({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[48px] h-[48px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-6 text-[14px] font-medium leading-none text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98] w-full sm:w-auto shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        aria-hidden="true"
        className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-1.5"
      >
        &rarr;
      </span>
    </Link>
  )
}
