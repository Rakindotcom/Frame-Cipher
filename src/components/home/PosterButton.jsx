import Link from 'next/link'

export default function PosterButton({ href = '', children, variant = 'primary', className = '', onClick = undefined, type = undefined }) {
  const isPrimary = variant === 'accent' || variant === 'primary'

  const variantClasses = variant === 'white'
    ? 'rounded-lg bg-white text-zinc-950 hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 shadow-sm'
    : isPrimary
    ? 'rounded-lg bg-purple-600 text-white hover:bg-purple-700 active:scale-[0.98] transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-purple-600'
    : 'rounded-lg border border-white/[0.12] bg-white/[0.04] text-white hover:border-purple-600/50 hover:bg-purple-600/10 active:scale-[0.98] transition-all duration-200'

  // If children is a string or contains a trailing arrow, strip it so it never renders a duplicate arrow
  let cleanChildren = children
  if (typeof children === 'string') {
    cleanChildren = children.replace(/[→\u2192]|&rarr;|->/g, '').trim()
  }

  const content = (
    <>
      <span className="inline-flex min-w-0 items-center whitespace-nowrap truncate">
        {cleanChildren}
      </span>
      <span
        aria-hidden="true"
        className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-1.5"
      >
        &rarr;
      </span>
    </>
  )

  const hasCustomWidth = /(?:^|\s)(w-full|w-\S+|max-w-\S+)/.test(className)
  const widthClass = hasCustomWidth ? '' : 'w-full sm:w-auto'
  const hasCustomPadding = /(?:^|\s)(px-\S+|p-\S+)/.test(className)
  const paddingClass = hasCustomPadding ? '' : 'px-5 py-2.5'
  const hasCustomTextSize = /(?:^|\s)text-(xs|sm|base|lg|xl|\[\S+\])/.test(className)
  const textSizeClass = hasCustomTextSize ? '' : 'text-sm sm:text-[15px]'
  const shrinkClass = hasCustomWidth ? 'min-w-0' : 'shrink-0'

  const commonClasses = `group inline-flex items-center justify-center min-h-[44px] h-[44px] ${paddingClass} ${textSizeClass} font-medium leading-none ${widthClass} ${shrinkClass} whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation ${variantClasses} ${className}`.replace(/\s+/g, ' ').trim()

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    if (isExternal) {
      return (
        <a href={href} className={commonClasses}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={commonClasses}>
      {content}
    </button>
  )
}
