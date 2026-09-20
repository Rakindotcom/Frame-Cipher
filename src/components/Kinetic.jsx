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

export function PageHero({ eyebrow, title, children, meta, number = '360', actions }) {
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-frame-border px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 z-0 h-24 w-1.5 bg-gradient-to-b from-frame-accent via-frame-accent/60 to-transparent md:top-16"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 z-0 h-24 w-1.5 bg-gradient-to-b from-frame-accent/60 to-transparent md:top-16"
      />
      <div className="pointer-events-none absolute -right-6 top-24 -z-10 select-none font-heading text-[36vw] font-bold leading-none tracking-tighter text-frame-muted/70 md:top-8 md:text-[24vw]" aria-hidden="true">
        {number}
      </div>
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 border-b-2 border-frame-border pb-5 md:gap-8">
          <SectionLabel>{humanizeServiceCopy(eyebrow)}</SectionLabel>
          {meta && <span className="text-frame-muted-fg opacity-50">/</span>}
          {meta && <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-muted-fg md:text-base">{humanizeServiceCopy(meta)}</p>}
        </div>
        
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="w-full max-w-6xl [overflow-wrap:anywhere] font-heading text-[clamp(2.45rem,7.8vw,7.8rem)] font-bold uppercase leading-[0.84] tracking-tighter text-frame-fg">
            {title}
          </h1>
          <div className="mt-8 flex max-w-4xl flex-col items-center gap-8">
            {children && <p className="text-lg font-medium leading-snug text-frame-muted-fg md:text-2xl">{children}</p>}
            {actions && <div className="flex flex-wrap justify-center gap-4">{actions}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-sm font-black uppercase tracking-[0.28em] text-frame-accent ${className}`}>
      {children}
    </p>
  )
}

export function SectionIntro({ eyebrow, title, children, className = '', index, align = 'left' }) {
  const center = align === 'center'
  return (
    <div className={`mb-14 md:mb-20 max-w-4xl ${center ? 'mx-auto text-center md:max-w-5xl' : ''} ${className}`}>
      <div className={`flex items-center gap-4 ${center ? 'justify-center' : ''}`}>
        {index && (
          <span
            aria-hidden="true"
            className={`select-none font-heading text-4xl font-bold leading-none tracking-tighter md:text-6xl ${center ? 'text-frame-accent' : 'text-frame-muted/60'}`}
          >
            {index}
          </span>
        )}
        <span
          aria-hidden="true"
          className={`h-0.5 w-10 flex-none bg-frame-accent md:w-16 ${center ? 'hidden' : ''}`}
        />
        <SectionLabel>{eyebrow}</SectionLabel>
        {center && <span aria-hidden="true" className="h-0.5 w-10 flex-none bg-frame-accent md:w-16" />}
      </div>
      <h2 className={`mt-4 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg ${center ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {children && (
        <p className={`mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl ${center ? 'mx-auto' : ''}`}>
          {children}
        </p>
      )}
    </div>
  )
}

export function PosterButton({ href, children, variant = 'accent', className = '', onClick, type }) {
  const isFullWidth = className.includes('w-full')
  const widthClasses = isFullWidth ? 'w-full' : 'w-full sm:w-auto'
  const base =
    `inline-flex min-h-14 ${widthClasses} items-center justify-center whitespace-nowrap border-2 px-8 py-4 text-center text-sm font-black uppercase tracking-tighter transition-all duration-200 active:scale-95 md:min-h-18 md:px-12 md:text-base`
  const variants = {
    accent: 'border-frame-accent bg-frame-accent text-frame-accent-fg hover:scale-[1.02] hover:bg-transparent hover:text-frame-fg',
    outline:
      'border-frame-border bg-transparent text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg hover:scale-[1.02]',
    dark: 'border-frame-accent-fg bg-frame-accent-fg text-frame-accent hover:bg-frame-bg hover:text-frame-fg hover:scale-[1.02]',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type || 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export function TypeMarquee({ items, reverse = false, slow = false }) {
  if (!items || items.length === 0) return null

  // Ensure enough items to fill wide displays, then duplicate base exactly once for a 50% seamless infinite loop
  const count = items.length
  const multiplier = count >= 6 ? 1 : Math.ceil(6 / count)
  const base = Array(multiplier).fill(items).flat()
  const repeated = [...base, ...base]

  return (
    <section className="kinetic-marquee border-y-2 border-frame-border bg-frame-accent py-6 text-frame-accent-fg">
      <div
        className={`kinetic-marquee-track ${slow ? 'kinetic-marquee-track-slow' : ''} ${reverse ? 'kinetic-marquee-track-rtl' : ''}`}
        aria-hidden="true"
      >
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
            <span className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-none tracking-tighter text-frame-accent-fg">
              {item}
            </span>
            <span className="h-4 w-4 shrink-0 bg-frame-accent-fg" />
          </div>
        ))}
      </div>
    </section>
  )
}

export function InversionCard({ eyebrow, title, children, number, href }) {
  const content = (
    <>
      {number && (
        <p className="relative z-0 font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-6xl" aria-hidden="true">
          {number}
        </p>
      )}
      {eyebrow && <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/70">{eyebrow}</p>}
      <h3 className={`${number ? 'mt-6' : 'mt-4'} relative z-10 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-2xl md:text-3xl`}>
        {title}
      </h3>
      {children && <div className="mt-5 text-base font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">{children}</div>}
    </>
  )

  const classes = 'group min-h-72 bg-frame-bg p-7 transition-colors duration-300 hover:bg-frame-accent'

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return <article className={classes}>{content}</article>
}

export function CTASection({ eyebrow = 'Next move', title, children, primaryText = 'Book a strategy call', secondaryText = 'Send a brief' }) {
  return (
    <section className="border-t-2 border-frame-border px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-12">
          <SectionLabel className="mb-5">{eyebrow}</SectionLabel>
          <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
            {title}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            {children && <p className="max-w-4xl text-base font-medium leading-snug text-frame-muted-fg md:text-xl">{children}</p>}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <PosterButton href="/contact">{primaryText}</PosterButton>
              <PosterButton href="/contact" variant="outline">{secondaryText}</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
