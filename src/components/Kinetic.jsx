import Link from 'next/link'

function humanizeServiceCopy(value = '') {
  return String(value)
    .replace(/Core Service Pillar/gi, 'Complete solution')
    .replace(/Core Pillar Engine/gi, 'Complete solution')
    .replace(/Sub-Service/gi, 'Focused service')
    .replace(/Sub-Services/gi, 'Focused services')
    .replace(/Specialized Sub-Services Included/gi, 'Focused services included')
    .replace(/View Full Pillar/gi, 'View complete solution')
}

const LONG_TITLE_LENGTH = 48
const HYBRID_TITLE_LENGTH = 30

export function PageHero({ eyebrow, title, children, meta, number = '360', actions = null, className = '', ambientVisual = null }) {
  const isCompactHero = className.includes('compact-hero')
  const titleLength = typeof title === 'string' ? title.length : 0
  const isLongTitle = titleLength > LONG_TITLE_LENGTH
  const isLikelyMultiline = Boolean(typeof title === 'string' && title.split(/\s+/).length > 8)
  const headlineScale =
    'font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.0] tracking-tight text-white [text-wrap:balance]'
  const hasCustomPadding = /(^|\s)(p[xty]?|md:p[xty]?)-/.test(className)
  const padding = hasCustomPadding ? '' : 'pb-16 pt-28 sm:pt-36 md:pb-24 md:pt-40 lg:pt-44'
  return (
    <section className={`relative isolate overflow-hidden border-b border-white/[0.08] bg-[#09090B] px-4 text-white sm:px-6 md:px-8 ${padding} ${className}`}>
      {/* Background radial ambient glow (identical to HomeHero) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(168,85,247,0.22),transparent)]"
        aria-hidden="true"
      />

      {/* Cyber-luxury grid overlay (identical to HomeHero) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 fc-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Modern Background Watermark with smooth fade */}
      <div
        className="pointer-events-none absolute right-0 top-6 -z-10 select-none font-heading text-[48vw] font-bold leading-none tracking-[-0.045em] text-white/[0.02] md:-right-6 md:top-10 md:text-[24vw]"
        aria-hidden="true"
      >
        {number}
      </div>

      {/* Floating 3D Ambient Canvas Visual */}
      {ambientVisual && (
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:justify-end lg:pr-8 xl:pr-24 select-none overflow-hidden"
          aria-hidden="true"
        >
          {ambientVisual}
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Top Status Row */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mb-12 border-b border-white/10 pb-5">
          <div className="flex flex-wrap items-center gap-3">
            {eyebrow ? (
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-frame-accent">
                {humanizeServiceCopy(eyebrow)}
              </span>
            ) : (
              <span className="rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-frame-accent">
                Dhaka Studio · Integrated System
              </span>
            )}
            {meta && <span className="hidden text-xs text-zinc-600 sm:inline">|</span>}
            {meta && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                {humanizeServiceCopy(meta)}
              </p>
            )}
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Operating Worldwide</span>
          </div>
        </div>

        <div className="flex w-full flex-col items-center text-center">
          {title && (
            <h1 className={`w-full max-w-5xl [overflow-wrap:anywhere] ${headlineScale}`}>
              {title}
            </h1>
          )}
          <div className="mt-8 flex max-w-3xl flex-col items-center gap-8">
            {children && <div className="text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">{children}</div>}
            {actions && <div className="flex flex-wrap justify-center gap-4">{actions}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children, className = '' }) {
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-widest text-frame-accent ${className}`}>
      {children}
    </p>
  )
}

export function SectionIntro({ eyebrow, title, children = null, className = '', index = null, align = 'left' }) {
  const center = align === 'center'
  return (
    <div className={`mb-14 md:mb-20 max-w-4xl ${center ? 'mx-auto text-center md:max-w-5xl' : ''} ${className}`}>
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white [text-wrap:balance] ${center ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-5 max-w-3xl text-base sm:text-lg font-normal leading-relaxed text-zinc-300 ${center ? 'mx-auto' : ''}`}>
          {children}
        </p>
      )}
    </div>
  )
}

export function PosterButton({ href, children, variant = 'accent', className = '', onClick, type }) {
  const isFullWidth = className.includes('w-full')
  const isNowrap = className.includes('whitespace-nowrap')
  const widthClasses = isFullWidth ? 'w-full' : isNowrap ? 'w-auto max-w-full' : 'w-full sm:w-auto'
  const hPad = isNowrap ? 'px-4' : 'px-6 md:px-8'
  const base =
    `group sw-btn min-h-[52px] h-[52px] ${widthClasses} items-center justify-center ${hPad} text-center text-[15px] font-medium leading-none transition-colors duration-200`
  const variants = {
    accent: 'sw-btn-primary',
    outline: 'sw-btn-outline',
    dark: 'sw-btn-primary',
    luxury: 'sw-btn-primary',
  }
  const classes = `${base} ${variants[variant]} ${className}`
  let cleanChildren = children
  if (typeof children === 'string') {
    cleanChildren = children.replace(/\s*(?:&rarr;|→|â†’|->|\u2192)\s*$/u, '').trim()
  }
  const content = <><span className="min-w-0 truncate">{cleanChildren}</span><span aria-hidden="true" className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></>

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}

export function TypeMarquee({ items, reverse = false, slow = false }) {
  if (!items || items.length === 0) return null

  const count = items.length
  const multiplier = count >= 6 ? 1 : Math.ceil(6 / count)
  const base = Array(multiplier).fill(items).flat()
  const repeated = [...base, ...base]

  return (
    <section className="kinetic-marquee relative isolate overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-8 text-white">
      <div
        className={`kinetic-marquee-track hover:[animation-play-state:paused] ${slow ? 'kinetic-marquee-track-slow' : ''} ${reverse ? 'kinetic-marquee-track-rtl' : ''}`}
        aria-hidden="true"
      >
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
            <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-white">
              {item}
            </span>
            <span className="text-zinc-500">&middot;</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function InversionCard({ eyebrow, title, children, number, href }) {
  const titleClasses = [
    number ? 'mt-6' : 'mt-4',
    href ? '' : 'relative z-10',
    'font-heading text-xl font-medium leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-frame-accent sm:text-2xl',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {number && (
        <p className="relative z-0 font-mono text-xs font-medium tracking-wider text-frame-accent tabular-nums" aria-hidden="true">
          {number}
        </p>
      )}
      <h3 className={titleClasses}>
        {href ? (
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      {children && <div className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">{children}</div>}
    </>
  )

  const classes = `group min-h-72 border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#151518]${href ? ' relative' : ''}`

  return <article className={classes}>{content}</article>
}

export function CTASection({ eyebrow = 'Strategy', title = 'Ready to build what comes next?', children = null, primaryText = 'Book a strategy call', secondaryText = 'Send a brief' }) {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
              {title}
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0"
            >
              &rarr;
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              {children || 'Tell us what you are building, selling, launching, or fixing. We will shape the strategy, content, technology, and marketing path around it.'}
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">{primaryText}</PosterButton>
              <PosterButton href="/contact" variant="outline">
                {secondaryText}
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
