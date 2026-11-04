import Link from 'next/link'

export default function PosterButton({ href = '', children, variant = 'accent', className = '', onClick = undefined, type = undefined }) {
  const isPrimary = variant === 'accent' || variant === 'primary'

  const variantClasses = isPrimary
    ? 'rounded-full bg-[#FAFAFA] text-[#09090B] hover:bg-white active:scale-[0.98] transition-colors duration-200 shadow-sm'
    : 'rounded-full border border-white/[0.14] bg-white/[0.03] text-white hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98] transition-colors duration-200'

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
        className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-1.5"
      >
        &rarr;
      </span>
    </>
  )

  const hasCustomWidth = /(?:^|\s)(w-full|w-\S+|max-w-\S+)/.test(className)
  const widthClass = hasCustomWidth ? '' : 'w-full sm:w-auto'
  const hasCustomPadding = /(?:^|\s)(px-\S+|p-\S+)/.test(className)
  const paddingClass = hasCustomPadding ? '' : 'px-6'
  const hasCustomTextSize = /(?:^|\s)text-(xs|sm|base|lg|xl|\[\S+\])/.test(className)
  const textSizeClass = hasCustomTextSize ? '' : 'text-[15px]'
  const shrinkClass = hasCustomWidth ? 'min-w-0' : 'shrink-0'

  const commonClasses = `group inline-flex items-center justify-center min-h-[48px] h-[48px] ${paddingClass} ${textSizeClass} font-medium leading-none ${widthClass} ${shrinkClass} whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation ${variantClasses} ${className}`.replace(/\s+/g, ' ').trim()

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
