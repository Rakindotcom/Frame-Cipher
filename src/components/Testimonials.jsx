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
    <section className={`relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              {title}
            </h2>
          </div>
          <div className="border-l border-white/[0.08] pl-6">
            <p className="max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Multi-column grid of testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.date}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.18] sm:p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                {/* Author Identity & Avatar */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-lg border border-white/[0.08] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-medium tracking-tight text-white transition-colors group-hover:text-violet-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs font-normal leading-snug text-zinc-400">
                      {testimonial.profession}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-300">
                        {getProofLabel(testimonial.source)}
                      </span>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        {testimonial.source}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quotation */}
                <blockquote className="my-6 font-sans text-base font-normal leading-relaxed text-zinc-200 sm:text-lg">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              {/* Card Footer: Tags & Date */}
              <div className="border-t border-white/[0.08] pt-4">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {testimonial.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {testimonial.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Verified
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
