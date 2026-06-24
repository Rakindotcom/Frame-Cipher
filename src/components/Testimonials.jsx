import { testimonials } from '../data/agency'

function getProofLabel(source) {
  if (source === 'Facebook') return 'Public mention'
  if (source === 'WhatsApp') return 'Client note'
  return 'Client signal'
}

export default function Testimonials({
  eyebrow = 'Testimonial feed',
  title = 'What people are saying.',
  description = "A growing wall of public mentions, client notes, and social proof from people who have seen Frame Cipher's work in motion.",
  className = '',
}) {
  return (
    <section className={`border-y-2 border-frame-border bg-frame-bg px-4 py-18 text-frame-fg md:px-8 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase text-frame-accent">
              {eyebrow}
            </p>
            <h2 className="font-heading text-[clamp(2.6rem,6.5vw,6.2rem)] font-bold uppercase leading-[0.86] text-frame-fg">
              {title}
            </h2>
          </div>
          <div className="border-l-2 border-frame-border pl-6">
            <p className="max-w-3xl text-base font-medium leading-snug text-frame-muted-fg md:text-2xl">
              {description}
            </p>
          </div>
        </div>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.date}`}
              className="group min-h-[25rem] bg-frame-bg p-5 transition-colors duration-300 hover:bg-frame-accent md:p-6"
            >
              <div className="flex h-full flex-col">
                <header className="grid gap-5">
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-16 w-16 shrink-0 border-2 border-frame-border object-cover transition-colors duration-300 group-hover:border-frame-accent-fg"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-black leading-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 max-w-sm text-sm font-semibold leading-snug text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="border-2 border-frame-border px-3 py-2 text-xs font-black uppercase text-frame-accent transition-colors duration-300 group-hover:border-frame-accent-fg group-hover:text-frame-accent-fg">
                      {getProofLabel(testimonial.source)}
                    </p>
                    <p className="border-2 border-frame-border px-3 py-2 text-xs font-black uppercase text-frame-muted-fg transition-colors duration-300 group-hover:border-frame-accent-fg/60 group-hover:text-frame-accent-fg/80">
                      {testimonial.source}
                    </p>
                  </div>
                </header>

                <blockquote className="relative mt-8 pl-5 font-quote text-[1.15rem] font-medium italic leading-[1.22] text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-[1.45rem]">
                  <span className="absolute left-0 top-0 text-[1.45em] font-bold not-italic leading-none text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/70">"</span>
                  {testimonial.quote}
                  <span className="font-bold not-italic text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/70">"</span>
                </blockquote>

                <footer className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-frame-border px-3 py-2 text-[10px] font-black uppercase text-frame-muted-fg transition-colors duration-300 group-hover:border-frame-accent-fg/50 group-hover:text-frame-accent-fg/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t-2 border-frame-border pt-5 transition-colors duration-300 group-hover:border-frame-accent-fg/50">
                    <p className="text-xs font-bold text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                      {testimonial.date}
                    </p>
                    <p className="text-right text-xs font-black uppercase text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                      Captured feedback
                    </p>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
