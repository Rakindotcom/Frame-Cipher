import { testimonials } from '../data/agency'

export default function Testimonials({
  eyebrow = 'Testimonial feed',
  title = 'What people are saying.',
  description = "A growing wall of public mentions, client notes, and social proof from people who have seen Frame Cipher's work in motion.",
  className = '',
}) {
  return (
    <section className={`relative isolate overflow-hidden border-b-2 border-frame-border bg-frame-bg px-4 py-20 text-frame-fg md:px-8 md:py-28 ${className}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(168,85,247,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-white/30" aria-hidden="true" />

      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              {eyebrow}
            </p>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,8rem)] font-bold uppercase leading-[0.82] text-frame-fg">
              {title}
            </h2>
          </div>
          <div className="border-l-2 border-white/15 pl-6">
            <p className="max-w-4xl text-lg font-semibold leading-tight text-frame-muted-fg md:text-3xl">
              {description}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.date}`}
              className="group min-h-[24rem] border border-white/15 bg-white/[0.07] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-frame-accent/60 hover:bg-white/[0.1] md:p-6"
            >
              <div className="flex h-full flex-col">
                <header className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-14 w-14 shrink-0 rounded-full border border-white/20 object-cover"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-base font-black leading-tight text-frame-fg">
                          {testimonial.name}
                        </h3>
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#1d9bf0] text-[10px] font-black leading-none text-white" aria-label="Verified">
                          V
                        </span>
                      </div>
                      <p className="mt-1 max-w-sm text-sm font-semibold leading-snug text-frame-muted-fg">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                  <p className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-frame-muted-fg">
                    {testimonial.source}
                  </p>
                </header>

                <blockquote className="mt-8 text-xl font-semibold leading-snug text-frame-fg md:text-2xl">
                  {testimonial.quote}
                </blockquote>

                <footer className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/15 bg-white/[0.06] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-frame-muted-fg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                    <p className="text-xs font-bold text-frame-muted-fg">
                      {testimonial.date}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-frame-muted-fg" aria-label="Social engagement style indicators">
                      <span>Reply</span>
                      <span>Share</span>
                      <span className="text-frame-accent">Proof</span>
                    </div>
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
