import Link from 'next/link'

export default function SectionButton({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[44px] h-[44px] items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-medium leading-none text-white backdrop-blur-sm transition-all duration-200 hover:border-purple-600/50 hover:bg-purple-600/10 hover:text-white active:scale-[0.98] w-full sm:w-auto shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        aria-hidden="true"
        className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1.5 shrink-0 ml-1.5 text-zinc-400 group-hover:text-purple-600"
      >
        &rarr;
      </span>
    </Link>
  )
}
