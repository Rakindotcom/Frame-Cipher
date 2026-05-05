import Link from 'next/link'

export function PageHero({ eyebrow, title, children, meta, number = '360', actions }) {
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-frame-border px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
      <div className="absolute -right-6 top-24 -z-10 font-heading text-[36vw] font-bold leading-none tracking-tighter text-frame-muted md:top-8 md:text-[24vw]" aria-hidden="true">
        {number}
      </div>
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 border-b-2 border-frame-border pb-5 md:gap-8">
          <SectionLabel>{eyebrow}</SectionLabel>
          {meta && <span className="text-frame-muted-fg opacity-50">/</span>}
          {meta && <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-muted-fg md:text-base">{meta}</p>}
        </div>
        
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="font-heading text-[clamp(2.8rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            {title}
          </h1>
          <div className="mt-8 flex flex-col items-center gap-8">
            {children && <p className="max-w-3xl text-lg font-medium leading-snug text-frame-muted-fg md:text-2xl">{children}</p>}
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

export function SectionIntro({ eyebrow, title, children, className = '' }) {
  return (
    <div className={`mb-12 max-w-[95vw] ${className}`}>
      <SectionLabel className="mb-4">{eyebrow}</SectionLabel>
      <h2 className="font-heading text-[clamp(1.8rem,5vw,3.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
        {title}
      </h2>
      {children && <p className="mt-5 max-w-3xl text-base font-medium leading-snug text-frame-muted-fg md:text-lg">{children}</p>}
    </div>
  )
}

export function PosterButton({ href, children, variant = 'accent', className = '', onClick, type }) {
  const base =
    'inline-flex min-h-14 items-center justify-center border-2 px-8 py-4 text-center text-sm font-black uppercase tracking-tighter transition-all duration-200 active:scale-95 md:min-h-20 md:px-12 md:text-lg'
  const variants = {
    accent: 'border-frame-accent bg-frame-accent text-frame-accent-fg hover:scale-105',
    outline:
      'border-frame-border bg-transparent text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-accent-fg',
    dark: 'border-frame-accent-fg bg-frame-accent-fg text-frame-accent hover:bg-frame-bg hover:text-frame-fg',
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

export function TypeMarquee({ items, reverse = false, accent = false, slow = false }) {
  const repeated = [...items, ...items, ...items]

  return (
    <section className={`kinetic-marquee border-y-2 border-frame-border py-6 ${accent ? 'bg-frame-accent text-frame-accent-fg' : 'bg-frame-bg text-frame-fg'}`}>
      <div
        className={`kinetic-marquee-track ${slow ? 'kinetic-marquee-track-slow' : ''} ${reverse ? 'kinetic-marquee-track-reverse' : ''}`}
        aria-hidden="true"
      >
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 px-6">
            <span className={`font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-none tracking-tighter ${accent ? 'text-frame-accent-fg' : 'text-frame-muted'}`}>
              {item}
            </span>
            <span className={`h-4 w-4 ${accent ? 'bg-frame-accent-fg' : 'bg-frame-accent'}`} />
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
        <p className="font-heading text-[3.5rem] font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg" aria-hidden="true">
          {number}
        </p>
      )}
      {eyebrow && <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/70">{eyebrow}</p>}
      <h3 className={`${number ? 'mt-6' : 'mt-4'} font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-2xl`}>
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
