import Link from 'next/link'

const featuredWebsites = [
  {
    name: 'Jarixo',
    domain: 'jarixo.com',
    url: 'https://jarixo.com/',
    category: 'Wellness e-commerce',
    screenshot: '/website-shots/jarixo.com.png',
    summary: 'A calm, premium storefront for everyday recovery products, built around trust, product discovery, and a smoother buying journey.',
  },
  {
    name: 'Dr. Ferdoush Saleheen',
    domain: 'ferdoushsaleheen.com',
    url: 'https://ferdoushsaleheen.com/',
    category: 'Personal brand website',
    screenshot: '/website-shots/ferdoush-saleheen.webp',
    summary: 'A bilingual personal platform for books, podcasts, research, and public thought leadership.',
  },
  {
    name: 'Hotel Ashrafee',
    domain: 'hotelashrafee.com',
    url: 'https://www.hotelashrafee.com/',
    category: 'Hospitality website',
    screenshot: '/website-shots/hotel-ashrafee.webp',
    summary: 'A clear hospitality experience for rooms, location, enquiries, and direct guest trust.',
  },
]

export default function WebsitePortfolioPreview({
  eyebrow = 'Selected website work',
  title = 'Websites built to move people forward.',
  description = null,
  buttonText = 'View more websites →',
  buttonHref = '/projects#website-work',
}) {
  return (
    <section id="website-portfolio" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">{eyebrow}</p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base md:text-lg font-medium text-frame-muted-fg leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <Link
            href={buttonHref}
            className="inline-flex min-h-12 items-center justify-center border-2 border-frame-border px-5 py-3 text-center text-sm font-black uppercase tracking-tighter text-frame-fg transition hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg shrink-0"
          >
            {buttonText}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredWebsites.map((site) => (
            <article key={site.domain} className="group overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors hover:border-frame-accent">
              <a href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.name}`}>
                <div className="flex items-center gap-2 border-b-2 border-frame-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-frame-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-frame-muted-fg/30" />
                  <span className="ml-2 truncate text-xs font-black uppercase tracking-[0.16em] text-frame-muted-fg">{site.domain}</span>
                </div>
                <div className="aspect-video overflow-hidden bg-frame-muted">
                  <img src={site.screenshot} alt={`${site.name} website screenshot`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
              </a>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">{site.category}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg">{site.name}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{site.summary}</p>
                <a href={site.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-black uppercase tracking-tighter text-frame-fg transition hover:text-frame-accent">Visit website &rarr;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
